import Action from './Action';

export default class BackAction extends Action {

	attachTo(nightmare) {
		return nightmare.back();
	}
}