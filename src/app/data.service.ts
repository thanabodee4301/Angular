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
  scorer(league_slug) {
    return this.http.get(`/api/show/${league_slug}/scorer`)
      .map(res => res.json());
  }
    round(league_slug, team_identifier) {
      return this.http.get(`/api/round/${league_slug}/${team_identifier}`)
        .map(res => res.json());
  }
  detail(league_slug, position){
    return this.http.get(`/api/check/${league_slug}/${position}`)
    .map(res => res.json());
  }
}


