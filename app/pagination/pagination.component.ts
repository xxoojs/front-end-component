/*
* author：xuqiang
* curPage：当前页数
* totalPage：总页数
* pageSize：每页显示数
*/

import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
	selector: 'ip-pagination',
	templateUrl: './pagination.component.html',
	styleUrls:['./pagination.component.css']
})

export class PaginationComponent{
	private optionalList: any[] = [{
		id: '10',
		name: '10'
	},{
		id: '20',
		name: '20'
	},{
		id: '50',
		name: '50'
	},{
		id: '100',
		name: '100'
	},{
		id: '200',
		name: '200'
	}];
	@Input() pageSize: number = 10;
	@Input() curPage: number = 1;

	private meaninglessArr: any[] = new Array(50);
	@Input()
	set totalPage(value){
		this.meaninglessArr.length = value;
	}
	get totalPage(){
		return this.meaninglessArr.length;
	}

	private fixedLenArr: any[] = new Array(5);

	@Output() click:EventEmitter<any> = new EventEmitter();

	selectPage($event){
		this.pageSize = $event.id;
		this.emit();
	}

	prev(){
		if(this.curPage > 1){
			--this.curPage;
			this.emit();
		}
	}

	next(){
		if(this.curPage < this.totalPage){
			++this.curPage;
			this.emit();
		}
	}

	goFirst(){
		this.curPage = 1;
		this.emit();
	}

	goEnd(){
		this.curPage = this.totalPage;
		this.emit();
	}

	setCurPage(page){
		this.curPage = page;
		this.emit();
	}

	emit(){
		this.click.emit({
			pageSize: this.pageSize,
			curPage: this.curPage
		});
	}

	numInput($event){
		if($event && $event != '0'){
			this.curPage = parseInt($event);
			this.emit();
		}
	}
}