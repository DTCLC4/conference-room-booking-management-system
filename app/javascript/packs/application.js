import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from '../components/Dashboard';

// Import Bootstrap CSS và JS
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

// Import Bootstrap Icons
import "bootstrap-icons/font/bootstrap-icons.css";
import About from '../components/About';
import Contact from '../components/Contact';
import Login from '../components/Login';
const App = () => (
  <Router>
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/" element={<Dashboard />} />
    </Routes>
  </Router>
);

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('react-root');
  const root = ReactDOM.createRoot(container);
  root.render(<App />);
});
