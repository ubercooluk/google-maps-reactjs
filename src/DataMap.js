import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import DataMarker from "./DataMarker";

const DataMap = withScriptjs(withGoogleMap((props) =>{

  const markers = props.places.map( p => <DataMarker
                    key={p.id}
                    places={p}
                    location={{lat: p.location.lat, lng: p.location.lng}}

                  />);


  return (
      <GoogleMap
        defaultZoom={14}
        center={ { lat:  8.558312, lng: 76.883000 } }
        >
        {markers}
      </GoogleMap>
    );
  }
))
export default DataMap;
