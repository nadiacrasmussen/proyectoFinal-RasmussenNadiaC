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
    return this.http.get<Curso[]>(`${enviroment.apiUrl}/courses`)
  }

  getCurso(curso_id: any) {
    return this.http.get(`${enviroment.apiUrl}/${curso_id}`)
  }

  addCurso(curso: Curso): Observable<Curso> {
    return this.http.post<Curso>(`${enviroment.apiUrl}/courses`, curso)
  }

  updateCurso(curso_id:number, curso: Curso): Observable<Curso> {
    return this.http.patch<Curso>(`${enviroment.apiUrl}/courses/${curso_id}`, curso)
  }

  deleteCursobyId(id: string) {
    return this.http.delete(`${enviroment.apiUrl}/courses/${id}`)
  }

}
