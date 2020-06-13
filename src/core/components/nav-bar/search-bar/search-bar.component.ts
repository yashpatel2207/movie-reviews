import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
	selector: "app-search-bar",
	templateUrl: "./search-bar.component.html",
	styleUrls: ["./search-bar.component.scss"],
})
export class SearchBarComponent implements OnInit {
	constructor() {}

	@Input() placeholder = "Search...";
	@Output() closeSearchBox = new EventEmitter();
	ngOnInit() {}

	emitCloseSearchBoxEvent(): void {
		this.closeSearchBox.emit();
	}
}
