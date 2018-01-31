import Action from './Action';

export default class BackAction extends Action {

	attachTo(browser) {
		return browser.back();
	}

	nightmareRun(nightmare) {
		return nightmare.back();
	}

	chromelessRun(chromeless) {
		//not implemented yet by chromeless
		return chromeless;
	}

}