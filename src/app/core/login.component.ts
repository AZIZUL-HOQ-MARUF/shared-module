import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(private router :Router) { }

  ngOnInit() {
  }
  onClickLogin(){
    this.setLocalStorageKey('12345');
    this.router.navigate(['/home']);
  }
  setLocalStorageKey(key){
    localStorage.setItem('token',key)
  }

}
