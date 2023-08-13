# leaflet-challenge

# Part-1

This code creates an interactive map of earthquakes. The map is centered on the Earth and has a zoom level of 2. The map uses data from the USGS Earthquakes Feed. The data is loaded using the d3.json() function. The earthquakes are displayed on the map as circle markers. The size of the circle marker is proportional to the magnitude of the earthquake. The color of the circle marker is based on the depth of the earthquake.

We first create a map object using the L.map() function to create the map. We pass the id of the HTML element that we want to use as the map container to the L.map() function. We also set the center and zoom of the map.

Next, we add a tile layer to the map. The tile layer is used to display the map tiles. We use the OpenStreetMap tile layer. We pass the attribution for the OpenStreetMap tile layer to the L.tileLayer() function.

Finally, we load the earthquake data and add the earthquakes to the map. We use the d3.json() function to load the data. The data is loaded into a JavaScript object. We then iterate over the earthquakes in the data object and add each earthquake to the map as a circle marker.

The getColor() function is used to get the color of the circle marker for an earthquake. The function takes the depth of the earthquake as a parameter. The function returns a string that represents the color of the circle marker. The color of the circle marker is based on the depth of the earthquake. If the depth of the earthquake is greater than 90 kilometers, the circle marker is red. If the depth of the earthquake is greater than 70 kilometers and less than or equal to 85 kilometers, the circle marker is orange. Otherwise, the circle marker is green.

