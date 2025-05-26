import React, { useEffect, useState } from 'react';
import './styles.css';

const symbols = ['NIFTY', 'BANKNIFTY', 'SENSEX'];

export default function App() {
  const [symbol, setSymbol] = useState('NIFTY');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchOI = async () => {
    setLoading(true);
    try {
      const res = await fetch(`https://oi-backend-wqv4.onrender.com/api/oi?symbol=${symbol}`);
      const json = await res.json();
      setData(json);
    } catch (err) {
      console.error("Error fetching OI:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOI();
    const interval = setInterval(fetchOI, 60000);
    return () => clearInterval(interval);
  }, [symbol]);

  return (
    <div className="container">
      <h1>📊 OI Chain Dashboard</h1>
      <div className="toggle-buttons">
        {symbols.map((sym) => (
          <button
            key={sym}
            className={sym === symbol ? 'active' : ''}
            onClick={() => setSymbol(sym)}
          >
            {sym}
          </button>
        ))}
      </div>
      {loading ? <p>Loading OI Data...</p> : (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
    </div>
  );
}
