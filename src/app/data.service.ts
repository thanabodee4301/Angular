import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(private http: Http) {} 

  getLeagueData() {
    return this.http.get('/api/show')
      .map(res => res.json());
  }

  standings(league_slug) {
    return this.http.get(`/api/show/${league_slug}`)
      .map(res => res.json());

  }
  scorer(league_sulg) {
    return this.http.get(`/api/show/${league_sulg}/scorer`)
      .map(res => res.json());
  }
    round(league, team) {
      return this.http.get(`/api/${league}/${team}`)
        .map(res => res.json());
  }
}


