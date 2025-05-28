import { useState } from 'react';
import OptionsChain from './components/OptionsChain';
import Signals from './components/Signals';
import Chart from './components/Chart';
import NiftyIndex from './components/NiftyIndex';

function App() {
  const [symbol, setSymbol] = useState('AAPL');

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Stock Options Analyzer</h1>
      <div className="mb-4">
        <input
          type="text"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value.toUpperCase())}
          placeholder="Enter stock symbol (e.g., AAPL)"
          className="p-2 border rounded w-full max-w-xs"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <NiftyIndex />
        <OptionsChain symbol={symbol} />
        <Signals symbol={symbol} />
        <Chart symbol={symbol} />
      </div>
    </div>
  );
}

export default App;
