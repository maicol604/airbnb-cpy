import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { defaultMarker } from "./defaultMarker";
import { popupContent, popupHead, popupText, okText } from "./popupStyles";


const center = [40.4166, -3.7025];

const Map2 = () => {
  return (
    <Map style={{ width: "100%", height: "100vh" }} center={center} zoom={13}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={center} icon={defaultMarker}>
        <Popup className="request-popup">
          <div style={popupContent}>
            {/* <img
              src="https://cdn3.iconfinder.com/data/icons/basicolor-arrows-checks/24/149_check_ok-512.png"
              width="150"
              height="150"
              alt="no img"
            />
            <div className="m-2" style={popupHead}>
              Success!
            </div>
            <span style={popupText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </span>
            <div className="m-2" style={okText}>
              Okay
            </div> */}
          </div>
        </Popup>
      </Marker>
    </Map>
  );
};

export default Map2;
