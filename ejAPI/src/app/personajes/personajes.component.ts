import { Component, OnInit } from '@angular/core';
import { MiServicioService } from '../mi-servicio.service';
@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  personajes: any = null;

  constructor(private miservicio: MiServicioService) {}

  ngOnInit(): void {
    this.miservicio.getPersonajes().subscribe(result =>{ this.personajes = result;
      console.log(result)
    });

  }

}
