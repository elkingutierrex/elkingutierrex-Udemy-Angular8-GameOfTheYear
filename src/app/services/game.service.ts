import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Game } from 'src/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  
  juegos: Game[] = [];


  constructor( private http: HttpClient) { 

  }

  getNominados( ){

    return this.http.get<Game[]>(`${ environment.url }/api/goty`);

  }



}
