import { Action, createReducer, on } from "@ngrx/store";
import { setGetCursos, setGetCursosClear, setGetCursosError, setGetCursosSuccess } from "./cursos.actions";
import { cursos} from "../models";

// state || tipo de dato de mi componente
export interface CursosState<T> {
    pending: boolean;
    success: boolean;
    error: any;
    cursos: T
}
// estado incial del componente || store
const initialState: CursosState<cursos[]> = {
    pending: false,
    success: false,
    error: null,
    cursos: []
};
// mamneja las acciones y el devuelve estado nuevo al componente
const setGetCursosReducer = createReducer(
    initialState,
    on(setGetCursos, state => ({
        pending: true,
        success: false,
        error: null,
        cursos: []
    })),
    on(setGetCursosSuccess, state => ({
        pending: false,
        success: true,
        error: null,
        cursos: state.cursos
    })),
    on(setGetCursosError, state => ({
        pending: false,
        success: false,
        error: state.error,
        cursos: []
    })),
    on(setGetCursosClear, state => initialState),
);

export function cursosReducer(state: CursosState<cursos[]>, action: Action) {
    return setGetCursosReducer(state, action);
}
