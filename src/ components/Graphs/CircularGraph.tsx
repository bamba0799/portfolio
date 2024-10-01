
import React from "react";
import Chart from "react-apexcharts";

const CircularGraph = () => {
    const pieChartOptions = {
        chart: {
        id: "basic-pie",
        },
        labels: ["Category A", "Category B", "Category C", "Category D"],
        responsive: [
        {
            breakpoint: 1024,
            options: {
            chart: {
                width: "100%",
                height: "400px",
            },
            },
        },
        {
            breakpoint: 768,
            options: {
            chart: {
                width: "100%",
                height: "300px",
            },
            },
        },
     
        ],
    };
    
    const pieChartSeries = [44, 55, 13, 43];
    return (
        <div className="bg-white border h-full">
            <Chart type="pie"  series={pieChartSeries} options={pieChartOptions} />
        </div>
    );
    }
    export default CircularGraph;