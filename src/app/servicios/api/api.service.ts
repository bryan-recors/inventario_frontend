import { Injectable } from '@angular/core';
//****probar observables sandoval
import { Observable } from 'rxjs';
//fin
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {ListaproductosI} from '../../modelos/listaProductos.interface';
import {productoI} from '../../modelos/producto.interface';
import {ListaproveedoresI} from '../../modelos/listaProveedores.interface';
import {proveedorI} from '../../modelos/proveedor.interface';

import {ResponseI} from '../../modelos/response.interface';
import {usuarioI} from '../../modelos/Usuario.interface';
import{registrarUsI} from '../../modelos/registrarU.interface'
//nuevos
import { map } from 'rxjs/operators';
import { share } from 'rxjs/operators';
import {ventaI} from '../../modelos/regventa.interface';
import {detalleVentaI} from '../../modelos/detalleventa.interface';
import { UserInterface } from 'src/app/modelos/login.interface';
//compras
import {compraI} from '../../modelos/regcompra.interface';
import {detalleCompraI} from '../../modelos/detallecompra.interface';

//****probar observables sandoval
//import 'rxjs/add/operator/map'; este es remplazaso por import { map } from 'rxjs/operators';
//que datos quiero tomar de la consulta en este caso solo id y total
class Repo{
    constructor(public id :Number, public fecha :String, public total :Number){}
}
// llamo desde getAllVentas
//fin


@Injectable({
  providedIn: 'root'
})

export class ApiService {

  //probando sandoval
  //observable para listar en html
  public reposObserver:Observable<Repo[]>;
  //fin

  private getHeaders() {
    const httpHeaders = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
    return { headers: httpHeaders };
  }

  private url:string='/productos/';
  constructor(private http:HttpClient) {}

  //*******************productos***************************
  getAllproductos():Observable<ListaproductosI[]>{
    return this.http.get<ListaproductosI[]>(this.url);
  }
  getSingleProductos(id):Observable<productoI>{
    let direccion = this.url+id;
    return this.http.get<productoI>(direccion);
  }
  putProducto(form: productoI):Observable<ResponseI>{
    let direccion = this.url+form.id;
    return this.http.put<ResponseI>(direccion,form);
  }
  deleteProducto(id): Observable<any> {
  return this.http.delete(this.url + id, this.getHeaders());
  }

  addProducto(producto: productoI){
    let direccion = this.url
    let pJson = JSON.stringify(producto);
    return this.http.post(this.url, pJson,this.getHeaders())
          //.map(r => r.json())
          //.catch(this.handleError);
  }

  //*******************proveedores***************************
  //proveedores
  private urlpv:string='/proveedores/';

  getAllProveedores():Observable<ListaproveedoresI[]>{
    return this.http.get<ListaproveedoresI[]>(this.urlpv);
  }
  getSingleProveedores(id):Observable<proveedorI>{
    let direccion = this.urlpv+id;
    return this.http.get<proveedorI>(direccion);
  }
  putProveedor(form: proveedorI):Observable<ResponseI>{
    let direccion = this.urlpv+form.id;
    return this.http.put<ResponseI>(direccion,form);
  }
  deleteProveedor(id): Observable<any> {
    return this.http.delete(this.urlpv + id, this.getHeaders());
  }
  addProveedor(prov: proveedorI){
    let direccion = this.urlpv
    let pJson = JSON.stringify(prov);
    return this.http.post(this.urlpv, pJson,this.getHeaders())
          //.map(r => r.json())
          //.catch(this.handleError);
  }

  //*******************ventas sandoval***************************
  getAllVentas(){
    this.reposObserver = this.http.get('http://127.0.0.1:8000/ventas/')
    .pipe(map((data : Object[]) =>{
      return data.map((r:any) => new Repo(r.id,r.fecha,r.total))
    }));
  }
 //Crear venta ******
 private urlsearchp:string='/productos/search?q=manza';
  searchProducto(query:string):Observable<ListaproductosI> {
    return this.http.get<ListaproductosI>(this.urlsearchp);
  }

  private urlsale:string="/ventas/";

  iniciarVenta(): Observable<ventaI>{
    let direccion = 'http://127.0.0.1:8000/ventas/'
    return this.http.post<ventaI>(direccion,this.getHeaders());
  }

  getSingleVenta(id):Observable<ventaI>{
    let direccion = 'http://127.0.0.1:8000/ventas/'+id;
    return this.http.get<ventaI>(direccion);
  }

  //crear la venta
  addVenta(detalleventa: proveedorI){
    let direccion = 'http://127.0.0.1:8000/detalle_ventas/'
    let pJson = JSON.stringify(detalleventa);
    return this.http.post(direccion, pJson,this.getHeaders())
          //.map(r => r.json())
          //.catch(this.handleError);
  }

  //taer todos los detalle de venta que tengan id de la venta en curso
  getDetalleVentaParticular(id):Observable<detalleVentaI[]>{
    let direccion = 'http://127.0.0.1:8000/detalle_ventas_porventa/'+id;
    return this.http.get<detalleVentaI[]>(direccion);
  }

  putVenta(form: ventaI):Observable<ResponseI>{
    let direccion = 'http://127.0.0.1:8000/ventas/'+form.id+'/';
    return this.http.put<ResponseI>(direccion,form);
  }

  deleteProdDetalleVenta(id): Observable<any> {
    let direccion = 'http://127.0.0.1:8000/detalle_ventas/'+id;
    return this.http.delete(direccion, this.getHeaders());
  }

  deleteVenta(id): Observable<any> {
    let direccion = 'http://127.0.0.1:8000/ventas/'+id+'/';
    return this.http.delete(direccion, this.getHeaders());
  }

 //fin
// ***************manejar  compras**********************************************
getAllCompras(){
  this.reposObserver = this.http.get('http://127.0.0.1:8000/compras/')
  .pipe(map((data : Object[]) =>{
    return data.map((r:any) => new Repo(r.id,r.fecha,r.total))
  }));
}

iniciarCompra(): Observable<compraI>{
  let direccion = 'http://127.0.0.1:8000/compras/'
  return this.http.post<compraI>(direccion,this.getHeaders());
}

getSingleCompra(id):Observable<compraI>{
  let direccion = 'http://127.0.0.1:8000/compras/'+id;
  return this.http.get<compraI>(direccion);
}

//crear detalle de la compra
addCompra(detallecompra: detalleCompraI){
  let direccion = 'http://127.0.0.1:8000/detalle_compras/'
  let pJson = JSON.stringify(detallecompra);
  return this.http.post(direccion, pJson,this.getHeaders())
        //.map(r => r.json())
        //.catch(this.handleError);
}

//traer todos los detalle de venta que tengan id de la compra en curso
getDetalleCompraParticular(id):Observable<detalleCompraI[]>{
  let direccion = 'http://127.0.0.1:8000/detalle_compras_porcompra/'+id;
  return this.http.get<detalleCompraI[]>(direccion);
}

putCompra(form: compraI):Observable<ResponseI>{
  let direccion = 'http://127.0.0.1:8000/compras/'+form.id+'/';
  return this.http.put<ResponseI>(direccion,form);
}

deleteProdDetalleCompra(id): Observable<any> {
  let direccion = 'http://127.0.0.1:8000/detalle_compras/'+id;
  return this.http.delete(direccion, this.getHeaders());
}

deleteCompra(id): Observable<any> {
  let direccion = 'http://127.0.0.1:8000/compras/'+id+'/';
  return this.http.delete(direccion, this.getHeaders());
}

//******************************************************************





  //*******************usuarios***************************
  /*iniciar sesion*/
  url_login:string="/usuarios/";
  /*Usuario*/
  getAllUsuarios():Observable<usuarioI[]>{
    return this.http.get<usuarioI[]>(this.url_login);
  }
  getSingleUsuarios(id):Observable<usuarioI>{
    let direccion = this.url_login+id;
    return this.http.get<usuarioI>(direccion);
  }
  putUsuario(form: usuarioI):Observable<ResponseI>{
    let direccion = this.url_login+form.id;
    return this.http.put<ResponseI>(direccion,form);
  }

  deleteUsuario(id): Observable<any> {
  return this.http.delete(this.url_login + id, this.getHeaders());
  }

  addUsuario(usu: registrarUsI){
    let pJson = JSON.stringify(usu);
    return this.http.post(this.url_login, pJson,this.getHeaders())
          //.map(r => r.json())
          //.catch(this.handleError);
  }

  loginuser(logi:UserInterface):Observable<ResponseI>{
    let direccion = 'http://127.0.0.1:8000/usuario/login/';
    return this.http.post<ResponseI>(direccion,logi,this.getHeaders());
  }

  /*funcion para manejar los errores
  private handleError(error: Response | any) {
    let errMsg: string;
    if(error instanceof Response) {
      let body = error.json() || '';
      let err = body.error || JSON.stringify(body);
      errMsg = '${error.status} - ${error.statusText || ''} ${err}';
    }
    else {
      errMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw(errMsg);
  }
  */

}
