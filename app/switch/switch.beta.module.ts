import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SwitchComponent } from './switch.component';
import { SwitchRoutingModule } from './switch-routing.module';

@NgModule({
    declarations: [
        SwitchComponent
    ],
    exports: [
        SwitchComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        SwitchRoutingModule
    ]
})
export class SwitchModule {}