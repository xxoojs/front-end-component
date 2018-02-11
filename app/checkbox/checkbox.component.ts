/*
* author：xuqiang
* isChecked：因为boolean在父子组件交互时无法传输，所以用0和1
* label：用于提示，举个栗子：来啊，点我啊
*/

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
	selector: 'checkbox',
	templateUrl:'./checkbox.component.html',
	styleUrls:['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {
	@Input() isChecked:string = '0';
	@Input() label:string = '来啊，点我啊';

	@Output() checked: EventEmitter<any> = new EventEmitter<any>();
	constructor() {}

	ngOnInit() {}

	checkEvt(){
		this.isChecked = this.isChecked === '0' ? '1' : '0';
		this.checked.emit(this.isChecked);
	}
}