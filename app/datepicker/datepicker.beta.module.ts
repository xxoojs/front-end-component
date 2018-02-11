import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DatepickerRoutingModule } from './datepicker-routing.module';
import { DatepickerComponent } from './datepicker.component';


@NgModule({
	imports:[
		DatepickerRoutingModule,
		FormsModule,
		CommonModule
	],
	declarations:[
		DatepickerComponent
	]
})

export class DatepickerModule{}