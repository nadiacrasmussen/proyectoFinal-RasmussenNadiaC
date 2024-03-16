import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { UsersModule } from './pages/users/users.module';
import { RouterModule,Routes } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from '../../core/guards/auth.guard';
import { InscriptionsModule } from './pages/inscriptions/inscriptions.module';
import { UsersComponent } from './pages/users/users.component';
import { CursosModule } from './pages/cursos/cursos.module';




const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'home',
     canActivate: [AuthGuard],
    component: HomeComponent,
  },
  {
    path: 'users',

    loadChildren: () =>
      import('./pages/users/users.module').then((m) => m.UsersModule),
  },
  {
    path: 'cursos',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./pages/cursos/cursos.module').then((m) => m.CursosModule),
  },
  {
    path: 'inscriptions',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./pages/inscriptions/inscriptions.module').then((m) => m.InscriptionsModule),
    }
  ];
@NgModule({
  declarations: [DashboardComponent, ],
  imports: [
    CursosModule,
    CommonModule,
UsersModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    RouterModule
    .forChild(routes),
    InscriptionsModule,
    CursosModule,

  ],
  exports: [DashboardComponent,
  ],
})
export class DashboardModule {}
