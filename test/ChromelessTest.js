
/*Copyright (c) 2017-2018 Xavier Blanc <blancxav@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.*/

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