/*var map;
function initialize() {
  var mapOptions = {
    zoom: 8,
    center: new google.maps.LatLng(32.715701, -117.161575)
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
}

google.maps.event.addDomListener(window, 'load', initialize);
*/
// Adding 500 Data Points
var map, pointarray, heatmap;

var taxiData = [
  {location: new google.maps.LatLng(32.8344, -116.7706), weight: 121168/91041}, //Alpine
  {location: new google.maps.LatLng(33.2592, -116.3992), weight: 121168/49948}, //"Anza-Borrego"
  {location: new google.maps.LatLng(33.1219, -117.2969), weight: 121168/89108}, //"Carlsbad"
  {location: new google.maps.LatLng(32.7150, -117.1625), weight: 121168/52607}, //"Central San Diego" or just san diego
  {location: new google.maps.LatLng(32.6278, -117.0481), weight: 121168/47821}, //"Chula Vista"
  {location: new google.maps.LatLng(32.8426, -117.2577), weight: 121168/34553}, //"Coastal" or La jolla?
  {location: new google.maps.LatLng(32.6781, -117.1725), weight: 121168/99889}, //"Coronado"
  {location: new google.maps.LatLng(32.918238, -117.138236), weight: 121168/115528}, //Mira Mesa
  {location: new google.maps.LatLng(32.7983, -116.9600), weight: 121168/55429}, //"El Cajon"
  {location: new google.maps.LatLng(32.753190, -117.109972), weight: 121168/83438}, //"Elliott-Navajo"
  {location: new google.maps.LatLng(33.1247, -117.0808), weight: 121168/61751}, //"Escondido"
  {location: new google.maps.LatLng(33.3717, -117.2361), weight: 121168/72011}, //"Fallbrook"
  {location: new google.maps.LatLng(32.8203, -116.8300), weight: 121168/83290}, //"Harbison-Crest"
  {location: new google.maps.LatLng(32.7267, -116.8822), weight: 121168/121168}, //"Jamul"
  {location: new google.maps.LatLng(32.8250, -117.1392), weight: 121168/68676}, //"Kearny Mesa"
  {location: new google.maps.LatLng(32.7714, -117.0228), weight: 121168/60838}, //"La Mesa"
  {location: new google.maps.LatLng(32.9053, -116.6241), weight: 121168/69316}, //"Laguna-Pine Valley" 
  {location: new google.maps.LatLng(32.8572, -116.9213), weight: 121168/71155}, //"Lakeside"
  {location: new google.maps.LatLng(32.7414, -117.0317), weight: 121168/60434}, //"Lemon Grove"
  {location: new google.maps.LatLng(32.7400, -117.1000), weight: 121168/45873}, //"Mid City"
  {location: new google.maps.LatLng(32.8864, -117.1578), weight: 121168/45498}, //"Miramar"
  {location: new google.maps.LatLng(32.6087, -116.4747), weight: 121168/59014}, //Mountain Empire
  {location: new google.maps.LatLng(33.18754, -117.28365), weight: 121168/104474}, //North San Diego
  {location: new google.maps.LatLng(32.6781, -117.0992), weight: 121168/41936}, //"National City"
  {location: new google.maps.LatLng(33.2117, -117.3258), weight: 121168/70503}, //"Oceanside"
  {location: new google.maps.LatLng(33.2417,  -116.7014), weight: 121168/57946}, //Palomar-Julian
  {location: new google.maps.LatLng(33.3034, -116.9814), weight: 121168/83094}, //"Pauma"
  {location: new google.maps.LatLng(33.3333, -117.4167), weight: 121168/52692}, //"Pendleton"
  {location: new google.maps.LatLng(32.6750,  -117.1221), weight: 121168/71475}, // Peninsula
  {location: new google.maps.LatLng(32.9700, -117.0386), weight: 121168/117506}, //"Poway"
  {location: new google.maps.LatLng(33.0358, -116.8706), weight: 121168/88991}, //"Ramona"
  {location: new google.maps.LatLng(32.9980,  -117.2339), weight: 121168/103305}, //San Dieguito
  {location: new google.maps.LatLng(33.1419, -117.1703), weight: 121168/65489}, //"San Marcos"
  {location: new google.maps.LatLng(32.8697, 116.9711), weight: 121168/78300}, //"Santee"
  //{location: new google.maps.LatLng(32.36 , -117.7), weight: 121168/54417}, //South Bay
  {location: new google.maps.LatLng(32.704256, -117.043411), weight: 121168/56626}, //Southeastern San Diego
  {location: new google.maps.LatLng(32.7344 , -116.9814), weight: 121168/74965}, //"Spring Valley"
  {location: new google.maps.LatLng(32.6641 , -117.0412), weight: 121168/94927}, //"Sweetwater"
  {location: new google.maps.LatLng(32.7753 , -117.0722), weight: 121168/73746}, //University (San Diego State)
  {location: new google.maps.LatLng(33.2406 , -117.0142), weight: 121168/85004}, //"Valley Center"
  {location: new google.maps.LatLng(33.1936 , -117.2411), weight: 121168/61044} //"Vista""
];

var markLoc = [
  [32.8344, -116.7706, "Median Income: $91041", "Alpine"], //Alpine
  [33.2592, -116.3992, "Median Income: $49948", "Anza-Borrego"], //"Anza-Borrego"
  [33.1219, -117.2969, "Median Income: $89108", "Carlsbad"], //"Carlsbad"
  [32.7150, -117.1625, "Median Income: $52607", "Central San Diego"], //"Central San Diego" or just san diego
  [32.6278, -117.0481, "Median Income: $47821", "Chula Vista"], //"Chula Vista"
  [32.8426, -117.2577, "Median Income: $34553", "Coastal"], //"Coastal" or La jolla?
  [32.6781, -117.1725, "Median Income: $99889", "Coronado"], //"Coronado"
  [32.918238, -117.138236, "Median Income: $115528", "Mira Mesa"], //Mira Mesa
  [32.7983, -116.9600, "Median Income: $55429", "El Cajon"], //"El Cajon"
  [32.753190, -117.109972, "Median Income: $83438", "Elliott-Navajo"], //"Elliott-Navajo"
  [33.1247, -117.0808, "Median Income: $61751", "Escondido"], //"Escondido"
  [33.3717, -117.2361, "Median Income: $72011", "Fallbrook"], //"Fallbrook"
  [32.8203, -116.8300, "Median Income: $83290", "Harbison-Crest"], //"Harbison-Crest"
  [32.7267, -116.8822, "Median Income: $121168", "Jamul"], //"Jamul"
  [32.8250, -117.1392, "Median Income: $68676", "Kearny Mesa"], //"Kearny Mesa"
  [32.7714, -117.0228, "Median Income: $60838", "La Mesa"], //"La Mesa"
  [32.9053, -116.6241, "Median Income: $69316", "Laguna-Pine Valley"], //"Laguna-Pine Valley" 
  [32.8572, -116.9213, "Median Income: $71155", "Lakeside"], //"Lakeside"
  [32.7414, -117.0317, "Median Income: $60434", "Lemon Grove"], //"Lemon Grove"
  [32.7400, -117.1000, "Median Income: $45873", "Mid City"], //"Mid City"
  [32.8864, -117.1578, "Median Income: $45498", "Miramar"], //"Miramar"
  [32.6087, -116.4747, "Median Income: $59014", "Mountain Empire"], //Mountain Empire
  [33.18754, -117.28365, "Median Income: $104474", "North San Diego"], //North San Diego
  [32.6781, -117.0992, "Median Income: $41936", "National City"], //"National City"
  [33.2117, -117.3258, "Median Income: $70503", "Oceanside"], //"Oceanside"
  [33.2417,  -116.7014, "Median Income: $57946", "Palomar-Julian"], //Palomar-Julian
  [33.3034, -116.9814, "Median Income: $83094", "Pauma"], //"Pauma"
  [33.3333, -117.4167, "Median Income: $52692", "Pendleton"], //"Pendleton"
  [32.6750,  -117.1221, "Median Income: $71475", "Peninsula"], // Peninsula
  [32.9700, -117.0386, "Median Income: $117506", "Poway"], //"Poway"
  [33.0358, -116.8706, "Median Income: $88991", "Ramona"], //"Ramona"
  [32.9980,  -117.2339, "Median Income: $103305", "San Dieguito"], //San Dieguito
  [33.1419, -117.1703, "Median Income: $65489", "San Marcos"], //"San Marcos"
  [32.8697, 116.9711, "Median Income: $78300", "Santee"], //"Santee"
  //[32.36 , -117.7, "Median Income:54417"], //South Bay
  [32.704256, -117.043411, "Median Income: $56626", "Southeastern San Diego"], //Southeastern San Diego
  [32.7344 , -116.9814, "Median Income: $74965", "Spring Valley"], //"Spring Valley"
  [32.6641 , -117.0412, "Median Income: $94927", "Sweetwater"], //"Sweetwater"
  [32.7753 , -117.0722, "Median Income: $73746", "University"], //University (San Diego State
  [33.2406 , -117.0142, "Median Income: $85004", "Valley Center"], //"Valley Center"
  [33.1936 , -117.2411, "Median Income: $61044", "Vista"] //"Vista"
];

function initialize() {
  var mapOptions = {
    zoom: 15,
    center: new google.maps.LatLng(32.715701, -117.161575),
    mapTypeId: google.maps.MapTypeId.SATELLITE
  };

  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
  
  //map.data.loadGeoJson('data/zillowneighborhoodsca.geojson');
  var pointArray = new google.maps.MVCArray(taxiData);

  var infowindow = new google.maps.InfoWindow;
  
  var marker, i;
  //var contentString;
  
  for (i = 0; i < markLoc.length; i++) {  
    marker = new google.maps.Marker({
         position: new google.maps.LatLng(markLoc[i][0], markLoc[i][1]),
         map: map
    });

    google.maps.event.addListener(marker, 'click', (function(marker, i) {
         return function() {
             infowindow.setContent('<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">' + markLoc[i][3] + '</h1>'+
      '<div id="bodyContent">'+
      '<p>' + markLoc[i][2]  +'</p>'+
	   '</div>'+
      '</div>');
             infowindow.open(map, marker);
         }
    })(marker, i));
  }
  heatmap = new google.maps.visualization.HeatmapLayer({
    data: pointArray,
	radius: 50
  });

  heatmap.setMap(map);
}

function toggleHeatmap() {
  heatmap.setMap(heatmap.getMap() ? null : map);
}

function changeGradient() {
  var gradient = [
    'rgba(0, 255, 255, 0)',
    'rgba(0, 255, 255, 1)',
    'rgba(0, 191, 255, 1)',
    'rgba(0, 127, 255, 1)',
    'rgba(0, 63, 255, 1)',
    'rgba(0, 0, 255, 1)',
    'rgba(0, 0, 223, 1)',
    'rgba(0, 0, 191, 1)',
    'rgba(0, 0, 159, 1)',
    'rgba(0, 0, 127, 1)',
    'rgba(63, 0, 91, 1)',
    'rgba(127, 0, 63, 1)',
    'rgba(191, 0, 31, 1)',
    'rgba(255, 0, 0, 1)'
  ]
  heatmap.set('gradient', heatmap.get('gradient') ? null : gradient);
}

function changeRadius() {
  heatmap.set('radius', heatmap.get('radius') ? null : 20);
}

function changeOpacity() {
  heatmap.set('opacity', heatmap.get('opacity') ? null : 0.2);
}

google.maps.event.addDomListener(window, 'load', initialize);