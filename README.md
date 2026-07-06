# Zerodha Clone - Mentis Trading Platform

A modern, responsive, and visually appealing clone of the **Zerodha** trading and investment platform. This project mimics the layout, pages, and overall design of Zerodha, built using React, React Router, and clean CSS styling.

---

## 🚀 Live Repository
This project is hosted on GitHub: [Ram-sah19/Mentis-Trading](https://github.com/Ram-sah19/Mentis-Trading)

---

## 🛠️ Tech Stack & Libraries
- **Frontend Core:** React (v19.x)
- **Routing:** React Router DOM (v7.x)
- **Styling:** Vanilla CSS (responsive grid layout, custom typography, animations)
- **Tooling:** React Scripts (Create React App environment)

---

## ✨ Features
1. **Interactive Navigation & Layout:** 
   - A clean, sticky header/navbar with drop-down layout matching Zerodha.
   - Comprehensive footer with links to disclaimers, company info, and terms.
2. **Dynamic Client-Side Routing:**
   - Single-page application architecture using React Router for seamless navigation.
3. **Structured Landing Pages:**
   - **Home:** Hero section, awards section, custom product promo, and CTA banners.
   - **About:** Details about the company philosophy, background, and key management team.
   - **Products:** Detailed view of Kite, Console, Coin, Varsity, and API services with download links.
   - **Pricing:** Clear pricing table detailing Free Equity Delivery, Intraday, and Mutual Funds brokerage charges.
   - **Support:** A knowledge-base search bar interface with categorized help topics.
4. **404 Custom Page:** Friendly fallback page for any unmatched routes.

---

## 📁 Project Structure

```text
Zerodha/
├── frontend/                  # React Frontend Application
│   ├── public/                # Static public assets (icons, images)
│   ├── src/
│   │   ├── landing_page/      # Core UI components and pages
│   │   │   ├── home/          # Home Page Components (Hero, Awards, etc.)
│   │   │   ├── about/         # About Page Components
│   │   │   ├── products/      # Product Page Components
│   │   │   ├── pricing/       # Pricing Page Components
│   │   │   ├── support/       # Support Page Components
│   │   │   ├── signup/        # Signup Page Setup
│   │   │   ├── Footer.js      # Global Footer
│   │   │   ├── Navbar.js      # Global Navigation Bar
│   │   │   ├── Notfound.js    # 404 Fallback page
│   │   │   └── Openaccount.js # Reusable Open Account CTA component
│   │   ├── index.css          # Global CSS stylesheet
│   │   └── index.js           # App mounting point and React Router config
│   ├── package.json           # Frontend dependencies & npm scripts
│   └── package-lock.json      # Dependency lock file
├── backend/                   # Reserved for backend services (API/Database)
├── push_to_github.bat         # Helper script for synchronizing nested git commits
└── README.md                  # Project documentation (this file)
```

---

## 🏃 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation & Launch

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Ram-sah19/Mentis-Trading.git
   cd Mentis-Trading
   ```

2. **Navigate to the Frontend Directory:**
   ```bash
   cd frontend
   ```

3. **Install Dependencies:**
   ```bash
   npm install
   ```

4. **Start the Development Server:**
   ```bash
   npm start
   ```
   The application will run locally on [http://localhost:3000](http://localhost:3000).

---

## 📤 Version Control Guide

If you add new changes and need to push all codes to GitHub, you can use the custom helper batch script located at the root of the project:

```cmd
.\push_to_github.bat
```

*(This automatically ensures that any nested `.git` directories inside the `frontend` subdirectory are cleaned up, avoiding empty submodule folders on your remote repository).*
