import Action from './Action';

export default class BackAction extends Action {

	attachTo(promise) {
		return promise.back();
	}
}