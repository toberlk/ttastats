import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/interfaces/game';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})
export class GamesListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  get games(): Game[] {
    return [{
      "_id": "1",
      "_created": new Date("2022-09-16T12:17"),
      "author": "lukaszt",
      "origin": "laohuang TPGL",
      "type": "2p",
      "finishedOn": new Date("2022-09-16"),
      "players": ["Oprah", "lukaszt"],
      "winner": "Oprah",
      "presults":	
        [
        { "player": "Oprah",
          "leaders": [ "Cleo", "Ziz", "Bach", "Mei" ],
          "wonders": [ "SH", "GW", "IRC" ] ,
          "seat": 1,
          "finalScore": 231,
          "finalPosition": 1,
          "normalizedScore": 1
        },
        { "player": "lukaszt",
          "leaders": [ "Sun", "Isa", "Cook", "Chu" ],
          "wonders": [ "HG", "TR" ] ,
          "seat": 2,
          "finalScore": 159,
          "finalPosition": 2,
          "normalizedScore": 0
        }
        ]
    
    },
    {
      "_id": "2",
      "_created": new Date("2022-09-16T12:17"),
      "author": "lukaszt",
      "origin": "laohuang TPGL",
      "type": "2p",
      "finishedOn": new Date("2022-09-16"),
      "players": ["Neandrtalec", "lukaszt"],
      "winner": "Neandrtalec",
      "presults":	
        [
        { "player": "Neandrtalec",
          "leaders": [ "Ziz", "Dar", "Cou" ],
          "wonders": [ "LOA", "SC", "UN" ] ,
          "seat": 1,
          "finalScore": 266,
          "finalPosition": 1,
          "normalizedScore": 1
        },
        { "player": "lukaszt",
          "leaders": [ "Alex", "Nos", "Nob", "Die" ],
          "wonders": [ "CM", "HC" ] ,
          "seat": 2,
          "finalScore": 111,
          "finalPosition": 2,
          "normalizedScore": 0
        }
        ]
    
    }
    ];
  }

}
