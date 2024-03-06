import { Injectable } from '@angular/core';
import { User } from './models/index';
import { Observable,  catchError, mergeMap, of, } from 'rxjs';
import { HttpClient, } from '@angular/common/http';
import { enviroment } from '../../../../../enviroments/enviroments';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Inscription } from '../inscriptions/store/models';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) { }

  generateString(length: number) {
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = ' ';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  openSnackBar(message: string, action: string): Observable<any> {
    return this.snackBar.open(message, action, {
      duration: 2000,
    })
      .onAction();
  }
  getUsers() {
    return this.http.get<User[]>(`${enviroment.apiUrl}/users`).pipe(
      catchError((error) => {
        this.openSnackBar('Error al cargar los usuarios', 'ok');
        return of([]);
      })
    )
  }
  ngOnInit(): void {
    this.getUsers()
  }

  getUser(id: number | string): Observable<User | undefined> {
    return this.http.get<User>(`${enviroment.apiUrl}/users/${id}`);
  }

  addUser(users: User): Observable<User[]> {
    return this.http
      .post<User>(`${enviroment.apiUrl}/users`, {
        ...users,
        token: this.generateString(5),id:new Date().valueOf().toLocaleString()
      })
      .pipe(mergeMap(() => this.getUsers()));
  }

  updateUser(user: User): Observable<User> {
    if (!user.id) throw Error('User is required');
    return this.http.patch<User>(`${enviroment.apiUrl}/users/${user.id}`, user)
  }

  deleteUserbyId(id: string) {
    return this.http.delete(`${enviroment.apiUrl}/users/${id}`)
  }

  getAllSubscribers(): Observable<Inscription[]>{
    return this.http.get<Inscription[]>(`${enviroment.apiUrl}/users?role=subscribed`)
  }

}
