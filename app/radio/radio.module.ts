import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RadioComponent } from './radio.component';

@NgModule({
    declarations: [
        RadioComponent
    ],
    exports: [
        RadioComponent
    ],
    imports: [
        FormsModule
    ]
})
export class CommonRadioModule {}