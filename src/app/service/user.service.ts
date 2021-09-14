import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userUrl:string='http://localhost:3000/users'

  constructor(private httpClient:HttpClient) {   }
  signUp(user:any){
    return this.httpClient.post(`${this.userUrl}/signUp`,user)
  }
  login(user:any){
    return this.httpClient.post<{message:string,user:any}>(`${this.userUrl}/login`,user)
  }
  editUser(user:any){
    return this.httpClient.put<{msg:any}>(`${this.userUrl}/${user._id}`,user)
    
  }
  getAllUsers(){
    return this.httpClient.get<{useres:any}>(this.userUrl);
  }
  getUserById(id){
    return this.httpClient.get<{user:any}>(`${this.userUrl}/${id}`);
  }
  delete(id:any){
    return this.httpClient.delete<{msg:any}>(`${this.userUrl}/${id}`);
  }
}
