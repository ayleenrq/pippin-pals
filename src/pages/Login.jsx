import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Importing assets
import Vector1 from '../../Branding - Pippin & Pals_illustration/vector-1.png';
import RabbitSheep from '../../Branding - Pippin & Pals_img/rabbit & sheep 1.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [notice, setNotice] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login placeholder:', { email, password });
    setNotice('Account login will be connected after the Shopify and wishlist flow is finished.');
  };

  return (
    <div className="section" style={{ paddingTop: '150px', paddingBottom: '100px', backgroundColor: '#FEFFFC', minHeight: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      
      <div style={{ maxWidth: '450px', width: '100%', backgroundColor: '#F8FCE1', borderRadius: '40px', padding: '50px 40px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', position: 'relative' }}>
        
        {/* Decor */}
        <img src={RabbitSheep} alt="Mascot" style={{ position: 'absolute', top: '-80px', left: '50%', transform: 'translateX(-50%)', width: '150px' }} />

        <div className="features-header" style={{ marginBottom: '40px', marginTop: '20px' }}>
          <img src={Vector1} alt="" className="features-hook-img" style={{ width: '25px', marginBottom: '-5px' }} />
          <div className="section-tag" style={{ background: '#FFF1A1', padding: '8px 24px' }}>
            <h2 style={{ fontSize: '28px', margin: 0 }}>Welcome Back!</h2>
          </div>
        </div>

        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {notice && (
            <p style={{ color: '#E67C4F', background: '#FFF1A1', borderRadius: '12px', padding: '12px', lineHeight: 1.4 }}>
              {notice}
            </p>
          )}
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ fontFamily: "'New Bread', cursive", fontSize: '18px', color: '#E67C4F' }}>Email Address</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ padding: '16px 20px', borderRadius: '16px', border: '2px solid #D6E499', outline: 'none', fontSize: '16px', fontFamily: "'Quicksand', sans-serif" }}
              placeholder="pals@example.com"
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ fontFamily: "'New Bread', cursive", fontSize: '18px', color: '#E67C4F' }}>Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ padding: '16px 20px', borderRadius: '16px', border: '2px solid #D6E499', outline: 'none', fontSize: '16px', fontFamily: "'Quicksand', sans-serif" }}
              placeholder="••••••••"
            />
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '10px' }}>
            Sign In
          </button>

        </form>

        <p style={{ textAlign: 'center', marginTop: '24px', color: '#6D5649', fontSize: '16px' }}>
          New to our family? <Link to="/register" style={{ color: '#E67C4F', fontWeight: 'bold' }}>Create an account</Link>
        </p>

      </div>
    </div>
  );
};

export default Login;
