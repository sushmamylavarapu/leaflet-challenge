let map = L.map("map", {
    center: [0, 0],
    zoom: 2
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


//   getting data
d3.json('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson').then(({ features }) => {


    features.forEach(earthQuake => {

        let {
            properties: { mag, place },
            geometry: { coordinates: [lon, lat, depth] }
        } = earthQuake;


        L.circleMarker([lat, lon], { radius: mag * 4, fillColor: getColor(depth), color: 'black', weight: 1, fillOpacity: .65 }).bindPopup(`<h3>${place}<br>Magnitute: ${mag}</h3>`).addTo(map)
    })
});

const getColor = depth => {
    switch (true) {
        case depth > 90:
            return 'red';
        case depth > 70 && depth <= 85:
            return 'orange';
        default:
            return "green";
    };

}
