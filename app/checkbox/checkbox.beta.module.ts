import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CheckboxComponent } from './checkbox.component';
import { CheckboxRoutingModule } from './checkbox-routing.module';

@NgModule({
  declarations: [
    CheckboxComponent
  ],
  exports: [
    CheckboxComponent
  ],
  imports: [
    FormsModule,
    CheckboxRoutingModule
  ]
})
export class CheckboxModule {}