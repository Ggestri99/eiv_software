import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { GetVendedor, Vendedor } from '../shared/models/vendedor.models';

@Injectable({
  providedIn: 'root'
})
export class VendedorService {
  private apiUrl = 'http://localhost:8081/api/vendedores';

  constructor(private http: HttpClient) { }

  getAllVendedores(): Observable<Vendedor[]> {
    return this.http.get<Vendedor[]>(`${this.apiUrl}/todos`);
  }

  getVendedorById(vendedorId: number): Observable<Vendedor> {
    return this.getAllVendedores().pipe(
      map(
        vendedores => {
          return vendedores.find(vendedor => vendedor.id === Number(vendedorId))!
        }
      )
    )
  }

  addVendedor(vendedorData: Vendedor): Observable<Vendedor> {
    return this.http.post<Vendedor>(`${this.apiUrl}`, vendedorData);
  }

  updateVendedor(id: number, vendedorData: Vendedor): Observable<Vendedor> {
    return this.http.put<Vendedor>(`${this.apiUrl}/${id}`, vendedorData);
  }

  deleteVendedor(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  subirFotoVendedor(id: number, file: File): Observable<void> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post<void>(`${this.apiUrl}/${id}/foto`, formData);
  }

  getFotoVendedor(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}/foto`, {
      responseType: 'blob' as 'json'
    });
  }

}
