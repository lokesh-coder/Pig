import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import {AppFrame} from './components/app.frame';

@Component({
    selector:'app',
    template:'<app-frame></app-frame>',
    directives:[AppFrame] 
})

export class App{}  

bootstrap(App);   