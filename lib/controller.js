'use strict';

/* controller.js */
const api = require('tellstick-local-server');
const deviceController = require('./deviceController.js');
const temperatureController = require('./temperatureController.js');
const debug = require('./debug.js');
const CONFIG = require('./config.js');


function tick(){

	temperatureController.getTemperatures(function(err, temps) {

		var tempAir = temps[0],
			tempContainer = temps[1];

		// Tanken är att jag ska kunna dra på mer/mindre effekt beroende på om det är lufttemp eller behållartemp som triggar.

		if ((tempContainer >= CONFIG.TEMP_LOWER_TRESHOLD_CONTAINER) && (tempContainer <= CONFIG.TEMP_UPPER_TRESHOLD_CONTAINER)) {
		// Vätskan är fortfarande ok men vi kan ju ligga steget före och kika lufttemp och eventuellt börja justera.
			debug.log(0, 'Behållaren inom gränsvärdena, kolla luften.');

			if (((tempAir >= CONFIG.TEMP_LOWER_TRESHOLD_AIR) && (tempAir <= CONFIG.TEMP_UPPER_TRESHOLD_AIR))) {
				//Även luften är ok! Chilla
				debug.log(0, 'Luften inom gränsvärdena, idle.');
				deviceController.idle();

			} else {
				//Fel temp på luften								
				if ((tempAir < CONFIG.TEMP_LOWER_TRESHOLD_AIR)) {
					//För kallt i luften
					debug.log(0, 'Luften är för kall!');
					deviceController.heat();
					
				} else {
					//För varmt i luften
					debug.log(0, 'Luften är för varm!');
					deviceController.cool();
					
				}
			}
		} else {
			
			if (tempContainer < CONFIG.TEMP_GOAL_CONTAINER) {
				//Panik, För kallt i vätskan!!
				debug.log(0, 'Behållaren är för kall!');
				deviceController.heat();

			} else {
				//Panik, För varmt i vätskan!!
				debug.log(0, 'Behållaren är för varm!');
				deviceController.cool();
				
			}
		}
	});
}


module.exports = {

	tick: tick

};
