import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NumberComponent } from './number.component';

@NgModule({
    declarations: [
        NumberComponent
    ],
    exports: [
        NumberComponent
    ],
    imports: [
        FormsModule
    ]
})
export class NumberModule {}