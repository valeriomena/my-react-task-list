import React, { useEffect } from "react";
import Chart from "chart.js/auto";
import { DataTask } from "./ContexTask";

const ResponsibleBarChart = () => {
  const { ListTask } = useContext(DataTask);

  const responsible = ListTask.map((task) => task.responsible);
  const uniqueResponsible = [...new Set(responsible)];

  const data = uniqueResponsible.map((responsible) => {
    return ListTask.filter((task) => task.responsible === responsible).length;
  });

  const chartRef = React.createRef();

  useEffect(() => {
    let chartStatus = Chart.getChart("chart_MULTI");
    if (chartStatus != undefined) {
      chartStatus.destroy();
    }

    const myChartRef = chartRef.current.getContext("2d");

    new Chart(myChartRef, {
      type: "bar",
      data: {
        labels: uniqueResponsible,
        datasets: [
          {
            label: "Number of tasks",
            data: data,
            backgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56",
              "#00CC00",
              "#FF9900",
              "#9933FF",
            ],
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  }, []);

  return (
    <div>
      <canvas id="chart_MULTI" ref={chartRef} />
    </div>
  );
};

export default ResponsibleBarChart;
