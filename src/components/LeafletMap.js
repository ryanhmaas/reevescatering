import React, { useRef, useEffect } from "react"
import { Map, Marker, Popup, TileLayer } from "react-leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

const LeafletMap = props => {
  const mapRef = useRef("mapref")
  const { lat, long } = props
  const position = [34.8828485, -82.3527332]

  useEffect(() => {
    delete L.Icon.Default.prototype._getIconUrl

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
      iconUrl: require("leaflet/dist/images/marker-icon.png"),
      shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
    })

    mapRef.current.leafletElement.invalidateSize()
  }, [])

  if (typeof window !== "undefined") {
    return (
      <Map
        center={position}
        zoom={13}
        maxZoom={16}
        ref={mapRef}
        scrollWheelZoom={true}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            <p>Reeves Catering</p>
            <p>40 Rushmore Drive</p>
            <p>Greenville SC 29615</p>
          </Popup>
        </Marker>
      </Map>
    )
  }
  return null
}

export default LeafletMap