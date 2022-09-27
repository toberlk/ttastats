import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/interfaces/game';
import { emptyStats, GameLibStats } from 'src/app/interfaces/game-lib-stats';
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
  
  ngOnInit(): void {
    this.getGames();
    this.getStats();
  }

  games: Game[] = [];

  stats: GameLibStats = emptyStats;
  

  getGames() {
    this._gameService.find().subscribe((data)=>{ this.games = data.games });
  }

  getStats() {
    this._gameService.stats().subscribe( (data) => { this.stats = data } );
  }

}
