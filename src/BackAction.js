import Action from './Action';

export default class BackAction extends Action {
	nightmareRun(nightmare) {
		return nightmare.back();
	}
}