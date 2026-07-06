import React from "react";

function Funds() {
  const cashBalance = 75450.80;

  return (
    <div className="container-fluid p-0">
      <div className="d-flex align-items-center justify-content-between pb-3 border-bottom mb-4">
        <div>
          <h3 className="fs-4 fw-normal text-dark mb-1">Funds</h3>
          <span className="text-muted" style={{ fontSize: "12px" }}>
            Manage your deposit margins, collateral credits, and payouts
          </span>
        </div>
      </div>

      <div className="row g-4">
        {/* Left Card: Margin summary */}
        <div className="col-lg-6 col-12">
          <div className="card border shadow-sm p-4 bg-white">
            <h5 className="text-muted fs-6 mb-4 border-bottom pb-2">
              <i className="fa-solid fa-wallet text-primary me-2"></i> Equity Margin Ledger
            </h5>
            
            <div className="d-flex justify-content-between py-2 border-bottom">
              <span className="text-muted" style={{ fontSize: "13px" }}>Available margin</span>
              <strong className="text-dark fs-5">&#8377; {cashBalance.toLocaleString("en-IN", { minimumFractionDigits: 2 })}</strong>
            </div>
            
            <div className="d-flex justify-content-between py-2 border-bottom">
              <span className="text-muted" style={{ fontSize: "13px" }}>Used margin</span>
              <span className="text-dark fw-semibold">&#8377; 0.00</span>
            </div>

            <div className="d-flex justify-content-between py-2 border-bottom">
              <span className="text-muted" style={{ fontSize: "13px" }}>Opening balance</span>
              <span className="text-dark fw-semibold">&#8377; {cashBalance.toLocaleString("en-IN", { minimumFractionDigits: 2 })}</span>
            </div>

            <div className="d-flex justify-content-between py-2 border-bottom">
              <span className="text-muted" style={{ fontSize: "13px" }}>Collateral value</span>
              <span className="text-dark fw-semibold">&#8377; 0.00</span>
            </div>

            <div className="d-flex justify-content-between py-2 mt-2">
              <span className="text-dark fw-bold" style={{ fontSize: "14px" }}>Total Margin Available</span>
              <strong className="text-primary fs-5">&#8377; {cashBalance.toLocaleString("en-IN", { minimumFractionDigits: 2 })}</strong>
            </div>

            <div className="d-flex gap-3 mt-4 pt-3 border-top">
              <button className="btn btn-success px-4 py-2 flex-grow-1" style={{ fontSize: "14px", fontWeight: "600", backgroundColor: "#4caf50", border: "none" }} onClick={() => alert("Add Funds dialog integration (Simulated)")}>
                Add Funds
              </button>
              <button className="btn btn-primary px-4 py-2 flex-grow-1" style={{ fontSize: "14px", fontWeight: "600", backgroundColor: "#4184f3", border: "none" }} onClick={() => alert("Withdraw funds request submitted (Simulated)")}>
                Withdraw
              </button>
            </div>
          </div>
        </div>

        {/* Right Card: Bank Details */}
        <div className="col-lg-6 col-12">
          <div className="card border shadow-sm p-4 bg-white">
            <h5 className="text-muted fs-6 mb-4 border-bottom pb-2">
              <i className="fa-solid fa-building-columns text-success me-2"></i> Linked Accounts
            </h5>

            <div className="p-3 bg-light rounded border mb-3">
              <span className="text-dark d-block fw-semibold" style={{ fontSize: "14px" }}>HDFC Bank Ltd.</span>
              <span className="text-muted d-block mt-1" style={{ fontSize: "12px" }}>Account number: *******1234</span>
              <span className="text-muted d-block" style={{ fontSize: "12px" }}>Branch: Bandra East, Mumbai</span>
              <span className="badge bg-success-subtle text-success border border-success mt-2" style={{ fontSize: "10px" }}>PRIMARY</span>
            </div>

            <div className="alert alert-info py-3 px-3 mb-0" style={{ fontSize: "13px" }}>
              <i className="fa-solid fa-circle-info me-2 text-primary"></i> 
              Funds deposited via UPI/Netbanking are credited instantly. Withdrawals are processed within 24 hours.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Funds;
