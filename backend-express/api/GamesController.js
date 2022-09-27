import GamesDAO from "../dao/GamesDAO.js";

export default class GamesController {
    static async getGames(req, res, next) {
        const itemsPerPage = req.query.itemsPerPage ? parseInt(req.query.itemsPerPage) : 20
        const page = req.query.page ? parseInt(req.query.page) : 0
        const filters = {}       

        const { gamesList, totalResults } = await GamesDAO.getGames(
            { filters, page, itemsPerPage },
        )

        const response = {
            games: gamesList,
            page,
            filters,
            entries_per_page: itemsPerPage,
            total_results: totalResults,
        }
        res.json(response)
    }

    static async addGame(req, res, next) {
        console.log("GamesController:add game called")
        try {
            const gameJson = req.body;

            
            gameJson.players = gameJson.players.sort((p1, p2) => p1.seat-p2.seat);
            gameJson.playerNames = gameJson.players.map((r) =>r.player)

            const dateProps = {
                created: new Date(),
                finishedOn: req.body.finishedOn ? new Date(req.body.finishedOn) : null
            }

            const gameDoc = { ...gameJson, ...dateProps };

            await GamesDAO.addGameRecord(gameDoc); // TODO await

            res.json({ status: 'success' });
        } catch (e) {
            console.error(e);
            res.status(500).json({ error: e. message });
        }
    }

    static async stats(req, res, next) {
        console.log("stats requested");
        try {
            const stats = { 'tot': 0, '2p': 0, '3p': 0, '4p': 0 };
            const statsRes = await GamesDAO.stats();
            statsRes.forEach(agg => stats[agg._id] = agg.count)
            stats.tot = stats['2p']+stats['3p']+stats['4p'];

            const lastUpdateDate = await GamesDAO.collectionLastUpdateDate()
            stats.updated = lastUpdateDate;
            res.json(stats);

        } catch (e) {
            console.error(e);
            res.status(500).json({ 'tot': 0, '2p': 0, '3p': 0, '4p': 0 })
        }
    }

}