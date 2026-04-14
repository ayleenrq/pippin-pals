import React from 'react';
import { useParams } from 'react-router-dom';
import { useProduct } from '../hooks/useProducts';
import { useWishlist } from '../hooks/useWishlist';
import { createShopifyCheckout, isShopifyConfigured } from '../services/shopifyService';

// Importing assets
import Vector1 from '../../Branding - Pippin & Pals_illustration/vector-1.png';
import HeartIcon from '../../Branding - Pippin & Pals_icon/heart_regular.svg';

const ProductDetail = () => {
  const { id } = useParams();
  const { product, isLoading, error } = useProduct(id);
  const wishlist = useWishlist();

  const handleAddWishlist = async () => {
    wishlist.toggle(product.routeId || product.id);
  };

  const handleAddToCart = async () => {
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

  if (isLoading) {
    return (
      <div className="section" style={{ minHeight: '60vh', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '120px' }}>
        <h2 className="text-primary">Loading product...</h2>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="section" style={{ minHeight: '60vh', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '120px' }}>
        <h2 className="text-primary">{error || 'Product not found.'}</h2>
      </div>
    );
  }

  return (
    <div className="section product-detail-section" style={{ paddingTop: '150px', paddingBottom: '100px', backgroundColor: '#FEFFFC' }}>
      <div className="detail-container" style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: '60px', padding: '0 40px' }}>
        
        {/* Left Side: Product Image */}
        <div className="detail-image-box" style={{ flex: '1', backgroundColor: '#F8FCE1', borderRadius: '32px', padding: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src={product.img} alt={product.name} style={{ width: '100%', maxWidth: '400px', objectFit: 'contain' }} />
        </div>

        {/* Right Side: Product Info */}
        <div className="detail-info-box" style={{ flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          
          <div className="features-header" style={{ marginBottom: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src={Vector1} alt="" className="features-hook-img" style={{ marginBottom: '-5px' }} />
            <div className="section-tag" style={{ background: '#FFF1A1', padding: '10px 30px' }}>
              <h2 style={{ fontSize: '32px' }}>{product.name}</h2>
            </div>
          </div>

          <p className="product-price" style={{ fontSize: '42px', marginBottom: '20px' }}>{product.price}</p>
          
          <p className="product-description" style={{ fontSize: '18px', color: '#6D5649', lineHeight: '1.6', marginBottom: '40px' }}>
            {product.description}
          </p>

          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <button className="btn btn-primary" onClick={handleAddToCart} style={{ padding: '18px 48px', fontSize: '24px', flex: '1' }}>Buy Now</button>
            <button className="btn btn-outline" onClick={handleAddWishlist} style={{ borderRadius: '50%', width: '70px', height: '70px', padding: '0', display: 'flex', justifyContent: 'center', alignItems: 'center', border: 'none', background: '#FFC2C2' }}>
              <img src={HeartIcon} alt="Wishlist" style={{ width: '30px' }} />
            </button>
          </div>

          <div className="detail-extra" style={{ marginTop: '50px', paddingTop: '30px', borderTop: '2px dashed #D6E499' }}>
            <ul style={{ listStyleType: 'none', padding: '0', color: '#6D5649', fontSize: '16px', lineHeight: '1.8' }}>
              <li>☁️ 100% Organic Cotton</li>
              <li>🌱 Hypoallergenic & Breathable</li>
              <li>🤍 Cloud Soft Feel</li>
              <li>🌍 Fast Worldwide Shipping</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
