import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TableModule } from './table.module';
import { TableRoutingModule } from './table-routing.module';
import { DemoTableComponent } from './demo.table.component';

@NgModule({
    declarations: [
        DemoTableComponent
    ],
    exports: [
        
    ],
    imports: [
        FormsModule,
        CommonModule,
        TableRoutingModule,
        TableModule
    ]
})
export class DemoTableModule {}