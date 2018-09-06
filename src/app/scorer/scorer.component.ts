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
  league_slug: string;

  constructor(private router: ActivatedRoute, private dataservice: DataService ) { }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.league_slug = params['league_slug'];
   });
  this.dataservice.scorer(this.league_slug).subscribe(res => {
    this.scorer = res;
  });

  }

}
