import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { TreeModule } from 'angular2-tree-component';

// import { ServerInterceptor } from './server.interceptor';
// import { provideInterceptorService  } from 'ng2-interceptors';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule,
        AppRoutingModule,
        HttpModule,
        TreeModule,
        NgbModule.forRoot()
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        // ServerInterceptor,
        // provideInterceptorService([
        //   ServerInterceptor 
        // ])
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
