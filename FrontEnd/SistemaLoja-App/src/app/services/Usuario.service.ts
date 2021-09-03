import{HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/Usuario';


@Injectable(
 // {providedIn: 'root'}
  )
export class UsuarioService {

baseUrl =  'https://localhost:5001/api/Usuario'

constructor(private http: HttpClient) { }


public criarUsuario (usuario: Usuario): Observable<Usuario>{
  return this.http.post<Usuario>(this.baseUrl, usuario);
}

public atualizarUsuario (id: number, usuario: Usuario): Observable<Usuario> {
  return this.http.put<Usuario>(`${this.baseUrl}/${id}`, usuario)
}


public excluir (id: number): Observable<string>{
  return this.http.delete<string>(`${this.baseUrl}/${id}`)
}
public login (usuario:Usuario){

}
public getUsuarios() : Observable<Usuario[]>{
  let result = this.http.get<Usuario[]>(this.baseUrl);
  console.log(result)
  return result;

}

public getUsuarioPorId (id: number) : Observable<Usuario>{
  return this.http.get<Usuario>(`${this.baseUrl}/${id}`);
}

}
