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

var data = '[{"Region":5,"SRA":38,"Area":"Alpine","Year":2012,"Total Households":5347,"Median Household Income":"$91041.00"},{"Region":6,"SRA":63,"Area":"Anza-Borrego","Year":2012,"Total Households":1411,"Median Household Income":"$49948.00"},{"Region":1,"SRA":41,"Area":"Carlsbad","Year":2012,"Total Households":45184,"Median Household Income":"$89108.00"},{"Region":3,"SRA":1,"Area":"Central San Diego","Year":2012,"Total Households":73644,"Median Household Income":"$52607.00"},{"Region":4,"SRA":21,"Area":"Chula Vista","Year":2012,"Total Households":36812,"Median Household Income":"$47821.00"},{"Region":2,"SRA":11,"Area":"Coastal","Year":2012,"Total Households":34553,"Median Household Income":"$85455.00"},{"Region":4,"SRA":3,"Area":"Coronado","Year":2012,"Total Households":8413,"Median Household Income":"$99889.00"},{"Region":2,"SRA":13,"Area":"Del Mar-Mira Mesa","Year":2012,"Total Households":53963,"Median Household Income":"$115528.00"},{"Region":5,"SRA":34,"Area":"El Cajon","Year":2012,"Total Households":41285,"Median Household Income":"$55429.00"},{"Region":2,"SRA":17,"Area":"Elliott-Navajo","Year":2012,"Total Households":34898,"Median Household Income":"$83438.00"},{"Region":6,"SRA":50,"Area":"Escondido","Year":2012,"Total Households":50862,"Median Household Income":"$61751.00"},{"Region":6,"SRA":55,"Area":"Fallbrook","Year":2012,"Total Households":17235,"Median Household Income":"$72011.00"},{"Region":5,"SRA":37,"Area":"Harbison-Crest","Year":2012,"Total Households":5428,"Median Household Income":"$83290.00"},{"Region":5,"SRA":30,"Area":"Jamul","Year":2012,"Total Households":4674,"Median Household Income":"$121168 * 10.00"},{"Region":2,"SRA":10,"Area":"Kearny Mesa","Year":2012,"Total Households":59869,"Median Household Income":"$68676.00"},{"Region":5,"SRA":33,"Area":"La Mesa","Year":2012,"Total Households":24423,"Median Household Income":"$60838.00"},{"Region":5,"SRA":61,"Area":"Laguna-Pine Valley","Year":2012,"Total Households":1771,"Median Household Income":"$69316.00"},{"Region":5,"SRA":36,"Area":"Lakeside","Year":2012,"Total Households":18952,"Median Household Income":"$71155.00"},{"Region":5,"SRA":32,"Area":"Lemon Grove","Year":2012,"Total Households":9513,"Median Household Income":"$60434.00"},{"Region":3,"SRA":6,"Area":"Mid City","Year":2012,"Total Households":55532,"Median Household Income":"$45873.00"},{"Region":2,"SRA":16,"Area":"Miramar","Year":2012,"Total Households":525,"Median Household Income":"$45498.00"},{"Region":5,"SRA":62,"Area":"Mountain Empire","Year":2012,"Total Households":2121,"Median Household Income":"$59014.00"},{"Region":6,"SRA":14,"Area":"North San Diego","Year":2012,"Total Households":39040,"Median Household Income":"$104474.00"},{"Region":4,"SRA":4,"Area":"National City","Year":2012,"Total Households":15299,"Median Household Income":"$41936.00"},{"Region":1,"SRA":42,"Area":"Oceanside","Year":2012,"Total Households":54148,"Median Household Income":"$70503.00"},{"Region":6,"SRA":60,"Area":"Palomar-Julian","Year":2012,"Total Households":2266,"Median Household Income":"$57946.00"},{"Region":6,"SRA":54,"Area":"Pauma","Year":2012,"Total Households":2187,"Median Household Income":"$83094.00"},{"Region":1,"SRA":43,"Area":"Pendleton","Year":2012,"Total Households":6659,"Median Household Income":"$52692.00"},{"Region":2,"SRA":2,"Area":"Peninsula","Year":2012,"Total Households":25226,"Median Household Income":"$71475.00"},{"Region":6,"SRA":15,"Area":"Poway","Year":2012,"Total Households":30054,"Median Household Income":"$117506.00"},{"Region":6,"SRA":39,"Area":"Ramona","Year":2012,"Total Households":11334,"Median Household Income":"$88991.00"},{"Region":1,"SRA":40,"Area":"San Dieguito","Year":2012,"Total Households":35520,"Median Household Income":"$103305.00"},{"Region":6,"SRA":51,"Area":"San Marcos","Year":2012,"Total Households":30536,"Median Household Income":"$65489.00"},{"Region":5,"SRA":35,"Area":"Santee","Year":2012,"Total Households":17577,"Median Household Income":"$78300.00"},{"Region":4,"SRA":22,"Area":"South Bay","Year":2012,"Total Households":36489,"Median Household Income":"$54417.00"},{"Region":3,"SRA":5,"Area":"Southeastern San Diego","Year":2012,"Total Households":42049,"Median Household Income":"$56626.00"},{"Region":5,"SRA":31,"Area":"Spring Valley","Year":2012,"Total Households":27737,"Median Household Income":"$74965.00"},{"Region":4,"SRA":20,"Area":"Sweetwater","Year":2012,"Total Households":40239,"Median Household Income":"$94927.00"},{"Region":2,"SRA":12,"Area":"University","Year":2012,"Total Households":24495,"Median Household Income":"$73746.00"},{"Region":6,"SRA":53,"Area":"Valley Center","Year":2012,"Total Households":8115,"Median Household Income":"$85004.00"},{"Region":1,"SRA":52,"Area":"Vista","Year":2012,"Total Households":32077,"Median Household Income":"$61044.00"},{"Region":null,"SRA":null,"Area":"San Diego County","Year":2012,"Total Households":1067462,"Median Household Income":"$73798.00"}]';

var json = JSON.parse(data);

console.log(json[0]["Median Household Income"]);

var map, pointarray, heatmap;

var taxiData = [
  {location: new google.maps.LatLng(32.8344, -116.7706), weight: 91041/121168 * 10}, //Alpine
  {location: new google.maps.LatLng(33.2592, -116.3992), weight: 49948/121168 * 10}, //"Anza-Borrego"
  {location: new google.maps.LatLng(33.1219, -117.2969), weight: 89108/121168 * 10}, //"Carlsbad"
  {location: new google.maps.LatLng(32.7150, -117.1625), weight: 52607/121168 * 10}, //"Central San Diego" or just san diego
  {location: new google.maps.LatLng(32.6278, -117.0481), weight: 47821/121168 * 10}, //"Chula Vista"
  {location: new google.maps.LatLng(32.8426, -117.2577), weight: 34553/121168 * 10}, //"Coastal" or La jolla?
  {location: new google.maps.LatLng(32.6781, -117.1725), weight: 99889/121168 * 10}, //"Coronado"
  {location: new google.maps.LatLng(32.918238, -117.138236), weight: 115528/121168 * 10}, //Mira Mesa
  {location: new google.maps.LatLng(32.7983, -116.9600), weight: 55429/121168 * 10}, //"El Cajon"
  {location: new google.maps.LatLng(32.753190, -117.109972), weight: 83438/121168 * 10}, //"Elliott-Navajo"
  {location: new google.maps.LatLng(33.1247, -117.0808), weight: 61751/121168 * 10}, //"Escondido"
  {location: new google.maps.LatLng(33.3717, -117.2361), weight: 72011/121168 * 10}, //"Fallbrook"
  {location: new google.maps.LatLng(32.8203, -116.8300), weight: 83290/121168 * 10}, //"Harbison-Crest"
  {location: new google.maps.LatLng(32.7267, -116.8822), weight: 121168/121168 * 10}, //"Jamul"
  {location: new google.maps.LatLng(32.8250, -117.1392), weight: 68676/121168 * 10}, //"Kearny Mesa"
  {location: new google.maps.LatLng(32.7714, -117.0228), weight: 60838/121168 * 10}, //"La Mesa"
  {location: new google.maps.LatLng(32.9053, -116.6241), weight: 69316/121168 * 10}, //"Laguna-Pine Valley" 
  {location: new google.maps.LatLng(32.8572, -116.9213), weight: 71155/121168 * 10}, //"Lakeside"
  {location: new google.maps.LatLng(32.7414, -117.0317), weight: 60434/121168 * 10}, //"Lemon Grove"
  {location: new google.maps.LatLng(32.7400, -117.1000), weight: 45873/121168 * 10}, //"Mid City"
  {location: new google.maps.LatLng(32.8864, -117.1578), weight: 45498/121168 * 10}, //"Miramar"
  {location: new google.maps.LatLng(32.6087, -116.4747), weight: 59014/121168 * 10}, //Mountain Empire
  {location: new google.maps.LatLng(33.18754, -117.28365), weight: 104474/121168 * 10}, //North San Diego
  {location: new google.maps.LatLng(32.6781, -117.0992), weight: 41936/121168 * 10}, //"National City"
  {location: new google.maps.LatLng(33.2117, -117.3258), weight: 70503/121168 * 10}, //"Oceanside"
  {location: new google.maps.LatLng(33.2417,  -116.7014), weight: 57946/121168 * 10}, //Palomar-Julian
  {location: new google.maps.LatLng(33.3034, -116.9814), weight: 83094/121168 * 10}, //"Pauma"
  {location: new google.maps.LatLng(33.3333, -117.4167), weight: 52692/121168 * 10}, //"Pendleton"
  {location: new google.maps.LatLng(32.6750,  -117.1221), weight: 71475/121168 * 10}, // Peninsula
  {location: new google.maps.LatLng(32.9700, -117.0386), weight: 117506/121168 * 10}, //"Poway"
  {location: new google.maps.LatLng(33.0358, -116.8706), weight: 88991/121168 * 10}, //"Ramona"
  {location: new google.maps.LatLng(32.9980,  -117.2339), weight: 103305/121168 * 10}, //San Dieguito
  {location: new google.maps.LatLng(33.1419, -117.1703), weight: 65489/121168 * 10}, //"San Marcos"
  {location: new google.maps.LatLng(32.8697, 116.9711), weight: 78300/121168 * 10}, //"Santee"
  {location: new google.maps.LatLng(32.36 , -117.0702), weight: 54417/121168 * 10}, //South Bay
  {location: new google.maps.LatLng(32.704256, -117.043411), weight: 56626/121168 * 10}, //Southeastern San Diego
  {location: new google.maps.LatLng(32.7344 , -116.9814), weight: 74965/121168 * 10}, //"Spring Valley"
  {location: new google.maps.LatLng(32.6641 , -117.0412), weight: 94927/121168 * 10}, //"Sweetwater"
  {location: new google.maps.LatLng(32.7753 , -117.0722), weight: 73746/121168 * 10}, //University (San Diego State)
  {location: new google.maps.LatLng(33.2406 , -117.0142), weight: 85004/121168 * 10}, //"Valley Center"
  {location: new google.maps.LatLng(33.1936 , -117.2411), weight: 61044/121168 * 10} //"Vista""
];

var markLoc = [
  [32.8344, -116.7706, "Median Income: $91041", json[0].Area], //Alpine
  [33.2592, -116.3992, "Median Income: $49948", json[1].Area], //"Anza-Borrego"
  [33.1219, -117.2969, "Median Income: $89108", json[2].Area], //"Carlsbad"
  [32.7150, -117.1625, "Median Income: $52607", json[3].Area], //"Central San Diego" or just san diego
  [32.6278, -117.0481, "Median Income: $47821", json[4].Area], //"Chula Vista"
  [32.8426, -117.2577, "Median Income: $34553", json[5].Area], //"Coastal" or La jolla?
  [32.6781, -117.1725, "Median Income: $99889", json[6].Area], //"Coronado"
  [32.918238, -117.138236, "Median Income: $115528", json[7].Area], //Mira Mesa
  [32.7983, -116.9600, "Median Income: $55429", json[8].Area], //"El Cajon"
  [32.753190, -117.109972, "Median Income: $83438", json[9].Area], //"Elliott-Navajo"
  [33.1247, -117.0808, "Median Income: $61751", json[10].Area], //"Escondido"
  [33.3717, -117.2361, "Median Income: $72011", json[11].Area], //"Fallbrook"
  [32.8203, -116.8300, "Median Income: $83290", json[12].Area], //"Harbison-Crest"
  [32.7267, -116.8822, "Median Income: $121167", json[13].Area], //"Jamul"
  [32.8250, -117.1392, "Median Income: $68676", json[14].Area], //"Kearny Mesa"
  [32.7714, -117.0228, "Median Income: $60838", json[15].Area], //"La Mesa"
  [32.9053, -116.6241, "Median Income: $69316", json[16].Area], //"Laguna-Pine Valley" 
  [32.8572, -116.9213, "Median Income: $71155", json[17].Area], //"Lakeside"
  [32.7414, -117.0317, "Median Income: $60434", json[18].Area], //"Lemon Grove"
  [32.7400, -117.1000, "Median Income: $45873", json[19].Area], //"Mid City"
  [32.8864, -117.1578, "Median Income: $45498", json[20].Area], //"Miramar"
  [32.6087, -116.4747, "Median Income: $59014", json[21].Area], //Mountain Empire
  [33.18754, -117.28365, "Median Income: $104474", json[22].Area], //North San Diego
  [32.6781, -117.0992, "Median Income: $41936", json[23].Area], //"National City"
  [33.2117, -117.3258, "Median Income: $70503", json[24].Area], //"Oceanside"
  [33.2417,  -116.7014, "Median Income: $57946", json[25].Area], //Palomar-Julian
  [33.3034, -116.9814, "Median Income: $83094", json[26].Area], //"Pauma"
  [33.3333, -117.4167, "Median Income: $52692", json[27].Area], //"Pendleton"
  [32.6750,  -117.1221, "Median Income: $71475", json[28].Area], // Peninsula
  [32.9700, -117.0386, "Median Income: $117506", json[29].Area], //"Poway"
  [33.0358, -116.8706, "Median Income: $88991", json[30].Area], //"Ramona"
  [32.9980,  -117.2339, "Median Income: $103305", json[31].Area], //San Dieguito
  [33.1419, -117.1703, "Median Income: $65489", json[32].Area], //"San Marcos"
  [32.8697, 116.9711, "Median Income: $78300", json[33].Area], //"Santee"
  [32.36 , -117.0702, "Median Income: $54417", json[34].Area], //South Bay
  [32.704256, -117.043411, "Median Income: $56626", json[35].Area], //Southeastern San Diego
  [32.7344 , -116.9814, "Median Income: $74965", json[36].Area], //"Spring Valley"
  [32.6641 , -117.0412, "Median Income: $94927", json[37].Area], //"Sweetwater"
  [32.7753 , -117.0722, "Median Income: $73746", json[38].Area], //University (San Diego State
  [33.2406 , -117.0142, "Median Income: $85004", json[39].Area], //"Valley Center"
  [33.1936 , -117.2411, "Median Income: $61044", json[40].Area] //"Vista"
];

var isInitialized = false;
function initialize() {
	console.log(isInitialized);
  if (!isInitialized) {
	  isInitialized = true;
  
	
  var mapOptions = {
    zoom: 15,
    center: new google.maps.LatLng(32.715701, -117.161575),
    mapTypeId: google.maps.MapTypeId.ROADMAP
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

    google.maps.event.addListener(marker, 'mouseover', (function(marker, i) {
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

    google.maps.event.addListener(marker, 'mouseout', (function(marker, i) {
         return function() {
             infowindow.close();
         }
    })(marker, i));
  }
  heatmap = new google.maps.visualization.HeatmapLayer({
    data: pointArray,
	radius: 50
  });

  heatmap.setMap(map);
  }
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
  heatmap.set('radius', heatmap.get('radius') ? null : 50);
}

function changeOpacity() {
  heatmap.set('opacity', heatmap.get('opacity') ? null : 0.2);
}

//document.getElementById('portfolioModal4').getElementsByClassName("modal-content")[0].addEventListener('mouseenter', initialize);
//google.maps.event.addDomListener(window, 'load', initialize);
//google.maps.event.trigger(map, 'resize');