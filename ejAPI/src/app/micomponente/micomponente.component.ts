import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-micomponente',
  templateUrl: './micomponente.component.html',
  styleUrls: ['./micomponente.component.css']
})
export class MicomponenteComponent implements OnInit {
  @Input() nombre: string | undefined;
  @Input() imagen: string | undefined;
  @Input() id: string | undefined;

  constructor() {

  }

  ngOnInit(): void {
  }

}
