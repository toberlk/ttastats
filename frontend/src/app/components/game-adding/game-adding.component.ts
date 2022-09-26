import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Game, PlayerResult, GameType } from 'src/app/interfaces/game';
import { GamesService } from 'src/app/services/game.service';

@Component({
  selector: 'app-game-adding',
  templateUrl: './game-adding.component.html',
  styleUrls: ['./game-adding.component.css']
})
export class GameAddingComponent implements OnInit {

  constructor(private fb: FormBuilder, private _gameService: GamesService) { }

  form = this.fb.group({
    gameType: ['2p', { nonNullable: true } ],
    finishedOn: ['', { nonNullable: true } ],
    origin: ['', { nonNullable: true } ],
    players: this.fb.array([this.mkPlayerForm(), this.mkPlayerForm()])
  });

  get players() {
    return this.form.controls["players"] as FormArray;
  }

  fillPlayers(gameType: string) {
    const pCount = parseInt(gameType);
    const currPlayers = this.players.length;

    const playersToAdd = pCount - currPlayers;
    for (let i=0;i<playersToAdd;i++) {
      this.players.push(this.mkPlayerForm());
    }

    const playersToRemove = - playersToAdd;
    for (let i=0;i<playersToRemove;i++) {
      this.players.removeAt(-1);
    }
      
  }

  mkPlayerForm(): FormGroup {
    return this.fb.group({
      name: ['', { nonNullable: true}],
      score: ['', { nonNullable: true}],
      seat: ['', { nonNullable: true}],
      leaders: ['', { nonNullable: true}],
      wonders: ['', { nonNullable: true}],
    })
  }

  is3player = false;

  is4player = false;

  addGame() {

    let gameType = this.form.controls.gameType.value as GameType; //TODO to be calculated

    let pCount: number = parseInt(gameType);


    //const finishedOn = this.form.controls.finishedOn.value ? new Date(this.form.controls.finishedOn.value) : null;
    const finishedOn = this.form.controls.finishedOn.value;

    console.log(this.form.controls.players);
    console.log(this.form.controls.players.controls[0].controls['name']);

    const players = this.form.controls.players.controls.map(pc => {
      return {
        player: pc.controls['name'].value,
        seat: parseInt(pc.controls['seat'].value),
        finalScore: parseInt(pc.controls['score'].value),
        leaders: pc.controls['leaders'].value,
        wonders: pc.controls['wonders'].value
      };
    }).sort((p1, p2) =>(p2.finalScore-p1.finalScore)*1000+(p2.seat-p1.seat))
    .map((p, i) => { 
      return { ...p, ...{
          finalPosition: i + 1,
          winner: i === 0,
          normalizedScore: this.calcNormalizedScore(gameType, i + 1)
        }
      }
    });

    console.log("players", players)

    const game = {
      author: 'lukaszt', //TODO logged user
      finishedOn: finishedOn,
      origin: this.form.controls.origin.value,
      type: gameType,
      players: players,
      winner: players[0].player
    }

    const res = this._gameService.addGame(game);

    res.subscribe((res)=>console.log("Add game call completed", res))

    console.log(game);
  }

  calcNormalizedScore(gameType: GameType, fposition: number) {
    const normalizationTable = {
      '2p': [1, 0],
      '3p': [1, 0.4, 0],
      '4p': [1, 0.5, 0.16, 0]
    };
    return normalizationTable[gameType][fposition-1];
  }

  ngOnInit(): void {

    this.form.controls['gameType'].valueChanges.subscribe((value) => {
      console.log(`game type changed to ${value}`)
      this.is4player = (value ==='4p');
      this.is3player = (value ==='4p' || value === '3p');
      this.fillPlayers(value as string);
    });

  }

}
