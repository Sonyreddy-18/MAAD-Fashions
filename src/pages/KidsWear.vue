<template>
  <div class="min-h-screen bg-white text-[#302525]">
    <Navbar />

    <main class="px-4 pb-16 pt-24 sm:px-6 sm:pt-28 lg:px-8">
      <div class="mx-auto max-w-[1400px]">
        <!-- HEADER -->

        <section class="mx-auto max-w-3xl text-center">
          <p
            class="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#9b4056] sm:text-xs"
          >
            THE MAAD KIDS EDIT
          </p>

          <h1
            class="mt-3 font-serif text-3xl font-medium tracking-tight text-[#302525] sm:text-4xl lg:text-5xl"
          >
            Little Looks,
            <span class="italic text-[#9b4056]">Big Moments.</span>
          </h1>

          <div class="mx-auto mt-5 flex items-center justify-center gap-3">
            <span class="h-px w-8 bg-[#d8b7bc] sm:w-12"></span>
            <span class="text-[10px] text-[#9b4056]">✦</span>
            <span class="h-px w-8 bg-[#d8b7bc] sm:w-12"></span>
          </div>

          <p
            class="mx-auto mt-5 max-w-xl text-xs leading-6 text-[#79676a] sm:text-sm"
          >
            Discover beautiful styles for little personalities — from playful
            everyday dresses to party-ready and festive looks.
          </p>
        </section>

        <!-- CATEGORY FILTER -->

        <section class="mt-8">
          <div
            class="flex justify-start gap-2 overflow-x-auto pb-2 scrollbar-hide sm:justify-center"
          >
            <button
              v-for="category in categories"
              :key="category"
              type="button"
              class="shrink-0 rounded-full px-4 py-2 text-[10px] font-semibold transition-all duration-300 sm:px-5 sm:py-2.5 sm:text-sm"
              :class="
                selectedCategory === category
                  ? 'bg-[#9b4056] text-white shadow-md shadow-[#9b4056]/20'
                  : 'border border-[#ead9d5] bg-white text-[#715f62] hover:border-[#cdaab2] hover:text-[#9b4056]'
              "
              @click="selectedCategory = category"
            >
              {{ category }}
            </button>
          </div>
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
          v-else-if="filteredProducts.length === 0"
          class="mx-auto mt-16 max-w-md text-center"
        >
          <div
            class="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#fff5f3] text-2xl"
          >
            ✦
          </div>

          <h2 class="mt-5 font-serif text-2xl text-[#302525]">
            {{
              selectedCategory === "All"
                ? "Kidswear coming soon"
                : `${selectedCategory} coming soon`
            }}
          </h2>

          <p class="mt-2 text-sm text-[#79676a]">
            We’re preparing something beautiful for the little ones. Please
            check back soon.
          </p>

          <button
            v-if="selectedCategory !== 'All'"
            type="button"
            class="mt-5 rounded-full bg-[#9b4056] px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-[#7f3046] sm:text-sm"
            @click="selectedCategory = 'All'"
          >
            View All Kidswear
          </button>
        </section>

        <!-- PRODUCT GRID -->

        <section
          v-else
          class="mt-12 grid grid-cols-2 gap-x-3 gap-y-10 sm:gap-x-6 sm:gap-y-14 lg:grid-cols-3 xl:grid-cols-4"
        >
          <article
            v-for="product in filteredProducts"
            :key="product.id"
            class="group min-w-0 cursor-pointer"
            @click="openProduct(product)"
          >
            <!-- IMAGE -->

            <div class="relative aspect-[3/4] overflow-hidden bg-[#f7f5f3]">
              <!-- FIRST IMAGE -->

              <img
                v-if="product.image && !product.imageError"
                :src="product.image"
                :alt="product.name"
                class="absolute inset-0 h-full w-full object-cover opacity-100 transition-all duration-500 ease-out group-hover:scale-[1.025] group-hover:opacity-0"
                @error="handleImageError(product)"
              />

              <!-- HOVER IMAGE -->

              <img
                v-if="
                  product.hoverImage &&
                  product.hoverImage !== product.image &&
                  !product.hoverImageError
                "
                :src="product.hoverImage"
                :alt="`${product.name} alternate view`"
                class="absolute inset-0 h-full w-full object-cover opacity-0 transition-all duration-500 ease-out group-hover:scale-[1.025] group-hover:opacity-100"
                @error="handleHoverImageError(product)"
              />

              <!-- SINGLE IMAGE -->

              <img
                v-if="
                  product.image &&
                  product.hoverImage === product.image &&
                  !product.imageError
                "
                :src="product.image"
                :alt="product.name"
                class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.025]"
              />

              <!-- FALLBACK -->

              <div
                v-if="!product.image || product.imageError"
                class="flex h-full w-full flex-col items-center justify-center bg-[#f8f4f2] text-[#9b4056]"
              >
                <div class="text-4xl sm:text-5xl">✦</div>

                <span class="mt-3 text-[10px] uppercase tracking-[0.16em]">
                  Image unavailable
                </span>
              </div>

              <!-- NEW -->

              <span
                class="absolute left-3 top-3 z-20 text-[8px] font-medium uppercase tracking-[0.18em] text-[#302525] sm:left-4 sm:top-4 sm:text-[9px]"
              >
                New
              </span>

              <!-- CATEGORY -->

              <span
                class="absolute left-3 top-8 z-20 max-w-[100px] truncate text-[8px] uppercase tracking-[0.14em] text-[#9b4056] sm:left-4 sm:top-9 sm:max-w-[150px] sm:text-[9px]"
              >
                {{ product.subCategory || "Kids Wear" }}
              </span>

              <!-- WISHLIST -->

              <button
                type="button"
                class="absolute right-3 top-3 z-30 flex h-8 w-8 items-center justify-center rounded-full border border-[#d9d2cf] bg-white/95 transition-all duration-300 hover:scale-105 sm:right-4 sm:top-4 sm:h-9 sm:w-9"
                :aria-label="
                  isInWishlist(product)
                    ? 'Remove from wishlist'
                    : 'Add to wishlist'
                "
                @click.stop="handleWishlist(product)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 sm:h-[17px] sm:w-[17px]"
                  :class="
                    isInWishlist(product)
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
                v-if="product.stock <= 0"
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
                MAAD KIDS EDIT
              </p>

              <h2
                class="mt-1 truncate text-[12px] font-medium text-[#302525] sm:text-sm"
                :title="product.name"
              >
                {{ product.name }}
              </h2>

              <p class="mt-1 truncate text-[10px] text-[#8b777a] sm:text-xs">
                {{ product.subCategory || "Kids Wear" }}
              </p>

              <p class="mt-2 text-[12px] font-medium text-[#302525] sm:text-sm">
                ₹{{ formatPrice(product.price) }}
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
import { computed, onMounted, ref } from "vue";
import { RouterLink, useRouter } from "vue-router";
import Navbar from "../components/Navbar.vue";
import { useWishlist } from "../context/WishlistContext.js";

/* ROUTER */

const router = useRouter();

/* CONTEXT */

const { toggleWishlist, isInWishlist } = useWishlist();

/* API */

const API_URL = (
  import.meta.env.VITE_API_URL || "http://localhost:3000"
).replace(/\/$/, "");

/* CATEGORIES */

const categories = ["All", "Dresses", "Party Wear", "Festive"];

const selectedCategory = ref("All");

/* STATE */

const products = ref([]);
const loading = ref(true);

/* IMAGE */

function getProductImage(product, index = 0) {
  if (Array.isArray(product.images) && product.images.length > index) {
    const image = product.images[index];

    if (typeof image === "string") {
      return image;
    }

    if (image?.url) {
      return image.url;
    }
  }

  if (index === 0) {
    return product.image || product.imageUrl || "";
  }

  return "";
}

/* PRICE */

function formatPrice(price) {
  return Number(price || 0).toLocaleString("en-IN");
}

/* OPEN PRODUCT */

function openProduct(product) {
  if (!product?.id) {
    console.error("Product ID is missing:", product);
    return;
  }

  router.push(`/product/${product.id}`);
}

/* FETCH PRODUCTS */

async function fetchKidsWear() {
  loading.value = true;

  try {
    const response = await fetch(`${API_URL}/products`);

    if (!response.ok) {
      throw new Error(`Products API returned ${response.status}`);
    }

    const data = await response.json();

    const productList = Array.isArray(data)
      ? data
      : Array.isArray(data?.products)
        ? data.products
        : Array.isArray(data?.data)
          ? data.data
          : [];

    products.value = productList
      .filter((product) => product?.isActive !== false)
      .filter((product) => {
        const category = String(product.category || "")
          .trim()
          .toLowerCase();

        return (
          category === "kids wear" ||
          category === "kidswear" ||
          category === "kids"
        );
      })
      .map((product) => ({
        id: product.id ?? product._id,
        name: product.name || "Kids Wear",
        description: product.description || "",

        price: Number(product.price || 0),

        category: product.category || "Kids Wear",

        subCategory: product.subCategory || product.subcategory || "",

        stock: Number(product.stock ?? 0),

        image: getProductImage(product, 0),

        hoverImage: getProductImage(product, 1) || getProductImage(product, 0),

        imageError: false,
        hoverImageError: false,

        images: product.images || [],

        videos: product.videos || [],
      }));

    console.log("Kids Wear loaded:", products.value);
  } catch (error) {
    console.error("Error loading Kids Wear:", error);

    products.value = [];

    alert("Unable to load Kids Wear from the server.");
  } finally {
    loading.value = false;
  }
}

/* FILTER */

const filteredProducts = computed(() => {
  if (selectedCategory.value === "All") {
    return products.value;
  }

  const selected = selectedCategory.value.trim().toLowerCase();

  return products.value.filter((product) => {
    const subCategory = String(product.subCategory || "")
      .trim()
      .toLowerCase();

    return subCategory === selected;
  });
});

/* IMAGE ERROR */

function handleImageError(product) {
  product.imageError = true;

  console.error("Unable to load kidswear image:", product.image);
}

function handleHoverImageError(product) {
  product.hoverImageError = true;

  console.error("Unable to load kidswear hover image:", product.hoverImage);
}

/* WISHLIST */

function handleWishlist(product) {
  toggleWishlist(product);
}

/* LOAD */

onMounted(() => {
  fetchKidsWear();
});
</script>

<style scoped>
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>
