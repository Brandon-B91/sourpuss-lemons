import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MapboxExample = () => {
  const mapContainerRef = useRef();
  const mapRef = useRef();

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYnJhbmRvbmJyb3duMDE2OSIsImEiOiJjbTIyZW02ZnUwNmJ2MnFvZndvcThncXNsIn0._mMkjvjQfDU6yaKuoVte3g';

    mapRef.current = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-106.7114429984042, 35.31153747198219],
      zoom: 15
    });

    var popup = new mapboxgl.Popup({ offset: 25 }).setHTML(`
    <div class="custom-popup">
      <h4>Sourpuss Lemonade</h4>
      <p>Come get a drink!</p>
    </div>
`);
  

      var marker = new mapboxgl.Marker()
      .setLngLat([-106.7114429984042, 35.31153747198219])
      .setPopup(popup) // Attach the popup to the marker
      .addTo(mapRef.current);

      marker.getElement().addEventListener('click', () => {
        popup.toggle(); // This opens the popup on click
      });

    return () => mapRef.current.colorremove();
  }, []);

  return <div id="map" ref={mapContainerRef} style={{ height: '25rem', margin: '1rem 0', borderRadius: '0.5rem' }}></div>;
};

export default MapboxExample;