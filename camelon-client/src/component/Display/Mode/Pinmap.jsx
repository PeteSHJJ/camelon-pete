import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from 'react-leaflet-cluster';
import 'leaflet/dist/leaflet.css';

import './map.scss'

import { useSelector } from "react-redux";

function Pinmap() {

  const { locations } = useSelector((state) => state.locations)
  console.log(locations)


  return (
    <>
        <MapContainer center={[13.751, 100.492]} zoom={13}>
            <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <MarkerClusterGroup chunkedLoading>
                  {locations.map((location) => (
                    <Marker position={[location.latitude, location.longitude]}>

                    </Marker>
                  ))}
                </MarkerClusterGroup>
        </MapContainer>
    </>
   
  )
}

export default Pinmap