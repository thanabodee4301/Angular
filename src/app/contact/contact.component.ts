 import {  Component, OnInit } from '@angular/core';
 import { DataService} from '../data.service';
 import {ActivatedRoute} from '@angular/router';
 @Component({
   selector: 'app-contact',
   templateUrl: './contact.component.html',
   styleUrls: ['./contact.component.css']
 })
 export class ContactComponent implements OnInit {
  results: any = [];
  league_slug: any;
   constructor(private dataservice: DataService, private route: ActivatedRoute ) { }
 
   ngOnInit() {
    this.route.params.subscribe(params => {
      this.league_slug = params['league_slug'];
      this.league_slug = this.league_slug.replace(/ /g, '-');
      console.log(this.league_slug);
   });
     this.dataservice.standings(this.league_slug).subscribe(res => {
       this.results = res;
     });
  }
}
