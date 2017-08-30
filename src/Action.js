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
}