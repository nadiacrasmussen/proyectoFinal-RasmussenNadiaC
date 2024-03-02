
import { enviroment } from './../../../../../../enviroments/enviroments.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../users/models';
import { catchError, concatMap, throwError } from 'rxjs';
import { CreateInscriptionData, Inscription } from './models';


@Injectable({
  providedIn: 'root'
})
export class InscriptionsService {

  constructor( private http: HttpClient) {
  }
  getInscriptions() {
    return this.http.get<Inscription[]>(
      `${enviroment.apiUrl}/inscriptions?_embed=user&_embed=curso`
    );
  }

  getInscriptionsById(userId: string | number) {
    return this.http.get<User>(`${enviroment.apiUrl}/users/${userId}`).pipe(
      concatMap((user) =>
        this.http.get(`${enviroment.apiUrl}/inscriptions?userId=${user.id}`)
      ),
      catchError((error) => {
        alert('Ocurrio un error');
        return throwError(() => error);
      })
    );
  }

  createInscription(data: CreateInscriptionData) {
    return this.http.post<Inscription>(`${enviroment.apiUrl}/inscriptions`, data);
  }
}
