export default function handler(req, res) {
  const response = {
    support: 22000,
    resistance: 22500,
    signal: "Buy",
    lastUpdated: new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
    }),
  };

  res.status(200).json(response);
}
