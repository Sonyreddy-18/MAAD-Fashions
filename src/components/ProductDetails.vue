```vue
<template>
  <main class="min-h-screen bg-white text-[#302525]">
    <!-- LOADING -->
    <section
      v-if="loading"
      class="flex min-h-[70vh] items-center justify-center"
    >
      <div
        class="h-9 w-9 animate-spin rounded-full border-2 border-[#ead9d5] border-t-[#9b4056]"
      ></div>
    </section>

    <!-- ERROR -->
    <section
      v-else-if="error || !product"
      class="mx-auto flex min-h-[70vh] max-w-xl flex-col items-center justify-center px-6 text-center"
    >
      <p
        class="text-xs font-semibold uppercase tracking-[0.25em] text-[#9b4056]"
      >
        MAAD FASHIONS
      </p>

      <h1 class="mt-3 font-serif text-3xl">Product not found</h1>

      <p class="mt-3 text-sm text-[#79676a]">
        This product may no longer be available.
      </p>

      <RouterLink
        :to="categoryPath"
        class="mt-7 inline-flex rounded-full bg-[#302525] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#9b4056]"
      >
        Back to {{ categoryLabel }}
      </RouterLink>
    </section>

    <!-- PRODUCT -->
    <section
      v-else
      class="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-10 lg:px-8"
    >
      <!-- BREADCRUMB -->
      <div class="mb-6 flex items-center gap-2 text-xs text-[#8b777a]">
        <RouterLink to="/" class="transition hover:text-[#9b4056]">
          Home
        </RouterLink>

        <span>/</span>

        <RouterLink :to="categoryPath" class="transition hover:text-[#9b4056]">
          {{ categoryLabel }}
        </RouterLink>

        <span>/</span>

        <span class="truncate text-[#302525]">
          {{ product.name }}
        </span>
      </div>

      <div class="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
        <!-- IMAGE GALLERY -->
        <div>
          <div class="grid grid-cols-2 gap-2 sm:gap-4">
            <button
              v-for="(image, index) in productImages"
              :key="`${image}-${index}`"
              type="button"
              class="group relative aspect-[3/4] overflow-hidden bg-[#f8efed]"
              @click="activeImage = index"
            >
              <img
                v-if="image"
                :src="image"
                :alt="`${product.name} ${index + 1}`"
                class="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                @error="handleImageError(index)"
              />

              <div
                v-else
                class="flex h-full items-center justify-center text-sm text-[#9b4056]"
              >
                MAAD
              </div>

              <div
                v-if="activeImage === index"
                class="pointer-events-none absolute inset-0 border-2 border-[#9b4056]"
              ></div>
            </button>

            <div
              v-if="!productImages.length"
              class="flex aspect-[3/4] items-center justify-center bg-[#f8efed] text-sm text-[#9b4056]"
            >
              MAAD
            </div>
          </div>
        </div>

        <!-- DETAILS -->
        <div class="lg:sticky lg:top-8 lg:self-start">
          <div class="flex items-start justify-between gap-5">
            <div>
              <p
                class="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#9b4056]"
              >
                MAAD EDIT
              </p>

              <h1 class="mt-3 font-serif text-3xl leading-tight sm:text-4xl">
                {{ product.name }}
              </h1>
            </div>

            <button
              type="button"
              class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#ded2cf] bg-white transition hover:border-[#9b4056]"
              @click="handleWishlist"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                class="h-5 w-5"
                :class="
                  isInWishlist(product)
                    ? 'fill-[#9b4056] text-[#9b4056]'
                    : 'text-[#302525]'
                "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z"
                />
              </svg>
            </button>
          </div>

          <!-- PRICE -->
          <div class="mt-6 border-b border-[#e8dfdc] pb-6">
            <p class="text-2xl font-medium">
              ₹{{ formatPrice(product.price) }}
            </p>

            <p class="mt-1 text-xs text-[#8b777a]">Inclusive of all taxes</p>
          </div>

          <!-- DESCRIPTION -->
          <div class="border-b border-[#e8dfdc] py-6">
            <p class="text-sm leading-6 text-[#66585b]">
              {{
                product.description ||
                "Designed with the MAAD FASHIONS aesthetic, this piece is made for effortless elegance."
              }}
            </p>
          </div>

          <!-- COLOR -->
          <div class="border-b border-[#e8dfdc] py-6">
            <div class="flex items-center justify-between">
              <p class="text-xs font-semibold uppercase tracking-[0.2em]">
                Color
              </p>

              <span class="text-xs text-[#8b777a]">
                {{ selectedColor }}
              </span>
            </div>

            <div class="mt-4 flex flex-wrap gap-3">
              <button
                v-for="color in colors"
                :key="color"
                type="button"
                class="flex items-center gap-2 rounded-full border px-4 py-2 text-xs transition"
                :class="
                  selectedColor === color
                    ? 'border-[#302525] bg-[#302525] text-white'
                    : 'border-[#dcd1ce] bg-white text-[#302525] hover:border-[#9b4056]'
                "
                @click="selectedColor = color"
              >
                {{ color }}
              </button>
            </div>
          </div>

          <!-- SIZE -->
          <div class="border-b border-[#e8dfdc] py-6">
            <div class="flex items-center justify-between">
              <p class="text-xs font-semibold uppercase tracking-[0.2em]">
                Select Size
              </p>

              <button
                type="button"
                class="text-xs font-medium text-[#9b4056] underline underline-offset-4"
                @click="showSizeGuide = !showSizeGuide"
              >
                Size Guide
              </button>
            </div>

            <div class="mt-4 grid grid-cols-4 gap-2">
              <button
                v-for="size in sizes"
                :key="size"
                type="button"
                class="h-11 border text-sm transition"
                :class="
                  selectedSize === size
                    ? 'border-[#302525] bg-[#302525] text-white'
                    : 'border-[#dcd1ce] bg-white hover:border-[#9b4056]'
                "
                @click="selectSize(size)"
              >
                {{ size }}
              </button>
            </div>

            <p v-if="sizeError" class="mt-3 text-xs text-[#b23b52]">
              Please select a size.
            </p>

            <div
              v-if="showSizeGuide"
              class="mt-5 overflow-hidden border border-[#e8dfdc]"
            >
              <table class="w-full text-center text-xs">
                <thead class="bg-[#faf5f3]">
                  <tr>
                    <th class="px-2 py-3">Size</th>
                    <th class="px-2 py-3">Bust</th>
                    <th class="px-2 py-3">Waist</th>
                    <th class="px-2 py-3">Hip</th>
                  </tr>
                </thead>

                <tbody class="divide-y divide-[#e8dfdc]">
                  <tr v-for="row in sizeChart" :key="row.size">
                    <td class="px-2 py-3 font-medium">
                      {{ row.size }}
                    </td>

                    <td class="px-2 py-3 text-[#79676a]">
                      {{ row.bust }}
                    </td>

                    <td class="px-2 py-3 text-[#79676a]">
                      {{ row.waist }}
                    </td>

                    <td class="px-2 py-3 text-[#79676a]">
                      {{ row.hip }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- DELIVERY -->
          <div class="border-b border-[#e8dfdc] py-6">
            <p class="text-xs font-semibold uppercase tracking-[0.2em]">
              Delivery
            </p>

            <div class="mt-4 flex gap-2">
              <input
                v-model="pincode"
                type="text"
                inputmode="numeric"
                maxlength="6"
                placeholder="Enter pincode"
                class="min-w-0 flex-1 border border-[#dcd1ce] px-4 py-3 text-sm outline-none transition focus:border-[#9b4056]"
              />

              <button
                type="button"
                class="border border-[#302525] px-5 text-xs font-semibold uppercase tracking-[0.12em] transition hover:bg-[#302525] hover:text-white"
                @click="checkDelivery"
              >
                Check
              </button>
            </div>

            <p v-if="deliveryMessage" class="mt-3 text-xs text-[#66585b]">
              {{ deliveryMessage }}
            </p>
          </div>

          <!-- ACTIONS -->
          <div class="grid gap-3 pt-6 sm:grid-cols-2">
            <button
              type="button"
              class="h-auto border border-[#302525] bg-white px-6 py-4 text-xs font-semibold uppercase tracking-[0.16em] transition hover:bg-[#302525] hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
              :disabled="product.stock <= 0"
              @click="handleAddToBag"
            >
              {{ product.stock > 0 ? "Add to Bag" : "Out of Stock" }}
            </button>

            <button
              type="button"
              class="h-auto bg-[#302525] px-6 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-[#9b4056] disabled:cursor-not-allowed disabled:opacity-40"
              :disabled="product.stock <= 0"
              @click="handleBuyNow"
            >
              Buy Now
            </button>
          </div>

          <!-- ACCORDIONS -->
          <div class="mt-8 border-t border-[#e8dfdc]">
            <details class="group border-b border-[#e8dfdc]">
              <summary
                class="flex cursor-pointer list-none items-center justify-between py-5 text-sm font-medium"
              >
                Product Details

                <span
                  class="text-xl font-light transition group-open:rotate-45"
                >
                  +
                </span>
              </summary>

              <div class="pb-5 text-sm leading-6 text-[#66585b]">
                <p>
                  {{
                    product.description ||
                    "A carefully selected MAAD FASHIONS piece."
                  }}
                </p>

                <p class="mt-3">
                  Category:

                  <span class="font-medium text-[#302525]">
                    {{ product.category || categoryLabel }}
                  </span>
                </p>
              </div>
            </details>

            <details class="group border-b border-[#e8dfdc]">
              <summary
                class="flex cursor-pointer list-none items-center justify-between py-5 text-sm font-medium"
              >
                Shipping & Returns

                <span
                  class="text-xl font-light transition group-open:rotate-45"
                >
                  +
                </span>
              </summary>

              <div class="pb-5 text-sm leading-6 text-[#66585b]">
                <p>
                  We carefully pack every MAAD FASHIONS order before dispatch.
                  Delivery availability depends on your pincode.
                </p>

                <p class="mt-3">
                  Please refer to the store's applicable return and exchange
                  policy before placing your order.
                </p>
              </div>
            </details>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { RouterLink, useRoute, useRouter } from "vue-router";
import { useCart } from "../context/CartContext.js";
import { useWishlist } from "../context/WishlistContext.js";

/* ROUTER */

const route = useRoute();
const router = useRouter();

/* CONTEXT */

const { addToCart } = useCart();
const { toggleWishlist, isInWishlist } = useWishlist();

/* API */

const API_URL = (
  import.meta.env.VITE_API_URL || "http://localhost:3000"
).replace(/\/$/, "");

/* STATE */

const product = ref(null);
const loading = ref(true);
const error = ref(false);

const activeImage = ref(0);
const selectedSize = ref("");
const selectedColor = ref("Default");
const pincode = ref("");
const deliveryMessage = ref("");
const showSizeGuide = ref(false);
const sizeError = ref(false);

const sizes = ["S", "M", "L", "XL"];

const colors = ["Default", "Black", "White", "Pink"];

const sizeChart = [
  {
    size: "S",
    bust: '34"',
    waist: '28"',
    hip: '36"',
  },
  {
    size: "M",
    bust: '36"',
    waist: '30"',
    hip: '38"',
  },
  {
    size: "L",
    bust: '38"',
    waist: '32"',
    hip: '40"',
  },
  {
    size: "XL",
    bust: '40"',
    waist: '34"',
    hip: '42"',
  },
];

/* CATEGORY */

const categoryMap = {
  dress: {
    label: "Dresses",
    path: "/dresses",
  },

  dresses: {
    label: "Dresses",
    path: "/dresses",
  },

  gown: {
    label: "Dresses",
    path: "/dresses",
  },

  "party wear": {
    label: "Dresses",
    path: "/dresses",
  },

  casual: {
    label: "Dresses",
    path: "/dresses",
  },

  evening: {
    label: "Dresses",
    path: "/dresses",
  },

  anarkali: {
    label: "Dresses",
    path: "/dresses",
  },

  frock: {
    label: "Dresses",
    path: "/dresses",
  },

  saree: {
    label: "Sarees",
    path: "/sarees",
  },

  sarees: {
    label: "Sarees",
    path: "/sarees",
  },

  "kids wear": {
    label: "Kids Wear",
    path: "/kids-wear",
  },

  kids: {
    label: "Kids Wear",
    path: "/kids-wear",
  },

  kidswear: {
    label: "Kids Wear",
    path: "/kids-wear",
  },

  "customised dress": {
    label: "Customised Dresses",
    path: "/customised-dresses",
  },

  "customised dresses": {
    label: "Customised Dresses",
    path: "/customised-dresses",
  },

  customised: {
    label: "Customised Dresses",
    path: "/customised-dresses",
  },
};

const categoryInfo = computed(() => {
  const category = String(product.value?.category || "")
    .trim()
    .toLowerCase();

  return (
    categoryMap[category] || {
      label: "Shop",
      path: "/",
    }
  );
});

const categoryLabel = computed(() => {
  return categoryInfo.value.label;
});

const categoryPath = computed(() => {
  return categoryInfo.value.path;
});

/* IMAGES */

function getImageUrl(image) {
  if (!image) return "";

  if (
    typeof image === "string" &&
    (image.startsWith("http://") || image.startsWith("https://"))
  ) {
    return image;
  }

  if (typeof image === "string" && image.startsWith("/")) {
    return `${API_URL}${image}`;
  }

  return `${API_URL}/${image}`;
}

function getProductImages(item) {
  const images = [];

  if (Array.isArray(item?.images)) {
    item.images.forEach((image) => {
      if (typeof image === "string") {
        images.push(getImageUrl(image));
      } else if (image?.url) {
        images.push(getImageUrl(image.url));
      }
    });
  }

  if (item?.image) {
    images.push(getImageUrl(item.image));
  }

  if (item?.imageUrl) {
    images.push(getImageUrl(item.imageUrl));
  }

  return [...new Set(images.filter(Boolean))];
}

const productImages = computed(() => {
  if (!product.value) return [];

  return getProductImages(product.value);
});

/* LOAD PRODUCT */

async function loadProduct() {
  loading.value = true;
  error.value = false;

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
        : [];

    const foundProduct = products.find(
      (item) => String(item.id) === String(route.params.id),
    );

    if (!foundProduct) {
      error.value = true;
      product.value = null;
      return;
    }

    product.value = {
      ...foundProduct,
      price: Number(foundProduct.price || 0),
      stock: Number(foundProduct.stock || 0),
    };

    activeImage.value = 0;
  } catch (err) {
    console.error("Unable to load product:", err);

    error.value = true;
    product.value = null;
  } finally {
    loading.value = false;
  }
}

/* PRICE */

function formatPrice(price) {
  return Number(price || 0).toLocaleString("en-IN");
}

/* SIZE */

function selectSize(size) {
  selectedSize.value = size;
  sizeError.value = false;
}

/* CART */

function validateProduct() {
  if (!selectedSize.value) {
    sizeError.value = true;
    return false;
  }

  sizeError.value = false;

  return true;
}

function createCartProduct() {
  return {
    ...product.value,
    size: selectedSize.value,
    color: selectedColor.value,
  };
}

function handleAddToBag() {
  if (!product.value) return;

  if (!validateProduct()) return;

  addToCart(createCartProduct());

  alert(`${product.value.name} added to bag`);
}

function handleBuyNow() {
  if (!product.value) return;

  if (!validateProduct()) return;

  addToCart(createCartProduct());

  router.push("/checkout");
}

/* WISHLIST */

function handleWishlist() {
  if (!product.value) return;

  toggleWishlist(product.value);
}

/* DELIVERY */

function checkDelivery() {
  if (!/^\d{6}$/.test(pincode.value)) {
    deliveryMessage.value = "Please enter a valid 6-digit pincode.";
    return;
  }

  deliveryMessage.value =
    "Delivery availability will be confirmed for this pincode.";
}

/* IMAGE ERROR */

function handleImageError(index) {
  console.error("Unable to load product image:", productImages.value[index]);
}

/* LOAD */

onMounted(() => {
  loadProduct();
});
</script>
```
