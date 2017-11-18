'use strict';

const CONFIG = require('./config.js');

module.exports = {

  log: function(level, text) {
		if (level >= CONFIG.DEBUG_LEVEL)
			return console.log(text);
		return;	
	}
};
