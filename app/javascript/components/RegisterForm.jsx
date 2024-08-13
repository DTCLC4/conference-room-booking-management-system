import React, { useState } from 'react';

const RegisterForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passwordConfirmation, setPasswordConfirmation] = useState('');
	const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:3000/api/v1/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: {
            email,
            password,
            password_confirmation: passwordConfirmation,
          }
        }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
        alert('Đăng ký thành công!');
        window.location.href = '/login';
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
			<h2>Register</h2>
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
				<div>
					<label>Password Confirmation:</label>
					<input
						type="password"
						value={passwordConfirmation}
						onChange={(e) => setPasswordConfirmation(e.target.value)}
					/>
				</div>
				<button type="submit">Register</button>
			</form>
		</div>
	);
};

export default RegisterForm;
