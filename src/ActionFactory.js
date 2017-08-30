import GotoAction from './GotoAction';
import ClickAction from './ClickAction';
import CheckAction from './CheckAction';
import MouseOverAction from './MouseOverAction';
import TypeAction from './TypeAction';
import ScrollToAction from './ScrollToAction';
import WaitAction from './WaitAction';
import BackAction from './BackAction';

export function createAction(actionJSON) {
	switch (actionJSON.type) {
	case 'GotoAction':
		return new GotoAction(actionJSON.url);
	case 'ClickAction':
		return new ClickAction(actionJSON.selector);
	case 'CheckAction':
		return new CheckAction(actionJSON.selector);
	case 'MouseOverAction':
		return new MouseOverAction(actionJSON.selector);
	case 'TypeAction':
		return new TypeAction(actionJSON.selector, actionJSON.text);
	case 'ScrollToAction':
		return new ScrollToAction(actionJSON.x, actionJSON.x);
	case 'WaitAction':
		return new WaitAction(actionJSON.ms);
	case 'BackAction':
		return new BackAction();
	}
	return new WaitAction(1000);
}