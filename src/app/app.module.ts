import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardModule } from './layouts/dashboard/dashboard.module';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule} from '@angular/material/form-field';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { loadingService } from './core/service/loading.service';
import {  HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UsersModule } from './layouts/dashboard/pages/users/users.module';
import { CursosModule } from './layouts/dashboard/pages/cursos/cursos.module';




@NgModule({
  declarations: [AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
UsersModule,
CursosModule,
   MatFormFieldModule,
   MatProgressSpinnerModule,
   HttpClientModule,
DashboardModule,
   StoreModule.forRoot({}, {}),
   EffectsModule.forRoot([]),



  ],
  providers: [
    {provide:  MAT_FORM_FIELD_DEFAULT_OPTIONS,
       useValue: {appearance: 'outline'},

      },
       loadingService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
