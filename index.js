'use strict';

const controller = require('./lib/controller.js');
const debug = require('./lib/debug.js');
const CONFIG = require('./lib/config.js');

var running = true;

/* Main loop */
function main() {

	if(!running) {
		return;
	}
	
	controller.tick();	
}

/* Some basic initialization before starting the main loop... probably */
function init() {

	if(running) {
		main();
	}

	setInterval(main, CONFIG.TICK_INTERVAL);	
}

init();
