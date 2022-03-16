import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MiServicioService {

  constructor(private http: HttpClient) { }

  getPersonajes(){
    return this.http.get("https://rickandmortyapi.com/api/character/1,2,3,4,6");
  }

  getPersonaje(id:any){
    return this.http.get(`https://rickandmortyapi.com/api/character/${id}`);
  }
}
