import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {ListaproductosI} from '../../modelos/listaProductos.interface'
import {HttpClient, HttpHeaders} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url:string="http://127.0.0.1:8000/productos/";
  constructor(private http:HttpClient) { }
  getAllproductos():Observable<ListaproductosI[]>{
    return this.http.get<ListaproductosI[]>(this.url);
  }
}
