import SelectorAction from './SelectorAction';

export default class MouseOverAction extends SelectorAction {
	attachTo(promise) {
		return promise.mouseover(this.selector);
	}
}