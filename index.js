import React, { Component } from 'react';
import { render } from 'react-dom';
import Maps from './maps'
import './style.css';

class App extends Component {
  constructor() {
    super();
  setTimeout(()=>{
    console.log("loaded")
      var map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: -34.397, lng: 150.644},
  zoom: 8
});
  },500)
   
    
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div id="map"/>
       

    );
  }
}

render(<App />, document.getElementById('root'));
