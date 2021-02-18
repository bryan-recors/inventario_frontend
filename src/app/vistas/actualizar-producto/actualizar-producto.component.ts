import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {productoI} from '../../modelos/producto.interface';
import {ApiService} from '../../servicios/api/api.service';
import {FormGroup, FormControl,Validators} from '@angular/forms';
import {ListaproveedoresI} from '../../modelos/listaProveedores.interface';

@Component({
  selector: 'app-actualizar-producto',
  templateUrl: './actualizar-producto.component.html',
  styleUrls: ['./actualizar-producto.component.css']
})

export class ActualizarProductoComponent implements OnInit {
  constructor(private activerouter:ActivatedRoute, private router:Router, private api:ApiService ) { }
  //proveedor
  proveedores:ListaproveedoresI[];
 //producto
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
    this.consultarproveedores();
    let productoid=this.activerouter.snapshot.paramMap.get('id');
    //console.log("este es id de producto");
    //console.log(productoid);
    this.api.getSingleProductos(productoid).subscribe(data =>{
      //console.log(data);
      this.datosProducto=data;
      //var indice:number = 0;
      var nombreprov:string = '';
      for(let posicion in this.proveedores){
        if (this.datosProducto.proveedor == this.proveedores[posicion].id){
        //  indice = Number(this.proveedores[posicion].id)
          nombreprov = this.proveedores[posicion].nombre
        }
      }
      this.editarForm.setValue({
        'id':productoid,
        'nombre':this.datosProducto.nombre,
        'descripcion':this.datosProducto.descripcion,
        'precio':this.datosProducto.precio,
        'stock':this.datosProducto.stock,
        'proveedor':nombreprov,
      });
      //console.log("editar form");
      //console.log(this.datosProducto.proveedor);
    })
  }

  //traer a los proveedores
  consultarproveedores(){
    this.api.getAllProveedores().subscribe(data => {
      this.proveedores=data;
      //console.log(this.proveedores);
    })
  }

  postForm(form:productoI){
    //console.log("editar formque tiene");
    //console.log(form)
    var indice:number = 0;
    for(let posicion in this.proveedores){
      if (form.proveedor == this.proveedores[posicion].nombre){
        indice = Number(this.proveedores[posicion].id)
      }
    }
    //console.log("lo encontre");
    //console.log(indice);
    form.proveedor=indice;
    //console.log(form)
    this.api.putProducto(form).subscribe(data =>{
      console.log(data);
    });
    this.router.navigate(['listar-productos']);
  }


}
