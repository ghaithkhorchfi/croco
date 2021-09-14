import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  matchs:any=[]

  constructor() { }

  ngOnInit() {
    this.matchs=[{teamOne:'PSG',teamTwo:'Barca',scoreOne:'4',scoreTwo:'0'}]
    this.matchs=[{teamOne:'Juv',teamTwo:'Real',scoreOne:'4',scoreTwo:'0'}]
  }

}
