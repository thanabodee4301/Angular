import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import{ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-round',
  templateUrl: './round.component.html',
  styleUrls: ['./round.component.css']
})
export class RoundComponent implements OnInit {
total: string[];
team_identifier: string;
league_slug: string;
  constructor(private dataservice: DataService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.league_slug = params['league_slug'];
      this.team_identifier   = params['team_identifier'];
      console.log('League:', this.league_slug);
      console.log('Team:', this.team_identifier);
   });
   this.dataservice.round(this.league_slug, this.team_identifier).subscribe(res => {
     this.total = res;
   });
  }

}
