import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { routes } from '../controllers/routes/default.route';


@Component({
	selector: 'my-app',
	template: `
		<div id="background"></div>
		<router-outlet></router-outlet>
	`,
	directives: [ROUTER_DIRECTIVES],
	providers: [ROUTER_PROVIDERS]
})
@RouteConfig(routes)
export class AppComponent {

}