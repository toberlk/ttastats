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

}