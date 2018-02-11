/*
* author：xuqiang
* tags: 数组，默认为一个json数组，id，name为必须的属性
  direction： 横向排版 h  纵向排版 v
*/

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'tag',
	templateUrl: './tag.component.html',
	styleUrls:['./tag.component.css']
})
export class TagComponent{
	@Input() tags: any[] = [{
		id: '1',
		name: 'Tag 1'
	},{
		id: '2',
		name: 'Tag 2'
	},{
		id: '3',
		name: 'Tag 3'
	},{
		id: '4',
		name: 'Tag 4'
	}];
	@Input() direction: any = 'v';

	del(tag){
		this.tags = this.tags.filter(item => item.id != tag.id);
	}
}