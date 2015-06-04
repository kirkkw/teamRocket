

//C3 Pie Chart for Gender 

//(function() {
//  $.getJSON( '/delphidata')
//    .done(function( data ) {
//      var yCounts = data.users.map(function(item){
//        return item.percent_current_smokers;
//      });

//       yCounts.unshift('Gender Smokes');



/////////////////////////////Line chart////////////////////


var chart = c3.generate({
	bindto: '#chart',
    data: {
        x: 'x',
//        xFormat: '%Y%m%d', // 'xFormat' can be used as custom format of 'x'
        columns: [
            ['x', '2002-01-01', '2004-01-01', '2006-01-01', '2008-01-01', '2010-01-01', '2012-01-01'],
//            ['x', '20130101', '20130102', '20130103', '20130104', '20130105', '20130106'],
            ['male', 16.2, 14.4, 17.1, 12.3, 16.3, 13], //make
            ['female', 15.7, 11.9, 13.7, 16.8, 11.1, 8]	//female
        ]
    },
    axis: {
        x: {
            type: 'timeseries',
            tick: {
                format: '%Y-%m-%d'
            }
        }
    }
});


///////////Stacked Bar chart///////////////////
/*
    var chart = c3.generate({
    bindto: '#chart',
    data: {
    	x: 'x',
        columns: [
        	['x', 2002, 2004, 2006, 2008, 2010, 2012],
            ['male', 16.2, 14.4, 17.1, 12.3, 16.3, 13], //make
            ['female', 15.7, 11.9, 13.7, 16.8, 11.1, 8]	//female
        ],
        type: 'bar',
        groups: [
            ['male', 'female']
        ]
    },
    grid: {
        y: {
            lines: [{value:0}]
        }
    }
});

*/



//   });
//})();


