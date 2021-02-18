import { Component, OnInit } from '@angular/core';
import { compraI } from 'src/app/modelos/regcompra.interface';
import { ApiService } from 'src/app/servicios/api/api.service';

@Component({
  selector: 'app-reporte-compras',
  templateUrl: './reporte-compras.component.html',
  styleUrls: ['./reporte-compras.component.css']
})
export class ReporteComprasComponent implements OnInit {
  compras:compraI[];
  constructor(public api:ApiService) { }
  ngOnInit(): void {
  }
  selectFecha(){
    this.api.getAllcompra().subscribe(data => {
      var compraL=[];
      var FechaIni=(<HTMLInputElement>document.getElementById('inicioFechaReporte')).value;
      var FechaFin=(<HTMLInputElement>document.getElementById('finFechaReporte')).value;
        for(let posicion in data){
          console.log(data[posicion].fecha.substr(0, 10));
          if (data[posicion].fecha >= FechaIni && data[posicion].fecha.substr(0, 10) <= FechaFin){
            compraL.push(data[posicion]);
            console.log(data[posicion].fecha);
            this.compras=compraL;
          }
        }
        console.log(compraL);
    })

 }

}
