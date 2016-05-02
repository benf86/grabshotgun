import { Injectable } from 'angular2/core';

interface RideOptionsInterface {
	role?: string;
	origin?: string;
	originGPS?: string;
	destination?: string;
	destinationGPS?: string;
	description?: string;
	cost?: number;
}

@Injectable()
export class RideOptionsService {
	options: RideOptionsInterface = {
		role: null,
		origin: null,
		originGPS: null,
		destination: null,
		destinationGPS: null,
		description: null,
		cost: null
	}

	set (property: string, role: string): RideOptionsInterface {
		this.options[property] = role;
		return this.options;
	}

	get (property: string): any {
		if (property) {
			return this.options[property];
		}
		return this.options;
	}

	toJSON (): string {
		return JSON.stringify(this.options);
	}

	fromJSON (rideOptionsJSON: string): RideOptionsInterface {
		return JSON.parse(rideOptionsJSON);
	}
}
