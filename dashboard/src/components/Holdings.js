import React from "react";
import DoughnutChart from "./DoughnutChart";

function Holdings({ holdings = [] }) {
  // Aggregate portfolio level totals
  const totalInvestment = holdings.reduce((acc, stock) => acc + (stock.qty * stock.avg), 0);
  const totalCurrentValue = holdings.reduce((acc, stock) => acc + (stock.qty * stock.price), 0);
  const totalPnL = totalCurrentValue - totalInvestment;
  const totalPnLPercent = totalInvestment > 0 ? (totalPnL / totalInvestment * 100) : 0;

  return (
    <div className="container-fluid p-0">
      <div className="d-flex align-items-center justify-content-between pb-3 border-bottom mb-4">
        <div>
          <h3 className="fs-4 fw-normal text-dark mb-1">Holdings ({holdings.length})</h3>
          <span className="text-muted" style={{ fontSize: "12px" }}>
            Long-term delivery assets held in your Demat account
          </span>
        </div>
      </div>

      <div className="row g-4">
        {/* Left Column: Table */}
        <div className="col-xl-8 col-12">
          <div className="table-responsive bg-white border rounded shadow-sm">
            <table className="table table-trading mb-0 align-middle">
              <thead>
                <tr>
                  <th>Instrument</th>
                  <th className="text-end">Qty.</th>
                  <th className="text-end">Avg. cost</th>
                  <th className="text-end">LTP</th>
                  <th className="text-end">Cur. val</th>
                  <th className="text-end">P&L</th>
                  <th className="text-end">Net chg.</th>
                  <th className="text-end">Day chg.</th>
                </tr>
              </thead>
              <tbody>
                {holdings.map((stock, index) => {
                  const cost = stock.qty * stock.avg;
                  const current = stock.qty * stock.price;
                  const pnl = current - cost;
                  const netChgPercent = ((pnl / cost) * 100).toFixed(2);
                  const isLoss = pnl < 0;

                  return (
                    <tr key={index}>
                      <td className="fw-semibold text-dark">{stock.name}</td>
                      <td className="text-end">{stock.qty}</td>
                      <td className="text-end">{stock.avg.toFixed(2)}</td>
                      <td className="text-end">{stock.price.toFixed(2)}</td>
                      <td className="text-end fw-medium">{(current).toFixed(2)}</td>
                      <td className={`text-end fw-semibold ${isLoss ? "text-loss" : "text-profit"}`}>
                        {pnl >= 0 ? "+" : ""}{pnl.toFixed(2)}
                      </td>
                      <td className={`text-end fw-semibold ${isLoss ? "text-loss" : "text-profit"}`}>
                        {netChgPercent}%
                      </td>
                      <td className={`text-end ${stock.day.startsWith("-") ? "text-loss" : "text-profit"}`}>
                        {stock.day}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            {holdings.length === 0 && (
              <div className="text-center text-muted py-5" style={{ fontSize: "14px" }}>
                You have no stocks in your holdings. Click buy on the watchlist to acquire shares.
              </div>
            )}
          </div>

          {/* Grid Total Summary Bar */}
          {holdings.length > 0 && (
            <div className="row mt-3 g-2 bg-light border rounded p-3 mx-0 shadow-sm align-items-center">
              <div className="col-sm-4 col-6">
                <span className="text-muted d-block" style={{ fontSize: "11px" }}>Total investment</span>
                <strong className="fs-6 text-dark">&#8377; {totalInvestment.toFixed(2)}</strong>
              </div>
              <div className="col-sm-4 col-6 border-start ps-3">
                <span className="text-muted d-block" style={{ fontSize: "11px" }}>Current value</span>
                <strong className="fs-6 text-dark">&#8377; {totalCurrentValue.toFixed(2)}</strong>
              </div>
              <div className="col-sm-4 col-12 border-start-sm ps-sm-3 mt-3 mt-sm-0 pt-2 pt-sm-0 border-top-sm">
                <span className="text-muted d-block" style={{ fontSize: "11px" }}>Total returns</span>
                <span className={`fw-bold fs-6 ${totalPnL >= 0 ? "text-profit" : "text-loss"}`}>
                  {totalPnL >= 0 ? "+" : ""}{totalPnL.toFixed(2)} ({totalPnLPercent.toFixed(2)}%)
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Doughnut Chart */}
        <div className="col-xl-4 col-12">
          <div className="card border shadow-sm p-4 bg-white">
            <h5 className="text-muted fs-6 mb-3 border-bottom pb-2">
              <i className="fa-solid fa-chart-pie text-primary me-2"></i> Asset Allocation
            </h5>
            <DoughnutChart holdings={holdings} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Holdings;
