import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/service/match.service';

@Component({
  selector: 'app-admin-match',
  templateUrl: './admin-match.component.html',
  styleUrls: ['./admin-match.component.css']
})
export class AdminMatchComponent implements OnInit {
  matchs: any

  constructor(private router: Router,
    private matchService: MatchService
  ) { }

  ngOnInit() {

    // this.matchs=JSON.parse(localStorage.getItem('matchs')||'[]')
    this.matchService.getAllMatchs().subscribe((data) => {
      this.matchs = data.matches
      console.log(data.matches);

    })
  }
  goTo(id: any) {
    this.router.navigate([`match/${id}`])

  }
  goEdit(id: any) {
    this.router.navigate([`edit/${id}`])


  }
  deleteMatch(id: any) {
    this.matchService.delete(id).subscribe((data) => {
      console.log(data.msg);
      this.matchService.getAllMatchs().subscribe((data) => {
        this.matchs = data.matches
        console.log(data.matches);

      })

    })



  }

}
