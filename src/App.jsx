import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState({ support: "", resistance: "", signal: "" });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/oi");
        const json = await res.json();
        setData(json);
      } catch (error) {
        console.error("Failed to fetch:", error);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 60000); // refresh every 1 min

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ fontFamily: "sans-serif", textAlign: "center", marginTop: "50px" }}>
      <h1>OI Chain Signals</h1>
      <p>🟢 <strong>Support:</strong> {data.support || "Loading..."}</p>
      <p>🔴 <strong>Resistance:</strong> {data.resistance || "Loading..."}</p>
      <p>📈 <strong>Signal:</strong> {data.signal || "Loading..."}</p>
    </div>
  );
}

export default App;
