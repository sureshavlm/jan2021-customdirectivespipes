import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gradefilter'
})
export class GradefilterPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {

  	let temp = [];
  	for(var i = 0; i < value.length; i++){
  		if(value[i].grade == args[0]){
  			temp.push(value[i]);
  		}
  	}
    return temp;
  }

}
