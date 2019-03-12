import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { from, of, Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
const URL = `http://localhost:3000/api/user`;

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {
    this.getUsersFromServer();
  }

  public getUsers(): Observable<User[]> {
    return of(this.getUsersFromLocalStorage());
  }

  public creatUser(user: User): Observable<User> {
    const users: User[] = this.getUsersFromLocalStorage();
    users.push(user);
    this.updateLocalStorage(users);
    return this.http.post<User>(URL, JSON.stringify(user), httpOptions);
  }

  private getUsersFromServer(): void {
    this.http.get<User[]>(URL, { responseType: 'json' }).subscribe(users => {
      this.updateLocalStorage(users);
      console.log(users);
      
    });
  }

  private updateLocalStorage(users: User[]): void {
    localStorage.setItem('users', JSON.stringify(users));
  }

  private getUsersFromLocalStorage(): User[] {
    return JSON.parse(localStorage.getItem('users'));
  }
}
