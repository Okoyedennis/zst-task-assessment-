import React, { useState } from "react";
import Map, { Marker, NavigationControl } from "react-map-gl";
import getCenter from "geolib/es/getCenter";
import { Mapdata } from "../data/MapData";
import "mapbox-gl/dist/mapbox-gl.css";
import "./MapComponent.css";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

import { FiHeart } from "react-icons/fi";
import { IoMdStar } from "react-icons/io";
import img from "../../images/ArcticPhoto/photo1/image3.webp";

const MapComponent = () => {
  const [searchResult] = useState(Mapdata);

  const coordinate = searchResult.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinate);
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "90vh",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });

  return (
    <div className="map">
      <Map
        mapStyle="mapbox://styles/dennis07/ckskqb4z914tk17lwb8o2gla9"
        mapboxAccessToken="pk.eyJ1IjoiZGVubmlzMDciLCJhIjoiY2w5bDUxdWlxMWdoczN2bzB6d2kwcmp4dCJ9.mxbfKgfiYz43qkyvUWY4tA"
        style={{
          width: "100vw",
          height: "80vh",
        }}
        {...viewport}
        onViewportChange={(nextViewPort) => setViewport(nextViewPort)}
      >
        <NavigationControl />

        {searchResult.map((result, index) => (
          <div key={result.long}>
            <Marker longitude={result.long} latitude={result.lat}>
              <OverlayTrigger
                trigger="click"
                overlay={
                  <Popover id={`popover-positioned`}>
                    <Popover.Body>
                      <div className="individualHome">
                        <div className="individualHome__wrapper">
                          <div className="image__wrapper">
                            <img src={img} alt="img" />
                            <div className="image__top-layer">
                              <div className="heart__icon-wrapper">
                                <div className="heartSpace" />
                                <FiHeart />
                              </div>
                              <div className="dot_wrapper">
                                <span />
                              </div>
                            </div>
                          </div>
                          <div className="individualHome__content">
                            <div className="individualHome__content-left">
                              <span>Boden N, Sweden</span>
                              <span>6,755 kilometers away</span>
                              <span>Nov 27 – Dec 4</span>
                              <div>
                                <span>$137</span> <span>night</span>
                              </div>
                            </div>
                            <div className="individualHome__content-right">
                              <div className="individualHome__content-right-content">
                                <IoMdStar />
                                <span>4.98</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Popover.Body>
                  </Popover>
                }
              >
                <Button variant="secondary">
                  <p>{result.amount}</p>
                </Button>
              </OverlayTrigger>
            </Marker>
          </div>
        ))}
      </Map>
    </div>
  );
};

export default MapComponent;
