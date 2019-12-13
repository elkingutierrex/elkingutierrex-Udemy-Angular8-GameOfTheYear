import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { Game } from 'src/interfaces/interfaces';

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.css']
})
export class GotyComponent implements OnInit {

  juegos: Game[] = [];
  
  constructor( private gameService: GameService) { }

  ngOnInit() {

    this.gameService.getNominados()
      .subscribe( res=>{
        console.log(res);
        this.juegos = res;
        })
  }

}
