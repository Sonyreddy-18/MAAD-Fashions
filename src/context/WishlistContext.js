import { reactive, computed } from "vue";

const STORAGE_KEY = "maad_wishlist";

/* =========================================
   LOAD WISHLIST FROM LOCAL STORAGE
========================================= */

function loadWishlist() {
  try {
    const savedWishlist = localStorage.getItem(STORAGE_KEY);

    if (!savedWishlist) {
      return [];
    }

    const parsedWishlist = JSON.parse(savedWishlist);

    if (!Array.isArray(parsedWishlist)) {
      return [];
    }

    return parsedWishlist;
  } catch (error) {
    console.error("Unable to load wishlist:", error);
    return [];
  }
}

/* =========================================
   WISHLIST STATE
========================================= */

const wishlist = reactive({
  items: loadWishlist(),
});

/* =========================================
   SAVE WISHLIST
========================================= */

function saveWishlist() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(wishlist.items));
  } catch (error) {
    console.error("Unable to save wishlist:", error);
  }
}

/* =========================================
   ADD TO WISHLIST
========================================= */

const addToWishlist = (product) => {
  const exists = wishlist.items.some(
    (item) => String(item.id) === String(product.id),
  );

  if (!exists) {
    wishlist.items.push({
      ...product,
    });

    saveWishlist();
  }
};

/* =========================================
   REMOVE FROM WISHLIST
========================================= */

const removeFromWishlist = (productId) => {
  const index = wishlist.items.findIndex(
    (item) => String(item.id) === String(productId),
  );

  if (index !== -1) {
    wishlist.items.splice(index, 1);

    saveWishlist();
  }
};

/* =========================================
   TOGGLE WISHLIST
========================================= */

const toggleWishlist = (product) => {
  const exists = wishlist.items.some(
    (item) => String(item.id) === String(product.id),
  );

  if (exists) {
    removeFromWishlist(product.id);
  } else {
    addToWishlist(product);
  }
};

/* =========================================
   CHECK WISHLIST
========================================= */

const isInWishlist = (productId) => {
  return wishlist.items.some((item) => String(item.id) === String(productId));
};

/* =========================================
   WISHLIST ITEMS
========================================= */

const wishlistItems = computed(() => wishlist.items);

/* =========================================
   WISHLIST COUNT
========================================= */

const wishlistCount = computed(() => wishlist.items.length);

/* =========================================
   CLEAR WISHLIST
========================================= */

const clearWishlist = () => {
  wishlist.items.splice(0, wishlist.items.length);

  saveWishlist();
};

/* =========================================
   EXPORT
========================================= */

export function useWishlist() {
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
