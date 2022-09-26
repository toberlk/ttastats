
import GamesController from "./GamesController.js"



export default class GamesRoute {
    static configRoutes(router) {

        router.route('/').get(GamesController.apiGetGames)
        
        return router
    }
}