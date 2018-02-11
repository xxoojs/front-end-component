import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProgressComponent } from './progress.component';

@NgModule({
    declarations: [
        ProgressComponent
    ],
    exports: [
        ProgressComponent
    ],
    imports: [
        FormsModule
    ]
})
export class ProgressModule {}