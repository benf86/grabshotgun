import { Component } from 'angular2/core';

import { RideOptionsService } from '../services/ride-options.service';

import { RoleComponent } from './role.component';
import { DestinationComponent } from './destination.component';
import { OriginComponent } from './origin.component';


@Component({
	selector: 'options-selector',
	templateUrl: '/app/user-facing/templates/html/options-selector.component.html',
	directives: [ RoleComponent, DestinationComponent, OriginComponent ],
	providers: [ RideOptionsService ]
})
export class OptionsSelector {
	constructor(private _rideOptions: RideOptionsService) {};
}
