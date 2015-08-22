import React, { Component } from 'react';
const MapboxMap = require('./MapboxMap');
const SideBar = require('./SideBar')
const rStore = require('./reduxStore')

//If setting up store + actions fail -> move all code to this file....

export default class App extends Component {
  render() {
  	const store = rStore.getState()
  	var latitude = store.latitude
  	var longitude = store.longitude

  	const headerStyle = {
  		'text-align': 'center'
  	}

    return (
    	<div>
    		<h1 style={headerStyle}>Fates of Food:</h1>
      	{/*<SideBar
      		latitude={latitude}
      		longitude={longitude}/>*/}
      	<MapboxMap
          mapId="mapbox.outdoors"
          zoomControl={false}
          center={[latitude, longitude]} 
          latitude={latitude}
      		longitude={longitude}
          zoom={11}/>
      </div>
    );
  }
}