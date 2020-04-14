import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseDataService } from '../services/base-data.service';
import { environment } from '../../../assets/environment'
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: '../templates/login.component.html'
})
export class LoginComponent implements OnInit {
  loginObj = { email: null, password: null }
  apiUrl = environment.URL;
  constructor(private router: Router
    , private baseDataService: BaseDataService) { }

  ngOnInit() {
  }
  onClickLogin() {
    this.baseDataService.login(`${this.apiUrl}/login`, this.loginObj).subscribe((result: HttpResponse<any>) => {
      let token = result.headers.has("authorization") ? result.headers.get("authorization") : null;
      this.setLocalStorageKey(token);
      this.router.navigate(['/home']);
    }, err => {
      console.log(err, 'errrrrrr');
    });
  }
  setLocalStorageKey(key) {
    localStorage.setItem('token', key)
  }

}
