import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {productoI} from '../../modelos/producto.interface';
import {ApiService} from '../../servicios/api/api.service';
import {FormGroup, FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-actualizar-producto',
  templateUrl: './actualizar-producto.component.html',
  styleUrls: ['./actualizar-producto.component.css']
})
export class ActualizarProductoComponent implements OnInit {

  datosProducto:productoI;
  editarForm = new FormGroup({
    nombre:new FormControl(''),
    descripcion:new FormControl(''),
    precio:new FormControl(''),
    stock:new FormControl(''),
    proveedor:new FormControl(''),
    id:new FormControl('')
  });

  constructor(private router:Router, private activatedroute:ActivatedRoute, private api:ApiService ) { }


  ngOnInit(): void {
    let productoid=this.activatedroute.snapshot.paramMap.get('id');
    this.api.getSingleProductos(productoid).subscribe(data =>{
      this.datosProducto=data;
      this.editarForm.setValue({
        'nombre':this.datosProducto.nombre,
        'descripcion':this.datosProducto.descripcion,
        'precio':this.datosProducto.precio,
        'stock':this.datosProducto.stock,
        'proveedor':this.datosProducto.proveedor,
        'id':productoid
      });
    })
  }
  postForm(form:productoI){
    this.api.putProducto(form).subscribe(data =>{
      console.log(data);
    });
    
  }

}
