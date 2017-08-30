import SelectorAction from './SelectorAction';

export default class CheckAction extends SelectorAction {
	attachTo(nightmare) {
		return nightmare.check(this.selector);
	}
}