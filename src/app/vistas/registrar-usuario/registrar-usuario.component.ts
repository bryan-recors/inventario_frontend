import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {ApiService} from '../../servicios/api/api.service';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css'],
  providers: [ApiService]
})
export class RegistrarUsuarioComponent implements OnInit {

  registrarForm: FormGroup;

  constructor(private activerouter:ActivatedRoute, 
              private router:Router, 
              private api:ApiService,
              private formbuilder: FormBuilder) { this.registrarUsuario(); }

  ngOnInit(): void {
    //obtener id
    let usuarioid=this.activerouter.snapshot.paramMap.get('id');
    console.log("id del usuario");
    console.log(usuarioid);

  }
  registrarUsuario(){
    this.registrarForm = this.formbuilder.group({
      username: '',
      first_name: '',
      last_name: '',
      email: '',
      celular: '',
      vendedor: '',
      password: '',
      confirmacion_password: '',
    })
  }

  guardarUsuario(){
    this.api.addUsuario(this.registrarForm.value)
            .subscribe(
              rt => console.log(rt),
              er => console.log(er),
              () => console.log('Usuario Registrado')
            )
    this.router.navigate(['listar-usuario']);
  }
}
