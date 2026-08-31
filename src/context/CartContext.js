import { reactive, computed } from "vue";

const cart = reactive({
  items: [],
});

export function useCart() {
  // =========================================
  // ADD TO CART
  // =========================================
  const addToCart = (product) => {
    const existingItem = cart.items.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.items.push({
        ...product,
        quantity: 1,
      });
    }
  };

  // =========================================
  // REMOVE FROM CART
  // =========================================
  const removeFromCart = (productId) => {
    const index = cart.items.findIndex((item) => item.id === productId);

    if (index !== -1) {
      cart.items.splice(index, 1);
    }
  };

  // =========================================
  // INCREASE QUANTITY
  // =========================================
  const increaseQuantity = (productId) => {
    const item = cart.items.find((item) => item.id === productId);

    if (item) {
      item.quantity += 1;
    }
  };

  // =========================================
  // DECREASE QUANTITY
  // =========================================
  const decreaseQuantity = (productId) => {
    const item = cart.items.find((item) => item.id === productId);

    if (!item) return;

    if (item.quantity > 1) {
      item.quantity -= 1;
    } else {
      removeFromCart(productId);
    }
  };

  // =========================================
  // CLEAR CART
  // =========================================
  const clearCart = () => {
    cart.items.splice(0, cart.items.length);
  };

  // =========================================
  // CART ITEMS
  // =========================================
  const cartItems = computed(() => cart.items);

  // =========================================
  // TOTAL NUMBER OF PRODUCTS
  // =========================================
  const cartCount = computed(() => {
    return cart.items.reduce(
      (total, item) => total + Number(item.quantity || 0),
      0,
    );
  });

  // =========================================
  // CART TOTAL PRICE
  // =========================================
  const cartTotal = computed(() => {
    return cart.items.reduce(
      (total, item) =>
        total + Number(item.price || 0) * Number(item.quantity || 0),
      0,
    );
  });

  return {
    cartItems,
    cartCount,
    cartTotal,

    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  };
}
