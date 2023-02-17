import React, { useState, useEffect } from "react";
import {
  MapContainer,
  Marker,
  Polyline,
  Popup,
  TileLayer,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet.heat";
import "./map.scss";

import { useSelector } from "react-redux";

// const HeatMap = () => {
//   const map = useMap();

//   const points = locations ? locations.map((location) => {
//     return [location.latitude, location.longitude]
//   }) : [];

//   useEffect(() => {
//     L.heatLayer( coords , {
//       radius: 8,
//     }).addTo(map);
//   });

//   return null;
// };

function Heatmap() {
  const { locations } = useSelector((state) => state.data);
  const { user_current_location } = useSelector((state) => state.data);

  function SetView({ coords }) {
    const map = useMap();
    map.setView(coords, map.getZoom());
    // var newMarker = new L.circle(coords).addTo(map);
    // var marker = L.circle(coords, 1609.34, {
    //   color: "blue",
    //   fillColor: "blue",
    // }).addTo(map);
    return null;
  }

  const HeatMap = () => {
    const map = useMap();

    useEffect(() => {
      const points = locations
        ? locations.map((location) => {
            return [location.latitude, location.longitude, 15];
          })
        : [];

      L.heatLayer(points, { radius: 14 }).addTo(map);
    }, []);
  };

  return (
    <MapContainer center={[13.751, 100.492]} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <HeatMap />
      <SetView
        coords={[
          user_current_location.latitude,
          user_current_location.longitude,
        ]}
      />
    </MapContainer>
  );
}

export default Heatmap;
