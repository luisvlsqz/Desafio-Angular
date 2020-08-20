import { Component, OnInit } from '@angular/core';
import { AlumnoService } from './../services/alumno.service';
import { Alumno } from './../interfaces/alumno';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  title = 'escuela';
  show:boolean=false;
  todos: Alumno[];
  constructor( private alumnoService: AlumnoService)
  {}
 
  getAllAlumnos() {
    this.alumnoService.getAllAlumnos()
    .subscribe(todos => { this.todos = todos;
      this.show = true;
      
    })
  }

  getAllProfesores() {
    this.alumnoService.getAllProfesores()
    .subscribe(todos => { this.todos = todos;
      this.show = true;
      
    })
  }

  
  getAllCasas(k) {
    this.alumnoService.getAllCasas(k)
    .subscribe(todos => { this.todos = todos;
      this.show = true;
      
    })
  }
}
