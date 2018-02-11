import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { SelectComponent } from './select.component';
import { CommonSelectListModule } from './select-list/common-select-list-module';
import { SelectRoutingModule } from './select-routing.module';

@NgModule({
    declarations: [
        SelectComponent
    ],
    exports: [
        SelectComponent
    ],
    imports: [
        FormsModule,
        CommonSelectListModule,
        SelectRoutingModule
    ]
})
export class SelectModule {}