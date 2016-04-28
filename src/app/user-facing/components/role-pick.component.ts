import { Component } from 'angular2/core';
import { NgClass } from 'angular2/common';


@Component({
	selector: 'role-pick',
	templateUrl: '../app/user-facing/templates/html/role-pick.component.html'
})
export class RolePick {
	driver = {
		cardState: 'maximized'
	};
	shotgun = {
		cardState: 'maximized'
	};

	toggleMaximized (cardName: string) {
		console.log(this[cardName].cardState);
		this[cardName].cardState = this[cardName].cardState === 'maximized' ? 'minimized' : 'maximized';
	}
}