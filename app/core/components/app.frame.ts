import {Component} from 'angular2/core';

import {AppHeader} from './app.header';
import {AppSidebar} from './app.sidebar';

@Component({
    selector: 'app-frame',
    moduleId: __moduleName,
    templateUrl: '../../../app/core/templates/app.frame.html',
    directives: [AppHeader, AppSidebar]
})

export class AppFrame {
    constructor(){
        console.log(); 
    }
}