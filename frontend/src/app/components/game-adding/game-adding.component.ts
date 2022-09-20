import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Game, PlayerResult, GameType } from 'src/app/interfaces/game';

@Component({
  selector: 'app-game-adding',
  templateUrl: './game-adding.component.html',
  styleUrls: ['./game-adding.component.css']
})
export class GameAddingComponent implements OnInit {

  constructor() { }

  controls = {
    gameType: new FormControl('2p', { nonNullable: true}),
    finishedOn: new FormControl('', { nonNullable: true}),
    origin: new FormControl('', { nonNullable: true}),
    p1name: new FormControl('', { nonNullable: true}),
    p1score: new FormControl('', { nonNullable: true}),
    p1seat: new FormControl('', { nonNullable: true, }),
    p1leaders: new FormControl('', { nonNullable: true}),
    p1wonders: new FormControl('', { nonNullable: true}),
    p2name: new FormControl('', { nonNullable: true}),
    p2score: new FormControl('', { nonNullable: true}),
    p2seat: new FormControl('', { nonNullable: true}),
    p2leaders: new FormControl('', { nonNullable: true}),
    p2wonders: new FormControl('', { nonNullable: true}),
    p3name: new FormControl('', { nonNullable: true}),
    p3score: new FormControl('', { nonNullable: true}),
    p3seat: new FormControl('', { nonNullable: true}),
    p3leaders: new FormControl('', { nonNullable: true}),
    p3wonders: new FormControl('', { nonNullable: true}),
    p4name: new FormControl('', { nonNullable: true}),
    p4score: new FormControl('', { nonNullable: true}),
    p4seat: new FormControl('', { nonNullable: true}),
    p4leaders: new FormControl('', { nonNullable: true}),
    p4wonders: new FormControl('', { nonNullable: true}),
  }

  form = new FormGroup(this.controls);

  is3player = false;

  is4player = false;

  gameType = 2;

  getGameType() {
    console.log('get game called')
    return "2p";
  }

  addGame() {

    let gameType = this.controls.gameType.value as GameType; //TODO to be calculated
    const playerCount = 2;

    const winner = this.form.controls.p1name.value;
    const players = [
      this.controls.p1name.value, this.controls.p2name!.value
    ];

    const p1Result: PlayerResult = {
      player: this.controls.p1name.value,
      seat: parseInt(this.controls.p1seat.value),
      finalScore: parseInt(this.controls.p1score.value),
      finalPosition: 1,
      leaders: this.controls.p1leaders.value.split(" "),
      wonders: this.controls.p1wonders.value.split(" "),
      normalizedScore: this.calcNormalizedScore(gameType, 1)
    }

    const p2Result: PlayerResult = {
      player: this.controls.p2name.value,
      seat: parseInt(this.controls.p2seat.value),
      finalScore: parseInt(this.controls.p2score.value),
      finalPosition: 2,
      leaders: this.controls.p2leaders.value.split(" "),
      wonders: this.controls.p2wonders.value.split(" "),
      normalizedScore: this.calcNormalizedScore(gameType, 2)
    }

    const p3Result: PlayerResult = {
      player: this.controls.p3name.value,
      seat: parseInt(this.controls.p3seat.value),
      finalScore: parseInt(this.controls.p3score.value),
      finalPosition: 3,
      leaders: this.controls.p3leaders.value.split(" "),
      wonders: this.controls.p3wonders.value.split(" "),
      normalizedScore: this.calcNormalizedScore(gameType, 3)
    }

    const p4Result: PlayerResult = {
      player: this.controls.p4name.value,
      seat: parseInt(this.controls.p4seat.value),
      finalScore: parseInt(this.controls.p4score.value),
      finalPosition: 4,
      leaders: this.controls.p4leaders.value.split(" "),
      wonders: this.controls.p4wonders.value.split(" "),
      normalizedScore: this.calcNormalizedScore(gameType, 4)
    }


    const game: Game = {
      _id: '',
      _created: new Date(),
      author: 'lukaszt', //TODO logged user
      finishedOn: new Date(),
      origin: this.form.controls.origin.value,
      type: gameType,
      players: players,
      presults: [ p1Result, p2Result, p3Result, p4Result],
      winner: winner
    }

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
    });

    //this.form.controls['gameType'].setValue('2p');
  }

}
