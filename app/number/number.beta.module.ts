import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NumberComponent } from './number.component';
import { NumberRoutingModule } from './number-routing.module';

@NgModule({
    declarations: [
        NumberComponent
    ],
    exports: [
        NumberComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        NumberRoutingModule
    ]
})
export class NumberModule {}