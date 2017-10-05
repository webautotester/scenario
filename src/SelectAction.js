import SelectorAction from './SelectorAction';

export default class SelectAction extends SelectorAction {

	constructor(selector, option) {
		super(selector);
		this.option = option;
	}

	toString() {
		return `${super.toString()}: ${this.selector} ${this.option}`;
	}
    
	attachTo(browser) {
		return browser.select(this.selector, this.option);
	}
}