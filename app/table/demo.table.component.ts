import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
	selector: 'demoTable',
    template: require('./table.component.html'),
    styles: [
        require('./table.component.css') + ""
    ],
})
export class DemoTableComponent implements OnInit{
    ngOnInit() {
        
    }
    
}