import React, { useRef, useEffect, useState } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useWindowSize from '../hooks/use-window-size';

const LeafletMap = (props) => {
	const size = useWindowSize();
	const [mapZoom, setMapZoom] = useState(14);
	const [mapCenter, setMapCenter] = useState([34.8828485, -82.3327332]);

	const mapRef = useRef('mapref');
	const position = [34.8828485, -82.3527332 ];

	useEffect(() => {
		delete L.Icon.Default.prototype._getIconUrl;

		L.Icon.Default.mergeOptions({
			iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
			iconUrl: require('leaflet/dist/images/marker-icon.png'),
			shadowUrl: require('leaflet/dist/images/marker-shadow.png')
		});

		mapRef.current.leafletElement.invalidateSize();
	}, []);

	useEffect(() => {
		if (size?.width < 768) {
			setMapZoom(13);
			setMapCenter([34.890848, -82.3527332]);
		} else{
			setMapZoom(14);
			setMapCenter([34.8828485, -82.3327332 ]);
		}
	}, [size?.width]);

	if (typeof window !== 'undefined') {
		return (
			<Map center={mapCenter} zoom={mapZoom} maxZoom={16} ref={mapRef} scrollWheelZoom={false}>
				<TileLayer
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
				/>
				<Marker position={position}>
					<Popup>
						<p>Reeves Catering</p>
						<p>40 Rushmore Drive</p>
						<p>Greenville SC 29615</p>
					</Popup>
				</Marker>
			</Map>
		);
	}
	return null;
};

export default LeafletMap;
