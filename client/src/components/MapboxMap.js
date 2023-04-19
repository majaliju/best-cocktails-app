import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import { useState, useRef, useEffect } from 'react';

mapboxgl.accessToken =
  'pk.eyJ1IjoibWFqYWxpanUiLCJhIjoiY2xnbXZ5MjR4MDl3cDNzcWFvN3Nsc3F0aSJ9.eDrOKKxTWcKvQfdCuDIiFA';

function MapboxMap({ user }) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lat, setLat] = useState(40.7125729);
  const [lng, setLng] = useState(-73.943824);
  const [zoom, setZoom] = useState(9);

  console.log('user within MapBox', user);
  console.log('user.latitude: ', user.latitude);
  console.log('user.longitude: ', user.longitude);
  console.log('lat: ', lat);
  console.log('lng: ', lng);

  useEffect(() => {
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      center: [lng, lat],
      zoom: zoom,
    });
  }, []);

  return (
    <div>
      <div ref={mapContainer} className='map-container' />
    </div>
  );
}

export default MapboxMap;
