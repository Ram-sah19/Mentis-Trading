import React, { useState, useEffect } from "react";
import axios from "axios";

import TopBar from "./TopBar";
import Menu from "./Menu";
import WatchList from "./WatchList";
import Summary from "./Summary";
import Holdings from "./Holdings";
import Positions from "./Positions";
import Orders from "./Orders";
import Funds from "./Funds";
import BuyActionWindow from "./BuyActionWindow";

const BACKEND_URL = "http://localhost:3002";

function Home() {
  const [activeTab, setActiveTab] = useState("summary");
  const [holdings, setHoldings] = useState([]);
  const [positions, setPositions] = useState([]);
  const [orders, setOrders] = useState([]);

  // Buy/Sell Order states
  const [selectedStock, setSelectedStock] = useState(null);
  const [orderMode, setOrderMode] = useState("BUY");
  const [showOrderWindow, setShowOrderWindow] = useState(false);

  // Fetch all user portfolio data
  const fetchData = async () => {
    try {
      const [holdingsRes, positionsRes, ordersRes] = await Promise.all([
        axios.get(`${BACKEND_URL}/allHoldings`),
        axios.get(`${BACKEND_URL}/allPositions`),
        axios.get(`${BACKEND_URL}/allOrders`)
      ]);
      setHoldings(holdingsRes.data);
      setPositions(positionsRes.data);
      setOrders(ordersRes.data);
    } catch (error) {
      console.error("Error fetching data from MERN API server:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Triggered when B or S is clicked in watchlist
  const handleOrderClick = (stock, mode) => {
    setSelectedStock(stock);
    setOrderMode(mode);
    setShowOrderWindow(true);
  };

  // Submit order to Express backend server
  const handlePlaceOrder = async (orderData) => {
    try {
      const response = await axios.post(`${BACKEND_URL}/newOrder`, orderData);
      console.log("Order execution response:", response.data);
      
      // Close window and refresh all datasets
      setShowOrderWindow(false);
      fetchData();
      
      // Auto redirect to orders tab to see transaction logs
      setActiveTab("orders");
    } catch (error) {
      console.error("Failed to execute order:", error);
      alert("Order placement failed. Check server connection.");
    }
  };

  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      {/* Top Header */}
      <TopBar />

      {/* Main Tabs Navigation */}
      <Menu activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Workspace Area: Sidebar Watchlist + Active Workspace Tab */}
      <div className="d-flex flex-row flex-grow-1" style={{ position: "relative" }}>
        {/* Watchlist Sidebar */}
        <WatchList onOrderClick={handleOrderClick} />

        {/* Main Workspace Frame */}
        <div className="main-workspace">
          {activeTab === "summary" && (
            <Summary holdings={holdings} positions={positions} />
          )}
          {activeTab === "holdings" && (
            <Holdings holdings={holdings} />
          )}
          {activeTab === "positions" && (
            <Positions positions={positions} />
          )}
          {activeTab === "orders" && (
            <Orders orders={orders} />
          )}
          {activeTab === "funds" && (
            <Funds />
          )}
        </div>
      </div>

      {/* Buy/Sell Order Panel Modal */}
      {showOrderWindow && selectedStock && (
        <BuyActionWindow
          stock={selectedStock}
          mode={orderMode}
          onClose={() => setShowOrderWindow(false)}
          onPlaceOrder={handlePlaceOrder}
        />
      )}
    </div>
  );
}

export default Home;
