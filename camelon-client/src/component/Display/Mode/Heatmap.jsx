import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup,   } from "react-leaflet";
import L from "leaflet";
import 'leaflet/dist/leaflet.css';
import './map.scss'


import { useSelector } from "react-redux";

function Heatmap() {
  
  

  // useEffect(() => {
  //   var map = L.map("map").setView([-37.87, 175.475], 12);

  //   L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  //     attribution:
  //       '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  //   }).addTo(map);

  //   const points = locations
  //     ? locations.map((location) => {
  //         return [location.latitude, location.longitude];
  //       })
  //     : [];

  //   L.heatLayer(points).addTo(map);
  // }, []);
  
  return (
    <MapContainer center={[13.751, 100.492]} zoom={13}>
    <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
       

        
</MapContainer>

  )
}



export default Heatmap