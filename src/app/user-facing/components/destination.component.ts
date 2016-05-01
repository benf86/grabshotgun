import { Component } from 'angular2/core';
import { NgClass } from 'angular2/common';

import { RideOptionsService } from '../services/ride-options.service';


@Component({
	selector: 'my-destination',
	templateUrl: '/app/user-facing/templates/html/destination.component.html',
	directives: [NgClass]
})
export class DestinationComponent {
	constructor (private _rideOptionsService: RideOptionsService) {};

	destination: string;

	setDestination (event) {

	}
}
