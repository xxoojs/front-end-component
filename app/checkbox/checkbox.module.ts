import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CheckboxComponent } from './checkbox.component';

@NgModule({
  declarations: [
    CheckboxComponent
  ],
  exports: [
    CheckboxComponent
  ],
  imports: [
    FormsModule
  ]
})
export class CheckboxModule {}