<template>
  <div class="min-h-screen bg-[#fffaf8]">
    <main class="px-4 pt-26 py-10 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-7xl">
        <div class="text-center">
          <p class="text-sm font-semibold tracking-[0.3em] text-[#9b4056]">
            MAAD FASHIONS
          </p>

          <h1
            class="mt-3 font-serif text-4xl font-bold text-[#302525] sm:text-5xl"
          >
            Your Cart
          </h1>

          <p class="mt-4 text-[#806d6d]">
            Review your selected products before placing your order.
          </p>
        </div>

        <div
          v-if="cartItems.length === 0"
          class="mx-auto mt-12 max-w-xl rounded-2xl border border-[#eadedb] bg-white px-6 py-12 text-center shadow-sm"
        >
          <div
            class="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#f7e6e7] text-4xl"
          >
            🛒
          </div>

          <h2 class="mt-6 font-serif text-2xl font-semibold text-[#302525]">
            Your cart is empty
          </h2>

          <p class="mt-3 text-[#806d6d]">
            Add some beautiful products to your cart.
          </p>

          <RouterLink
            to="/dresses"
            class="mt-6 inline-block rounded-full bg-[#9b4056] px-7 py-3 font-semibold text-white transition hover:bg-[#84354a]"
          >
            Browse Dresses
          </RouterLink>
        </div>

        <div v-else class="mt-12 grid gap-8 lg:grid-cols-3">
          <!-- CART ITEMS -->
          <div class="space-y-5 lg:col-span-2">
            <div
              v-for="item in cartItems"
              :key="item.id"
              class="rounded-2xl border border-[#eadedb] bg-white p-4 shadow-sm sm:p-6"
            >
              <div class="flex flex-col gap-5 sm:flex-row sm:items-center">
                <div
                  class="flex h-32 w-full shrink-0 items-center justify-center rounded-xl bg-[#f3dfdf] sm:h-32 sm:w-32"
                >
                  <span
                    class="px-3 text-center text-sm font-medium text-[#9b4056]"
                  >
                    {{ item.category }}
                  </span>
                </div>

                <div class="flex-1">
                  <h3 class="text-lg font-semibold text-[#302525] sm:text-xl">
                    {{ item.name }}
                  </h3>

                  <p class="mt-1 text-sm text-[#806d6d]">
                    {{ item.category }}
                  </p>

                  <strong class="mt-3 block text-lg text-[#913c52]">
                    ₹{{ item.price.toLocaleString("en-IN") }}
                  </strong>
                </div>

                <div
                  class="flex items-center justify-between gap-4 sm:flex-col sm:items-center"
                >
                  <p class="text-sm font-medium text-[#806d6d]">Quantity</p>

                  <div
                    class="flex items-center overflow-hidden rounded-full border border-[#dfceca]"
                  >
                    <button
                      type="button"
                      class="flex h-9 w-9 items-center justify-center text-lg text-[#493838] transition hover:bg-[#fff0f3]"
                      @click="decreaseQuantity(item.id)"
                    >
                      −
                    </button>

                    <span
                      class="flex h-9 min-w-10 items-center justify-center border-x border-[#dfceca] text-sm font-semibold text-[#302525]"
                    >
                      {{ item.quantity }}
                    </span>

                    <button
                      type="button"
                      class="flex h-9 w-9 items-center justify-center text-lg text-[#493838] transition hover:bg-[#fff0f3]"
                      @click="increaseQuantity(item.id)"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div
                  class="flex items-center justify-between gap-4 sm:block sm:min-w-28 sm:text-right"
                >
                  <strong class="text-lg text-[#913c52]">
                    ₹{{ (item.price * item.quantity).toLocaleString("en-IN") }}
                  </strong>

                  <button
                    type="button"
                    class="block text-sm font-medium text-red-500 transition hover:text-red-700 sm:mt-3 sm:ml-auto"
                    @click="removeFromCart(item.id)"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            class="h-fit rounded-2xl border border-[#eadedb] bg-white p-6 shadow-sm lg:sticky lg:top-6"
          >
            <h2 class="font-serif text-2xl font-semibold text-[#302525]">
              Order Summary
            </h2>

            <div class="mt-6 flex justify-between">
              <span class="text-[#806d6d]"> Items </span>

              <span class="font-medium text-[#302525]">
                {{ cartCount }}
              </span>
            </div>

            <div
              class="mt-5 flex justify-between border-t border-[#eee1de] pt-5"
            >
              <strong class="text-lg text-[#302525]"> Total </strong>

              <strong class="text-xl text-[#913c52]">
                ₹{{ cartTotal.toLocaleString("en-IN") }}
              </strong>
            </div>

            <button
              type="button"
              class="mt-6 w-full rounded-full bg-[#9b4056] px-6 py-4 font-semibold text-white transition hover:bg-[#84354a]"
              @click="goToCheckout"
            >
              Proceed to Order
            </button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { useRouter, RouterLink } from "vue-router";
import Navbar from "../components/Navbar.vue";
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

function goToCheckout() {
  console.log("Checkout button clicked");

  router.push("/checkout");
}
</script>
