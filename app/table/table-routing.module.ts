import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoTableComponent } from './demo.table.component';

const routes: Routes = [{
	path: '',
	redirectTo: 'table'
},{
	path: 'table',
	component: DemoTableComponent
}];

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	]
})

export class TableRoutingModule{}