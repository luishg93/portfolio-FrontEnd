import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from "./componentes/header/header.component";
import { InformacionComponent } from './componentes/informacion/informacion.component';
import { ExperienciaLaboralComponent } from './componentes/experiencia-laboral/experiencia-laboral.component';
import { EstudioComponent } from './componentes/estudio/estudio.component';
import { HardSkillsComponent } from './componentes/hard-skills/hard-skills.component';
import { SoftSkillsComponent } from './componentes/soft-skills/soft-skills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { NgCircleProgressModule } from 'ng-circle-progress';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InformacionComponent,
    ExperienciaLaboralComponent,
    EstudioComponent,
    HardSkillsComponent,
    SoftSkillsComponent,
    ProyectosComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { };   
