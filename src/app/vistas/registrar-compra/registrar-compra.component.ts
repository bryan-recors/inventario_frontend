import { Component, OnInit } from '@angular/core';
// importo mi servicios sandoval
import {ApiService} from '../../servicios/api/api.service'
import {Router,ActivatedRoute, Params} from '@angular/router';
import {ListaproductosI} from '../../modelos/listaProductos.interface';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import {compraI} from '../../modelos/regcompra.interface';
import {productoI} from '../../modelos/producto.interface';
import {detalleCompraI} from '../../modelos/detallecompra.interface';
//fin
import {ListaproveedoresI} from '../../modelos/listaProveedores.interface';


@Component({
  selector: 'app-registrar-compra',
  templateUrl: './registrar-compra.component.html',
  styleUrls: ['./registrar-compra.component.css'],

})

export class RegistrarCompraComponent implements OnInit {
  //id de la venta creada
  public compraid:string;
  public unprodid:string;
  //para mostrar productos al buscarlos
  filterProducto = '';
  productos:ListaproductosI[];
  //mostrar filtro de busqueda
  public viewsearch: boolean = false;
  //para activar las creacion de una compra
  public activesale: boolean = false;
  //obtener producto elegido para cagar
  datosProducto:productoI;
  //traer de regreso los productos agregados
  detalleprodcompras:detalleCompraI[];
  //actulizar los datos de la venta


  constructor(private activerouter:ActivatedRoute,
              private router:Router,
              private api:ApiService,
              private formbuilder: FormBuilder) {  }
//this.registrarDetalleVenta();

  datosCompra:compraI;
  editarForm = new FormGroup({
    id:new FormControl(''),
    fecha:new FormControl(''),
    proveedor:new FormControl(''),
    total:new FormControl(''),
  });

  registrarForm = new FormGroup({
    compra:new FormControl(''),
    producto:new FormControl(''),
    precio_compra:new FormControl(''),
    cantidad:new FormControl(''),
    subtotal:new FormControl(''),
  });

  //buscar por proveedor
  proveedores:ListaproveedoresI[];
  filterProvCompra = '';
  //fin 

  ngOnInit(): void {
    this.verProd();

    //buscar por proveedor
    this.api.getAllProveedores().subscribe(data => {
      this.proveedores=data;
    })
    //fin
  }

  crearCompra(){
    this.api.iniciarCompra().subscribe(response => {
      this.getSingleCompra(response.id);
    });
    this.onsale();
  }
  //traer la venta que se crea inicialmente
  getSingleCompra(id){
    //obtener el id
    this.compraid = id;
    console.log("este es id de la compra");
    console.log(this.compraid);
    this.api.getSingleCompra(this.compraid).subscribe(data =>{
      console.log(data);
      this.datosCompra=data;
      this.editarForm.setValue({
        'id':this.compraid,
        'fecha':this.datosCompra.fecha,
        'proveedor':this.datosCompra.proveedor,
        'total':this.datosCompra.total,
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
 //activar o desactivar la busqueda de productos
  onviewsearch(){
    this.viewsearch = true;
  }

  offviewsearch(){
    this.viewsearch = false;
  }
  //activar o desactivar las ventas
  onsale(){
    this.activesale = true;
  }

  offsale(){
    this.activesale = false;
  }
  //fin**********

  pasarDatosProducto(id){
    //obtener el id
    this.unprodid = id;
    console.log("este es id del producto");
    console.log(this.unprodid);
    this.api.getSingleProductos(this.unprodid).subscribe(data =>{
      console.log(data);
      this.datosProducto=data;
      this.registrarForm.setValue({
        'compra':this.editarForm.value.id,
        'producto':this.datosProducto.nombre,
        'precio_compra':this.datosProducto.precio,
        'cantidad':'',
        'subtotal':'',
      });
      console.log("editar form");
      console.log(this.registrarForm.value);

    })
    this.offviewsearch();
  }

 // guardarDetalleCompra
 guardarDetalleCompra(){
    this.registrarForm.value.subtotal=(this.registrarForm.value.cantidad*this.registrarForm.value.precio_compra);
    this.registrarForm.value.producto = this.unprodid;
    console.log("listo form");
    console.log(this.registrarForm.value);
    this.api.addCompra(this.registrarForm.value)
           .subscribe(
             rt => console.log(rt),
             er => console.log(er),
             () => console.log('detalle Compra Registrado')
           )
    this.verDetalleCompra(this.editarForm.value.id);
 }

 //traer de regreso los detalle de venta registrados
 verDetalleCompra(idcompra){
   console.log("este es id de la compra");
   console.log(idcompra);
   this.api.getDetalleCompraParticular(idcompra).subscribe(data => {
     console.log(data);
     this.detalleprodcompras=data;
   });
   this.registrarForm.setValue({
     'compra':'',
     'producto':'',
     'precio_compra':'',
     'cantidad':'',
     'subtotal':'',
   });
   this.actualizarDatosCompras(this.editarForm.value.id);
 }

  actualizarDatosCompras(idcompra){
      console.log("y se marcho");
      console.log("este es id de la compraa");
      console.log(idcompra);
      this.api.getDetalleCompraParticular(idcompra).subscribe(data => {
        console.log(data);
        this.detalleprodcompras=data;
        var suma:number = 0;
        for(let posicion in this.detalleprodcompras){
          console.log(typeof Number(this.detalleprodcompras[posicion].subtotal));
          suma = (suma+Number(this.detalleprodcompras[posicion].subtotal));
        }
        this.editarForm.value.total=suma;
        this.editarForm.setValue({
          'id':idcompra,
          'fecha':this.editarForm.value.fecha,
          'proveedor':'',
          'total':this.editarForm.value.total,
        });
        console.log("seraaaaaaa");
        console.log(this.editarForm.value);
      });
    }

    postForm(form:compraI){
      console.log("si llegue");
      console.log(form)
      this.api.putCompra(form).subscribe(data =>{
        console.log(data);
      });
      this.router.navigate(['listar-compras']);
    }

    //eliminar un producto que ya no quiero que entre en mi venta
    eliminarProdDetalleCompra(id){
      //console.log("id de producto a eliminar del detalle de venta");
      //console.log(id);
      this.api.deleteProdDetalleCompra(id).subscribe(data =>{
        console.log(data);
      });
      //ESPERAR UN SEGUNDO Y LLAMAR A LA FUNCION PARA ACTULAIZAR LOS DATOS
      setTimeout(() => {
        this.verDetalleCompra(this.editarForm.value.id);
      }, 1000);
    }

    //ALIMINAR LA VENTA CUANDO PRESIONE CANCELAR
    eliminarTodaCompra(){
      this.api.deleteCompra(this.editarForm.value.id).subscribe(data =>{
        console.log(data);
      });
      this.offsale();
      setTimeout(() => {
        this.router.navigate(['listar-compras']);
      }, 1000);
    }



}
