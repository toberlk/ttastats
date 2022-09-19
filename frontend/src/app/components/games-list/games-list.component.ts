import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})
export class GamesListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  get games() {
    return [{
      "id": 1,
      "author": "lukaszt",
      "origin": "laohuang TPGL",
      "type": "2p",
      "date": "2022-09-16",
      "dateCretaed": "2022-09-16T12:17",
      "players": ["Oprah", "lukaszt"],
      "winner": "Oprah",
      "results":	
        [
        { "player": "Oprah",
          "leaders": [ "Cleo", "Ziz", "Bach", "Mei" ],
          "wonders": [ "SH", "GW", "IRC" ] ,
          "score": 231,
          "position": 1,
          "nscore": 1
        },
        { "player": "lukaszt",
          "leaders": [ "Sun", "Isa", "Cook", "Chu" ],
          "wonders": [ "HG", "TR" ] ,
          "score": 159,
          "position": 2,
          "nscore": 0
        }
        ]
    
    },
    {
      "id": 2,
      "author": "lukaszt",
      "origin": "laohuang TPGL",
      "type": "2p",
      "date": "2022-09-15",
      "dateCretaed": "2022-09-16T12:17",
      "players": ["Neandrtalec", "lukaszt"],
      "winner": "Neandrtalec",
      "results":	
        [
        { "player": "Neandrtalec",
          "leaders": [ "Ziz", "Dar", "Cou" ],
          "wonders": [ "LOA", "SC", "UN" ] ,
          "score": 266,
          "position": 1,
          "nscore": 1
        },
        { "player": "lukaszt",
          "leaders": [ "Alex", "Nos", "Nob", "Die" ],
          "wonders": [ "CM", "HC" ] ,
          "score": 111,
          "position": 2,
          "nscore": 0
        }
        ]
    
    }
    ];
  }

}
