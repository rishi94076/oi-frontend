export default function handler(req, res) {
  const data = {
    support: 22000,
    resistance: 22500,
    signal: "Buy",
  };
  res.status = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(data));
}
