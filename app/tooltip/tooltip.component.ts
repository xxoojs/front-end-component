/*
* author：xuqiang
* el: HTMLElement-需要展示tooltip的元素
* label: tooltip里展示的内容
* direction: 展示的位置（上下左右）top|right|bottom|left
* width: tooltip的宽度 150px
*/

import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { layout } from '../util/position';

@Component({
	selector: 'tooltip',
	templateUrl: './tooltip.component.html',
	styleUrls:['./tooltip.component.css']
})
export class TooltipComponent{
	@ViewChild('test') defaultEl: ElementRef;
	@ViewChild('tooltip') tipEl: ElementRef;

	@Input() el: HTMLElement;
	@Input() label: string = '我就是你的tooltip！';
	@Input() direction: string = 'right';
	@Input() width: string = '150px';

	private position: any = {
		left: '0px',
		top: '0px'
	};

	ngAfterViewInit(){
		// let el = this.el || this.defaultEl.nativeElement,
		// 	tipEl = this.tipEl.nativeElement,
		// 	position = layout(el);

		// switch(this.direction){
		// 	case 'top':
		// 		position.top = parseInt(position.top) - el.offsetHeight - tipEl.scrollHeight - 10 + 'px';
		// 		break;
		// 	case 'right':
		// 		position.left = parseInt(position.left) + el.offsetWidth + 'px';
		// 		position.top = parseInt(position.top) - el.offsetHeight + 'px';
		// 		break;
		// 	case 'bottom':

		// 		break;
		// 	case 'left':
		// 		position.top = parseInt(position.top) - el.offsetHeight / 2 + 'px';

		// 		break;
		// 	default:
		// 		break;
		// }

		// this.position = position;
		this.positionFn();
	}

	private isHid: boolean = true;
	mouseOver(){
		this.isHid = false;
		this.positionFn();
	}

	mouseOut(){
		this.isHid = true;
	}

	positionFn(){
		let el = this.el || this.defaultEl.nativeElement,
			tipEl = this.tipEl.nativeElement,
			position = layout(el);

		switch(this.direction){
			case 'top':
				position.top = parseInt(position.top) - el.offsetHeight - tipEl.scrollHeight - 10 + 'px';
				break;
			case 'right':
				position.left = parseInt(position.left) + el.offsetWidth + 'px';
				position.top = parseInt(position.top) - el.offsetHeight + 'px';
				break;
			case 'bottom':

				break;
			case 'left':
				position.top = parseInt(position.top) - el.offsetHeight / 2 + 'px';

				break;
			default:
				break;
		}

		this.position = position;
	}
}