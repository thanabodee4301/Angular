import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { jsonpFactory } from '@angular/http/src/http_module';
import {Globals} from '../global'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private userName:string = '';
  private password:string = '';
  detail: string[];
  loginParams = {
    userName: '',
    password: '',
}

  constructor(public loginService: LoginService, public router: Router) { }

  ngOnInit() {
  }
  onLoginSubmit(){
   if(this.userName == '' || this.password == ''){
    alert('กรอกมาก่อน');
   } else {
     this.loginParams.userName = this.userName;
     this.loginParams.password = this.password;
     this.loginService.checklogin(this.loginParams).subscribe(res => {
      if(res.status != 'sucess') {
        alert('User name หรือ password ผิด กรุณาลองใหม่อีกครั้ง');
      } else {
        alert('OK');
      }
     })
   }
  }
  test(){
    console.log('test');
    this.loginService.test().subscribe(res => {
      if(res.status != 'sucess') {
        alert('User name หรือ password ผิด กรุณาลองใหม่อีกครั้ง');
      } else {
        alert('OK');
      }
     })
  }
}
