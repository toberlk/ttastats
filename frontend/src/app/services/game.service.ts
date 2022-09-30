import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Games from 'src/app/interfaces/games';
import { GameLibStats } from '../interfaces/game-lib-stats';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private _http: HttpClient) { }

  find(): Observable<Games> {
    const gs = this._http.get<Games>(
      `${environment.apiUrl}/api/v1/games`
    );
    console.log(gs)
    return gs;
  }

  addGame(game: any) { 
    console.log('calling games add apis')
    const res = this._http.post<any>(`${environment.apiUrl}/api/v1/games/add`, game);
    return res;
  }

  stats() {
    console.log('getting game stats...')
    const res = this._http.get<GameLibStats>(`${environment.apiUrl}/api/v1/games/stats`);
    return res;
  }

}
