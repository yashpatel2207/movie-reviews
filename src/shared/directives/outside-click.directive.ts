import {
	Directive,
	ElementRef,
	Output,
	EventEmitter,
	HostListener,
} from "@angular/core";

@Directive({
	selector: "[appOutsideClick]",
})
export class OutsideClickDirective {
	constructor(private _elementRef: ElementRef) {}

	@Output('appOutsideClick') clickOutside = new EventEmitter();

	@HostListener("document:click", ["$event.target"]) onClick(target) {
		const clickedInside = this._elementRef.nativeElement.contains(target);
		if (!clickedInside) {
			this.clickOutside.emit();
		}
	}
}
