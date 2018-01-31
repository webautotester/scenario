import SelectorAction from './SelectorAction';

export default class MouseUpAction extends SelectorAction {
	attachTo(browser) {
		return browser.mouseup(this.selector);
	}

	nightmareRun(nightmare) {
		return nightmare.mouseup(this.selector);
	}

	chromelessRun(chromeless) {
		return chromeless.mouseup(this.selector);
	}

}