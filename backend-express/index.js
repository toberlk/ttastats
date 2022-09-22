import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const router = express.Router();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());


router.route('/').get((req, res) => res.send('hello'))
app.use('/api/v1/games', router);

app.use('*', (req, res) => {
    res.status(404).json({ error: 'not found'});
});


app.listen(port, () => {
    console.log(`tta stats backend is running on port: ${port}`);
    });

