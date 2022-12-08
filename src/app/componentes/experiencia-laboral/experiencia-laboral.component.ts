import { PortfolioDatosService } from './../../servicios/portfolio-datos.service';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css']
})
export class ExperienciaLaboralComponent implements OnInit {
 

  experienciaLista: any;
  constructor(private portfolioDatos: PortfolioDatosService) {
 
   };

  ngOnInit(): void {
    this.portfolioDatos.obtenerDatos().subscribe(data =>{
      this.experienciaLista=data.experiencia;
    })

  }

  

}



