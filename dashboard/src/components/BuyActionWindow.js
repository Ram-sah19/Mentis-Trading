import React, { useState } from "react";

function BuyActionWindow({ stock, mode, onClose, onPlaceOrder }) {
  const [qty, setQty] = useState(1);
  const [price, setPrice] = useState(stock.price);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (qty <= 0 || price <= 0) {
      alert("Please enter a valid quantity and price.");
      return;
    }
    onPlaceOrder({
      name: stock.name,
      qty: Number(qty),
      price: Number(price),
      mode: mode
    });
  };

  const marginRequired = (qty * price).toFixed(2);

  return (
    <div className="buy-action-overlay shadow">
      {/* Dynamic Header color depending on mode (BUY/SELL) */}
      <div className={`overlay-header ${mode === "BUY" ? "buy" : "sell"}`}>
        <span className="fw-semibold fs-6">
          {mode} {stock.name} x {qty} Qty
        </span>
        <button 
          type="button" 
          className="btn-close btn-close-white" 
          aria-label="Close"
          onClick={onClose}
        ></button>
      </div>

      {/* Form Area */}
      <form onSubmit={handleSubmit} className="p-4">
        {/* Quantity & Price Row */}
        <div className="row g-3 mb-4">
          <div className="col-6">
            <label className="form-label text-muted fs-12 mb-1" htmlFor="orderQty" style={{ fontSize: "11px" }}>
              Qty
            </label>
            <input
              type="number"
              id="orderQty"
              className="form-control p-2"
              value={qty}
              min="1"
              onChange={(e) => setQty(Math.max(1, parseInt(e.target.value) || 0))}
              required
            />
          </div>

          <div className="col-6">
            <label className="form-label text-muted fs-12 mb-1" htmlFor="orderPrice" style={{ fontSize: "11px" }}>
              Price
            </label>
            <input
              type="number"
              id="orderPrice"
              className="form-control p-2"
              step="0.05"
              min="0.05"
              value={price}
              onChange={(e) => setPrice(Math.max(0.05, parseFloat(e.target.value) || 0))}
              required
            />
          </div>
        </div>

        {/* margin display and place button */}
        <div className="d-flex align-items-center justify-content-between pt-2 border-top">
          <div className="text-start">
            <span className="d-block text-muted" style={{ fontSize: "11px" }}>Margin required</span>
            <strong className="fs-6 text-dark">&#8377; {marginRequired}</strong>
          </div>

          <div className="d-flex gap-2">
            <button 
              type="button" 
              className="btn btn-light px-3" 
              style={{ fontSize: "13px" }}
              onClick={onClose}
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className={`btn px-4 text-white ${mode === "BUY" ? "btn-primary" : "btn-danger"}`}
              style={{ 
                fontSize: "13px", 
                backgroundColor: mode === "BUY" ? "#4184f3" : "#ff5722",
                border: "none"
              }}
            >
              {mode}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default BuyActionWindow;
