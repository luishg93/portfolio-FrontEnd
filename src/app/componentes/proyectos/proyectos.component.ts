import { PortfolioDatosService } from './../../servicios/portfolio-datos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectoLista: any;
  constructor(private portfolioDatos: PortfolioDatosService) { }

  ngOnInit(): void {
    this.portfolioDatos.obtenerDatos().subscribe(data => {
      this.proyectoLista= data.proyectos;
      console.log(this.proyectoLista);
    })
  }

}
