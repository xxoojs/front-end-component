import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TagComponent } from './tag.component';

const routes: Routes = [{
	path: '',
	redirectTo: 'tag'
},{
	path: 'tag',
	component: TagComponent
}];

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	]
})

export class TagRoutingModule{}