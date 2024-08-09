import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => (
  <Router>
    <Routes>

    </Routes>
  </Router>
);

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('react-root');
  const root = ReactDOM.createRoot(container);
  root.render(<App />);
});
