import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../servicios/api/api.service';
import {Router} from '@angular/router';
import {ListaproductosI} from '../../modelos/listaProductos.interface';
@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent implements OnInit {
  productos:ListaproductosI[];
  filterProducto = '';
  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {
      this.api.getAllproductos().subscribe(data => {
        this.productos=data;
      })
  }
  editarproducto(id){
    console.log(id)
    this.router.navigate(['actualizar-producto',id])
  }

  eliminarproducto(id){
    console.log(id)
    this.router.navigate(['eliminar-producto',id])
  }

}
