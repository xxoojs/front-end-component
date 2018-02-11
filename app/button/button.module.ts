import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from './button.component';

@NgModule({
    declarations: [
        ButtonComponent
    ],
    exports: [
        ButtonComponent
    ],
    imports: [
        FormsModule
    ]
})
export class ButtonModule {}