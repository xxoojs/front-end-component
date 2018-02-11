import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CascaderComponent } from './cascader.component';

@NgModule({
    declarations: [
        CascaderComponent
    ],
    exports: [
        CascaderComponent
    ],
    imports: [
        FormsModule
    ]
})
export class SwitchModule {}