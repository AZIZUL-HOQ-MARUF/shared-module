import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseDataService } from '../services/base-data.service';
import { environment } from 'src/assets/environment';
import { AuthGuard } from '../services/AuthGuard';
import { of } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: '../templates/navbar.component.html',
  styleUrls: ['../styles/navbar.component.css']
})
export class NavbarComponent implements OnInit {
  apiUrl = environment.URL;
  constructor(private router: Router
    , private baseDataService: BaseDataService
    , public auth: AuthGuard) { }

  ngOnInit() {
  }
  onClickEmp(){
    this.router.navigate(["/emp"])
  }
  onClickLogout() {
      localStorage.removeItem('token');
      this.auth.isLoggedIn = of(false)
      this.router.navigate(['/login']);
  }
  onClickLogin(){
    this.router.navigate(['/login']);
  }
  getUserData() {
    this.baseDataService.save(`${this.apiUrl}/user/get-user`, {}).subscribe(result => {
    })
  }

}
