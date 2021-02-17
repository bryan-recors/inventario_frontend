import { Component, OnInit } from '@angular/core';
// importo mi servicios sandoval
import {ApiService} from '../../servicios/api/api.service';
//fin
import {Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-listar-ventas',
  templateUrl: './listar-ventas.component.html',
  styleUrls: ['./listar-ventas.component.css']
})

export class ListarVentasComponent implements OnInit {

  constructor(private activerouter:ActivatedRoute, private router:Router, public api:ApiService) { }

  ngOnInit(): void {
    this.api.getAllVentas()
  }

  eliminarVenta(id){
    this.api.deleteVenta(id).subscribe(data =>{
      console.log(data);
    });
    this.router.navigate(['listar-ventas']);

  }



}
