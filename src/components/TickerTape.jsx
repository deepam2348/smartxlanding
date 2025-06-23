import React, { useEffect } from "react";

export default function TickerTape() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        { proName: "NASDAQ:AAPL", title: "Apple" },
        { proName: "NASDAQ:TSLA", title: "Tesla" },
        { proName: "NASDAQ:GOOGL", title: "Google" },
        { proName: "NASDAQ:AMZN", title: "Amazon" },
        { proName: "BINANCE:BTCUSDT", title: "BTC/USDT" },
        { proName: "BINANCE:ETHUSDT", title: "ETH/USDT" },
      ],
      colorTheme: "dark",
      isTransparent: true,
      displayMode: "adaptive",
      locale: "en",
    });
    document.getElementById("tradingview-widget").appendChild(script);
  }, []);

  return (
    <div className="w-full overflow-hidden border-t border-b border-gray-700">
      <div id="tradingview-widget" className="w-full" />
    </div>
  );
}