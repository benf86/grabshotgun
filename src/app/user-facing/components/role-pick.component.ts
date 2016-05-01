import { Component } from 'angular2/core';

import { RideOptionsService } from '../services/ride-options.service';


@Component({
	selector: 'role-pick',
	templateUrl: '/app/user-facing/templates/html/role-pick.component.html'
})
export class RolePick {
	constructor (private _rideOptionsService: RideOptionsService ) {};
	rolePicker = 'maximized';
	
	pickRole (cardName: string) {
		this.rolePicker = this.rolePicker === 'maximized' ? 'minimized' : 'maximized';
		console.log(this._rideOptionsService.set('role', cardName));
	}
}