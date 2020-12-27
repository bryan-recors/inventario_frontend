import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {ListaproductosI} from '../../modelos/listaProductos.interface';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {productoI} from '../../modelos/producto.interface';
import {ResponseI} from '../../modelos/response.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url:string="http://127.0.0.1:8000/productos/";
  constructor(private http:HttpClient) { }
  getAllproductos():Observable<ListaproductosI[]>{
    return this.http.get<ListaproductosI[]>(this.url);
  }
  getSingleProductos(id):Observable<productoI>{
    let direccion = this.url+id;
    return this.http.get<productoI>(direccion);
  }
  putProducto(form: productoI):Observable<ResponseI>{
    let direccion = "http://127.0.0.1:8000/productos/3";
    return this.http.put<ResponseI>(direccion,form);
  }
}
