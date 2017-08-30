import SelectorAction from './SelectorAction';

export default class CheckAction extends SelectorAction {
	attachTo(promise) {
		return promise.check(this.selector);
	}
}