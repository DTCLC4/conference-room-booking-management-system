import React, { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha';

const SITE_KEY = '';

const Content: React.FC = () => {
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const handleCaptchaChange = (token: string | null) => {
    console.log('Captcha Token:', token);
    setCaptchaToken(token);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!captchaToken) {
      alert('Please complete the reCAPTCHA.');
      return;
    }

    // Gửi captchaToken kèm với dữ liệu form tới server
    const formData = {
      username: 'user one',
      email: 'userTwo@gmail.com',
      password: 'User@123456',
      'g-recaptcha-response': captchaToken, // Gửi token tới server
    };

    console.log('Form Data:', formData);

    // Gửi formData tới backend (API của bạn)
    fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        {/* Các trường khác của form (username, email, password) */}

        {/* Google reCAPTCHA */}
        <ReCAPTCHA
          sitekey={SITE_KEY}
          onChange={handleCaptchaChange}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Content
