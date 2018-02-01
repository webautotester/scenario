[![Build Status](https://travis-ci.org/webautotester/scenario.svg?branch=master)](https://travis-ci.org/webautotester/scenario)

JS Library For Playing With Scraping Scenario (Compliant with NightMareJS and Chromeless)
=========================================================================================

Very simple library to create Scraping actions and scenario.

Then Scenario can be played by [NightmareJS](https://github.com/segmentio/nightmare) or [Chromeless](https://github.com/graphcool/chromeless)


Install
-------

if you want to use it:

    clone https://github.com/webautotester/scenario.git
    npm install
    npm test




Action
------

The wat-action library defines a JavaScript class for NightmareJS action (Goto, Type, Click, Wait, Back, ScrollTo, Check).

    const wat_action = require('wat-action');
    const gotoAction = new wat_action.GotoAction('https://duckduckgo.com');
    const typeAction = new wat_action.TypeAction('#search_form_input_homepage', 'github nightmare');
    const clickAction = new wat_action.ClickAction('#search_button_homepage');
    const waitAction = new wat_action.WaitAction('#r1-0 a.result__a');


Scenario
--------

You can also create a scenario by adding actions to it.

    const scenario = new wat_action.Scenario();
    scenario.addAction(gotoAction);
    scenario.addAction(typeAction);
    scenario.addAction(clickAction);
    scenario.addAction(waitAction);


Run Nightmare 
------------

You can attach action to Nightmare

    const Nightmare = require('nightmare');	
    const nightmare = new Nightmare({show:true});
    let run = await scenario.run(nightmare, 'NIGHTMARE');
	console.log(JSON.stringify(run));

Run Chromeless 
------------

You can attach action to Nightmare

    const {Chromeless} = require('chromeless');	
    const chromeless = new Chromeless();
    let run = await scenario.run(chromeless, 'CHROMELESS');
	console.log(JSON.stringify(run));

