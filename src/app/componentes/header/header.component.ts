
import { PortfolioDatosService } from './../../servicios/portfolio-datos.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  miPortfolio: any; //a esta variable le asignaremos el valor de data (datos obtenidos del json (objeto))
  constructor(private portfolioDatos: PortfolioDatosService) { }

  ngOnInit(): void {
    //nos subscribimos a nuestro servicio para que nos muestre los datos obtenidos en el observable
    //por medio del metodo get()
    this.portfolioDatos.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.miPortfolio=data;//una vez asignados los datos a la variable los enlazaremos con el HTML
      //del componente
    });
  }
  

}


