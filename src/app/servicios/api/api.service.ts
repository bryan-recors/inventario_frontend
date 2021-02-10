import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  private getHeaders() {
    const httpHeaders = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
    return { headers: httpHeaders };
  }

  private url:string='/productos/';

  constructor(private http:HttpClient) { }

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
  //*******************ventas***************************
  getAllVentas(){
    this.http.get('http://127.0.0.1:8000/ventas/').subscribe(data =>{
      console.log(data);
    })
  }

  
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
