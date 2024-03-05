import { User } from './../../dashboard/pages/users/models/index';
import { enviroment } from './../../../../enviroments/enviroments';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { AuthActions } from '../../../core/store-auth/actions';
import { HttpClient } from '@angular/common/http';

export interface LoginData {
  email: null | string;
  password: null | string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(
    private router: Router,
    private _snackBar: MatSnackBar,
    private store: Store,
    private httpClient: HttpClient
  ) {}


  private setAuthUser(user: User): void {
    this.store.dispatch(AuthActions.setAuthUser({ user }));
    localStorage.setItem('token', user.token);
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }

  login(data: LoginData): Observable<User[]> {

    return this.httpClient
      .get<User[]>(
        `${enviroment.apiUrl}/users?email=${data.email}&password=${data.password}`
      ).pipe(
        tap((response: User[]) => {
          console.log({response})
          if (!!response[0]) {
            this.setAuthUser(response[0]);
            this.router.navigateByUrl('cursos');
          } else {
            this.openSnackBar('Datos incorrectos', 'Aceptar');
          }
        })
      );
  }

  logout(): void {
    this.store.dispatch(AuthActions.logout());
    this.router.navigate(['auth']);
    localStorage.removeItem('token');
  }

  verifyToken() {
    return this.httpClient
      .get<User[]>(
        `${enviroment.apiUrl}/users?token=${localStorage.getItem('token')}`
      )
      .pipe(
        map((response: any) => {
          if (response.length) {
            this.setAuthUser(response[0]);
            return true;
          } else {
            this.store.dispatch(AuthActions.logout());
            localStorage.removeItem('token');
            return false;
          }
        }),
        catchError(() => of(false))
      );
  }
}
