import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { faqs } from '../data/mockData';
import { useProducts } from '../hooks/useProducts';
import { useWishlist } from '../hooks/useWishlist';
import { createShopifyCheckout } from '../services/shopifyService';
import { toast } from 'sonner';

// Importing assets
import HeartIcon from '../assets/branding/icons/heart-regular.svg';
import HeroBg from '../assets/branding/images/green-field-sheep-background.webp';
import StoryBg from '../assets/branding/images/green-field-sheep-background.webp';
import GirlsHugging from '../assets/branding/images/two-girls-hugging.webp';
import StickerLogo from '../assets/svg/pippin-pals-sticker.svg';
import ClothingBag from '../assets/branding/images/clothing-bag-mockup.webp';
import TestimonialImg from '../assets/branding/images/testimonial-mother-daughter.webp';
import TestimonialImg2 from '../assets/branding/images/testimonial-mother-child.webp';
import TestimonialImg3 from '../assets/branding/images/testimonial-mother-son.webp';
import RabbitSheep from '../assets/branding/images/rabbit-mascot.webp';
import RabbitSheep2 from '../assets/branding/images/sheep-mascot.webp';
import StampGraphic from '../assets/branding/illustrations/100-organic-cotton-100-organic-cotton-100-organic-cotton.svg';
import StampGraphicStory from '../assets/svg/organic-cotton-stamp-story.svg';
import Vector1 from '../assets/svg/decorative-hook.svg';
import Vector2 from '../assets/svg/decorative-child.svg';
import Vector3 from '../assets/svg/decorative-leaf.svg';
import Vector4 from '../assets/svg/decorative-rabbit.svg';
import Group25 from '../assets/branding/icons/group-25.svg';
import Group26 from '../assets/branding/icons/group-26.svg';
import Group27 from '../assets/branding/icons/group-27.svg';

import { useSearchStore } from '../store/searchStore';
import { getShopifyCollections } from '../services/shopifyService';
import { useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Home = () => {
  const [collections, setCollections] = useState([]);
  const [activeCollection, setActiveCollection] = useState(null);
  const { products, isLoading, error, isShopifyConfigured } = useProducts(activeCollection);
  const wishlist = useWishlist();
  const { searchQuery } = useSearchStore();
  const [activeFaq, setActiveFaq] = useState(0);
  const [activeMockFilter, setActiveMockFilter] = useState('All');

  // ── Scroll-reveal refs ──
  const [heroTitleRef, heroTitleVisible]       = useScrollAnimation({ threshold: 0.1 });
  const [heroContentRef, heroContentVisible]   = useScrollAnimation({ threshold: 0.1 });
  const [heroGirlsRef, heroGirlsVisible]       = useScrollAnimation({ threshold: 0.05 });
  const [heroStampRef, heroStampVisible]       = useScrollAnimation({ threshold: 0.05 });

  const [storyBadgeRef, storyBadgeVisible]     = useScrollAnimation({ threshold: 0.2 });
  const [storyImgRef, storyImgVisible]         = useScrollAnimation({ threshold: 0.1 });
  const [storyCardRef, storyCardVisible]       = useScrollAnimation({ threshold: 0.1 });
  const [storyStampRef, storyStampVisible]     = useScrollAnimation({ threshold: 0.1 });

  const [featHeaderRef, featHeaderVisible]     = useScrollAnimation({ threshold: 0.2 });
  const [feat1Ref, feat1Visible]               = useScrollAnimation({ threshold: 0.15 });
  const [feat2Ref, feat2Visible]               = useScrollAnimation({ threshold: 0.15 });
  const [feat3Ref, feat3Visible]               = useScrollAnimation({ threshold: 0.15 });
  const [feat4Ref, feat4Visible]               = useScrollAnimation({ threshold: 0.15 });

  const [prodHeaderRef, prodHeaderVisible]     = useScrollAnimation({ threshold: 0.2 });
  const [prodGridRef, prodGridVisible]         = useScrollAnimation({ threshold: 0.05 });

  const [valHeaderRef, valHeaderVisible]       = useScrollAnimation({ threshold: 0.1 });
  const [valCard1Ref, valCard1Visible]         = useScrollAnimation({ threshold: 0.15 });
  const [valCard2Ref, valCard2Visible]         = useScrollAnimation({ threshold: 0.15 });
  const [valCard3Ref, valCard3Visible]         = useScrollAnimation({ threshold: 0.15 });
  const [valImgRef, valImgVisible]             = useScrollAnimation({ threshold: 0.1 });

  const [testimHeaderRef, testimHeaderVisible] = useScrollAnimation({ threshold: 0.2 });
  const [testimBoxRef, testimBoxVisible]       = useScrollAnimation({ threshold: 0.1 });

  const [faqHeaderRef, faqHeaderVisible]       = useScrollAnimation({ threshold: 0.2 });
  const [faqContainerRef, faqContainerVisible] = useScrollAnimation({ threshold: 0.05 });

  const [ctaRef, ctaVisible]                   = useScrollAnimation({ threshold: 0.15 });
  const [ctaMascotLRef, ctaMascotLVisible]     = useScrollAnimation({ threshold: 0.1 });
  const [ctaMascotRRef, ctaMascotRVisible]     = useScrollAnimation({ threshold: 0.1 });


  const MOCK_CATEGORIES = ['All', 'Sweater', 'Dress', 'Socks', 'Accessories', 'Polo', 'Shorts'];
  const MOCK_CATEGORY_MAP = {
    'Sweater': [1], 'Dress': [2], 'Socks': [3],
    'Accessories': [4], 'Polo': [5], 'Shorts': [6],
  };

  const testimonials = [
    {
      img: TestimonialImg,
      quote: "I was looking for something gentle for my daughter’s sensitive skin, and Pippin & Pals exceeded my expectations. It truly is a hug you can wear. She refuses to take her organic dress off!",
      author: "Sarah M",
      relation: "Mom of Lily"
    },
    {
      img: TestimonialImg2,
      quote: "The quality is simply unmatched! After countless washes, the fabric is still just as soft and vibrant as day one. We love the whimsical mascots, especially the little sheep detail.",
      author: "Jessica R",
      relation: "Mom of Oliver"
    },
    {
      img: TestimonialImg3,
      quote: "My toddler usually fusses when getting dressed, but these clothes are so soft he actually helps me put them on. It gives me peace of mind knowing it's 100% organic cotton against his skin.",
      author: "Amanda C",
      relation: "Mom of Leo"
    }
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (isShopifyConfigured) {
      getShopifyCollections().then(setCollections).catch(console.error);
    }
  }, [isShopifyConfigured]);

  const filteredProducts = (() => {
    let base = products;
    if (!isShopifyConfigured && activeMockFilter !== 'All') {
      const ids = MOCK_CATEGORY_MAP[activeMockFilter] || [];
      base = products.filter(p => ids.includes(p.id));
    }
    return base.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  })();

  const handleWishlist = (event, product) => {
    event.preventDefault();
    event.stopPropagation();
    const productId = product.routeId || product.id;
    const wasInWishlist = wishlist.has(productId);
    wishlist.toggle(productId);
    if (wasInWishlist) {
      toast('Removed from wishlist 💔', { duration: 2000 });
    } else {
      toast.success('Added to wishlist! 💛', { duration: 2000 });
    }
  };

  const handleAddToCart = async (event, product) => {
    event.preventDefault();
    event.stopPropagation();

    // Mock mode: no Shopify variant, show friendly message
    if (!product.variantId) {
      toast('Shopify belum tersambung. Ini produk demo! 🛍️', {
        description: 'Hubungkan Shopify untuk proses checkout sungguhan.',
        duration: 3000,
      });
      return;
    }

    try {
      const cart = await createShopifyCheckout({ variantId: product.variantId });
      window.location.assign(cart.checkoutUrl);
    } catch (err) {
      toast.error(err.message || 'Gagal membuat checkout.');
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
        <img src={HeroBg} alt="Green Field" className="hero-bg" loading="eager" fetchPriority="high" />

        {/* Inner wrapper: title + text content */}
        <div className="hero-inner">
          {/* Big headline spanning full width */}
          <h1
            ref={heroTitleRef}
            className={`hero-title reveal-up${heroTitleVisible ? ' is-visible' : ''}`}
          >
            <span className="text-primary">A </span>
            <span className="text-secondary">Hug </span>
            <span className="text-pink">You </span>
            <span className="text-tertiary">Can </span>
            <span className="text-secondary">Wear</span>
          </h1>

          {/* Left-aligned subtitle + CTA */}
          <div
            ref={heroContentRef}
            className={`hero-content reveal-up reveal-delay-2${heroContentVisible ? ' is-visible' : ''}`}
          >
            <p className="hero-subtitle">Soft, organic essentials designed for little dreamers and every big discovery.</p>
            <button className="btn btn-primary" onClick={scrollToCollection}>See What's New</button>
          </div>
        </div>

        {/* Girls image — centered/slightly right in the scene */}
        <img
          ref={heroGirlsRef}
          src={GirlsHugging}
          alt="Little Girls Hugging"
          className={`hero-girls reveal-hero-girls${heroGirlsVisible ? ' is-visible' : ''}`} loading="eager" fetchPriority="high" />

        {/* Organic cotton stamp — bottom right wrapper for reveal */}
        <div
          ref={heroStampRef}
          className={`floating-stamp-wrapper reveal-fade reveal-delay-4${heroStampVisible ? ' is-visible' : ''}`}
        >
          {/* Inner image for looping spin */}
          <img
            src={StampGraphic}
            alt="100% Organic Cotton"
            className="floating-stamp looping-spin" loading="eager" />
        </div>
      </section>

      <section id="story" className="section story-section">
        <img src={StoryBg} alt="Green Field" className="story-bg" loading="lazy" />
        <div className="story-overlay"></div>
        
        <div className="story-content-wrapper">
          <div
            ref={storyBadgeRef}
            className={`story-badge reveal-story-badge${storyBadgeVisible ? ' is-visible' : ''}`}
          >
            <h2>Our Story</h2>
          </div>
          <img
            ref={storyImgRef}
            src={StickerLogo}
            alt="Logo Sticker"
            className={`story-img reveal-story-img${storyImgVisible ? ' is-visible' : ''}`} loading="lazy" />
          <div
            ref={storyCardRef}
            className={`story-card reveal-story-card${storyCardVisible ? ' is-visible' : ''}`}
          >
            <div className="story-card-hole"></div>
            <p>We are the softest embrace for your little ones. At Pippin &amp; Pals, 
              we craft 'huggable' essentials from the purest organic cotton. Inspired by playful wonder, 
              our mission is simple: to protect the joy of childhood, one gentle stitch at a time.</p>
          </div>
          <div
            ref={storyStampRef}
            className={`story-stamp-wrapper reveal-pop reveal-delay-3${storyStampVisible ? ' is-visible' : ''}`}
          >
            <img
              src={StampGraphicStory}
              alt="100% Organic Cotton"
              className="story-stamp looping-spin" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section features-section">
        <div
          ref={featHeaderRef}
          className={`features-header reveal-up${featHeaderVisible ? ' is-visible' : ''}`}
        >
          <img src={Vector1} alt="" className="features-hook-img" loading="lazy" />
          <div className="features-header-content">
            <div className="header-mascots left">
              <img src={Vector2} alt="" loading="lazy" />
              <img src={Vector3} alt="" loading="lazy" />
              <img src={Vector4} alt="" loading="lazy" />
            </div>
            <div className="section-tag">
              <h2>The Secret to a Perfect Hug</h2>
            </div>
            <div className="header-mascots right">
              <img src={Vector4} alt="" loading="lazy" />
              <img src={Vector2} alt="" loading="lazy" />
              <img src={Vector3} alt="" loading="lazy" />
            </div>
          </div>
        </div>
        
        <div className="features-grid">
          <div
            ref={feat1Ref}
            className={`feature-item reveal-up${feat1Visible ? ' is-visible' : ''}`}
          >
            <div className="rabbit-card">
              <div className="rabbit-ears"></div>
              <div className="rabbit-head">
                <h3>Purely<br/>Organic</h3>
              </div>
            </div>
          </div>
          <div
            ref={feat2Ref}
            className={`feature-item reveal-up reveal-delay-2${feat2Visible ? ' is-visible' : ''}`}
          >
            <div className="rabbit-card">
              <div className="rabbit-ears"></div>
              <div className="rabbit-head">
                <h3>Cloud<br/>Soft Feel</h3>
              </div>
            </div>
          </div>
          <div
            ref={feat3Ref}
            className={`feature-item reveal-up reveal-delay-3${feat3Visible ? ' is-visible' : ''}`}
          >
            <div className="rabbit-card">
              <div className="rabbit-ears"></div>
              <div className="rabbit-head">
                <h3>Extra<br/>Breathable</h3>
              </div>
            </div>
          </div>
          <div
            ref={feat4Ref}
            className={`feature-item reveal-up reveal-delay-4${feat4Visible ? ' is-visible' : ''}`}
          >
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
        <div
          ref={prodHeaderRef}
          className={`features-header reveal-up${prodHeaderVisible ? ' is-visible' : ''}`}
        >
          <img src={Vector1} alt="" className="features-hook-img" loading="lazy" />
          <div className="section-tag">
            <h2>Meet Your New Favorite Pals</h2>
          </div>
        </div>
        
        <div className="filter-tabs">
          {/* When Shopify is connected, show real collections; otherwise show mock categories */}
          {isShopifyConfigured ? (
            <>
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
            </>
          ) : (
            MOCK_CATEGORIES.map(cat => (
              <div
                key={cat}
                className={`filter-tab ${activeMockFilter === cat ? 'active' : ''}`}
                onClick={() => setActiveMockFilter(cat)}
              >
                {cat}
              </div>
            ))
          )}
        </div>

        {notice && (
          <p style={{ color: '#6D5649', fontSize: '16px', marginBottom: '24px' }}>{notice}</p>
        )}

        <div
          ref={prodGridRef}
          className="products-grid"
        >
          {filteredProducts.map((product, idx) => (
            <Link
              to={`/product/${productRoute(product)}`}
              className={`product-card reveal-up${prodGridVisible ? ' is-visible' : ''}`}
              key={product.id}
              style={{
                textDecoration: 'none',
                animationDelay: prodGridVisible ? `${idx * 0.08}s` : '0s',
              }}
            >
              <div className="product-img-wrapper">
                <img src={product.img} alt={product.name} loading="lazy" />
              </div>
              <div className="product-info">
                <div className="product-main-row">
                  <span className="product-price">{product.price}</span>
                  <button
                    className={`heart-btn ${wishlist.has(product.routeId || product.id) ? 'heart-active' : ''}`}
                    onClick={(e) => handleWishlist(e, product)}
                    title={wishlist.has(product.routeId || product.id) ? 'Remove from wishlist' : 'Add to wishlist'}
                  >
                    <img src={HeartIcon} alt="Wishlist" loading="lazy" />
                  </button>
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
          <div
            ref={valCard1Ref}
            className={`value-card v-organic reveal-left${valCard1Visible ? ' is-visible' : ''}`}
          >
            <h3>Purely Organic</h3>
            <p>100% premium cotton, gentle on skin and the planet.</p>
          </div>
          
          <div
            ref={valCard2Ref}
            className={`value-card v-comfort reveal-left reveal-delay-2${valCard2Visible ? ' is-visible' : ''}`}
          >
            <h3>Huggable Comfort</h3>
            <p>Crafted to feel like a warm, comforting embrace.</p>
          </div>

          <div
            ref={valCard3Ref}
            className={`value-card v-design reveal-right${valCard3Visible ? ' is-visible' : ''}`}
          >
            <h3>Whimsical Designs</h3>
            <p>Playful, mascot-inspired styles made for every adventure.</p>
          </div>

          <div
            ref={valImgRef}
            className={`values-main-image reveal-values-img${valImgVisible ? ' is-visible' : ''}`}
          >
            <img src={ClothingBag} alt="Pippin &amp; Pals Bags" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section testimonials-section">
        <div className="testimonials-mascot-bar">
          <div className="mascot-track">
            {[Group25, Group26, Group27, Group25, Group26, Group27, Group25, Group26, Group27, Group25, Group26, Group27, Group25, Group26, Group27, Group25, Group26, Group27, Group25, Group26, Group27, Group25, Group26, Group27].map((g, i) => (
              <img key={i} src={g} alt="" className="mascot-bar-icon" loading="lazy" />
            ))}
          </div>
        </div>

        <div
          ref={testimHeaderRef}
          className={`features-header reveal-up${testimHeaderVisible ? ' is-visible' : ''}`}
        >
          <img src={Vector1} alt="" className="features-hook-img" loading="lazy" />
          <div className="section-tag" style={{background: '#FFF1A1'}}>
            <h2 style={{color: '#E67C4F'}}>Loved by Little Pals &amp; Their Moms</h2>
          </div>
        </div>
        
        <div
          ref={testimBoxRef}
          className={`testimonial-container reveal-up reveal-delay-2${testimBoxVisible ? ' is-visible' : ''}`}
          style={{ transition: 'opacity 0.5s ease-in-out' }}
        >
          <div className="testimonial-image-box">
            <img key={activeTestimonial} src={testimonials[activeTestimonial].img} alt="Happy Mom and Child" className="testimonial-img" style={{ animation: 'fadeInUpBounce 0.6s ease forwards' }} loading="lazy" />
          </div>
          <div className="testimonial-content-box" key={`text-${activeTestimonial}`} style={{ animation: 'fadeInUpBounce 0.6s ease forwards' }}>
            <div className="testimonial-quote-bubble">
              <p>"{testimonials[activeTestimonial].quote}"</p>
            </div>
            <div className="testimonial-author-box">
              <h4>{testimonials[activeTestimonial].author}</h4>
              <p>{testimonials[activeTestimonial].relation}</p>
            </div>
          </div>
        </div>

        <div className="testimonial-dots">
          {testimonials.map((_, idx) => (
            <div 
              key={idx} 
              className={`dot ${activeTestimonial === idx ? 'active' : ''}`}
              onClick={() => setActiveTestimonial(idx)}
              style={{ cursor: 'pointer', transition: 'all 0.3s' }}
            ></div>
          ))}
        </div>

        <div className="testimonials-scallop-bottom">
           {Array(8).fill(0).map((_, i) => <div key={i} className="testimonial-scallop-circle"></div>)}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section faq-section">
        <div
          ref={faqHeaderRef}
          className={`features-header reveal-up${faqHeaderVisible ? ' is-visible' : ''}`}
        >
          <img src={Vector1} alt="" className="features-hook-img" loading="lazy" />
          <div className="section-tag">
            <h2>Curious Minds Ask</h2>
          </div>
        </div>
        
        <div
          ref={faqContainerRef}
          className={`faq-container reveal-up reveal-delay-2${faqContainerVisible ? ' is-visible' : ''}`}
        >
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
        <div
          ref={ctaRef}
          className={`cta-oval-wrapper reveal-scale${ctaVisible ? ' is-visible' : ''}`}
        >
          <div className="cta-oval-inner">
             <h2>Ready to Wear the Softest Hug?</h2>
             <p>Give your little ones the comfort they deserve with our 100% organic essentials. Made for magic, naps, and everything in between.</p>
             <button className="cta-button" onClick={scrollToCollection}>
               Shop the Collection <span>&rarr;</span>
             </button>
          </div>
          
          <img
            ref={ctaMascotLRef}
            src={RabbitSheep}
            className={`cta-mascot mascot-left reveal-mascot-left${ctaMascotLVisible ? ' is-visible' : ''}`}
            alt="Rabbit mascot" loading="lazy" />
          <img
            ref={ctaMascotRRef}
            src={RabbitSheep2}
            className={`cta-mascot mascot-right reveal-mascot-right${ctaMascotRVisible ? ' is-visible' : ''}`}
            alt="Sheep mascot" loading="lazy" />
        </div>
      </section>
    </>
  );
};

export default Home;
