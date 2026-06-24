import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})

export class AuthService {
  private apiUrl = 'https://florapp-backend-n9bz.onrender.com/api/usuarios/';
  
  constructor(private http: HttpClient) {}


 // REGISTRO 
  register(userData: any): Observable<any> {
  return this.http.post(`${this.apiUrl}usuarios/`, userData);
}


 // LOGIN
  login(credentials: { email: string; contrasena: string }): Observable<any> {
  return this.http.post(`${this.apiUrl}login/`, credentials);
}
}
