import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Perfil } from '../models/Perfil';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {


  baseUrl =  'https://localhost:5001/api/Perfil'

constructor(private http: HttpClient) { }


getPerfis() : Observable<Perfil[]>{
  return this.http.get<Perfil[]>(this.baseUrl);
}

}
