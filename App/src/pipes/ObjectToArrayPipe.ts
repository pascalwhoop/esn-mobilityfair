import {Pipe} from "@angular/core";

/*
  Generated class for the ObjectToArrayFilter pipe.

  See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
  Angular 2 Pipes.
*/
@Pipe({
  name: 'ota'
})
export class ObjectToArrayPipe {
  /*
    Takes a value and makes it lowercase.
   */
  transform(object: any, args?: any[]) : any[]{
    if(!object) return [];
    let values : any[]= [];
    for (let key in object) {
      if (object.hasOwnProperty(key)) {
        values.push(object[key]);
      }
    }
    console.log(values.length);
    return values;
  }
}
