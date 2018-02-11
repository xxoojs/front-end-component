import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TagComponent } from './tag.component';
import { TagRoutingModule } from './tag-routing.module';

@NgModule({
    declarations: [
        TagComponent
    ],
    exports: [
        TagComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        TagRoutingModule
    ]
})
export class TagModule {}