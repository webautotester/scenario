import Action from './Action';

export default class WaitAction extends Action {
	constructor(ms) {
		super();
		this.ms = ms;
	}

	nightmareRun(nightmare) {
		return nightmare.wait(this.ms);
	}

	chromelessRun(chromeless) {
		return chromeless.wait(this.ms).html();
	}

	toString() {
		return `${super.toString()}: ${this.ms}ms`;
	}

	equalsTo(action) {
		return (super.equalsTo(action) && (this.ms === action.ms));
	}
}
