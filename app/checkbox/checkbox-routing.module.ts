import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckboxComponent } from './checkbox.component';

const routes: Routes = [{
	path: '',
	redirectTo: 'checkbox'
},{
	path: 'checkbox',
	component: CheckboxComponent
}]; 

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	]
})

export class CheckboxRoutingModule{}