
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


describe('Create Actions and Scenario', function () {
	describe('new action', function() {
		it ('should create new actions by using new()', function() {
			var gta = new lib.GotoAction('https://duckduckgo.com');
			assert(gta.url === 'https://duckduckgo.com');
			assert(gta.type === 'GotoAction');

			var ca = new lib.ClickAction('#search_button_homepage');
			assert(ca.selector === '#search_button_homepage');
			assert(ca.type === 'ClickAction');
		});
	});

	describe('factory', function() {
		it ('should create new actions by using the factory', function() {
			var gta = lib.ActionFactory.createAction({type:'GotoAction', url:'https://duckduckgo.com'});
			assert(gta.url === 'https://duckduckgo.com');
			assert(gta.type === 'GotoAction');

			var ca = lib.ActionFactory.createAction({type:'ClickAction',selector:'#search_button_homepage'});
			assert(ca.selector === '#search_button_homepage');
			assert(ca.type === 'ClickAction');
		});
	});
});


describe('Save and Load Scenario', function () {
	it ('should save a scenario and load it', function() {
		var json = scenario.toJSON();
		var scenar = new lib.Scenario(JSON.parse(json));
		assert(scenar.equalsTo(scenario));
		

	});
});


describe('Execute Actions', function () {
	this.timeout(40000);
	describe('Run Scenario', function() {
		it('should run the scenario with chrome', async function() {
			var nightmare = new Nightmare({show:true});
			try {
				await scenario.nightmareRun(nightmare);
				nightmare.end().then(()=>{
					console.log('ok');
				}).catch(err => {
					console.log(err);
					done();
				})
				
			} catch(err) {
				console.log(err);
			}
		});
	});
});