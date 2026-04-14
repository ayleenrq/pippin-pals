import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useWishlistStore = create(
  persist(
    (set, get) => ({
      wishlist: [],
      addToWishlist: (product) => {
        const { wishlist } = get();
        if (!wishlist.find((p) => p.id === product.id)) {
          set({ wishlist: [...wishlist, product] });
        }
      },
      removeFromWishlist: (productId) => {
        const { wishlist } = get();
        set({ wishlist: wishlist.filter((p) => p.id !== productId) });
      },
      isInWishlist: (productId) => {
        const { wishlist } = get();
        return !!wishlist.find((p) => p.id === productId);
      },
      toggleWishlist: (product) => {
        const { wishlist } = get();
        if (wishlist.find((p) => p.id === product.id)) {
          set({ wishlist: wishlist.filter((p) => p.id !== product.id) });
        } else {
          set({ wishlist: [...wishlist, product] });
        }
      },
    }),
    {
      name: 'pippin-wishlist',
    }
  )
);
