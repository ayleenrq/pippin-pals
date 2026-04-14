import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { faqs } from '../data/mockData';
import { useProducts } from '../hooks/useProducts';
import { useWishlist } from '../hooks/useWishlist';
import { createShopifyCheckout } from '../services/shopifyService';

// Importing assets
import HeartIcon from '../../Branding - Pippin & Pals_icon/heart_regular.svg';
import HeroBg from '../../Branding - Pippin & Pals_img/scenic-view-green-field-dotted-with-curious-sheep-bright-blue-sky-minimalist 1.png';
import StoryBg from '../../Branding - Pippin & Pals_img/scenic-view-green-field-dotted-with-curious-sheep-bright-blue-sky-minimalist 1.png';
import GirlsHugging from '../../Branding - Pippin & Pals_img/two-little-girls-hugging-smiling-white-background 1.png';
import StickerLogo from '../../Branding - Pippin & Pals_img/Sticker logo pippin 1.png';
import ClothingBag from '../../Branding - Pippin & Pals_img/clothing bag pippin 1.png';
import TestimonialImg from '../../Branding - Pippin & Pals_img/Rectangle 30.png';
import RabbitSheep from '../../Branding - Pippin & Pals_img/rabbit & sheep 1.png';
import RabbitSheep2 from '../../Branding - Pippin & Pals_img/rabbit & sheep 2.png';
import StampGraphic from '../../Branding - Pippin & Pals_illustration/organic-cotton-stamp.png';
import StampGraphicStory from '../../Branding - Pippin & Pals_illustration/organic-cotton-stamp-story.png';
import Vector1 from '../../Branding - Pippin & Pals_illustration/vector-1.png';
import Vector2 from '../../Branding - Pippin & Pals_illustration/vector-2.png';
import Vector3 from '../../Branding - Pippin & Pals_illustration/vector-3.png';
import Vector4 from '../../Branding - Pippin & Pals_illustration/vector-4.png';
import Group25 from '../../Branding - Pippin & Pals_icon/Group 25.svg';
import Group26 from '../../Branding - Pippin & Pals_icon/Group 26.svg';
import Group27 from '../../Branding - Pippin & Pals_icon/Group 27.svg';

import { useSearchStore } from '../store/searchStore';
import { getShopifyCollections } from '../services/shopifyService';
import { useEffect } from 'react';

const Home = () => {
  const [collections, setCollections] = useState([]);
  const [activeCollection, setActiveCollection] = useState(null);
  const { products, isLoading, error, isShopifyConfigured } = useProducts(activeCollection);
  const wishlist = useWishlist();
  const { searchQuery } = useSearchStore();
  const [activeFaq, setActiveFaq] = useState(0);

  useEffect(() => {
    if (isShopifyConfigured) {
      getShopifyCollections().then(setCollections).catch(console.error);
    }
  }, [isShopifyConfigured]);

  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleWishlist = (event, productId) => {
    event.preventDefault();
    wishlist.toggle(productId);
  };

  const handleAddToCart = async (event, product) => {
    event.preventDefault();
    event.stopPropagation();

    if (!isShopifyConfigured || !product.variantId) {
      alert('Shopify checkout is not configured yet.');
      return;
    }

    try {
      const cart = await createShopifyCheckout({ variantId: product.variantId });
      window.location.assign(cart.checkoutUrl);
    } catch (err) {
      alert(err.message || 'Unable to create Shopify checkout.');
    }
  };

  const productRoute = (product) => encodeURIComponent(product.routeId || product.handle || product.id);

  const scrollToCollection = () => {
    document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' });
  };

  const productsNotice = () => {
    if (isLoading) {
      return 'Loading the latest Shopify products...';
    }

    if (error) {
      return `${error} Showing local products for now.`;
    }

    if (!isShopifyConfigured) {
      return 'Connect Shopify env values to load live products.';
    }

    return '';
  };

  const notice = productsNotice();

  return (
    <>
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
            <button className="btn btn-primary" onClick={scrollToCollection}>See What's New</button>
          </div>
        </div>

        {/* Girls image — centered/slightly right in the scene */}
        <img src={GirlsHugging} alt="Little Girls Hugging" className="hero-girls" />

        {/* Organic cotton stamp — bottom right */}
        <img src={StampGraphic} alt="100% Organic Cotton" className="floating-stamp" />
      </section>

      <section id="story" className="section story-section">
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
        <div className="features-header">
          <img src={Vector1} alt="" className="features-hook-img" />
          <div className="features-header-content">
            <div className="header-mascots left">
              <img src={Vector2} alt="" />
              <img src={Vector3} alt="" />
              <img src={Vector4} alt="" />
            </div>
            <div className="section-tag">
              <h2>The Secret to a Perfect Hug</h2>
            </div>
            <div className="header-mascots right">
              <img src={Vector4} alt="" />
              <img src={Vector2} alt="" />
              <img src={Vector3} alt="" />
            </div>
          </div>
        </div>
        
        <div className="features-grid">
          <div className="feature-item">
            <div className="rabbit-card">
              <div className="rabbit-ears"></div>
              <div className="rabbit-head">
                <h3>Purely<br/>Organic</h3>
              </div>
            </div>
          </div>
          <div className="feature-item">
            <div className="rabbit-card">
              <div className="rabbit-ears"></div>
              <div className="rabbit-head">
                <h3>Cloud<br/>Soft Feel</h3>
              </div>
            </div>
          </div>
          <div className="feature-item">
            <div className="rabbit-card">
              <div className="rabbit-ears"></div>
              <div className="rabbit-head">
                <h3>Extra<br/>Breathable</h3>
              </div>
            </div>
          </div>
          <div className="feature-item">
            <div className="rabbit-card">
              <div className="rabbit-ears"></div>
              <div className="rabbit-head">
                <h3>Hypo<br/>allergenic</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Scalloped Divider */}
        <div className="features-divider">
          {Array(8).fill(0).map((_, i) => <div key={i} className="divider-circle"></div>)}
        </div>
      </section>

      {/* Products Section */}
      <section id="collection" className="section products-section">
        <div className="features-header">
          <img src={Vector1} alt="" className="features-hook-img" />
          <div className="section-tag">
            <h2>Meet Your New Favorite Pals</h2>
          </div>
        </div>
        
        <div className="filter-tabs">
          <div 
            className={`filter-tab ${activeCollection === null ? 'active' : ''}`}
            onClick={() => setActiveCollection(null)}
          >
            All
          </div>
          {['Top', 'Bottom', 'Dress', 'Sweater', 'Accessories'].map(tagName => {
            const col = collections.find(c => 
              c.title.toLowerCase() === tagName.toLowerCase() || 
              (tagName === 'Bottom' && c.title.toLowerCase() === 'bottoms')
            );
            if (!col) return null;
            return (
              <div 
                key={col.id} 
                className={`filter-tab ${activeCollection === col.handle ? 'active' : ''}`}
                onClick={() => setActiveCollection(col.handle)}
              >
                {tagName}
              </div>
            );
          })}
        </div>

        {notice && (
          <p style={{ color: '#6D5649', fontSize: '16px', marginBottom: '24px' }}>{notice}</p>
        )}

        <div className="products-grid">
          {filteredProducts.map(product => (
            <Link to={`/product/${productRoute(product)}`} className="product-card" key={product.id} style={{ textDecoration: 'none' }}>
              <div className="product-img-wrapper">
                <img src={product.img} alt={product.name} />
              </div>
              <div className="product-info">
                <div className="product-main-row">
                  <span className="product-price">{product.price}</span>
                  <div className="product-wishlist" onClick={(e) => handleWishlist(e, product.routeId || product.id)}>
                    <img src={HeartIcon} alt="Like" style={wishlist.has(product.routeId || product.id) ? { filter: 'invert(52%) sepia(87%) saturate(1514%) hue-rotate(328deg) brightness(98%) contrast(98%)' } : undefined} />
                  </div>
                </div>
                <div className="product-name">{product.name}</div>
                <button className="buy-now-btn" onClick={(e) => handleAddToCart(e, product)} style={{
                  marginTop: '15px',
                  width: '100%',
                  padding: '12px',
                  backgroundColor: '#E67C4F',
                  color: 'white',
                  border: 'none',
                  borderRadius: '12px',
                  fontFamily: "'Quicksand', sans-serif",
                  fontWeight: '700',
                  fontSize: '16px',
                  cursor: 'pointer',
                  transition: 'background 0.3s ease'
                }}>
                  Buy Now
                </button>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="section values-wrapper">
        <div className="values-scallop-top">
           {Array(8).fill(0).map((_, i) => <div key={i} className="scallop-circle"></div>)}
        </div>
        
        <div className="values-content">
          <div className="value-card v-organic">
            <h3>Purely Organic</h3>
            <p>100% premium cotton, gentle on skin and the planet.</p>
          </div>
          
          <div className="value-card v-comfort">
            <h3>Huggable Comfort</h3>
            <p>Crafted to feel like a warm, comforting embrace.</p>
          </div>

          <div className="value-card v-design">
            <h3>Whimsical Designs</h3>
            <p>Playful, mascot-inspired styles made for every adventure.</p>
          </div>

          <div className="values-main-image">
            <img src={ClothingBag} alt="Pippin & Pals Bags" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section testimonials-section">
        <div className="testimonials-mascot-bar">
          <div className="mascot-track">
            {[Group25, Group26, Group27, Group25, Group26, Group27, Group25, Group26, Group27, Group25, Group26, Group27, Group25, Group26, Group27, Group25, Group26, Group27, Group25, Group26, Group27, Group25, Group26, Group27].map((g, i) => (
              <img key={i} src={g} alt="" className="mascot-bar-icon" />
            ))}
          </div>
        </div>

        <div className="features-header">
          <img src={Vector1} alt="" className="features-hook-img" />
          <div className="section-tag" style={{background: '#FFF1A1'}}>
            <h2 style={{color: '#E67C4F'}}>Loved by Little Pals & Their Moms</h2>
          </div>
        </div>
        
        <div className="testimonial-container">
          <div className="testimonial-image-box">
            <img src={TestimonialImg} alt="Happy Mom and Child" className="testimonial-img" />
          </div>
          <div className="testimonial-content-box">
            <div className="testimonial-quote-bubble">
              <p>"I was looking for something gentle for my daughter’s sensitive skin, and Pippin & Pals exceeded my expectations. It truly is a hug you can wear. She refuses to take her organic dress off!"</p>
            </div>
            <div className="testimonial-author-box">
              <h4>Sarah M</h4>
              <p>Mom of Lily</p>
            </div>
          </div>
        </div>

        <div className="testimonial-dots">
          <div className="dot"></div>
          <div className="dot active"></div>
          <div className="dot"></div>
        </div>

        <div className="testimonials-scallop-bottom">
           {Array(8).fill(0).map((_, i) => <div key={i} className="testimonial-scallop-circle"></div>)}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section faq-section">
        <div className="features-header">
          <img src={Vector1} alt="" className="features-hook-img" />
          <div className="section-tag">
            <h2>Curious Minds Ask</h2>
          </div>
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
                <div className="faq-icon">
                  <span className="chevron"></span>
                </div>
              </div>
              <div className="faq-answer">
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="cta-oval-wrapper">
          <div className="cta-oval-inner">
             <h2>Ready to Wear the Softest Hug?</h2>
             <p>Give your little ones the comfort they deserve with our 100% organic essentials. Made for magic, naps, and everything in between.</p>
             <button className="cta-button">
               Shop the Collection <span>&rarr;</span>
             </button>
          </div>
          
          <img src={RabbitSheep} className="cta-mascot mascot-left" alt="Rabbit mascot" />
          <img src={RabbitSheep2} className="cta-mascot mascot-right" alt="Sheep mascot" />
        </div>
      </section>
    </>
  );
};

export default Home;
