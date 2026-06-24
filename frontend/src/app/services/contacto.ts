import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contacto } from '../interfaces/contacto';



@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  private apiUrl = 'http://localhost:8000/api/interacciones/';

  constructor(private http: HttpClient) {}

  getMensajes(): Observable<Contacto[]> {
    return this.http.get<Contacto[]>(this.apiUrl);
  }

  marcarLeido(id: number): Observable<Contacto> {
    return this.http.patch<Contacto>(`${this.apiUrl}${id}/marcar-leido/`, {});
  }

  marcarRespondido(id: number): Observable<Contacto> {
    return this.http.patch<Contacto>(`${this.apiUrl}${id}/marcar-respondido/`, {});
  }
}