<template>
  <div class="min-h-screen bg-[#fffaf8] text-[#302525]">
    <div
      v-if="sidebarOpen"
      class="fixed inset-0 z-40 bg-[#302525]/30 lg:hidden"
      @click="sidebarOpen = false"
    ></div>

    <aside
      class="fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-[#ead9d8] bg-white transition-transform duration-300 lg:translate-x-0"
      :class="sidebarOpen ? 'translate-x-0' : '-translate-x-full'"
    >
      <div class="flex h-24 items-center border-b border-[#ead9d8] px-6">
        <div>
          <p class="font-serif text-2xl font-bold tracking-wide text-[#9b4056]">
            MAAD
          </p>

          <p class="text-[9px] font-bold tracking-[0.4em] text-[#806d6d]">
            FASHIONS
          </p>

          <div class="mt-1 flex items-center gap-2">
            <span class="h-px w-5 bg-[#b83259]"></span>

            <span
              class="text-[8px] font-semibold tracking-[0.25em] text-[#b83259]"
            >
              ADMIN
            </span>
          </div>
        </div>

        <button
          @click="sidebarOpen = false"
          class="ml-auto flex h-9 w-9 items-center justify-center rounded-full text-xl text-[#806d6d] hover:bg-[#fff0f3] lg:hidden"
        >
          ×
        </button>
      </div>

      <nav class="flex-1 overflow-y-auto px-4 py-7">
        <p
          class="mb-3 px-3 text-[10px] font-bold tracking-[0.3em] text-[#a18c90]"
        >
          OVERVIEW
        </p>

        <RouterLink
          to="/admin/dashboard"
          class="mb-2 flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-[#65575a] transition hover:bg-[#fff4f5] hover:text-[#9b4056]"
          @click="sidebarOpen = false"
        >
          <span
            class="flex h-7 w-7 items-center justify-center rounded-lg bg-[#f8e6ea] text-[#9b4056]"
          >
            ⌂
          </span>

          Dashboard
        </RouterLink>

        <p
          class="mb-3 mt-8 px-3 text-[10px] font-bold tracking-[0.3em] text-[#a18c90]"
        >
          STORE MANAGEMENT
        </p>

        <RouterLink
          to="/admin/products"
          class="mb-2 flex items-center gap-3 rounded-xl bg-[#f8e6ea] px-4 py-3 text-sm font-semibold text-[#9b4056]"
          @click="sidebarOpen = false"
        >
          <span
            class="flex h-7 w-7 items-center justify-center rounded-lg bg-[#b83259] text-sm text-white"
          >
            ◇
          </span>

          Products
        </RouterLink>

        <RouterLink
          to="/admin/orders"
          class="mb-2 flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-[#65575a] transition hover:bg-[#fff4f5] hover:text-[#9b4056]"
          @click="sidebarOpen = false"
        >
          <span
            class="flex h-7 w-7 items-center justify-center rounded-lg bg-[#f8e6ea] text-[#9b4056]"
          >
            ▣
          </span>

          Orders
        </RouterLink>

        <RouterLink
          to="/admin/customers"
          class="mb-2 flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-[#65575a] transition hover:bg-[#fff4f5] hover:text-[#9b4056]"
          @click="sidebarOpen = false"
        >
          <span
            class="flex h-7 w-7 items-center justify-center rounded-lg bg-[#f8e6ea] text-[#9b4056]"
          >
            ♙
          </span>

          Customers
        </RouterLink>

        <RouterLink
          to="/admin/custom-orders"
          class="mb-2 flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-[#65575a] transition hover:bg-[#fff4f5] hover:text-[#9b4056]"
          @click="sidebarOpen = false"
        >
          <span
            class="flex h-7 w-7 items-center justify-center rounded-lg bg-[#f8e6ea] text-[#9b4056]"
          >
            ✦
          </span>

          Custom Orders
        </RouterLink>

        <div class="my-7 border-t border-[#ead9d8]"></div>

        <p
          class="mb-3 px-3 text-[10px] font-bold tracking-[0.3em] text-[#a18c90]"
        >
          WEBSITE
        </p>

        <RouterLink
          to="/"
          class="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-[#65575a] transition hover:bg-[#fff4f5] hover:text-[#9b4056]"
          @click="sidebarOpen = false"
        >
          <span
            class="flex h-7 w-7 items-center justify-center rounded-lg bg-[#f8e6ea] text-[#9b4056]"
          >
            ↗
          </span>

          View Store
        </RouterLink>
      </nav>

      <div class="border-t border-[#ead9d8] p-4">
        <button
          @click="logout"
          class="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-[#806d6d] transition hover:bg-red-50 hover:text-red-600"
        >
          <span
            class="flex h-7 w-7 items-center justify-center rounded-lg bg-[#f8e6ea]"
          >
            ↪
          </span>

          Logout
        </button>
      </div>
    </aside>

    <div class="min-h-screen lg:pl-64">
      <header
        class="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-[#ead9d8] bg-[#fffaf8]/95 px-5 backdrop-blur-md sm:px-8"
      >
        <button
          @click="sidebarOpen = true"
          class="flex h-10 w-10 items-center justify-center rounded-xl border border-[#ead9d8] bg-white text-lg text-[#65575a] lg:hidden"
        >
          ☰
        </button>

        <div class="hidden lg:block">
          <p class="text-[10px] font-bold tracking-[0.3em] text-[#9b4056]">
            MAAD FASHIONS
          </p>

          <h1 class="mt-1 font-serif text-xl font-semibold">Products</h1>
        </div>

        <div
          class="ml-auto flex items-center gap-3 rounded-full border border-[#ead9d8] bg-white py-1.5 pl-1.5 pr-4"
        >
          <div
            class="flex h-9 w-9 items-center justify-center rounded-full bg-[#f3dce2] font-serif font-bold text-[#9b4056]"
          >
            A
          </div>

          <div class="hidden sm:block">
            <p class="text-xs font-semibold">Admin</p>

            <p class="text-[10px] text-[#9a8588]">Administrator</p>
          </div>
        </div>
      </header>

      <main class="px-5 py-8 sm:px-8 lg:px-10">
        <section
          class="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"
        >
          <div>
            <p class="text-xs font-semibold tracking-[0.25em] text-[#9b4056]">
              STORE MANAGEMENT
            </p>

            <h2 class="mt-2 font-serif text-3xl font-semibold sm:text-4xl">
              Your Collection
            </h2>

            <p class="mt-2 text-sm text-[#806d6d]">
              Add, update and manage your MAAD Fashions products.
            </p>
          </div>

          <button
            @click="openAddProduct"
            class="inline-flex items-center justify-center rounded-full bg-[#9b4056] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#84354a]"
          >
            + Add Product
          </button>
        </section>

        <section class="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div class="rounded-2xl border border-[#ead9d8] bg-white p-5">
            <p class="text-sm text-[#806d6d]">Total Products</p>

            <p class="mt-2 font-serif text-3xl font-semibold">
              {{ products.length }}
            </p>
          </div>

          <div class="rounded-2xl border border-[#ead9d8] bg-white p-5">
            <p class="text-sm text-[#806d6d]">Active Products</p>

            <p class="mt-2 font-serif text-3xl font-semibold text-green-600">
              {{ activeProducts }}
            </p>
          </div>

          <div class="rounded-2xl border border-[#ead9d8] bg-white p-5">
            <p class="text-sm text-[#806d6d]">Low Stock</p>

            <p class="mt-2 font-serif text-3xl font-semibold text-amber-600">
              {{ lowStockProducts }}
            </p>
          </div>
        </section>

        <section class="mt-8 rounded-2xl border border-[#ead9d8] bg-white p-5">
          <div class="flex flex-col gap-4 lg:flex-row">
            <div class="relative flex-1">
              <span
                class="absolute left-4 top-1/2 -translate-y-1/2 text-[#a18c90]"
              >
                ⌕
              </span>

              <input
                v-model="search"
                type="text"
                placeholder="Search products..."
                class="w-full rounded-xl border border-[#ead9d8] bg-[#fffaf8] py-3 pl-11 pr-4 text-sm outline-none transition focus:border-[#9b4056] focus:ring-2 focus:ring-[#9b4056]/10"
              />
            </div>

            <select
              v-model="selectedCategory"
              class="rounded-xl border border-[#ead9d8] bg-[#fffaf8] px-4 py-3 text-sm text-[#65575a] outline-none focus:border-[#9b4056]"
            >
              <option value="All">All Categories</option>
              <option value="Dresses">Dresses</option>
              <option value="Sarees">Sarees</option>
              <option value="Customised">Customised</option>
            </select>
            <select
              v-model="selectedStatus"
              class="rounded-xl border border-[#ead9d8] bg-[#fffaf8] px-4 py-3 text-sm text-[#65575a] outline-none focus:border-[#9b4056]"
            >
              <option value="All">All Status</option>
              <option value="Active">Active</option>
              <option value="Draft">Draft</option>
            </select>
          </div>
        </section>

        <section
          class="mt-6 overflow-hidden rounded-2xl border border-[#ead9d8] bg-white"
        >
          <div
            class="flex items-center justify-between border-b border-[#ead9d8] px-6 py-5"
          >
            <div>
              <p class="text-[10px] font-bold tracking-[0.3em] text-[#9b4056]">
                COLLECTION
              </p>

              <h3 class="mt-1 font-serif text-xl font-semibold">Products</h3>
            </div>

            <p class="text-xs text-[#9a8588]">
              {{ filteredProducts.length }} products
            </p>
          </div>

          <div class="divide-y divide-[#f0e5e3] md:hidden">
            <div
              v-for="product in filteredProducts"
              :key="product.id"
              class="p-5"
            >
              <div class="flex gap-4">
                <img
                  :src="product.image"
                  :alt="product.name"
                  class="h-24 w-20 rounded-xl object-cover"
                />

                <div class="min-w-0 flex-1">
                  <div class="flex items-start justify-between gap-2">
                    <div>
                      <h4 class="font-semibold">
                        {{ product.name }}
                      </h4>

                      <p class="mt-1 text-xs text-[#9a8588]">
                        {{ product.category }}
                      </p>
                    </div>

                    <span
                      class="rounded-full px-2.5 py-1 text-[10px] font-semibold"
                      :class="
                        product.status === 'Active'
                          ? 'bg-green-50 text-green-700'
                          : 'bg-gray-100 text-gray-600'
                      "
                    >
                      {{ product.status }}
                    </span>
                  </div>

                  <div class="mt-4 flex items-center justify-between">
                    <p class="font-semibold text-[#9b4056]">
                      ₹{{ product.price.toLocaleString("en-IN") }}
                    </p>

                    <p class="text-xs text-[#806d6d]">
                      Stock: {{ product.stock }}
                    </p>
                  </div>
                </div>
              </div>

              <div class="mt-4 flex gap-2">
                <button
                  @click="editProduct(product)"
                  class="flex-1 rounded-lg border border-[#ead9d8] py-2 text-xs font-semibold text-[#9b4056] hover:bg-[#fff4f5]"
                >
                  Edit
                </button>

                <button
                  @click="deleteProduct(product.id)"
                  class="flex-1 rounded-lg border border-red-100 py-2 text-xs font-semibold text-red-600 hover:bg-red-50"
                >
                  Delete
                </button>
              </div>
            </div>

            <div
              v-if="filteredProducts.length === 0"
              class="px-6 py-12 text-center text-sm text-[#806d6d]"
            >
              No products found.
            </div>
          </div>

          <div class="hidden overflow-x-auto md:block">
            <table class="w-full min-w-[800px]">
              <thead>
                <tr class="border-b border-[#ead9d8] bg-[#fffaf8] text-left">
                  <th
                    class="px-6 py-4 text-[10px] font-bold tracking-[0.15em] text-[#9a8588]"
                  >
                    PRODUCT
                  </th>

                  <th
                    class="px-6 py-4 text-[10px] font-bold tracking-[0.15em] text-[#9a8588]"
                  >
                    CATEGORY
                  </th>

                  <th
                    class="px-6 py-4 text-[10px] font-bold tracking-[0.15em] text-[#9a8588]"
                  >
                    PRICE
                  </th>

                  <th
                    class="px-6 py-4 text-[10px] font-bold tracking-[0.15em] text-[#9a8588]"
                  >
                    STOCK
                  </th>

                  <th
                    class="px-6 py-4 text-[10px] font-bold tracking-[0.15em] text-[#9a8588]"
                  >
                    STATUS
                  </th>

                  <th
                    class="px-6 py-4 text-right text-[10px] font-bold tracking-[0.15em] text-[#9a8588]"
                  >
                    ACTIONS
                  </th>
                </tr>
              </thead>

              <tbody class="divide-y divide-[#f0e5e3]">
                <tr
                  v-for="product in filteredProducts"
                  :key="product.id"
                  class="transition hover:bg-[#fffaf8]"
                >
                  <td class="px-6 py-4">
                    <div class="flex items-center gap-4">
                      <img
                        :src="product.image"
                        :alt="product.name"
                        class="h-16 w-14 rounded-xl object-cover"
                      />

                      <div>
                        <p class="text-sm font-semibold">
                          {{ product.name }}
                        </p>

                        <p class="mt-1 text-xs text-[#9a8588]">
                          #{{ product.id }}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td class="px-6 py-4">
                    <span
                      class="rounded-full bg-[#f8e6ea] px-3 py-1.5 text-xs font-medium text-[#9b4056]"
                    >
                      {{ product.category }}
                    </span>
                  </td>

                  <td class="px-6 py-4 text-sm font-semibold">
                    ₹{{ product.price.toLocaleString("en-IN") }}
                  </td>

                  <td class="px-6 py-4">
                    <span
                      :class="
                        product.stock <= 5 ? 'text-amber-600' : 'text-[#65575a]'
                      "
                      class="text-sm font-medium"
                    >
                      {{ product.stock }}
                    </span>
                  </td>

                  <td class="px-6 py-4">
                    <span
                      class="rounded-full px-3 py-1.5 text-xs font-semibold"
                      :class="
                        product.status === 'Active'
                          ? 'bg-green-50 text-green-700'
                          : 'bg-gray-100 text-gray-600'
                      "
                    >
                      {{ product.status }}
                    </span>
                  </td>

                  <td class="px-6 py-4">
                    <div class="flex justify-end gap-2">
                      <button
                        @click="editProduct(product)"
                        class="rounded-lg border border-[#ead9d8] px-3 py-2 text-xs font-semibold text-[#9b4056] transition hover:bg-[#fff4f5]"
                      >
                        Edit
                      </button>

                      <button
                        @click="deleteProduct(product.id)"
                        class="rounded-lg border border-red-100 px-3 py-2 text-xs font-semibold text-red-600 transition hover:bg-red-50"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>

                <tr v-if="filteredProducts.length === 0">
                  <td colspan="6" class="px-6 py-16 text-center">
                    <div
                      class="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#f8e6ea] text-xl text-[#9b4056]"
                    >
                      ◇
                    </div>

                    <p class="mt-4 font-semibold">No products found</p>

                    <p class="mt-1 text-sm text-[#806d6d]">
                      Try changing your search or filter.
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <footer
          class="mt-10 border-t border-[#ead9d8] py-6 text-xs text-[#9a8588]"
        >
          © {{ new Date().getFullYear() }} MAAD Fashions Admin
        </footer>
      </main>
    </div>

    <div
      v-if="showModal"
      class="fixed inset-0 z-[60] flex items-center justify-center bg-[#302525]/40 px-4 py-6"
    >
      <div
        class="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl bg-white shadow-2xl"
      >
        <div
          class="flex items-center justify-between border-b border-[#ead9d8] px-6 py-5"
        >
          <div>
            <p class="text-[10px] font-bold tracking-[0.3em] text-[#9b4056]">
              {{ editingProduct ? "EDIT PRODUCT" : "NEW PRODUCT" }}
            </p>

            <h3 class="mt-1 font-serif text-2xl font-semibold">
              {{ editingProduct ? "Update Product" : "Add Product" }}
            </h3>
          </div>

          <button
            @click="closeModal"
            class="flex h-9 w-9 items-center justify-center rounded-full text-xl text-[#806d6d] hover:bg-[#fff0f3]"
          >
            ×
          </button>
        </div>

        <form @submit.prevent="saveProduct" class="space-y-5 p-6">
          <div>
            <label
              class="mb-2 block text-xs font-bold tracking-[0.12em] text-[#65575a]"
            >
              PRODUCT NAME
            </label>

            <input
              v-model="form.name"
              type="text"
              placeholder="Example: Rose Silk Dress"
              required
              class="w-full rounded-xl border border-[#ead9d8] bg-[#fffaf8] px-4 py-3 text-sm outline-none focus:border-[#9b4056] focus:ring-2 focus:ring-[#9b4056]/10"
            />
          </div>

          <div>
            <label
              class="mb-2 block text-xs font-bold tracking-[0.12em] text-[#65575a]"
            >
              CATEGORY
            </label>

            <select
              v-model="form.category"
              required
              class="w-full rounded-xl border border-[#ead9d8] bg-[#fffaf8] px-4 py-3 text-sm outline-none focus:border-[#9b4056]"
            >
              <option value="Dresses">Dresses</option>
              <option value="Sarees">Sarees</option>
              <option value="Customised">Customised</option>
            </select>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div>
              <label
                class="mb-2 block text-xs font-bold tracking-[0.12em] text-[#65575a]"
              >
                PRICE
              </label>

              <input
                v-model.number="form.price"
                type="number"
                min="0"
                placeholder="2499"
                required
                class="w-full rounded-xl border border-[#ead9d8] bg-[#fffaf8] px-4 py-3 text-sm outline-none focus:border-[#9b4056]"
              />
            </div>

            <div>
              <label
                class="mb-2 block text-xs font-bold tracking-[0.12em] text-[#65575a]"
              >
                STOCK
              </label>

              <input
                v-model.number="form.stock"
                type="number"
                min="0"
                placeholder="10"
                required
                class="w-full rounded-xl border border-[#ead9d8] bg-[#fffaf8] px-4 py-3 text-sm outline-none focus:border-[#9b4056]"
              />
            </div>
          </div>

          <div>
            <label
              class="mb-2 block text-xs font-bold tracking-[0.12em] text-[#65575a]"
            >
              IMAGE URL
            </label>

            <input
              v-model="form.image"
              type="url"
              placeholder="https://example.com/dress.jpg"
              required
              class="w-full rounded-xl border border-[#ead9d8] bg-[#fffaf8] px-4 py-3 text-sm outline-none focus:border-[#9b4056]"
            />

            <div
              v-if="form.image"
              class="mt-3 overflow-hidden rounded-xl border border-[#ead9d8]"
            >
              <img
                :src="form.image"
                alt="Product preview"
                class="h-40 w-full object-cover"
              />
            </div>
          </div>

          <div>
            <label
              class="mb-2 block text-xs font-bold tracking-[0.12em] text-[#65575a]"
            >
              STATUS
            </label>

            <select
              v-model="form.status"
              class="w-full rounded-xl border border-[#ead9d8] bg-[#fffaf8] px-4 py-3 text-sm outline-none focus:border-[#9b4056]"
            >
              <option value="Active">Active</option>
              <option value="Draft">Draft</option>
            </select>
          </div>

          <div class="flex gap-3 pt-2">
            <button
              type="button"
              @click="closeModal"
              class="flex-1 rounded-full border border-[#ead9d8] px-5 py-3 text-sm font-semibold text-[#65575a] hover:bg-[#fffaf8]"
            >
              Cancel
            </button>

            <button
              type="submit"
              class="flex-1 rounded-full bg-[#9b4056] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#84354a]"
            >
              {{ editingProduct ? "Update Product" : "Add Product" }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { RouterLink, useRouter } from "vue-router";

const router = useRouter();

const sidebarOpen = ref(false);

const search = ref("");
const selectedCategory = ref("All");
const selectedStatus = ref("All");

const showModal = ref(false);
const editingProduct = ref(null);

const products = ref([
  {
    id: 1001,
    name: "Rose Evening Dress",
    category: "Dresses",
    price: 2499,
    stock: 12,
    status: "Active",
    image:
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=500&q=80",
  },

  {
    id: 1002,
    name: "Elegant Silk Saree",
    category: "Sarees",
    price: 3999,
    stock: 8,
    status: "Active",
    image:
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=500&q=80",
  },

  {
    id: 1003,
    name: "Blush Party Gown",
    category: "Dresses",
    price: 4599,
    stock: 4,
    status: "Active",
    image:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=500&q=80",
  },

  {
    id: 1004,
    name: "Classic Floral Dress",
    category: "Dresses",
    price: 2199,
    stock: 15,
    status: "Active",
    image:
      "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?auto=format&fit=crop&w=500&q=80",
  },

  {
    id: 1005,
    name: "Custom Bridal Gown",
    category: "Customised",
    price: 6999,
    stock: 2,
    status: "Draft",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=500&q=80",
  },
]);

const form = ref({
  name: "",
  category: "Dresses",
  price: "",
  stock: "",
  image: "",
  status: "Active",
});

const filteredProducts = computed(() => {
  return products.value.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.value.toLowerCase());

    const matchesCategory =
      selectedCategory.value === "All" ||
      product.category === selectedCategory.value;

    const matchesStatus =
      selectedStatus.value === "All" || product.status === selectedStatus.value;

    return matchesSearch && matchesCategory && matchesStatus;
  });
});

const activeProducts = computed(() => {
  return products.value.filter((product) => product.status === "Active").length;
});

const lowStockProducts = computed(() => {
  return products.value.filter((product) => product.stock <= 5).length;
});

function openAddProduct() {
  editingProduct.value = null;

  form.value = {
    name: "",
    category: "Dresses",
    price: "",
    stock: "",
    image: "",
    status: "Active",
  };

  showModal.value = true;
}

function editProduct(product) {
  editingProduct.value = product;

  form.value = {
    name: product.name,
    category: product.category,
    price: product.price,
    stock: product.stock,
    image: product.image,
    status: product.status,
  };

  showModal.value = true;
}

function saveProduct() {
  if (editingProduct.value) {
    const index = products.value.findIndex(
      (product) => product.id === editingProduct.value.id,
    );

    if (index !== -1) {
      products.value[index] = {
        ...products.value[index],
        name: form.value.name,
        category: form.value.category,
        price: Number(form.value.price),
        stock: Number(form.value.stock),
        image: form.value.image,
        status: form.value.status,
      };
    }
  } else {
    products.value.unshift({
      id: Date.now(),
      name: form.value.name,
      category: form.value.category,
      price: Number(form.value.price),
      stock: Number(form.value.stock),
      image: form.value.image,
      status: form.value.status,
    });
  }

  closeModal();
}

function deleteProduct(id) {
  const product = products.value.find((item) => item.id === id);

  if (!product) return;

  const confirmed = window.confirm(`Delete "${product.name}"?`);

  if (!confirmed) return;

  products.value = products.value.filter((item) => item.id !== id);
}

function closeModal() {
  showModal.value = false;
  editingProduct.value = null;
}

function logout() {
  localStorage.removeItem("adminLoggedIn");

  router.push("/admin");
}
</script>
