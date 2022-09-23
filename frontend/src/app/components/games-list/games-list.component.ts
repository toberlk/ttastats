import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/interfaces/game';
import { GameLibStats } from 'src/app/interfaces/game-lib-stats';
import { GamesService } from 'src/app/services/game.service';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})
export class GamesListComponent implements OnInit {

  constructor(private _gameService: GamesService) {
    this._gameService = _gameService;
   }

  gameLibStats: GameLibStats = {
    lastUpdated: new Date(),
    gamesTotal: 3,
    gamesOf2p: 2,
    gamesOf3p: 0,
    gamesOf4p: 1,
  };

  ngOnInit(): void {
    this.getGames();
  }

  games: Game[] = [];
  

  getGames() {
    this._gameService.find().subscribe((data)=>{ this.games = data.games });
  }

}
