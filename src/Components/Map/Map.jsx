import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    <>
      <h1>Map</h1>
      <div style={{ height: "750px", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBU9XgUKEUUkzj9XyHbQCyRv3sODSt4Yx8" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom} 
          margin = {[50,50,50,50]}
          options={''}
          onChange={''}
          onChildClick={''}
        >
          <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
        </GoogleMapReact>
      </div>
    </>
  );
};

export default Map;
