import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseDataService } from '../services/base-data.service';
import { environment } from 'src/assets/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: '../templates/navbar.component.html',
  styleUrls: ['../styles/navbar.component.css']
})
export class NavbarComponent implements OnInit {
  apiUrl = environment.URL;
  constructor(private router: Router
    , private baseDataService: BaseDataService) { }

  ngOnInit() {
  }
  onClickLogout() {
    if (localStorage.getItem('token')) {
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    }
  }
  getUserData(){
    this.baseDataService.save(`${this.apiUrl}/user/get-user`,{}).subscribe(result=>{
      console.log(result);
      
    })
  }

}
