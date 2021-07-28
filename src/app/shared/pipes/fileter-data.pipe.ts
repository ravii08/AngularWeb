import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fileterData'
})
export class FileterDataPipe implements PipeTransform {

  transform(object:any[], searchText: string): any[] {
    if(!object) {return []}
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
