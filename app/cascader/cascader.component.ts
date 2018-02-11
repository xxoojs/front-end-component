/*
* author：xuqiang
* cascaderList: 下拉的列表，为数组，属性为id,name,children，没有children为无子类
* click：广播事件，为数组，广播出选中的节点对象
*/

import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
	selector: 'cascader',
	templateUrl: './cascader.component.html',
	styleUrls:['./cascader.component.css']
})
export class CascaderComponent implements OnInit{
	@Input() cascaderList: any[] = [{
		id:'1',
		name: '浙江',
		children: [{
			id: '11',
			name: '杭州',
			children: [{
				id: '111',
				name: '西湖'
			}]
		},{
			id: '12',
			name: '淳安县'
		}]
	},{
		id:'2',
		name: '江苏',
		children: [{
			id: '21',
			name: '南京',
			children: [{
				id: '211',
				name: '中华门'
			}]
		}]
	}];

	@Output() click: EventEmitter<any> = new EventEmitter();

	private isShow: boolean = false;
	private ulList: any[] = [];
	private activeLi: any[] = [];
	private label: string = '';

	ngOnChanges(changes){
		this.ulList = [changes.cascaderList.currentValue || this.cascaderList];
	}

	ngOnInit(){
		this.ulList = [this.cascaderList];
	}

	expand(idx, cascader){
		this.activeLi.length = idx;
		this.activeLi[idx] = cascader;

		if(cascader.children && cascader.children.length){
			this.ulList[idx + 1] = cascader.children;

			this.ulList.length = idx + 2;
		}else{
			this.ulList.length = idx + 1;

			this.isShow = false;
			this.click.emit(this.activeLi);

			let labels = [];
			for(let item of this.activeLi){
				labels.push(item.name);
			}
			this.label = labels.join(' / ');
		}
	}

	isSelected(li){
		let isSelected = false;
		for(let item of this.activeLi){
			if(li.id == item.id){
				isSelected = true;
			}
		}
		return isSelected;
	}

	@HostListener('document:click', ['$event','this.selectData'])
    onClickDoc($event: any,selectData:any) {
    	this.isShow = false;
    }
}