import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/oi")
      .then((res) => res.json())
      .then((d) => setData(d));
  }, []);

  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl font-bold">OI Chain Signals</h1>
      {data ? (
        <div className="mt-6 text-xl">
          <p>🟢Support: {data.support}</p>
          <p>🔴Resistance: {data.resistance}</p>
          <p>📈Signal: <strong>{data.signal}</strong></p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
