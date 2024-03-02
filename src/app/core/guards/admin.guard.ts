import { Router } from '@angular/router';
import { Injectable, } from '@angular/core';
import { AuthService } from '../../layouts/auth/pages/auth.service';
import { Observable } from 'rxjs';

@Injectable({providedIn:'root'})
export class AdminGuard {
  constructor(
    private authService :AuthService,
    private router : Router

  ){}
  canActivate():Observable<boolean> | boolean {
    return this.authService.userAuthenticated?.role === 'ADMIN'
    ?true
    :(this.router.createUrlTree(['dashboard','home']),false);
  }
}

