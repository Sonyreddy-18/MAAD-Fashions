```vue
<template>
  <div class="min-h-screen bg-white text-[#302525]">
    <main class="px-4 pb-16 pt-24 sm:px-6 sm:pt-28 lg:px-8">
      <div class="mx-auto max-w-[1400px]">
        <!-- HEADER -->

        <section class="mx-auto max-w-3xl text-center">
          <p
            class="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#9b4056] sm:text-xs"
          >
            MAAD FASHIONS
          </p>

          <h1
            class="mt-3 font-serif text-3xl font-medium tracking-tight text-[#302525] sm:text-4xl lg:text-5xl"
          >
            Dresses Collection
          </h1>

          <div class="mx-auto mt-5 flex items-center justify-center gap-3">
            <span class="h-px w-8 bg-[#d8b7bc] sm:w-12"></span>
            <span class="text-[10px] text-[#9b4056]">✦</span>
            <span class="h-px w-8 bg-[#d8b7bc] sm:w-12"></span>
          </div>

          <p
            class="mx-auto mt-5 max-w-xl text-xs leading-6 text-[#79676a] sm:text-sm"
          >
            Explore our collection of beautiful dresses, thoughtfully selected
            for every special moment.
          </p>
        </section>

        <!-- LOADING -->

        <div
          v-if="loading"
          class="flex min-h-[300px] items-center justify-center"
        >
          <div
            class="h-8 w-8 animate-spin rounded-full border-2 border-[#ead9d5] border-t-[#9b4056]"
          ></div>
        </div>

        <!-- EMPTY -->

        <section
          v-else-if="dresses.length === 0"
          class="mx-auto mt-16 max-w-md text-center"
        >
          <div
            class="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#fff5f3] text-2xl"
          >
            👗
          </div>

          <h2 class="mt-5 font-serif text-2xl text-[#302525]">
            No dresses available
          </h2>

          <p class="mt-2 text-sm text-[#79676a]">
            New dresses will appear here when they are added.
          </p>
        </section>

        <!-- PRODUCT GRID -->

        <section
          v-else
          class="mt-12 grid grid-cols-2 gap-x-3 gap-y-10 sm:gap-x-6 sm:gap-y-14 lg:grid-cols-3 xl:grid-cols-4"
        >
          <article
            v-for="dress in dresses"
            :key="dress.id"
            class="group min-w-0 cursor-pointer"
            @click="openDress(dress)"
          >
            <!-- IMAGE -->

            <div class="relative aspect-[3/4] overflow-hidden bg-[#f7f5f3]">
              <!-- FIRST IMAGE -->

              <img
                v-if="dress.image && !dress.imageError"
                :src="dress.image"
                :alt="dress.name"
                class="absolute inset-0 h-full w-full object-cover opacity-100 transition-all duration-500 ease-out group-hover:scale-[1.025] group-hover:opacity-0"
                @error="handleImageError(dress)"
              />

              <!-- HOVER IMAGE -->

              <img
                v-if="
                  dress.hoverImage &&
                  dress.hoverImage !== dress.image &&
                  !dress.hoverImageError
                "
                :src="dress.hoverImage"
                :alt="`${dress.name} alternate view`"
                class="absolute inset-0 h-full w-full object-cover opacity-0 transition-all duration-500 ease-out group-hover:scale-[1.025] group-hover:opacity-100"
                @error="handleHoverImageError(dress)"
              />

              <!-- SINGLE IMAGE -->

              <img
                v-if="
                  dress.image &&
                  dress.hoverImage === dress.image &&
                  !dress.imageError
                "
                :src="dress.image"
                :alt="dress.name"
                class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.025]"
              />

              <!-- FALLBACK -->

              <div
                v-if="!dress.image || dress.imageError"
                class="flex h-full w-full flex-col items-center justify-center text-[#9b4056]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-9 w-9 sm:h-11 sm:w-11"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="1.2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 16l4-4a2 2 0 012.828 0L14 16m-1-1l1.172-1.172a2 2 0 012.828 0L21 17M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>

                <span class="mt-2 text-[10px] sm:text-xs">
                  Image unavailable
                </span>
              </div>

              <!-- NEW -->

              <span
                class="absolute left-3 top-3 z-20 text-[8px] font-medium uppercase tracking-[0.18em] text-[#302525] sm:left-4 sm:top-4 sm:text-[9px]"
              >
                New
              </span>

              <!-- WISHLIST -->

              <button
                type="button"
                class="absolute right-3 top-3 z-30 flex h-8 w-8 items-center justify-center rounded-full border border-[#d9d2cf] bg-white/95 transition-all duration-300 hover:scale-105 sm:right-4 sm:top-4 sm:h-9 sm:w-9"
                :aria-label="
                  isInWishlist(dress)
                    ? 'Remove from wishlist'
                    : 'Add to wishlist'
                "
                @click.stop="handleWishlist(dress)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 sm:h-[17px] sm:w-[17px]"
                  :class="
                    isInWishlist(dress)
                      ? 'fill-[#9b4056] text-[#9b4056]'
                      : 'fill-none text-[#302525]'
                  "
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="1.5"
                >
                  <path
                    d="M20.8 8.7c0 5.5-8.8 10.3-8.8 10.3S3.2 14.2 3.2 8.7A4.7 4.7 0 0 1 8 4a5.1 5.1 0 0 1 4 2.1A5.1 5.1 0 0 1 16 4a4.7 4.7 0 0 1 4.8 4.7Z"
                  />
                </svg>
              </button>

              <!-- OUT OF STOCK -->

              <div
                v-if="dress.stock <= 0"
                class="absolute inset-0 z-20 flex items-center justify-center bg-white/35"
              >
                <span
                  class="bg-white px-3 py-2 text-[9px] font-medium uppercase tracking-[0.12em] text-[#302525] sm:px-4 sm:text-[10px]"
                >
                  Out of Stock
                </span>
              </div>
            </div>

            <!-- DETAILS -->

            <div class="pt-3 sm:pt-4">
              <p
                class="text-[8px] font-medium uppercase tracking-[0.2em] text-[#a4777f] sm:text-[9px]"
              >
                MAAD EDIT
              </p>

              <h2
                class="mt-1 truncate text-[12px] font-medium text-[#302525] sm:text-sm"
                :title="dress.name"
              >
                {{ dress.name }}
              </h2>

              <p class="mt-1 truncate text-[10px] text-[#8b777a] sm:text-xs">
                {{ dress.category }}
              </p>

              <p class="mt-2 text-[12px] font-medium text-[#302525] sm:text-sm">
                ₹{{ formatPrice(dress.price) }}
              </p>
            </div>
          </article>
        </section>

        <!-- BACK HOME -->

        <div class="mt-16 text-center">
          <RouterLink
            to="/"
            class="inline-flex items-center gap-2 text-xs font-medium text-[#9b4056] transition hover:text-[#762d40] sm:text-sm"
          >
            ← Back to Home
          </RouterLink>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { RouterLink, useRouter } from "vue-router";
import { useWishlist } from "../context/WishlistContext.js";

/* ROUTER */

const router = useRouter();

/* CONTEXT */

const { toggleWishlist, isInWishlist } = useWishlist();

/* API */

const API_URL = (
  import.meta.env.VITE_API_URL || "http://localhost:3000"
).replace(/\/$/, "");

/* STATE */

const dresses = ref([]);
const loading = ref(true);

/* PRICE */

function formatPrice(price) {
  return Number(price || 0).toLocaleString("en-IN");
}

/* OPEN PRODUCT */

function openDress(dress) {
  if (!dress?.id) {
    console.error("Product ID is missing:", dress);
    return;
  }

  router.push(`/product/${dress.id}`);
}

/* WISHLIST */

function handleWishlist(dress) {
  toggleWishlist(dress);
}

/* IMAGE ERROR */

function handleImageError(dress) {
  dress.imageError = true;
  console.error("Unable to load product image:", dress.image);
}

function handleHoverImageError(dress) {
  dress.hoverImageError = true;
  console.error("Unable to load hover product image:", dress.hoverImage);
}

/* FETCH PRODUCTS */

async function fetchDresses() {
  loading.value = true;

  try {
    const response = await fetch(`${API_URL}/products`);

    if (!response.ok) {
      throw new Error(`Products API returned ${response.status}`);
    }

    const data = await response.json();

    const products = Array.isArray(data)
      ? data
      : Array.isArray(data?.products)
        ? data.products
        : Array.isArray(data?.data)
          ? data.data
          : [];

    dresses.value = products
      .filter((product) => product?.isActive !== false)
      .filter((product) => {
        const category = String(product.category || "")
          .toLowerCase()
          .trim();

        return (
          category === "dress" ||
          category === "dresses" ||
          category === "gown" ||
          category === "party wear" ||
          category === "casual" ||
          category === "evening" ||
          category === "anarkali" ||
          category === "frock"
        );
      })
      .map((product) => ({
        id: product.id ?? product._id,
        name: product.name || "Dress",
        price: Number(product.price || 0),
        category: product.category || "Dresses",

        stock: Number(product.stock ?? 0),

        image:
          product.images?.[0]?.url || product.image || product.imageUrl || "",

        hoverImage:
          product.images?.[1]?.url ||
          product.images?.[0]?.url ||
          product.image ||
          product.imageUrl ||
          "",

        imageError: false,
        hoverImageError: false,
      }));

    console.log("Dresses loaded:", dresses.value);
  } catch (error) {
    console.error("Error loading dresses:", error);

    alert("Unable to load dresses from the server.");
  } finally {
    loading.value = false;
  }
}

/* PAGE LOAD */

onMounted(() => {
  fetchDresses();
});
</script>
```
