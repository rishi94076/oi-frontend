import { useState, useEffect } from 'react';
import axios from 'axios';

function NiftyIndex() {
  const [niftyData, setNiftyData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get('/api/nifty50')
      .then(response => {
        setNiftyData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching Nifty 50 data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading Nifty 50 Index...</p>;
  if (!niftyData) return <p>No data available</p>;

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-2">Nifty 50 Index</h2>
      <p><strong>Price:</strong> {niftyData.price.toFixed(2)}</p>
      <p><strong>Change:</strong> {niftyData.change.toFixed(2)} ({niftyData.changePercent.toFixed(2)}%)</p>
      <p><strong>Day High:</strong> {niftyData.dayHigh.toFixed(2)}</p>
      <p><strong>Day Low:</strong> {niftyData.dayLow.toFixed(2)}</p>
      <p><strong>Volume:</strong> {niftyData.volume}</p>
      <p><strong>Last Updated:</strong> {new Date(niftyData.timestamp).toLocaleString()}</p>
    </div>
  );
}

export default NiftyIndex;
