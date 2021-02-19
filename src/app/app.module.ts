import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

import { AppRoutingModule, routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './plantillas/header/header.component';
import { FooterComponent } from './plantillas/footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
// importo mi servicios sandoval
import {ApiService} from './servicios/api/api.service'
//fin
//registrar el componente registrar-ventas sandoval
import {RegistrarVentasComponent} from './vistas/registrar-ventas/registrar-ventas.component';
import { InicioComponent } from './vistas/inicio/inicio.component';
import { PagNoEncontradaComponent } from './vistas/pag-no-encontrada/pag-no-encontrada.component';
//fin

//busquedas
import { FilterProductosPipe } from './pipes/filter-productos.pipe';
import { FilterProveedoresPipe } from './pipes/filter-proveedores.pipe';
import { FilterUsuariosPipe } from './pipes/filter-usuarios.pipe';
import { RegistrarCompraComponent } from './vistas/registrar-compra/registrar-compra.component';
import { ListarComprasComponent } from './vistas/listar-compras/listar-compras.component';
import { FilterReportesProductosPipe } from './pipes/filter-reportes-productos.pipe';

//copiar componentes a app-routing.module.ts
//import { ListarProductosComponent } from './vistas/listar-productos/listar-productos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    //registrar el componente registrar-ventas sandoval
    RegistrarVentasComponent,
    //fin
    //variable
    routingComponents,
    InicioComponent,
    PagNoEncontradaComponent,
    FilterProductosPipe,
    FilterProveedoresPipe,
    FilterUsuariosPipe,
    RegistrarCompraComponent,
    ListarComprasComponent,
    FilterReportesProductosPipe,

    //ListarProductosComponent,
    //copiar a la variable en app-routing.module.ts
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  // importo mi servicios para poderlo usar sandoval
  providers: [ApiService],
  //fin
  bootstrap: [AppComponent]
})
export class AppModule { }
