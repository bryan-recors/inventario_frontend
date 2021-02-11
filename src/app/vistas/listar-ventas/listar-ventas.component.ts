import { Component, OnInit } from '@angular/core';
// importo mi servicios sandoval
import {ApiService} from '../../servicios/api/api.service';
//fin

@Component({
  selector: 'app-listar-ventas',
  templateUrl: './listar-ventas.component.html',
  styleUrls: ['./listar-ventas.component.css']
})

export class ListarVentasComponent implements OnInit {

  constructor(public api:ApiService) { }

  ngOnInit(): void {
    this.api.getAllVentas()
  }

}
