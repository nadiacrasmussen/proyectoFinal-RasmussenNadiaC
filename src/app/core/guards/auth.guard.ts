import {  Router } from '@angular/router';
import {  Injectable } from '@angular/core';
import { AuthService} from '../../layouts/auth/pages/auth.service';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> | boolean {
    return this.authService.verifyToken().pipe(
      map((isAuthenticated: boolean) => {
        if (isAuthenticated) {
          return true;
        } else {
          this.router.navigate(['/auth', 'login']); // Redireccionar a la página de login si no está autenticado
          return false;
        }
      })
    );
  }
}
