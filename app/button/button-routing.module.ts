import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonComponent } from './button.component';

const routes: Routes = [{
	path: '',
	redirectTo: 'button'
},{
	path: 'button',
	component: ButtonComponent
}];

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	]
})

export class ButtonRoutingModule{}