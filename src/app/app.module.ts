import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './plantillas/header/header.component';
import { FooterComponent } from './plantillas/footer/footer.component';


//import { ListarProductosComponent } from './vistas/listar-productos/listar-productos.component';
//import { LoginComponent } from './vistas/login/login.component';
//import { RegistrarProductoComponent } from './vistas/registrar-producto/registrar-producto.component';
//import { ActualizarProductoComponent } from './vistas/actualizar-producto/actualizar-producto.component';
//import { RegistrarVentasComponent } from './vistas/registrar-ventas/registrar-ventas.component';
//import { ActualizarVentaComponent } from './vistas/actualizar-venta/actualizar-venta.component';
//import { ReportesVentasComponent } from './vistas/reportes-ventas/reportes-ventas.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    //variable
    routingComponents,
   
    //ListarProductosComponent,
    //LoginComponent,
    //RegistrarProductoComponent,
    //ActualizarProductoComponent
    //RegistrarVentasComponent,
    //ActualizarVentaComponent,
    //ReportesVentasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
