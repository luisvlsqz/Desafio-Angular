import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AlumnoService } from '../services/alumno.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  lista = [];
  name;
  patronus;
  dateOfBirth;
  todos;
  constructor(private alumnoService: AlumnoService) { }

    miFormulario = new FormGroup({
    username : new FormControl('', Validators.required),
    patronus: new FormControl('', Validators.required),
    dateOfBirth: new FormControl('', Validators.required)
  });

  getdatos(){

    this.name = this.miFormulario.value.username;
    
    this.patronus = this.miFormulario.value.patronus;
    
    this.dateOfBirth = this.miFormulario.value.dateOfBirth;

    var to = {
      ['name']: this.name,
      ['patronus']: this.patronus,
      ['dateOfBirth']: this.dateOfBirth           
    };
   this.lista.push(to);
   this.miFormulario.reset();
  }

}

