
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


describe('Execute Actions', function () {
	this.timeout(40000);    
	describe('simple actions', function() {
		it('it should go to duckduckgo', function(done) {
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
        

		it('it should go to duckduckgo and click', function(done) {
			var nightmare = new Nightmare({show:true});
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
        

		it('it should go to duckduckgo, click and type', function(done) {
			var nightmare = new Nightmare({show:true});
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
    

	describe('scenario', function() {
		it('it should play the scenario', function(done) {
			var nightmare = new Nightmare({show:true});
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