import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { SharedModule } from '../../shared/shared.module';
import { AuthService } from './pages/auth.service';
import { PipesModule } from '../dashboard/pages/pipes/pipes.module';
import { AuthRoutingModule } from './auth-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [LoginComponent],
  imports: [SharedModule,PipesModule,AuthRoutingModule,MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  providers:[
    AuthService
  ]
})
export class AuthModule {}
