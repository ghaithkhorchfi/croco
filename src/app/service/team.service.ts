import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  teamUrl:string='http://localhost:3000/team'

  constructor(private httpClient:HttpClient) { }
  addTeam(team:any){
    return this.httpClient.post(this.teamUrl,team)
  }
  editTeam(team:any){
    return this.httpClient.put(`${this.teamUrl}/${team.id}`,team)
    
  }
  getAllTeams(){
    return this.httpClient.get<{teams:any}>(this.teamUrl);
  }
  getTeamById(id:any){
    return this.httpClient.get(`${this.teamUrl}/${id}`);
  }
  delete(id:any){
    return this.httpClient.delete<{msg:any}>(`${this.teamUrl}/${id}`);
  }
}
