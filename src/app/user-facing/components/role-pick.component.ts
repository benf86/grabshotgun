import { Component } from 'angular2/core';


@Component({
	selector: 'role-pick',
	templateUrl: '../app/user-facing/templates/html/role-pick.component.html'
})
export class RolePick {
	choices = {
		role: null
	};
	rolePicker = 'maximized';
	
	pickRole (cardName: string) {
		this.rolePicker = this.rolePicker === 'maximized' ? 'minimized' : 'maximized';
		this.choices.role = cardName;
		console.log('You\'re currently ', this.choices.role);
	}
}