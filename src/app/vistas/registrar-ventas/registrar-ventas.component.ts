import { Component, OnInit } from '@angular/core';
// importo mi servicios sandoval
import {ApiService} from '../../servicios/api/api.service'
import {Router,ActivatedRoute, Params} from '@angular/router';
import {ListaproductosI} from '../../modelos/listaProductos.interface';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import {ventaI} from '../../modelos/regventa.interface';
//fin

@Component({
  selector: 'app-registrar-ventas',
  templateUrl: './registrar-ventas.component.html',
  styleUrls: ['./registrar-ventas.component.css'],

})

export class RegistrarVentasComponent implements OnInit {
  //id de la venta creada
  public ventaid:string;
  //para mostrar productos al buscarlos
  filterProducto = '';
  productos:ListaproductosI[];
  //mostrar filtro de busqueda
  public viewsearch: boolean = false;


  constructor(private activerouter:ActivatedRoute,
              private router:Router,
              private api:ApiService ) { }

  datosVenta:ventaI;
  editarForm = new FormGroup({
    id:new FormControl(''),
    fecha:new FormControl(''),
    subtotal:new FormControl(''),
    iva:new FormControl(''),
    total:new FormControl(''),
  });

  ngOnInit(): void {
    this.verProd();
    this.crearVenta();
  }

  crearVenta(){
    this.api.iniciarVenta().subscribe(response => {
      this.getSingleVenta(response.id);
    });
  }
  //traer la venta que se crea inicialmente
  getSingleVenta(id){
    //obtener el id
    this.ventaid = id;
    console.log("este es id de la venta");
    console.log(this.ventaid);
    this.api.getSingleVenta(this.ventaid).subscribe(data =>{
      console.log(data);
      this.datosVenta=data;
      this.editarForm.setValue({
        'id':this.ventaid,
        'fecha':this.datosVenta.fecha,
        'subtotal':this.datosVenta.subtotal,
        'iva':this.datosVenta.iva,
        'total':this.datosVenta.total,
      });
      console.log("editar form");
      console.log(this.editarForm.value);
    })
  }

  //controlador para mostrar productos al buscar
  verProd(){
    this.api.getAllproductos().subscribe(data => {
      this.productos=data;
    })
  }

  onviewsearch(){
    this.viewsearch = true;
  }

  offviewsearch(){
    this.viewsearch = false;
  }
  //fin**********


}
