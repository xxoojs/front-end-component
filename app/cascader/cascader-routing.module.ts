import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CascaderComponent } from './cascader.component';

const routes: Routes = [{
	path: '',
	redirectTo: 'cascader'
},{
	path: 'cascader',
	component: CascaderComponent
}];

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	]
})

export class CascaderRoutingModule{}