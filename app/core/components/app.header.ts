import {Component} from 'angular2/core';

import * as _ from 'lodash';

@Component({
    selector:'app-header',
    moduleId: __moduleName,
    templateUrl:'../../../app/core/templates/app.header.html',
    styleUrls:['../../../app/core/sass/app.header.css']
})

export class AppHeader{
    randomText:string; 
    constructor(){
        this.randomText=_.sample(['random_1','random_2','random_3']);
    }
} 