import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MatchService } from 'src/app/service/match.service';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {
  match: any = {}
  formMatch: FormGroup;
  id: any;
  title: string = 'Add';

  constructor(private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute,
    private matchService: MatchService
  ) { }

  ngOnInit() {
    this.formMatch = this.formBuilder.group({
      teamOne: [''],
      teamTwo: [''],
      scoreOne: [''],
      scoreTwo: [''],
    })
    this.id = this.activatedRoute.snapshot.paramMap.get('id')
    if (this.id) {
      this.title = 'Edit'
      this.matchService.getMatchById(this.id).subscribe((data)=>{
        this.match =data.match

      })

    }
  }
  addMatch() {
    console.log('match', this.match);
    // let matchs = JSON.parse(localStorage.getItem('matchs') || '[]');
    // let id = JSON.parse(localStorage.getItem('matchId') || '1');
    // this.match.id = id;
    // matchs.push(this.match);
    // localStorage.setItem('matchs', JSON.stringify(matchs));
    // localStorage.setItem('matchId', id + 1)
    if (this.id) {

      this.matchService.editMatch(this.match).subscribe((data)=>{
        console.log(data.msg);
        
      })
    }
    else{
      this.matchService.addMatch(this.match).subscribe();
    }

  }
  search(id: number) {
    let match;
    let matchs = JSON.parse(localStorage.getItem('matchs') || '[]');
    for (let i = 0; i < matchs.length; i++) {
      if (matchs[i].id == id) {
        match = matchs[i]
      }

    }
    return match

  }

}
