import { enviroment } from './../../../../../enviroments/enviroments.prod';
import { Injectable } from "@angular/core";
import { Observable, delay, of } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Curso } from './models/index';


@Injectable({ providedIn: 'root' })
export class CursosService {

  constructor(
    private http: HttpClient,
  ) { }


  getCursos() {
    return this.http.get(`${enviroment.apiUrl}/cursos`)
  }

  getCurso(curso_id: any) {
    return this.http.get(`${enviroment.apiUrl}/${curso_id}`)
  }

  addCurso(curso: Curso): Observable<Curso> {
    return this.http.post<Curso>(`${enviroment.apiUrl}/cursos`, curso)
  }

  updateCurso(curso_id:number, curso: Curso): Observable<Curso> {
    return this.http.patch<Curso>(`${enviroment.apiUrl}/cursos/${curso_id}`, curso)
  }

  deleteCursobyId(id: string) {
    return this.http.delete(`${enviroment.apiUrl}/cursos/${id}`)
  }

}
