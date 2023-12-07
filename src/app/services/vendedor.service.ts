import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VendedorService {
  private apiUrl = 'http://localhost:8081/api/vendedores';

  constructor(private http: HttpClient) {}

  getAllVendedores(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/todos`);
  }

  getVendedorById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  addVendedor(vendedorData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, vendedorData);
  }

  updateVendedor(id: number, vendedorData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, vendedorData);
  }

  deleteVendedor(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
