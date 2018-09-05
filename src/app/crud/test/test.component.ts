import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {DataService} from '../../data.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  data: string [];
  private name: string;
  private line:string;
  private line2:string;
  private line3:string;
  constructor(private dataservice: DataService) { }

  ngOnInit() {
  this.name  = 'bank' ;
  this.data  = ['test'];
  this.line  = 'line1';
  this.line2 = 'line2';
  this.line3 = 'line3';
}
    addData(inputData) {
    this.data.push(inputData);
  }
  removeData(dataSelete) {
    this.data.forEach((element, index) => {
      if ( element === dataSelete) {
        this.data.splice(index, 1);
      }
    });
  }
  }
