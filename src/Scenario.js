import * as ActionFactory from './ActionFactory';
import WaitAction from './WaitAction.js';

export default class Scenario {

	constructor(actionsJSON) {
		this.actions = [];
		if (actionsJSON) {
			actionsJSON.forEach(ac => {
				this.addAction(ActionFactory.createAction(ac));
			});
		}
	}

	toString() {
		return `[${this.actions.join(', ')}]`;
	}

	toJSON() {
		return JSON.stringify(this.actions);
	}

	addAction(action) {
		this.actions.push(action);
	}

	get depth() {
		return this.actions.length;
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

	attachTo(browser) {
		return attachTo(browser, this.actions);
	}

	async nightmareRun(browser) {
		let i;
		try {
			for (i=0 ; i < this.actions.length; i++) {
				await this.actions[i].nightmareRun(browser);
			}
			return {
				success : true,
				runnedActions : i
			}
		} catch(err) {
			return {
				success : true,
				runnedActions : i,
				error : err
			}
		}
	}
}

function attachTo(nightmare, actions) {
	if (actions.length === 0) return nightmare;
	else {
		const currentAction = actions.shift();
		return attachTo(currentAction.attachTo(nightmare) , actions);
	}
}
