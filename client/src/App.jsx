import { useState } from 'react';
import NiftyIndex from './components/NiftyIndex';
import OptionsChain from './components/OptionsChain';
import Signals from './components/Signals';
import StockChart from './components/Chart';

function App() {
  const [symbol, setSymbol] = useState('AAPL');

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Stock Options Dashboard</h1>
      
      <NiftyIndex />
      
      <div className="mt-6">
        <label htmlFor="symbol" className="block text-lg font-medium mb-2">
          Enter Stock Symbol:
        </label>
        <input
          id="symbol"
          type="text"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value.toUpperCase())}
          className="border p-2 rounded w-full max-w-xs"
          placeholder="e.g., AAPL"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <OptionsChain symbol={symbol} />
        <Signals symbol={symbol} />
      </div>
      
      <div className="mt-6">
        <StockChart symbol={symbol} />
      </div>
    </div>
  );
}

export default App;
