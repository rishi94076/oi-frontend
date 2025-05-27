import React, { useEffect, useState } from 'react';
import './styles.css'; // if needed

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/oi')
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error('Error fetching data:', err));
  }, []);

  return (
    <div className="app-container">
      <h1>OI Chain Dashboard</h1>
      {data ? (
        <div>
          <p><strong>Support:</strong> {data.support}</p>
          <p><strong>Resistance:</strong> {data.resistance}</p>
          <p><strong>Signal:</strong> {data.signal}</p>
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default App;
