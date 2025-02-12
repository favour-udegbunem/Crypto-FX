import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CryptoPage from "./CryptoPage"; // This is the page component for each cryptocurrency

const cryptocurrencies = [
  { name: "Bitcoin", id: "bitcoin", symbol: "BTC" },
  { name: "Ethereum", id: "ethereum", symbol: "ETH" },
  { name: "Binance Coin", id: "binancecoin", symbol: "BNB" },
  { name: "Tether", id: "tether", symbol: "USDT" },
  { name: "Cardano", id: "cardano", symbol: "ADA" },
  { name: "Solana", id: "solana", symbol: "SOL" },
  { name: "XRP", id: "ripple", symbol: "XRP" },
  { name: "Polkadot", id: "polkadot", symbol: "DOT" },
  { name: "Dogecoin", id: "dogecoin", symbol: "DOGE" },
  { name: "Litecoin", id: "litecoin", symbol: "LTC" },
];

function App() {
return (
    <Router>
      <div style={{ padding: "390px", width: "1000%", marginTop: "-45%", }}>
        <nav>
          {cryptocurrencies.map((crypto) => (
            <Link key={crypto.id} to={`/crypto/${crypto.id}`} style={{ marginRight: "20px", position: "sticky", zIndex: "1000", color: "rgb(8, 212, 8)" }} id="links">
            {crypto.name}
            </Link>
          ))}
        </nav>

        <Routes>
          <Route path="/crypto/:cryptoId" element={<CryptoPage />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;