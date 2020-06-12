import { SharedModule } from './../shared/shared.module';
import { SearchBarComponent } from './components/nav-bar/search-bar/search-bar.component';
import { RouterModule } from "@angular/router";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [CommonModule, RouterModule, SharedModule],
  declarations: [NavBarComponent, SearchBarComponent],
  providers: [],
  exports: [NavBarComponent],
})
export class CoreModule {}
