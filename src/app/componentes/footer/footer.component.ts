import { PortfolioDatosService } from './../../servicios/portfolio-datos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  miPortfolio: any;
  constructor(private portfolioDatos: PortfolioDatosService) { }

  ngOnInit(): void {
    this.portfolioDatos.obtenerDatos().subscribe(data => {
      this.miPortfolio= data
    })
  }

}
