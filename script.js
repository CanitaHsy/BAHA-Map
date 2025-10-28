mapboxgl.accessToken = 'pk.eyJ1IjoiY2FuaXRhaHN5IiwiYSI6ImNtaDlyd2I1azBhN2EyanBwZmxvbWFsOTIifQ.UIrYr5BxuWUaWbVoY2jsgQ';

const map = new mapboxgl.Map({
  container: 'map', // this is the container ID that we set in the HTML 
  style: 'mapbox://styles/canitahsy/cmh9sles300qs01srd2dyd1mi', // Your Style URL goes here
  center: [-122.27, 37.8], // starting position [lng, lat]. Note that lat must be set between -90 and 90. You can choose what you'd like.
  zoom: 9 // starting zoom, again you can choose the level you'd like.
    });