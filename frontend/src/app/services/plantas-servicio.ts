import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from '../interfaces/categoria';
import { Especie } from '../interfaces/especie';



@Injectable({ providedIn: 'root' })
export class PlantasServicio {
  private API = 'http://localhost:8000/api/flora';

  constructor(private http: HttpClient) {}

  getMisPlantas(usuarioId: number): Observable<Especie[]> {
    return this.http.get<Especie[]>(`${this.API}/especies/mis-especies/?usuario_id=${usuarioId}`);
  }

  getCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${this.API}/categorias/`);
  }

  getPlantas(): Observable<Especie[]> {
    return this.http.get<Especie[]>(`${this.API}/especies/`);
  }

  crearPlanta(Especie: Especie): Observable<Especie> {
    return this.http.post<Especie>(`${this.API}/especies/`, Especie);
  }

  eliminarPlanta(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API}/especies/${id}/`);
  }

  actualizarPlanta(id: number, especie: Especie): Observable<any> {
    return this.http.put<any>(`${this.API}/especies/${id}/`, especie);
  }

  getPlantaId(id: number): Observable<Especie> {
    return this.http.get<Especie>(`${this.API}/especies/${id}/`);
  }
}
