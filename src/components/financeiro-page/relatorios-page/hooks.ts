import React from "react";

export default function useRelatorioController() {
  const gastosCartao = React.useMemo(() => {
    return {
      labels: ["January", "February", "March", "April"],
      datasets: [
        {
          label: "gastos no cartão",
          data: [65, 59, 80, 81],
          fill: false,
          borderColor: "rgb(45, 170, 81)",
          tension: 0.1,
          borderWidth: 2,
          pointBackgroundColor: "rgb(75, 192, 192)",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgb(75, 192, 192)",
        },
      ],
    };
  }, []);

  const [categoriaDespesa, setCategoriasDespesa] = React.useState<object>({
    labels: ["Educação", "Investimentos", "lazer", "saude"],
    datasets: [
      {
        data: [4000, 350, 856.67, 7000], // Exemplo de dados para receitas e despesas
        backgroundColor: ["rgba(75, 192, 192, 0.4)", "rgba(255, 99, 132, 0.4)"],
        borderColor: ["rgba(75, 192, 192, 1)", "rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
    ],
  });

  const graphConfigEvolucaoGraficos = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Evolução dos gastos",
      },
    },
    scales: {
      y: {
        type: "linear",
        display: true,
        position: "left",
      },
      y1: {
        type: "linear",
        display: true,
        position: "right",
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };

  const graphConfigRelatorioCategoriaDespesa = {
    responsive: true,
    type: "doughnut",
    maintainAspectRatio: false,
    data: categoriaDespesa,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Despesas por categoria",
      },
    },
  };

  const configGraphGastosCartao = {
    type: "line",
    data: gastosCartao,
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: "Gastos com cartão de crédito",
        },
      },
      interaction: {
        mode: "index",
        intersect: false,
      },
      scales: {
        x: {
          display: true,
          title: {
            display: true,
            text: "Month",
          },
        },
        y: {
          display: true,
          title: {
            display: true,
            text: "Value",
          },
        },
        animation: {
          duration: 5000,
          easing: "easeInBounce",
        },
      },
    },
  };

  return {
    graphConfigEvolucaoGraficos,
    graphConfigRelatorioCategoriaDespesa,
    categoriaDespesa,
    configGraphGastosCartao,
    gastosCartao,
  };
}
