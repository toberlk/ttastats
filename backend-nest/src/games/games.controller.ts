import { Controller, Get, BadRequestException, Body, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { MongoRepository } from 'typeorm'
import { Game } from 'src/models/game.entity';

@Controller('api/v1/games')
export class GamesController {
    constructor(
        @InjectRepository(Game)
        private readonly gamesRepository: MongoRepository<Game>
    ) {}

    @Get()
    async getGames(): Promise<{ games: Game[] }> {
        const games =  await this.gamesRepository.find();
        return { games: games };
    }

    @Post('/add')
    async addGame(@Body() gameJson: Partial<Game>): Promise<Game> {
        console.log("GamesController:add game called")

        gameJson.players = gameJson.players.sort((p1, p2) => p1.seat-p2.seat);
        gameJson.playerNames = gameJson.players.map((r) =>r.player)

        const dateProps = {
            created: new Date(),
            finishedOn: gameJson.finishedOn ? new Date(gameJson.finishedOn) : null
        }

        const gameDoc = { ...gameJson, ...dateProps };

        const result = await this.gamesRepository.save(new Game(gameDoc))

        return result;
    }

    @Get('/stats')
    async stats() {
        console.log("stats requested");

        const pipeline = [
            { $group: { _id: "$type", count: { $sum: 1 } } }
        ];

        const aggCursor = await this.gamesRepository.aggregate(pipeline);
        
        const statsRes = await aggCursor.toArray();
 
        const stats = { 'tot': 0, '2p': 0, '3p': 0, '4p': 0, 'updated': new Date() };

        statsRes.forEach(agg => stats[agg._id] = agg.count)
        stats.tot = stats['2p']+stats['3p']+stats['4p'];

        // const lastUpdateDate = await GamesDAO.collectionLastUpdateDate()
        //stats.updated = new Date();
        
        return stats;

   }

    
}
