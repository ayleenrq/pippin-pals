import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useProducts } from '../hooks/useProducts';
import { useWishlist } from '../hooks/useWishlist';
import { createShopifyCheckout } from '../services/shopifyService';
import { toast } from 'sonner';

// Importing assets
import Vector1 from '../../Branding - Pippin & Pals_illustration/vector-1.png';
import HeartFilled from '../../Branding - Pippin & Pals_icon/heart_regular.svg';
import RabbitSheep from '../../Branding - Pippin & Pals_img/rabbit & sheep 1.png';

const Favorites = () => {
  const { products, isLoading } = useProducts();
  const wishlist = useWishlist();
  const [cartLoading, setCartLoading] = useState(null);

  const handleRemove = (event, productId) => {
    event.preventDefault();
    wishlist.remove(productId);
    toast.success('Removed from wishlist 💔');
  };

  const handleAddToCart = async (event, product) => {
    event.preventDefault();
    event.stopPropagation();

    if (!product.variantId) {
      toast.error('Shopify checkout not configured yet.');
      return;
    }

    setCartLoading(product.id);
    try {
      const cart = await createShopifyCheckout({ variantId: product.variantId });
      window.location.assign(cart.checkoutUrl);
    } catch (err) {
      toast.error(err.message || 'Unable to create checkout.');
    } finally {
      setCartLoading(null);
    }
  };

  const favoriteProducts = products.filter((product) =>
    wishlist.has(product.routeId || product.id)
  );
  const productRoute = (product) =>
    encodeURIComponent(product.routeId || product.handle || product.id);

  return (
    <div className="section profile-section">
      <div className="features-header profile-header">
        <img src={Vector1} alt="" className="features-hook-img" />
        <div className="section-tag" style={{ background: '#FFC2C2' }}>
          <h2 style={{ color: '#E67C4F' }}>My Wishlist</h2>
        </div>
      </div>

      {isLoading && (
        <div className="favorites-loading">
          <div className="loading-bounce">🐰</div>
          <p>Loading your wishlist...</p>
        </div>
      )}

      {!isLoading && favoriteProducts.length === 0 && (
        <div className="favorites-empty">
          <img src={RabbitSheep} alt="Empty" className="favorites-empty-img" />
          <h3>Your wishlist is empty!</h3>
          <p>Tap the 💛 heart on products you love to save them here.</p>
          <Link to="/" className="btn btn-primary" style={{ marginTop: '24px' }}>
            Explore Collection
          </Link>
        </div>
      )}

      {!isLoading && favoriteProducts.length > 0 && (
        <>
          <p className="favorites-count">
            {favoriteProducts.length} item{favoriteProducts.length !== 1 ? 's' : ''} saved
          </p>
          <div className="products-grid favorites-grid">
            {favoriteProducts.map((product) => (
              <Link
                to={`/product/${productRoute(product)}`}
                className="product-card"
                key={product.id}
                style={{ textDecoration: 'none' }}
              >
                <div className="product-img-wrapper" style={{ border: '2px dashed #FFC2C2' }}>
                  <img src={product.img} alt={product.name} />
                  <button
                    className="add-to-cart-btn"
                    onClick={(e) => handleAddToCart(e, product)}
                    disabled={cartLoading === product.id}
                    title="Add to cart"
                  >
                    {cartLoading === product.id ? '...' : '+'}
                  </button>
                </div>
                <div className="product-info">
                  <div className="product-main-row">
                    <span className="product-price">{product.price}</span>
                    <div
                      className="product-wishlist wishlist-active"
                      onClick={(e) => handleRemove(e, product.routeId || product.id)}
                      title="Remove from wishlist"
                    >
                      <img
                        src={HeartFilled}
                        alt="Remove"
                        style={{
                          filter:
                            'invert(52%) sepia(87%) saturate(1514%) hue-rotate(328deg) brightness(98%) contrast(98%)',
                        }}
                      />
                    </div>
                  </div>
                  <div className="product-name">{product.name}</div>
                </div>
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Favorites;
