// Load google charts
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// Draw the chart and set the chart values
function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Task', 'Known to me'],
        ['HTML & CSS', 4],
        ['JavaScript', 2],
        ['C/C++/JAVA', 3],
        ['DBMS', 3],
        ['React (JavaScript Library)', 2],
        ['Python', 2]
]);

  // Optional; add a title and set the width and height of the chart
  var options = {'title':'Known to Me', 'width':"100%", 'height':"100%", chartArea: {
        left: "3%",
        top: "3%",
        height: "98%",
        width: "98%"
    }};

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
}

//clock
function realtimeClock() {
    var rtClock =  new Date();
    
    var hours = rtClock.getHours();
    var  minutes = rtClock.getMinutes();
    var seconds = rtClock.getSeconds();
    
    
    
// Add AM and PM System
    var amPm = (hours < 12 ) ? "AM" : "PM";
    
// Convert the hours component to 12-hour format
    hours = (hours > 12 ) ? hours - 12 : hours;
    
// Pad the hours, minutes and seconds with leading zeros
    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);
    
// Display the clock
    document.getElementById('clock').innerHTML = hours + " : " + minutes + " : " + seconds + " " + amPm;
    var t = setTimeout(realtimeClock,500)
}