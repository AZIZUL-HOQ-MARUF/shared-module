import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { WebStorageService } from './web-storage.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  isLoggedIn: Observable<boolean>;
  constructor(private router: Router, private webStorage: WebStorageService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;

    return this.open(url);
  }

  open(url): boolean {
    // return true;
    if (this.webStorage.getToken()) {
      this.isLoggedIn = of(true)
      return true;
    }
    this.router.navigate(['/login']);
    this.isLoggedIn = of(false);
    return false;
  }


}
