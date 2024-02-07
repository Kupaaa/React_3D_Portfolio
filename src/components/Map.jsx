import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-10.0, -52.0, 0],
        center: [-5, -3],
        scale: 1600
      }}

      style={{width:"100%", height:"100%"}}
    >
      <Geographies
        geography="/features.json"
        fill="#2d2d55"
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[2.3522, 48.8566]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "#ffffff",
          strokeWidth: 3,
          strokeLinecap: "round"
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#ffffff" >
          {"Paris"}
        </text>
      </Annotation>

      <Annotation
  subject={[10.4515, 51.1657]}  // Coordinates for the approximate center of Germany
  dx={-90}
  dy={-30}
  connectorProps={{
    stroke: "#e9e0df",
    strokeWidth: 3,
    strokeLinecap: "round"
  }}
>
  <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#e2d5d3">
    {"Germany"}
  </text>
</Annotation>

    </ComposableMap>
  );
};

export default Map;
