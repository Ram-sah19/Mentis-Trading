import React from "react";

function Menu({ activeTab, setActiveTab }) {
  const tabs = [
    { id: "summary", label: "Dashboard" },
    { id: "orders", label: "Orders" },
    { id: "holdings", label: "Holdings" },
    { id: "positions", label: "Positions" },
    { id: "funds", label: "Funds" }
  ];

  return (
    <div className="d-flex align-items-center border-bottom px-4" style={{ backgroundColor: "#fff" }}>
      {/* Brand Logo in Navigation Row */}
      <div className="d-flex align-items-center me-5">
        <img 
          src="media/images/logo.svg" 
          alt="Kite Logo" 
          style={{ width: "80px", opacity: 0.85 }} 
          onError={(e) => {
            // Fallback to text if image is not copy-pasted yet
            e.target.style.display = "none";
            e.target.parentNode.innerHTML = "<strong style='color:#ff5722; font-size:16px; letter-spacing:1px;'>KITE</strong>";
          }}
        />
      </div>

      {/* Tabs */}
      <div className="d-flex flex-grow-1">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`menu-tab ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
