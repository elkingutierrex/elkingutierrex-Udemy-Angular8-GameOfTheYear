import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { Game } from 'src/interfaces/interfaces';

import Swal from 'sweetalert2'

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

  votarJuego( juego: Game ){
    console.log(juego)
    this.gameService.votarJuego( juego.id )
      .subscribe( (resp: {ok:boolean, mensaje:string }) => {
        console.log(resp); 

        if( resp.ok ){
          Swal.fire('Gracias', resp.mensaje, 'success')
        }
      })

  }

}
