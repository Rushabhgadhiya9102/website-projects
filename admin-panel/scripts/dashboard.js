// -------------------- S I D E B A R -----------------

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

// animation

  AOS.init();

//-------- N A V I G A T I O N - C H A N G E S ---------

$("#user,#icons,#register").hide();

// ----buttons----

$(".nav-button>span").on("click", function () {
  $("#dashboard,#user,#icons,#register").hide();
  $($(this).attr("for")).show();
});

//----icons----

$(".nav-button>i").on("click", function () {
  $("#dashboard,#user,#icons,#register").hide();
  $($(this).attr("for")).show();
});

// --------------- C H A R T S -----------------


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
  series: [{
  name: 'Cash Flow',
  data: [1.45, 5.42, 5.9, -0.42, -12.6, -18.1, -18.2, -14.16, -11.1, -6.09, 0.34, 3.88, 13.07,
    5.8, 2, 7.37, 8.1, 13.57, 15.75, 17.1, 19.8, -27.03, -54.4, -47.2, -43.3, -18.6, -
    48.6, -41.1, -39.6, -37.6, -29.4, -21.4, -2.4
  ]
}],
  chart: {
  type: 'bar',
  height: 350
},
plotOptions: {
  bar: {
    colors: {
      ranges: [{
        from: -100,
        to: -46,
        color: '#F15B46'
      }, {
        from: -45,
        to: 0,
        color: '#FEB019'
      }]
    },
    columnWidth: '80%',
  }
},
dataLabels: {
  enabled: false,
},
yaxis: {
  title: {
    text: 'Growth',
  },
  labels: {
    formatter: function (y) {
      return y.toFixed(0) + "%";
    }
  }
},
xaxis: {
  type: 'datetime',
  categories: [
    '2011-01-01', '2011-02-01', '2011-03-01', '2011-04-01', '2011-05-01', '2011-06-01',
    '2011-07-01', '2011-08-01', '2011-09-01', '2011-10-01', '2011-11-01', '2011-12-01',
    '2012-01-01', '2012-02-01', '2012-03-01', '2012-04-01', '2012-05-01', '2012-06-01',
    '2012-07-01', '2012-08-01', '2012-09-01', '2012-10-01', '2012-11-01', '2012-12-01',
    '2013-01-01', '2013-02-01', '2013-03-01', '2013-04-01', '2013-05-01', '2013-06-01',
    '2013-07-01', '2013-08-01', '2013-09-01'
  ],
  labels: {
    rotate: -90
  }
}
};

var chart = new ApexCharts(document.querySelector("#chart2"), options);
chart.render();


// calander

var calendarInstance1 = new calendarJs( "calendar", {
  manualEditingEnabled: true
  
} );
//------------- H E A D L I N E J S -------------

$(function() {
  $('.selector').animatedHeadline({
      animationType: 'type'
  });
})
