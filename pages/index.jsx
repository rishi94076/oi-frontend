import React, { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/oi")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <div>
      <h1>OI Chain Signals</h1>
      <p>🟢Support: {data?.support}</p>
      <p>🔴Resistance: {data?.resistance}</p>
      <p>📈Signal: {data?.signal}</p>
    </div>
  );
}
