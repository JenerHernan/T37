import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIService } from '../api.service';
@Component({
  selector: 'app-personajedetalle',
  templateUrl: './personajedetalle.component.html',
  styleUrls: ['./personajedetalle.component.css']
})
export class PersonajedetalleComponent implements OnInit {

  id: any;
  personaje: any;

  constructor(private route:ActivatedRoute,private servicio:APIService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.servicio.get(this.id).subscribe(result => this.personaje = result)
  }

}
