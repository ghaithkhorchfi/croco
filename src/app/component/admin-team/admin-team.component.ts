import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-team',
  templateUrl: './admin-team.component.html',
  styleUrls: ['./admin-team.component.css']
})
export class AdminTeamComponent implements OnInit {

teams:any;
  constructor(private router:Router) { }

  ngOnInit() {
    this.teams=JSON.parse(localStorage.getItem('teams')||'[]')
  }
  goTo(id:number){
    this.router.navigate([`team/${id}`])

  }
  goEdit(id:number){
    this.router.navigate([`editTeam/${id}`])


  }
  delete(){

  }
  

}
