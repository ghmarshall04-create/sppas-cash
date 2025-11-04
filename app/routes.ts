import { useEffect, useState } from "react";

export default function Index() {
  const [tokens, setTokens] = useState([]);

  useEffect(() => {
    fetch("/api/tokenwall")
      .then(r => r.json())
      .then(data => setTokens(data.tokens))
      .catch(() => setTokens([]));
  }, []);

  return (
    <main style={{ fontFamily: "Poppins, sans-serif", background: "linear-gradient(120deg,#ff1744,#ffd600,#ffffff)", minHeight: "100vh" }}>
      <header style={{ display:"flex",justifyContent:"space-between",alignItems:"center",padding:"1rem 2rem",background:"rgba(255,255,255,0.8)",backdropFilter:"blur(10px)" }}>
        <h1 style={{ fontSize:"2rem",fontWeight:"800" }}>SPPAS⚡CASH</h1>
        <button style={{ padding:".6rem 1.2rem",border:"none",borderRadius:"8px",background:"#111",color:"#fff",fontWeight:"600" }}>Connect Wallet</button>
      </header>

      <section style={{ padding:"2rem" }}>
        <h2>🔥 Top Gainers / New Tokens</h2>
        <table style={{ width:"100%",borderCollapse:"collapse" }}>
          <thead><tr><th>Ticker</th><th>Name</th><th>Price</th><th>% 24h</th></tr></thead>
          <tbody>
            {tokens.map(t => (
              <tr key={t.symbol}>
                <td>{t.symbol}</td>
                <td>{t.name}</td>
                <td>${t.price}</td>
                <td>{t.change24h}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <footer style={{ textAlign:"center",padding:"1rem",color:"#333",fontSize:".8rem" }}>
        © 2025 SPPAS CASH v15
      </footer>
    </main>
  );
}
