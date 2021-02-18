import { Component, OnInit } from '@angular/core';
import { ventaI } from 'src/app/modelos/regventa.interface';
// importo mi servicios sandoval
import {ApiService} from '../../servicios/api/api.service';
//fin

@Component({
  selector: 'app-reportes-ventas',
  templateUrl: './reportes-ventas.component.html',
  styleUrls: ['./reportes-ventas.component.css']
})
export class ReportesVentasComponent implements OnInit {
  ventas:ventaI[];
  constructor(public api:ApiService) { }
  ngOnInit(): void {
    
    
  }
  selectFecha(){
    this.api.getAllventa().subscribe(data => {
      var ventaL=[];
      var FechaIni=(<HTMLInputElement>document.getElementById('inicioFechaReporte')).value;
      var FechaFin=(<HTMLInputElement>document.getElementById('finFechaReporte')).value;
        for(let posicion in data){
          console.log(data[posicion].fecha.substr(0, 10));
          if (data[posicion].fecha >= FechaIni && data[posicion].fecha.substr(0, 10) <= FechaFin){
            ventaL.push(data[posicion]);
            console.log(data[posicion].fecha);
            this.ventas=ventaL;
          }
        }
        console.log(ventaL);
    })

 }

}
