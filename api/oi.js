export default async function handler(req, res) {
  try {
    const response = await fetch("https://nse-api.vercel.app/api/option-chain?symbol=NIFTY");
    const data = await response.json();

    const records = data.optionChain;

    let maxCallOi = 0;
    let resistance = 0;
    let maxPutOi = 0;
    let support = 0;

    for (let item of records) {
      const ce = item.CE;
      const pe = item.PE;

      if (ce && ce.openInterest > maxCallOi) {
        maxCallOi = ce.openInterest;
        resistance = ce.strikePrice;
      }

      if (pe && pe.openInterest > maxPutOi) {
        maxPutOi = pe.openInterest;
        support = pe.strikePrice;
      }
    }

    const signal = support > resistance ? "Sell" : "Buy";

    res.status(200).json({
      support,
      resistance,
      signal,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
}
