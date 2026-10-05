<template>
  <!-- Mobile Bottom Navigation -->
  <nav
    class="fixed bottom-0 left-0 right-0 z-[100] border-t border-[#eadedb] bg-white/95 shadow-[0_-4px_18px_rgba(80,40,45,0.08)] backdrop-blur-md lg:hidden"
  >
    <div class="mx-auto grid h-[72px] max-w-md grid-cols-5 items-center px-2">
      <!-- HOME -->
      <RouterLink
        to="/"
        class="flex h-full flex-col items-center justify-center gap-1 transition"
        :class="isActive('/') ? 'text-[#c2385b]' : 'text-[#74696b]'"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="1.7"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3 10.5 12 3l9 7.5M5.5 9v11h13V9M9 20v-6h6v6"
          />
        </svg>

        <span class="text-[11px] font-medium">Home</span>
      </RouterLink>

      <!-- CATEGORIES -->
      <RouterLink
        to="/dresses"
        class="flex h-full flex-col items-center justify-center gap-1 transition"
        :class="isCategoryPage ? 'text-[#c2385b]' : 'text-[#74696b]'"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="1.7"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 3.5c-1.8 0-3 1.4-3 3.1 0 1 .4 1.8 1.1 2.4L7 11.5a2 2 0 0 0 1.2 3.6H10l-1.5 5.4h7L14 15.1h1.8a2 2 0 0 0 1.2-3.6l-3.1-2.5c.7-.6 1.1-1.4 1.1-2.4 0-1.7-1.2-3.1-3-3.1Z"
          />
        </svg>

        <span class="text-[11px] font-medium">Categories</span>
      </RouterLink>

      <!-- MY ORDERS -->
      <RouterLink
        to="/orders"
        class="flex h-full flex-col items-center justify-center gap-1 transition"
        :class="isActive('/orders') ? 'text-[#c2385b]' : 'text-[#74696b]'"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="1.7"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 7h12l1 13H5L6 7Z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 7a3 3 0 0 1 6 0"
          />
        </svg>

        <span class="text-[11px] font-medium">My Orders</span>
      </RouterLink>

      <!-- HELP -->
      <RouterLink
        to="/contact"
        class="flex h-full flex-col items-center justify-center gap-1 transition"
        :class="isActive('/contact') ? 'text-[#c2385b]' : 'text-[#74696b]'"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="1.7"
        >
          <circle cx="12" cy="12" r="9" />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9.5 9a2.5 2.5 0 1 1 4.1 1.9c-.9.7-1.6 1.1-1.6 2.4"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 16.5h.01"
          />
        </svg>

        <span class="text-[11px] font-medium">Help</span>
      </RouterLink>

      <!-- ACCOUNT -->
      <RouterLink
        to="/account"
        class="flex h-full flex-col items-center justify-center gap-1 transition"
        :class="isActive('/account') ? 'text-[#c2385b]' : 'text-[#74696b]'"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="1.7"
        >
          <circle cx="12" cy="8" r="3.2" />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M5.5 20a6.5 6.5 0 0 1 13 0"
          />
        </svg>

        <span class="text-[11px] font-medium">Account</span>
      </RouterLink>
    </div>
  </nav>
</template>

<script setup>
import { computed } from "vue";
import { RouterLink, useRoute } from "vue-router";

const route = useRoute();

const isActive = (path) => {
  if (path === "/") {
    return route.path === "/";
  }

  return route.path === path || route.path.startsWith(`${path}/`);
};

const isCategoryPage = computed(() => {
  const categoryPaths = [
    "/dresses",
    "/sarees",
    "/kids-wear",
    "/customised-dresses",
  ];

  return categoryPaths.some(
    (path) => route.path === path || route.path.startsWith(`${path}/`),
  );
});
</script>
