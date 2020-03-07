import React, { useState, useRef, useEffect } from 'react';
import { Map, TileLayer, Marker } from "react-leaflet";
import 'leaflet/dist/leaflet.css';

const LeafletMap = (props) => {
  const [lat] = useState(props.lat);
  const [long] = useState(props.long);

  const mapRef = useRef('mapref');

  const position = [lat, long];

  useEffect(() => {
    const L = require("leaflet");

    delete L.Icon.Default.prototype._getIconUrl;

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
      iconUrl: require("leaflet/dist/images/marker-icon.png"),
      shadowUrl: require("leaflet/dist/images/marker-shadow.png")
    });
    
    mapRef.current.leafletElement.invalidateSize()
  }, []);

  if (typeof window !== 'undefined') {
    return (
      <Map center={position} zoom={14} ref={mapRef} scrollWheelZoom={false}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position} />
      </Map>
    )
  }

  return null
}

export default LeafletMap;