import React, { useEffect } from 'react';

const getCsrfToken = () => {
  const metaTag = document.querySelector('meta[name="csrf-token"]');
  return metaTag ? metaTag.getAttribute('content') : '';
};

const Login = () => {
  useEffect(() => {
    // Load the Google Identity Services script
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.defer = true;
    script.onload = () => {
      window.google.accounts.id.initialize({
        client_id: '832475006050-i6s9jucchob9k0q6utkiqklu7rrl67la.apps.googleusercontent.com', // Replace with your Client ID
        callback: handleCredentialResponse,
      });

      window.google.accounts.id.renderButton(
        document.getElementById('google-signin-button'),
        { theme: 'outline', size: 'large' }
      );
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleCredentialResponse = async (response) => {
    try {
      const idToken = response.credential;

      const res = await fetch('/api/v1/auth/google_oauth2', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': getCsrfToken(),
        },
        body: JSON.stringify({ id_token: idToken }),
      });

      const result = await res.json();
      console.log(result);
    } catch (error) {
      console.error('Google login failed:', error);
    }
  };

  return (
    <div>
      <div id="google-signin-button"></div>
    </div>
  );
};

export default Login;
