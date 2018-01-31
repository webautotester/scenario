import SelectorAction from './SelectorAction';

export default class MouseDownAction extends SelectorAction {
	attachTo(browser) {
		return browser.mousedown(this.selector);
	}

	nightmareRun(nightmare) {
		return nightmare.mousedown(this.selector);
	}

	chromelessRun(chromeless) {
		return chromeless.mousedown(this.selector);
	}


	
}