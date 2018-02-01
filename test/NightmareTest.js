
const lib = require('../lib');
const assert = require('assert');
const Nightmare = require('nightmare');	

const scenario = new lib.Scenario();
const gotoAction = new lib.GotoAction('https://duckduckgo.com');
const typeAction = new lib.TypeAction('#search_form_input_homepage','github nightmare');
const clickAction = new lib.ClickAction('#search_button_homepage');
const waitAction = new lib.WaitAction('#r1-0 a.result__a');
scenario.addAction(gotoAction);
scenario.addAction(typeAction);
scenario.addAction(clickAction);
scenario.addAction(waitAction);

describe('Execute Actions', function () {
	this.timeout(40000);
	describe('Run Scenario', function() {
		it('should run the scenario with Nightmare', async function() {
			let nightmare = new Nightmare({show:true});
			let run = await scenario.run(nightmare, 'NIGHTMARE');
			console.log(JSON.stringify(run));
			assert(run.success);
		});
	});
});