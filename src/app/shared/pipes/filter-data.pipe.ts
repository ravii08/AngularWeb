import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterData'
})
export class FileterDataPipe implements PipeTransform {

  transform(object:any[], searchText: string): any[] {
    if(!searchText) {return object}
    searchText = searchText.toLowerCase();
    return object.filter((obj: any) => {
      if(typeof obj == 'string'){
        return obj.toLowerCase().includes(searchText);
      }
      else if(typeof obj == 'number') {
        return obj.toString().toLowerCase().includes(searchText)
      }
    })
  }

}
