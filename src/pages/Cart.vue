<template>
  <div
    class="min-h-screen overflow-x-hidden bg-[#fffaf8] pb-20 text-[#302525] lg:pb-0"
  >
    <main class="px-3 pb-8 pt-24 sm:px-6 sm:pb-10 lg:px-8">
      <div class="mx-auto max-w-7xl">
        <!-- HEADER -->

        <div class="text-center">
          <p
            class="text-[10px] font-semibold tracking-[0.25em] text-[#9b4056] sm:text-xs sm:tracking-[0.3em]"
          >
            MAAD FASHIONS
          </p>

          <h1
            class="mt-1.5 font-serif text-3xl font-bold text-[#302525] sm:mt-2 sm:text-5xl"
          >
            Your Cart
          </h1>

          <p
            class="mx-auto mt-2 max-w-xl text-xs leading-5 text-[#806d6d] sm:mt-3 sm:text-base"
          >
            Review your selected products before placing your order.
          </p>
        </div>

        <!-- EMPTY CART -->

        <div
          v-if="cartItems.length === 0"
          class="mx-auto mt-8 max-w-xl rounded-[22px] border border-[#eadedb] bg-white px-5 py-10 text-center shadow-sm sm:mt-10 sm:px-6 sm:py-12"
        >
          <div
            class="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#f7e6e7] text-3xl sm:h-20 sm:w-20 sm:text-4xl"
          >
            🛒
          </div>

          <h2
            class="mt-4 font-serif text-xl font-semibold text-[#302525] sm:mt-5 sm:text-2xl"
          >
            Your cart is empty
          </h2>

          <p class="mt-2 text-xs text-[#806d6d] sm:text-sm">
            Add some beautiful products to your cart.
          </p>

          <RouterLink
            to="/dresses"
            class="mt-5 inline-flex rounded-full bg-[#9b4056] px-6 py-3 text-xs font-semibold text-white transition hover:bg-[#84354a] sm:mt-6 sm:px-7 sm:text-sm"
          >
            Browse Dresses
          </RouterLink>
        </div>

        <!-- CART -->

        <div
          v-else
          class="mt-7 grid items-start gap-4 pb-4 sm:mt-10 sm:gap-6 lg:grid-cols-3 lg:gap-8"
        >
          <!-- CART ITEMS -->

          <div class="space-y-3 sm:space-y-4 lg:col-span-2">
            <div
              v-for="item in cartItems"
              :key="item.id"
              class="overflow-hidden rounded-[18px] border border-[#eadedb] bg-white shadow-sm transition hover:shadow-md sm:rounded-[22px]"
            >
              <div class="p-3.5 sm:p-4">
                <!-- PRODUCT ROW -->

                <div class="flex gap-3 sm:gap-4">
                  <!-- PRODUCT IMAGE -->

                  <div
                    class="flex h-[110px] w-[92px] shrink-0 items-center justify-center overflow-hidden rounded-xl bg-[#f7eeee] sm:h-32 sm:w-28"
                  >
                    <img
                      v-if="getProductImage(item)"
                      :src="getProductImage(item)"
                      :alt="item.name"
                      class="h-full w-full object-contain p-1.5 sm:p-2"
                      @error="handleImageError"
                    />

                    <div
                      v-else
                      class="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#f8e7e8] to-[#ead2d5]"
                    >
                      <div class="text-center">
                        <div class="text-2xl sm:text-3xl">
                          {{ getCategoryEmoji(item.category) }}
                        </div>

                        <p
                          class="mt-1 px-1 text-[7px] font-semibold uppercase tracking-wider text-[#9b4056] sm:text-[9px]"
                        >
                          {{ item.category || "MAAD" }}
                        </p>
                      </div>
                    </div>
                  </div>

                  <!-- PRODUCT DETAILS -->

                  <div class="min-w-0 flex-1">
                    <p
                      class="text-[8px] font-semibold uppercase tracking-[0.18em] text-[#b36b7a] sm:text-[9px] sm:tracking-[0.2em]"
                    >
                      MAAD EDIT
                    </p>

                    <h3
                      class="mt-0.5 line-clamp-2 text-sm font-semibold leading-5 text-[#302525] sm:mt-1 sm:text-lg"
                    >
                      {{ item.name }}
                    </h3>

                    <p
                      class="mt-0.5 truncate text-[10px] text-[#806d6d] sm:text-xs"
                    >
                      {{ item.category || "Fashion" }}
                    </p>

                    <p
                      class="mt-1.5 text-sm font-bold text-[#913c52] sm:mt-2 sm:text-base"
                    >
                      ₹{{ Number(item.price || 0).toLocaleString("en-IN") }}
                    </p>

                    <!-- QUANTITY -->

                    <div class="mt-3 flex items-center gap-2 sm:mt-4">
                      <span
                        class="text-[10px] font-medium text-[#806d6d] sm:text-xs"
                      >
                        Qty
                      </span>

                      <div
                        class="flex items-center overflow-hidden rounded-full border border-[#dfceca]"
                      >
                        <button
                          type="button"
                          class="flex h-7 w-7 items-center justify-center text-base text-[#493838] transition hover:bg-[#fff0f3] sm:h-8 sm:w-8 sm:text-lg"
                          @click="decreaseQuantity(item.id)"
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>

                        <span
                          class="flex h-7 min-w-8 items-center justify-center border-x border-[#dfceca] px-1.5 text-xs font-semibold text-[#302525] sm:h-8 sm:min-w-9 sm:px-2 sm:text-sm"
                        >
                          {{ item.quantity }}
                        </span>

                        <button
                          type="button"
                          class="flex h-7 w-7 items-center justify-center text-base text-[#493838] transition hover:bg-[#fff0f3] sm:h-8 sm:w-8 sm:text-lg"
                          @click="increaseQuantity(item.id)"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  <!-- PRICE / REMOVE -->

                  <div class="hidden shrink-0 text-right sm:block">
                    <strong class="text-base text-[#913c52]">
                      ₹{{
                        (
                          Number(item.price || 0) * Number(item.quantity || 0)
                        ).toLocaleString("en-IN")
                      }}
                    </strong>

                    <button
                      type="button"
                      class="mt-2 block ml-auto text-xs font-medium text-red-500 transition hover:text-red-700"
                      @click="removeFromCart(item.id)"
                    >
                      Remove
                    </button>
                  </div>
                </div>

                <!-- SIZE -->

                <div
                  class="mt-3 border-t border-[#f0e3df] pt-3 sm:mt-4 sm:pt-4"
                >
                  <div class="flex items-center justify-between">
                    <p
                      class="text-[10px] font-semibold uppercase tracking-[0.1em] text-[#302525] sm:text-xs sm:tracking-[0.12em]"
                    >
                      Select Size
                    </p>

                    <span
                      v-if="item.size"
                      class="text-[9px] font-medium text-[#9b4056] sm:text-[10px]"
                    >
                      Selected: {{ item.size }}
                    </span>
                  </div>

                  <div class="mt-2 flex flex-wrap gap-1.5 sm:gap-2">
                    <button
                      v-for="size in sizes"
                      :key="size"
                      type="button"
                      @click="selectSize(item, size)"
                      class="flex h-8 min-w-8 items-center justify-center rounded-full border px-2.5 text-[10px] font-semibold transition-all duration-200 sm:h-9 sm:min-w-9 sm:px-3 sm:text-xs"
                      :class="
                        item.size === size
                          ? 'border-[#9b4056] bg-[#9b4056] text-white shadow-sm'
                          : 'border-[#dfceca] bg-white text-[#493838] hover:border-[#9b4056] hover:bg-[#fff3f5] hover:text-[#9b4056]'
                      "
                    >
                      {{ size }}
                    </button>
                  </div>

                  <p
                    v-if="sizeError[item.id]"
                    class="mt-1.5 text-[10px] font-medium text-red-500 sm:text-[11px]"
                  >
                    Please select a size.
                  </p>
                </div>

                <!-- MOBILE PRICE -->

                <div
                  class="mt-3 flex items-center justify-between border-t border-[#f0e3df] pt-3 sm:hidden"
                >
                  <strong class="text-sm text-[#913c52]">
                    ₹{{
                      (
                        Number(item.price || 0) * Number(item.quantity || 0)
                      ).toLocaleString("en-IN")
                    }}
                  </strong>

                  <button
                    type="button"
                    class="text-[11px] font-medium text-red-500 transition hover:text-red-700"
                    @click="removeFromCart(item.id)"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>

            <!-- CONTINUE SHOPPING -->

            <div class="pt-1 sm:pt-2">
              <RouterLink
                to="/dresses"
                class="inline-flex items-center gap-1.5 text-xs font-semibold text-[#9b4056] transition hover:text-[#762d40] sm:gap-2 sm:text-sm"
              >
                ← Continue Shopping
              </RouterLink>
            </div>
          </div>

          <!-- ORDER SUMMARY -->

          <div
            class="h-fit rounded-[18px] border border-[#eadedb] bg-white p-4 shadow-sm sm:rounded-[22px] sm:p-5 lg:sticky lg:top-28"
          >
            <div class="flex items-center justify-between">
              <h2
                class="font-serif text-xl font-semibold text-[#302525] sm:text-2xl"
              >
                Order Summary
              </h2>

              <span
                class="rounded-full bg-[#f8e9eb] px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wider text-[#9b4056] sm:px-3 sm:text-[10px]"
              >
                {{ cartCount }} item{{ cartCount !== 1 ? "s" : "" }}
              </span>
            </div>

            <!-- ITEMS -->

            <div class="mt-5 flex justify-between text-xs sm:mt-6 sm:text-sm">
              <span class="text-[#806d6d]">Items</span>

              <span class="font-medium text-[#302525]">
                {{ cartCount }}
              </span>
            </div>

            <!-- SUBTOTAL -->

            <div class="mt-2.5 flex justify-between text-xs sm:mt-3 sm:text-sm">
              <span class="text-[#806d6d]">Subtotal</span>

              <span class="font-medium text-[#302525]">
                ₹{{ cartTotal.toLocaleString("en-IN") }}
              </span>
            </div>

            <!-- DELIVERY -->

            <div
              class="mt-2.5 flex justify-between gap-4 text-xs sm:mt-3 sm:text-sm"
            >
              <span class="text-[#806d6d]">Delivery</span>

              <span class="text-right font-medium text-green-600">
                Calculated at checkout
              </span>
            </div>

            <!-- DIVIDER -->

            <div class="my-4 h-px bg-[#eee1de] sm:my-5"></div>

            <!-- TOTAL -->

            <div class="flex items-center justify-between">
              <strong class="text-base text-[#302525] sm:text-lg">
                Total
              </strong>

              <strong class="text-xl text-[#913c52] sm:text-2xl">
                ₹{{ cartTotal.toLocaleString("en-IN") }}
              </strong>
            </div>

            <!-- CHECKOUT -->

            <button
              type="button"
              class="mt-5 w-full rounded-full bg-[#9b4056] px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#84354a] hover:shadow-md active:scale-[0.98] sm:mt-6"
              @click="goToCheckout"
            >
              Proceed to Checkout →
            </button>

            <p
              class="mt-2.5 text-center text-[10px] leading-4 text-[#9b8888] sm:mt-3 sm:text-[11px] sm:leading-5"
            >
              Select a size for every product before continuing.
            </p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { useRouter, RouterLink } from "vue-router";
import { useCart } from "../context/CartContext.js";

const router = useRouter();

const {
  cartItems,
  cartTotal,
  cartCount,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} = useCart();

/* SIZES */

const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

const sizeError = reactive({});

/* SELECT SIZE */

function selectSize(item, size) {
  item.size = size;

  sizeError[item.id] = false;

  try {
    const savedCart = JSON.parse(localStorage.getItem("maad_cart") || "[]");

    const savedItem = savedCart.find(
      (cartItem) => String(cartItem.id) === String(item.id),
    );

    if (savedItem) {
      savedItem.size = size;

      localStorage.setItem("maad_cart", JSON.stringify(savedCart));
    }
  } catch (error) {
    console.error("Unable to save selected size:", error);
  }
}

/* VALIDATE SIZES */

function validateSizes() {
  let valid = true;

  cartItems.value.forEach((item) => {
    if (!item.size) {
      sizeError[item.id] = true;
      valid = false;
    }
  });

  return valid;
}

/* PRODUCT IMAGE */

function getProductImage(item) {
  if (!item) {
    return "";
  }

  if (Array.isArray(item.images) && item.images.length) {
    const first = item.images[0];

    if (typeof first === "string") {
      return first;
    }

    if (first?.url) {
      return first.url;
    }
  }

  if (item.image) {
    return item.image;
  }

  if (item.imageUrl) {
    return item.imageUrl;
  }

  if (item.product) {
    if (item.product.image) {
      return item.product.image;
    }

    if (Array.isArray(item.product.images) && item.product.images.length) {
      const first = item.product.images[0];

      if (typeof first === "string") {
        return first;
      }

      if (first?.url) {
        return first.url;
      }
    }
  }

  return "";
}

/* IMAGE ERROR */

function handleImageError(event) {
  event.target.style.display = "none";
}

/* CATEGORY ICON */

function getCategoryEmoji(category) {
  const value = String(category || "").toLowerCase();

  if (value.includes("saree")) {
    return "🥻";
  }

  if (
    value.includes("kids") ||
    value.includes("kid") ||
    value.includes("children")
  ) {
    return "👗";
  }

  if (
    value.includes("lehenga") ||
    value.includes("gown") ||
    value.includes("dress")
  ) {
    return "👗";
  }

  if (value.includes("blouse")) {
    return "👚";
  }

  return "✨";
}

/* CHECKOUT */

function goToCheckout() {
  if (!cartItems.value || cartItems.value.length === 0) {
    return;
  }

  if (!validateSizes()) {
    alert("Please select a size for every product before checkout.");
    return;
  }

  router.push("/checkout");
}
</script>
