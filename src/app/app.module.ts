import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { CupEventComponent } from './component/cup-event/cup-event.component';
import { InfoComponent } from './component/info/info.component';
import { NewsComponent } from './component/news/news.component';
import { ResultComponent } from './component/result/result.component';
import { BlogComponent } from './component/blog/blog.component';
import { HomeComponent } from './component/home/home.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { LoginComponent } from './component/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LeagueComponent } from './component/league/league.component';
import { AddMatchComponent } from './component/add-match/add-match.component';
import { AddTeamComponent } from './component/add-team/add-team.component';
import { AddPlayerComponent } from './component/add-player/add-player.component';
import { AdminComponent } from './component/admin/admin.component';
import { AdminMatchComponent } from './component/admin-match/admin-match.component';
import { AdminTeamComponent } from './component/admin-team/admin-team.component';
import { AdminPlayerComponent } from './component/admin-player/admin-player.component';
import { DisplayMatchComponent } from './component/display-match/display-match.component';
import { DisplayPlayerComponent } from './component/display-player/display-player.component';
import { DisplayTeamComponent } from './component/display-team/display-team.component';
import { HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CupEventComponent,
    InfoComponent,
    NewsComponent,
    ResultComponent,
    BlogComponent,
    HomeComponent,
    SignUpComponent,
    LoginComponent,
    LeagueComponent,
    AddMatchComponent,
    AddTeamComponent,
    AddPlayerComponent,
    AdminComponent,
    AdminMatchComponent,
    AdminTeamComponent,
    AdminPlayerComponent,
    DisplayMatchComponent,
    DisplayPlayerComponent,
    DisplayTeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
