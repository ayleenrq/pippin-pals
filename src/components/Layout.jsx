import React, { useState, useEffect, useRef } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useAuth } from '../context/AuthContext';
import { useWishlist } from '../hooks/useWishlist';

// Importing assets
import PrimaryLogo from '../../Branding - Pippin & Pals_icon/Primary Logo.svg';
import SearchIcon from '../../Branding - Pippin & Pals_icon/search_regular.svg';
import UserIcon from '../../Branding - Pippin & Pals_icon/user_3_regular.svg';
import HeartIcon from '../../Branding - Pippin & Pals_icon/heart_regular.svg';
import FooterVectorLeft from '../../Branding - Pippin & Pals_illustration/Vector.svg';
import FooterVectorRight from '../../Branding - Pippin & Pals_illustration/Vector (1).svg';
import Social1 from '../../Branding - Pippin & Pals_img/sosial-media/social_x_regular.png';
import Social2 from '../../Branding - Pippin & Pals_img/sosial-media/social_x_regular (1).png';
import Social3 from '../../Branding - Pippin & Pals_img/sosial-media/social_x_regular (2).png';
import Social4 from '../../Branding - Pippin & Pals_img/sosial-media/social_x_regular (3).png';
import Social5 from '../../Branding - Pippin & Pals_img/sosial-media/social_x_regular (4).png';
import { useSearchStore } from '../store/searchStore';

const Layout = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const { searchQuery, setSearchQuery } = useSearchStore();
  const { user, isLoggedIn, logout } = useAuth();
  const { wishlistIds } = useWishlist();
  const lastScrollY = useRef(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsMobileMenuOpen(false);
  };

  const wishlistCount = wishlistIds.length;

  return (
    <div className="app">
      {/* Navbar */}
      <nav className={`navbar ${!isVisible ? 'hidden' : ''} ${isScrolled ? 'scrolled' : ''}`}>
        <div className="logo">
          <Link to="/">
            <img src={PrimaryLogo} alt="Pippin & Pals" style={{ width: 140 }} />
          </Link>
        </div>

        {/* Desktop Nav Links */}
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <HashLink smooth to="/#story" className="nav-link">Our Story</HashLink>
          <HashLink smooth to="/#collection" className="nav-link">The Collection</HashLink>
          <Link to="/" className="nav-link">Journal</Link>
        </div>

        {/* Desktop Icons */}
        <div className="nav-icons">
          <div className="nav-search-container" style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
            {isSearchOpen && (
              <input
                type="text"
                placeholder="Search for pals..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                style={{
                  padding: '8px 16px',
                  borderRadius: '20px',
                  border: '2px solid #D6E499',
                  marginRight: '10px',
                  width: '200px',
                  outline: 'none',
                  fontFamily: "'Quicksand', sans-serif",
                }}
              />
            )}
            <div className="nav-icon" onClick={() => setIsSearchOpen(!isSearchOpen)}>
              <img src={SearchIcon} alt="Search" />
            </div>
          </div>

          <Link to="/profile" className="nav-icon nav-user-icon" title={isLoggedIn ? user?.name : 'Login'}>
            {isLoggedIn ? (
              <div className="nav-user-badge">
                {user?.name?.charAt(0).toUpperCase()}
              </div>
            ) : (
              <img src={UserIcon} alt="Profile" />
            )}
          </Link>

          <Link to="/favorites" className="nav-icon nav-heart-icon" title="Wishlist">
            <img src={HeartIcon} alt="Wishlist" />
            {wishlistCount > 0 && (
              <span className="nav-wishlist-count">{wishlistCount > 9 ? '9+' : wishlistCount}</span>
            )}
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className={`mobile-menu-btn ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-menu" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="mobile-menu-inner" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-menu-header">
              <img src={PrimaryLogo} alt="Pippin & Pals" style={{ width: 120 }} />
              <button className="mobile-menu-close" onClick={() => setIsMobileMenuOpen(false)}>✕</button>
            </div>

            {isLoggedIn && (
              <div className="mobile-user-greeting">
                <div className="mobile-user-avatar">{user?.name?.charAt(0).toUpperCase()}</div>
                <span>Halo, <strong>{user?.name}</strong>! 🐰</span>
              </div>
            )}

            <nav className="mobile-nav-links">
              <Link to="/" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>🏠 Home</Link>
              <HashLink smooth to="/#story" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>📖 Our Story</HashLink>
              <HashLink smooth to="/#collection" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>👗 The Collection</HashLink>
              <Link to="/favorites" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                💛 Wishlist {wishlistCount > 0 && <span className="mobile-wishlist-badge">{wishlistCount}</span>}
              </Link>
              {isLoggedIn ? (
                <>
                  <Link to="/profile" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>👤 My Profile</Link>
                  <button className="mobile-nav-link mobile-logout-btn" onClick={handleLogout}>🚪 Sign Out</button>
                </>
              ) : (
                <>
                  <Link to="/login" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>🔑 Sign In</Link>
                  <Link to="/register" className="mobile-nav-link mobile-register-link" onClick={() => setIsMobileMenuOpen(false)}>🌿 Join the Family</Link>
                </>
              )}
            </nav>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-scallop-top">
          {Array(8).fill(0).map((_, i) => <div key={i} className="footer-scallop-circle"></div>)}
        </div>

        <img src={FooterVectorRight} className="footer-decor mascot-left" alt="" />
        <img src={FooterVectorLeft} className="footer-decor mascot-right" alt="" />

        <div className="footer-main">
          <div className="footer-logo">Pippin & Pals</div>
          <div className="footer-socials">
            <img src={Social1} className="footer-social-icon" alt="Social" />
            <img src={Social2} className="footer-social-icon" alt="Social" />
            <img src={Social3} className="footer-social-icon" alt="Social" />
            <img src={Social4} className="footer-social-icon" alt="Social" />
            <img src={Social5} className="footer-social-icon" alt="Social" />
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Pippin & Pals. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
