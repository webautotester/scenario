import Action from './Action';

export default class GotoAction extends Action {
	constructor(url, header) {
		super();
		this.url = url;
		this.header = header || {'User-Agent':'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:40.0) Gecko/20100101 Firefox/40.1'};
	}

	nightmareRun(nightmare) {
		return nightmare.goto(this.url, this.header);
	}

	chromelessRun(chromeless) {
		return chromeless.goto(this.url).html();
	}

	toString() {
		return `${super.toString()}: ${this.url}`;
	}

	equalsTo(action) {
		return (super.equalsTo(action) && (this.url === action.url));
	}
}