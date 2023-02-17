import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";

import "./map.scss";

import { useSelector } from "react-redux";

function Pinmap() {
  const { locations } = useSelector((state) => state.data);
  const { news_info } = useSelector((state) => state.data);
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

  return (
    <>
      <MapContainer center={[13.751, 100.492]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <SetView
          coords={[
            user_current_location.latitude,
            user_current_location.longitude,
          ]}
        />

        <MarkerClusterGroup chunkedLoading>
          {locations.map((location) => (
            <Marker position={[location.latitude, location.longitude]}>
              <Popup>
                <div>
                  {" "}
                  Criminal:{" "}
                  {
                    news_info.find((news) => news.info_id === location.info_id)
                      .criminal
                  }
                </div>
                <div>
                  {" "}
                  Action:{" "}
                  {
                    news_info.find((news) => news.info_id === location.info_id)
                      .action
                  }
                </div>
                <div>
                  {" "}
                  Victim:{" "}
                  {
                    news_info.find((news) => news.info_id === location.info_id)
                      .victim
                  }
                </div>
                <div> Address: {location.formatted_address}</div>
                <div className="popup-action">
                  <button onClick={() => console.log("hello")}>
                    Read more...
                  </button>
                </div>
              </Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </MapContainer>
    </>
  );
}

export default Pinmap;
