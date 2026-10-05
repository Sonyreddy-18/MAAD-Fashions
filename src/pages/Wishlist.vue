<template>
  <div
    class="min-h-screen overflow-x-hidden bg-[#fff8f6] pb-20 text-[#352629] lg:pb-0"
  >
    <main
      class="relative overflow-hidden px-4 pb-10 pt-24 sm:px-6 sm:pt-28 lg:px-8"
    >
      <!-- BACKGROUND -->

      <div
        class="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#f5d9df]/40 blur-3xl"
      ></div>

      <div
        class="pointer-events-none absolute -right-32 top-40 h-96 w-96 rounded-full bg-[#ead6c7]/30 blur-3xl"
      ></div>

      <div
        class="pointer-events-none absolute left-1/3 top-[520px] h-64 w-64 rounded-full bg-[#f2e3d5]/30 blur-3xl"
      ></div>

      <div class="relative z-10 mx-auto max-w-6xl">
        <!-- HERO -->

        <section class="mx-auto max-w-4xl text-center">
          <p
            class="text-[10px] font-semibold tracking-[0.28em] text-[#a33f58] sm:text-xs sm:tracking-[0.35em]"
          >
            MAAD FASHIONS
          </p>

          <h1
            class="mt-2 font-serif text-3xl font-bold text-[#352629] sm:text-4xl lg:text-5xl"
          >
            Your Wishlist
          </h1>

          <div
            class="mx-auto mt-3 flex items-center justify-center gap-3 sm:mt-4"
          >
            <span class="h-px w-8 bg-[#d6a5ad] sm:w-10"></span>

            <span class="text-xs text-[#a33f58] sm:text-sm">♥</span>

            <span class="h-px w-8 bg-[#d6a5ad] sm:w-10"></span>
          </div>

          <p
            class="mx-auto mt-3 max-w-xl text-xs leading-5 text-[#79676a] sm:mt-4 sm:text-sm sm:leading-6"
          >
            The pieces you've fallen in love with, saved in one beautiful
            collection.
          </p>
        </section>

        <!-- EMPTY WISHLIST -->

        <section
          v-if="wishlistItems.length === 0"
          class="mx-auto mt-9 max-w-xl rounded-[24px] border border-[#ead9d5] bg-white px-5 py-12 text-center shadow-[0_10px_35px_rgba(101,55,61,0.08)] sm:mt-12 sm:rounded-[28px] sm:px-6 sm:py-14"
        >
          <div
            class="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#fff0f3] sm:h-20 sm:w-20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8 text-[#c26b7c] sm:h-10 sm:w-10"
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

          <h2
            class="mt-5 text-xl font-semibold text-[#352629] sm:mt-6 sm:text-2xl"
          >
            Your wishlist is waiting
          </h2>

          <p
            class="mx-auto mt-2 max-w-md text-xs leading-5 text-[#8b777a] sm:text-sm sm:leading-6"
          >
            Save the dresses you love and they'll appear here whenever you're
            ready.
          </p>

          <RouterLink
            to="/dresses"
            class="mt-6 inline-flex rounded-full bg-[#9b4056] px-6 py-2.5 text-xs font-semibold text-white shadow-md transition hover:bg-[#7f3046] hover:shadow-lg sm:mt-7 sm:px-7 sm:py-3 sm:text-sm"
          >
            Explore Dresses
          </RouterLink>
        </section>

        <!-- WISHLIST CONTENT -->

        <section v-else class="mt-7 sm:mt-10">
          <!-- HEADER -->

          <div
            class="mb-4 flex flex-col gap-3 rounded-2xl border border-[#ead9d5] bg-white px-4 py-3.5 shadow-sm sm:mb-5 sm:flex-row sm:items-center sm:justify-between sm:px-5 sm:py-4"
          >
            <div>
              <p class="text-xs font-semibold text-[#352629] sm:text-sm">
                {{ wishlistItems.length }}
                {{ wishlistItems.length === 1 ? "piece" : "pieces" }}
                saved
              </p>

              <p class="mt-0.5 text-[10px] text-[#8b777a] sm:mt-1 sm:text-xs">
                Your favourite MAAD styles
              </p>
            </div>

            <button
              type="button"
              @click="clearWishlist"
              class="self-start rounded-full border border-[#e3c8cd] px-3.5 py-1.5 text-[10px] font-semibold text-[#9b4056] transition hover:bg-[#fff0f3] sm:self-auto sm:px-4 sm:py-2 sm:text-xs"
            >
              Clear Wishlist
            </button>
          </div>

          <!-- GRID -->

          <div
            class="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
          >
            <article
              v-for="item in wishlistItems"
              :key="item.id"
              class="group overflow-hidden rounded-[16px] border border-[#ead9d5] bg-white shadow-[0_4px_18px_rgba(101,55,61,0.06)] transition-all duration-300 sm:rounded-[24px] sm:shadow-[0_8px_30px_rgba(101,55,61,0.08)] sm:hover:-translate-y-1 sm:hover:shadow-[0_18px_40px_rgba(101,55,61,0.14)]"
            >
              <!-- IMAGE -->

              <div
                class="relative flex h-[180px] items-center justify-center overflow-hidden bg-gradient-to-br from-[#f8e7e8] via-[#f3d9dc] to-[#ead0d3] sm:h-[250px]"
              >
                <!-- IMAGE -->

                <img
                  v-if="getItemImage(item)"
                  :src="getItemImage(item)"
                  :alt="item.name"
                  class="h-full w-full object-contain p-1.5 transition duration-500 sm:p-2 sm:group-hover:scale-[1.03]"
                  @error="handleImageError"
                />

                <!-- BACKGROUND -->

                <div
                  class="pointer-events-none absolute -left-10 -top-10 h-28 w-28 rounded-full bg-white/30"
                ></div>

                <div
                  class="pointer-events-none absolute -bottom-12 -right-8 h-36 w-36 rounded-full bg-[#c98b98]/20"
                ></div>

                <!-- CATEGORY -->

                <span
                  class="absolute left-2.5 top-2.5 z-10 max-w-[85px] truncate rounded-full border border-white/70 bg-white/90 px-2 py-1 text-[8px] font-semibold text-[#9b4056] shadow-md backdrop-blur-sm sm:left-4 sm:top-4 sm:max-w-none sm:px-3 sm:py-1.5 sm:text-[10px]"
                >
                  {{ item.category || "MAAD Edit" }}
                </span>

                <!-- REMOVE -->

                <button
                  type="button"
                  @click="removeFromWishlist(item.id)"
                  class="absolute right-2.5 top-2.5 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/95 text-[#c6284f] shadow-md transition active:scale-95 sm:right-4 sm:top-4 sm:h-10 sm:w-10 sm:hover:scale-110 sm:hover:bg-[#fff0f3]"
                  aria-label="Remove from wishlist"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 sm:h-5 sm:w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z"
                    />
                  </svg>
                </button>

                <!-- FALLBACK -->

                <div
                  v-if="!getItemImage(item)"
                  class="relative z-[1] text-center"
                >
                  <div class="text-4xl sm:text-5xl">✦</div>

                  <p
                    class="mt-2 text-[8px] font-semibold uppercase tracking-[0.14em] text-[#9b4056] sm:text-xs sm:tracking-[0.2em]"
                  >
                    {{ item.category || "MAAD EDIT" }}
                  </p>
                </div>
              </div>

              <!-- DETAILS -->

              <div class="px-2.5 py-2 sm:px-4 sm:py-3.5">
                <p
                  class="text-[6.5px] font-semibold uppercase tracking-[0.16em] text-[#b36b7a] sm:text-[9px] sm:tracking-[0.2em]"
                >
                  MAAD EDIT
                </p>

                <h2
                  class="mt-0.5 line-clamp-1 text-[12px] font-semibold leading-4 text-[#352629] transition sm:text-base sm:leading-5 sm:group-hover:text-[#9b4056]"
                  :title="item.name"
                >
                  {{ item.name }}
                </h2>

                <p
                  class="mt-0.5 line-clamp-1 text-[8px] leading-3.5 text-[#8b777a] sm:text-xs sm:leading-4"
                >
                  {{ item.category || "MAAD Collection" }}
                </p>

                <!-- DIVIDER -->

                <div class="my-1.5 h-px bg-[#f0e2df] sm:my-2.5"></div>

                <!-- PRICE -->

                <div class="flex items-center justify-between gap-1.5 sm:gap-3">
                  <div class="min-w-0">
                    <p
                      class="text-[6.5px] uppercase tracking-[0.14em] text-[#a18b8e] sm:text-[9px] sm:tracking-[0.18em]"
                    >
                      Price
                    </p>

                    <strong
                      class="mt-0.5 block truncate text-[12px] font-bold text-[#8f3b52] sm:text-lg"
                    >
                      ₹{{ Number(item.price || 0).toLocaleString("en-IN") }}
                    </strong>
                  </div>

                  <button
                    type="button"
                    @click="handleAddToCart(item)"
                    class="shrink-0 rounded-full bg-[#9b4056] px-2 py-1.5 text-[8px] font-semibold text-white shadow-sm transition hover:bg-[#7f3046] hover:shadow-md active:scale-95 sm:px-4 sm:py-2 sm:text-sm"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </article>
          </div>
        </section>

        <!-- CONTINUE SHOPPING -->

        <div class="mt-7 text-center sm:mt-10">
          <RouterLink
            to="/dresses"
            class="inline-flex items-center gap-2 text-xs font-semibold text-[#9b4056] transition hover:text-[#762d40] sm:text-sm"
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

/* IMAGE */

function getItemImage(item) {
  if (Array.isArray(item.images) && item.images.length > 0) {
    const firstImage = item.images[0];

    if (typeof firstImage === "string") {
      return firstImage;
    }

    if (firstImage?.url) {
      return firstImage.url;
    }
  }

  return item.image || item.imageUrl || "";
}

/* IMAGE ERROR */

function handleImageError(event) {
  console.error("Unable to load wishlist image:", event.target.src);

  event.target.style.display = "none";
}

/* CART */

function handleAddToCart(item) {
  addToCart(item);

  alert(`${item.name} added to cart`);
}
</script>

<style scoped>
.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
