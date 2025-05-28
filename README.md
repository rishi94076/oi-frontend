Stock Options Analyzer
Yeh app options chain data fetch karta hai, support/resistance calculate karta hai, aur buy/sell signals deta hai.
Setup

Zip file download karo aur GitHub pe upload karo.
Vercel pe deploy karo.

Steps to Deploy

GitHub pe repository banao.
Zip file ko unzip karke repository mein upload karo.
Vercel se client aur server folders deploy karo.
Backend ke liye ALPHA_VANTAGE_API_KEY environment variable set karo.

APIs

/api/options?symbol=AAPL: Options chain data.
/api/signals?symbol=AAPL: Support, resistance, aur signals.

