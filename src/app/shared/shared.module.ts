import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontSizeDirective } from './font-size.directive';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from '../layouts/dashboard/pages/pipes/pipes.module';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

const shared_module = [
  CommonModule,
  MatTableModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  ReactiveFormsModule,
  MatProgressSpinnerModule,
  MatOptionModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  RouterModule,
  CommonModule,
  FormsModule,
  MatSelectModule,
  MatNativeDateModule,

  PipesModule,
];
@NgModule({
  declarations: [FontSizeDirective],
  imports: [shared_module],
  exports: [
    FontSizeDirective,
    MatTableModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    shared_module,
  ],
})
export class SharedModule {}
