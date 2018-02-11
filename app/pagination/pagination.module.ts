import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination.component';
import { SelectModule } from 'ipharmacare-select/select.module';
import { NumberModule } from 'ipharmacare-number/number.module';

@NgModule({
    declarations: [
        PaginationComponent
    ],
    exports: [
        PaginationComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        SelectModule,
        NumberModule
    ]
})
export class PaginationModule {}