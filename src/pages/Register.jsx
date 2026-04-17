import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

// Importing assets
import Vector1 from '../assets/svg/decorative-hook.svg';
import RabbitSheep2 from '../assets/branding/images/sheep-mascot.webp';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { register, isLoggedIn } = useAuth();
  const navigate = useNavigate();

  // Already logged in? Redirect to profile
  React.useEffect(() => {
    if (isLoggedIn) navigate('/profile', { replace: true });
  }, [isLoggedIn, navigate]);

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Password tidak cocok. Silakan cek lagi!');
      return;
    }

    if (password.length < 6) {
      setError('Password minimal 6 karakter ya!');
      return;
    }

    setIsLoading(true);
    try {
      await register(name, email, password);
      navigate('/profile');
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card auth-card-pink">
        {/* Mascot decor */}
        <img src={RabbitSheep2} alt="Mascot" className="auth-mascot auth-mascot-sm" loading="eager" fetchPriority="high" />

        <div className="features-header auth-header">
          <img src={Vector1} alt="" className="features-hook-img" style={{ width: '22px', marginBottom: '-4px' }} loading="lazy" />
          <div className="section-tag" style={{ background: '#FFF1A1', padding: '8px 28px' }}>
            <h2 style={{ fontSize: '26px', margin: 0 }}>Join the Family</h2>
          </div>
        </div>

        <form onSubmit={handleRegister} className="auth-form">
          {error && (
            <div className="auth-error">
              <span>🐰</span> {error}
            </div>
          )}

          <div className="auth-field">
            <label className="auth-label auth-label-dark">First Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="auth-input auth-input-white"
              placeholder="Pippin"
              autoComplete="given-name"
            />
          </div>

          <div className="auth-field">
            <label className="auth-label auth-label-dark">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="auth-input auth-input-white"
              placeholder="pals@example.com"
              autoComplete="email"
            />
          </div>

          <div className="auth-field">
            <label className="auth-label auth-label-dark">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="auth-input auth-input-white"
              placeholder="••••••••"
              autoComplete="new-password"
            />
          </div>

          <div className="auth-field">
            <label className="auth-label auth-label-dark">Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="auth-input auth-input-white"
              placeholder="••••••••"
              autoComplete="new-password"
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary auth-submit-btn"
            disabled={isLoading}
          >
            {isLoading ? 'Creating account...' : 'Create Account 🌿'}
          </button>
        </form>

        <p className="auth-footer-text auth-footer-dark">
          Already have an account?{' '}
          <Link to="/login" className="auth-link">Sign in here</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
