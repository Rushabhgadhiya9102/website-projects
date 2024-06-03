// ------------------- C H A R T - 1 -----------------------

var options = {
  series: [70],
  chart: {
    height: 350,
    type: "radialBar",
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: "70%",
      },
    },
  },
  labels: ["document"],
};

var chart = new ApexCharts(document.querySelector("#file-range-1"), options);
chart.render();

//   ------------------------ C H A R T - 2 -----------------------------
var options = {
  series: [40],
  chart: {
    height: 350,
    type: "radialBar",
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: "70%",
      },
    },
  },
  labels: ["app"],
};

var chart = new ApexCharts(document.querySelector("#file-range-2"), options);
chart.render();

//   ------------------------ C H A R T - 3 -----------------------------

var options = {
  series: [80],
  chart: {
    height: 350,
    type: "radialBar",
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: "70%",
      },
    },
  },
  labels: ["code"],
};

var chart = new ApexCharts(document.querySelector("#file-range-3"), options);
chart.render();

//   ------------------------ C H A R T - 4 -----------------------------

var options = {
  series: [30],
  chart: {
    height: 350,
    type: "radialBar",
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: "70%",
      },
    },
  },
  labels: ["video"],
};

var chart = new ApexCharts(document.querySelector("#file-range-4"), options);
chart.render();
