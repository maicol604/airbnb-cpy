import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { defaultMarker } from "./defaultMarker";
import { popupContent, popupHead, popupText, okText } from "./popupStyles";
import Item from '../../Components/Item';
import { useNavigate } from "react-router-dom";


const center = [40.4166, -3.7025];

const Map2 = () => {
  const navigate = useNavigate();

  const onRedirect = (e) => {
    window.location.href="/item";
  }

  return (
    <Map style={{ width: "100%", height: "100vh", zIndex:'1' }} center={center} zoom={13}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={center} icon={defaultMarker} alt='hello'>
        <Popup className="request-popup">
          <div style={popupContent}>
            <div style={{width:'10vw'}}>
              <Item
                score={'Nueva'}
                counter={100}
                title={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
                price={'Desde 200 €'}
                priceBy={'Por persona'}
                liked={false}
                to={'/item'}
                onClick={onRedirect}
              />
            </div>
          </div>
        </Popup>
      </Marker>
    </Map>
  );
};

export default Map2;
