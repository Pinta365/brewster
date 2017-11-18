'use strict';

/* Exports a set of global constants usable throughout the application */

const CONFIG = {  
	TICK_INTERVAL: 60000, /* Millisekunder mellan körningar */
	DEBUG_LEVEL: 	 0, /* 0=full log 5=prod-ish logs*/
  
	/* Olika nivåer av åtgärd, low kanske man bara stänger av värme/kyla medans high kanske man stänger av kyla och slår på dubbel värme eller liknande */
	LOW: 	0,
	MEDIUM: 1,
	HIGH: 	2,

	/* SensorId'n för termometrarna */
	SENSOR_ID_TEMP: 14,
	SENSOR_ID_TEMP_CONTAINER: 15,

	/* DeviceId'n för värme/kyla */
	DEVICE_ID_COOL: 13,
	DEVICE_ID_HEAT: 12,

	TEMP_GOAL_AIR: 				20, /* Måltemperatur luft */
	TEMP_LOWER_TRESHOLD_AIR: 	19, /* Undre gränsvärde luft */
	TEMP_UPPER_TRESHOLD_AIR: 	21, /* Övre gränsvärde luft */

	TEMP_GOAL_CONTAINER: 			20, /* Måltemperatur på vätskan */
	TEMP_LOWER_TRESHOLD_CONTAINER: 	19.5, /* Undre gränsvärde där ingen åtgärd krävs */
	TEMP_UPPER_TRESHOLD_CONTAINER: 	20.5, /* Övre gränsvärde där ingen åtgärd krävs */

	TELLSTICK_SERVER_IP: '192.168.1.1',
	TELLSTICK_APP_TOKEN: '<insert your application bearertoken here>'
};

module.exports = CONFIG;
