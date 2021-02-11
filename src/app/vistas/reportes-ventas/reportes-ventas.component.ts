import { Component, OnInit } from '@angular/core';
// importo mi servicios sandoval
import {ApiService} from '../../servicios/api/api.service';
//fin

@Component({
  selector: 'app-reportes-ventas',
  templateUrl: './reportes-ventas.component.html',
  styleUrls: ['./reportes-ventas.component.css']
})
export class ReportesVentasComponent implements OnInit {

  constructor(public api:ApiService) { }
  ngOnInit(): void {
    this.api.getAllVentas()
  }

}
