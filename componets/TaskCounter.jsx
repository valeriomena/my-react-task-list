import { DataTask } from './ContexTask';
import { useContext, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const TaskCounter = () => {
  const { ListTask } = useContext(DataTask);

  const totalTasks = ListTask.length;
  const completedTasks = ListTask.filter(task => task.doneTask).length;
  const pendingTasks = ListTask.filter(task => !task.doneTask).length;

  const completedPercentage = Math.round((completedTasks / totalTasks) * 100);
  const pendingPercentage = Math.round((pendingTasks / totalTasks) * 100);

  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      let chartStatus = Chart.getChart("chart_MULTI");
      if (chartStatus != undefined) {
        chartStatus.destroy();
      }
      new Chart(chartRef.current, {
        type: 'doughnut',
        data: {
          labels: ['Completed tasks', 'Pending tasks'],
          datasets: [
            {
              data: [completedPercentage, pendingPercentage],
              backgroundColor: ['#474073', '#F26E22'],
            },
          ],
        },
      });
    }
  }, [completedPercentage, pendingPercentage]);

  return (
    <div>
      <canvas id="chart_MULTI" ref={chartRef} />
    </div>
  );
};

export default TaskCounter;
