import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

// Register elements with ChartJS
ChartJS.register(ArcElement, Tooltip, Legend);

function DoughnutChart({ holdings = [] }) {
  // Extract stock names and calculate current valuations
  const labels = holdings.map((h) => h.name);
  const dataValues = holdings.map((h) => h.qty * h.price);

  const colors = [
    "#4184f3", "#ff5722", "#4caf50", "#ffc107", 
    "#9c27b0", "#00bcd4", "#e91e63", "#607d8b", 
    "#795548", "#8bc34a", "#3f51b5", "#009688"
  ];

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Allocation Value (\u20B9)",
        data: dataValues,
        backgroundColor: colors.slice(0, holdings.length),
        borderWidth: 1,
        borderColor: "#ffffff"
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right",
        labels: {
          boxWidth: 12,
          font: {
            size: 11,
            family: "Open Sans"
          },
          padding: 15
        }
      },
      tooltip: {
        titleFont: { family: "Open Sans" },
        bodyFont: { family: "Open Sans" }
      }
    }
  };

  return (
    <div style={{ position: "relative", height: "260px", width: "100%" }}>
      {holdings.length > 0 ? (
        <Doughnut data={chartData} options={chartOptions} />
      ) : (
        <div className="d-flex align-items-center justify-content-center h-100 text-muted" style={{ fontSize: "13px" }}>
          No data to generate chart.
        </div>
      )}
    </div>
  );
}

export default DoughnutChart;
