let map = L.map("map", {
    center: [0, 0],
    zoom: 2
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


//   Getting data
d3.json('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson').then(({ features }) => {


    features.forEach(earthQuake => {
        let {
            properties: { mag, place },
            geometry: { coordinates: [lon, lat, depth] }
        } = earthQuake;
        L.circleMarker([lat, lon], { radius: mag * 4, fillColor: getColor(depth), color: 'black', weight: 1, fillOpacity: .65 }).bindPopup(`<h3>${place}<br>Magnitute: ${mag}</h3>`).addTo(map)
    })
});

// Getting colours for markers
const getColor = depth => {
    switch (true) {
        case depth > 90:
            return '#FF0000';
            case depth > 70 && depth <= 85:
                return '#E97451';
                case depth >50 && depth <= 70:
                    return "#F3D6A5";
                    case depth >30 && depth <= 50:
                        return '#FFFF00';
                        case depth > 10 && depth <= 30:
                            return '#AAFF00';
                            case depth>-10 && depth <=10:
                                return '#7CFC00';     
}};

// Adding legend
var grades = [-10,10,30,50,70,90];
var colors = ['#7CFC00', '#AAFF00', '#FFFF00', '#FFAA33', '#E97451', '#FF0000'];
var legend = L.control({position: 'bottomright'});
legend.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'info legend')
    for (var i = 0; i < grades.length; i++) {
    div.innerHTML += '<i style="background:' + colors[i] + '"></i> ' + grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');}
    return div;
    };  
    legend.addTo(map);
