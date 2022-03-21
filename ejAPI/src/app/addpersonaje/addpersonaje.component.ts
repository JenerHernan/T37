import { Component, OnInit } from '@angular/core';
import {Personaje} from '../personaje.model';
import { FormsModule } from '@angular/forms';
import { APIService } from '../api.service';
import { response } from 'express';

@Component({
  selector: 'app-addpersonaje',
  templateUrl: './addpersonaje.component.html',
  styleUrls: ['./addpersonaje.component.css']
})
export class AddpersonajeComponent implements OnInit {

  personaje: Personaje = {
    name: '',
    status: '',
    species: '',
    gender: '',
    origin: '',
    image: ''
  }

  constructor(private servicio: APIService) { }

  ngOnInit(): void {
  }
  save(){
    this.servicio.create(this.personaje).subscribe(
      response => (
        window.location.pathname = "/personajes"
      )
    );
  }

}
