import { Component } from 'angular2/core';
import {ROUTER_DIRECTIVES} from "angular2/router";

@Component({
    selector: 'my-header',
    templateUrl: 'ng2/components/header/header.template.html',
    directives: [ROUTER_DIRECTIVES]
})
export class HeaderComponent{

}
  