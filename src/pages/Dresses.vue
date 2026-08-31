<template>
  <div>
    <main
      class="relative min-h-screen overflow-hidden bg-[#fff8f6] px-4 pt-26 pb-10 sm:px-6 lg:px-8"
    >
      <div
        class="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#f5d9df]/40 blur-3xl"
      ></div>

      <div
        class="pointer-events-none absolute -right-32 top-80 h-96 w-96 rounded-full bg-[#ead6c7]/30 blur-3xl"
      ></div>

      <div
        class="pointer-events-none absolute bottom-20 left-1/3 h-64 w-64 rounded-full bg-[#f2e3d5]/30 blur-3xl"
      ></div>

      <div class="relative z-10 mx-auto max-w-7xl">
        <section class="text-center">
          <p
            class="text-xs font-semibold tracking-[0.35em] text-[#a33f58] sm:text-sm"
          >
            MAAD FASHIONS
          </p>

          <h1
            class="mt-2 font-serif text-3xl font-bold leading-tight text-[#352629] sm:text-4xl lg:text-5xl"
          >
            Dresses Collection
          </h1>

          <div class="mx-auto mt-3 flex items-center justify-center gap-3">
            <span class="h-px w-10 bg-[#d6a5ad]"></span>

            <span class="text-xs text-[#a33f58]">✦</span>

            <span class="h-px w-10 bg-[#d6a5ad]"></span>
          </div>

          <p
            class="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[#79676a] sm:text-base"
          >
            Explore our collection of beautiful dresses, thoughtfully selected
            for every special moment.
          </p>
        </section>

        <section
          class="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          <div
            v-for="dress in dresses"
            :key="dress.id"
            class="group overflow-hidden rounded-[24px] border border-[#ead9d5] bg-white shadow-[0_8px_30px_rgba(101,55,61,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_18px_40px_rgba(101,55,61,0.15)]"
          >
            <div
              class="relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br from-[#f8e7e8] via-[#f3d9dc] to-[#ead0d3] sm:h-52"
            >
              <div
                class="absolute -left-10 -top-10 h-28 w-28 rounded-full bg-white/30"
              ></div>

              <div
                class="absolute -bottom-12 -right-8 h-36 w-36 rounded-full bg-[#c98b98]/20"
              ></div>

              <span
                class="relative rounded-full border border-white/70 bg-white/90 px-5 py-2 text-sm font-semibold text-[#9b4056] shadow-md backdrop-blur-sm transition duration-300 group-hover:scale-105"
              >
                {{ dress.category }}
              </span>

              <span class="absolute right-5 top-5 text-lg text-white/80">
                ✦
              </span>

              <button
                type="button"
                @click="handleWishlist(dress)"
                class="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/70 bg-white/90 shadow-md backdrop-blur-sm transition-all duration-300 hover:scale-110"
                :aria-label="
                  isInWishlist(dress.id)
                    ? 'Remove from wishlist'
                    : 'Add to wishlist'
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 transition-all duration-300"
                  :class="
                    isInWishlist(dress.id)
                      ? 'fill-[#c6284f] text-[#c6284f]'
                      : 'fill-none text-[#302525]'
                  "
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="1.8"
                >
                  <path
                    d="M20.8 8.7c0 5.5-8.8 10.3-8.8 10.3S3.2 14.2 3.2 8.7A4.7 4.7 0 0 1 8 4a5.1 5.1 0 0 1 4 2.1A5.1 5.1 0 0 1 16 4a4.7 4.7 0 0 1 4.8 4.7Z"
                  />
                </svg>
              </button>
            </div>

            <div class="bg-white p-4 sm:p-5">
              <p
                class="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#b36b7a]"
              >
                MAAD EDIT
              </p>

              <h3
                class="mt-1 text-lg font-semibold text-[#352629] transition group-hover:text-[#9b4056]"
              >
                {{ dress.name }}
              </h3>

              <p class="mt-1 text-sm text-[#8b777a]">
                {{ dress.category }}
              </p>

              <div class="my-3 h-px bg-[#f0e2df]"></div>

              <div class="flex items-center justify-between gap-3">
                <div>
                  <p
                    class="text-[10px] uppercase tracking-wider text-[#9b8588]"
                  >
                    Price
                  </p>

                  <strong class="text-lg font-bold text-[#8f3b52]">
                    ₹{{ dress.price.toLocaleString("en-IN") }}
                  </strong>
                </div>

                <button
                  type="button"
                  class="rounded-full bg-[#9b4056] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-[#7f3046] hover:shadow-md active:scale-95"
                  @click="handleAddToCart(dress)"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </section>

        <div class="mt-7 text-center">
          <RouterLink
            to="/"
            class="inline-flex items-center gap-2 text-sm font-semibold text-[#9b4056] transition hover:text-[#762d40]"
          >
            ← Back to Home
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

const dresses = [
  {
    id: 1,
    name: "Elegant Party Dress",
    price: 1999,
    category: "Party Wear",
  },
  {
    id: 2,
    name: "Classic Floral Dress",
    price: 2499,
    category: "Casual Wear",
  },
  {
    id: 3,
    name: "Premium Evening Dress",
    price: 2799,
    category: "Evening Wear",
  },
  {
    id: 4,
    name: "Traditional Designer Dress",
    price: 2299,
    category: "Designer Wear",
  },
  {
    id: 5,
    name: "Elegant Long Dress",
    price: 1899,
    category: "Party Wear",
  },
  {
    id: 6,
    name: "Modern Celebration Dress",
    price: 2599,
    category: "Occasion Wear",
  },
];

const { addToCart } = useCart();

function handleAddToCart(dress) {
  addToCart(dress);

  alert(`${dress.name} added to cart`);
}

const { toggleWishlist, isInWishlist } = useWishlist();

function handleWishlist(dress) {
  toggleWishlist(dress);
}
</script>
