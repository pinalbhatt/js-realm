import {Component} from 'angular2/core';
import {HeaderComponent} from '../components/header/header.component'
import {FooterComponent} from '../components/footer/footer.component'
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from "angular2/router";
import {WelcomeComponent} from "../components/welcome/welcome.component";
import {SigninComponent} from "../components/signin/signin.component";

@Component({
    selector: 'root-component',
    templateUrl: 'ng2/main/main.component.html',
    providers: [ROUTER_PROVIDERS],
    directives: [ROUTER_DIRECTIVES, HeaderComponent, FooterComponent]
})
@RouteConfig([
    {
        path: "/welcome",
        name: "Welcome",
        component: WelcomeComponent,
        useAsDefault: true
    },
    {
        path: "/signin",
        name: "Signin",
        component: SigninComponent
    }

])
export class MainComponent { }
