/*
* author：xuqiang
* isChecked：因为boolean在父子组件交互时无法传输，所以用0和1
* label：用于提示，举个栗子：来啊，点我啊
*/

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'radio',
	templateUrl: './radio.component.html',
	styleUrls:['./radio.component.css']
})
export class RadioComponent implements OnInit{
	@Input() label: any = '来啊，点我啊';
	@Input() isChecked: any = '0';
	@Output() checked: EventEmitter<any> = new EventEmitter<any>();

	constructor() {}

	ngOnInit() {}

	checkEvt(){
		this.isChecked = this.isChecked === '0' ? '1' : '0';
		this.checked.emit();
	}
}