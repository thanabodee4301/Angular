import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-leaguedetail',
  templateUrl: './leaguedetail.component.html',
  styleUrls: ['./leaguedetail.component.css']
})
export class LeaguedetailComponent implements OnInit {

league_slug: string;
detail: string[];
position: string;

  constructor(private dataservice: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.league_slug = params['league_slug'];
      this.position    = params['position'];
      console.log('league:', this.league_slug);
      console.log('position', this.position);
    });
    this.dataservice.detail(this.league_slug, this.position).subscribe(res => {
      this.detail = res;
    });
  }

}
