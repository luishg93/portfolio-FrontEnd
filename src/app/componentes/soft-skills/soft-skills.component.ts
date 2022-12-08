import { PortfolioDatosService } from './../../servicios/portfolio-datos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-soft-skills',
  templateUrl: './soft-skills.component.html',
  styleUrls: ['./soft-skills.component.css']
})
export class SoftSkillsComponent implements OnInit {
  softSkillsLista: any;
  constructor(private portfolioDatos: PortfolioDatosService) { }

  ngOnInit(): void {
    this.portfolioDatos.obtenerDatos().subscribe(data => {
      this.softSkillsLista=data.softSkills;
    })
  }

}
