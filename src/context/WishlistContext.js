import { reactive, computed } from "vue";

const wishlist = reactive({
  items: [],
});

export function useWishlist() {
  // ADD
  const addToWishlist = (product) => {
    const exists = wishlist.items.some((item) => item.id === product.id);

    if (!exists) {
      wishlist.items.push({
        ...product,
      });
    }
  };

  // REMOVE
  const removeFromWishlist = (productId) => {
    const index = wishlist.items.findIndex((item) => item.id === productId);

    if (index !== -1) {
      wishlist.items.splice(index, 1);
    }
  };

  // TOGGLE
  const toggleWishlist = (product) => {
    const exists = wishlist.items.some((item) => item.id === product.id);

    if (exists) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  // CHECK
  const isInWishlist = (productId) => {
    return wishlist.items.some((item) => item.id === productId);
  };

  // ITEMS
  const wishlistItems = computed(() => wishlist.items);

  // COUNT
  const wishlistCount = computed(() => wishlist.items.length);

  // CLEAR
  const clearWishlist = () => {
    wishlist.items.splice(0, wishlist.items.length);
  };

  return {
    wishlistItems,
    wishlistCount,
    addToWishlist,
    removeFromWishlist,
    toggleWishlist,
    isInWishlist,
    clearWishlist,
  };
}
