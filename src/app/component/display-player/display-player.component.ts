import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from 'src/app/service/player.service';

@Component({
  selector: 'app-display-player',
  templateUrl: './display-player.component.html',
  styleUrls: ['./display-player.component.css']
})
export class DisplayPlayerComponent implements OnInit {
  id: any;
  player: any;

  constructor(private activatedRoute: ActivatedRoute, private playerService:PlayerService) { }

  ngOnInit() {
    // let players=JSON.parse(localStorage.getItem('players')||'[]');
    // console.log(this.id);

    // for (let i = 0; i < players.length; i++) {
    //   if(players[i].id==this.id){
    //     this.player=players[i];
    //   }

    // }
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.playerService.getPlayerById(this.id).subscribe((data)=>{
      this.player=data.player
    })

    console.log(this.player);


  }

}
