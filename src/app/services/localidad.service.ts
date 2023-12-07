import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Localidad } from '../shared/models/localidades.models';

@Injectable({
  providedIn: 'root'
})
export class LocalidadService {
  private apiUrl = 'http://localhost:8081/api/localidades';

  constructor(private http: HttpClient) {}

  getAllLocalidades(): Observable<Localidad[]> {
    return this.http.get<any[]>(`${this.apiUrl}/todas`);
  }

}
