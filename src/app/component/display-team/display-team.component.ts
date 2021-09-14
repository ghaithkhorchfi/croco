import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-team',
  templateUrl: './display-team.component.html',
  styleUrls: ['./display-team.component.css']
})
export class DisplayTeamComponent implements OnInit {
  id:any;
  team:any;

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    let teams=JSON.parse(localStorage.getItem('teams')||'[]');
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
    
    for (let i = 0; i < teams.length; i++) {
      if(teams[i].id==this.id){
        this.team=teams[i];
      }
      
    }
    console.log(this.team);
  }

}
