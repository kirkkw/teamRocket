var data = '[{"race_ethnicity":"African American","year":"2001-2002","percent_current_smokers":8.2,"lower_95_percent_confidence_interval":5,"upper_95_percent_confidence_interval":11.4,"number_of_respondents":747},{"race_ethnicity":"African American","year":"2003-2004","percent_current_smokers":7.2,"lower_95_percent_confidence_interval":5.9,"upper_95_percent_confidence_interval":8.5,"number_of_respondents":1054},{"race_ethnicity":"African American","year":"2005-2006","percent_current_smokers":12.7,"lower_95_percent_confidence_interval":9.7,"upper_95_percent_confidence_interval":15.7,"number_of_respondents":1666},{"race_ethnicity":"African American","year":"2007-2008","percent_current_smokers":11.7,"lower_95_percent_confidence_interval":8.8,"upper_95_percent_confidence_interval":14.6,"number_of_respondents":1301},{"race_ethnicity":"African American","year":"2009-2010","percent_current_smokers":14.2,"lower_95_percent_confidence_interval":5.9,"upper_95_percent_confidence_interval":30.1,"number_of_respondents":1013},{"race_ethnicity":"African American","year":"2011-2012","percent_current_smokers":9.5,"lower_95_percent_confidence_interval":6.6,"upper_95_percent_confidence_interval":13.4,"number_of_respondents":1003},{"race_ethnicity":"Asian/Pacific Islander","year":"2001-2002","percent_current_smokers":13.6,"lower_95_percent_confidence_interval":11.2,"upper_95_percent_confidence_interval":16,"number_of_respondents":1978},{"race_ethnicity":"Asian/Pacific Islander","year":"2003-2004","percent_current_smokers":8.4,"lower_95_percent_confidence_interval":6.7,"upper_95_percent_confidence_interval":10.1,"number_of_respondents":2285},{"race_ethnicity":"Asian/Pacific Islander","year":"2005-2006","percent_current_smokers":10.7,"lower_95_percent_confidence_interval":9.3,"upper_95_percent_confidence_interval":12.1,"number_of_respondents":4093},{"race_ethnicity":"Asian/Pacific Islander","year":"2007-2008","percent_current_smokers":10.5,"lower_95_percent_confidence_interval":8.3,"upper_95_percent_confidence_interval":12.7,"number_of_respondents":3264},{"race_ethnicity":"Asian/Pacific Islander","year":"2009-2010","percent_current_smokers":10.3,"lower_95_percent_confidence_interval":7.5,"upper_95_percent_confidence_interval":13.1,"number_of_respondents":3075},{"race_ethnicity":"Asian/Pacific Islander","year":"2011-2012","percent_current_smokers":5.9,"lower_95_percent_confidence_interval":4.8,"upper_95_percent_confidence_interval":7.2,"number_of_respondents":2785},{"race_ethnicity":"Hispanic/Latino","year":"2001-2002","percent_current_smokers":14,"lower_95_percent_confidence_interval":12.4,"upper_95_percent_confidence_interval":15.6,"number_of_respondents":3433},{"race_ethnicity":"Hispanic/Latino","year":"2003-2004","percent_current_smokers":13.5,"lower_95_percent_confidence_interval":12,"upper_95_percent_confidence_interval":15,"number_of_respondents":4691},{"race_ethnicity":"Hispanic/Latino","year":"2005-2006","percent_current_smokers":14.3,"lower_95_percent_confidence_interval":13.1,"upper_95_percent_confidence_interval":15.5,"number_of_respondents":8331},{"race_ethnicity":"Hispanic/Latino","year":"2007-2008","percent_current_smokers":13.9,"lower_95_percent_confidence_interval":12.8,"upper_95_percent_confidence_interval":15,"number_of_respondents":10099},{"race_ethnicity":"Hispanic/Latino","year":"2009-2010","percent_current_smokers":14.1,"lower_95_percent_confidence_interval":13.1,"upper_95_percent_confidence_interval":15.1,"number_of_respondents":11735},{"race_ethnicity":"Hispanic/Latino","year":"2011-2012","percent_current_smokers":10.4,"lower_95_percent_confidence_interval":9.2,"upper_95_percent_confidence_interval":11.7,"number_of_respondents":9549},{"race_ethnicity":"Non-Hispanic White","year":"2001-2002","percent_current_smokers":19.9,"lower_95_percent_confidence_interval":17.7,"upper_95_percent_confidence_interval":22.1,"number_of_respondents":5477},{"race_ethnicity":"Non-Hispanic White","year":"2003-2004","percent_current_smokers":15.8,"lower_95_percent_confidence_interval":14.8,"upper_95_percent_confidence_interval":16.8,"number_of_respondents":6152},{"race_ethnicity":"Non-Hispanic White","year":"2005-2006","percent_current_smokers":18.3,"lower_95_percent_confidence_interval":17,"upper_95_percent_confidence_interval":19.6,"number_of_respondents":9902},{"race_ethnicity":"Non-Hispanic White","year":"2007-2008","percent_current_smokers":17.6,"lower_95_percent_confidence_interval":15.8,"upper_95_percent_confidence_interval":19.4,"number_of_respondents":6863},{"race_ethnicity":"Non-Hispanic White","year":"2009-2010","percent_current_smokers":14.7,"lower_95_percent_confidence_interval":13.4,"upper_95_percent_confidence_interval":16,"number_of_respondents":5972},{"race_ethnicity":"Non-Hispanic White","year":"2011-2012","percent_current_smokers":13,"lower_95_percent_confidence_interval":11.4,"upper_95_percent_confidence_interval":14.7,"number_of_respondents":5041}]';

var json = JSON.parse(data);

console.log(json[0]);

var chart = c3.generate({
    bindto: '#chart3',
    data: {
      x: 'x',
        columns: [
        ['x', '2002-01-01', '2004-01-01', '2006-01-01', '2008-01-01', '2010-01-01', '2012-01-01'],
            [json[0].race_ethnicity, json[0].percent_current_smokers, json[1].percent_current_smokers, json[2].percent_current_smokers, json[3].percent_current_smokers, json[4].percent_current_smokers, json[5].percent_current_smokers], //African-American
            [json[6].race_ethnicity, json[6].percent_current_smokers, json[7].percent_current_smokers, json[8].percent_current_smokers, json[9].percent_current_smokers, json[10].percent_current_smokers, json[11].percent_current_smokers], //Asian-American
            [json[12].race_ethnicity, json[12].percent_current_smokers, json[13].percent_current_smokers, json[14].percent_current_smokers, json[15].percent_current_smokers, json[16].percent_current_smokers, json[17].percent_current_smokers], //Hispanic
            [json[18].race_ethnicity, json[18].percent_current_smokers, json[19].percent_current_smokers, json[20].percent_current_smokers, json[21].percent_current_smokers, json[22].percent_current_smokers, json[23].percent_current_smokers]//White
        ],
        type: 'bar'
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

