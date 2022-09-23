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

}
