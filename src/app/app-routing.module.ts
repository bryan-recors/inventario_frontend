import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*importar componentes */
import { LoginComponent } from './vistas/login/login.component';
import { RegistrarProductoComponent } from './vistas/registrar-producto/registrar-producto.component';
import { ListarProductosComponent } from './vistas/listar-productos/listar-productos.component';
import { ActualizarProductoComponent } from './vistas/actualizar-producto/actualizar-producto.component';
import { EliminarProductoComponent } from './vistas/eliminar-producto/eliminar-producto.component';

import { RegistrarVentasComponent } from './vistas/registrar-ventas/registrar-ventas.component';
import { ListarVentasComponent } from './vistas/listar-ventas/listar-ventas.component';
import { ActualizarVentaComponent } from './vistas/actualizar-venta/actualizar-venta.component';
import { EliminarVentaComponent } from './vistas/eliminar-venta/eliminar-venta.component';

import { ReportesVentasComponent } from './vistas/reportes-ventas/reportes-ventas.component';


/*crear rutas*/
const routes: Routes = [
  { path:'inicio/', redirectTo: 'src/index.html' , pathMatch:'full'}, //directamente
  { path: 'login', component:LoginComponent },
  { path: 'registrar-producto', component: RegistrarProductoComponent },
  { path: 'listar-productos', component: ListarProductosComponent },
  { path: 'actualizar-producto/:id', component: ActualizarProductoComponent },
  { path: 'eliminar-producto', component: EliminarProductoComponent },

  { path: 'registrar-ventas', component: RegistrarVentasComponent },
  { path: 'listar-ventas', component: ListarVentasComponent },
  { path: 'actualizar-venta', component: ActualizarVentaComponent },
  { path: 'eliminar-venta', component: EliminarVentaComponent },

  { path: 'reportes-ventas', component: ReportesVentasComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

/*exportar los componentes de module.ts*/
export const routingComponents = [
  LoginComponent,
  RegistrarProductoComponent,
  ListarProductosComponent,
  ActualizarProductoComponent,
  EliminarProductoComponent,

  RegistrarVentasComponent,
  ListarVentasComponent,
  ActualizarVentaComponent,

  ReportesVentasComponent,
]





















