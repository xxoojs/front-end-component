/*
* author：xuqiang
* isOpen: 初始化开关
* labels：用于提示，举个栗子：{
		open: '开',
		close: '关'
	}
   click： 广播事件
*/

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'switch',
	templateUrl: './switch.component.html',
	styleUrls:['./switch.component.css']
})
export class SwitchComponent{
	@Input() isOpen: boolean = false;
	@Input() width: string = '60px';
	@Input() labels = {
		open: '开',
		close: '关'
	}

	@Output() click: EventEmitter<any> = new EventEmitter();

	clickEvt(){
		this.click.emit(this.isOpen);
	}
}