import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { Perfil } from '../models/Perfil';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

baseUrl = 'https://localhost:5001/api/Perfil/Perfis'

constructor(private http: HttpClient) { }

public getPerfis(): Observable<Perfil[]>{
  return this.http.get<Perfil[]>(this.baseUrl);
}

}
