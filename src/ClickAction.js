import SelectorAction from './SelectorAction';

export default class ClickAction extends SelectorAction {
	attachTo(nightmare) {
		return nightmare.click(this.selector);
	}
}
