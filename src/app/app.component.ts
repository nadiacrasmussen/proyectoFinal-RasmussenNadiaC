
import { Component, OnInit } from '@angular/core';
import { loadingService } from './core/service/loading.service';
import { Observable } from 'rxjs';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
 export class AppComponent  {
  title = 'proyectoFinal';

  isLoading  = false;
  constructor(){}


 }
