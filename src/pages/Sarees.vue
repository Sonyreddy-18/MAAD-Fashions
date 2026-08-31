<template>
  <div>
    <main class="min-h-screen bg-[#fffaf8] px-4 pt-26 pb-8 sm:px-6 lg:px-8">
      <section class="mx-auto max-w-7xl text-center">
        <p
          class="text-xs font-semibold tracking-[0.3em] text-[#9b4056] sm:text-sm"
        >
          MAAD FASHIONS
        </p>

        <h1
          class="mt-2 text-4xl font-bold leading-tight text-[#302525] sm:text-5xl"
        >
          Sarees Collection
        </h1>

        <p class="mx-auto mt-2 max-w-2xl text-sm text-gray-600 sm:text-base">
          Discover our elegant collection of traditional and designer sarees.
        </p>
      </section>

      <section
        class="mx-auto mt-6 grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        <div
          v-for="saree in sarees"
          :key="saree.id"
          class="overflow-hidden rounded-2xl border border-[#eadedb] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          <div
            class="flex h-52 items-center justify-center bg-[#f3dfdf] sm:h-56"
          >
            <span
              class="rounded-full bg-white px-4 py-2 text-sm font-medium text-[#9b4056] shadow-sm"
            >
              {{ saree.category }}
            </span>
          </div>

          <div class="p-4 sm:p-5">
            <h2 class="text-lg font-semibold text-[#302525] sm:text-xl">
              {{ saree.name }}
            </h2>

            <p class="mt-1 text-sm text-gray-500">
              {{ saree.category }}
            </p>

            <div class="mt-4 flex items-center justify-between gap-3">
              <strong class="text-lg font-bold text-[#913c52]">
                ₹{{ saree.price.toLocaleString("en-IN") }}
              </strong>

              <button
                type="button"
                class="rounded-full bg-[#9b4056] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#84354a]"
                @click="addToCart(saree)"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>

      <div class="mx-auto mt-7 max-w-7xl text-center">
        <RouterLink
          to="/"
          class="text-sm font-medium text-[#9b4056] transition hover:text-[#84354a]"
        >
          ← Back to Home
        </RouterLink>
      </div>
    </main>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import Navbar from "../components/navbar.vue";
import { useCart } from "../context/CartContext.js";

const { addToCart } = useCart();

const sarees = [
  {
    id: 101,
    name: "Elegant Silk Saree",
    price: 2999,
    category: "Silk Saree",
  },
  {
    id: 102,
    name: "Traditional Banarasi Saree",
    price: 3499,
    category: "Banarasi",
  },
  {
    id: 103,
    name: "Designer Party Saree",
    price: 2799,
    category: "Party Wear",
  },
  {
    id: 104,
    name: "Classic Cotton Saree",
    price: 1899,
    category: "Cotton Saree",
  },
  {
    id: 105,
    name: "Premium Wedding Saree",
    price: 4299,
    category: "Wedding Wear",
  },
  {
    id: 106,
    name: "Modern Designer Saree",
    price: 3199,
    category: "Designer Wear",
  },
];
</script>
