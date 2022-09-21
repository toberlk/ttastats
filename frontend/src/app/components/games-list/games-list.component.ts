import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/interfaces/game';
import { GameLibStats } from 'src/app/interfaces/game-lib-stats';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})
export class GamesListComponent implements OnInit {

  constructor() { }

  gameLibStats: GameLibStats = {
    lastUpdated: new Date(),
    gamesTotal: 3,
    gamesOf2p: 2,
    gamesOf3p: 0,
    gamesOf4p: 1,
  };

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
    
    },
    {
      "_id": "3",
      "_created": new Date("2021-11-24T12:17"),
      "author": "lukaszt",
      "origin": "Snail Cup",
      "type": "4p",
      "finishedOn": new Date("2021-11-24"),
      "players": ["JeJejan", "khyung", "lukaszt", "Ioannis3"],
      "winner": "lukaszt",
      "presults":	
        [
        { "player": "JeJejan",
          "leaders": [ "Ari", "Leo", "Gau", "Cou" ],
          "wonders": [ "RR", "GW", "SOL" ] ,
          "seat": 1,
          "finalScore": 216,
          "finalPosition": 2,
          "normalizedScore": 0.5
        },
        { "player": "khyung",
          "leaders": [ "Sun", "Mic", "Nap", "Gat" ],
          "wonders": [ "HG", "TM", "LM", "HC" ] ,
          "seat": 2,
          "finalScore": 206,
          "finalPosition": 3,
          "normalizedScore": 0.16
        },
        { "player": "lukaszt",
          "leaders": [ "Alex", "Joa", "The", "Die" ],
          "wonders": [ "SH", "MP" ] ,
          "seat": 3,
          "finalScore": 227,
          "finalPosition": 1,
          "normalizedScore": 1
        },
        { "player": "Ioannis3",
          "leaders": [ "Hip", "Nos", "Nob", "Chu" ],
          "wonders": [ "P", "UC", "SF" ] ,
          "seat": 4,
          "finalScore": 147,
          "finalPosition": 4,
          "normalizedScore": 0
        }
        ]
    
    }
    ];
  }

}
