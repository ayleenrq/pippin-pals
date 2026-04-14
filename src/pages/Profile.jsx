import React from 'react';
import Vector1 from '../../Branding - Pippin & Pals_illustration/vector-1.png';
import ClothingBag from '../../Branding - Pippin & Pals_img/clothing bag pippin 1.png';

const Profile = () => {
  return (
    <div className="section" style={{ paddingTop: '150px', paddingBottom: '100px', backgroundColor: '#FEFFFC', minHeight: '80vh' }}>
      
      <div className="features-header" style={{ marginBottom: '60px' }}>
        <img src={Vector1} alt="" className="features-hook-img" />
        <div className="section-tag" style={{ background: '#FFF1A1' }}>
          <h2>My Pippin Profile</h2>
        </div>
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', gap: '40px', padding: '0 20px' }}>
        
        {/* Profile Info Card */}
        <div style={{ flex: '1', backgroundColor: '#F8FCE1', borderRadius: '32px', padding: '40px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
          <div style={{ width: '120px', height: '120px', backgroundColor: '#D6E499', borderRadius: '50%', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: '50px' }}>👩</span>
          </div>
          <h3 style={{ textAlign: 'center', color: '#E67C4F', fontSize: '32px', marginBottom: '10px' }}>Pippin Pal</h3>
          <p style={{ textAlign: 'center', color: '#6D5649', fontSize: '18px', marginBottom: '30px' }}>Account backend will be connected later.</p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <button className="btn btn-primary" style={{ width: '100%', fontSize: '18px', padding: '12px' }}>Order History</button>
            <button className="btn btn-outline" style={{ width: '100%', fontSize: '18px', padding: '12px' }}>Address Book</button>
            <button className="btn btn-outline" style={{ width: '100%', fontSize: '18px', padding: '12px', border: '2px solid #FFC2C2', color: '#E67C4F' }}>Sign Out</button>
          </div>
        </div>

        {/* Decorative / Reward section */}
        <div style={{ flex: '1.5', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ backgroundColor: '#D6E499', borderRadius: '32px', padding: '40px', position: 'relative', overflow: 'hidden', height: '100%' }}>
            <h3 style={{ color: '#482C1C', fontSize: '28px', marginBottom: '15px', position: 'relative', zIndex: '2' }}>Pals Rewards</h3>
            <p style={{ color: '#482C1C', fontSize: '18px', position: 'relative', zIndex: '2' }}>You have <strong>0</strong> Hug Points!</p>
            <p style={{ color: '#6D5649', marginTop: '10px', fontSize: '16px', position: 'relative', zIndex: '2' }}>Keep collecting points with every cozy order.</p>
            
            <img src={ClothingBag} alt="Bags" style={{ position: 'absolute', right: '-40px', bottom: '-40px', width: '250px', opacity: '0.8' }} />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Profile;
