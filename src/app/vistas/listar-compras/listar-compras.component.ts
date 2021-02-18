import { Component, OnInit } from '@angular/core';
// importo mi servicios sandoval
import {ApiService} from '../../servicios/api/api.service';
//fin
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-listar-compras',
  templateUrl: './listar-compras.component.html',
  styleUrls: ['./listar-compras.component.css']
})

export class ListarComprasComponent implements OnInit {

  constructor(private activerouter:ActivatedRoute, private router:Router, public api:ApiService) { }

  ngOnInit(): void {
    this.api.getAllCompras()
  }

  eliminarCompra(id){
    this.api.deleteCompra(id).subscribe(data =>{
      console.log(data);
    });

    setTimeout(() => {
      this.api.getAllCompras();
    }, 1000);
    this.router.navigate(['listar-compras']);

  }

}
