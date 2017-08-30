import * as ActionFactory from './ActionFactory';

export default class Scenario {

	constructor(actionsJSON) {
		this.actions = [];
		this.index = undefined;
		if (actionsJSON) {
			actionsJSON.forEach(ac => {
				this.addAction(ActionFactory.createAction(ac));
			});
		}
	}

    

	toString() {
		return `[${this.actions.join(', ')}]`;
	}

	addAction(action) {
		if (this.index === undefined) {
			this.index = 0;
		}
		if (this.index === 0) {
			this.actions.push(action);
		}

	}

	get level() {
		return this.actions.length;
	}

	hasNext() {
		if (this.index === undefined) {
			return false;
		} else {
			return this.index < this.actions.length;
		}

	}

	next() {
		return this.actions[this.index++];
	}

	duplicate() {
		var dupication = new Scenario();
		this.actions.forEach(ac => dupication.addAction(ac));
		return dupication;
	}

	equalsTo(scenario) {
		if (this.actions.length === scenario.actions.length) {
			for (var i = 0; i < this.actions.length; i++) {
				if (! this.actions[i].equalsTo(scenario.actions[i])) {
					return false;
				}
			}
			return true;
		} else {
			return false;
		}
	}
}