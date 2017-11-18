'use strict';

/* deviceController.js */
const api = require('tellstick-local-server');
const debug = require('./debug.js');
const CONFIG = require('./config.js');

const Sensor = new api.sensor({ip: CONFIG.TELLSTICK_SERVER_IP, bearerToken: CONFIG.TELLSTICK_APP_TOKEN});

function getTemperatures(callback){

	var tempAir, tempContainer;

	Sensor.info({id: CONFIG.SENSOR_ID_TEMP}, function(err, data) {	

	    if(err) { return callback(err); }

	    // TODO: Kolla även lastUpdated och larma om den har fastnat.

	    data.data.forEach(function(reading) {
        	if (reading['name'] === 'temp') {
        		tempAir = reading['value'];

        		Sensor.info({id: CONFIG.SENSOR_ID_TEMP_CONTAINER}, function(err, data) {	

        		    if(err) { return callback(err); }

				    // TODO: Kolla även lastUpdated och larma om den har fastnat.

					data.data.forEach(function(reading) {
			        	if (reading['name'] === 'temp') {
			        		tempContainer = reading['value'];
			        		callback(null, [tempAir, tempContainer]);
			        	}               
			   		});			   		
				});
        	}               
   		});
	});

/*
	// tidigt devtest för att läsa temp från en fil i istället för sensors.. Sparar ett tag.
	var tmp = require('./tmp.json');
	currentTemp = tmp.temp1;
	currentTempContainer = tmp.temp2;
	delete require.cache[require.resolve('./tmp.json')];
	callback();
*/
}

module.exports = {
	
	getTemperatures: getTemperatures

};
