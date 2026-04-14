const WISHLIST_KEY = 'pippin-pals:wishlist';

const readWishlist = () => {
  try {
    return JSON.parse(localStorage.getItem(WISHLIST_KEY)) || [];
  } catch {
    return [];
  }
};

const writeWishlist = (items) => {
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(items));
  window.dispatchEvent(new CustomEvent('pippin-pals:wishlist-updated'));
};

export const getWishlistIds = () => readWishlist();

export const addWishlistItem = (productId) => {
  const id = String(productId);
  const items = readWishlist();

  if (!items.includes(id)) {
    writeWishlist([...items, id]);
  }
};

export const removeWishlistItem = (productId) => {
  const id = String(productId);
  writeWishlist(readWishlist().filter((item) => item !== id));
};

export const isWishlistItem = (productId) => readWishlist().includes(String(productId));
