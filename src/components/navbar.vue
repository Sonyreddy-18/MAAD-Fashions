<template>
  <!-- NAVBAR -->
  <header
    class="fixed left-0 right-0 top-0 z-[100] w-full border-b border-[#eadedb] bg-[#fffaf8]/95 shadow-sm backdrop-blur-md"
  >
    <nav
      class="mx-auto flex h-[92px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10"
    >
      <!-- LOGO + BRAND NAME -->
      <RouterLink to="/" class="flex shrink-0 items-center gap-3">
        <img
          :src="maadLogo"
          alt="MAAD Fashions"
          class="h-[70px] w-[70px] rounded-full object-cover shadow-sm"
        />

        <div class="hidden leading-tight sm:block">
          <h1 class="text-3xl font-bold tracking-[0.15em] text-[#302525]">
            MAAD
          </h1>

          <p class="text-xs font-semibold tracking-[0.35em] text-[#9b4056]">
            FASHIONS
          </p>
        </div>
      </RouterLink>

      <!-- DESKTOP NAVIGATION -->
      <div class="hidden items-center gap-7 lg:flex">
        <RouterLink
          to="/"
          class="relative py-3 text-[16px] font-medium text-[#302525] transition hover:text-[#9b4056]"
          :class="{ 'text-[#9b4056]': route.path === '/' }"
        >
          Home
          <span
            v-if="route.path === '/'"
            class="absolute bottom-0 left-0 h-[2px] w-full bg-[#9b4056]"
          ></span>
        </RouterLink>

        <RouterLink
          to="/dresses"
          class="relative py-3 text-[16px] font-medium text-[#302525] transition hover:text-[#9b4056]"
          :class="{ 'text-[#9b4056]': route.path === '/dresses' }"
        >
          Dresses
          <span
            v-if="route.path === '/dresses'"
            class="absolute bottom-0 left-0 h-[2px] w-full bg-[#9b4056]"
          ></span>
        </RouterLink>

        <RouterLink
          to="/sarees"
          class="relative py-3 text-[16px] font-medium text-[#302525] transition hover:text-[#9b4056]"
          :class="{ 'text-[#9b4056]': route.path === '/sarees' }"
        >
          Sarees
          <span
            v-if="route.path === '/sarees'"
            class="absolute bottom-0 left-0 h-[2px] w-full bg-[#9b4056]"
          ></span>
        </RouterLink>

        <RouterLink
          to="/customised-dresses"
          class="relative py-3 text-[16px] font-medium text-[#302525] transition hover:text-[#9b4056]"
          :class="{ 'text-[#9b4056]': route.path === '/customised-dresses' }"
        >
          Customised Dresses
          <span
            v-if="route.path === '/customised-dresses'"
            class="absolute bottom-0 left-0 h-[2px] w-full bg-[#9b4056]"
          ></span>
        </RouterLink>

        <RouterLink
          to="/about"
          class="relative py-3 text-[16px] font-medium text-[#302525] transition hover:text-[#9b4056]"
          :class="{ 'text-[#9b4056]': route.path === '/about' }"
        >
          About
          <span
            v-if="route.path === '/about'"
            class="absolute bottom-0 left-0 h-[2px] w-full bg-[#9b4056]"
          ></span>
        </RouterLink>

        <RouterLink
          to="/contact"
          class="relative py-3 text-[16px] font-medium text-[#302525] transition hover:text-[#9b4056]"
          :class="{ 'text-[#9b4056]': route.path === '/contact' }"
        >
          Contact
          <span
            v-if="route.path === '/contact'"
            class="absolute bottom-0 left-0 h-[2px] w-full bg-[#9b4056]"
          ></span>
        </RouterLink>
      </div>

      <!-- RIGHT SIDE -->
      <div class="flex items-center gap-4 sm:gap-6">
        <!-- LOGIN -->
        <RouterLink
          to="/login"
          class="hidden rounded-full bg-[#ad3d5b] px-5 py-2.5 text-[16px] font-semibold text-white shadow-sm transition hover:bg-[#922f4a] hover:shadow-md lg:block"
        >
          Login
        </RouterLink>

        <button
          @click="goToAccount"
          class="flex h-11 w-11 items-center justify-center rounded-full text-2xl transition hover:bg-[#fff0f2]"
          title="My Account"
        >
          👤
        </button>

        <!-- SEARCH BUTTON -->
        <button
          type="button"
          @click="toggleSearch"
          class="text-[#302525] transition hover:scale-110 hover:text-[#9b4056]"
          aria-label="Search"
        >
          <!-- SEARCH ICON -->
          <svg
            v-if="!searchOpen"
            xmlns="http://www.w3.org/2000/svg"
            class="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="1.8"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-4-4" />
          </svg>

          <!-- CLOSE ICON -->
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="1.8"
          >
            <path stroke-linecap="round" d="M6 6l12 12M18 6 6 18" />
          </svg>
        </button>

        <!-- HEART -->
        <!-- WISHLIST -->
        <RouterLink
          to="/wishlist"
          class="relative text-[#302525] transition hover:scale-110 hover:text-[#9b4056]"
          aria-label="Wishlist"
        >
          <!-- HEART ICON -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-7 w-7 transition"
            :class="
              wishlistCount > 0
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

          <!-- COUNT -->
          <span
            v-if="wishlistCount > 0"
            class="absolute -right-3 -top-3 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#c6284f] px-1 text-[11px] font-bold text-white"
          >
            {{ wishlistCount }}
          </span>
        </RouterLink>

        <!-- CART -->
        <RouterLink
          to="/cart"
          class="relative text-[#302525] transition hover:scale-110 hover:text-[#9b4056]"
          aria-label="Shopping Cart"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="1.8"
          >
            <path
              d="M3 4h2l2.4 11.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L21 7H6"
            />

            <circle cx="10" cy="20" r="1" />
            <circle cx="18" cy="20" r="1" />
          </svg>

          <span
            class="absolute -right-3 -top-3 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#c6284f] px-1 text-[11px] font-bold text-white"
          >
            {{ cartCount }}
          </span>
        </RouterLink>

        <!-- MOBILE MENU -->
        <button
          @click="mobileMenu = !mobileMenu"
          class="text-[#302525] lg:hidden"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="1.8"
          >
            <path
              v-if="!mobileMenu"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />

            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 6l12 12M18 6 6 18"
            />
          </svg>
        </button>
      </div>
    </nav>

    <!-- ================================================= -->
    <!-- SEARCH PANEL -->
    <!-- ================================================= -->

    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-3"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-3"
    >
      <div
        v-if="searchOpen"
        class="border-t border-[#eadedb] bg-[#fffaf8] shadow-lg"
      >
        <div class="mx-auto max-w-5xl px-5 py-6 sm:px-8">
          <!-- SEARCH INPUT -->
          <form @submit.prevent="performSearch">
            <div
              class="flex items-center rounded-2xl border border-[#dfccca] bg-white px-5 py-3 shadow-sm transition focus-within:border-[#9b4056] focus-within:ring-2 focus-within:ring-[#9b4056]/10"
            >
              <!-- SEARCH ICON -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="mr-3 h-6 w-6 shrink-0 text-[#9b4056]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="1.8"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-4-4" />
              </svg>

              <input
                ref="searchInput"
                v-model="searchQuery"
                type="text"
                placeholder="Search dresses, sarees, styles..."
                class="w-full bg-transparent text-base text-[#302525] outline-none placeholder:text-[#a99591]"
              />

              <!-- CLEAR -->
              <button
                v-if="searchQuery"
                type="button"
                @click="searchQuery = ''"
                class="ml-3 rounded-full p-1 text-[#8d7975] transition hover:bg-[#fff0f3] hover:text-[#9b4056]"
                aria-label="Clear search"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="1.8"
                >
                  <path stroke-linecap="round" d="M6 6l12 12M18 6 6 18" />
                </svg>
              </button>
            </div>
          </form>

          <!-- SEARCH CONTENT -->
          <div class="mt-6">
            <!-- DEFAULT SEARCH STATE -->
            <div v-if="!searchQuery.trim()">
              <p
                class="mb-4 text-xs font-semibold tracking-[0.25em] text-[#9b4056]"
              >
                EXPLORE MAAD
              </p>

              <div class="flex flex-wrap gap-3">
                <button
                  v-for="item in popularSearches"
                  :key="item"
                  @click="selectSearch(item)"
                  class="rounded-full border border-[#eadedb] bg-white px-5 py-2.5 text-sm font-medium text-[#5d4b48] transition hover:border-[#9b4056] hover:bg-[#fff0f3] hover:text-[#9b4056]"
                >
                  {{ item }}
                </button>
              </div>
            </div>

            <!-- TYPING STATE -->
            <div v-else>
              <div class="mb-4 flex items-center justify-between">
                <p
                  class="text-xs font-semibold tracking-[0.25em] text-[#9b4056]"
                >
                  SEARCHING FOR
                </p>

                <span class="text-sm text-[#8d7975]">
                  "{{ searchQuery }}"
                </span>
              </div>

              <!-- TEMPORARY RESULTS -->
              <div class="grid gap-3 sm:grid-cols-3">
                <button
                  v-for="result in filteredResults"
                  :key="result.name"
                  @click="openResult(result)"
                  class="group flex items-center gap-4 rounded-2xl border border-[#eadedb] bg-white p-3 text-left transition hover:-translate-y-0.5 hover:border-[#d7a8b3] hover:shadow-md"
                >
                  <div
                    class="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#fff0f3] text-xl"
                  >
                    {{ result.icon }}
                  </div>

                  <div class="min-w-0">
                    <p
                      class="truncate font-semibold text-[#302525] group-hover:text-[#9b4056]"
                    >
                      {{ result.name }}
                    </p>

                    <p class="mt-1 text-xs text-[#8d7975]">
                      {{ result.category }}
                    </p>
                  </div>
                </button>
              </div>

              <!-- NO RESULTS -->
              <div
                v-if="filteredResults.length === 0"
                class="rounded-2xl border border-dashed border-[#dfccca] bg-white px-6 py-8 text-center"
              >
                <div class="mb-3 text-3xl">⌕</div>

                <h3 class="font-semibold text-[#302525]">No styles found</h3>

                <p class="mt-1 text-sm text-[#8d7975]">
                  Try searching for dresses, sarees or customised styles.
                </p>
              </div>

              <!-- VIEW ALL -->
              <button
                v-if="filteredResults.length > 0"
                @click="performSearch"
                class="mt-5 w-full rounded-xl bg-[#ad3d5b] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#922f4a]"
              >
                View all results
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>

    <!-- ================================================= -->
    <!-- MOBILE NAVIGATION -->
    <!-- ================================================= -->

    <div
      v-if="mobileMenu"
      class="border-t border-[#eadedb] bg-[#fffaf8] px-6 py-5 shadow-lg lg:hidden"
    >
      <div class="flex flex-col gap-1">
        <RouterLink
          to="/"
          @click="mobileMenu = false"
          class="rounded-xl px-4 py-3 font-medium text-[#302525] hover:bg-[#fff0f3]"
        >
          Home
        </RouterLink>

        <RouterLink
          to="/dresses"
          @click="mobileMenu = false"
          class="rounded-xl px-4 py-3 font-medium text-[#302525] hover:bg-[#fff0f3]"
        >
          Dresses
        </RouterLink>

        <RouterLink
          to="/sarees"
          @click="mobileMenu = false"
          class="rounded-xl px-4 py-3 font-medium text-[#302525] hover:bg-[#fff0f3]"
        >
          Sarees
        </RouterLink>

        <RouterLink
          to="/customised-dresses"
          @click="mobileMenu = false"
          class="rounded-xl px-4 py-3 font-medium text-[#302525] hover:bg-[#fff0f3]"
        >
          Customised Dresses
        </RouterLink>

        <RouterLink
          to="/about"
          @click="mobileMenu = false"
          class="rounded-xl px-4 py-3 font-medium text-[#302525] hover:bg-[#fff0f3]"
        >
          About
        </RouterLink>

        <RouterLink
          to="/contact"
          @click="mobileMenu = false"
          class="rounded-xl px-4 py-3 font-medium text-[#302525] hover:bg-[#fff0f3]"
        >
          Contact
        </RouterLink>

        <!-- ACCOUNT / LOGIN -->
        <RouterLink
          :to="isLoggedIn ? '/account' : '/login'"
          class="hidden text-[#302525] transition hover:scale-110 hover:text-[#9b4056] lg:block"
          :title="isLoggedIn ? 'My Account' : 'Login'"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="1.7"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.5 20.25a7.5 7.5 0 0 1 15 0"
            />
          </svg>
        </RouterLink>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, computed, nextTick } from "vue";
import { useRoute, useRouter } from "vue-router";
import maadLogo from "../assets/maad-logo.jpeg";
import { useCart } from "../context/CartContext.js";
import { useWishlist } from "../context/WishlistContext.js";

const route = useRoute();
const router = useRouter();

const mobileMenu = ref(false);

const isLoggedIn = ref(
  !!(
    localStorage.getItem("accessToken") || sessionStorage.getItem("accessToken")
  ),
);

// =========================================
// CART
// =========================================

const { cartCount } = useCart();
const { wishlistCount } = useWishlist();

// =========================================
// SEARCH
// =========================================

const searchOpen = ref(false);
const searchQuery = ref("");
const searchInput = ref(null);

// Popular searches
const popularSearches = [
  "Dresses",
  "Sarees",
  "Party Wear",
  "Customised Dresses",
];

// Temporary search data
// We will replace this with your REAL products next.
const searchProducts = [
  {
    name: "Anarkali Dresses",
    category: "Dresses",
    icon: "👗",
    route: "/dresses",
  },
  {
    name: "Party Dresses",
    category: "Dresses",
    icon: "✨",
    route: "/dresses",
  },
  {
    name: "Designer Sarees",
    category: "Sarees",
    icon: "🥻",
    route: "/sarees",
  },
  {
    name: "Silk Sarees",
    category: "Sarees",
    icon: "🌸",
    route: "/sarees",
  },
  {
    name: "Customised Dresses",
    category: "Customised",
    icon: "💫",
    route: "/customised-dresses",
  },
  {
    name: "Wedding Wear",
    category: "Dresses",
    icon: "💍",
    route: "/dresses",
  },
];

// Filter results while typing
const filteredResults = computed(() => {
  const query = searchQuery.value.trim().toLowerCase();

  if (!query) {
    return [];
  }

  return searchProducts
    .filter(
      (product) =>
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query),
    )
    .slice(0, 6);
});

// Open / close search
const toggleSearch = async () => {
  searchOpen.value = !searchOpen.value;

  if (searchOpen.value) {
    mobileMenu.value = false;

    await nextTick();

    searchInput.value?.focus();
  } else {
    searchQuery.value = "";
  }
};

// Select popular search
const selectSearch = async (item) => {
  searchQuery.value = item;

  await nextTick();

  searchInput.value?.focus();
};

// Open individual search result
const openResult = (result) => {
  searchOpen.value = false;
  searchQuery.value = "";

  router.push(result.route);
};

// Submit search
const performSearch = () => {
  const query = searchQuery.value.trim();

  if (!query) {
    return;
  }

  searchOpen.value = false;

  router.push({
    path: "/search",
    query: {
      q: query,
    },
  });
};
const goToAccount = () => {
  const token =
    localStorage.getItem("accessToken") ||
    sessionStorage.getItem("accessToken");

  if (token) {
    router.push("/account");
  } else {
    router.push("/login");
  }
};
</script>
