import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Personaje} from './personaje.model';

const url = "http://localhost:3000/characters"

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http:HttpClient) {}

  getAll(): Observable<Personaje[]> {
    return this.http.get<Personaje[]>(url);
  }

  get(id:any):Observable<Personaje[]>{
    return this.http.get<Personaje[]>(`${url}/${id}`);
  }

  create(data: any):Observable<any>{
    return this.http.post(url,data);
  }
}
