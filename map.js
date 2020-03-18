function showMap() {
  mapboxgl.accessToken = 'pk.eyJ1IjoibGF6ZCIsImEiOiJjazd3a3VoOG4wM2RhM29rYnF1MDJ2NnZrIn0.uPYVImW8AVA71unqE8D8Nw';
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/lazd/ck7wkzrxt0c071ip932rwdkzj',
    center: [-121.403732, 40.492392],
    zoom: 5
  });

  map.on('load', function() {
    fetchJSON('features.json', function(featureCollection) {
      const smallFeatures = {
        type: 'FeatureCollection',
        features: featureCollection.features.filter((feature, index) => {
          feature.id = index;
          return true;
          // return feature.properties.admin !== feature.properties.name;
        })
      };

      map.addSource('CDSStates', {
        type: 'geojson',
        data: smallFeatures
      });

      map.addLayer({
        id: 'CDSStates',
        type: 'fill',
        source: 'CDSStates',
        layout: {},
        paint: {
          'fill-color': '#627BC1',
          'fill-opacity': ['case', ['boolean', ['feature-state', 'hover'], false], 1, 0.5]
        }
      });

      // Create a popup, but don't add it to the map yet.
      const popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
      });

      let hoveredStateId = null;
      // When the user moves their mouse over the state-fill layer, we'll update the
      // feature state for the feature under the mouse.
      map.on('mousemove', 'CDSStates', function(e) {
        if (e.features.length > 0) {
          if (hoveredStateId) {
            map.setFeatureState({ source: 'CDSStates', id: hoveredStateId }, { hover: false });
          }
          hoveredStateId = e.features[0].id;
          map.setFeatureState({ source: 'CDSStates', id: hoveredStateId }, { hover: true });

          // Change the cursor style as a UI indicator.
          map.getCanvas().style.cursor = 'pointer';

          const description = e.features[0].properties.name;

          // Populate the popup and set its coordinates
          // based on the feature found.
          popup
            .setLngLat(e.lngLat)
            .setHTML(description)
            .addTo(map);
        }
      });

      // When the mouse leaves the state-fill layer, update the feature state of the
      // previously hovered feature.
      map.on('mouseleave', 'CDSStates', function() {
        map.getCanvas().style.cursor = '';
        popup.remove();
        if (hoveredStateId) {
          map.setFeatureState({ source: 'CDSStates', id: hoveredStateId }, { hover: false });
        }
        hoveredStateId = null;
      });
    });
  });
}
