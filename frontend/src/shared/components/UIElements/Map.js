import { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';

import './Map.css';

const Map = props => {
  mapboxgl.accessToken = 'pk.eyJ1IjoicGV0ZXJtZWdvIiwiYSI6ImNsYjllcGppMjB1Z2UzdWxqMWdkeG8xcHcifQ._UNWUP3qN2D7DBvnM1shig';
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(props.center.lng);
  const [lat, setLat] = useState(props.center.lat);
  const [zoom, setZoom] = useState(props.zoom);

  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom
    });
  }, [zoom, lat, lng]);

  useEffect(() => {
    if (!map.current) return;
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  }, [zoom, lat, lng]);
  
  return <div id="map" className={`map ${props.className}`} ref={mapContainer} style={props.style}>

  </div>
};
 
export default Map;