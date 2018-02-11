import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TagComponent } from './tag.component';

@NgModule({
    declarations: [
        TagComponent
    ],
    exports: [
        TagComponent
    ],
    imports: [
        FormsModule
    ]
})
export class TagModule {}