// ----------------------------------- S I D E B A R ------------------------------------

$("#side-bar").css("width", "5%");
$(".btnNameHide").hide();
let sideBar = true;
function sidebarCustomization() {
  sideBar = !sideBar;
  if (sideBar) {
    $("#side-bar").css("width", "5%");
    $(".btnNameHide").css("display", "none");
  } else {
    $("#side-bar").css("width", "20%");
    $(".btnNameHide").css("display", "block");
  }
}

$(".bx-menu").on("click", function () {
  sidebarCustomization();
});


// --------------------- media-query ----------------------

$(".bx-menu-alt-left").on("click",function(){
  $("#side-bar").css("display","visible");
  $("#side-bar").toggle()
})

//-------------------------- N A V I G A T I O N - C H A N G E S --------------------------

$("#user,#messages,#analysis,#files,#order,#map,#setting,#register").hide();

// ----buttons----

$(".nav-button>span").on("click", function () {
  $("#dashboard,#user,#messages,#analysis,#files,#order,#map,#setting,#register").hide();
  $($(this).attr("for")).show();
});

//----icons----

$(".nav-button>i").on("click", function () {
  $("#dashboard,#user,#messages,#analysis,#files,#order,#map,#setting,#register").hide();
  $($(this).attr("for")).show();
});

// --------------------------------- C H A R T S ---------------------------------------

//chart-1//
var options = {
  series: [
    {
      name: "Website Blog",
      type: "column",
      data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160],
    },
    {
      name: "Social Media",
      type: "line",
      data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16],
    },
  ],
  chart: {
    height: 350,
    type: "line",
  },
  stroke: {
    width: [0, 4],
  },
  title: {
    text: "Traffic Sources",
  },
  dataLabels: {
    enabled: true,
    enabledOnSeries: [1],
  },
  labels: [
    "01 Jan 2001",
    "02 Jan 2001",
    "03 Jan 2001",
    "04 Jan 2001",
    "05 Jan 2001",
    "06 Jan 2001",
    "07 Jan 2001",
    "08 Jan 2001",
    "09 Jan 2001",
    "10 Jan 2001",
    "11 Jan 2001",
    "12 Jan 2001",
  ],
  xaxis: {
    type: "datetime",
  },
  yaxis: [
    {
      title: {
        text: "Website Blog",
      },
    },
    {
      opposite: true,
      title: {
        text: "Social Media",
      },
    },
  ],
};

var chart = new ApexCharts(document.querySelector("#chart1"), options);
chart.render();

// --------- chart-2

var options = {
  series: [
    {
      name: "Cash Flow",
      data: [
        1.45, 5.42, 5.9, -0.42, -12.6, -18.1, -18.2, -14.16, -11.1, -6.09, 0.34,
        3.88, 13.07, 5.8, 2, 7.37, 8.1, 13.57, 15.75, 17.1, 19.8, -27.03, -54.4,
        -47.2, -43.3, -18.6, -48.6, -41.1, -39.6, -37.6, -29.4, -21.4, -2.4,
      ],
    },
  ],
  chart: {
    type: "bar",
    height: 350,
  },
  plotOptions: {
    bar: {
      colors: {
        ranges: [
          {
            from: -100,
            to: -46,
            color: "#F15B46",
          },
          {
            from: -45,
            to: 0,
            color: "#FEB019",
          },
        ],
      },
      columnWidth: "80%",
    },
  },
  dataLabels: {
    enabled: false,
  },
  yaxis: {
    title: {
      text: "Growth",
    },
    labels: {
      formatter: function (y) {
        return y.toFixed(0) + "%";
      },
    },
  },
  xaxis: {
    type: "datetime",
    categories: [
      "2011-01-01",
      "2011-02-01",
      "2011-03-01",
      "2011-04-01",
      "2011-05-01",
      "2011-06-01",
      "2011-07-01",
      "2011-08-01",
      "2011-09-01",
      "2011-10-01",
      "2011-11-01",
      "2011-12-01",
      "2012-01-01",
      "2012-02-01",
      "2012-03-01",
      "2012-04-01",
      "2012-05-01",
      "2012-06-01",
      "2012-07-01",
      "2012-08-01",
      "2012-09-01",
      "2012-10-01",
      "2012-11-01",
      "2012-12-01",
      "2013-01-01",
      "2013-02-01",
      "2013-03-01",
      "2013-04-01",
      "2013-05-01",
      "2013-06-01",
      "2013-07-01",
      "2013-08-01",
      "2013-09-01",
    ],
    labels: {
      rotate: -90,
    },
  },
};

var chart = new ApexCharts(document.querySelector("#chart2"), options);
chart.render();

// ------------ real time charts

window.Apex = {
  chart: {
    foreColor: '#fff',
    toolbar: {
      show: false
    },
  },
  colors: ['#FCCF31', '#17ead9', '#f02fc2'],
  stroke: {
    width: 3
  },
  dataLabels: {
    enabled: false
  },
  grid: {
    borderColor: "#40475D",
  },
  xaxis: {
    axisTicks: {
      color: '#333'
    },
    axisBorder: {
      color: "#333"
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      gradientToColors: ['#F55555', '#6078ea', '#6094ea']
    },
  },
  tooltip: {
    theme: 'dark',
    x: {
      formatter: function (val) {
        return moment(new Date(val)).format("HH:mm:ss")
      }
    }
  },
  yaxis: {
    decimalsInFloat: 2,
    opposite: true,
    labels: {
      offsetX: -10
    }
  }
};

var trigoStrength = 3
var iteration = 11

function getRandom() {
  var i = iteration;
  return (Math.sin(i / trigoStrength) * (i / trigoStrength) + i / trigoStrength + 1) * (trigoStrength * 2)
}

function getRangeRandom(yrange) {
  return Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
}

function generateMinuteWiseTimeSeries(baseval, count, yrange) {
  var i = 0;
  var series = [];
  while (i < count) {
    var x = baseval;
    var y = ((Math.sin(i / trigoStrength) * (i / trigoStrength) + i / trigoStrength + 1) * (trigoStrength * 2))

    series.push([x, y]);
    baseval += 300000;
    i++;
  }
  return series;
}



function getNewData(baseval, yrange) {
  var newTime = baseval + 300000;
  return {
    x: newTime,
    y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
  }
}

var optionsColumn = {
  chart: {
    height: 350,
    type: 'bar',
    animations: {
      enabled: false
    },
    events: {
      animationEnd: function (chartCtx, opts) {
        const newData = chartCtx.w.config.series[0].data.slice()
        newData.shift()
        window.setTimeout(function () {
          chartCtx.updateOptions({
            series: [{
              data: newData
            }],
            xaxis: {
              min: chartCtx.minX,
              max: chartCtx.maxX
            },
            subtitle: {
              text: parseInt(getRangeRandom({min: 1, max: 20})).toString() + '%',
            }
          }, false, false)
        }, 300)
      }
    },
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: 0,
  },
  series: [{
    name: 'Load Average',
    data: generateMinuteWiseTimeSeries(new Date("12/12/2016 00:20:00").getTime(), 12, {
      min: 10,
      max: 110
    })
  }],
  title: {
    text: 'Load Average',
    align: 'left',
    style: {
      fontSize: '12px'
    }
  },
  subtitle: {
    text: '20%',
    floating: true,
    align: 'right',
    offsetY: 0,
    style: {
      fontSize: '22px'
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'dark',
      type: 'vertical',
      shadeIntensity: 0.5,
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 0.8,
      stops: [0, 100]
    }
  },
  xaxis: {
    type: 'datetime',
    range: 2700000
  },
  legend: {
    show: true
  },
}



var chartColumn = new ApexCharts(
  document.querySelector("#chart3"),
  optionsColumn
);
chartColumn.render()

var optionsLine = {
  chart: {
    height: 350,
    type: 'line',
    stacked: true,
    animations: {
      enabled: true,
      easing: 'linear',
      dynamicAnimation: {
        speed: 1000
      }
    },
    dropShadow: {
      enabled: true,
      opacity: 0.3,
      blur: 5,
      left: -7,
      top: 22
    },
    events: {
      animationEnd: function (chartCtx, opts) {
        const newData1 = chartCtx.w.config.series[0].data.slice()
        newData1.shift()
        const newData2 = chartCtx.w.config.series[1].data.slice()
        newData2.shift()

        
        if (opts.el.node.getAttribute('index') === '0') {
          window.setTimeout(function () {
            chartCtx.updateOptions({
              series: [{
                data: newData1
              }, {
                data: newData2
              }],
              subtitle: {
                text: parseInt(getRandom() * Math.random()).toString(),
              }
            }, false, false)
          }, 300)
        }

      }
    },
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight',
    width: 5,
  },
  grid: {
    padding: {
      left: 0,
      right: 0
    }
  },
  markers: {
    size: 0,
    hover: {
      size: 0
    }
  },
  series: [{
    name: 'Running',
    data: generateMinuteWiseTimeSeries(new Date("12/12/2016 00:20:00").getTime(), 12, {
      min: 30,
      max: 110
    })
  }, {
    name: 'Waiting',
    data: generateMinuteWiseTimeSeries(new Date("12/12/2016 00:20:00").getTime(), 12, {
      min: 30,
      max: 110
    })
  }],
  xaxis: {
    type: 'datetime',
    range: 2700000
  },
  title: {
    text: 'Processes',
    align: 'left',
    style: {
      fontSize: '12px'
    }
  },
  subtitle: {
    text: '20',
    floating: true,
    align: 'right',
    offsetY: 0,
    style: {
      fontSize: '22px'
    }
  },
  legend: {
    show: true,
    floating: true,
    horizontalAlign: 'left',
    onItemClick: {
      toggleDataSeries: false
    },
    position: 'top',
    offsetY: -28,
    offsetX: 60
  },
}

var chartLine = new ApexCharts(
  document.querySelector("#chart4"),
  optionsLine
);
chartLine.render()

var optionsCircle = {
  chart: {
    type: 'radialBar',
    height: 320,
    offsetY: -30,
    offsetX: 20
  },
  plotOptions: {
    radialBar: {
      size: undefined,
      inverseOrder: false,
      hollow: {
        margin: 5,
        size: '48%',
        background: 'transparent',
      },
      track: {
        show: true,
        background: '#40475D',
        strokeWidth: '10%',
        opacity: 1,
        margin: 3, 
      },


    },
  },
  series: [71, 63],
  labels: ['Device 1', 'Device 2'],
  legend: {
    show: true,
    position: 'left',
    offsetX: -30,
    offsetY: 10,
    formatter: function (val, opts) {
      return val + " - " + opts.w.globals.series[opts.seriesIndex] + '%'
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'dark',
      type: 'horizontal',
      shadeIntensity: 0.5,
      inverseColors: true,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100]
    }
  }
}

var chartCircle = new ApexCharts(document.querySelector('#chart5'), optionsCircle);
chartCircle.render();

var optionsProgress1 = {
  chart: {
    height: 70,
    type: 'bar',
    stacked: true,
    sparkline: {
      enabled: true
    }
  },
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: '20%',
      colors: {
        backgroundBarColors: ['#40475D']
      }
    },
  },
  stroke: {
    width: 0,
  },
  series: [{
    name: 'Process 1',
    data: [44]
  }],
  title: {
    floating: true,
    offsetX: -10,
    offsetY: 5,
    text: 'Process 1'
  },
  subtitle: {
    floating: true,
    align: 'right',
    offsetY: 0,
    text: '44%',
    style: {
      fontSize: '20px'
    }
  },
  tooltip: {
    enabled: false
  },
  xaxis: {
    categories: ['Process 1'],
  },
  yaxis: {
    max: 100
  },
  fill: {
    opacity: 1
  }
}

var chartProgress1 = new ApexCharts(document.querySelector('#chart6'), optionsProgress1);
chartProgress1.render();


var optionsProgress2 = {
  chart: {
    height: 70,
    type: 'bar',
    stacked: true,
    sparkline: {
      enabled: true
    }
  },
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: '20%',
      colors: {
        backgroundBarColors: ['#40475D']
      }
    },
  },
  colors: ['#17ead9'],
  stroke: {
    width: 0,
  },
  series: [{
    name: 'Process 2',
    data: [80]
  }],
  title: {
    floating: true,
    offsetX: -10,
    offsetY: 5,
    text: 'Process 2'
  },
  subtitle: {
    floating: true,
    align: 'right',
    offsetY: 0,
    text: '80%',
    style: {
      fontSize: '20px'
    }
  },
  tooltip: {
    enabled: false
  },
  xaxis: {
    categories: ['Process 2'],
  },
  yaxis: {
    max: 100
  },
  fill: {
    type: 'gradient',
    gradient: {
      inverseColors: false,
      gradientToColors: ['#6078ea']
    }
  },
}

var chartProgress2 = new ApexCharts(document.querySelector('#chart7'), optionsProgress2);
chartProgress2.render();


var optionsProgress3 = {
  chart: {
    height: 70,
    type: 'bar',
    stacked: true,
    sparkline: {
      enabled: true
    }
  },
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: '20%',
      colors: {
        backgroundBarColors: ['#40475D']
      }
    },
  },
  colors: ['#f02fc2'],
  stroke: {
    width: 0,
  },
  series: [{
    name: 'Process 3',
    data: [74]
  }],
  fill: {
    type: 'gradient',
    gradient: {
      gradientToColors: ['#6094ea']
    }
  },
  title: {
    floating: true,
    offsetX: -10,
    offsetY: 5,
    text: 'Process 3'
  },
  subtitle: {
    floating: true,
    align: 'right',
    offsetY: 0,
    text: '74%',
    style: {
      fontSize: '20px'
    }
  },
  tooltip: {
    enabled: false
  },
  xaxis: {
    categories: ['Process 3'],
  },
  yaxis: {
    max: 100
  },
}

var chartProgress3 = new ApexCharts(document.querySelector('#chart8'), optionsProgress3);
chartProgress3.render();

window.setInterval(function () {

  iteration++;

  chartColumn.updateSeries([{
    data: [...chartColumn.w.config.series[0].data,
      [
        chartColumn.w.globals.maxX + 300000,
        getRandom()
      ]
    ]
  }])

  chartLine.updateSeries([{
    data: [...chartLine.w.config.series[0].data,
      [
        chartLine.w.globals.maxX + 300000,
        getRandom()
      ]
    ]
  }, {
    data: [...chartLine.w.config.series[1].data,
      [
        chartLine.w.globals.maxX + 300000,
        getRandom()
      ]
    ]
  }])

  chartCircle.updateSeries([getRangeRandom({ min: 10, max: 100 }), getRangeRandom({ min: 10, max: 100 })])

  var p1Data = getRangeRandom({ min: 10, max: 100 });
  chartProgress1.updateOptions({
    series: [{
      data: [p1Data]
    }],
    subtitle: {
      text: p1Data + "%"
    }
  })

  var p2Data = getRangeRandom({ min: 10, max: 100 });
  chartProgress2.updateOptions({
    series: [{
      data: [p2Data]
    }],
    subtitle: {
      text: p2Data + "%"
    }
  })

  var p3Data = getRangeRandom({ min: 10, max: 100 });
  chartProgress3.updateOptions({
    series: [{
      data: [p3Data]
    }],
    subtitle: {
      text: p3Data + "%"
    }
  })



}, 3000);

// calander

var calendarInstance1 = new calendarJs("calendar", {
  manualEditingEnabled: true,
});
//----------------------------------- H E A D L I N E - J S -----------------------------------

$(function () {
  $(".selector").animatedHeadline({
    animationType: "type",
  });
});


// --------------- L O G I N - P A G E  ------------------


$(document).ready(function(){
  $('.sign-up').hide();

     
  $('.btn-1').on('click',function(){
  $('.sign-in').hide(150);    
  $('.sign-up').show(150);    
  $('.form-main-banner').addClass('.sign-up');    
  });

  $('.btn-2').on('click',function(){
    $('.sign-up').hide(150);    
  $('.sign-in').show(150); 
    $('.form-main-banner').removeClass('.sign-up');     
  });
})