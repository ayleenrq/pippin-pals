import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

import Vector1 from '../../Branding - Pippin & Pals_illustration/vector-1.png';
import ClothingBag from '../../Branding - Pippin & Pals_img/clothing bag pippin 1.png';

const Profile = () => {
  const { user, logout, isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (!isLoggedIn) {
    return (
      <div className="auth-page">
        <div className="auth-card">
          <img src={Vector1} alt="" className="features-hook-img" style={{ marginBottom: '10px' }} />
          <div className="section-tag" style={{ background: '#FFF1A1', padding: '10px 32px', marginBottom: '32px' }}>
            <h2 style={{ fontSize: '26px', margin: 0 }}>My Pippin Profile</h2>
          </div>
          <p style={{ textAlign: 'center', color: '#6D5649', fontSize: '17px', marginBottom: '28px', lineHeight: 1.5 }}>
            Login dulu untuk melihat profil kamu! 🐰
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link to="/login" className="btn btn-primary" style={{ fontSize: '18px', padding: '14px 36px' }}>
              Sign In
            </Link>
            <Link to="/register" className="btn btn-outline" style={{ fontSize: '18px', padding: '14px 36px' }}>
              Join the Family
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const initials = user.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className="section profile-section">
      <div className="features-header profile-header">
        <img src={Vector1} alt="" className="features-hook-img" />
        <div className="section-tag" style={{ background: '#FFF1A1' }}>
          <h2>My Pippin Profile</h2>
        </div>
      </div>

      <div className="profile-container">
        {/* Profile Info Card */}
        <div className="profile-info-card">
          <div className="profile-avatar">
            <span style={{ fontSize: '40px', fontFamily: "'New Bread', cursive", color: '#482C1C' }}>
              {initials}
            </span>
          </div>
          <h3>{user.name}</h3>
          <p>{user.email}</p>

          <div className="profile-btn-group">
            <Link to="/favorites" className="btn btn-primary" style={{ textAlign: 'center' }}>
              My Wishlist 💛
            </Link>
            <button className="btn btn-outline">Order History</button>
            <button className="btn btn-outline">Address Book</button>
            <button
              className="btn btn-outline btn-signout"
              onClick={handleLogout}
            >
              Sign Out
            </button>
          </div>
        </div>

        {/* Reward section */}
        <div className="reward-section">
          <div className="reward-card">
            <h3>Pals Rewards</h3>
            <p>
              You have <strong>{user.hugPoints || 0}</strong> Hug Points!
            </p>
            <p className="reward-note">Keep collecting points with every cozy order.</p>

            <img src={ClothingBag} alt="Bags" className="reward-img" />
          </div>

          <div className="profile-account-card">
            <h3>Account Details</h3>
            <div className="account-detail-row">
              <span className="account-detail-label">Name</span>
              <span className="account-detail-value">{user.name}</span>
            </div>
            <div className="account-detail-row">
              <span className="account-detail-label">Email</span>
              <span className="account-detail-value">{user.email}</span>
            </div>
            <div className="account-detail-row">
              <span className="account-detail-label">Member since</span>
              <span className="account-detail-value">
                {new Date(user.createdAt).toLocaleDateString('id-ID', { year: 'numeric', month: 'long' })}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
