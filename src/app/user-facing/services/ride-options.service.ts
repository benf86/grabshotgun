import { Injectable } from 'angular2/core';

interface RideOptions {
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
	options: RideOptions = {
		role: null,
		origin: null,
		originGPS: null,
		destination: null,
		destinationGPS: null,
		description: null,
		cost: null
	}

	set (property: string, role: string): RideOptions {
		this.options[property] = role;
		return this.options;
	}

	get (property: string): any {
		if (property) {
			return this.options[property];
		}
		return this.options;
	}
}
