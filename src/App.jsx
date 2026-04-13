import React, { useState } from 'react';
import './index.css';

// Importing assets
import PrimaryLogo from '../Branding - Pippin & Pals_icon/Primary Logo.svg';
import SearchIcon from '../Branding - Pippin & Pals_icon/search_regular.svg';
import UserIcon from '../Branding - Pippin & Pals_icon/user_3_regular.svg';
import HeartIcon from '../Branding - Pippin & Pals_icon/heart_regular.svg';
import CartAddIcon from '../Branding - Pippin & Pals_icon/add_regular.svg';

import HeroBg from '../Branding - Pippin & Pals_img/scenic-view-green-field-dotted-with-curious-sheep-bright-blue-sky-minimalist 1.png';
import StoryBg from '../Branding - Pippin & Pals_img/scenic-view-green-field-dotted-with-curious-sheep-bright-blue-sky-minimalist 1.png';
import GirlsHugging from '../Branding - Pippin & Pals_img/two-little-girls-hugging-smiling-white-background 1.png';
import StickerLogo from '../Branding - Pippin & Pals_img/Sticker logo pippin 1.png';
import ClothingBag from '../Branding - Pippin & Pals_img/clothing bag pippin 1.png';
import TestimonialImg from '../Branding - Pippin & Pals_img/Rectangle 27.png';
import RabbitSheep from '../Branding - Pippin & Pals_img/rabbit & sheep 1.png';
import RabbitSheep2 from '../Branding - Pippin & Pals_img/rabbit & sheep 2.png';

// Product images
import Prod1 from '../Branding - Pippin & Pals_img/Rectangle 29.png';
import Prod2 from '../Branding - Pippin & Pals_img/Rectangle 29-1.png';
import Prod3 from '../Branding - Pippin & Pals_img/Rectangle 29-2.png';
import Prod4 from '../Branding - Pippin & Pals_img/Rectangle 29-3.png';
import Prod5 from '../Branding - Pippin & Pals_img/Rectangle 29-4.png';
import Prod6 from '../Branding - Pippin & Pals_img/Rectangle 29-5.png';

import StampGraphic from '../Branding - Pippin & Pals_illustration/organic-cotton-stamp.png';
import StampGraphicStory from '../Branding - Pippin & Pals_illustration/organic-cotton-stamp-story.png';

const products = [
  { id: 1, name: "Apricot Pals Knit Sweater", price: "$38.00", img: Prod1 },
  { id: 2, name: "Farmnilla Sleeveless Dress", price: "$42.50", img: Prod2 },
  { id: 3, name: "Tiny Steps Sock Set", price: "$18.90", img: Prod3 },
  { id: 4, name: "Pippin’s Pom-Pom Play Cap", price: "$22.50", img: Prod4 },
  { id: 5, name: "Patchy Pals Organic Polo", price: "$32.25", img: Prod5 },
  { id: 6, name: "Cozy Sunbeams Shorts", price: "$28.00", img: Prod6 },
];

const faqs = [
  { q: "How do I find the perfect fit?", a: "Kids grow fast! We recommend checking our Size Guide link. If you’re stuck between two sizes, we always suggest \"sizing up\" for a longer-lasting hug." },
  { q: "What if it doesn't fit?", a: "No worries! We offer free and easy returns within 30 days of purchase for items that are unworn and unwashed." },
  { q: "Do you ship worldwide?", a: "Yes, we ship globally! We want little pals everywhere to experience our cloud-soft comfort." },
  { q: "Are the designs limited edition?", a: "Some of our seasonal mascot collections are limited! Grab them while they are still in stock." },
];

function App() {
  const [activeFaq, setActiveFaq] = useState(0);

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <img src={PrimaryLogo} alt="Pippin & Pals" style={{ width: 140 }} />
        </div>
        <div className="nav-links">
          <a href="#" className="nav-link">Home</a>
          <a href="#" className="nav-link">Our Story</a>
          <a href="#" className="nav-link">The Collection</a>
          <a href="#" className="nav-link">Journal</a>
        </div>
        <div className="nav-icons">
          <div className="nav-icon"><img src={SearchIcon} alt="Search" /></div>
          <div className="nav-icon"><img src={UserIcon} alt="Profile" /></div>
          <div className="nav-icon"><img src={HeartIcon} alt="Wishlist" /></div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section hero-section">
        {/* Full-width field/grass background */}
        <img src={HeroBg} alt="Green Field" className="hero-bg" />

        {/* Inner wrapper: title + text content */}
        <div className="hero-inner">
          {/* Big headline spanning full width */}
          <h1 className="hero-title">
            <span className="text-primary">A </span>
            <span className="text-secondary">Hug </span>
            <span className="text-pink">You </span>
            <span className="text-tertiary">Can </span>
            <span className="text-secondary">Wear</span>
          </h1>

          {/* Left-aligned subtitle + CTA */}
          <div className="hero-content">
            <p className="hero-subtitle">Soft, organic essentials designed for little dreamers and every big discovery.</p>
            <button className="btn btn-primary">See What's New</button>
          </div>
        </div>

        {/* Girls image — centered/slightly right in the scene */}
        <img src={GirlsHugging} alt="Little Girls Hugging" className="hero-girls" />

        {/* Organic cotton stamp — bottom right */}
        <img src={StampGraphic} alt="100% Organic Cotton" className="floating-stamp" />
      </section>

      <section className="section story-section">
        <img src={StoryBg} alt="Green Field" className="story-bg" />
        <div className="story-overlay"></div>
        
        <div className="story-content-wrapper">
          <div className="story-badge">
            <h2>Our Story</h2>
          </div>
          <img src={StickerLogo} alt="Logo Sticker" className="story-img" />
          <div className="story-card">
            <div className="story-card-hole"></div>
            <p>We are the softest embrace for your little ones. At Pippin & Pals, 
              we craft 'huggable' essentials from the purest organic cotton. Inspired by playful wonder, 
              our mission is simple: to protect the joy of childhood, one gentle stitch at a time.</p>
          </div>
          <img src={StampGraphicStory} alt="100% Organic Cotton" className="story-stamp" />
        </div>
      </section>

      {/* Features Section */}
      <section className="section features-section">
        <div className="section-tag">
          <h2>The Secret to a Perfect Hug</h2>
        </div>
        
        <div className="features-grid">
          <div className="feature-item">
            <div className="feature-icon-wrapper">
              <img src={StampGraphic} alt="Organic" style={{width: 140, filter: 'hue-rotate(90deg)'}} />
            </div>
            <h3>Purely Organic</h3>
          </div>
          <div className="feature-item">
            <div className="feature-icon-wrapper">
              <img src={RabbitSheep} alt="Soft" style={{width: 120}} />
            </div>
            <h3>Cloud Soft Feel</h3>
          </div>
          <div className="feature-item">
            <div className="feature-icon-wrapper">
               <img src={RabbitSheep2} alt="Breathable" style={{width: 100}} />
            </div>
            <h3>Extra Breathable</h3>
          </div>
          <div className="feature-item">
            <div className="feature-icon-wrapper">
               <div style={{width: 80, height: 80, background: '#D6E499', borderRadius: '50%'}}></div>
            </div>
            <h3>Hypoallergenic</h3>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section products-section">
        <div className="section-tag">
          <h2 style={{fontSize: 36}}>Meet Your New Favorite Pals</h2>
        </div>
        
        <div className="filter-tabs">
          <div className="filter-tab active">All</div>
          <div className="filter-tab">Top</div>
          <div className="filter-tab">Bottom</div>
          <div className="filter-tab">Dress</div>
          <div className="filter-tab">Sweater</div>
          <div className="filter-tab">Sleepwear</div>
        </div>

        <div className="products-grid">
          {products.map(product => (
            <div className="product-card" key={product.id}>
              <div className="product-img-wrapper">
                <img src={product.img} alt={product.name} />
              </div>
              <button className="cart-btn">
                <img src={CartAddIcon} alt="Add to cart" />
              </button>
              <div className="product-info">
                <div className="product-price">
                  {product.price}
                  <img src={HeartIcon} style={{width: 32, cursor: 'pointer'}} alt="Like" />
                </div>
                <div className="product-name">{product.name}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="section values-wrapper">
        <div className="values-decor-top">
           {Array(5).fill(0).map((_, i) => <div key={i} className="values-circle"></div>)}
        </div>
        
        <div className="values-container">
          <div style={{display: 'flex', flexDirection: 'column', gap: 30}}>
             <div className="value-card">
               <h3>Purely Organic</h3>
               <p>100% premium cotton, gentle on skin and the planet.</p>
             </div>
             <div className="value-card">
               <h3>Huggable Comfort</h3>
               <p>Crafted to feel like a warm, comforting embrace.</p>
             </div>
          </div>
          <div style={{position: 'relative'}}>
             <div className="value-card" style={{marginTop: 50}}>
               <h3>Whimsical Designs</h3>
               <p>Playful, mascot-inspired styles made for every adventure.</p>
             </div>
             <img src={ClothingBag} className="value-img" alt="Bags" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section testimonials-section">
        <div className="section-tag" style={{background: '#FFF1A1'}}>
          <h2 style={{color: '#E67C4F'}}>Loved by Little Pals & Their Moms</h2>
        </div>
        
        <div className="testimonial-container">
          <img src={TestimonialImg} alt="Happy Mom and Child" className="testimonial-img" />
          <div className="testimonial-content">
            <div className="testimonial-quote">
              "I was looking for something gentle for my daughter’s sensitive skin, and Pippin & Pals exceeded my expectations. It truly is a hug you can wear. She refuses to take her organic dress off!"
            </div>
            <div className="testimonial-author">
              <h4>Sarah M.</h4>
              <p>Mom of Lily</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section faq-section">
        <div className="section-tag">
          <h2>Curious Minds Ask</h2>
        </div>
        
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeFaq === index ? 'active' : ''}`}
              onClick={() => setActiveFaq(index === activeFaq ? -1 : index)}
            >
              <div className="faq-header">
                <h3>{faq.q}</h3>
                <div className="faq-icon">{activeFaq === index ? '-' : '+'}</div>
              </div>
              <div className="faq-answer">{faq.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="cta-box">
          <div className="cta-inner">
             <h2>Ready to Wear the Softest Hug?</h2>
             <p>Give your little ones the comfort they deserve with our 100% organic essentials. Made for magic, naps, and everything in between.</p>
             <button className="btn btn-primary" style={{fontSize: 24, padding: '20px 50px'}}>Shop the Collection</button>
          </div>
          
          <img src={RabbitSheep} className="cta-image-left" alt="Decor" />
          <img src={RabbitSheep2} className="cta-image-right" alt="Decor" />
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 Pippin & Pals. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
