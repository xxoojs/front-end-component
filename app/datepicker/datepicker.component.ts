/*
* author：xuqiang
* options：配置项，主要包含以下属性
* 	mindate  最小日期  如2017-11-21
* 	maxdate  最大日期  如2017-11-22
*   time 当前时间，举个栗子：2017-11-24
*   originDate
*		date: 日期，目前跟time一样，可能累赘，到时考虑删除time,
*		hour: 时,
*		mins: 分,
*		seconds: 秒
*/

import { Component, Input, HostListener, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'mydatepicker',
	templateUrl: './datepicker.component.html',
	styleUrls: ['./datepicker.component.css']
})

export class DatepickerComponent{
	private show: boolean = false;

	private setType: number = 1;

	@Input() options: any = {
		mindate: '2017-10-12',
		maxdate: '2017-12-12',
	};
	@Input() time:string = '2017-11-21';
	private year: number;
	private month: number;
	private day: number;
	private weekNum: number;

	private hour: any = '00';
	private mins: any = '00';
	private seconds: any = '00';

	// 六行七列
	private days: any[] = [];

	private months = [
		[{id: '1',name: '1月'},{id: '2',name: '2月'},{id: '3',name: '3月'}],
		[{id: '4',name: '4月'},{id: '5',name: '5月'},{id: '6',name: '6月'}],
		[{id: '7',name: '7月'},{id: '8',name: '8月'},{id: '9',name: '9月'}],
		[{id: '10',name: '10月'},{id: '11',name: '11月'},{id: '12',name: '12月'}]
	];
	private years = [];

	private label: string = '';

	@Input() originDate = {
		date: '',
		hour: '',
		mins: '',
		seconds: ''
	}

	@Output() timeSetted: EventEmitter<any> = new EventEmitter();

	ngOnInit(){
		this.ngOnChanges({time:this.time});
	}

	ngOnChanges(changes){
		if(changes.originDate){
			this.label = [this.originDate.date, 
					this.originDate.date ? [
						this.originDate.hour,
						this.originDate.mins ? ':' : '',
						this.originDate.mins,
						this.originDate.seconds ? ':' : '',
						this.originDate.seconds
					].join('') : ''
			].join(' ');

			this.hour = this.originDate.hour || '00';
			this.mins = this.originDate.mins || '00';
			this.seconds = this.originDate.seconds || '00';
		}
		if(changes.time){
			this.days = [];

			let date;
			if(/\d{4}-\d{2}(-\d{2})?/g.test( changes.time.currentValue || changes.time )){
				date = new Date( changes.time.currentValue || changes.time );
			}else{
				date = new Date();
			}
			
			this.year = date.getFullYear();
			this.getYears(this.year);
			this.month = date.getMonth() + 1;
			this.day = date.getDate();

			this.weekNum = new Date([this.year, this.month, 1].join('-')).getDay();

			let prevMonthDays = this.getDateLength(this.year, this.month-1),
				currentMonthDays = this.getDateLength(this.year, this.month);

			for(let i = this.weekNum - 1; i >= 0; i--){
				let _month = this.month - 1,
					_year = this.year;

				if(_month < 1){
					_month = 12 + _month;
					_year--;
				}

				this.days.push({
					type: 'prev',
					disable: this.isDisable(_year, _month, prevMonthDays - i),
					year: _year,
					month: _month,
					day: prevMonthDays - i,
					str: [this.year, this.place0(this.month - 1), this.place0(prevMonthDays - i)].join('-')
				});
			}

			for(let i = 1; i <= currentMonthDays; i++){
				this.days.push({
					type: 'current',
					disable: this.isDisable(this.year, this.month, i),
					year: this.year,
					month: this.month,
					day: i,
					str: [this.year, this.place0(this.month), this.place0(i)].join('-')
				});
			}

			let len = 42 - this.days.length;
			for(let i = 1; i <= len; i++){
				let _month = this.month + 1,
					_year = this.year;

				if( _month > 12 ){
					_month = _month % 12,
					_year++;
				}

				this.days.push({
					type: 'next',
					disable: this.isDisable(_year, _month, i),
					year: _year,
					month: _month,
					day: i,
					str: [this.year, this.place0(this.month + 1), this.place0(i)].join('-')
				});
			}

			let arr = [],result = [];
			this.days.forEach((item, idx) => {
				arr.push(item);

				if((idx+1) % 7 === 0){
					if(arr && arr.length) result.push(arr);
					arr = [];
				}
			});

			this.days = result;
		}
	}

	showDatePanel(){
		this.show = !this.show;
		this.setType = 1;

		this.time = this.originDate.date;
		this.hour = this.originDate.hour || '00';
		this.mins = this.originDate.mins || '00';
		this.seconds = this.originDate.seconds || '00';
	}

	prevMonth(){
		this.month--;
		if(this.month < 1){
			this.year--;
			this.month = 12;
		}
		// this.time = [this.year, this.month, this.day].join('-');
		this.ngOnChanges({
			time: [this.year, this.place0(this.month), this.place0(this.day)].join('-')
		});
	}

	nextMonth(){
		this.month++;
		if(this.month > 12){
			this.year++;
			this.month = 1;
		}
		// this.time = [this.year, this.month, this.day].join('-');
		this.ngOnChanges({
			time:[this.year, this.place0(this.month), this.place0(this.day)].join('-')
		});
	}

	prevYear(){
		this.year--;
		// this.time = [this.year, this.month, this.day].join('-');
		this.ngOnChanges({
			time:[this.year, this.place0(this.month), this.place0(this.day)].join('-')
		});
	}

	nextYear(){
		this.year++;
		// this.time = [this.year, this.month, this.day].join('-');
		this.ngOnChanges({
			time: [this.year, this.place0(this.month), this.place0(this.day)].join('-')
		});
	}

	selectDay(day){
		this.time = [day.year, this.place0(day.month), this.place0(day.day)].join('-');
		this.ngOnChanges({time:this.time});

		this.confirm();
	}

	today(){
		let date = new Date();

		this.year = date.getFullYear();
		this.month = date.getMonth() + 1;
		this.day = date.getDate();

		this.time = [this.year, this.place0(this.month), this.place0(this.day)].join('-');
		
		this.confirm();
	}

	confirm(){
		this.show = false;

		this.validate('hour', this.hour);
		this.validate('mins', this.mins);
		this.validate('seconds', this.seconds);

		if(!this.time){
			let date = new Date();
			this.year = date.getFullYear();
			this.month = date.getMonth() + 1;
			this.day = date.getDate();

			this.time = [this.year, this.month, this.day].join('-');
			this.ngOnChanges({time:this.time});
		}

		this.originDate = {
			date: this.time,
			hour: this.hour,
			mins: this.mins,
			seconds: this.seconds
		}
		this.label = [this.time, [this.hour, this.mins ? ':' : '', this.mins, this.seconds ? ':' : '', this.seconds].join('')].join(' ');

		this.timeSetted.emit(this.originDate);
	}

	getDateLength(year,month){
        //获取某一月有多少天, month为实际月份，一月即为1
        return new Date(year,month,0).getDate();
    }

    place0(variable){
    	return variable < 10 ? '0' + variable : variable;
    }

    @HostListener('document:click', ['$event','this.selectData'])
    onClickDoc($event: any,selectData:any) {
    	this.show = false;

    	this.validate('hour', this.hour);
		this.validate('mins', this.mins);
		this.validate('seconds', this.seconds);
    }

    isDisable(year, month, day){
    	let date = new Date([year, month, day].join('-'));
    	if(this.options.mindate){
    		if(new Date(this.options.mindate) > date) return true;
    	}
    	if(this.options.maxdate){
    		if(new Date(this.options.maxdate) < date) return true;	
    	}
    	return false;
    }

    setMonth(id){
    	this.month = id;
    	this.ngOnChanges({
			time:[this.year, this.place0(this.month), this.place0(this.day)].join('-')
		});
		this.setType = 1;
    }

    validate(type, variable){
    	let regx = /^\d{2,2}$/g,
    		isCorrect = false;
    	switch(type){
    		case 'hour':
    			if(regx.test(variable)){
    				if(0 < parseInt(variable) && parseInt(variable) < 24){
    					isCorrect = true;
    				}
    			}
    			break;
    		case 'mins':
    			if(regx.test(variable)){
    				if(0 < parseInt(variable) && parseInt(variable) < 60){
    					isCorrect = true;
    				}
    			}
    			break;
    		case 'seconds':
    			if(regx.test(variable)){
    				if(0 < parseInt(variable) && parseInt(variable) < 60){
    					isCorrect = true;
    				}
    			}
    			break;
    		default:
    			break;
    	}

    	if(!isCorrect){
			this[type] = '00';
    	}
    }

    init(){
    	this.label = '';
    	this.originDate = {
			date: '',
			hour: '',
			mins: '',
			seconds: ''
		}
		this.timeSetted.emit(this.originDate);
    }

    getYears(year){
    	let minyear = parseInt( year / 10 + '' ) * 10 - 1,
    		maxyear = minyear + 11;

    	this.years = [];
    	let len = 0,
    		_arr = [];
    	for(var i=minyear; i<=maxyear; i++){
    		_arr.push({
    			id: i,
    			name: i,
    			disable: i == minyear || i == maxyear
    		});
    		++len;
    		if(len % 3 === 0){
    			this.years.push(_arr);
    			_arr = [];
    		}
    	}
    }

    setYear(yearObj){
    	if(yearObj.disable){
    		this.getYears(yearObj.id);
    	}else{
    		this.year = yearObj.id;
	    	this.ngOnChanges({
				time:[this.year, this.place0(this.month), this.place0(this.day)].join('-')
			});
			this.setType = 1;
    	}
    }
}