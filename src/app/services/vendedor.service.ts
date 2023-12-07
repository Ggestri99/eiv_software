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
    console.log(id)
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
