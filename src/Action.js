import BrowserKind from './BrowserKind';

export default class Action {
	constructor() {
		this.type = this.constructor.name;
	}

	toString() {
		return `${this.constructor.name}`;
	}

	equalsTo(action) {
		return this.type === action.type;
	}

	nightmareRun(nightmare) {
		return nightmare;
	}

	chromelessRun(chromeless) {
		return chromeless;
	}

	run(browser, browserKind) {
		switch (browserKind) {
		case BrowserKind.NIGHTMARE:
			return this.nightmareRun(browser);
		case BrowserKind.CHROMELESS:
			return this.chromelessRun(browser);
		}
	}
}