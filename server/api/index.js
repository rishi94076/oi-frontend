const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const ALPHA_VANTAGE_API_KEY = process.env.ALPHA_VANTAGE_API_KEY;

app.get('/options', async (req, res) => {
  const { symbol } = req.query;
  try {
    // Mock data (replace with real Alpha Vantage API call)
    const options = [
      { strike: 100, type: 'Call', lastPrice: 5.0, volume: 1000 },
      { strike: 105, type: 'Put', lastPrice: 4.5, volume: 800 },
    ];
    res.json({ options });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch options data' });
  }
});

app.get('/signals', async (req, res) => {
  const { symbol } = req.query;
  try {
    // Mock price data (replace with real API data)
    const high = 110, low = 90, close = 100;
    const support = (high + low + close) / 3 - (high - low) / 2;
    const resistance = (high + low + close) / 3 + (high - low) / 2;
    const currentPrice = 105; // Replace with real-time price
    const signal = currentPrice > resistance ? 'Sell' : currentPrice < support ? 'Buy' : 'Hold';

    res.json({ support, resistance, signal });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to calculate signals' });
  }
});

module.exports = app;
