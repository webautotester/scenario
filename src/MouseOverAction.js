import SelectorAction from './SelectorAction';

export default class MouseOverAction extends SelectorAction {
	attachTo(nightmare) {
		return nightmare.mouseover(this.selector);
	}
}