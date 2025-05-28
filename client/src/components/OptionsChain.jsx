import { useState, useEffect } from 'react';
import axios from 'axios';

function OptionsChain({ symbol }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(`/api/options?symbol=${symbol}`)
      .then(response => {
        setData(response.data.options || []);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching options chain:', error);
        setLoading(false);
      });
  }, [symbol]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-2">Options Chain for {symbol}</h2>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="p-2">Strike</th>
            <th className="p-2">Type</th>
            <th className="p-2">Last Price</th>
            <th className="p-2">Volume</th>
          </tr>
        </thead>
        <tbody>
          {data.map((option, index) => (
            <tr key={index}>
              <td className="p-2">{option.strike}</td>
              <td className="p-2">{option.type}</td>
              <td className="p-2">{option.lastPrice}</td>
              <td className="p-2">{option.volume}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OptionsChain;
