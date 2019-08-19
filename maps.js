

import React, { Component } from 'react';
import { render } from 'react-dom';

import './style.css';
var map
class Maps extends Component {
  constructor() {
    super();

  }
  componentDidMount(){
    navigator.geolocation.getCurrentPosition(showPosition);
    function showPosition(position) {
 let lat = position.coords.latitude ;
 let lng = position.coords.longitude; 
}
      var map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat, lng},
      zoom: 8
    });

  }

  render() {
   
    return (
      <div id="maps">
      
      </div>
    );
  }
}

export default Maps;


