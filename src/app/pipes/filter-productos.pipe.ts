import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterProd'
})
export class FilterProductosPipe implements PipeTransform {
    transform(value: any, arg: any): any {
      if (arg == '' || arg.length < 2) return value;
      const resultado = [];
      for (const post of value){
        
        if (post.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
          console.log('producto encontrado');
          resultado.push(post);
        };
      };
    return resultado;
    }  
}
