export default async function handler(req, res) {
  // Dummy data for now
  const data = {
    support: 22000,
    resistance: 22500,
    signal: "Buy",
  };

  res.status(200).json(data);
}
