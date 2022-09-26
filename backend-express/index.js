import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongodb from 'mongodb'
import GamesDAO from './dao/GamesDAO.js'
import GamesController from './api/GamesController.js'

dotenv.config();

const app = express();
const router = express.Router();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());


router.route('/').get(GamesController.getGames)
router.route('/add').post(GamesController.addGame)

app.use('/api/v1/games', router);

app.use('*', (req, res) => {
    res.status(404).json({ error: 'not found'});
});


const client = new mongodb.MongoClient(process.env.TTASTATS_DB_URI);

try {
    await client.connect(); 
    await GamesDAO.injectDB(client);
    console.log(`mongo successfully connected`);
} catch (e) {
    console.error(e);
    process.exit(1);
}

app.listen(port, () => {
    console.log(`tta stats backend is running on port: ${port}`);
    });
