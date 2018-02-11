import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginationComponent } from './pagination.component';

const routes: Routes = [{
	path: '',
	redirectTo: 'pagination'
},{
	path: 'pagination',
	component: PaginationComponent
}];

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	]
})

export class PaginationRoutingModule{}