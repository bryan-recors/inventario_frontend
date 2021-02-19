import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListaproductosI } from 'src/app/modelos/listaProductos.interface';
import { ApiService } from 'src/app/servicios/api/api.service';
import {ListaproveedoresI} from '../../modelos/listaProveedores.interface';

@Component({
  selector: 'app-reporte-productos',
  templateUrl: './reporte-productos.component.html',
  styleUrls: ['./reporte-productos.component.css']
})
export class ReporteProductosComponent implements OnInit {
  productos:ListaproductosI[];
  filterProductos = '';

  proveedores:ListaproveedoresI[];
  filterProv = '';
  constructor(private api:ApiService, private router:Router) { }
  
  ngOnInit(): void {
      this.api.getAllproductos().subscribe(data => {
        var productosL=[];
        for(let posicion in data){
          console.log(data[posicion].stock);
          if (data[posicion].stock <=5){
            productosL.push(data[posicion]);
          }
        }
        console.log(productosL);
        this.productos=productosL;
        
      })

      this.api.getAllProveedores().subscribe(data => {
        this.proveedores=data;
      })
  }

}
