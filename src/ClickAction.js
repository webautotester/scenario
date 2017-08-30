import SelectorAction from './SelectorAction';

export default class ClickAction extends SelectorAction {
	attachTo(promise) {
		return promise.click(this.selector);
	}
}
