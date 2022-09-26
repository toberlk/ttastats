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

            gameJson.playerNames = gameJson.players.map((r) =>r.player)
            gameJson.players = gameJson.players.sort((p1, p2) => p1.seat-p2.seat);

            const dateProps = {
                created: new Date(),
                finishedOn: req.body.finishedOn ? new Date(req.body.finishedOn) : null
            }

            const gameDoc = { ...gameJson, ...dateProps };

            GamesDAO.addGameRecord(gameDoc);

            res.json({ status: 'success' });
        } catch (e) {
            console.error(e);
            res.status(500).json({ error: e. message });
        }
    }

}