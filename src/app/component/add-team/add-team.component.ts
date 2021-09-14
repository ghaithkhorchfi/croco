import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
  team:any={};
  formTeam:FormGroup

  constructor(private formBuilder:FormBuilder ) { }

  ngOnInit() {
    this.formTeam=this.formBuilder.group({
      name:[''],
      staduim:[''],
      owner:['']
    })
  }
  addTeam(){
    console.log('team:',this.team);
    let teams = JSON.parse(localStorage.getItem('teams') || '[]');
    let id = JSON.parse(localStorage.getItem('teamId') || '1');
    this.team.id = id;
    teams.push(this.team);
    localStorage.setItem('teams', JSON.stringify(teams));
    localStorage.setItem('teamId', id + 1)
    
  }

}
