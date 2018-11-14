import React from "react";
import DataMap from "./DataMap";

export default class Main extends React.Component {
constructor() {
  super();
  this.state = {
    places : [
      {
        id :1,
        place:"Unnikrishnan's home - Ruby balagokulam Apartments",
        location:{lat: 8.544840, lng: 76.888910}
      },
      {
        id :2,
        place:"Technopark",
        location:{lat: 8.558939, lng: 76.881065}
      },
      {
        id :3,
        place:"Kowdiar palace",
        location:{lat: 8.524268, lng: 76.963380}
      }
  ]
  }
}
	render() {
		return (
  		<DataMap
				places={this.state.places}
				googleMapURL={`https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE&v=3.exp&libraries=geometry,drawing,places`}
				loadingElement={<div style={{ height: `100%` }} />}
				containerElement={<div style={{ height: `480px`, width: `640px` ,border:`2px solid #e3e3e3`}} />}
				mapElement={<div style={{ height: `100%` }} />}
			/>
		);
	}
}
