
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gsformat'
})
export class GsformatPipe implements PipeTransform {

  transform(item: any, replace:any, replacement:any): any {
    if (item == null) {
      return "";
    } else {
      item = item.replaceAll(replace, replacement);
      return item;
    }

  }

}




