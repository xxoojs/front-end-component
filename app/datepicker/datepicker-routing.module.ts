import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatepickerComponent } from './datepicker.component';

const routes: Routes = [{
	path: '',
	redirectTo: 'datepicker'
},{
	path: 'datepicker',
	component: DatepickerComponent
}];

@NgModule({
	imports:[
		RouterModule.forChild(routes)
	]
})

export class DatepickerRoutingModule{}