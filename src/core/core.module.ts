import { SharedModule } from './../shared/shared.module';
import { RouterModule } from "@angular/router";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SearhResultsComponent } from './components/nav-bar/searh-results/searh-results.component';
import { SearchViewComponent } from './components/nav-bar/search-view/search-view.component';

@NgModule({
  imports: [CommonModule, RouterModule, SharedModule],
  declarations: [NavBarComponent, SearchViewComponent, SearhResultsComponent],
  providers: [],
  exports: [NavBarComponent],
})
export class CoreModule {}
