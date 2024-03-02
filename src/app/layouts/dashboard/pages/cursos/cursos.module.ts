import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './cursos.component';
import { SharedModule } from '../../../../shared/shared.module';
import { cursosService } from './cursos.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CursosMapReducer } from './store/cursos.map';
import { CursosEffects } from './store/cursos.effects';


@NgModule({
  declarations: [CursosComponent],
  imports: [CommonModule, CursosRoutingModule, SharedModule,
    StoreModule.forFeature('cursos', CursosMapReducer),
    EffectsModule.forFeature([
      CursosEffects
    ])],
  providers: [cursosService],
})
export class CursosModule {}
