import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RadioComponent } from './radio.component';
import { RadioRoutingModule } from './radio-routing.module';

@NgModule({
    declarations: [
        RadioComponent
    ],
    exports: [
        RadioComponent
    ],
    imports: [
        FormsModule,
        RadioRoutingModule
    ]
})
export class RadioModule {}