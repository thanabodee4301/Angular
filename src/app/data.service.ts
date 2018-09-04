import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(private http: Http) {} 

  getLeagueData() {
    return this.http.get('/api/show')
      //.map(res => res.json().leagues);
      .map(res => res.json());
  }

  standings(league_slug) {
    return this.http.get(`/api/show/${league_slug}`)
      .map(res => res.json());

  }
}


