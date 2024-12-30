import React, { useEffect, useRef, useState } from "react";
import { getSrc } from "gatsby-plugin-image";
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
    mapboxgl.accessToken =
      "pk.eyJ1IjoiYnJhbmRvbmJyb3duMDE2OSIsImEiOiJjbTIyZW02ZnUwNmJ2MnFvZndvcThncXNsIn0._mMkjvjQfDU6yaKuoVte3g";

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
    customMarker.style.backgroundSize = "cover";
    customMarker.style.backgroundRepeat = "no-repeat";

    var marker = new mapboxgl.Marker(customMarker)
      .setLngLat([long, lat])
      .setPopup(popup) // Attach the popup to the marker
      .addTo(mapRef.current);
  };

  const today = new Date();
  const dayIndex = today.getDay(); // Get the current day index (0 to 6)

  const daysOfWeek = [
    "sundayLocation",
    "mondayLocation",
    "tuesdayLocation",
    "wednesdayLocation",
    "thursdayLocation",
    "fridayLocation",
    "saturdayLocation",
  ];
  const dayName = daysOfWeek[dayIndex];

  // Get the stored last update date from localStorage
  const lastUpdateDate = localStorage.getItem("lastUpdateDate");
  const currentDate = today.toISOString().split("T")[0]; // Get the current date in YYYY-MM-DD format

  // Check if the date is different from the stored last update date
  if (lastUpdateDate !== currentDate) {
    // Update the information for today
    updateInformation(dayName); // Replace with the function to update the data on your page

    // Store the current date as the last update date
    localStorage.setItem("lastUpdateDate", currentDate);
  } else {
    console.log("Information already updated today.");
  }

  function updateInformation(day) {
    // Your logic to update the page with the correct day's information
    console.log(`Updating information for: ${day}`);
    // You can manipulate the DOM here to display content specific to the day
  }

  return (
    <StaticQuery
      query={combinedQuery}
      render={(data) => {
        // Extract data from the GraphQL response only once
        const icon = data.allContentfulMapIcon.edges[0].node;
        const popupData = data.allContentfulMapPopUp.edges[0].node;
        const location = data.allContentfulSchedule.edges[0].node[dayName];
        console.log(location);
        const [lat, long] = location.split(",");
        console.log(lat, long);
        // Only set the state if mapData is not already set
        if (!mapData) {
          setMapData({ icon, popupData, lat, long });
        }

        return (
          <>
            <div
              ref={mapContainerRef}
              style={{
                height: "25rem",
                width: "100%",
                margin: "1rem 0",
                borderRadius: "0.5rem",
              }}
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
        node {
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
