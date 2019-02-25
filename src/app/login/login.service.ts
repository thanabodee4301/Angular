import { Injectable } from '@angular/core';
import { Router, Data } from '@angular/router';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class LoginService {
  constructor(private Http: Http, private router: Router) { }
  checklogin(userName){
    return this.Http
            .post(`/api/checklogin/loginchk`, userName)
            .map(res => res.json());
  }
  checklogined(userName){
    if(userName != '') {
      return 'isLogin'
    } else {
      return 'notlogin'
    }
  }
}
