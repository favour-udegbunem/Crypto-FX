import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { useParams } from "react-router-dom";
import axios from "axios";
import { 
  Chart as ChartJS,
   CategoryScale, 
   LinearScale, 
   PointElement, 
   LineElement, 
   Title, 
   Tooltip, 
   Legend, 
   Filler,
  } from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const CryptoPage = () => {
  const { cryptoId } = useParams(); // Get the cryptocurrency ID from the URL
  const [prices, setPrices] = useState([]);

  // Fetch live crypto prices
  const fetchCryptoPrices = async () => {
    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/simple/price?ids=${cryptoId}&vs_currencies=usd`
      );

      const newPrice = response.data[cryptoId]?.usd || 0;
      const lastPrice = prices.length > 0 ? prices[prices.length - 1] : newPrice;
      const fluctuation = (Math.random() - 0.5) * (lastPrice * 0.03); // +/- 3% variation

      setPrices((prevPrices) => [...prevPrices.slice(-9), lastPrice + fluctuation]); // Keep only last 10 values
    } catch (error) {
      console.error("Error fetching prices:", error);
    }
  };

  useEffect(() => {
    fetchCryptoPrices(); // Fetch initially
    const interval = setInterval(fetchCryptoPrices, 5000); // Update every 5s
    return () => clearInterval(interval);
  }, [cryptoId]);

  return (
    <div style={{ position: "absolute", marginLeft: "-2%", marginTop: "8%", width: "60%", }}>
    <div style={{ padding: "20px", textAlign: "center", }}>
      <h2>{cryptoId.toUpperCase()} Price Chart</h2>
      <Line 
        data={{
          labels: Array.from({ length: prices.length }, (_, i) => `T-${prices.length - i}`),
          datasets: [
            {
              label: "Price (USD)",
              data: prices,
              borderColor: "green",
              // backgroundColor: "blue",
              backgroundColor: "rgb(8, 212, 8)", 
              tension: 0.3, // Curved line
              fill: "origin", // Fill the area below the line
              pointRadius: 4,
            },
          ],
        }}
        options={{
          responsive: true,
          plugins: {
            legend: { display: false },
            title: { display: false },
          },
          scales: {
            y: {
              ticks: { color: "white" }, // Optional: change text color
            },
            x: {
              ticks: { color: "white" },
            },
          },
        }}
      />
    </div>
    </div>
  );
};

export default CryptoPage;
