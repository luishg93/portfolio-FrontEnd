import { PortfolioDatosService } from './../../servicios/portfolio-datos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit {
  miPortfolio: any//a esta variable le asignaremos el valor de data (datos obtenidos del json (objeto))
  
  constructor(private portfolioDatos: PortfolioDatosService) { }

  ngOnInit(): void {
    //nos subscribimos a nuestro servicio para que nos muestre los datos obtenidos en el observable
    //por medio del metodo get()
    this.portfolioDatos.obtenerDatos().subscribe(data => {
      this.miPortfolio=data;//una vez asignados los datos a la variable los enlazaremos con el HTML
      //del componente
    })
  }

}
