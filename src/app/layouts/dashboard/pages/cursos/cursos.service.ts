import { Injectable } from "@angular/core";
import { cursos } from './models/index';
import { Observable, map, of } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { enviroment } from "../../../../../enviroments/enviroments";

let curso : any[] =[]



 @Injectable()
export class cursosService{
  constructor(
private httpclient : HttpClient
  ){}
  getCursos ():Observable<cursos[]>{
    return this.httpclient.get<cursos[]>(`${enviroment.apiUrl}/cursos`)
  }

  deleteCursoById(id:string){
    return this.httpclient.delete(`${enviroment.apiUrl}/cursos/${id}`)
  }
}
