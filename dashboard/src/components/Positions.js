import React from "react";

function Positions({ positions = [] }) {
  // Aggregate position P&L
  const totalPnL = positions.reduce((acc, stock) => {
    const cost = stock.qty * stock.avg;
    const current = stock.qty * stock.price;
    return acc + (current - cost);
  }, 0);

  return (
    <div className="container-fluid p-0">
      <div className="d-flex align-items-center justify-content-between pb-3 border-bottom mb-4">
        <div>
          <h3 className="fs-4 fw-normal text-dark mb-1">Positions ({positions.length})</h3>
          <span className="text-muted" style={{ fontSize: "12px" }}>
            Active open intraday (MIS) and long-term (CNC) trades for today
          </span>
        </div>
      </div>

      <div className="table-responsive bg-white border rounded shadow-sm">
        <table className="table table-trading mb-0 align-middle">
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th className="text-end">Qty.</th>
              <th className="text-end">Avg. cost</th>
              <th className="text-end">LTP</th>
              <th className="text-end">P&L</th>
              <th className="text-end">Chg.</th>
            </tr>
          </thead>
          <tbody>
            {positions.map((stock, index) => {
              const cost = stock.qty * stock.avg;
              const current = stock.qty * stock.price;
              const pnl = current - cost;
              const isLoss = pnl < 0;

              return (
                <tr key={index}>
                  <td>
                    <span className="badge bg-light text-muted border px-2 py-1" style={{ fontSize: "10px" }}>
                      {stock.product}
                    </span>
                  </td>
                  <td className="fw-semibold text-dark">{stock.name}</td>
                  <td className="text-end">{stock.qty}</td>
                  <td className="text-end">{stock.avg.toFixed(2)}</td>
                  <td className="text-end">{stock.price.toFixed(2)}</td>
                  <td className={`text-end fw-semibold ${isLoss ? "text-loss" : "text-profit"}`}>
                    {pnl >= 0 ? "+" : ""}{pnl.toFixed(2)}
                  </td>
                  <td className={`text-end ${stock.day.startsWith("-") ? "text-loss" : "text-profit"}`}>
                    {stock.day}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {positions.length === 0 && (
          <div className="text-center text-muted py-5" style={{ fontSize: "14px" }}>
            You have no open intraday positions. Buy or Sell stocks in the watchlist to start.
          </div>
        )}
      </div>

      {/* Summary box */}
      {positions.length > 0 && (
        <div className="d-flex justify-content-end mt-3 bg-light border rounded p-3 shadow-sm">
          <div className="text-end">
            <span className="text-muted d-block" style={{ fontSize: "11px" }}>Total Position P&L</span>
            <strong className={`fs-5 ${totalPnL >= 0 ? "text-profit" : "text-loss"}`}>
              &#8377; {totalPnL >= 0 ? "+" : ""}{totalPnL.toFixed(2)}
            </strong>
          </div>
        </div>
      )}
    </div>
  );
}

export default Positions;
