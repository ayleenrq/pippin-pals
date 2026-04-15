import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

// Importing assets
import Vector1 from '../../Branding - Pippin & Pals_illustration/vector-1.png';
import RabbitSheep from '../../Branding - Pippin & Pals_img/rabbit & sheep 1.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login, isLoggedIn } = useAuth();
  const navigate = useNavigate();

  // Already logged in? Redirect to profile
  React.useEffect(() => {
    if (isLoggedIn) navigate('/profile', { replace: true });
  }, [isLoggedIn, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    try {
      await login(email, password);
      navigate('/profile');
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        {/* Mascot decor */}
        <img src={RabbitSheep} alt="Mascot" className="auth-mascot" />

        <div className="features-header auth-header">
          <img src={Vector1} alt="" className="features-hook-img" style={{ width: '22px', marginBottom: '-4px' }} />
          <div className="section-tag" style={{ background: '#FFF1A1', padding: '8px 28px' }}>
            <h2 style={{ fontSize: '26px', margin: 0 }}>Welcome Back!</h2>
          </div>
        </div>

        <form onSubmit={handleLogin} className="auth-form">
          {error && (
            <div className="auth-error">
              <span>🐰</span> {error}
            </div>
          )}

          <div className="auth-field">
            <label className="auth-label">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="auth-input"
              placeholder="pals@example.com"
              autoComplete="email"
            />
          </div>

          <div className="auth-field">
            <label className="auth-label">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="auth-input"
              placeholder="••••••••"
              autoComplete="current-password"
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary auth-submit-btn"
            disabled={isLoading}
          >
            {isLoading ? 'Signing in...' : 'Sign In 🌿'}
          </button>
        </form>

        <p className="auth-footer-text">
          New to our family?{' '}
          <Link to="/register" className="auth-link">Create an account</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
