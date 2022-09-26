import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Games from 'src/app/interfaces/games';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private _http: HttpClient) { }

  find(): Observable<Games> {
    return this._http.get<Games>(
      `http://localhost:5000/api/v1/games`
    );
  }

  addGame(game: any) { 
    console.log('calling games add apis')
    const res = this._http.post<any>(`http://localhost:5000/api/v1/games/add`, game);
    return res;
  }

}
