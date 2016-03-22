import {Component} from 'angular2/core';
import {HeaderComponent} from '../components/header/header.component'
import {FooterComponent} from '../components/footer/footer.component'
import {RouteConfig} from "angular2/router";

@Component({
    selector: 'root-component',
    templateUrl: 'ng2/main/main.component.html',
    directives: [HeaderComponent, FooterComponent]
})
@RouteConfig([

])
export class MainComponent { }
