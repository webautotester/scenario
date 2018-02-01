import Action from './Action';

export default class ScrollToAction extends Action {
	constructor(x, y) {
		super();
		this.x = x;
		this.y = y;
	}

	nightmareRun(nightmare) {
		return nightmare.scrollTo(this.x, this.y);
	}

	chromelessRun(chromeless) {
		return chromeless.scrollToElement(this.selector);
	}

	toString() {
		return `${super.toString()}: ${this.x}, ${this.y}`;
	}

	equalsTo(action) {
		return (super.equalsTo(action) && (this.x === action.x) && (this.y === action.y));
	}
}