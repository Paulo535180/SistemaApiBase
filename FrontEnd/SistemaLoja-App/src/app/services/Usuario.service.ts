import{HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
baseUrl =  'https://localhost:5001/api/eventos'
constructor(private http: HttpClient) { }

getUsuarios(){
  return this.http.get(this.baseUrl);
}

}
