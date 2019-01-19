import { Pipe, PipeTransform } from '@angular/core';
import { Representative } from './models/rep';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: Representative[], args?: {}): any {
    if(!items) return [];
    if(!args) return items;

    let key = Object.keys(args)[0];
    let value = args[key];
    if(value == '') return items;
    return items.filter(item => {
      return item.address[0][key] === value;
    });
  }

}
