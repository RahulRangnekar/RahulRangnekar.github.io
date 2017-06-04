google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
	
	'use strict';
	
	var data_1 = google.visualization.arrayToDataTable([
		['Knowledge', 'Percent Known'],
		['Product Management', 75],
		['Not Product Management', 25],
	]);
	
	var options_1 = {
		title: 'Product Management',
		pieHole: 0.45,
		height: 225,
		width: 225,
		backgroundColor: {
			stroke: 'none',
			fill: 'transparent',
		},
		colors: ['#2980B9', '#FFF'],
		enableInteractivity: false,
		legend: 'none',
		outline: null,
		pieSliceBorderColor: 'white',
		pieSliceText: 'percentage',
		pieSliceTextStyle: {
			color: 'white',
			fontName: 'Raleway',
			fontSize: '20px',
		},
		titleTextStyle: {
			color: '#FFF',
			fontName: 'Raleway',
			fontSize: 16,
			bold: false,
			italic: false,
		}
	};
	
	var chart_1 = new google.visualization.PieChart(document.getElementById('pm-chart'));
	chart_1.draw(data_1, options_1);
	
	var data_2 = google.visualization.arrayToDataTable([
		['Knowledge', 'Percent Known'],
		['Market Strategy', 65],
		['Not Market Strategy', 35],
	]);
	
	var options_2 = {
		title: 'Market Strategy',
		pieHole: 0.45,
		height: 225,
		width: 225,
		backgroundColor: {
			stroke: 'none',
			fill: 'transparent',
		},
		colors: ['#2980B9', '#FFF'],
		enableInteractivity: false,
		legend: 'none',
		outline: null,
		pieSliceBorderColor: 'white',
		pieSliceText: 'percentage',
		pieSliceTextStyle: {
			color: 'white',
			fontName: 'Raleway',
			fontSize: '20px',
		},
		titleTextStyle: {
			color: '#FFF',
			fontName: 'Raleway',
			fontSize: 16,
			bold: false,
			italic: false,
		}
	};
	
	var chart_2 = new google.visualization.PieChart(document.getElementById('ms-chart'));
	chart_2.draw(data_2, options_2);

	var data_3 = google.visualization.arrayToDataTable([
		['Knowledge', 'Percent Known'],
		['User Research', 50],
		['Not User Research', 50],
	]);
	
	var options_3 = {
		title: 'User Research',
		pieHole: 0.45,
		height: 225,
		width: 225,
		backgroundColor: {
			stroke: 'none',
			fill: 'transparent',
		},
		colors: ['#2980B9', '#FFF'],
		enableInteractivity: false,
		legend: 'none',
		outline: null,
		pieSliceBorderColor: 'white',
		pieSliceText: 'percentage',
		pieSliceTextStyle: {
			color: 'white',
			fontName: 'Raleway',
			fontSize: '20px',
		},
		titleTextStyle: {
			color: '#FFF',
			fontName: 'Raleway',
			fontSize: 16,
			bold: false,
			italic: false,
		}
	};
	
	var chart_3 = new google.visualization.PieChart(document.getElementById('ur-chart'));
	chart_3.draw(data_3, options_3);
	
}