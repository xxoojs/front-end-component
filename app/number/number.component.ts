/*
* author：xuqiang
* cascaderList: 下拉的列表，为数组，属性为id,name,children，没有children为无子类
* click：广播事件，为数组，广播出选中的节点对象
*/

import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
	selector: 'number',
	templateUrl: './number.component.html',
	styleUrls:['./number.component.css']
})

export class NumberComponent{
	@Input() max: number = 10;
	@Input() min: number = -10;
	@Input() initVal: string = '0';
	@Input() width: string = '100px';

	keydown($event){
		let keyCode = $event.keyCode;

		if(
			// 数字键盘
			(keyCode > 47 && keyCode < 58)
			// 小键盘数字
			|| (keyCode > 95 && keyCode < 106)
			// backspace
			|| keyCode == 8
			// up
			|| keyCode == 38
			// down
			|| keyCode == 40
			// 。
			|| keyCode == 110
			// -
			|| keyCode == 109
			// -
			|| keyCode == 189
		){
			return true;
		}

		return false;
	}

	keyup($event){
		let keyCode = $event.keyCode;

		var that = this;
		setTimeout(function(){
			if(that.initVal) that.initVal = that.initVal.match(/^[0-9.-]*/g) + '';
			// /^[1-9-]+(\.\d+)?/g
		},10);

		// up
		if(keyCode == 38){
			this.up();
		}

		// down
		if(keyCode == 40){
			this.down();	
		}
	}

	up(){
		let currentVal = parseInt(this.initVal);
		if(currentVal < this.max) this.initVal = currentVal + 1 + '';
	}

	down(){
		let currentVal = parseInt(this.initVal);
		if(currentVal > this.min) this.initVal = currentVal - 1 + '';
	}
}