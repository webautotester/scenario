import Action from './Action';

export default class BackAction extends Action {

	attachTo(browser) {
		return browser.back();
	}
}