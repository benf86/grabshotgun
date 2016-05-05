import { Component } from 'angular2/core';
import { NgClass } from 'angular2/common';

import { BaseComponent } from '../util/base.component.extendable';
import { RideOptionsService } from '../services/ride-options.service';


@Component({
	selector: 'my-role',
	templateUrl: '/app/user-facing/templates/html/role.component.html',
	directives: [NgClass]
})
export class RoleComponent extends BaseComponent {
	constructor (private _rideOptionsService: RideOptionsService ) {};

	role: string;
	isHovered: any = false;

	setRole (event) {
		if (this._rideOptionsService.get('role')) {
			return this.role = this._rideOptionsService.set('role', null).role;
		}
		let role = ~event.srcElement.id.indexOf('driver') ? 'driver' : 'shotgun';
		return this.role = this._rideOptionsService.set('role', role).role;
	}
}
