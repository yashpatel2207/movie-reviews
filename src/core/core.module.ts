import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule],
    declarations: [NavBarComponent],
    providers: [],
    exports: [NavBarComponent]
})

export class CoreModule {}