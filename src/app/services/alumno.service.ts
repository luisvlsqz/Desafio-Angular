import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Alumno } from './../interfaces/alumno';



@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  private api = "http://hp-api.herokuapp.com/api/characters";
  constructor( private http: HttpClient) { }

  getAllAlumnos(){
    return this.http.get<Alumno[]>(`${this.api}/students`)
    
  }

  getAllProfesores(){
    return this.http.get<Alumno[]>(`${this.api}/staff`)
  }

  getAllCasas(k){
    return this.http.get<Alumno[]>(`${this.api}/house/${k}`)
  }

  getDatos(k){
    return this.http.get<Alumno[]>(`${this.api}/house/${k}`)
  }



}
