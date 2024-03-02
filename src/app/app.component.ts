
import { Component, OnInit } from '@angular/core';
import { loadingService } from './core/service/loading.service';
import { BehaviorSubject } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
 export class AppComponent implements OnInit {
  title = 'proyectoFinal';

  isLoading : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
 constructor( private LoadingService: loadingService)  {}
 get isLoading$(){ return this.isLoading.asObservable()}

  ngOnInit(): void {
    this.LoadingService.isLoading$.subscribe(
      (v:boolean)=> this.isLoading.next(v)
    );
  }
}
