import Action from './Action';

export default class TypeAction extends Action {
	constructor(selector, text) {
		super();
		this.selector = selector;
		this.text = text;
	}

	nightmareRun(nightmare) {
		return nightmare.type(this.selector, this.text);
	}

	chromelessRun(chromeless) {
		return chromeless.type(this.text, this.selector).html();
	}

	toString() {
		return `${super.toString()}: ${this.selector}, ${this.text}`;
	}

	equalsTo(action) {
		return (super.equalsTo(action) && (this.selector === action.selector) && (this.text === action.text));
	}
}