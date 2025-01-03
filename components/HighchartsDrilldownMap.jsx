"use client";

import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsMap from "highcharts/modules/map";
import HighchartsDrilldown from "highcharts/modules/drilldown";
import mapDataWorld from "@highcharts/map-collection/custom/world.geo.json";
import TiledWebMap from "highcharts/modules/tiledwebmap";

const HighchartsDrilldownMap = () => {
  const [options, setOptions] = useState(null);

  useEffect(() => {
    const initMap = async () => {
      try {
        // Fetch the GeoJSON data
        const countiesGeoJSON = await fetch(
          "/geojson/simplified_Counties.geojson"
        ).then((res) => res.json());
        const censusTractsGeoJSON = await fetch(
          "/geojson/simplified_CTs.geojson"
        ).then((res) => res.json());

        // Preprocess drilldown data
        const drilldownData = {};
        censusTractsGeoJSON.features.forEach((feature) => {
          const countyKey = feature.properties.COUNTYFP;
          if (!drilldownData[countyKey]) {
            drilldownData[countyKey] = [];
          }
          drilldownData[countyKey].push({
            key: feature.properties.COUNTYFP,
            name: feature.properties.NAME, // Adjust if needed
            value: Math.random() * 100, // Replace with actual data
          });
        });

        // Configure drilldown series
        const drilldownSeries = Object.keys(drilldownData).map((countyKey) => ({
          id: countyKey,
          name: `Census Tracts in County ${countyKey}`,
          mapData: {
            type: "FeatureCollection",
            features: censusTractsGeoJSON.features.filter(
              (feature) => feature.properties.COUNTYFP === countyKey
            ),
          },
          data: drilldownData[countyKey].map((item) => ({
            key: item.key,
            value: item.value,
          })),
        }));

        // Set chart options
        setOptions({
          chart: {
            map: countiesGeoJSON,
          },
          title: {
            text: "Drilldown Map with GeoJSON",
          },
          mapNavigation: {
            enabled: true,
          },
          colorAxis: {
            min: 0,
          },
          series: [
            {
              name: "Counties",
              mapData: countiesGeoJSON,
              data: countiesGeoJSON.features.map((feature) => ({
                key: feature.properties.COUNTYFP,
                value: Math.random() * 100, // Replace with actual data
                drilldown: feature.properties.COUNTYFP, // Matches drilldown series
              })),
            },
          ],
          drilldown: {
            series: drilldownSeries,
          },
        });
      } catch (error) {
        console.error("Error loading GeoJSON data:", error);
      }
    };

    initMap();
  }, []);

  return (
    <div>
      {options ? (
        <HighchartsReact
          highcharts={Highcharts}
          constructorType={"mapChart"}
          options={options}
        />
      ) : (
        <div>Loading map...</div>
      )}
    </div>
  );
};

export default HighchartsDrilldownMap;
