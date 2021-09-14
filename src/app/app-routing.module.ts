import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMatchComponent } from './component/add-match/add-match.component';
import { AddPlayerComponent } from './component/add-player/add-player.component';
import { AddTeamComponent } from './component/add-team/add-team.component';
import { AdminComponent } from './component/admin/admin.component';
import { DisplayMatchComponent } from './component/display-match/display-match.component';
import { DisplayPlayerComponent } from './component/display-player/display-player.component';
import { DisplayTeamComponent } from './component/display-team/display-team.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';


const routes: Routes = [
  {path:'',component:HomeComponent },
  {path:'sign',component:SignUpComponent },
  {path:'login',component:LoginComponent },
  {path:'addMatch',component:AddMatchComponent },
  {path:'addTeam',component:AddTeamComponent },
  {path:'addPlayer',component:AddPlayerComponent },
  {path:'admin',component:AdminComponent },
  {path:'match/:id',component:DisplayMatchComponent },
  {path:'edit/:id',component:AddMatchComponent },
  {path:'player/:id',component:DisplayPlayerComponent },
  {path:'editPlayer/:id',component:AddPlayerComponent },
  {path:'team/:id',component:DisplayTeamComponent },
  {path:'editTeam/:id',component:AddTeamComponent }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
