import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterUser'
})
export class FilterUsuariosPipe implements PipeTransform {
  transform(value: any, arg: any): any {
    if (arg == '' || arg.length < 2) return value;
    const resultado = [];
    for (const post of value){
      
      if (post.first_name.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        console.log('usuario encontrado');
        resultado.push(post);
      };
    };
  return resultado;
  }

}
