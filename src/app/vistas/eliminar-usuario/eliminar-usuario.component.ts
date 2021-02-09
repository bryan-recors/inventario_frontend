import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {usuarioI} from '../../modelos/Usuario.interface';
import {ApiService} from '../../servicios/api/api.service';
import {FormGroup, FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-eliminar-usuario',
  templateUrl: './eliminar-usuario.component.html',
  styleUrls: ['./eliminar-usuario.component.css']
})
export class EliminarUsuarioComponent implements OnInit {

  constructor(private activerouter:ActivatedRoute, private router:Router, private api:ApiService) { }
  datosUsuario:usuarioI;
  eliminarForm = new FormGroup({
    id:new FormControl(''),
    email:new FormControl(''),
    username:new FormControl(''),
    first_name:new FormControl(''),
    last_name:new FormControl(''),
    celular:new FormControl(''),

  });
  ngOnInit(): void {
    let usuarioid=this.activerouter.snapshot.paramMap.get('id');
    console.log("este es id de usuario");
    console.log(usuarioid);
    this.api.getSingleUsuarios(usuarioid).subscribe(data =>{
      console.log(data);
      this.datosUsuario=data;
    });
  }
  eliminar(){
    let datos:usuarioI = this.eliminarForm.value;
    let usuarioid=this.activerouter.snapshot.paramMap.get('id');
    console.log("este es id de usuario a eliminar");
    console.log(usuarioid);
    this.api.deleteUsuario(usuarioid).subscribe(data =>{
      console.log(data);
    });
    this.router.navigate(['listar-usuario']);
  }
}

