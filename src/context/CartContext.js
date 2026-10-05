import { reactive, computed } from "vue";

const STORAGE_KEY = "maad_cart";

/* =========================================
   LOAD CART FROM LOCAL STORAGE
========================================= */

function loadCart() {
  try {
    const savedCart = localStorage.getItem(STORAGE_KEY);

    if (!savedCart) {
      return [];
    }

    const parsedCart = JSON.parse(savedCart);

    if (!Array.isArray(parsedCart)) {
      return [];
    }

    return parsedCart.map((item) => ({
      ...item,
      quantity: Number(item.quantity || 1),
      size: item.size || "",
    }));
  } catch (error) {
    console.error("Unable to load cart:", error);
    return [];
  }
}

/* =========================================
   CART STATE
========================================= */

const cart = reactive({
  items: loadCart(),
});

/* =========================================
   SAVE CART
========================================= */

function saveCart() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart.items));
  } catch (error) {
    console.error("Unable to save cart:", error);
  }
}

/* =========================================
   ADD TO CART
========================================= */

const addToCart = (product) => {
  const existingItem = cart.items.find(
    (item) => String(item.id) === String(product.id),
  );

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.items.push({
      ...product,
      quantity: 1,
      size: product.size || "",
    });
  }

  saveCart();
};

/* =========================================
   REMOVE FROM CART
========================================= */

const removeFromCart = (productId) => {
  const index = cart.items.findIndex(
    (item) => String(item.id) === String(productId),
  );

  if (index !== -1) {
    cart.items.splice(index, 1);
    saveCart();
  }
};

/* =========================================
   INCREASE QUANTITY
========================================= */

const increaseQuantity = (productId) => {
  const item = cart.items.find((item) => String(item.id) === String(productId));

  if (item) {
    item.quantity += 1;
    saveCart();
  }
};

/* =========================================
   DECREASE QUANTITY
========================================= */

const decreaseQuantity = (productId) => {
  const item = cart.items.find((item) => String(item.id) === String(productId));

  if (!item) return;

  if (item.quantity > 1) {
    item.quantity -= 1;
  } else {
    removeFromCart(productId);
    return;
  }

  saveCart();
};

/* =========================================
   SET PRODUCT SIZE
========================================= */

const setItemSize = (productId, size) => {
  const item = cart.items.find((item) => String(item.id) === String(productId));

  if (!item) return;

  item.size = size;

  saveCart();
};

/* =========================================
   CLEAR CART
========================================= */

const clearCart = () => {
  cart.items.splice(0, cart.items.length);

  saveCart();
};

/* =========================================
   CART ITEMS
========================================= */

const cartItems = computed(() => cart.items);

/* =========================================
   TOTAL NUMBER OF PRODUCTS
========================================= */

const cartCount = computed(() => {
  return cart.items.reduce(
    (total, item) => total + Number(item.quantity || 0),
    0,
  );
});

/* =========================================
   CART TOTAL PRICE
========================================= */

const cartTotal = computed(() => {
  return cart.items.reduce(
    (total, item) =>
      total + Number(item.price || 0) * Number(item.quantity || 0),
    0,
  );
});

/* =========================================
   EXPORT
========================================= */

export function useCart() {
  return {
    cartItems,
    cartCount,
    cartTotal,

    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    setItemSize,
    clearCart,
  };
}
