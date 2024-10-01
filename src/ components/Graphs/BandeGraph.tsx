import React from "react";
import Chart from "react-apexcharts";

const barChartOptions = {
  chart: {
    id: "basic-bar",
    toolbar: {
      show: false,
    },
  },
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
  },
  responsive: [
    {
      breakpoint: 1536, // '2xl'
      options: {
        chart: {
          width: "1200px",
          height: "500px",
        },
      },
    },
    {
      breakpoint: 1280, // 'xl'
      options: {
        chart: {
          width: "970px",
          height: "450px",
        },
      },
    },
    {
      breakpoint: 1024, // 'lg'
      options: {
        chart: {
          width: "100px",
          height: "400px",
        },
      },
    },
    {
      breakpoint: 768, // 'md'
      options: {
        chart: {
          width: "600px",
          height: "350px",
        },
      },
    },
    {
      breakpoint: 640, // 'sm'
      options: {
        chart: {
          width: "350px",
          height: "300px",
        },
      },
    },
  ],
};

const barChartSeries = [
  {
    name: "series-1",
    data: [30, 40, 45, 50, 49, 60, 70, 91],
  },
];

const BandeGraph: React.FC = () => {
  return (
    <div className="bg-white flex">
      <Chart type="line" series={barChartSeries} options={barChartOptions} />
    </div>
  );
};

export default BandeGraph;
