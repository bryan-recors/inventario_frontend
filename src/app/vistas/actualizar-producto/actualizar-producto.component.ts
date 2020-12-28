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
  constructor(private activerouter:ActivatedRoute, private router:Router, private api:ApiService ) { }

  datosProducto:productoI;
  editarForm = new FormGroup({
    id:new FormControl(''),
    nombre:new FormControl(''),
    descripcion:new FormControl(''),
    precio:new FormControl(''),
    stock:new FormControl(''),
    proveedor:new FormControl(''),

  });

  ngOnInit(): void {
    //obtener el id
    let productoid=this.activerouter.snapshot.paramMap.get('id');
    console.log("este es id de producto");
    console.log(productoid);

    this.api.getSingleProductos(productoid).subscribe(data =>{
      console.log(data);
      this.datosProducto=data;
      //console.log("mm");
      //console.log(this.datosProducto);
      this.editarForm.setValue({
        'id':productoid,
        'nombre':this.datosProducto.nombre,
        'descripcion':this.datosProducto.descripcion,
        'precio':this.datosProducto.precio,
        'stock':this.datosProducto.stock,
        'proveedor':this.datosProducto.proveedor.id,
      });
      console.log("editar form");
      console.log(this.editarForm.value);
    })
  }

  postForm(form:productoI){
    console.log(form)
    this.api.putProducto(form).subscribe(data =>{
      console.log(data);
    });
    this.router.navigate(['listar-productos']);
  }

}
