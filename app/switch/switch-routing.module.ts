import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SwitchComponent } from './switch.component';

const routes: Routes = [{
	path: '',
	redirectTo: 'switch'
},{
	path: 'switch',
	component: SwitchComponent
}];

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	]
})

export class SwitchRoutingModule{}