import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet'; // Import Leaflet to create a custom icon
import 'leaflet/dist/leaflet.css';

// Define the blue marker icon
const blueIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png', // Default Leaflet blue pin
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41], // Size of the icon
  iconAnchor: [12, 41], // Point of icon that corresponds to marker's location
  popupAnchor: [1, -34], // Point from which the popup opens
  shadowSize: [41, 41], // Size of the shadow
});

// Component to handle zooming to a marker
const ZoomToMarker = ({ marker, zoomLevel = 15 }) => {
  const map = useMap();

  const handleMarkerClick = () => {
    if (marker && marker.lat && marker.lon) {
      map.setView([marker.lat, marker.lon], zoomLevel, { animate: true });
    }
  };

  return (
    <Marker
      position={[marker.lat, marker.lon]}
      icon={blueIcon} // Use the blue icon
      eventHandlers={{
        click: handleMarkerClick,
      }}
    >
      <Popup>{marker.name}</Popup>
    </Marker>
  );
};

const Map = ({ markers }) => {
  return (
    <MapContainer
      center={[26.508490, 80.229450]}
      zoom={20}
      style={{ height: '100vh', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {markers.map((marker, index) => (
        <ZoomToMarker key={index} marker={marker} />
      ))}
    </MapContainer>
  );
};

export default Map;