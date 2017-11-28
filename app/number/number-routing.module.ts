import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NumberComponent } from './number.component';

const routes: Routes = [{
	path: '',
	redirectTo: 'number'
},{
	path: 'number',
	component: NumberComponent
}];

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	]
})

export class NumberRoutingModule{}