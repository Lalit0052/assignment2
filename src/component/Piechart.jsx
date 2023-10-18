import React, { useEffect, useRef } from 'react';
import {Chart} from 'chart.js/auto';


const DatabaseDiscussionPieChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      new Chart(ctx, {
        type: 'pie',
        data: {
          labels: data.map(item => item.label),
          datasets: [
            {
              data: data.map(item => item.value),
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
              ],
            },
          ],
        },
      });
    }
  }, [data]);

  return <canvas ref={chartRef} />;
}
export default DatabaseDiscussionPieChart;
