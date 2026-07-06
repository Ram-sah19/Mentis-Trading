import React from "react";

function Summary({ holdings = [], positions = [] }) {
  // Compute holdings summaries
  const totalInvestment = holdings.reduce((acc, stock) => acc + (stock.qty * stock.avg), 0);
  const totalCurrentValue = holdings.reduce((acc, stock) => acc + (stock.qty * stock.price), 0);
  const holdingsPnL = totalCurrentValue - totalInvestment;
  const holdingsPnLPercent = totalInvestment > 0 ? (holdingsPnL / totalInvestment * 100) : 0;

  // Available mock funds
  const cashBalance = 75450.80;

  return (
    <div className="container-fluid p-0">
      {/* Greetings Header */}
      <div className="pb-3 border-bottom mb-4">
        <h2 className="fs-3 fw-light text-dark">Hi, Ram</h2>
        <span className="text-muted" style={{ fontSize: "13px" }}>
          Welcome back. The stock markets are currently open and trading.
        </span>
      </div>

      {/* Stats Summary Cards */}
      <div className="row mb-5 g-4">
        {/* Equity Overview */}
        <div className="col-lg-6 col-12">
          <div className="card border shadow-sm p-4 h-100 bg-white">
            <h5 className="text-muted fs-6 mb-3">
              <i className="fa-solid fa-wallet text-primary me-2"></i> Equity Balance
            </h5>
            <div className="row align-items-center">
              <div className="col-7">
                <span className="text-muted fs-12 d-block" style={{ fontSize: "11px" }}>Available margin</span>
                <strong className="fs-3 text-dark">&#8377; {cashBalance.toLocaleString("en-IN", { minimumFractionDigits: 2 })}</strong>
              </div>
              <div className="col-5 border-start ps-3 text-end text-sm-start">
                <span className="text-muted fs-12 d-block" style={{ fontSize: "11px" }}>Margin used</span>
                <span className="fw-semibold text-muted">&#8377; 0.00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Portfolio Overview */}
        <div className="col-lg-6 col-12">
          <div className="card border shadow-sm p-4 h-100 bg-white">
            <h5 className="text-muted fs-6 mb-3">
              <i className="fa-solid fa-chart-line text-success me-2"></i> Portfolio Yield
            </h5>
            <div className="row align-items-center">
              <div className="col-6">
                <span className="text-muted fs-12 d-block" style={{ fontSize: "11px" }}>Current value</span>
                <strong className="fs-3 text-dark">&#8377; {totalCurrentValue.toLocaleString("en-IN", { minimumFractionDigits: 2 })}</strong>
              </div>
              <div className="col-6 border-start ps-3">
                <span className="text-muted fs-12 d-block" style={{ fontSize: "11px" }}>Total P&L</span>
                <span className={`fw-semibold fs-5 ${holdingsPnL >= 0 ? "text-profit" : "text-loss"}`}>
                  {holdingsPnL >= 0 ? "+" : ""}{holdingsPnL.toLocaleString("en-IN", { minimumFractionDigits: 2 })} 
                  <span style={{ fontSize: "12px", fontWeight: "normal" }} className="ms-1">
                    ({holdingsPnLPercent.toFixed(2)}%)
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Advisory bulletin alert list */}
      <div className="alert alert-light border p-4 bg-white shadow-sm mb-4">
        <h5 className="fs-6 text-dark fw-semibold mb-3">
          <i className="fa-regular fa-bell text-warning me-2 animate-bounce"></i> Account Notice & Market Advisory
        </h5>
        <ul className="ps-3 mb-0 text-muted" style={{ fontSize: "13px", lineHeight: "1.8" }}>
          <li>MCX Crude Oil contracts for July are now available for trading. Please review revised margin updates.</li>
          <li>Never share your 2FA security PIN or OTP passwords with anyone representing Zerodha help desks.</li>
          <li>As per SEBI guidelines, all unused funds will be swept back to your linked bank account by the first Friday of this month.</li>
        </ul>
      </div>
    </div>
  );
}

export default Summary;
