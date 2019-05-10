import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public users = [
    {
      name: 'Le Thi Hao',
      email: 'admin',
      password: 'admin',
      role: 'admin'
    },
    {
      name: 'Nguyen Van Tung',
      email: 'user',
      password: 'user',
      role: 'user'
    }
  ];
  constructor() { }
  getUsers() {
    return this.users;
  }
  
}
