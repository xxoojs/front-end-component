import { Component, Output, ElementRef, EventEmitter, OnDestroy, HostListener, Renderer} from '@angular/core';

@Component({
	selector: 'select-list-component',
	templateUrl: 'select-list.component.html',
	styleUrls: ['./select-list.component.css'],
})

export class SelectListComponent{
	private position: any = {
		left:0,
		top:0,
		width:0
	};
	private optionList: any[];
	private host: any;
	private isShow: boolean = false;
	private currentOption: {} = {};

	@Output() select:EventEmitter<any> = new EventEmitter<any>();;
	@Output() close:EventEmitter<any> = new EventEmitter<any>();;

	show(host:any, position:any, selfElement:any, initInfo: any){
		this.host = host;
		this.position = position;
		this.optionList = host.optionList;

		for(var item of this.optionList){
			if(initInfo == item.name){
				this.currentOption = item;
			}
		}

		window.document.body.appendChild(selfElement);
		this.isShow = true;
	}

	selectEvt(option:any){
		window.document.body.removeChild(this.host.cache.location.nativeElement);
		this.currentOption = option;
		this.select.emit(option);
	}

	destroy(){
		if(this.host.cache.location.nativeElement.parentNode){
			window.document.body.removeChild(this.host.cache.location.nativeElement);
		}
	}

	@HostListener('document:click', ['$event','this.selectData'])
    onClickDoc($event: any,selectData:any) {
    	var currentSelect = this.host.selfElement.nativeElement;
    	var targetObj = {
    		hasTarget: currentSelect == $event.target
    	};
    	this.isChild(currentSelect.childNodes, $event.target, targetObj);

    	if(targetObj.hasTarget){
    		return;
    	}

		if(this.host.cache.location.nativeElement.parentNode){
			this.close.emit(false);
     		window.document.body.removeChild(this.host.cache.location.nativeElement);
		}
    }

    isChild(nodes, target, targetObj){
    	for(var i=0; i<nodes.length; i++){
    		if(nodes[i] == target){
    			targetObj.hasTarget = true;
    		}else{
    			if(nodes[i].childNodes){
    				this.isChild(nodes[i].childNodes, target, targetObj);
    			}
    		}
    	}
    }
}