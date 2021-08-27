import{HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/Usuario';


@Injectable(
 // {providedIn: 'root'}
  )
export class UsuarioService {

baseUrl =  'https://localhost:5001/api/Usuario/Usuarios'

constructor(private http: HttpClient) { }

getUsuarios() : Observable<Usuario[]>{
  return this.http.get<Usuario[]>(this.baseUrl);
}

getUsuarioPorId (id: number) : Observable<Usuario>{
  return this.http.get<Usuario>(`${this.baseUrl}/${id}`);
}

}
