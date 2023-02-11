import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import 'leaflet/dist/leaflet.css';
import './map.scss'

function Pinmap() {
  return (
    <>
        <MapContainer center={[13.751, 100.492]} zoom={13}>
            <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
        </MapContainer>
    </>
   
  )
}

export default Pinmap