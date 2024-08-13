import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import Bootstrap CSS và JS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

// Import Bootstrap Icons
import 'bootstrap-icons/font/bootstrap-icons.css';

import Home from '../components/Home';

const App = () => (
	<Router>
		<Routes>
			<Route path="/" element={<Home />} />{' '}
		</Routes>
	</Router>
);

document.addEventListener('DOMContentLoaded', () => {
	const container = document.getElementById('react-root');
	const root = ReactDOM.createRoot(container);
	root.render(<App />);
});
