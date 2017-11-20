import SelectorAction from './SelectorAction';

export default class MouseUpAction extends SelectorAction {
	attachTo(browser) {
		return browser.mouseup(this.selector);
	}
}