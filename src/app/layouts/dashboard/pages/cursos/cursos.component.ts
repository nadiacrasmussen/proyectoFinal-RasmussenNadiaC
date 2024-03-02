import { cursos } from './models/index';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { cursosService } from './cursos.service';
import { Subscription, filter } from 'rxjs';
import { ICursosMapState } from './store/cursos.map';
import { Store } from '@ngrx/store';
import { setGetCursos, setGetCursosClear } from './store/cursos.actions';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss',
})
export class CursosComponent implements OnInit,OnDestroy{
  displayedColumns = [
    'id',
    'nombre',
    'fechaDeInicio',
    'fechaDeInicio',
    'horario',
    'duracion',
    'inscripcion',
  ];
  destroy$!: Subscription[];
  cursos: cursos[] = [];
  constructor(private store: Store<{ cursos: ICursosMapState }>) {
    this.destroy$ = [
      this.store.select('cursos').pipe(
        filter( state => state.cursos.pending !== true ||  state.cursos.cursos.length>0 ||  state.cursos.error !== null)
      )
    .subscribe(
        state => this.handlerCursos(state)
      )
    ];
  }
  ngOnDestroy(): void {
    this.store.dispatch(setGetCursosClear())
    this.destroy$.forEach(s=> s.unsubscribe())
  }
  ngOnInit(): void {
    this.store.dispatch(setGetCursos())
  }
  handlerCursos(state:any){
    console.log({state})
    if(state && state.cursos.cursos ){
      this.cursos = state.cursos.cursos
    }
  };
  oneDelete(id: string) {
   /* this.destroy$.push(
    /  this.cursosService.deleteCursoById(id).subscribe({
        next: (cursos: any) => {
          //  this.cursos =cursos;
          console.log(cursos);
        },
      })
    );*/
  }
}
