import { useEffect, useState } from 'react';
import { addWishlistItem, getWishlistIds, isWishlistItem, removeWishlistItem } from '../services/localWishlistService';

export const useWishlist = () => {
  const [wishlistIds, setWishlistIds] = useState(getWishlistIds);

  useEffect(() => {
    const syncWishlist = () => setWishlistIds(getWishlistIds());

    window.addEventListener('storage', syncWishlist);
    window.addEventListener('pippin-pals:wishlist-updated', syncWishlist);

    return () => {
      window.removeEventListener('storage', syncWishlist);
      window.removeEventListener('pippin-pals:wishlist-updated', syncWishlist);
    };
  }, []);

  const add = (productId) => addWishlistItem(productId);
  const remove = (productId) => removeWishlistItem(productId);
  const toggle = (productId) => {
    if (isWishlistItem(productId)) {
      removeWishlistItem(productId);
    } else {
      addWishlistItem(productId);
    }
  };

  return {
    wishlistIds,
    add,
    remove,
    toggle,
    has: (productId) => wishlistIds.includes(String(productId)),
  };
};
