import { HeaderMenuItem } from "./nav-typings.d";
import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

@Component({
	selector: "app-nav-bar",
	templateUrl: "./nav-bar.component.html",
	styleUrls: ["./nav-bar.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavBarComponent implements OnInit {
	constructor() {}
	collapsed = true;
	showSearch = false;
	menuItems: HeaderMenuItem[] = [
		{
			menuItemName: "Movies",
			subMenus: [
				{ name: "Popular", path: "#" },
				{ name: "Now Playing", path: "#" },
				{ name: "Upcoming", path: "#" },
				{ name: "Top Rated", path: "#" },
			],
		},
		{
			menuItemName: "TV Shows",
			subMenus: [
				{ name: "Popular", path: "#" },
				{ name: "Airing Today", path: "#" },
				{ name: "On TV", path: "#" },
				{ name: "Top Rated", path: "#" },
			],
		},
	];
	ngOnInit() {}

	toggleClasses(): void {
		this.collapsed = !this.collapsed;
	}
	showSearchBox(event: MouseEvent): void {
		this.showSearch = true;
		event.stopPropagation();
	}
	hideSearchBox(): void {
		this.showSearch = false;
	}
}
