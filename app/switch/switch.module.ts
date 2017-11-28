import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SwitchComponent } from './switch.component';

@NgModule({
    declarations: [
        SwitchComponent
    ],
    exports: [
        SwitchComponent
    ],
    imports: [
        FormsModule
    ]
})
export class SwitchModule {}