import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useProducts } from '../hooks/useProducts';
import { useWishlist } from '../hooks/useWishlist';
import { createShopifyCheckout } from '../services/shopifyService';

// Importing assets
import Vector1 from '../../Branding - Pippin & Pals_illustration/vector-1.png';
import HeartIcon from '../../Branding - Pippin & Pals_icon/heart_regular.svg';

const Favorites = () => {
  const { products, isLoading, isShopifyConfigured } = useProducts();
  const wishlist = useWishlist();
  const [error, setError] = useState('');

  const handleRemove = (event, productId) => {
    event.preventDefault();
    wishlist.remove(productId);
  };

  const handleAddToCart = async (event, product) => {
    event.preventDefault();

    if (!isShopifyConfigured || !product.variantId) {
      alert('Shopify checkout is not configured yet.');
      return;
    }

    try {
      const cart = await createShopifyCheckout({ variantId: product.variantId });
      window.location.assign(cart.checkoutUrl);
    } catch (err) {
      setError(err.message || 'Unable to create Shopify checkout.');
    }
  };

  const favoriteProducts = products.filter((product) => wishlist.has(product.routeId || product.id));
  const productRoute = (product) => encodeURIComponent(product.routeId || product.handle || product.id);

  return (
    <div className="section" style={{ paddingTop: '150px', paddingBottom: '120px', backgroundColor: '#FEFFFC', minHeight: '80vh' }}>
      
      <div className="features-header" style={{ marginBottom: '60px' }}>
        <img src={Vector1} alt="" className="features-hook-img" />
        <div className="section-tag" style={{ background: '#FFC2C2' }}>
          <h2 style={{ color: '#E67C4F' }}>My Wishlist</h2>
        </div>
      </div>

      {!isShopifyConfigured && (
        <div style={{ textAlign: 'center', marginTop: '40px', color: '#6D5649', fontSize: '18px' }}>
          Wishlist works locally now. Connect Shopify env values to load live products.
        </div>
      )}

      {error && (
        <div style={{ textAlign: 'center', marginTop: '40px', color: '#E67C4F', fontSize: '18px' }}>{error}</div>
      )}

      {isLoading && (
        <div style={{ textAlign: 'center', marginTop: '80px', color: '#6D5649', fontSize: '20px' }}>Loading your wishlist...</div>
      )}

      {!isLoading && favoriteProducts.length > 0 ? (
        <div className="products-grid">
          {favoriteProducts.map(product => (
            <Link to={`/product/${productRoute(product)}`} className="product-card" key={product.id} style={{ textDecoration: 'none' }}>
              <div className="product-img-wrapper" style={{ border: '2px dashed #FFC2C2' }}>
                <img src={product.img} alt={product.name} />
                <button className="add-to-cart-btn" onClick={(e) => handleAddToCart(e, product)}>
                  <span>+</span>
                </button>
              </div>
              <div className="product-info">
                <div className="product-main-row">
                  <span className="product-price">{product.price}</span>
                  <div className="product-wishlist" onClick={(e) => handleRemove(e, product.routeId || product.id)}>
                    <img src={HeartIcon} alt="Like" style={{ filter: 'invert(52%) sepia(87%) saturate(1514%) hue-rotate(328deg) brightness(98%) contrast(98%)' }} />
                  </div>
                </div>
                <div className="product-name">{product.name}</div>
              </div>
            </Link>
          ))}
        </div>
      ) : (!isLoading && (
        <div style={{ textAlign: 'center', marginTop: '80px' }}>
          <p style={{ fontSize: '24px', color: '#6D5649' }}>Your wishlist is currently empty.</p>
          <Link to="/" className="btn btn-primary" style={{ marginTop: '20px' }}>Explore Collection</Link>
        </div>
      ))}

    </div>
  );
};

export default Favorites;
