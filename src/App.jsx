import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://nse-data-api.vercel.app/api/oi?symbol=NIFTY");
        const json = await res.json();
        console.log("Fetched Data:", data); 
        setData(json);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 60000);
    return () => clearInterval(interval);
  }, []);

  if (!data) return <h2>Loading OI data...</h2>;

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>📊 OI Chain Signals</h1>
      <p><strong>Support:</strong> {data.support}</p>
      <p><strong>Resistance:</strong> {data.resistance}</p>
      <p><strong>Signal:</strong> {data.signal}</p>
    </div>
  );
}

export default App;
