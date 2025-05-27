useEffect(() => {
  fetch("/api/oi")
    .then((res) => res.json())
    .then((data) => {
      setSupport(data.support);
      setResistance(data.resistance);
      setSignal(data.signal);
      setLastUpdated(data.lastUpdated); // ✅ NEW LINE
    });
}, []);
