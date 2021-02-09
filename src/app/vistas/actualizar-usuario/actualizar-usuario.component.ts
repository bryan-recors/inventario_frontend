import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {usuarioI} from '../../modelos/usuario.interface';
import {ApiService} from '../../servicios/api/api.service';
import {FormGroup, FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-actualizar-usuario',
  templateUrl: './actualizar-usuario.component.html',
  styleUrls: ['./actualizar-usuario.component.css']
})
export class ActualizarUsuarioComponent implements OnInit {

  constructor(private activerouter:ActivatedRoute, private router:Router, private api:ApiService ) { }

  datosUsuario:usuarioI;
  editarForm = new FormGroup({
    id:new FormControl(''),
    email:new FormControl(''),
    username:new FormControl(''),
    first_name:new FormControl(''),
    last_name:new FormControl(''),
    celular:new FormControl(''),
  });

  ngOnInit(): void {
    //obtener el id
    let usuarioid=this.activerouter.snapshot.paramMap.get('id');
    console.log("este es id de Usuario");
    console.log(usuarioid);

    this.api.getSingleUsuarios(usuarioid).subscribe(data =>{
      console.log(data);
      this.datosUsuario=data;
      
      this.editarForm.setValue({
        'id':usuarioid,
        'email':this.datosUsuario.email,
        'username':this.datosUsuario.username,
        'first_name':this.datosUsuario.first_name,
        'last_name':this.datosUsuario.last_name,
        'celular':this.datosUsuario.celular,
      });
      console.log("editar form");
      console.log(this.editarForm.value);
    })
  }

  postForm(form:usuarioI){
    console.log(form)
    this.api.putUsuario(form).subscribe(data =>{
      console.log(data);
    });
    
    this.router.navigate(['listar-usuario']);
  }

}
