<template>
  <div class="min-h-screen bg-[#fff8f6]">
    <main
      class="relative min-h-screen overflow-hidden px-4 pb-12 pt-24 sm:px-6 lg:px-8"
    >
      <div
        class="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#f5d9df]/40 blur-3xl"
      ></div>

      <div
        class="pointer-events-none absolute -right-32 top-40 h-96 w-96 rounded-full bg-[#ead6c7]/30 blur-3xl"
      ></div>

      <div class="relative z-10 mx-auto max-w-6xl">
        <section class="text-center">
          <p
            class="text-xs font-semibold tracking-[0.35em] text-[#a33f58] sm:text-sm"
          >
            MAAD FASHIONS
          </p>

          <h1
            class="mt-2 font-serif text-3xl font-bold text-[#352629] sm:text-4xl lg:text-5xl"
          >
            Your Wishlist
          </h1>

          <div class="mx-auto mt-4 flex items-center justify-center gap-3">
            <span class="h-px w-10 bg-[#d6a5ad]"></span>

            <span class="text-sm text-[#a33f58]">♥</span>

            <span class="h-px w-10 bg-[#d6a5ad]"></span>
          </div>

          <p class="mx-auto mt-4 max-w-xl text-sm leading-6 text-[#79676a]">
            The pieces you've fallen in love with, saved in one beautiful
            collection.
          </p>
        </section>

        <section
          v-if="wishlistItems.length === 0"
          class="mx-auto mt-12 max-w-xl rounded-[28px] border border-[#ead9d5] bg-white px-6 py-14 text-center shadow-[0_10px_35px_rgba(101,55,61,0.08)]"
        >
          <div
            class="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#fff0f3]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10 text-[#c26b7c]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.5"
            >
              <path
                d="M20.8 8.7c0 5.5-8.8 10.3-8.8 10.3S3.2 14.2 3.2 8.7A4.7 4.7 0 0 1 8 4a5.1 5.1 0 0 1 4 2.1A5.1 5.1 0 0 1 16 4a4.7 4.7 0 0 1 4.8 4.7Z"
              />
            </svg>
          </div>

          <h2 class="mt-6 text-2xl font-semibold text-[#352629]">
            Your wishlist is waiting
          </h2>

          <p class="mx-auto mt-2 max-w-md text-sm leading-6 text-[#8b777a]">
            Save the dresses you love and they'll appear here whenever you're
            ready.
          </p>

          <RouterLink
            to="/dresses"
            class="mt-7 inline-flex rounded-full bg-[#9b4056] px-7 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#7f3046] hover:shadow-lg"
          >
            Explore Dresses
          </RouterLink>
        </section>

        <section v-else class="mt-10">
          <div
            class="mb-5 flex flex-col gap-3 rounded-2xl border border-[#ead9d5] bg-white px-5 py-4 shadow-sm sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <p class="text-sm font-semibold text-[#352629]">
                {{ wishlistItems.length }}
                {{ wishlistItems.length === 1 ? "piece" : "pieces" }}
                saved
              </p>

              <p class="mt-1 text-xs text-[#8b777a]">
                Your favourite MAAD styles
              </p>
            </div>

            <button
              type="button"
              @click="clearWishlist"
              class="self-start rounded-full border border-[#e3c8cd] px-4 py-2 text-xs font-semibold text-[#9b4056] transition hover:bg-[#fff0f3] sm:self-auto"
            >
              Clear Wishlist
            </button>
          </div>

          <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <article
              v-for="item in wishlistItems"
              :key="item.id"
              class="group overflow-hidden rounded-[24px] border border-[#ead9d5] bg-white shadow-[0_8px_30px_rgba(101,55,61,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(101,55,61,0.14)]"
            >
              <div
                class="relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br from-[#f8e7e8] via-[#f3d9dc] to-[#ead0d3]"
              >
                <div
                  class="absolute -left-10 -top-10 h-28 w-28 rounded-full bg-white/30"
                ></div>

                <div
                  class="absolute -bottom-12 -right-8 h-36 w-36 rounded-full bg-[#c98b98]/20"
                ></div>

                <span
                  class="relative rounded-full border border-white/70 bg-white/90 px-5 py-2 text-sm font-semibold text-[#9b4056] shadow-md backdrop-blur-sm"
                >
                  {{ item.category }}
                </span>

                <button
                  type="button"
                  @click="removeFromWishlist(item.id)"
                  class="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#c6284f] shadow-md transition hover:scale-110 hover:bg-[#fff0f3]"
                  aria-label="Remove from wishlist"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z"
                    />
                  </svg>
                </button>
              </div>

              <div class="p-5">
                <p
                  class="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#b36b7a]"
                >
                  MAAD EDIT
                </p>

                <h2
                  class="mt-1 text-lg font-semibold text-[#352629] transition group-hover:text-[#9b4056]"
                >
                  {{ item.name }}
                </h2>

                <p class="mt-1 text-sm text-[#8b777a]">
                  {{ item.category }}
                </p>

                <div class="my-4 h-px bg-[#f0e2df]"></div>

                <div class="flex items-center justify-between gap-3">
                  <strong class="text-lg font-bold text-[#8f3b52]">
                    ₹{{ Number(item.price).toLocaleString("en-IN") }}
                  </strong>

                  <button
                    type="button"
                    @click="handleAddToCart(item)"
                    class="rounded-full bg-[#9b4056] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#7f3046] hover:shadow-md active:scale-95"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </article>
          </div>
        </section>

        <div class="mt-10 text-center">
          <RouterLink
            to="/dresses"
            class="inline-flex items-center gap-2 text-sm font-semibold text-[#9b4056] transition hover:text-[#762d40]"
          >
            ← Continue Shopping
          </RouterLink>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { useCart } from "../context/CartContext.js";
import { useWishlist } from "../context/WishlistContext.js";

const { wishlistItems, removeFromWishlist, clearWishlist } = useWishlist();

const { addToCart } = useCart();

function handleAddToCart(item) {
  addToCart(item);

  alert(`${item.name} added to cart`);
}
</script>
