import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TooltipComponent } from './tooltip.component';

const routes: Routes = [{
	path: '',
	redirectTo: 'tooltip'
},{
	path: 'tooltip',
	component: TooltipComponent
}];

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	]
})

export class TooltipRoutingModule{}