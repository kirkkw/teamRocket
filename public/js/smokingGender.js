


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

chart.resize({
  height: 480,
  width: 640
});


