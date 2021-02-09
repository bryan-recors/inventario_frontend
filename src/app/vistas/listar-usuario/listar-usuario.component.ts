import { Component, OnInit } from '@angular/core';

import {ApiService} from '../../servicios/api/api.service';
import {Router} from '@angular/router';
import {usuarioI} from '../../modelos/Usuario.interface';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent implements OnInit {
  usuarios:usuarioI[];
  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {
      this.api.getAllUsuarios().subscribe(data => {
        this.usuarios=data;
      })
  }
  editarusuario(id){
    console.log(id)
    this.router.navigate(['actualizar-usuario',id])
  }

  eliminarusuario(id){
    console.log(id)
    this.router.navigate(['eliminar-usuario',id])
  }

}
