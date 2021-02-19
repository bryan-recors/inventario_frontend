import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterReportesProductos'
})
export class FilterReportesProductosPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg == '' || arg.length < 2) return value;
    const resultado = [];
    for (const post of value){
      
      if (post.proveedor.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        console.log('proveedor de producto encontrado');
        resultado.push(post);
      };
    };
  return resultado;
  }  

}
