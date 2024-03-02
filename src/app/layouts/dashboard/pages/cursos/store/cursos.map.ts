import { ActionReducerMap } from "@ngrx/store";
import { CursosState, cursosReducer } from "./cursos.reducers";
import { cursos } from "../models";

export interface ICursosMapState {
    cursos: any
}

export const CursosMapReducer: ActionReducerMap<ICursosMapState> = {
    cursos: cursosReducer
}
