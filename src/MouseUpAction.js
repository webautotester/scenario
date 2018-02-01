import SelectorAction from './SelectorAction';

export default class MouseUpAction extends SelectorAction {
	nightmareRun(nightmare) {
		return nightmare.mouseup(this.selector);
	}

	chromelessRun(chromeless) {
		return chromeless.mouseup(this.selector);
	}

}