
const lib = require('../lib');
const assert = require('assert');
const { Chromeless } = require('chromeless');

const scenario = new lib.Scenario();
const gotoAction = new lib.GotoAction('https://duckduckgo.com');
let selector = '#pg-index > div > div.badge-link.badge-link--top.badge-link--fadein.ddg-extension-hide.js-badge-link > div.badge-link__wrap.js-badge-main-msg > span';
const closePopup = new lib.ClickAction(selector);
const typeAction = new lib.TypeAction('#search_form_input_homepage','github chromeless');
const clickAction = new lib.ClickAction('#search_button_homepage');
const waitAction = new lib.WaitAction('#r1-0 a.result__a');
scenario.addAction(gotoAction);
scenario.addAction(closePopup);
scenario.addAction(typeAction);
scenario.addAction(clickAction);
scenario.addAction(waitAction);

describe('Execute Actions', function () {
	this.timeout(40000);
	describe('Run Scenario', function() {
		it('should run the scenario with chrome', async function() {
			let chromeless = new Chromeless();
			let run = await scenario.run(chromeless, 'CHROMELESS' );
            console.log(JSON.stringify(run));
            await chromeless.end();
			assert(run.success);
		});
	});
});