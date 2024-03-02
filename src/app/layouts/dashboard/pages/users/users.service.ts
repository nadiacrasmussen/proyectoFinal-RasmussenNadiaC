import { Injectable, Pipe } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './models';
import { Observable, delay, mergeMap, of, tap } from 'rxjs';
import { enviroment } from '../../../../../enviroments/enviroments';

let USERS_DB: User[] = [];
let ROLES_DB: String[] = ['ADMIN', 'USER'];
@Injectable({ providedIn: 'root' })
export class UsersService {
  constructor(private httpClient: HttpClient) {}
  getUserById(id: number | string): Observable<User | undefined> {
    return of(USERS_DB.find((user) => user.id == id)).pipe(delay(1000));
  }
  getRoles(): Observable<String[]> {
    return of(ROLES_DB).pipe(delay(1000));
  }
  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${enviroment.apiUrl}/users`);
  }

  createUser(payload: User) {
    return this.httpClient.post<User>(
      `${enviroment.apiUrl}/users`,
      payload
    ).pipe(mergeMap(() => this.getUsers()));

  }

  updateUser(user:User){
    return this.httpClient.put(`${enviroment.apiUrl}/users/${user.id}`,{user});
  }
  deleteUser(userID:string) {
    USERS_DB = USERS_DB.filter((User) => User.id !== userID);
    return this.httpClient.delete(`${enviroment.apiUrl}/users/${userID}`);
  }}


