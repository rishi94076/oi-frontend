import { useEffect, useRef } from 'react';
import ChartJS from 'chart.js/auto';

function StockChart({ symbol }) {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
    const data = [100, 110, 105, 115, 120]; // Mock data, API se replace kar sakta hai

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext('2d');
    chartInstance.current = new ChartJS(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: `${symbol} Price`,
          data: data,
          borderColor: 'blue',
          fill: false,
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [symbol]);

  return (
    <div className="bg-white p-4 rounded shadow h-96">
      <h2 className="text-xl font-semibold mb-2">Price Chart for {symbol}</h2>
      <canvas ref={chartRef} className="w-full h-full"></canvas>
    </div>
  );
}

export default StockChart;
