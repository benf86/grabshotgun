import { Component } from 'angular2/core';

import { RideOptionsService } from '../services/ride-options.service';

import { RolePick } from './role-pick.component';


@Component({
	selector: 'options-selector',
	templateUrl: '/app/user-facing/templates/html/options-selector.component.html',
	directives: [ RolePick ],
	providers: [ RideOptionsService ]
})
export class OptionsSelector {
	constructor(private _rideOptions: RideOptionsService) {};
}
