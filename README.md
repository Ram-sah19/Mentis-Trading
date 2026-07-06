# Zerodha MERN Trading Clone

This project is a high-fidelity full-stack replica of Zerodha's trading ecosystem, featuring a responsive marketing landing page, an Express.js & MongoDB backend server, and a premium real-time simulation trading dashboard (Kite clone) built with React and Chart.js.

---

## Folder Structure

```text
Zerodha/
├── backend/            # Express Server APIs & MongoDB Schemas
│   ├── model/          # Mongoose collections (Holdings, Positions, Orders)
│   ├── .env            # Server configuration (PORT, MONGO_URI)
│   ├── index.js        # Main entry point (Port: 3002)
│   └── seed.js         # Database seeding script
├── dashboard/          # Kite Trading Dashboard Application
│   ├── src/            # React codebase & Chart.js allocations
│   ├── index.html      # SPA root template
│   ├── vite.config.js  # Vite server configuration (Port: 3001)
│   └── package.json    
└── frontend/           # Zerodha Marketing Landing Pages (Port: 3000)
```

---

## Get Started

Ensure that **MongoDB** is running locally on your machine (`mongodb://127.0.0.1:27017`) or update the `MONGO_URI` environment string in `backend/.env` to point to your MongoDB Atlas cluster.

### 1. Seed & Start Backend API Server

Open a terminal window and run:
```bash
cd backend

# Install express, mongoose, cors, nodemon
npm install

# Seed the database collections with mock stocks (Reliance, TCS, Infosys, etc.)
node seed.js

# Start Express server on http://localhost:3002
npm run dev
```

### 2. Start Kite Trading Dashboard

Open a second terminal window and run:
```bash
cd dashboard

# Install react, react-router-dom, react-chartjs-2, chart.js, axios
npm install

# Run trading terminal on http://localhost:3001
npm run dev
```

### 3. Start Marketing Landing Page

Open a third terminal window and run:
```bash
cd frontend

# Install bootstrap, fontawesome, react-router-dom
npm install

# Run marketing portal on http://localhost:3000
npm start
```

---

## API Documentation

- `GET http://localhost:3002/allHoldings` - Retrieves all seeded long-term portfolio stock items.
- `GET http://localhost:3002/allPositions` - Retrieves all current-session open trading positions.
- `GET http://localhost:3002/allOrders` - Retrieves chronological transaction execution logs.
- `POST http://localhost:3002/newOrder` - Submits a new market order:
  - Accepts JSON payload: `{ "name": "INFY", "qty": 5, "price": 1385.10, "mode": "BUY" }`
  - Saves transaction to order log.
  - Dynamically updates active open positions (increases quantity on BUY, decrements/closes on SELL).
