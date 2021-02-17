import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ApiService} from '../../servicios/api/api.service';
import {ListaproveedoresI} from '../../modelos/listaProveedores.interface';
import { proveedorI } from 'src/app/modelos/proveedor.interface';

@Component({
  selector: 'app-listar-proveedores',
  templateUrl: './listar-proveedores.component.html',
  styleUrls: ['./listar-proveedores.component.css']
})
export class ListarProveedoresComponent implements OnInit {

  proveedores:ListaproveedoresI[];
  filterProveedores = '';

  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {
    this.api.getAllProveedores().subscribe(data => {
      this.proveedores=data;
    })
  }
  editarproveedor(id){
    console.log(id)
    this.router.navigate(['actualizar-proveedor',id])
  }
  eliminarproveedor(id : proveedorI){
    console.log(id)
    this.router.navigate(['eliminar-proveedor',id])
  }
}
