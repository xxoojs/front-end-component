import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { SelectComponent } from './select.component';
import { CommonSelectListModule } from './select-list/common-select-list-module';
import { SelectListComponent } from './select-list/select-list.component';

@NgModule({
    declarations: [
        SelectComponent
    ],
    exports: [
        SelectComponent
    ],
    imports: [
        FormsModule,
        CommonSelectListModule
    ],
    entryComponents: [ SelectListComponent ]
})
export class SelectModule {}