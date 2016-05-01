import { Component } from 'angular2/core';
import { NgClass } from 'angular2/common';

import { RideOptionsService } from '../services/ride-options.service';


@Component({
	selector: 'role-pick',
	templateUrl: '/app/user-facing/templates/html/role-pick.component.html',
	directives: [NgClass]
})
export class RolePick {
	constructor (private _rideOptionsService: RideOptionsService ) {};

	role: string;

	pickRole (event) {
		if (this._rideOptionsService.get('role')) {
			return this.role = this._rideOptionsService.set('role', null).role;
		}
		let role = ~event.srcElement.id.indexOf('driver') ? 'driver' : 'shotgun';
		return this.role = this._rideOptionsService.set('role', role).role;
	}
}
