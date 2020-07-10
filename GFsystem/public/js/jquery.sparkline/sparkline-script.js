// Bar chart ( New Clients)
$("#clients-bar").sparkline([70, 80, 65, 78, 58, 80, 78, 80, 70, 50, 75, 65, 80, 70, 65, 90], {
    type: 'bar',
    height: '25',
    width: '100%',
    barWidth: 10,
    barSpacing: 4,
    barColor: '#c0e2f1',
    negBarColor: '#81d4fa',
    zeroColor: '#81d4fa'
    //tooltipFormat: $.spformat('{{value}}', 'tooltip-class')
});

// Line chart ( New Invoice)
$("#invoice-line").sparkline([5, 6, 7, 9, 9, 5, 3, 2, 2, 4, 6, 7, 5, 6, 7, 9, 9, 5, 3, 2, 2, 4, 6, 7], {
    type: 'line',
    width: '100%',
    height: '25',
    lineWidth: 2,
    lineColor: '#fff',
    fillColor: '#78b03b',
    highlightSpotColor: '#E1D0FF',
    highlightLineColor: '#E1D0FF',
    minSpotColor: '#f44336',
    maxSpotColor: '#4caf50',
    spotColor: '#E1D0FF',
    spotRadius: 4
    
   // //tooltipFormat: $.spformat('{{value}}', 'tooltip-class')
});


// Tristate chart (Today Profit)
$("#profit-tristate").sparkline([2, 3, 0, 4, -5, -6, 7, -2, 3, 0, 2, 3, -1, 0, 2, 3], {
    type: 'tristate',
    width: '100%',
    height: '25',
    posBarColor: '#f2a7c1',
    negBarColor: '#C7EBFC',
    barWidth: 10,
    barSpacing: 4,
    zeroAxis: false
    //tooltipFormat: $.spformat('{{value}}', 'tooltip-class')
});

// Bar + line composite charts (Total Sales)
$('#sales-compositebar').sparkline([4, 6, 7, 7, 4, 3, 2, 3, 1, 4, 6, 5, 9, 4, 6, 7, 7, 4], {
    type: 'bar',
    barColor: '#f3cd9f',
    height: '25',
    width: '100%',
    barWidth: '10',
    barSpacing: 2
    //tooltipFormat: $.spformat('{{value}}', 'tooltip-class')
});

$('#sales-compositebar').sparkline([4, 1, 5, 7, 9, 9, 8, 8, 4, 2, 5, 6, 7], {
    composite: true,
    type: 'line',
    width: '100%',
    lineWidth: 2,
    lineColor: '#fff3e0',
    fillColor: 'rgba(153,114,181,0.3)',
    highlightSpotColor: '#fff3e0',
    highlightLineColor: '#fff3e0',
    minSpotColor: '#f44336',
    maxSpotColor: '#4caf50',
    spotColor: '#fff3e0',
    spotRadius: 4
    //tooltipFormat: $.spformat('{{value}}', 'tooltip-class')
});

