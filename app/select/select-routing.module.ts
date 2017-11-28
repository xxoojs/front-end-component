import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectComponent } from './select.component';
import { SelectListComponent } from './select-list/select-list.component';

const routes: Routes = [{
	path: '',
	redirectTo: 'select'
},{
	path: 'select',
	component: SelectComponent
}];

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	],
    entryComponents: [ SelectListComponent ]
})

export class SelectRoutingModule{}