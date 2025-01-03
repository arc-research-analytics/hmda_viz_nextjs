(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_1ada5b._.js", {

"[project]/components/HighchartsDrilldownMap.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$highcharts$2f$highcharts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/highcharts/highcharts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$highcharts$2d$react$2d$official$2f$dist$2f$highcharts$2d$react$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/highcharts-react-official/dist/highcharts-react.min.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$highcharts$2f$modules$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/highcharts/modules/map.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$highcharts$2f$modules$2f$drilldown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/highcharts/modules/drilldown.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$highcharts$2f$map$2d$collection$2f$custom$2f$world$2e$geo$2e$json__$28$json$29$__ = __turbopack_import__("[project]/node_modules/@highcharts/map-collection/custom/world.geo.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$highcharts$2f$modules$2f$tiledwebmap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/highcharts/modules/tiledwebmap.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
;
const HighchartsDrilldownMap = ()=>{
    _s();
    const [options, setOptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HighchartsDrilldownMap.useEffect": ()=>{
            const initMap = {
                "HighchartsDrilldownMap.useEffect.initMap": async ()=>{
                    try {
                        // Fetch the GeoJSON data
                        const countiesGeoJSON = await fetch("/geojson/simplified_Counties.geojson").then({
                            "HighchartsDrilldownMap.useEffect.initMap": (res)=>res.json()
                        }["HighchartsDrilldownMap.useEffect.initMap"]);
                        const censusTractsGeoJSON = await fetch("/geojson/simplified_CTs.geojson").then({
                            "HighchartsDrilldownMap.useEffect.initMap": (res)=>res.json()
                        }["HighchartsDrilldownMap.useEffect.initMap"]);
                        // Preprocess drilldown data
                        const drilldownData = {};
                        censusTractsGeoJSON.features.forEach({
                            "HighchartsDrilldownMap.useEffect.initMap": (feature)=>{
                                const countyKey = feature.properties.COUNTYFP;
                                if (!drilldownData[countyKey]) {
                                    drilldownData[countyKey] = [];
                                }
                                drilldownData[countyKey].push({
                                    key: feature.properties.COUNTYFP,
                                    name: feature.properties.NAME,
                                    value: Math.random() * 100
                                });
                            }
                        }["HighchartsDrilldownMap.useEffect.initMap"]);
                        // Configure drilldown series
                        const drilldownSeries = Object.keys(drilldownData).map({
                            "HighchartsDrilldownMap.useEffect.initMap.drilldownSeries": (countyKey)=>({
                                    id: countyKey,
                                    name: `Census Tracts in County ${countyKey}`,
                                    mapData: {
                                        type: "FeatureCollection",
                                        features: censusTractsGeoJSON.features.filter({
                                            "HighchartsDrilldownMap.useEffect.initMap.drilldownSeries": (feature)=>feature.properties.COUNTYFP === countyKey
                                        }["HighchartsDrilldownMap.useEffect.initMap.drilldownSeries"])
                                    },
                                    data: drilldownData[countyKey].map({
                                        "HighchartsDrilldownMap.useEffect.initMap.drilldownSeries": (item)=>({
                                                key: item.key,
                                                value: item.value
                                            })
                                    }["HighchartsDrilldownMap.useEffect.initMap.drilldownSeries"])
                                })
                        }["HighchartsDrilldownMap.useEffect.initMap.drilldownSeries"]);
                        // Set chart options
                        setOptions({
                            chart: {
                                map: countiesGeoJSON
                            },
                            title: {
                                text: "Drilldown Map with GeoJSON"
                            },
                            mapNavigation: {
                                enabled: true
                            },
                            colorAxis: {
                                min: 0
                            },
                            series: [
                                {
                                    name: "Counties",
                                    mapData: countiesGeoJSON,
                                    data: countiesGeoJSON.features.map({
                                        "HighchartsDrilldownMap.useEffect.initMap": (feature)=>({
                                                key: feature.properties.COUNTYFP,
                                                value: Math.random() * 100,
                                                drilldown: feature.properties.COUNTYFP
                                            })
                                    }["HighchartsDrilldownMap.useEffect.initMap"])
                                }
                            ],
                            drilldown: {
                                series: drilldownSeries
                            }
                        });
                    } catch (error) {
                        console.error("Error loading GeoJSON data:", error);
                    }
                }
            }["HighchartsDrilldownMap.useEffect.initMap"];
            initMap();
        }
    }["HighchartsDrilldownMap.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: options ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$highcharts$2d$react$2d$official$2f$dist$2f$highcharts$2d$react$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            highcharts: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$highcharts$2f$highcharts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
            constructorType: "mapChart",
            options: options
        }, void 0, false, {
            fileName: "[project]/components/HighchartsDrilldownMap.jsx",
            lineNumber: 95,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "Loading map..."
        }, void 0, false, {
            fileName: "[project]/components/HighchartsDrilldownMap.jsx",
            lineNumber: 101,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/HighchartsDrilldownMap.jsx",
        lineNumber: 93,
        columnNumber: 5
    }, this);
};
_s(HighchartsDrilldownMap, "FaYRMdb3bb7c06UOm+rnyvgauSc=");
_c = HighchartsDrilldownMap;
const __TURBOPACK__default__export__ = HighchartsDrilldownMap;
var _c;
__turbopack_refresh__.register(_c, "HighchartsDrilldownMap");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/page.jsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=_1ada5b._.js.map