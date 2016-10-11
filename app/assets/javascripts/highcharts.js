
$(function () { 
    var myChart = Highcharts.chart('sampleChart', {
        chart: {
            type: 'pie'
        },
        title: {
            text: "Frequently Appearing Words In DFW's '9/11: The View From the Midwest'"
        },
        plotOptions: {
        	allowPointSelect: true,
        	cursor: 'pointer',
        	dataLabels: {
        		enabled: true,
        		format: '<strong>{point.name}</strong>: {point.percentage:.1f} %',
        		style: {
        			color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
        		}
        	}
        },
        series: [{
            name: 'Frequency',
            data: [{
            	name: 'Terror',
            	y: 9.8
            } , {
            	name: 'John',
            	y: 8.5
        	}, {
        		name: 'Sadness',
        		y: 5.5
        	}, {
        		name: 'Men',
        		y: 20.5
        	}, {
        		name: 'Other',
        		y: 55.7 
        	}]
        }]
    });
});

