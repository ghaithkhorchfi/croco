import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from 'src/app/service/player.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  formPlayer: FormGroup;
  player: any = {};
  id:any;
  title:string;


  constructor(private formBuilder: FormBuilder,
    private playerService:PlayerService,
    private activatedRoute:ActivatedRoute

  ) { }

  ngOnInit() {
    this.formPlayer = this.formBuilder.group({
      name: [''],
      poste: [''],
      team: [''],
      num: [''],
      age: ['']
    })
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    if(this.id){
    this.playerService.getPlayerById(this.id).subscribe((data)=>{
      this.player=data.player
    })
    this.title='Edit'
  }
  else{
    this.title='Add'
  }
  }
  addPlayer() {
    console.log('player', this.player);
    if(this.id){
      this.playerService.editPlayer(this.player).subscribe((data)=>{
        console.log(data.msg);
        
      })
    }
    this.playerService.addPlayer(this.player).subscribe();

    // let players = JSON.parse(localStorage.getItem('players') || '[]');
    // let id = JSON.parse(localStorage.getItem('playerId') || '1');
    // this.player.id = id;
    // players.push(this.player);
    // localStorage.setItem('players', JSON.stringify(players));
    // localStorage.setItem('playerId', id + 1)

  }

}
