 import {Component, OnInit} from '@angular/core';
 import {DataService} from '../data.service';
 import {LoginService} from '../login/login.service';
 import {Globals} from '../global';
  @Component({
     selector: 'app-home',
     templateUrl: './home.component.html',
     styleUrls: ['./home.component.css']
  })
 export class HomeComponent implements OnInit {
    result: any = [];
     constructor(private dataservice: DataService, private global: Globals,private loginserver:LoginService) {}
     ngOnInit() {
         this.dataservice.getLeagueData().subscribe(res => {
             this.result = res;
         });
        }
 }
