<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

import Navbar from "./components/Navbar.vue";
import MobileBottomNav from "./components/MobileBottomNav.vue";

const route = useRoute();

// Hide customer navigation on all admin pages
const isAdminPage = computed(() => {
  return route.path.startsWith("/admin");
});
</script>

<template>
  <div class="min-h-screen">
    <!-- ================= CUSTOMER NAVBAR ================= -->
    <Navbar v-if="!isAdminPage" />

    <!-- ================= PAGE CONTENT ================= -->
    <RouterView />

    <!-- ================= MOBILE BOTTOM NAV ================= -->
    <MobileBottomNav v-if="!isAdminPage" />
  </div>
</template>
