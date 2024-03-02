import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesDetailsComponent } from './pages-details.component';
import { loadingService } from '../../../../../../core/service/loading.service';
import { Routes, Router, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: ':id',
    component: PagesDetailsComponent,
  },
];

@NgModule({
  declarations: [PagesDetailsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  providers: [loadingService],
})
export class PagesDetailsModule {}
