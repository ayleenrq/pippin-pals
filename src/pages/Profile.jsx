import React from 'react';
import Vector1 from '../../Branding - Pippin & Pals_illustration/vector-1.png';
import ClothingBag from '../../Branding - Pippin & Pals_img/clothing bag pippin 1.png';

const Profile = () => {
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
            <span>👩</span>
          </div>
          <h3>Pippin Pal</h3>
          <p>Account backend will be connected later.</p>
          
          <div className="profile-btn-group">
            <button className="btn btn-primary">Order History</button>
            <button className="btn btn-outline">Address Book</button>
            <button className="btn btn-outline btn-signout">Sign Out</button>
          </div>
        </div>

        {/* Decorative / Reward section */}
        <div className="reward-section">
          <div className="reward-card">
            <h3>Pals Rewards</h3>
            <p>You have <strong>0</strong> Hug Points!</p>
            <p className="reward-note">Keep collecting points with every cozy order.</p>
            
            <img src={ClothingBag} alt="Bags" className="reward-img" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Profile;
