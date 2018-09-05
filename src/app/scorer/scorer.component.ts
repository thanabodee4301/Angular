import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-scorer',
  templateUrl: './scorer.component.html',
  styleUrls: ['./scorer.component.css']
})
export class ScorerComponent implements OnInit {

  scorer: any [];
  league: string;

  constructor(private router: ActivatedRoute, private dataservice: DataService ) { }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.league = params['league_slug'];
      console.log(this.league);
   });
  this.dataservice.scorer(this.league).subscribe(res => {
    this.scorer = res;
  });

  }

}
