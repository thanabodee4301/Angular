 import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';
  @Component({
     selector: 'app-home',
     templateUrl: './home.component.html',
     styleUrls: ['./home.component.css']
  })
 export class HomeComponent implements OnInit {
    result: any = [];
     constructor(private dataservice: DataService) {}
     ngOnInit() {
         this.dataservice.getLeagueData().subscribe(res => {
             this.result = res;
         });
        }
 }
