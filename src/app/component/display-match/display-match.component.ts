import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchService } from 'src/app/service/match.service';

@Component({
  selector: 'app-display-match',
  templateUrl: './display-match.component.html',
  styleUrls: ['./display-match.component.css']
})
export class DisplayMatchComponent implements OnInit {
  id:any;
 findMatch:any;
  matchs:any;

  constructor(private activatedRoute:ActivatedRoute, private matchService:MatchService) { }

  ngOnInit() {
    // this.matchs=JSON.parse(localStorage.getItem('matchs')||'[]');
    // console.log(this.id);
    
    // for (let i = 0; i < this.matchs.length; i++) {
    //   if(this.matchs[i].id==this.id){
    //     this.findMatch=this.matchs[i];
    //   }
      
    // }
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    this.matchService.getMatchById(this.id).subscribe((data)=>{
      this.findMatch=data.match
    })
    console.log(this.findMatch);
    

    
  }

}
