import React, { useEffect, useState } from 'react';

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchOI = async () => {
      try {
        const res = await fetch('/api/oi'); // Vercel backend route
        const json = await res.json();
        setData(json);
      } catch (error) {
        console.error('Failed to fetch OI:', error);
      }
    };

    fetchOI();

    const interval = setInterval(fetchOI, 60000); // Refresh every 1 min
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>📊 Nifty OI Chain</h1>
      {data ? (
        <div>
          <p>Support: <strong>{data.support}</strong></p>
          <p>Resistance: <strong>{data.resistance}</strong></p>
          <p>Signal: <strong>{data.signal}</strong></p>
        </div>
      ) : (
        <p>Loading OI Chain Data...</p>
      )}
    </div>
  );
};

export default App;
