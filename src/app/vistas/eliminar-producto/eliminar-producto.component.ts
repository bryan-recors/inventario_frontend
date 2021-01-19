import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {productoI} from '../../modelos/producto.interface';
import {ApiService} from '../../servicios/api/api.service';
import {FormGroup, FormControl,Validators} from '@angular/forms';


@Component({
  selector: 'app-eliminar-producto',
  templateUrl: './eliminar-producto.component.html',
  styleUrls: ['./eliminar-producto.component.css']
})
export class EliminarProductoComponent implements OnInit {

  constructor(private activerouter:ActivatedRoute, private router:Router, private api:ApiService) { }
  datosProducto:productoI;
  eliminarForm = new FormGroup({
    id:new FormControl(''),
    nombre:new FormControl(''),
    descripcion:new FormControl(''),
    precio:new FormControl(''),
    stock:new FormControl(''),
    proveedor:new FormControl(''),

  });
  ngOnInit(): void {
    let productoid=this.activerouter.snapshot.paramMap.get('id');
    console.log("este es id de producto");
    console.log(productoid);

    this.api.getSingleProductos(productoid).subscribe(data =>{
      console.log(data);
      this.datosProducto=data;
    });
  }
  eliminar(){
    let datos:productoI = this.eliminarForm.value;
    this.api.deleteProducto(datos).subscribe(data =>{
      console.log(data);
    });
    this.router.navigate(['listar-productos']);
  }
}



