import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';
import { ButtonRoutingModule } from './button-routing.module';

@NgModule({
    declarations: [
        ButtonComponent
    ],
    exports: [
        ButtonComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        ButtonRoutingModule
    ]
})
export class ButtonModule {}