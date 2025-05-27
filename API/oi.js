export default function handler(req, res) {
  res.status(200).json({
    message: "OI Chain backend working!",
    support: 22000,
    resistance: 22600,
    signal: "Buy"
  });
}
