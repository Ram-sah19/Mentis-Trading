import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import SkeletonWrapper from './landing_page/components/SkeletonWrapper';

// Lazy loading components for production code splitting
const Homepage = React.lazy(() => import('./landing_page/home/Homepage'));
const Signup = React.lazy(() => import('./landing_page/signup/Signup'));
const Aboutpage = React.lazy(() => import('./landing_page/about/Aboutpage'));
const Productpage = React.lazy(() => import('./landing_page/products/Productpage'));
const Pricingpage = React.lazy(() => import('./landing_page/pricing/Pricingpage'));
const Supportpage = React.lazy(() => import('./landing_page/support/Supportpage'));
const Notfound = React.lazy(() => import('./landing_page/Notfound'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar />
    <Suspense fallback={<SkeletonWrapper />}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* Both signup and login routes render the unified Signup component with appropriate initialMode props */}
        <Route path="/signup" element={<Signup initialMode="signup" />} />
        <Route path="/login" element={<Signup initialMode="login" />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/product" element={<Productpage />} />
        <Route path="/pricing" element={<Pricingpage />} />
        <Route path="/support" element={<Supportpage />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </Suspense>
    <Footer />
  </BrowserRouter>
);
