/*
* author：xuqiang
* dataList: [{id:'',name:''}]的格式
* initInfo：初始化的值，传name就可以了，所以得保证name是唯一的
* select：选中事件，抛出$event, 为{id:'',name:''｝的格式
*/

import { Component, OnInit, Input, Output, ViewChild, ViewChildren, Renderer, ElementRef, EventEmitter,  ComponentRef, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { Position, layoutFixed} from '../util/position';
import { SelectListComponent } from './select-list/select-list.component';

@Component({
	selector: 'select-component',
	templateUrl: './select.component.html',
	styleUrls: ['./select.component.css']
})
export class SelectComponent{
	private isOpen:boolean = false;
	private cache: any;
	private bindListCompt:any;

	private scrollTop: number = 0;

	@Input() optionList:any[] = [{id:'1',name:'我叫乔布斯'},{id:'2',name:'我叫马云'},{id:'2',name:'我是比尔盖兹'}];
    @Input() initVal:any = '我叫比尔盖兹';
    @Output() select: EventEmitter<any> = new EventEmitter<any>();
	@ViewChild('selectElement') selfElement: ElementRef;
	
    constructor(private viewContainerRef: ViewContainerRef,
        private componentFactoryResolver: ComponentFactoryResolver,
        private renderer: Renderer) {

    	let that = this;
    	this.renderer.listenGlobal('document', 'scroll', function ($event) {
    		try{
    			// TODO 此处有个兼容性问题：$event,target.scrollingElement，新版chrome是有的，不知道其他浏览器兼容性如何
    			that.scrollTop = $event.target.scrollingElement.scrollTop;
    		}catch(e){}
    	});
    }

 	viewInit() {
 		var that = this,
 			position =  layoutFixed(this.selfElement.nativeElement);

 		// 可能会有滚动
 		if(this.scrollTop){
			position['top'] = parseInt(position['top']) + this.scrollTop + 'px';
		}

		if(!that.cache){
	        that.cache = that.viewContainerRef.createComponent(
	        	that.componentFactoryResolver.resolveComponentFactory(SelectListComponent));

            this.bindListCompt = that.cache.location.nativeElement;

            that.cache.instance.select.subscribe((result: any) => {
                this.isOpen = false;
                this.initVal = result.name;
                this.select.emit(result);
            });

            that.cache.instance.close.subscribe((result: any) => {
                this.isOpen = false;
            });
        }
   	    that.cache.instance.show(that, position, this.bindListCompt, this.initVal);
 	}

	click($event){
		this.isOpen = !this.isOpen;
		
		if(this.isOpen) {
			this.viewInit();
		}else{
			window.document.body.removeChild(this.bindListCompt);
		}
	}

	ngOnDestroy(){
        if(this.cache) this.cache.instance.destroy();
        this.isOpen = false;
    }
}