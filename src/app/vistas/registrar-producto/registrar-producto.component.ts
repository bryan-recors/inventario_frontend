import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {ApiService} from '../../servicios/api/api.service';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { proveedorI } from 'src/app/modelos/proveedor.interface';
import {ListaproveedoresI} from '../../modelos/listaProveedores.interface';

@Component({
  selector: 'app-registrar-producto',
  templateUrl: './registrar-producto.component.html',
  styleUrls: ['./registrar-producto.component.css'],
  providers: [ApiService]
})

export class RegistrarProductoComponent implements OnInit {

  registrarForm: FormGroup;
  proveedores:ListaproveedoresI[];

  constructor(private activerouter:ActivatedRoute,
              private router:Router,
              private api:ApiService,
              private formbuilder: FormBuilder) { this.registrarProducto(); }

  ngOnInit(): void {
    this.consultarproveedores();
  }

  registrarProducto(){
    this.registrarForm = this.formbuilder.group({
      nombre:'',
      precio:'',
      stock:'',
      descripcion:'',
      proveedor:'',
    })
  }

  //traer a los proveedores
  consultarproveedores(){
    this.api.getAllProveedores().subscribe(data => {
      this.proveedores=data;
      console.log(this.proveedores);
    })
  }

  guardarProducto(){
    console.log("form");
    console.log(this.registrarForm.value);
    this.api.addProducto(this.registrarForm.value)
            .subscribe(
              rt => console.log(rt),
              er => console.log(er),
              () => console.log('Producto Registrado')
            )
    this.router.navigate(['listar-productos']);
  }
}
