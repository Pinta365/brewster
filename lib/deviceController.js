'use strict';

/* deviceController.js */
const api = require('tellstick-local-server');
const CONFIG = require('./config.js');
const debug = require('./debug.js');

const Device = new api.device({ip: CONFIG.TELLSTICK_SERVER_IP, bearerToken: CONFIG.TELLSTICK_APP_TOKEN});

function startDevice(deviceId){
	Device.turnOn({id: CONFIG.DEVICE_ID_COOL}, function(err, data){
	    if(err){
	        return console.log(err);
	    }	    
	    debug.log(4, 'Startade: ' + deviceId);
	});
}

function stopDevice(deviceId){
	Device.turnOff({id: CONFIG.DEVICE_ID_COOL}, function(err, data){
	    if(err){
	        return console.log(err);
	    }
	    debug.log(4, 'Stoppade: ' + deviceId);
	});
}

function cool(){
	startDevice(CONFIG.DEVICE_ID_COOL);
	stopDevice(CONFIG.DEVICE_ID_HEAT);
}

function heat(){
	startDevice(CONFIG.DEVICE_ID_HEAT);
	stopDevice(CONFIG.DEVICE_ID_COOL);
}

function idle(){
	stopDevice(CONFIG.DEVICE_ID_HEAT);
	stopDevice(CONFIG.DEVICE_ID_COOL);
}

module.exports = {

	cool: cool,
	heat, heat,
	idle, idle
	
};
