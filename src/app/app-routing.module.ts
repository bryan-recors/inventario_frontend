import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*importar componentes de module.ts*/
import { LoginComponent } from './vistas/login/login.component';
import { RegistrarProductoComponent } from './vistas/registrar-producto/registrar-producto.component';
import { ListarProductosComponent } from './vistas/listar-productos/listar-productos.component';
import { ActualizarProductoComponent } from './vistas/actualizar-producto/actualizar-producto.component';
import { EliminarProductoComponent } from './vistas/eliminar-producto/eliminar-producto.component';

import { RegistrarVentasComponent } from './vistas/registrar-ventas/registrar-ventas.component';
import { ListarVentasComponent } from './vistas/listar-ventas/listar-ventas.component';
import { ActualizarVentaComponent } from './vistas/actualizar-venta/actualizar-venta.component';
import { EliminarVentaComponent } from './vistas/eliminar-venta/eliminar-venta.component';

import { RegistrarProveedorComponent } from './vistas/registrar-proveedor/registrar-proveedor.component';
import { ListarProveedoresComponent } from './vistas/listar-proveedores/listar-proveedores.component'
import { ActualizarProveedorComponent } from './vistas/actualizar-proveedor/actualizar-proveedor.component';
import { EliminarProveedorComponent } from './vistas/eliminar-proveedor/eliminar-proveedor.component';

import { RegistrarUsuarioComponent } from './vistas/registrar-usuario/registrar-usuario.component';
import { ListarUsuarioComponent } from './vistas/listar-usuario/listar-usuario.component';
import { ActualizarUsuarioComponent } from './vistas/actualizar-usuario/actualizar-usuario.component';
import { EliminarUsuarioComponent } from './vistas/eliminar-usuario/eliminar-usuario.component'

import { ReportesVentasComponent } from './vistas/reportes-ventas/reportes-ventas.component';
import { ReporteComprasComponent } from './vistas/reporte-compras/reporte-compras.component';
import { ReporteProductosComponent } from './vistas/reporte-productos/reporte-productos.component'

//sandoval mostrar componente en el Inicio
import { InicioComponent } from './vistas/inicio/inicio.component';
import { PagNoEncontradaComponent } from './vistas/pag-no-encontrada/pag-no-encontrada.component';

import { RegistrarCompraComponent } from './vistas/registrar-compra/registrar-compra.component';
import { ListarComprasComponent } from './vistas/listar-compras/listar-compras.component';
//fin
/*crear rutas*/
const routes: Routes = [
  //********sandoval mostrar componente en el Inicio
  //si esta en la ruta de inicio
  { path: '', component: InicioComponent, pathMatch:'full' },
  //{ path: 'inicio/', redirectTo: 'src/index.html' , pathMatch:'full'}, //directamente
  //fin
  { path: 'login', component:LoginComponent },
  { path: 'registrar-producto', component: RegistrarProductoComponent },
  { path: 'listar-productos', component: ListarProductosComponent },
  { path: 'actualizar-producto/:id', component: ActualizarProductoComponent },
  { path: 'eliminar-producto/:id', component: EliminarProductoComponent },

  { path: 'registrar-ventas', component: RegistrarVentasComponent },
  { path: 'listar-ventas', component: ListarVentasComponent },
  { path: 'actualizar-venta', component: ActualizarVentaComponent },
  { path: 'eliminar-venta', component: EliminarVentaComponent },

  { path: 'registrar-proveedor', component: RegistrarProveedorComponent },
  { path: 'listar-proveedores', component: ListarProveedoresComponent },
  { path: 'actualizar-proveedor/:id', component: ActualizarProveedorComponent },
  { path: 'eliminar-proveedor/:id', component: EliminarProveedorComponent },

  { path: 'registrar-usuario', component: RegistrarUsuarioComponent },
  { path: 'listar-usuario', component: ListarUsuarioComponent },
  { path: 'actualizar-usuario/:id', component: ActualizarUsuarioComponent },
  { path: 'eliminar-usuario/:id', component: EliminarUsuarioComponent },

  { path: 'registrar-compras', component: RegistrarCompraComponent },
  { path: 'listar-compras', component: ListarComprasComponent },

  { path: 'reportes-ventas', component: ReportesVentasComponent },
  { path: 'reportes-compras', component: ReporteComprasComponent },
  { path: 'reporte-productos', component: ReporteProductosComponent },

  //si ingresa cualquier ruta no especificada sandoval *****
  { path: 'pagina-no-encontrada', component: PagNoEncontradaComponent, pathMatch:'full' },
  { path: '**', redirectTo: 'pagina-no-encontrada' , pathMatch:'full'},
  //fin
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

  RegistrarProveedorComponent,
  ListarProveedoresComponent,
  ActualizarProveedorComponent,
  EliminarProveedorComponent,

  RegistrarUsuarioComponent,
  ListarUsuarioComponent,
  ActualizarUsuarioComponent,
  EliminarUsuarioComponent,

  RegistrarCompraComponent,
  ListarComprasComponent,

  ReportesVentasComponent,
  ReporteComprasComponent,
  ReporteProductosComponent,
]
