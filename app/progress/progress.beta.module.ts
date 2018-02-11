import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProgressComponent } from './progress.component';
import { ProgressRoutingModule } from './progress-routing.module';

@NgModule({
    declarations: [
        ProgressComponent
    ],
    exports: [
        ProgressComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        ProgressRoutingModule
    ]
})
export class ProgressModule {}