import { Component } from 'angular2/core';
import {ROUTER_DIRECTIVES} from "angular2/router";

@Component({
    selector: 'welcome-template',
    templateUrl: 'ng2/components/welcome/welcome.template.html',
    directives: [ROUTER_DIRECTIVES]
})
export class WelcomeComponent{

}
  