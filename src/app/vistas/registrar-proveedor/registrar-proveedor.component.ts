import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {ApiService} from '../../servicios/api/api.service';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-registrar-proveedor',
  templateUrl: './registrar-proveedor.component.html',
  styleUrls: ['./registrar-proveedor.component.css'],
  providers: [ApiService]
})
export class RegistrarProveedorComponent implements OnInit {

  registrarForm: FormGroup;

  constructor(private activerouter:ActivatedRoute, 
              private router:Router, 
              private api:ApiService,
              private formbuilder: FormBuilder) { this.registrarProveedor(); }

  ngOnInit(): void {
    //obtener id
    let proveedorid=this.activerouter.snapshot.paramMap.get('id');
    console.log("id del proveedor");
    console.log(proveedorid);

  }
  registrarProveedor(){
    this.registrarForm = this.formbuilder.group({
      nombre:'',
      descripcion:'',
      telefono:'',
      celular:'',
      email:'',
      dias_visita:'',
    })
  }

  guardarProveedor(){
    this.api.addProveedor(this.registrarForm.value)
            .subscribe(
              rt => console.log(rt),
              er => console.log(er),
              () => console.log('Proveedor Registrado')
            )
    this.router.navigate(['listar-proveedores']);
  }
}
