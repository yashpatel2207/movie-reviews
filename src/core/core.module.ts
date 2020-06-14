import { SharedModule } from './../shared/shared.module';
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from './components/header/header.component';
import { SearchViewComponent } from './components/header/search-view/search-view.component';
import { SearhResultsComponent } from './components/header/searh-results/searh-results.component';

@NgModule({
  imports: [CommonModule, RouterModule, SharedModule],
  declarations: [HeaderComponent, SearchViewComponent, SearhResultsComponent],
  providers: [],
  exports: [HeaderComponent],
})
export class CoreModule {}
