import { Component } from 'angular2/core';
import { NgClass } from 'angular2/common';

import { BaseComponent } from '../util/base.component.extendable';
import { RideOptionsService } from '../services/ride-options.service';


@Component({
	selector: 'my-destination',
	templateUrl: '/app/user-facing/templates/html/destination.component.html',
	directives: [NgClass]
})
export class DestinationComponent extends BaseComponent {
	constructor (private _rideOptionsService: RideOptionsService) {};

	tempDestination: string;
	destination: string;
	isHovered: boolean = false;

	setDestination (event) {
		if (event.srcElement.id === 'submit-destination-btn' ||
			(event.srcElement.id === 'destination-input' && event.which === 13)) {
			event.stopPropagation();
			return this.destination = this._rideOptionsService.set('destination', this.tempDestination).destination;
		}
		this.isHovered = false;
		return this.destination = this._rideOptionsService.set('destination', null).destination;
	}
}
