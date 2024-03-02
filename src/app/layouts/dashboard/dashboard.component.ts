import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth/pages/auth.service';
import { AdminGuard } from '../../core/guards/admin.guard';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  showFiller = false;

  constructor(private router : Router,
     private route:ActivatedRoute,
     private authService:AuthService) {}
  logout():void{
    localStorage.removeItem('access-token');
    this.router.navigate(['auth','login']);

  }

}
