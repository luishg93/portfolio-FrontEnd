import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioDatosService {

  constructor(private http: HttpClient) { }

  obtenerDatos():Observable<any> {
    return this.http.get('./assets/data/data.json');//Aca colocamos una URL a la que le aplicaremos un request
    //Luego debemos subscribirnos a nuestro servicio, a nuestro observable en el archivo .ts de nuestro componente
    //para que este nos pase la informacion y poderla mostrar en el HTML
  }
}
