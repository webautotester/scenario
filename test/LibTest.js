
const lib = require('../lib');
const assert = require('assert');
const Nightmare = require('nightmare');	

const scenario = new lib.Scenario();
const gotoAction = new lib.GotoAction('https://duckduckgo.com');
const typeAction = new lib.TypeAction('#search_form_input_homepage', 'github nightmare');
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
	describe('simple actions', function() {
		it('should go to duckduckgo', function(done) {
			var nightmare = new Nightmare({show:false});
			gotoAction.attachTo(nightmare)
				.evaluate(function () {
					return document;
				})
				.end()
				.then((href) => {
					assert(true);
					done();
				})
				.catch ( (e) => {
					assert(false);
					done();
				});
		});
        

		it('should go to duckduckgo and click', function(done) {
			var nightmare = new Nightmare({show:false});
			clickAction.attachTo(gotoAction.attachTo(nightmare))
				.evaluate(function () {
					return document;
				})
				.end()
				.then((href) => {
					assert(true);
					done();
				})
				.catch ( (e) => {
					assert(false);
					done();
				});
		});
        

		it('should go to duckduckgo, click and type', function(done) {
			var nightmare = new Nightmare({show:false});
			typeAction.attachTo(clickAction.attachTo(gotoAction.attachTo(nightmare)))
				.evaluate(function () {
					return document;
				})
				.end()
				.then((href) => {
					assert(true);
					done();
				})
				.catch ( (e) => {
					assert(false);
					done();
				});
		});
	});
    

	describe('running scenario', function() {
		it('should play the scenario', function(done) {
			var nightmare = new Nightmare({show:false});
			scenario.attachTo(nightmare)
				.evaluate(function () {
					return document;
				})
				.end()
				.then((href) => {
					assert(true);
					done();
				})
				.catch ( (e) => {
					assert(false);
					done();
				});
		});
	});
});