var map = L.map('map').setView([36.2024, 127.46], 9);

var tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


function getColor(d) {
    return d > 1 ? '#00441b' :
        d > 0.9 ? '#00441b' :
            d > 0.8 ? '#00441b' :
                d > 0.7 ? '#006d2c' :
                    d > 0.6 ? '#238b45' :
                        d > 0.5 ? '#41ae76' :
                            d > 0.4 ? '#66c2a4' :
                                d > 0.3 ? '#99d8c9' :
                                    d > 0.2 ? '#ccece6' :
                                        d > 0.1 ? '#e5f5f9' :
                                            '#969696'
        ;
}

function style(feature) {
    return {
        fillColor: getColor(feature.properties.정규화인구),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}

L.geoJson(koreaDongData, { style: style }).addTo(map);