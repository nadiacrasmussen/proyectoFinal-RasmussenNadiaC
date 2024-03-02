import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { setGetCursos, setGetCursosError, setGetCursosSuccess } from './cursos.actions';
import { catchError, map, mergeMap, of } from 'rxjs';
import { cursosService } from '../cursos.service';
import { cursos } from '../models';


@Injectable({
    providedIn: 'root'
})
export class CursosEffects {
    constructor(private _actions$: Actions,
    private cursosService: cursosService) { }

    cursosEffects$ = createEffect( ():any => this._actions$.pipe(
        ofType( setGetCursos),// Accion a escuchar cuando sea despachada.
        mergeMap(// hago un merge map para hacer el llamado http de mi servicio.
            () => this.cursosService.getCursos().pipe(
                // en caso afirmativo o de success va a ir por el operador 'map', y nos devuelve la accion de success.
                map( (cursos:cursos[]) => setGetCursosSuccess({ cursos})),
                // caso contrario, entra en el 'catchError', y nos devuelve esa accion de error.
                catchError( (err: any) => of(setGetCursosError({error: err}) ) )
            )
        )
    ))
}
