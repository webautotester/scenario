import Action from './Action';

export default class SelectorAction extends Action {
	constructor(selector) {
		super();
		this.selector = selector;
	}

	toString() {
		return `${super.toString()}: ${this.selector}`;
	}

	equalsTo(action) {
		return (super.equalsTo(action) && (this.selector === action.selector));
	}
}
