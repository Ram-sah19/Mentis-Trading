import React from "react";

function Orders({ orders = [] }) {
  return (
    <div className="container-fluid p-0">
      <div className="d-flex align-items-center justify-content-between pb-3 border-bottom mb-4">
        <div>
          <h3 className="fs-4 fw-normal text-dark mb-1">Orders ({orders.length})</h3>
          <span className="text-muted" style={{ fontSize: "12px" }}>
            Ledger log of all transaction orders processed during the current session
          </span>
        </div>
      </div>

      <div className="table-responsive bg-white border rounded shadow-sm">
        <table className="table table-trading mb-0 align-middle">
          <thead>
            <tr>
              <th>Time</th>
              <th>Instrument</th>
              <th>Type</th>
              <th className="text-end">Qty.</th>
              <th className="text-end">LTP (Avg. Price)</th>
              <th className="text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => {
              const orderDate = order.createdAt ? new Date(order.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }) : "Just Now";
              const isBuy = order.mode === "BUY";

              return (
                <tr key={index}>
                  <td className="text-muted">{orderDate}</td>
                  <td className="fw-semibold text-dark">{order.name}</td>
                  <td>
                    <span 
                      className={`badge border px-2 py-1 ${isBuy ? "bg-light-blue text-primary border-primary" : "bg-light-orange text-danger border-danger"}`}
                      style={{ 
                        fontSize: "10px", 
                        backgroundColor: isBuy ? "rgba(65, 132, 243, 0.05)" : "rgba(255, 87, 34, 0.05)",
                        borderColor: isBuy ? "#4184f3" : "#ff5722"
                      }}
                    >
                      {order.mode}
                    </span>
                  </td>
                  <td className="text-end">{order.qty}</td>
                  <td className="text-end">{order.price.toFixed(2)}</td>
                  <td className="text-center">
                    <span className="badge bg-success-subtle text-success border border-success px-2 py-1" style={{ fontSize: "10px" }}>
                      COMPLETE
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {orders.length === 0 && (
          <div className="text-center text-muted py-5" style={{ fontSize: "14px" }}>
            No orders have been executed yet. Click buy or sell on the watchlist to generate transactions.
          </div>
        )}
      </div>
    </div>
  );
}

export default Orders;
