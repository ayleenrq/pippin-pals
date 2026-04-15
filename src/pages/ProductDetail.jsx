import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useProduct } from '../hooks/useProducts';
import { useWishlist } from '../hooks/useWishlist';
import { createShopifyCheckout } from '../services/shopifyService';
import { toast } from 'sonner';

// Importing assets
import Vector1 from '../../Branding - Pippin & Pals_illustration/vector-1.png';
import HeartIcon from '../../Branding - Pippin & Pals_icon/heart_regular.svg';

// Helper functions removed as color swatches are now text-based.

const ProductDetail = () => {
  const { id } = useParams();
  const { product, isLoading, error } = useProduct(id);
  const wishlist = useWishlist();

  const [selectedOptions, setSelectedOptions] = useState({});
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  // Initialize default options from the first variant
  React.useEffect(() => {
    if (product?.variants?.length && Object.keys(selectedOptions).length === 0) {
      const defaultVariant = product.variants[0];
      const initialOptions = {};
      defaultVariant.selectedOptions.forEach((opt) => {
        initialOptions[opt.name] = opt.value;
      });
      setSelectedOptions(initialOptions);
    }
  }, [product]);

  // Find the exact matching variant based on all selected options
  const selectedVariant = useMemo(() => {
    if (!product?.variants?.length) return null;
    
    // Find variant where all its options match our current selected options
    return product.variants.find((v) =>
      v.selectedOptions.every((opt) => selectedOptions[opt.name] === opt.value)
    ) || product.variants[0]; // fallback if not found
  }, [product, selectedOptions]);

  // Sync main image with the selected variant's image
  const displayImages = useMemo(() => {
    if (!product) return [];
    return product.images?.length ? product.images : [{ url: product.img, altText: product.name }];
  }, [product]);

  // When color changes, switch the main image to match
  const handleOptionSelect = (optionName, value) => {
    const newOptions = { ...selectedOptions, [optionName]: value };
    setSelectedOptions(newOptions);

    // If color option changed, find matching image index
    if (optionName === 'Color') {
      const matchingVariant = product?.variants?.find(
        (v) => v.selectedOptions.some((o) => o.name === 'Color' && o.value === value)
      );
      if (matchingVariant?.image?.url) {
        const imgIdx = displayImages.findIndex((img) => img.url === matchingVariant.image.url);
        if (imgIdx >= 0) setActiveImgIndex(imgIdx);
      }
    }
  };

  const isWishlisted = product ? wishlist.has(product.routeId || product.id) : false;

  const handleAddWishlist = () => {
    const productId = product.routeId || product.id;
    if (wishlist.has(productId)) {
      wishlist.remove(productId);
      toast('Removed from wishlist 💔', { duration: 2000 });
    } else {
      wishlist.add(productId);
      toast.success('Added to wishlist! 💛', { duration: 2000 });
    }
  };

  const handleAddToCart = async () => {
    const variantId = selectedVariant?.id || product?.variantId;

    if (!variantId) {
      toast('Shopify belum tersambung. Ini produk demo! 🛍️', {
        description: 'Hubungkan Shopify untuk proses checkout sungguhan.',
        duration: 3000,
      });
      return;
    }

    if (!selectedVariant?.availableForSale) {
      toast.error('Varian ini sedang tidak tersedia.');
      return;
    }

    setIsAddingToCart(true);
    try {
      const cart = await createShopifyCheckout({ variantId });
      window.location.assign(cart.checkoutUrl);
    } catch (err) {
      toast.error(err.message || 'Gagal membuat checkout.');
    } finally {
      setIsAddingToCart(false);
    }
  };

  /* ─── Loading state ─── */
  if (isLoading) {
    return (
      <div className="detail-loading">
        <div className="loading-bounce">🐰</div>
        <p>Loading product...</p>
      </div>
    );
  }

  /* ─── Not found state ─── */
  if (!product) {
    return (
      <div className="detail-loading">
        <h2 className="text-primary">{error || 'Product not found.'}</h2>
        <Link to="/" className="btn btn-primary" style={{ marginTop: '24px' }}>
          Back to Home
        </Link>
      </div>
    );
  }

  const currentPrice = selectedVariant?.price || product.price;
  const isAvailable = selectedVariant ? selectedVariant.availableForSale : product.availableForSale;

  /* ─── Color option ─── */
  const colorOption = product.options?.find((o) => o.name === 'Color');
  const sizeOption  = product.options?.find((o) => o.name === 'Size');
  const otherOptions = product.options?.filter((o) => o.name !== 'Color' && o.name !== 'Size') || [];

  const isSizeAvailable = (sizeValue) => {
    const currentColor = selectedOptions['Color'];
    return product.variants.some(
      (v) =>
        v.availableForSale &&
        v.selectedOptions.some((o) => o.name === 'Size' && o.value === sizeValue) &&
        (!currentColor || v.selectedOptions.some((o) => o.name === 'Color' && o.value === currentColor))
    );
  };

  return (
    <div className="section product-detail-section">
      {/* Breadcrumb */}
      <div className="detail-breadcrumb">
        <Link to="/" className="detail-back-btn">← Back to Collection</Link>
      </div>

      <div className="detail-layout">
        {/* ── LEFT: Image Gallery ── */}
        <div className="detail-gallery">
          {/* Main image */}
          <div className="detail-main-img-box">
            {!isAvailable && (
              <div className="detail-sold-out-badge">Sold Out</div>
            )}
            <img
              src={displayImages[activeImgIndex]?.url || product.img}
              alt={displayImages[activeImgIndex]?.altText || product.name}
              className="detail-main-img"
            />
          </div>

          {/* Thumbnail strip */}
          {displayImages.length > 1 && (
            <div className="detail-thumbnails">
              {displayImages.map((img, idx) => (
                <button
                  key={idx}
                  className={`detail-thumb ${activeImgIndex === idx ? 'active' : ''}`}
                  onClick={() => setActiveImgIndex(idx)}
                >
                  <img src={img.url} alt={img.altText || `View ${idx + 1}`} />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* ── RIGHT: Product Info ── */}
        <div className="detail-info">
          {/* Title tag */}
          <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px', alignSelf: 'flex-start' }}>
            <img src={Vector1} alt="" className="features-hook-img" style={{ marginBottom: '-4px', marginLeft: 0 }} />
            <div className="section-tag" style={{ background: '#FFF1A1', padding: '8px 28px', margin: 0 }}>
              <h2 style={{ fontSize: '26px', margin: 0 }}>{product.name}</h2>
            </div>
          </div>

          {/* Price */}
          <div className="detail-price-row">
            <span className="detail-price">{currentPrice}</span>
            {!isAvailable && (
              <span className="detail-unavailable-tag">Out of Stock</span>
            )}
          </div>

          {/* Description */}
          <p className="detail-description">{product.description}</p>

          {/* ── Color Selector ── */}
          {colorOption && (
            <div className="detail-option-group">
              <div className="detail-option-label">
                Color
                {selectedOptions['Color'] && (
                  <span className="detail-option-selected">: {selectedOptions['Color']}</span>
                )}
              </div>
              <div className="detail-size-grid">
                {colorOption.values.map((colorVal) => {
                  const isSelected = selectedOptions['Color'] === colorVal;
                  // Check if any variant with this color is available
                  const hasStock = product.variants.some(
                    (v) =>
                      v.availableForSale &&
                      v.selectedOptions.some((o) => o.name === 'Color' && o.value === colorVal)
                  );
                  return (
                    <button
                      key={colorVal}
                      className={`size-btn ${isSelected ? 'selected' : ''} ${!hasStock ? 'out-of-stock' : ''}`}
                      onClick={() => hasStock && handleOptionSelect('Color', colorVal)}
                      title={!hasStock ? `${colorVal} — Sold Out` : colorVal}
                      disabled={!hasStock}
                    >
                      {colorVal}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* ── Size Selector ── */}
          {sizeOption && (
            <div className="detail-option-group">
              <div className="detail-option-label">
                Size
                {selectedOptions['Size'] && (
                  <span className="detail-option-selected">: {selectedOptions['Size']}</span>
                )}
              </div>
              <div className="detail-size-grid">
                {sizeOption.values.map((sizeVal) => {
                  const available = isSizeAvailable(sizeVal);
                  const isSelected = selectedOptions['Size'] === sizeVal;
                  return (
                    <button
                      key={sizeVal}
                      className={`size-btn ${isSelected ? 'selected' : ''} ${!available ? 'out-of-stock' : ''}`}
                      onClick={() => available && handleOptionSelect('Size', sizeVal)}
                      disabled={!available}
                      title={!available ? `${sizeVal} — Sold Out` : sizeVal}
                    >
                      {sizeVal}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* ── Other Options (if any) ── */}
          {otherOptions.map((opt) => (
            <div key={opt.name} className="detail-option-group">
              <div className="detail-option-label">
                {opt.name}
                {selectedOptions[opt.name] && (
                  <span className="detail-option-selected">: {selectedOptions[opt.name]}</span>
                )}
              </div>
              <div className="detail-size-grid">
                {opt.values.map((val) => (
                  <button
                    key={val}
                    className={`size-btn ${selectedOptions[opt.name] === val ? 'selected' : ''}`}
                    onClick={() => handleOptionSelect(opt.name, val)}
                  >
                    {val}
                  </button>
                ))}
              </div>
            </div>
          ))}

          {/* ── CTA Buttons ── */}
          <div className="detail-cta-row">
            <button
              className={`btn btn-primary detail-buy-btn ${isAddingToCart ? 'loading' : ''}`}
              onClick={handleAddToCart}
              disabled={!isAvailable || isAddingToCart}
            >
              {isAddingToCart ? 'Processing...' : isAvailable ? 'Buy Now' : 'Out of Stock'}
            </button>
            <button
              className={`detail-heart-btn ${isWishlisted ? 'heart-active' : ''}`}
              onClick={handleAddWishlist}
              title={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
            >
              <img src={HeartIcon} alt="Wishlist" />
            </button>
          </div>

          {/* ── Features list ── */}
          <div className="detail-extra">
            <ul className="detail-features-list">
              <li>☁️ 100% Organic Cotton</li>
              <li>🌱 Hypoallergenic & Breathable</li>
              <li>🤍 Cloud Soft Feel</li>
              <li>🌍 Fast Worldwide Shipping</li>
              <li>🔄 Free 30-Day Returns</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
