import React, { useState } from 'react';

const LoginForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch('http://127.0.0.1:3000/api/v1/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					user: {
						email,
						password,
					},
				}),
			});

			if (response.ok) {
				const data = await response.json();
				localStorage.setItem('token', data.token);
				alert('Đăng ký thành công!');
				window.location.href = '/';
			} else {
				const errorData = await response.json();
				setError(errorData.error);
			}
		} catch (error) {
			console.error('Network error:', error);
			setError('Network error');
		}
	};

	return (
		<div>
			<h2>Login</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<label>Email:</label>
					<input
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div>
					<label>Password:</label>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<button type="submit">Login</button>
			</form>
		</div>
	);
};

export default LoginForm;
