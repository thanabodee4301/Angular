import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import{ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-round',
  templateUrl: './round.component.html',
  styleUrls: ['./round.component.css']
})
export class RoundComponent implements OnInit {
result: string[];
team : string;
league: string;
  constructor(private dataservice: DataService,private route: ActivatedRoute) { }

  ngOnInit() {
      
  }

}
