import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TooltipComponent } from './tooltip.component';
import { TooltipRoutingModule } from './tooltip-routing.module';

@NgModule({
    declarations: [
        TooltipComponent
    ],
    exports: [
        TooltipComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        TooltipRoutingModule
    ]
})
export class TooltipModule {}