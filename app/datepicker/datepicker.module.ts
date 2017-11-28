import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DatepickerComponent } from './datepicker.component';

@NgModule({
	imports:[
		FormsModule,
		CommonModule
	],
	declarations:[
		DatepickerComponent
	]
})

export class DatepickerModule{}