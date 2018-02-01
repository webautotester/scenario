import SelectorAction from './SelectorAction';

export default class MouseDownAction extends SelectorAction {
	nightmareRun(nightmare) {
		return nightmare.mousedown(this.selector);
	}

	chromelessRun(chromeless) {
		return chromeless.mousedown(this.selector);
	}
	
}