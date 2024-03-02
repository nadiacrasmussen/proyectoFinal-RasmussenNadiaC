import { createAction, props } from '@ngrx/store';
import { cursos} from '../models';

// pedir los datos al backend / api REST
export const setGetCursos = createAction(
    '[Cursos Component] Set Get Cursos'
);
// caso de success / caso correcto de datos
export const setGetCursosSuccess = createAction(
    '[Cursos Component] Set Get Cursos Success',
    props<{ cursos: cursos[] }>()
);
// caso de error al pedir los datos
export const setGetCursosError = createAction(
    '[Cursos Component] Set Get Cursos Error',
    props<{ error: any }>()
);
// volver al estado inicial de la applicaicon / page / on destroy
export const setGetCursosClear = createAction(
    '[Cursos Component] Set Get Cursos Clear'
);
