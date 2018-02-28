import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './table.component';

const routes: Routes = [{
	path: '',
	redirectTo: 'table'
},{
	path: 'table',
	component: TableComponent
}];

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	]
})

export class TableRoutingModule{}