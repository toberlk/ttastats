import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-game-adding',
  templateUrl: './game-adding.component.html',
  styleUrls: ['./game-adding.component.css']
})
export class GameAddingComponent implements OnInit {

  constructor() { }

  controls = {
    p1name: new FormControl(''),
    p1score: new FormControl(''),
    p1seat: new FormControl(''),
    p1leaders: new FormControl(''),
    p1wonders: new FormControl(''),
  }

  form = new FormGroup(this.controls);

  addGame() {
    console.log("form submitted");
    console.log(this.controls);
    alert("form submitted!")
  }

  ngOnInit(): void {
  }

}
