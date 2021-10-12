import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'read'
})
export class ReadPipe implements PipeTransform {

  transform(value: string): string {
    if (value.length > 15){
      return value.substr(0, 200) + '...';
    }
    return value;
  }

}
