import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Peticiones } from '../models/peticiones';

@Injectable({
  providedIn: 'root'
})
export class BotsService {

  private apiUrl = 'http://localhost:4000/api/v1'

  constructor(private http: HttpClient) {}

  getRutaPrueba():Observable<Peticiones[]>{
    return this.http.get<Peticiones[]>(`${this.apiUrl}/ruta`)
  }
}

