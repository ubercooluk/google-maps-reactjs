import React from "react";
import { Marker } from "react-google-maps";
import ship from "./assets/ship.png";

export default class DataMarker extends React.Component {
clickFun() {
  alert("You clicked a marker => "+this.props.places.place);
}
  render(){
    return(
        <Marker
        title= {this.props.places.place}
          position={this.props.location}
          icon={{url :ship}}
          onClick={() => this.clickFun()}
        >

        </Marker>
    );
  }
}
