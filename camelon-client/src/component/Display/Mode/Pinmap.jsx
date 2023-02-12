import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from 'react-leaflet-cluster';
import 'leaflet/dist/leaflet.css';

import './map.scss'

import { useSelector } from "react-redux";

function Pinmap() {

  const { locations } = useSelector((state) => state.data)
  const { news_info } = useSelector((state) => state.data)
  console.log(locations)
  console.log(news_info)

  

  
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
                      <Popup>
                        <div> Criminal: { news_info.find(news => news.info_id === location.info_id).criminal}</div>
                        <div> Action: { news_info.find(news => news.info_id === location.info_id).action}</div>
                        <div> Victim: { news_info.find(news => news.info_id === location.info_id).victim}</div>
                        <div> Address: { location.formatted_address}</div>
                        <div className="popup-action"><button onClick={() => console.log('hello')}>Read more...</button></div>
                      </Popup>
                    </Marker>
                  ))}
                </MarkerClusterGroup>
        </MapContainer>
    </>
   
  )
}

export default Pinmap