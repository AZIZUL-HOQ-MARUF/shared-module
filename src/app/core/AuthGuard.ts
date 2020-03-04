import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;
    if(!this.getLocalStorageKey()){
      // this.setLocalStorageKey('12345');
    }
    return this.open(url);
  }

  open(url): boolean {
    // return true;
    if(this.getLocalStorageKey()) return true;
    this.router.navigate(['/login']);
    return false;
  }
  getLocalStorageKey():string{
    return localStorage.getItem('token');
  }
  setLocalStorageKey(key){
    localStorage.setItem('token',key)
  }

}
