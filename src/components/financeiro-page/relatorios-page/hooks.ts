import React from "react";

export default function useRelatorioController() {
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

  const graphConfigRelatorioGastosCartao = {
    responsive: true,
    type: "line",
    maintainAspectRatio: false,
    data: categoriaDespesa,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Gastos no cartão",
      },
      Animation: {
        intersect: false,
      },
    },
  };

  return {
    graphConfigEvolucaoGraficos,
    graphConfigRelatorioCategoriaDespesa,
    categoriaDespesa,
  };
}
