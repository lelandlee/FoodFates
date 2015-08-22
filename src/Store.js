"use strict";

var flux = require('flux-react');
var actions = require('./actions.js');

const Store = flux.createStore({
  latitude: 33.4897379,
  longitude: -112.0716401,

  actions: [
  	actions.setLatitude,
  	actions.setLongitude
  ],

  setLatitude(latitude) {
    this.latitude = latitude;
    this.emitChange();
  },
  setLongitude({longitude}) {
    this.longitude = longitude;
    this.emitChange();
  },

  exports: {
  	getLatitude() {
  		return this.latitude
  	},
  	getLongitude() {
  		return this.longitude
  	}
  }
});

module.exports = Store;