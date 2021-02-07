import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {proveedorI} from '../../modelos/proveedor.interface';
import {ApiService} from '../../servicios/api/api.service';
import {FormGroup, FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-eliminar-proveedor',
  templateUrl: './eliminar-proveedor.component.html',
  styleUrls: ['./eliminar-proveedor.component.css']
})
export class EliminarProveedorComponent implements OnInit {

  constructor(private activerouter:ActivatedRoute, private router:Router, private api:ApiService) { }
  datosProveedor:proveedorI;
  eliminarForm = new FormGroup({
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
    });
  }

  eliminar_Proveedor(){
    let datos:proveedorI = this.eliminarForm.value;
    let proveedorid=this.activerouter.snapshot.paramMap.get('id');
    console.log("id de proveedor a eliminar");
    console.log(proveedorid);
    
    this.api.deleteProveedor(proveedorid).subscribe(data =>{
      console.log(data);
    });
    this.router.navigate(['listar-proveedores']);
  }
}
