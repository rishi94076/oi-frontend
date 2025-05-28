import { useState, useEffect } from 'react';
import axios from 'axios';

function Signals({ symbol }) {
  const [signals, setSignals] = useState({ support: 0, resistance: 0, signal: '' });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(`/api/signals?symbol=${symbol}`)
      .then(response => {
        setSignals(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching signals:', error);
        setLoading(false);
      });
  }, [symbol]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-2">Trading Signals for {symbol}</h2>
      <p><strong>Support:</strong> {signals.support.toFixed(2)}</p>
      <p><strong>Resistance:</strong> {signals.resistance.toFixed(2)}</p>
      <p><strong>Signal:</strong> <span className={signals.signal === 'Buy' ? 'text-green-600' : 'text-red-600'}>{signals.signal}</span></p>
    </div>
  );
}

export default Signals;
