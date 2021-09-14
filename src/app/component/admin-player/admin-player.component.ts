import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/service/player.service';

@Component({
  selector: 'app-admin-player',
  templateUrl: './admin-player.component.html',
  styleUrls: ['./admin-player.component.css']
})
export class AdminPlayerComponent implements OnInit {

  players: any;

  constructor(private router: Router, private playerService: PlayerService) { }

  ngOnInit() {
    // this.players=JSON.parse(localStorage.getItem('players')||'[]')
    this.playerService.getAllPlayers().subscribe((data) => {
      this.players = data.players
    })
  }
  goTo(id: any) {
    this.router.navigate([`player/${id}`]);


  }
  goEdit(id: any) {
    this.router.navigate([`editPlayer/${id}`]);

  }
  delete(id: any) {
    this.playerService.delete(id).subscribe((data) => {
      console.log(data.msg);
      this.playerService.getAllPlayers().subscribe((res)=>{
        this.players=res.players
      })

    })

  }

}
