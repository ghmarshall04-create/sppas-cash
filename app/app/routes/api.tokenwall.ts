export async function loader() {
  const tokens = [
    { symbol: "BTC", name: "Bitcoin", price: 67300, change24h: 1.2 },
    { symbol: "ETH", name: "Ethereum", price: 3750, change24h: 2.4 },
    { symbol: "ADA", name: "Cardano", price: 0.42, change24h: -0.6 }
  ];
  return new Response(JSON.stringify({ tokens }), {
    headers: { "content-type": "application/json" },
  });
}
