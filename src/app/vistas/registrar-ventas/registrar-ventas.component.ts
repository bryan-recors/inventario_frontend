import { Component, OnInit } from '@angular/core';
// importo mi servicios sandoval
import {ApiService} from '../../servicios/api/api.service'
//fin
import {ListaproductosI} from '../../modelos/listaProductos.interface';

@Component({
  selector: 'app-registrar-ventas',
  templateUrl: './registrar-ventas.component.html',
  styleUrls: ['./registrar-ventas.component.css']
})

export class RegistrarVentasComponent implements OnInit {

  public lstsearch: any[];
  public query:string;

  constructor(public api:ApiService) { }

  ngOnInit(): void {
    this.searchProd();
  }

  searchProd(){
    this.api.searchProducto(this.query).subscribe(response => {
      //this.lstsearch = response
      console.log(response);
    });
  }


}
