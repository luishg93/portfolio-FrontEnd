import { PortfolioDatosService } from './../../servicios/portfolio-datos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estudio',
  templateUrl: './estudio.component.html',
  styleUrls: ['./estudio.component.css']
})
export class EstudioComponent implements OnInit {
  estudioLista: any;
  constructor(private portfolioDatos: PortfolioDatosService) { }

  ngOnInit(): void {
    this.portfolioDatos.obtenerDatos().subscribe(data => {
      this.estudioLista= data.estudios;
    })
  }

}
