import React from 'react';
import Sidebar from './Sidebar';
import About from './About';
import Contact from './Contact';
import { Route, Routes } from 'react-router-dom';

// Utility function to get the CSRF token from the HTML meta tag
const getCsrfToken = () => {
	const metaTag = document.querySelector('meta[name="csrf-token"]');
	return metaTag ? metaTag.getAttribute('content') : '';
};

const Dashboard = () => {
	// Handle logout
	const handleLogout = async () => {
		try {
			const csrfToken = getCsrfToken();

			// Make a request to the Rails logout endpoint
			await fetch('/users/sign_out', {
				method: 'DELETE', // Use DELETE to log out in Devise
				credentials: 'include', // Include cookies in the request
				headers: {
					'Content-Type': 'application/json',
					'X-Requested-With': 'XMLHttpRequest', // Required for Rails
					'X-CSRF-Token': csrfToken, // Include CSRF token
				},
			});

			// Redirect to the login page or home page after logout
			window.location.href = '/users/sign_in';
		} catch (error) {
			console.error('Logout failed:', error);
		}
	};

	return (
		<div>
			<h1>Welcome to the React App!</h1>
			{/* Sidebar */}
			<Sidebar />
			{/* Logout Button */}
			<button
				onClick={handleLogout}
				className="dropdown-item d-flex align-items-center"
				style={{ display: 'flex', alignItems: 'center' }}
			>
				<i className="bi bi-box-arrow-right" style={{ marginRight: '8px' }}></i>
				Logout
			</button>
			{/* Main content */}
			<div
				className="main-content"
				style={{ marginLeft: '200px', padding: '20px' }}
			>
				<Routes>
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/dashboard" element={<div>Dashboard Content</div>} />
					{/* Thêm các route khác */}
				</Routes>
			</div>
		</div>
	);
};

export default Dashboard;
