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
            const fetchMapData = {
                "HighchartsDrilldownMap.useEffect.fetchMapData": async ()=>{
                    const nordicTopology = await fetch("https://code.highcharts.com/mapdata/custom/nordic-countries-core.topo.json").then({
                        "HighchartsDrilldownMap.useEffect.fetchMapData": (response)=>response.json()
                    }["HighchartsDrilldownMap.useEffect.fetchMapData"]);
                    const topologies = {};
                    for (const geometry of nordicTopology.objects.default.geometries){
                        const key = geometry.properties["hc-key"];
                        topologies[key] = await fetch(`https://code.highcharts.com/mapdata/countries/${key}/${key}-all.topo.json`).then({
                            "HighchartsDrilldownMap.useEffect.fetchMapData": (response)=>response.json()
                        }["HighchartsDrilldownMap.useEffect.fetchMapData"]);
                    }
                    setOptions({
                        chart: {
                            map: nordicTopology
                        },
                        title: {
                            text: "Highcharts Maps Drilldown - Atlanta"
                        },
                        subtitle: {
                            text: 'Source map: <a href="https://code.highcharts.com/mapdata/custom/nordic-countries.topo.json">Nordic Countries</a>'
                        },
                        mapView: {
                            projection: {
                                name: "WebMercator"
                            }
                        },
                        mapNavigation: {
                            enabled: true,
                            buttonOptions: {
                                verticalAlign: "bottom"
                            }
                        },
                        colorAxis: {
                            min: 0
                        },
                        plotOptions: {
                            map: {
                                dataLabels: {
                                    enabled: true,
                                    format: "{point.name}"
                                }
                            }
                        },
                        series: [
                            {
                                name: "Scandanavian data",
                                mapData: nordicTopology,
                                type: "map",
                                // provider: {
                                //   url: "https://a.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
                                // },
                                showInLegend: false,
                                data: [
                                    {
                                        "hc-key": "no",
                                        value: 15,
                                        drilldown: "norway"
                                    },
                                    {
                                        "hc-key": "is",
                                        value: 14,
                                        drilldown: "iceland"
                                    },
                                    {
                                        "hc-key": "fo",
                                        value: 13,
                                        drilldown: "faroe-islands"
                                    },
                                    {
                                        "hc-key": "fi",
                                        value: 12,
                                        drilldown: "finland"
                                    },
                                    {
                                        "hc-key": "se",
                                        value: 11,
                                        drilldown: "sweden"
                                    },
                                    {
                                        "hc-key": "dk",
                                        value: 10,
                                        drilldown: "denmark"
                                    }
                                ]
                            }
                        ],
                        drilldown: {
                            activeDataLabelStyle: {
                                color: "#FFFFFF",
                                textDecoration: "none",
                                textOutline: "1px #000000"
                            },
                            breadcrumbs: {
                                floating: true,
                                showFullPath: false
                            },
                            mapZooming: true,
                            series: [
                                {
                                    id: "norway",
                                    name: "Norway",
                                    mapData: topologies.no,
                                    data: [
                                        [
                                            "no-vl-46",
                                            10
                                        ],
                                        [
                                            "no-mr-15",
                                            11
                                        ],
                                        [
                                            "no-ag-42",
                                            12
                                        ],
                                        [
                                            "no-no-18",
                                            13
                                        ],
                                        [
                                            "no-vi-30",
                                            14
                                        ],
                                        [
                                            "no-ro-11",
                                            15
                                        ],
                                        [
                                            "no-tf-54",
                                            16
                                        ],
                                        [
                                            "no-td-50",
                                            17
                                        ],
                                        [
                                            "no-os-0301",
                                            18
                                        ],
                                        [
                                            "no-vt-38",
                                            19
                                        ],
                                        [
                                            "no-in-34",
                                            20
                                        ]
                                    ]
                                },
                                {
                                    id: "iceland",
                                    name: "Iceland",
                                    mapData: topologies.is,
                                    data: [
                                        [
                                            "is-ne",
                                            10
                                        ],
                                        [
                                            "is-sl",
                                            11
                                        ],
                                        [
                                            "is-su",
                                            12
                                        ],
                                        [
                                            "is-ho",
                                            13
                                        ],
                                        [
                                            "is-6642",
                                            14
                                        ],
                                        [
                                            "is-vf",
                                            15
                                        ],
                                        [
                                            "is-al",
                                            16
                                        ],
                                        [
                                            "is-vl",
                                            17
                                        ],
                                        [
                                            "is-nv",
                                            18
                                        ]
                                    ]
                                },
                                {
                                    id: "faroe-islands",
                                    name: "Faroe Islands",
                                    mapData: topologies.fo,
                                    data: [
                                        [
                                            "fo-os",
                                            10
                                        ]
                                    ]
                                },
                                {
                                    id: "sweden",
                                    name: "Sweden",
                                    mapData: topologies.se,
                                    data: [
                                        [
                                            "se-4461",
                                            10
                                        ],
                                        [
                                            "se-ka",
                                            11
                                        ],
                                        [
                                            "se-og",
                                            12
                                        ],
                                        [
                                            "se-nb",
                                            13
                                        ],
                                        [
                                            "se-vn",
                                            14
                                        ],
                                        [
                                            "se-vb",
                                            15
                                        ],
                                        [
                                            "se-gt",
                                            16
                                        ],
                                        [
                                            "se-st",
                                            17
                                        ],
                                        [
                                            "se-up",
                                            18
                                        ],
                                        [
                                            "se-bl",
                                            19
                                        ],
                                        [
                                            "se-vg",
                                            20
                                        ],
                                        [
                                            "se-ko",
                                            21
                                        ],
                                        [
                                            "se-gv",
                                            22
                                        ],
                                        [
                                            "se-jo",
                                            23
                                        ],
                                        [
                                            "se-kr",
                                            24
                                        ],
                                        [
                                            "se-or",
                                            25
                                        ],
                                        [
                                            "se-vm",
                                            26
                                        ],
                                        [
                                            "se-ha",
                                            27
                                        ],
                                        [
                                            "se-sd",
                                            28
                                        ],
                                        [
                                            "se-vr",
                                            29
                                        ],
                                        [
                                            "se-ja",
                                            30
                                        ],
                                        [
                                            "se-sn",
                                            31
                                        ]
                                    ]
                                },
                                {
                                    id: "finland",
                                    name: "Finland",
                                    mapData: topologies.fi,
                                    data: [
                                        [
                                            "fi-3280",
                                            10
                                        ],
                                        [
                                            "fi-3272",
                                            11
                                        ],
                                        [
                                            "fi-3275",
                                            12
                                        ],
                                        [
                                            "fi-3281",
                                            13
                                        ],
                                        [
                                            "fi-3279",
                                            14
                                        ],
                                        [
                                            "fi-3276",
                                            15
                                        ],
                                        [
                                            "fi-3287",
                                            16
                                        ],
                                        [
                                            "fi-3286",
                                            17
                                        ],
                                        [
                                            "fi-3290",
                                            18
                                        ],
                                        [
                                            "fi-3291",
                                            19
                                        ],
                                        [
                                            "fi-3292",
                                            20
                                        ],
                                        [
                                            "fi-3293",
                                            21
                                        ],
                                        [
                                            "fi-3294",
                                            22
                                        ],
                                        [
                                            "fi-3295",
                                            23
                                        ],
                                        [
                                            "fi-3296",
                                            24
                                        ],
                                        [
                                            "fi-3288",
                                            25
                                        ],
                                        [
                                            "fi-3285",
                                            26
                                        ],
                                        [
                                            "fi-3289",
                                            27
                                        ]
                                    ]
                                },
                                {
                                    id: "denmark",
                                    name: "Denmark",
                                    mapData: topologies.dk,
                                    data: [
                                        [
                                            "dk-6326",
                                            10
                                        ],
                                        [
                                            "dk-3564",
                                            11
                                        ],
                                        [
                                            "dk-3568",
                                            12
                                        ],
                                        [
                                            "dk-6325",
                                            13
                                        ],
                                        [
                                            "dk-3563",
                                            14
                                        ]
                                    ]
                                }
                            ]
                        }
                    });
                }
            }["HighchartsDrilldownMap.useEffect.fetchMapData"];
            fetchMapData();
        }
    }["HighchartsDrilldownMap.useEffect"], []);
    return options ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$highcharts$2d$react$2d$official$2f$dist$2f$highcharts$2d$react$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        highcharts: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$highcharts$2f$highcharts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        constructorType: "mapChart",
        options: options
    }, void 0, false, {
        fileName: "[project]/components/HighchartsDrilldownMap.jsx",
        lineNumber: 206,
        columnNumber: 5
    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: "Loading map..."
    }, void 0, false, {
        fileName: "[project]/components/HighchartsDrilldownMap.jsx",
        lineNumber: 212,
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