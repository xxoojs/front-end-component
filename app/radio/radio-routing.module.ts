import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RadioComponent } from './radio.component';

const routes: Routes = [{
	path: '',
	redirectTo: 'radio'
},{
	path: 'radio',
	component: RadioComponent
}];

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	]
})

export class RadioRoutingModule{}