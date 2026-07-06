import React from "react";

function TopBar() {
  return (
    <div className="topbar-container d-flex align-items-center justify-content-between">
      {/* Index Ticker Indicators */}
      <div className="d-flex align-items-center">
        <div className="index-ticker">
          <span className="text-muted me-1">NIFTY 50</span>
          <span className="ticker-value up">24,320.55</span>
          <span className="text-muted ms-1 fs-11" style={{ fontSize: "11px" }}>+112.30 (+0.46%)</span>
        </div>
        <div className="index-ticker d-none d-md-block">
          <span className="text-muted me-1">SENSEX</span>
          <span className="ticker-value up">79,985.40</span>
          <span className="text-muted ms-1 fs-11" style={{ fontSize: "11px" }}>+380.15 (+0.48%)</span>
        </div>
      </div>

      {/* Center Search & Account Info */}
      <div className="d-flex align-items-center gap-4">
        {/* User avatar indicator */}
        <div className="d-flex align-items-center gap-2 cursor-pointer" style={{ cursor: "pointer" }}>
          <div className="avatar bg-light border text-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: "32px", height: "32px", fontSize: "12px", fontWeight: "600" }}>
            RS
          </div>
          <span className="text-muted d-none d-sm-inline" style={{ fontSize: "13px", fontWeight: "500" }}>RAM123</span>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
