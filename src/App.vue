<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import Navbar from "./components/Navbar.vue";

const route = useRoute();

// Hide customer navbar on all admin pages
const isAdminPage = computed(() => {
  return route.path.startsWith("/admin");
});
</script>

<template>
  <div class="min-h-screen">
    <!-- Customer Navbar -->
    <Navbar v-if="!isAdminPage" />

    <!-- Page Content -->
    <RouterView />
  </div>
</template>
