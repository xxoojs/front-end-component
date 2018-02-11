import { Component } from '@angular/core';
import { MenuService } from './menu.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Description } from './description';

@Component({
    selector: 'my-app',
    template: require('./app.component.html'),
    styleUrls: ['./app.component.css'],
    providers: [
        MenuService,
        Description
    ]
})
export class AppComponent{

	private hash: any;
    private note: any;
    
    constructor(
        private menuService: MenuService,
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private description: Description
    ){
    	let parts = location.href.split('/');
    	this.hash = parts[ parts.length -1 ] || 'datepicker';

        this.note = description.data[this.hash];
    }

    navigator(third){
        let finish = false;
        for(let item of this.router.config){
            if(third.hash == item.path){
                finish = true;
            }
        }

        if(finish){
            this.hash = third.hash;
            this.note = this.description.data[this.hash];
            this.router.navigate([ '/' + third.hash ]);
        }
    }
}
