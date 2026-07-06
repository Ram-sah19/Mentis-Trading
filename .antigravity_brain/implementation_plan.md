# Implementation Plan: Full-Stack Backend & Kite Dashboard Integration

We will build the Node.js/Express backend service connected to MongoDB, seed it with real stock portfolio data, and build a fully responsive, high-fidelity Kite Dashboard React application complete with watchlist tickers, buy/sell action windows, holdings charts (Chart.js), and order tracking.

---

## User Review Required

> [!IMPORTANT]
> - **MongoDB Connection**: The backend will connect to a local MongoDB instance (`mongodb://127.0.0.1:27017/zerodha`) by default. You will need to make sure your MongoDB service is running locally, or update the `.env` file with your Atlas connection string.
> - **Port Selection**: 
>   - The backend server will run on port `3002`.
>   - The dashboard React app will run on port `3001` (to avoid conflicting with the landing page on port `3000`).

---

## Proposed Changes

### 1. Node.js & Express Backend

We will set up the Express backend from scratch inside the `backend/` directory.

#### [NEW] [backend/package.json](file:///d:/DSA-Java/Mentis/Zerodha/backend/package.json)
- Define backend dependencies: `express`, `mongoose`, `cors`, `dotenv`, `body-parser`, `nodemon`.

#### [NEW] [backend/.env](file:///d:/DSA-Java/Mentis/Zerodha/backend/.env)
- Environment variables: `PORT=3002`, `MONGO_URI=mongodb://127.0.0.1:27017/zerodha`.

#### [NEW] [backend/model/HoldingsModel.js](file:///d:/DSA-Java/Mentis/Zerodha/backend/model/HoldingsModel.js)
- Schema for stock holdings: `name`, `qty`, `avg`, `price`, `net`, `day`.

#### [NEW] [backend/model/PositionsModel.js](file:///d:/DSA-Java/Mentis/Zerodha/backend/model/PositionsModel.js)
- Schema for open/intraday positions: `product`, `name`, `qty`, `avg`, `price`, `net`, `day`, `isLoss`.

#### [NEW] [backend/model/OrdersModel.js](file:///d:/DSA-Java/Mentis/Zerodha/backend/model/OrdersModel.js)
- Schema for transaction logs: `name`, `qty`, `price`, `mode`.

#### [NEW] [backend/seed.js](file:///d:/DSA-Java/Mentis/Zerodha/backend/seed.js)
- A utility script to seed the database collections with representative Indian stock data (RELIANCE, TCS, INFY, WIPRO, Tata Motors, etc.) and clear existing records.

#### [NEW] [backend/index.js](file:///d:/DSA-Java/Mentis/Zerodha/backend/index.js)
- Main entry point for the backend. Initiates MongoDB connection, configures CORS, and registers API endpoints:
  - `GET /allHoldings`
  - `GET /allPositions`
  - `GET /allOrders`
  - `POST /newOrder` (records orders and dynamically updates positions/holdings)

---

### 2. Kite Dashboard Frontend App

We will create a clean, responsive React SPA inside a new `dashboard/` directory.

#### [NEW] [dashboard/package.json](file:///d:/DSA-Java/Mentis/Zerodha/dashboard/package.json)
- Define frontend dashboard dependencies: `react`, `react-dom`, `react-router-dom`, `axios`, `chart.js`, `react-chartjs-2`.

#### [NEW] [dashboard/vite.config.js](file:///d:/DSA-Java/Mentis/Zerodha/dashboard/vite.config.js)
- Configure Vite server to run on port `3001`.

#### [NEW] [dashboard/src/components/TopBar.js](file:///d:/DSA-Java/Mentis/Zerodha/dashboard/src/components/TopBar.js)
- Header panel showing index status (Nifty 50 and Sensex) with live value styling and client navigation search.

#### [NEW] [dashboard/src/components/Menu.js](file:///d:/DSA-Java/Mentis/Zerodha/dashboard/src/components/Menu.js)
- Sidebar navigation menu for switching dashboard sections.

#### [NEW] [dashboard/src/components/WatchList.js](file:///d:/DSA-Java/Mentis/Zerodha/dashboard/src/components/WatchList.js)
- Sidebar widget listing stock tickers. Hover states reveal Buy/Sell triggers. Includes mini sparklines showing daily price fluctuations.

#### [NEW] [dashboard/src/components/BuyActionWindow.js](file:///d:/DSA-Java/Mentis/Zerodha/dashboard/src/components/BuyActionWindow.js)
- Overlay dialog for entering order quantity and price, posting transaction requests to the backend server.

#### [NEW] [dashboard/src/components/Summary.js](file:///d:/DSA-Java/Mentis/Zerodha/dashboard/src/components/Summary.js)
- Primary workspace banner showing investments, current portfolio valuation, total P&L, and cash balances.

#### [NEW] [dashboard/src/components/Holdings.js](file:///d:/DSA-Java/Mentis/Zerodha/dashboard/src/components/Holdings.js)
- Grid table displaying stock holdings, average prices, net returns, and embeds the DoughnutChart component.

#### [NEW] [dashboard/src/components/DoughnutChart.js](file:///d:/DSA-Java/Mentis/Zerodha/dashboard/src/components/DoughnutChart.js)
- Renders stock distribution allocations dynamically using `react-chartjs-2`.

#### [NEW] [dashboard/src/components/Positions.js](file:///d:/DSA-Java/Mentis/Zerodha/dashboard/src/components/Positions.js)
- Intraday position summaries with conditional formatting for green/red profit/loss tags.

#### [NEW] [dashboard/src/components/Orders.js](file:///d:/DSA-Java/Mentis/Zerodha/dashboard/src/components/Orders.js)
- Ledger displaying transaction history fetched from the backend.

#### [NEW] [dashboard/src/components/Home.js](file:///d:/DSA-Java/Mentis/Zerodha/dashboard/src/components/Home.js)
- Layout frame assembling the TopBar, WatchList, and active workspace components.

---

## Verification Plan

### Automated/Local Tests
1. **Backend Connectivity**: Start MongoDB, run `node seed.js` to populate data, run `node index.js` and verify endpoint outputs on `http://localhost:3002/allHoldings` and `http://localhost:3002/allPositions`.
2. **Dashboard Render**: Run the dashboard app on `http://localhost:3001`, check table rendering, verify allocations doughnut chart renders correctly, and place a mock order via the Watchlist to verify CRUD operation logs.
