import { useEffect, useState } from "react";

function App() {
  const [support, setSupport] = useState(null);
  const [resistance, setResistance] = useState(null);
  const [signal, setSignal] = useState("");
  const [lastUpdated, setLastUpdated] = useState("");

  useEffect(() => {
    fetch("/api/oi")
      .then((res) => res.json())
      .then((data) => {
        setSupport(data.support);
        setResistance(data.resistance);
        setSignal(data.signal);
        setLastUpdated(data.lastUpdated); // ✅ Time
      });
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>📊 OI Chain Signals</h1>
      <p>🟢 Support: {support}</p>
      <p🔴>Resistance: {resistance}</p>
      <p>📈 Signal: <strong>{signal}</strong></p>
      {lastUpdated && <p>🕒 Last Updated: {lastUpdated}</p>}
    </div>
  );
}

export default App;
