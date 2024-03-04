import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { MatTableModule } from '@angular/material/table';
import { UserFormComponent } from './components/user-form/user-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../../shared/shared.module';
import { PipesModule } from '../pipes/pipes.module';
import { UsersService } from './users.service';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { UserRoutingModule } from './user-routing.module';
import { loadingService } from '../../../../core/service/loading.service';
import { UsersTableComponent } from './components/user-table/users-table/users-table.component';
import { UserDetailComponent } from './components/user-detail/user-detail/user-detail.component';


@NgModule({
  declarations: [UsersComponent, UserFormComponent, UsersTableComponent, UserDetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    PipesModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    RouterModule,
    UserRoutingModule,


  ],
  exports: [UsersComponent,UserDetailComponent,UserFormComponent,UsersTableComponent,],
  providers: [
    UsersService,
    loadingService,

    {
      provide: 'USER_TOKEN',
      useValue: '1234',
    },
  ],

})
export class UsersModule {}
