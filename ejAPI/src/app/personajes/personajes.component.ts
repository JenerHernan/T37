import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';
@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  personajes: any = null;

  constructor(private miservicio: APIService) {}

  ngOnInit(): void {
    this.miservicio.getAll().subscribe(result =>{ this.personajes = result;
      console.log(result)
    });

  }

}
