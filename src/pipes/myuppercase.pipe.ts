import { Pipe } from '@angular/core';

@Pipe({
	name: 'myuppercase'
})
export class MyUpperCasePipe {

	transform(value: String): String {
		return value.toUpperCase();
	}	
}