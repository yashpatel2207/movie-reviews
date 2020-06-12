import { SearchBarComponent } from './components/nav-bar/search-bar/search-bar.component';
import { RouterModule } from "@angular/router";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [NavBarComponent, SearchBarComponent],
  providers: [],
  exports: [NavBarComponent],
})
export class SharedModule {}
