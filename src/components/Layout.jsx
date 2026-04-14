import React, { useState, useEffect, useRef } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

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
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const { searchQuery, setSearchQuery } = useSearchStore();
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine if scrolled enough to show background
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine visibility based on direction
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        // Scrolling down - hide
        setIsVisible(false);
      } else {
        // Scrolling up - show
        setIsVisible(true);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      {/* Navbar */}
      <nav className={`navbar ${!isVisible ? 'hidden' : ''} ${isScrolled ? 'scrolled' : ''}`}>
        <div className="logo">
          <Link to="/">
            <img src={PrimaryLogo} alt="Pippin & Pals" style={{ width: 140 }} />
          </Link>
        </div>
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <HashLink smooth to="/#story" className="nav-link">Our Story</HashLink>
          <HashLink smooth to="/#collection" className="nav-link">The Collection</HashLink>
          <Link to="/" className="nav-link">Journal</Link>
        </div>
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
                  fontFamily: "'Quicksand', sans-serif"
                }}
              />
            )}
            <div className="nav-icon" onClick={() => setIsSearchOpen(!isSearchOpen)}>
              <img src={SearchIcon} alt="Search" />
            </div>
          </div>
          <Link to="/profile" className="nav-icon"><img src={UserIcon} alt="Profile" /></Link>
          <Link to="/favorites" className="nav-icon"><img src={HeartIcon} alt="Wishlist" /></Link>
        </div>
      </nav>

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
