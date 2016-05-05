import { Component } from 'angular2/core';
import { NgClass } from 'angular2/common';

import { BaseComponent } from '../util/base.component.extendable';
import { RideOptionsService } from '../services/ride-options.service';


@Component({
	selector: 'my-origin',
	templateUrl: '/app/user-facing/templates/html/origin.component.html',
	directives: [NgClass]
})
export class OriginComponent extends BaseComponent {
	constructor (private _rideOptionsService: RideOptionsService) {};

	tempOrigin: string;
	origin: string;
	isHovered: boolean = false;

	setOrigin (event) {
		if (event.srcElement.id === 'submit-origin-btn' ||
			(event.srcElement.id === 'origin-input' && event.which === 13)) {
			event.stopPropagation();
			return this.origin = this._rideOptionsService.set('origin', this.tempOrigin).origin;
		}
		this.isHovered = false;
		return this.origin = this._rideOptionsService.set('origin', null).origin;
	}
}
