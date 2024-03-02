import { Component } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { loadingService } from '../../../../../../core/service/loading.service';
import { User } from '../../models';
import { UsersService } from '../../users.service';

@Component({
  selector: 'app-pages-details',
  templateUrl: './pages-details.component.html',
  styleUrl: './pages-details.component.scss',
})
export class PagesDetailsComponent {
  subscription!: Subscription;
  usuarios!: User[];
  constructor(
    private loadingService: loadingService,
    private usersService: UsersService
  ) {
    this.getUsuarios();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getUsuarios(): void {
    this.subscription = this.usersService
      .getUsers()
      .subscribe((data: User[]) => {
        this.usuarios = data;
        this.loadingService.setIsLoading(true);
      });
  }
}
