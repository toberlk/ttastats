import mongodb, { MongoDriverError } from 'mongodb'

export default class GamesDAO {

    static gamesCollection;
    static ObjectId = mongodb.ObjectId;
    
    static async injectDB(conn) {
        console.log('Initializing db handle for Games collection')
        if (GamesDAO.gamesCollection) return
        try {
            GamesDAO.gamesCollection = await conn.db(process.env.TTASTATS_NS).collection('games')
            console.log('Mongo:tta_stats db:games collection initialized', GamesDAO.games)
        } catch (e) {
            console.error(`Mongo: unable to connect to tta_stats/games db: ${e}`)
        }
    }

    static async getGames({ filters = null, page = 0, itemsPerPage = 20 } = {}) {
        let query = {};
        let cursor;

        try {
            const totalResults = await GamesDAO.gamesCollection.countDocuments(query)
            cursor = await GamesDAO.gamesCollection.find(query)
                .sort({ created: -1 })
                .limit(itemsPerPage)
                .skip(itemsPerPage * page)
            const gamesList = await cursor.toArray()
            return { gamesList, totalResults }
        } catch (e) {
            console.error(`Mongo:tta_stats:games: Find command failed, ${e}`)
            return { gamesList: [], totalResults: 0 }
        }

    }

    static async addGameRecord(gameDoc) {
        try {
            return await GamesDAO.gamesCollection.insertOne(gameDoc);
        } catch (e) {
            console.log(`Mongo:tta_stats:games unable to add game ${e}`);
            return { error: e };
        }
    }

    static async stats() {
        try {
            const pipeline = [
                { $group: { _id: "$type", count: { $sum: 1 } } }
            ];
            const aggCursor = GamesDAO.gamesCollection.aggregate(pipeline);
            const stats = await aggCursor.toArray();
            return stats;
        } catch (e) {
            console.log(`Mongo:tta_stats:games - getting game count failed ${e}`);
            return { error: e };
        }
    }

    static async collectionLastUpdateDate() {
        try {
            const cursor = await GamesDAO.gamesCollection.find().limit(1).sort({created: -1});
            const lu = await cursor.toArray();
            return lu.length > 0 ? lu[0].created : null;
        } catch (e)  {
            console.log(`Mongo:tta_stats:games - getting last update date failed ${e}`);
            return { error: e };
        }
    }

}