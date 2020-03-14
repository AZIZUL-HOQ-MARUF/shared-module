import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebStorageService {

  constructor() { }
  getLocalStorageKey():string{
    return localStorage.getItem('token');
  }
  setLocalStorageKey(key){
    localStorage.setItem('token',key)
  }
  getPassWord(){
    return localStorage.getItem('token');
  }
}
