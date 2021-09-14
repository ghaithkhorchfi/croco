import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  playerUrl:string='http://localhost:3000/player'

  constructor(private httpClient:HttpClient) { }
  addPlayer(player:any){
    return this.httpClient.post(this.playerUrl,player)
  }
  editPlayer(player:any){
    return this.httpClient.put<{msg:any}>(`${this.playerUrl}/${player.id}`,player)
    
  }
  getAllPlayers(){
    return this.httpClient.get<{players:any}>(this.playerUrl);
  }
  getPlayerById(id:any){
    return this.httpClient.get<{player:any}>(`${this.playerUrl}/${id}`);
  }
  delete(id:any){
    return this.httpClient.delete<{msg:any}>(`${this.playerUrl}/${id}`);
  }
}
