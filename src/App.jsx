import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/oi')
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>OI Chain Signals</h1>
      {data ? (
        <>
          <p><strong>Support:</strong> {data.support}</p>
          <p><strong>Resistance:</strong> {data.resistance}</p>
          <p><strong>Signal:</strong> {data.signal}</p>
        </>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default App;
