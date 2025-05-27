import React from 'react';
import './styles.css';

const App = () => {
  return (
    <div className="app-container">
      <h1>📊 Open Interest Chain Analyzer</h1>
      <p>Analyze support & resistance using live OI data!</p>

      <div className="feature-section">
        <h2>🔍 Features</h2>
        <ul>
          <li>Live Option Chain Visualization</li>
          <li>Auto Support & Resistance Levels</li>
          <li>Buy/Sell Signal Suggestions</li>
        </ul>
      </div>

      <footer>
        <p>Built with ❤️ by Rishi</p>
      </footer>
    </div>
  );
};

export default App;
