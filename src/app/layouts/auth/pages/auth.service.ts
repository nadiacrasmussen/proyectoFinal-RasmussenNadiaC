import { Observable, delay, map, of, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../dashboard/pages/users/models/index';

interface loginData {
  email: string | null;
  password:  string | null;
}
const MOCK_USER : User =  {
  id: 1,
  firstName: 'Macarena',
  lastName: 'Sartorio',
  email: 'macarenasartorio@gmail.com',
  password: 'ms1503',
  role:'admin'


};

@Injectable({ providedIn: 'root' })
export class AuthService {
  authUser!: User | null ;
  constructor(private Router: Router) {}

  private setAuthUser(mockUser: User): void {
    this.authUser = mockUser;
    localStorage.setItem('token', 'ms1503');
  }
  get userAuthenticated(){
    return this.authUser;
  }

  login(data: loginData): void {
    console.log(data);
    console.log({MOCK_USER})
    if (
      data.email == MOCK_USER.email &&
      data.password == MOCK_USER.password
    ) {
      this.authUser = MOCK_USER;
      this.setAuthUser(this.authUser);
      this.Router.navigateByUrl('/dashboard/home');
    }
  }

  logout(): void {
    this.authUser = null;
    localStorage.removeItem('token');
    this.Router.navigate(['/auth/login']);

  }

  verifyToken():Observable<boolean>  {
    const token =localStorage.getItem('token') || '';
    return of(token).pipe(

      map((response) => !!response),
      tap(() => this.setAuthUser(MOCK_USER))
    );
  }
}
