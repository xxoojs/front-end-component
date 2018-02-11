import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SelectListComponent } from './select-list.component';
import { TreeModule } from 'angular2-tree-component';


@NgModule({
  declarations: [
    SelectListComponent
  ],
  exports: [
    SelectListComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    TreeModule
  ]
})
export class CommonSelectListModule {}