import React, { useEffect, useRef, useState } from "react";
import { getSrc } from 'gatsby-plugin-image'; 
import { graphql, StaticQuery } from "gatsby";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const MapboxExample = () => {
  const mapContainerRef = useRef();
  const mapRef = useRef();
  
  const [mapData, setMapData] = useState(null);

  useEffect(() => {
    if (mapData) {
      const { icon, popupData, lat, long } = mapData;
      initializeMap(icon, popupData, lat, long);
    }
  }, [mapData]); 
  const initializeMap = (icon, popupData, lat, long) => {
    mapboxgl.accessToken = "pk.eyJ1IjoiYnJhbmRvbmJyb3duMDE2OSIsImEiOiJjbTIyZW02ZnUwNmJ2MnFvZndvcThncXNsIn0._mMkjvjQfDU6yaKuoVte3g";

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [long, lat],
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
      .setLngLat([long,lat])
      .setPopup(popup) // Attach the popup to the marker
      .addTo(mapRef.current);
  
  };

  const today = new Date();
  const dayIndex = today.getDay(); // Returns a number from 0 (Sunday) to 6 (Saturday)
  
  const daysOfWeek = ['sundayLocation', 'mondayLocation', 'tuesdayLocation', 'wednesdayLocation', 'thursdayLocation', 'fridayLocation', 'saturdayLocation'];
  const dayName = daysOfWeek[dayIndex];

  console.log(dayName)

  return (
    <StaticQuery
      query={combinedQuery}
      render={(data) => {
        // Extract data from the GraphQL response only once
        const icon = data.allContentfulMapIcon.edges[0].node;
        const popupData = data.allContentfulMapPopUp.edges[0].node;
        const location = data.allContentfulSchedule.edges[0].node[dayName];
        console.log(location)
        const [lat, long] = location.split(',');
        console.log(lat,long)
        // Only set the state if mapData is not already set
        if (!mapData) {
          setMapData({ icon, popupData, lat, long });
        }

        return (
          <>
          <div
            ref={mapContainerRef}
            style={{ height: "25rem", width: '100%', margin: "1rem 0", borderRadius: "0.5rem" }}
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
            gatsbyImage(height: 250, width: 250)
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
    allContentfulSchedule {
      edges {
        node{
          mondayLocation
          tuesdayLocation
          wednesdayLocation
          thursdayLocation
          fridayLocation
          saturdayLocation
          sundayLocation
        }
      }
    }
  }
`;


const DayBasedComponent = () => {
  const [dayName, setDayName] = useState('');

  const updateDay = () => {
    const daysOfWeek = [
      'sundayLocation',
      'mondayLocation',
      'tuesdayLocation',
      'wednesdayLocation',
      'thursdayLocation',
      'fridayLocation',
      'saturdayLocation',
    ];
    const today = new Date();
    const dayIndex = today.getDay();
    setDayName(daysOfWeek[dayIndex]);
  };

  const calculateTimeUntilMidnight = () => {
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setHours(24, 0, 0, 0); // Set to midnight
    return tomorrow - now; // Milliseconds until midnight
  };

  useEffect(() => {
    updateDay(); // Set the day immediately

    const timeoutId = setTimeout(() => {
      updateDay(); // Update at midnight
      // Schedule the next update
      setInterval(updateDay, 86400000); // Every 24 hours
    }, calculateTimeUntilMidnight());

    return () => clearTimeout(timeoutId); // Cleanup timeout on unmount
  }, []);
};


