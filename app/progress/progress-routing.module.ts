import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProgressComponent } from './progress.component';

const routes: Routes = [{
	path: '',
	redirectTo: 'progress'
},{
	path: 'progress',
	component: ProgressComponent
}];

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	]
})

export class ProgressRoutingModule{}