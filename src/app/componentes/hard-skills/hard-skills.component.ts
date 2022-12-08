import { PortfolioDatosService } from './../../servicios/portfolio-datos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hard-skills',
  templateUrl: './hard-skills.component.html',
  styleUrls: ['./hard-skills.component.css']
})
export class HardSkillsComponent implements OnInit {
  hardSkillsLista: any;
  constructor(private portfolioDatos: PortfolioDatosService) { }

  ngOnInit(): void {
    this.portfolioDatos.obtenerDatos().subscribe(data => {
      this.hardSkillsLista= data.hardSkills;
    })
  }

}
