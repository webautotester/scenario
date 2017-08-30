import Action from './Action';

export default class ScrollToAction extends Action {
	constructor(x, y) {
		super();
		this.x = x;
		this.y = y;
	}

	attachTo(promise) {
		return promise.scrollTo(this.x, this.y);
	}

	toString() {
		return `${super.toString()}: ${this.x}, ${this.y}`;
	}

	equalsTo(action) {
		return (super.equalsTo(action) && (this.x === action.x) && (this.y === action.y));
	}
}