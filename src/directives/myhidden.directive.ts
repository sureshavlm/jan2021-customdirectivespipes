
import { Directive, ElementRef, Renderer, Input } from '@angular/core';


@Directive({
	selector: '[myHidden]'
})

export class MyHiddenDirective {

	@Input()
	childFlag: Boolean;

	constructor(private el: ElementRef, private rederer: Renderer) {

	}

	ngOnChanges() {
		if(this.childFlag)
			this.rederer.setElementStyle(this.el.nativeElement, 'display', 'none');
		else 
			this.rederer.setElementStyle(this.el.nativeElement, 'display', '');
	}

	
}