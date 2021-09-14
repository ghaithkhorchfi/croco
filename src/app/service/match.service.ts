import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  matchUrl:string='http://localhost:3000/match'

  constructor(private httpClient:HttpClient) {   }
  addMatch(match:any){
    return this.httpClient.post(this.matchUrl,match)
  }
  editMatch(match:any){
    return this.httpClient.put<{msg:any}>(`${this.matchUrl}/${match._id}`,match)
    
  }
  getAllMatchs(){
    return this.httpClient.get<{matches:any}>(this.matchUrl);
  }
  getMatchById(id){
    return this.httpClient.get<{match:any}>(`${this.matchUrl}/${id}`);
  }
  delete(id:any){
    return this.httpClient.delete<{msg:any}>(`${this.matchUrl}/${id}`);
  }
}
