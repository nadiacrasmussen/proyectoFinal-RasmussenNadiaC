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
import { InscriptionTableComponent } from './components/inscription-table/inscription-table/inscription-table.component';



@NgModule({
  declarations: [
    InscriptionsComponent,
    InscriptionsDialogComponent,
    InscriptionTableComponent
  ],
  imports: [
    CommonModule,
    InscriptionsRoutingModule,SharedModule,
    StoreModule.forFeature(inscriptionsFeature),
    EffectsModule.forFeature([InscriptionsEffects])
  ]
})
export class InscriptionsModule { }
