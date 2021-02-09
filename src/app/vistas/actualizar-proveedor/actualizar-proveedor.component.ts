import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {proveedorI} from '../../modelos/proveedor.interface';
import {ApiService} from '../../servicios/api/api.service';
import {FormGroup, FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-actualizar-proveedor',
  templateUrl: './actualizar-proveedor.component.html',
  styleUrls: ['./actualizar-proveedor.component.css']
})
export class ActualizarProveedorComponent implements OnInit {

  constructor(private activerouter:ActivatedRoute, private router:Router, private api:ApiService ) { }

  datosProveedor:proveedorI;
  editarForm = new FormGroup({
    id:new FormControl(''),
    nombre:new FormControl(''),
    descripcion:new FormControl(''),
    telefono:new FormControl(''),
    celular:new FormControl(''),
    email:new FormControl(''),
    dias_visita:new FormControl(''),

  });

  ngOnInit(): void {
    //obtener id
    let proveedorid=this.activerouter.snapshot.paramMap.get('id');
    console.log("id del proveedor");
    console.log(proveedorid);

    this.api.getSingleProveedores(proveedorid).subscribe(data =>{
      console.log(data);
      this.datosProveedor=data;
      this.editarForm.setValue({
        'id':proveedorid,
        'nombre':this.datosProveedor.nombre,
        'descripcion':this.datosProveedor.descripcion,
        'telefono':this.datosProveedor.telefono,
        'celular':this.datosProveedor.celular,
        'email':this.datosProveedor.email,
        'dias_visita':this.datosProveedor.dias_visita,
      });
      console.log("editar form");
      console.log(this.editarForm.value);
    })
  }

  postForm(form:proveedorI){
    console.log(form)
    this.api.putProveedor(form).subscribe(data =>{
      console.log(data);
    });
    //this.router.navigate(['listar-proveedores']);
  }

  guardarProveedor(){
    this.api.putProveedor(this.editarForm.value)
            .subscribe(
              rt => console.log(rt),
              er => console.log(er),
              () => console.log('Proveedor Guardado Cambios')
            )
    this.router.navigate(['listar-proveedores']);
  }

}
