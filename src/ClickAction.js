import SelectorAction from './SelectorAction';

export default class ClickAction extends SelectorAction {
	nightmareRun(nightmare) {
		return nightmare.click(this.selector);
	}

	chromelessRun(chromeless) {
		return chromeless.click(this.selector).html();
	}

}
