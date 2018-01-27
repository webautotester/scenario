import Action from './Action';

export default class WaitAction extends Action {
	constructor(ms) {
		super();
		this.ms = ms;
	}

	attachTo(browser) {
		return browser.wait(this.ms);
	}

	nightmareRun(nightmare) {
		return nightmare.wait(this.ms);
	}

	toString() {
		return `${super.toString()}: ${this.ms}ms`;
	}

	equalsTo(action) {
		return (super.equalsTo(action) && (this.ms === action.ms));
	}
}
