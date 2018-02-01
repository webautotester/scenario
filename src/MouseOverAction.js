import SelectorAction from './SelectorAction';

export default class MouseOverAction extends SelectorAction {
	nightmareRun(nightmare) {
		return nightmare.mouseover(this.selector);
	}
}