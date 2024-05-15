import React from "react";
import { Line } from "react-chartjs-2";
import { ChartOptions } from "chart.js/auto";

export default function HomeGraphTransactions() {
  const transactionData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Transações",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  const chartOptions: ChartOptions<"line"> = {
    scales: {
      x: {
        type: "time",
        time: {
          unit: "month",
          displayFormats: {
            month: "MMM YYYY",
          },
        },
        title: {
          display: true,
          text: "Mês",
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Número de Transações",
        },
      },
    },
  };

  return <Line data={transactionData} options={chartOptions} />;
}
