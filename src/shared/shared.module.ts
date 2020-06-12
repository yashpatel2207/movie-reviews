import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OutsideClickDirective } from './directives/outside-click.directive';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [OutsideClickDirective],
  providers: [],
  exports: [OutsideClickDirective],
})
export class SharedModule {}
