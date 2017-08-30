import Action from './Action';

export default class GotoAction extends Action {
	constructor(url) {
		super();
		this.url = url;
	}

	attachTo(nightmare) {
		return nightmare.goto(this.url);
	}

	toString() {
		return `${super.toString()}: ${this.url}`;
	}

	equalsTo(action) {
		return (super.equalsTo(action) && (this.url === action.url));
	}
}