/* ================================
Week 6 Assignment: Slide Model
================================ */
var map = L.map('map', {
  center: [41.253585, -96.026329],
  zoom: 4
});
var Stamen_TonerLite = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);

/** Here's a simple 'model' of a slide.
 *  It tracks the slide's index and the title we want in our HTML
 */

var slide1 ={
  slideNumber: 1,
  title: "Frank Lloyd Wright Selected Works in the U.S."
};
var slide2 ={
  slideNumber: 2,
  title: "Built before World War II"
};

var slide3={
  slideNumber: 3,
  title: "Built after World War II"
};
var slide4 ={
  slideNumber: 4,
  title: "Prairie School Style"
};

var slide5 ={
  slideNumber: 5,
  title: "Usonian Style"
};

//Cannot seem to import the dataset from local folder to the js file here
var dataset = WrightSelected.geojson ;
var featureGroup;

var style = function(feature) {
  switch (feature.properties.STYLE) {
  case 'Modern': return {fillColor: "#42f45f"};
}
};

var showResults = function() {
  /* =====================
  This function uses some jQuery methods that may be new. $(element).hide()
  will add the CSS "display: none" to the element, effectively removing it
  from the page. $(element).show() removes "display: none" from an element,
  returning it to the page. You don't need to change this part.
  ===================== */
  // => <div id="intro" css="display: none">
  $('#intro').hide();
  // => <div id="results">
  $('#results').show();
};


var eachFeatureFunction = function(layer) {
  layer.on('click', function (event) {
    /* =====================
    The following code will run every time a layer on the map is clicked.
    Check out layer.feature to see some useful data about the layer that
    you can use in your application.
    ===================== */

});
    console.log(layer.feature);
    showResults();
};

var myFilter = function(feature) {
  if(feature.properties.NAME.length >1){
  return true;
}
  else{
    return false;
  }
};

$(document).ready(function() {
  $.ajax(dataset).done(function(data) {
    var parsedData = JSON.parse(data);
    featureGroup = L.geoJson(parsedData, {
      style: style,
      filter: myFilter
    }).addTo(map);

    // quite similar to _.each
    featureGroup.eachLayer(eachFeatureFunction);
  });
});
