import React, { useState } from "react";

const defaultWatchList = [
  { name: "RELIANCE", price: 2112.40, change: "+1.44%", isDown: false, sparkPoints: "5,15 15,10 25,18 35,12 45,8 55,5" },
  { name: "TCS", price: 3320.15, change: "-0.55%", isDown: true, sparkPoints: "5,5 15,12 25,10 35,18 45,15 55,20" },
  { name: "INFY", price: 1385.10, change: "+1.65%", isDown: false, sparkPoints: "5,20 15,18 25,14 35,10 45,7 55,4" },
  { name: "WIPRO", price: 577.75, change: "+3.28%", isDown: false, sparkPoints: "5,18 15,15 25,12 35,8 45,6 55,3" },
  { name: "SBI", price: 430.20, change: "-0.34%", isDown: true, sparkPoints: "5,8 15,10 25,9 35,14 45,12 55,15" },
  { name: "TATAMOTORS", price: 341.67, change: "-1.66%", isDown: true, sparkPoints: "5,5 15,7 25,12 35,15 45,18 55,22" },
  { name: "ITC", price: 207.85, change: "-2.05%", isDown: true, sparkPoints: "5,4 15,9 25,11 35,14 45,17 55,21" },
  { name: "BHARTIARTL", price: 541.15, change: "+2.99%", isDown: false, sparkPoints: "5,16 15,14 25,10 35,8 45,5 55,2" }
];

function WatchList({ onOrderClick }) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredWatchList = defaultWatchList.filter((stock) =>
    stock.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="watchlist-container d-flex flex-column">
      {/* Search Stocks Bar */}
      <div className="watchlist-search d-flex align-items-center gap-2 border-bottom py-3 px-3">
        <i className="fa-solid fa-magnifying-glass text-muted" style={{ fontSize: "14px" }}></i>
        <input
          type="text"
          placeholder="Search eg: infy, bse, nifty..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <span className="text-muted fs-12 ms-auto" style={{ fontSize: "11px" }}>
          {filteredWatchList.length}/8
        </span>
      </div>

      {/* Stock Items List */}
      <div className="flex-grow-1 overflow-auto">
        {filteredWatchList.map((stock, index) => (
          <div key={index} className="watchlist-item border-bottom">
            <div>
              <span className={`fw-medium ${stock.isDown ? "text-danger" : "text-success"}`} style={{ fontSize: "13px" }}>
                {stock.name}
              </span>
            </div>

            {/* Sparkline & Pricing info */}
            <div className="d-flex align-items-center gap-3">
              {/* Sparkline SVG */}
              <svg className="d-none d-sm-block" width="60" height="25" style={{ overflow: "visible" }}>
                <polyline
                  fill="none"
                  stroke={stock.isDown ? "#df514c" : "#4caf50"}
                  strokeWidth="1.5"
                  points={stock.sparkPoints}
                />
              </svg>

              <div className="text-end">
                <span className="d-block fw-semibold" style={{ fontSize: "13px", color: "#444" }}>
                  {stock.price.toFixed(2)}
                </span>
                <span className="text-muted" style={{ fontSize: "10px" }}>
                  {stock.change}
                </span>
              </div>
            </div>

            {/* Hover Actions Panel */}
            <div className="actions d-flex align-items-center gap-1">
              <button 
                className="btn-action-buy"
                onClick={() => onOrderClick(stock, "BUY")}
              >
                B
              </button>
              <button 
                className="btn-action-sell"
                onClick={() => onOrderClick(stock, "SELL")}
              >
                S
              </button>
            </div>
          </div>
        ))}

        {filteredWatchList.length === 0 && (
          <div className="text-center text-muted py-5" style={{ fontSize: "13px" }}>
            No stocks matched search
          </div>
        )}
      </div>
    </div>
  );
}

export default WatchList;
