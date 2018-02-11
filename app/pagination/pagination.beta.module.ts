import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination.component';
import { PaginationRoutingModule } from './pagination-routing.module';
import { SelectModule } from '../select/select.beta.module';
import { NumberModule } from '../number/number.beta.module';

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
        PaginationRoutingModule,
        SelectModule,
        NumberModule
    ]
})
export class PaginationModule {}