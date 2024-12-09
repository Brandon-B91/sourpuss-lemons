import React, { useEffect, useRef, useState } from "react";
import { getSrc } from 'gatsby-plugin-image'; 
import { graphql, StaticQuery } from "gatsby";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const mapHeader = {
  fontSize: 'var(--fontMd)',
  color: 'var(--black)',
  textAlign: 'center',
  marginTop: '2rem'
}

const MapboxExample = () => {
  const mapContainerRef = useRef();
  const mapRef = useRef();
  
  const [mapData, setMapData] = useState(null);

  useEffect(() => {
    if (mapData) {
      const { icon, popupData, location } = mapData;
      initializeMap(icon, popupData, location);
    }
  }, [mapData]); 
  const initializeMap = (icon, popupData, location) => {
    mapboxgl.accessToken = "pk.eyJ1IjoiYnJhbmRvbmJyb3duMDE2OSIsImEiOiJjbTIyZW02ZnUwNmJ2MnFvZndvcThncXNsIn0._mMkjvjQfDU6yaKuoVte3g";

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [location.latitude, location.longitude],
      zoom: 13,
    });

    const lemon = getSrc(icon.lemon.gatsbyImage);
    
    var popup = new mapboxgl.Popup({ offset: 25 }).setHTML(`
      <div class="custom-popup">
        <h4>Sourpuss Lemonade</h4>
        <p>${popupData.bodyText}</p>
      </div>
    `);
  
    const customMarker = document.createElement("div");
    customMarker.className = "custom-marker"; 
    customMarker.style.backgroundImage = `url(${lemon})`; 
    customMarker.style.backgroundSize = 'cover'; 
    customMarker.style.backgroundRepeat = 'no-repeat'; 

    var marker = new mapboxgl.Marker(customMarker)
      .setLngLat([location.latitude, location.longitude])
      .setPopup(popup) // Attach the popup to the marker
      .addTo(mapRef.current);
  
  };

  return (
    <StaticQuery
      query={combinedQuery}
      render={(data) => {
        // Extract data from the GraphQL response only once
        const icon = data.allContentfulMapIcon.edges[0].node;
        const popupData = data.allContentfulMapPopUp.edges[0].node;
        const location = data.allContentfulMapLocation.edges[0].node;

        // Only set the state if mapData is not already set
        if (!mapData) {
          setMapData({ icon, popupData, location });
        }

        return (
          <>
          <p style={mapHeader}>Where are we today!</p>
          <div
            ref={mapContainerRef}
            style={{ height: "25rem", margin: "1rem 0", borderRadius: "0.5rem" }}
          ></div>
          </>
        );
      }}
    />
  );
};

export default MapboxExample;

const combinedQuery = graphql`
  query {
    allContentfulMapIcon {
      edges {
        node {
          lemon {
            gatsbyImage(height: 100, width: 100)
          }
        }
      }
    }
    allContentfulMapPopUp {
      edges {
        node {
          bodyText
        }
      }
    }
    allContentfulMapLocation {
      edges {
        node {
          latitude
          longitude
        }
      }
    }
  }
`;
