import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {ListaproductosI} from '../../modelos/listaProductos.interface';
import {productoI} from '../../modelos/producto.interface';
import {ListaproveedoresI} from '../../modelos/listaProveedores.interface';
import {proveedorI} from '../../modelos/proveedor.interface';

import {ResponseI} from '../../modelos/response.interface';


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

