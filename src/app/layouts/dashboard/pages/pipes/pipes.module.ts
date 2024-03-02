import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesComponent } from './pipes.component';
import { FullNamePipe } from '../../../../shared/full-name.pipe';
import { ValidationErrorsPipe } from '../../../../shared/validation-error.pipe';




@NgModule({
  declarations: [
    PipesComponent,
    FullNamePipe,
    ValidationErrorsPipe
  ],
  imports: [
    CommonModule,
  ],
    exports: [
   PipesComponent,
   FullNamePipe,
   ValidationErrorsPipe
  ]
})
export class PipesModule { }
