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

	nightmareRun(nightmare) {
		return nightmare.select(this.selector, this.option);
	}

	chromelessRun(chromeless) {
		//does not exist in chromeless
		return chromeless;
	}
}