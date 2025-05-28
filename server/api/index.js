const express = require('express');
const axios = require('axios');
const cors = require('cors');
const yahooFinance = require('yahoo-finance2').default;

const app = express();
app.use(cors());
app.use(express.json());

// Nifty 50 Index Data Endpoint with Support, Resistance, and Signals
app.get('/nifty50', async (req, res) => {
  try {
    const quote = await yahooFinance.quote('^NSEI');
    
    // Basic Nifty 50 data
    const niftyData = {
      price: quote.regularMarketPrice,
      change: quote.regularMarketChange,
      changePercent: quote.regularMarketChangePercent,
      dayHigh: quote.regularMarketDayHigh,
      dayLow: quote.regularMarketDayLow,
      volume: quote.regularMarketVolume,
      timestamp: new Date(quote.regularMarketTime * 1000).toISOString(),
    };

    // Calculate Support and Resistance using Pivot Points
    const high = quote.regularMarketDayHigh;
    const low = quote.regularMarketDayLow;
    const close = quote.regularMarketPreviousClose; // Previous day's close
    const pivot = (high + low + close) / 3;
    const support = pivot - (high - low) / 2;
    const resistance = pivot + (high - low) / 2;

    // Add support and resistance to the response
    niftyData.support = support;
    niftyData.resistance = resistance;

    // Generate Buy/Sell Signal
    const currentPrice = quote.regularMarketPrice;
    let signal = 'Hold';
    if (currentPrice > resistance) {
      signal = 'Sell';
    } else if (currentPrice < support) {
      signal = 'Buy';
    }
    niftyData.signal = signal;

    res.json(niftyData);
  } catch (error) {
    console.error('Error fetching Nifty 50 data:', error);
    res.status(500).json({ error: 'Failed to fetch Nifty 50 data' });
  }
});

// Options Chain Endpoint (Existing)
app.get('/options', async (req, res) => {
  const { symbol } = req.query;
  try {
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

// Signals Endpoint (Existing)
app.get('/signals', async (req, res) => {
  const { symbol } = req.query;
  try {
    const high = 110, low = 90, close = 100;
    const support = (high + low + close) / 3 - (high - low) / 2;
    const resistance = (high + low + close) / 3 + (high - low) / 2;
    const currentPrice = 105;
    const signal = currentPrice > resistance ? 'Sell' : currentPrice < support ? 'Buy' : 'Hold';

    res.json({ support, resistance, signal });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to calculate signals' });
  }
});

module.exports = app;
