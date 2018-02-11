import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CascaderComponent } from './cascader.component';
import { CascaderRoutingModule } from './cascader-routing.module';

@NgModule({
    declarations: [
        CascaderComponent
    ],
    exports: [
        CascaderComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        CascaderRoutingModule
    ]
})
export class CascaderModule {}