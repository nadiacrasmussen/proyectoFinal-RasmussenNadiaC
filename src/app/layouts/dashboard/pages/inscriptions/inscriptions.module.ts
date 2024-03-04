import { NgModule, effect } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscriptionsRoutingModule } from './inscriptions-routing.module';
import { InscriptionsComponent } from './inscriptions.component';
import { InscriptionsDialogComponent } from './components/inscriptions-dialog/inscriptions-dialog.component';
import { SharedModule } from '../../../../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { inscriptionsFeature } from './store/inscriptions.reduce';
import { EffectsModule } from '@ngrx/effects';
import { InscriptionsEffects } from './store/inscriptions.effects';



@NgModule({
  declarations: [
    InscriptionsComponent,
    InscriptionsDialogComponent
  ],
  imports: [
    CommonModule,
    InscriptionsRoutingModule,SharedModule,
    StoreModule.forFeature(inscriptionsFeature),
    EffectsModule.forFeature([InscriptionsEffects])
  ]
})
export class InscriptionsModule { }
