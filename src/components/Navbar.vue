<template>
  <!-- =========================================================
       NAVBAR
  ========================================================== -->
  <header
    class="fixed left-0 right-0 top-0 z-[100] w-full transition-all duration-300"
    :class="
      menuOpen || searchOpen
        ? 'bg-[#fffaf8] shadow-sm'
        : 'border-b border-white/20 bg-[#fffaf8]/90 backdrop-blur-md'
    "
  >
    <nav
      class="mx-auto flex h-[82px] max-w-[1600px] items-center justify-between px-5 sm:px-8 lg:h-[92px] lg:px-10"
    >
      <!-- =====================================================
           LOGO
      ====================================================== -->
      <RouterLink
        to="/"
        class="group flex shrink-0 items-center gap-3"
        @click="closeAll"
      >
        <img
          :src="maadLogo"
          alt="MAAD Fashions"
          class="h-[58px] w-[58px] rounded-full object-cover shadow-sm transition duration-300 group-hover:scale-[1.03] lg:h-[68px] lg:w-[68px]"
        />

        <div class="hidden leading-tight sm:block">
          <h1
            class="text-2xl font-bold tracking-[0.16em] text-[#302525] lg:text-3xl"
          >
            MAAD
          </h1>

          <p
            class="text-[10px] font-semibold tracking-[0.35em] text-[#9b4056] lg:text-xs"
          >
            FASHIONS
          </p>
        </div>
      </RouterLink>

      <!-- =====================================================
           DESKTOP CENTER
           Minimal — no category links
      ====================================================== -->
      <div class="hidden lg:flex lg:items-center">
        <span class="text-[11px] font-medium tracking-[0.42em] text-[#8d7975]">
          THE MAAD EDIT
        </span>
      </div>

      <!-- =====================================================
           RIGHT SIDE
      ====================================================== -->
      <div class="flex items-center gap-4 sm:gap-5 lg:gap-6">
        <!-- LOGIN -->
        <button
          v-if="!isLoggedIn"
          type="button"
          @click="goToLogin"
          class="hidden text-[13px] font-semibold tracking-[0.08em] text-[#302525] transition hover:text-[#9b4056] lg:block"
        >
          SIGN IN
        </button>

        <!-- MY ACCOUNT -->
        <button
          v-else
          type="button"
          @click="goToAccount"
          class="hidden text-[13px] font-semibold tracking-[0.08em] text-[#302525] transition hover:text-[#9b4056] lg:block"
        >
          MY ACCOUNT
        </button>

        <!-- =================================================
             SEARCH
        ================================================== -->
        <button
          type="button"
          @click="toggleSearch"
          class="text-[#302525] transition duration-200 hover:scale-110 hover:text-[#9b4056]"
          aria-label="Search"
        >
          <svg
            v-if="!searchOpen"
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 lg:h-7 lg:w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="1.6"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-4-4" />
          </svg>

          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 lg:h-7 lg:w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="1.6"
          >
            <path stroke-linecap="round" d="M6 6l12 12M18 6 6 18" />
          </svg>
        </button>

        <!-- =================================================
             WISHLIST
        ================================================== -->
        <RouterLink
          to="/wishlist"
          @click="closeAll"
          class="relative text-[#302525] transition duration-200 hover:scale-110 hover:text-[#9b4056]"
          aria-label="Wishlist"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 lg:h-7 lg:w-7"
            :class="
              wishlistCount > 0
                ? 'fill-[#c6284f] text-[#c6284f]'
                : 'fill-none text-[#302525]'
            "
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="1.6"
          >
            <path
              d="M20.8 8.7c0 5.5-8.8 10.3-8.8 10.3S3.2 14.2 3.2 8.7A4.7 4.7 0 0 1 8 4a5.1 5.1 0 0 1 4 2.1A5.1 5.1 0 0 1 16 4a4.7 4.7 0 0 1 4.8 4.7Z"
            />
          </svg>

          <span
            v-if="wishlistCount > 0"
            class="absolute -right-3 -top-3 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#c6284f] px-1 text-[10px] font-bold text-white"
          >
            {{ wishlistCount }}
          </span>
        </RouterLink>

        <!-- =================================================
             CART
        ================================================== -->
        <RouterLink
          to="/cart"
          @click="closeAll"
          class="relative text-[#302525] transition duration-200 hover:scale-110 hover:text-[#9b4056]"
          aria-label="Shopping Cart"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 lg:h-7 lg:w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="1.6"
          >
            <path
              d="M3 4h2l2.4 11.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L21 7H6"
            />
            <circle cx="10" cy="20" r="1" />
            <circle cx="18" cy="20" r="1" />
          </svg>

          <span
            v-if="cartCount > 0"
            class="absolute -right-3 -top-3 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#c6284f] px-1 text-[10px] font-bold text-white"
          >
            {{ cartCount }}
          </span>
        </RouterLink>

        <!-- =================================================
             MENU
        ================================================== -->
        <button
          type="button"
          @click="toggleMenu"
          class="group flex items-center gap-2 text-[#302525] transition hover:text-[#9b4056]"
          aria-label="Open menu"
          :aria-expanded="menuOpen"
        >
          <span
            class="hidden text-[13px] font-semibold tracking-[0.14em] sm:inline"
          >
            MENU
          </span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-7 w-7 transition-transform duration-300"
            :class="menuOpen ? 'rotate-90' : ''"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="1.5"
          >
            <path
              v-if="!menuOpen"
              stroke-linecap="round"
              d="M4 7h16M4 12h16M4 17h16"
            />

            <path v-else stroke-linecap="round" d="M6 6l12 12M18 6 6 18" />
          </svg>
        </button>
      </div>
    </nav>

    <!-- =========================================================
         SEARCH PANEL
    ========================================================== -->
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
          <form @submit.prevent="performSearch">
            <div
              class="flex items-center rounded-2xl border border-[#dfccca] bg-white px-5 py-3 shadow-sm transition focus-within:border-[#9b4056] focus-within:ring-2 focus-within:ring-[#9b4056]/10"
            >
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

          <div class="mt-6">
            <!-- POPULAR -->
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
                  type="button"
                  @click="selectSearch(item)"
                  class="rounded-full border border-[#eadedb] bg-white px-5 py-2.5 text-sm font-medium text-[#5d4b48] transition hover:border-[#9b4056] hover:bg-[#fff0f3] hover:text-[#9b4056]"
                >
                  {{ item }}
                </button>
              </div>
            </div>

            <!-- RESULTS -->
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

              <div class="grid gap-3 sm:grid-cols-3">
                <button
                  v-for="result in filteredResults"
                  :key="result.name"
                  type="button"
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

              <button
                v-if="filteredResults.length > 0"
                type="button"
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

    <!-- =========================================================
         FULL SCREEN MENU
    ========================================================== -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="menuOpen"
        class="fixed inset-0 top-[82px] z-[90] overflow-y-auto bg-[#fffaf8] lg:top-[92px]"
      >
        <div
          class="mx-auto min-h-full max-w-[1500px] px-6 py-8 sm:px-10 lg:px-14 lg:py-12"
        >
          <!-- MENU HEADER -->
          <div
            class="mb-10 flex items-end justify-between border-b border-[#eadedb] pb-6"
          >
            <div>
              <p
                class="mb-2 text-[10px] font-semibold tracking-[0.35em] text-[#9b4056]"
              >
                MAAD FASHIONS
              </p>

              <h2
                class="text-3xl font-light tracking-tight text-[#302525] sm:text-4xl lg:text-5xl"
              >
                Explore the collection.
              </h2>
            </div>

            <button
              type="button"
              @click="closeMenu"
              class="hidden items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#8d7975] transition hover:text-[#9b4056] sm:flex"
            >
              CLOSE
              <span class="text-lg">×</span>
            </button>
          </div>

          <!-- =================================================
               MENU GRID
          ================================================== -->
          <div class="grid gap-12 lg:grid-cols-[1.1fr_1fr_1fr] lg:gap-16">
            <!-- =================================================
                 SHOP
            ================================================== -->
            <section>
              <p
                class="mb-7 text-xs font-bold tracking-[0.28em] text-[#9b4056]"
              >
                SHOP
              </p>

              <div class="space-y-5">
                <RouterLink to="/" @click="closeMenu" class="menu-main-link">
                  New Arrivals
                </RouterLink>

                <RouterLink
                  to="/dresses"
                  @click="closeMenu"
                  class="menu-main-link"
                >
                  Dresses
                </RouterLink>

                <RouterLink
                  to="/sarees"
                  @click="closeMenu"
                  class="menu-main-link"
                >
                  Sarees
                </RouterLink>

                <RouterLink
                  to="/kids-wear"
                  @click="closeMenu"
                  class="menu-main-link"
                >
                  Kids Wear
                </RouterLink>

                <RouterLink
                  to="/customised-dresses"
                  @click="closeMenu"
                  class="menu-main-link"
                >
                  Customised Dresses
                </RouterLink>
              </div>
            </section>

            <!-- =================================================
                 DRESSES + SAREES
            ================================================== -->
            <section>
              <p
                class="mb-7 text-xs font-bold tracking-[0.28em] text-[#9b4056]"
              >
                COLLECTIONS
              </p>

              <!-- DRESSES -->
              <div class="mb-10">
                <RouterLink
                  to="/dresses"
                  @click="closeMenu"
                  class="mb-4 block text-lg font-semibold text-[#302525] transition hover:text-[#9b4056]"
                >
                  Dresses
                </RouterLink>

                <div class="grid grid-cols-2 gap-x-5 gap-y-3">
                  <RouterLink
                    v-for="item in dressCategories"
                    :key="item.label"
                    :to="item.route"
                    @click="closeMenu"
                    class="menu-sub-link"
                  >
                    {{ item.label }}
                  </RouterLink>
                </div>
              </div>

              <!-- SAREES -->
              <div>
                <RouterLink
                  to="/sarees"
                  @click="closeMenu"
                  class="mb-4 block text-lg font-semibold text-[#302525] transition hover:text-[#9b4056]"
                >
                  Sarees
                </RouterLink>

                <div class="grid grid-cols-2 gap-x-5 gap-y-3">
                  <RouterLink
                    v-for="item in sareeCategories"
                    :key="item.label"
                    :to="item.route"
                    @click="closeMenu"
                    class="menu-sub-link"
                  >
                    {{ item.label }}
                  </RouterLink>
                </div>
              </div>
            </section>

            <!-- =================================================
                 DISCOVER
            ================================================== -->
            <section>
              <p
                class="mb-7 text-xs font-bold tracking-[0.28em] text-[#9b4056]"
              >
                DISCOVER
              </p>

              <div class="space-y-5">
                <RouterLink
                  to="/style-stories"
                  @click="closeMenu"
                  class="menu-main-link"
                >
                  Style Stories
                </RouterLink>

                <RouterLink
                  to="/customised-dresses"
                  @click="closeMenu"
                  class="menu-main-link"
                >
                  Custom Orders
                </RouterLink>

                <RouterLink
                  to="/customised-dresses"
                  @click="closeMenu"
                  class="menu-main-link"
                >
                  AI Try-On
                </RouterLink>

                <RouterLink
                  to="/about"
                  @click="closeMenu"
                  class="menu-main-link"
                >
                  About MAAD
                </RouterLink>

                <RouterLink
                  to="/contact"
                  @click="closeMenu"
                  class="menu-main-link"
                >
                  Contact
                </RouterLink>
              </div>

              <!-- ACCOUNT -->
              <div class="mt-12 border-t border-[#eadedb] pt-8">
                <p
                  class="mb-5 text-xs font-bold tracking-[0.28em] text-[#9b4056]"
                >
                  ACCOUNT
                </p>

                <div class="space-y-4">
                  <button
                    type="button"
                    @click="handleMenuAccount"
                    class="block text-left text-[17px] font-medium text-[#302525] transition hover:translate-x-1 hover:text-[#9b4056]"
                  >
                    {{ isLoggedIn ? "My Account" : "Sign In" }}
                  </button>

                  <RouterLink
                    to="/wishlist"
                    @click="closeMenu"
                    class="menu-sub-link block"
                  >
                    Wishlist
                  </RouterLink>

                  <RouterLink
                    to="/cart"
                    @click="closeMenu"
                    class="menu-sub-link block"
                  >
                    Shopping Bag
                  </RouterLink>
                </div>
              </div>
            </section>
          </div>

          <!-- =================================================
               FEATURED BOTTOM MESSAGE
          ================================================== -->
          <div class="mt-16 border-t border-[#eadedb] py-10 lg:mt-20">
            <div
              class="flex flex-col justify-between gap-5 sm:flex-row sm:items-center"
            >
              <div>
                <p
                  class="text-[10px] font-semibold tracking-[0.3em] text-[#9b4056]"
                >
                  MADE FOR YOU
                </p>

                <h3 class="mt-2 text-2xl font-light text-[#302525] sm:text-3xl">
                  Your dress. Your way.
                </h3>
              </div>

              <RouterLink
                to="/customised-dresses"
                @click="closeMenu"
                class="inline-flex w-fit items-center gap-3 border-b border-[#302525] pb-2 text-sm font-semibold tracking-[0.12em] text-[#302525] transition hover:border-[#9b4056] hover:text-[#9b4056]"
              >
                CREATE YOUR DRESS
                <span class="text-lg">→</span>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import {
  ref,
  computed,
  nextTick,
  onMounted,
  onBeforeUnmount,
  watch,
} from "vue";

import { useRoute, useRouter } from "vue-router";

import maadLogo from "../assets/maad-logo.jpeg";

import { useCart } from "../context/CartContext.js";
import { useWishlist } from "../context/WishlistContext.js";

/* ============================================================
   ROUTER
============================================================ */

const route = useRoute();
const router = useRouter();

/* ============================================================
   MENU STATE
============================================================ */

const menuOpen = ref(false);
const mobileMenu = ref(false);

/* ============================================================
   AUTHENTICATION
============================================================ */

const isLoggedIn = ref(false);

const checkLogin = () => {
  const token = localStorage.getItem("accessToken");
  const user = localStorage.getItem("user");

  if (!token || !user) {
    isLoggedIn.value = false;
    return;
  }

  try {
    const parts = token.split(".");

    if (parts.length !== 3) {
      throw new Error("Invalid token");
    }

    const payload = JSON.parse(atob(parts[1]));

    if (payload.exp && payload.exp * 1000 < Date.now()) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("user");

      isLoggedIn.value = false;
      return;
    }

    const parsedUser = JSON.parse(user);

    if (parsedUser?.role !== "CUSTOMER") {
      isLoggedIn.value = false;
      return;
    }

    isLoggedIn.value = true;
  } catch (error) {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");

    isLoggedIn.value = false;
  }
};

/* ============================================================
   LIFECYCLE
============================================================ */

onMounted(() => {
  checkLogin();

  window.addEventListener("storage", checkLogin);
  window.addEventListener("auth-changed", checkLogin);

  document.addEventListener("keydown", handleEscape);
});

onBeforeUnmount(() => {
  window.removeEventListener("storage", checkLogin);
  window.removeEventListener("auth-changed", checkLogin);

  document.removeEventListener("keydown", handleEscape);

  document.body.style.overflow = "";
});

/* ============================================================
   ROUTE CHANGE
============================================================ */

watch(
  () => route.fullPath,
  () => {
    checkLogin();

    closeAll();
  },
);

/* ============================================================
   ESCAPE KEY
============================================================ */

const handleEscape = (event) => {
  if (event.key === "Escape") {
    closeAll();
  }
};

/* ============================================================
   MENU
============================================================ */

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;

  if (menuOpen.value) {
    searchOpen.value = false;
    searchQuery.value = "";
  }

  updateBodyScroll();
};

const closeMenu = () => {
  menuOpen.value = false;
  mobileMenu.value = false;

  updateBodyScroll();
};

const closeAll = () => {
  menuOpen.value = false;
  mobileMenu.value = false;
  searchOpen.value = false;
  searchQuery.value = "";

  updateBodyScroll();
};

const updateBodyScroll = () => {
  if (menuOpen.value) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
};

/* ============================================================
   MENU ACCOUNT
============================================================ */

const handleMenuAccount = () => {
  checkLogin();

  if (isLoggedIn.value) {
    goToAccount();
  } else {
    goToLogin();
  }
};

/* ============================================================
   LOGIN
============================================================ */

const goToLogin = () => {
  closeAll();

  localStorage.setItem("redirectAfterLogin", route.fullPath);

  router.push("/login");
};

/* ============================================================
   ACCOUNT
============================================================ */

const goToAccount = () => {
  closeAll();

  checkLogin();

  if (isLoggedIn.value) {
    router.push("/account");
  } else {
    localStorage.setItem("redirectAfterLogin", route.fullPath);

    router.push("/login");
  }
};

/* ============================================================
   CART
============================================================ */

const { cartCount } = useCart();

/* ============================================================
   WISHLIST
============================================================ */

const { wishlistCount } = useWishlist();

/* ============================================================
   SEARCH
============================================================ */

const searchOpen = ref(false);
const searchQuery = ref("");
const searchInput = ref(null);

/* ============================================================
   POPULAR SEARCHES
============================================================ */

const popularSearches = [
  "Dresses",
  "Sarees",
  "Party Wear",
  "Customised Dresses",
];

/* ============================================================
   SEARCH DATA
============================================================ */

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

/* ============================================================
   FILTER SEARCH
============================================================ */

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

/* ============================================================
   SEARCH TOGGLE
============================================================ */

const toggleSearch = async () => {
  searchOpen.value = !searchOpen.value;

  if (searchOpen.value) {
    menuOpen.value = false;

    await nextTick();

    searchInput.value?.focus();
  } else {
    searchQuery.value = "";
  }

  updateBodyScroll();
};

/* ============================================================
   SELECT POPULAR SEARCH
============================================================ */

const selectSearch = async (item) => {
  searchQuery.value = item;

  await nextTick();

  searchInput.value?.focus();
};

/* ============================================================
   OPEN SEARCH RESULT
============================================================ */

const openResult = (result) => {
  searchOpen.value = false;
  searchQuery.value = "";

  updateBodyScroll();

  router.push(result.route);
};

/* ============================================================
   SUBMIT SEARCH
============================================================ */

const performSearch = () => {
  const query = searchQuery.value.trim();

  if (!query) {
    return;
  }

  searchOpen.value = false;

  updateBodyScroll();

  router.push({
    path: "/search",
    query: {
      q: query,
    },
  });
};

/* ============================================================
   DRESS CATEGORIES
============================================================ */

const dressCategories = [
  {
    label: "All Dresses",
    route: "/dresses",
  },
  {
    label: "Gowns",
    route: "/dresses",
  },
  {
    label: "Anarkali",
    route: "/dresses",
  },
  {
    label: "Party Wear",
    route: "/dresses",
  },
  {
    label: "Frocks",
    route: "/dresses",
  },
  {
    label: "Lehenga",
    route: "/dresses",
  },
];

/* ============================================================
   SAREE CATEGORIES
============================================================ */

const sareeCategories = [
  {
    label: "All Sarees",
    route: "/sarees",
  },
  {
    label: "Designer",
    route: "/sarees",
  },
  {
    label: "Silk",
    route: "/sarees",
  },
  {
    label: "Party Wear",
    route: "/sarees",
  },
  {
    label: "Bridal",
    route: "/sarees",
  },
  {
    label: "Traditional",
    route: "/sarees",
  },
];
</script>

<style scoped>
/* ============================================================
   MENU TYPOGRAPHY
============================================================ */

.menu-main-link {
  display: block;
  width: fit-content;
  color: #302525;
  font-size: 1.35rem;
  line-height: 1.4;
  font-weight: 500;
  letter-spacing: -0.01em;
  transition:
    color 0.2s ease,
    transform 0.2s ease;
}

.menu-main-link:hover {
  color: #9b4056;
  transform: translateX(5px);
}

.menu-sub-link {
  color: #74696b;
  font-size: 0.9rem;
  line-height: 1.5;
  transition:
    color 0.2s ease,
    transform 0.2s ease;
}

.menu-sub-link:hover {
  color: #9b4056;
  transform: translateX(3px);
}

/* ============================================================
   MOBILE
============================================================ */

@media (max-width: 640px) {
  .menu-main-link {
    font-size: 1.15rem;
  }
}
</style>
