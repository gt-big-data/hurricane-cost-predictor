import React from "react";
import { geoCentroid } from "d3-geo";
import {
    ComposableMap,
    Geographies,
    Geography,
    Marker,
    Annotation,
    ZoomableGroup
} from "react-simple-maps";

import allStates from "../../.././data/allstates.json";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const offsets = {
    VT: [50, -8],
    NH: [34, 2],
    MA: [30, -1],
    RI: [28, 2],
    CT: [35, 10],
    NJ: [34, 1],
    DE: [33, 0],
    MD: [47, 10],
    DC: [49, 21]
};

const MapChart = () => {
    return (
        <ComposableMap
            viewBox="0 100 800 400"
            style={{
                width: '1000px',
                background: 'transparent'
            }}
            projection="geoAlbersUsa"
            projectionConfig={{
                rotate: [0, 0, -53.0, 0],
                scale: 800,
            }}>
            <Geographies geography={geoUrl}>
                {({ geographies }) => (
                    <>
                        {geographies.map(geo => {
                            return (
                                <>
                                    {
                                    // We dont indicate Aleska and Hawaii for this project
                                    geo.id!= "02" &&
                                    geo.id!= "15" &&
                                    <Geography

                                        key={geo.rsmKey}
                                        stroke="#FFF"
                                        geography={geo}
                                        fill="#DDD"
                                    />
                                        
                                    }
                                </>
                            )
                        })}
                        {geographies.map(geo => {
                            const centroid = geoCentroid(geo);
                            const cur = allStates.find(s => s.val === geo.id);
                            return (
                                <g key={geo.rsmKey + "-name"}>
                                    {cur &&
                                        centroid[0] > -160 &&
                                        centroid[0] < -67
                                        
                                        &&
                                        geo.id!= "02" &&
                                        geo.id!= "15" &&

                                        (Object.keys(offsets).indexOf(cur.id) === -1 ? (
                                            <Marker coordinates={centroid}>
                                                <text y="2" fontSize={14} textAnchor="middle">
                                                    {cur.id}
                                                </text>
                                            </Marker>
                                        ) : (
                                            <Annotation
                                                subject={centroid}
                                                dx={offsets[cur.id][0]}
                                                dy={offsets[cur.id][1]}
                                            >
                                                <text x={4} fontSize={14} alignmentBaseline="middle">
                                                    {cur.id }
                                                </text>
                                            </Annotation>
                                        ))}
                                </g>
                            );
                        })}
                    </>
                )}
            </Geographies>
        </ComposableMap>

    );
};

export default MapChart;
