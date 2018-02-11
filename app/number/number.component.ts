/*
* author：xuqiang
* max： 最大值
* min：最小值
* initVal：初始值
* width：暂时开放，用于指定宽度，默认是按照父元素的宽度
* output：输出，广播出输入值
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
	@Output() output: EventEmitter<any> = new EventEmitter();

	keydown($event){
		let keyCode = $event.keyCode;

		if(
			// 数字键盘
			(keyCode > 47 && keyCode < 58)
			// 小键盘数字
			|| (keyCode > 95 && keyCode < 106)
		){
			let futureVal = parseFloat( ($event.target.value || '') + String.fromCharCode(keyCode) );

			return futureVal >= this.min && futureVal <= this.max;
		}

		return keyCode == 8 || keyCode == 38 || keyCode == 40 || keyCode == 110 || keyCode == 109 || keyCode == 189 || keyCode == 190;
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