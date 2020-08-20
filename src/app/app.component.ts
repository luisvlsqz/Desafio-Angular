import { Component } from '@angular/core';
import { AlumnoService } from './services/alumno.service';
import { Alumno } from './interfaces/alumno';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  show:boolean=false;
  ver:boolean=false;
  todos: Alumno[];
  age;
  date:any;
  datenew:any;
  showAge;
  edad;
  
  
  
  
  constructor( private alumnoService: AlumnoService, public datepipe: DatePipe)
  {}
  

  getAllAlumnos() {
    this.ver = false;
    this.alumnoService.getAllAlumnos()
    .subscribe(todos => { this.todos = todos;

    for(let alumno of this.todos){
      this.date = alumno.dateOfBirth
      this.datenew = this.date.split(" ")[0].split("-").reverse().join("-");
      this.show = true;
      this.ageCalculator();
      alumno.showAge = this.showAge;
    }    
  }) 
  }
 
  
  
  getAllProfesores() {
    this.ver = false;
    this.alumnoService.getAllProfesores()
    .subscribe(todos => { this.todos = todos;
      for(let alumno of this.todos){
        this.date = alumno.dateOfBirth
        this.datenew = this.date.split(" ")[0].split("-").reverse().join("-");
        this.show = true;
        this.ageCalculator();
        alumno.showAge = this.showAge;
      }  

    })
  }

  getAllCasas(k) {
    this.ver = false;
    this.alumnoService.getAllCasas(k)
    .subscribe(todos => { this.todos = todos;
      for(let alumno of this.todos){
        this.date = alumno.dateOfBirth
        this.datenew = this.date.split(" ")[0].split("-").reverse().join("-");
        this.show = true;
        this.ageCalculator();
        alumno.showAge = this.showAge;
      }  
      
    })
  }

  ageCalculator(){
    this.showAge = null;
    this.age = this.datenew;
    if(this.age){
      const convertAge = new Date(this.age);
      const timeDiff = Math.abs(Date.now() - convertAge.getTime());
      this.showAge = Math.floor((timeDiff / (1000 * 3600 * 24))/365);

    }
  }

  getSolicitud(){
    this.ver = true;
    this.show = false;
  }
    
  }
  


