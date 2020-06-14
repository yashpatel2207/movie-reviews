import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
	selector: "app-search-view",
	templateUrl: "./search-view.component.html",
	styleUrls: ["./search-view.component.scss"],
})
export class SearchViewComponent implements OnInit {
	constructor() {}

	@Input() placeholder = "Search...";
	@Output() closeSearchBox = new EventEmitter();
	ngOnInit() {}

	emitCloseSearchBoxEvent(): void {
		this.closeSearchBox.emit();
	}
}
