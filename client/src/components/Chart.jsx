import { useEffect, useRef } from 'react';
import { Chart as ChartJS } from 'chart.js';
import 'chart.js/auto';

function Chart({ symbol }) {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
    const data = [100, 110, 105, 115, 120]; // Mock data, replace with API data

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext('2d');
    chartInstance.current = new ChartJS(ctx,...) {
      type: 'line',
      data: {
        labels,
        datasets: [{
          label: `${symbol} Price`,
          data,
          borderColor: 'blue',
          fill: false,
        }],
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [symbol]);

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-2">Price Chart for {symbol}</h2>
      <canvas ref={chartRef}></canvas>
    </div>
  );
}

export default Chart;
