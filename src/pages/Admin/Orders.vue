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
      <!-- BRAND -->
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
          class="mb-2 flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-[#65575a] transition hover:bg-[#fff4f5] hover:text-[#9b4056]"
          @click="sidebarOpen = false"
        >
          <span
            class="flex h-7 w-7 items-center justify-center rounded-lg bg-[#f8e6ea] text-[#9b4056]"
          >
            ◇
          </span>

          Products
        </RouterLink>

        <RouterLink
          to="/admin/orders"
          class="mb-2 flex items-center gap-3 rounded-xl bg-[#f8e6ea] px-4 py-3 text-sm font-semibold text-[#9b4056]"
          @click="sidebarOpen = false"
        >
          <span
            class="flex h-7 w-7 items-center justify-center rounded-lg bg-[#b83259] text-white"
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

          <h1 class="mt-1 font-serif text-xl font-semibold">Orders</h1>
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
        <!-- HEADER -->
        <section>
          <p class="text-xs font-semibold tracking-[0.25em] text-[#9b4056]">
            STORE MANAGEMENT
          </p>

          <h2 class="mt-2 font-serif text-3xl font-semibold sm:text-4xl">
            Customer Orders
          </h2>

          <p class="mt-2 text-sm text-[#806d6d]">
            View and manage orders placed through MAAD Fashions.
          </p>
        </section>

        <section class="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          <!-- TOTAL -->
          <div class="rounded-2xl border border-[#ead9d8] bg-white p-5">
            <div class="flex items-center justify-between">
              <p class="text-sm text-[#806d6d]">Total Orders</p>

              <span
                class="flex h-9 w-9 items-center justify-center rounded-xl bg-[#f8e6ea] text-[#9b4056]"
              >
                ▣
              </span>
            </div>

            <p class="mt-4 font-serif text-3xl font-semibold">
              {{ orders.length }}
            </p>
          </div>

          <div class="rounded-2xl border border-[#ead9d8] bg-white p-5">
            <div class="flex items-center justify-between">
              <p class="text-sm text-[#806d6d]">Pending</p>

              <span
                class="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-50 text-amber-600"
              >
                ◷
              </span>
            </div>

            <p class="mt-4 font-serif text-3xl font-semibold text-amber-600">
              {{ pendingOrders }}
            </p>
          </div>

          <div class="rounded-2xl border border-[#ead9d8] bg-white p-5">
            <div class="flex items-center justify-between">
              <p class="text-sm text-[#806d6d]">Processing</p>

              <span
                class="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600"
              >
                ↻
              </span>
            </div>

            <p class="mt-4 font-serif text-3xl font-semibold text-blue-600">
              {{ processingOrders }}
            </p>
          </div>

          <div class="rounded-2xl border border-[#ead9d8] bg-white p-5">
            <div class="flex items-center justify-between">
              <p class="text-sm text-[#806d6d]">Completed</p>

              <span
                class="flex h-9 w-9 items-center justify-center rounded-xl bg-green-50 text-green-600"
              >
                ✓
              </span>
            </div>

            <p class="mt-4 font-serif text-3xl font-semibold text-green-600">
              {{ completedOrders }}
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
                placeholder="Search order ID or customer..."
                class="w-full rounded-xl border border-[#ead9d8] bg-[#fffaf8] py-3 pl-11 pr-4 text-sm outline-none transition focus:border-[#9b4056] focus:ring-2 focus:ring-[#9b4056]/10"
              />
            </div>

            <select
              v-model="selectedStatus"
              class="rounded-xl border border-[#ead9d8] bg-[#fffaf8] px-4 py-3 text-sm text-[#65575a] outline-none focus:border-[#9b4056]"
            >
              <option value="All">All Order Status</option>
              <option value="Pending">Pending</option>
              <option value="Processing">Processing</option>
              <option value="Shipped">Shipped</option>
              <option value="Delivered">Delivered</option>
              <option value="Cancelled">Cancelled</option>
            </select>

            <select
              v-model="selectedPayment"
              class="rounded-xl border border-[#ead9d8] bg-[#fffaf8] px-4 py-3 text-sm text-[#65575a] outline-none focus:border-[#9b4056]"
            >
              <option value="All">All Payments</option>
              <option value="Paid">Paid</option>
              <option value="Pending">Pending</option>
              <option value="Failed">Failed</option>
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
                RECENT ORDERS
              </p>

              <h3 class="mt-1 font-serif text-xl font-semibold">Orders</h3>
            </div>

            <p class="text-xs text-[#9a8588]">
              {{ filteredOrders.length }} orders
            </p>
          </div>

          <div class="divide-y divide-[#f0e5e3] md:hidden">
            <div v-for="order in filteredOrders" :key="order.id" class="p-5">
              <div class="flex items-start justify-between">
                <div>
                  <p class="text-sm font-bold text-[#9b4056]">
                    {{ order.id }}
                  </p>

                  <p class="mt-1 text-sm font-semibold">
                    {{ order.customer }}
                  </p>

                  <p class="mt-1 text-xs text-[#9a8588]">
                    {{ order.date }}
                  </p>
                </div>

                <span
                  class="rounded-full px-3 py-1.5 text-[10px] font-semibold"
                  :class="orderStatusClass(order.status)"
                >
                  {{ order.status }}
                </span>
              </div>

              <div
                class="mt-5 grid grid-cols-2 gap-4 rounded-xl bg-[#fffaf8] p-4"
              >
                <div>
                  <p
                    class="text-[10px] uppercase tracking-wider text-[#9a8588]"
                  >
                    Amount
                  </p>

                  <p class="mt-1 font-semibold">
                    ₹{{ order.amount.toLocaleString("en-IN") }}
                  </p>
                </div>

                <div>
                  <p
                    class="text-[10px] uppercase tracking-wider text-[#9a8588]"
                  >
                    Payment
                  </p>

                  <p
                    class="mt-1 text-sm font-semibold"
                    :class="paymentClass(order.payment)"
                  >
                    {{ order.payment }}
                  </p>
                </div>
              </div>

              <div class="mt-4 flex gap-2">
                <button
                  @click="viewOrder(order)"
                  class="flex-1 rounded-lg border border-[#ead9d8] py-2.5 text-xs font-semibold text-[#9b4056] hover:bg-[#fff4f5]"
                >
                  View Order
                </button>

                <select
                  v-model="order.status"
                  class="flex-1 rounded-lg border border-[#ead9d8] bg-white px-2 py-2 text-xs font-semibold text-[#65575a] outline-none"
                >
                  <option>Pending</option>
                  <option>Processing</option>
                  <option>Shipped</option>
                  <option>Delivered</option>
                  <option>Cancelled</option>
                </select>
              </div>
            </div>
          </div>

          <div class="hidden overflow-x-auto md:block">
            <table class="w-full min-w-[900px]">
              <thead>
                <tr class="border-b border-[#ead9d8] bg-[#fffaf8] text-left">
                  <th
                    class="px-6 py-4 text-[10px] font-bold tracking-[0.15em] text-[#9a8588]"
                  >
                    ORDER
                  </th>

                  <th
                    class="px-6 py-4 text-[10px] font-bold tracking-[0.15em] text-[#9a8588]"
                  >
                    CUSTOMER
                  </th>

                  <th
                    class="px-6 py-4 text-[10px] font-bold tracking-[0.15em] text-[#9a8588]"
                  >
                    DATE
                  </th>

                  <th
                    class="px-6 py-4 text-[10px] font-bold tracking-[0.15em] text-[#9a8588]"
                  >
                    AMOUNT
                  </th>

                  <th
                    class="px-6 py-4 text-[10px] font-bold tracking-[0.15em] text-[#9a8588]"
                  >
                    PAYMENT
                  </th>

                  <th
                    class="px-6 py-4 text-[10px] font-bold tracking-[0.15em] text-[#9a8588]"
                  >
                    STATUS
                  </th>

                  <th
                    class="px-6 py-4 text-right text-[10px] font-bold tracking-[0.15em] text-[#9a8588]"
                  >
                    ACTION
                  </th>
                </tr>
              </thead>

              <tbody class="divide-y divide-[#f0e5e3]">
                <tr
                  v-for="order in filteredOrders"
                  :key="order.id"
                  class="transition hover:bg-[#fffaf8]"
                >
                  <td class="px-6 py-5">
                    <p class="text-sm font-bold text-[#9b4056]">
                      {{ order.id }}
                    </p>

                    <p class="mt-1 text-xs text-[#9a8588]">
                      {{ order.items }} item{{ order.items > 1 ? "s" : "" }}
                    </p>
                  </td>

                  <td class="px-6 py-5">
                    <p class="text-sm font-semibold">
                      {{ order.customer }}
                    </p>

                    <p class="mt-1 text-xs text-[#9a8588]">
                      {{ order.email }}
                    </p>
                  </td>

                  <td class="px-6 py-5 text-sm text-[#65575a]">
                    {{ order.date }}
                  </td>

                  <td class="px-6 py-5">
                    <p class="text-sm font-semibold">
                      ₹{{ order.amount.toLocaleString("en-IN") }}
                    </p>
                  </td>

                  <td class="px-6 py-5">
                    <span
                      class="rounded-full px-3 py-1.5 text-xs font-semibold"
                      :class="paymentBadgeClass(order.payment)"
                    >
                      {{ order.payment }}
                    </span>
                  </td>

                  <td class="px-6 py-5">
                    <select
                      v-model="order.status"
                      class="rounded-lg border border-[#ead9d8] bg-white px-3 py-2 text-xs font-semibold outline-none focus:border-[#9b4056]"
                    >
                      <option>Pending</option>
                      <option>Processing</option>
                      <option>Shipped</option>
                      <option>Delivered</option>
                      <option>Cancelled</option>
                    </select>
                  </td>

                  <td class="px-6 py-5">
                    <div class="flex justify-end">
                      <button
                        @click="viewOrder(order)"
                        class="rounded-lg border border-[#ead9d8] px-4 py-2 text-xs font-semibold text-[#9b4056] transition hover:bg-[#fff4f5]"
                      >
                        View
                      </button>
                    </div>
                  </td>
                </tr>

                <tr v-if="filteredOrders.length === 0">
                  <td colspan="7" class="px-6 py-16 text-center">
                    <div
                      class="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#f8e6ea] text-xl text-[#9b4056]"
                    >
                      ▣
                    </div>

                    <p class="mt-4 font-semibold">No orders found</p>

                    <p class="mt-1 text-sm text-[#806d6d]">
                      Try changing your search or filters.
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
      v-if="selectedOrder"
      class="fixed inset-0 z-[60] flex items-center justify-center bg-[#302525]/40 px-4 py-6"
      @click.self="selectedOrder = null"
    >
      <div
        class="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white shadow-2xl"
      >
        <div
          class="flex items-center justify-between border-b border-[#ead9d8] px-6 py-5"
        >
          <div>
            <p class="text-[10px] font-bold tracking-[0.3em] text-[#9b4056]">
              ORDER DETAILS
            </p>

            <h3 class="mt-1 font-serif text-2xl font-semibold">
              {{ selectedOrder.id }}
            </h3>
          </div>

          <button
            @click="selectedOrder = null"
            class="flex h-9 w-9 items-center justify-center rounded-full text-xl text-[#806d6d] hover:bg-[#fff0f3]"
          >
            ×
          </button>
        </div>

        <div class="space-y-6 p-6">
          <div class="rounded-2xl bg-[#fffaf8] p-5">
            <p class="text-[10px] font-bold tracking-[0.2em] text-[#9b4056]">
              CUSTOMER
            </p>

            <div class="mt-4 grid gap-4 sm:grid-cols-2">
              <div>
                <p class="text-xs text-[#9a8588]">Name</p>

                <p class="mt-1 text-sm font-semibold">
                  {{ selectedOrder.customer }}
                </p>
              </div>

              <div>
                <p class="text-xs text-[#9a8588]">Email</p>

                <p class="mt-1 text-sm font-semibold">
                  {{ selectedOrder.email }}
                </p>
              </div>

              <div>
                <p class="text-xs text-[#9a8588]">Phone</p>

                <p class="mt-1 text-sm font-semibold">
                  {{ selectedOrder.phone }}
                </p>
              </div>

              <div>
                <p class="text-xs text-[#9a8588]">Order Date</p>

                <p class="mt-1 text-sm font-semibold">
                  {{ selectedOrder.date }}
                </p>
              </div>
            </div>
          </div>

          <div>
            <p class="text-[10px] font-bold tracking-[0.2em] text-[#9b4056]">
              ORDER ITEMS
            </p>

            <div
              class="mt-4 divide-y divide-[#ead9d8] rounded-2xl border border-[#ead9d8]"
            >
              <div
                v-for="item in selectedOrder.products"
                :key="item.name"
                class="flex items-center justify-between p-4"
              >
                <div>
                  <p class="text-sm font-semibold">
                    {{ item.name }}
                  </p>

                  <p class="mt-1 text-xs text-[#9a8588]">
                    Quantity: {{ item.quantity }}
                  </p>
                </div>

                <p class="text-sm font-semibold">
                  ₹{{ item.price.toLocaleString("en-IN") }}
                </p>
              </div>
            </div>
          </div>

          <div class="rounded-2xl border border-[#ead9d8] p-5">
            <p class="text-[10px] font-bold tracking-[0.2em] text-[#9b4056]">
              DELIVERY ADDRESS
            </p>

            <p class="mt-3 text-sm leading-6 text-[#65575a]">
              {{ selectedOrder.address }}
            </p>
          </div>

          <div class="rounded-2xl bg-[#302525] p-5 text-white">
            <div class="flex justify-between text-sm text-white/70">
              <span> Subtotal </span>

              <span> ₹{{ selectedOrder.amount.toLocaleString("en-IN") }} </span>
            </div>

            <div class="my-4 border-t border-white/10"></div>

            <div class="flex justify-between">
              <span class="font-semibold"> Total </span>

              <span class="font-serif text-2xl font-semibold text-[#f3b8c5]">
                ₹{{ selectedOrder.amount.toLocaleString("en-IN") }}
              </span>
            </div>
          </div>

          <div>
            <label
              class="mb-2 block text-xs font-bold tracking-[0.15em] text-[#65575a]"
            >
              UPDATE ORDER STATUS
            </label>

            <select
              v-model="selectedOrder.status"
              class="w-full rounded-xl border border-[#ead9d8] bg-[#fffaf8] px-4 py-3 text-sm font-semibold outline-none focus:border-[#9b4056]"
            >
              <option>Pending</option>
              <option>Processing</option>
              <option>Shipped</option>
              <option>Delivered</option>
              <option>Cancelled</option>
            </select>
          </div>
        </div>
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
const selectedStatus = ref("All");
const selectedPayment = ref("All");

const selectedOrder = ref(null);

const orders = ref([
  {
    id: "MAAD-10021",
    customer: "Ananya Reddy",
    email: "ananya@example.com",
    phone: "+91 98765 12345",
    date: "25 Aug 2026",
    amount: 4498,
    items: 2,
    payment: "Paid",
    status: "Processing",
    address: "12, Lake View Road, Hyderabad, Telangana - 500001",
    products: [
      {
        name: "Rose Evening Dress",
        quantity: 1,
        price: 2499,
      },
      {
        name: "Classic Floral Dress",
        quantity: 1,
        price: 1999,
      },
    ],
  },

  {
    id: "MAAD-10020",
    customer: "Priya Sharma",
    email: "priya@example.com",
    phone: "+91 91234 56789",
    date: "24 Aug 2026",
    amount: 3999,
    items: 1,
    payment: "Paid",
    status: "Shipped",
    address: "24 MG Road, Bengaluru, Karnataka - 560001",
    products: [
      {
        name: "Elegant Silk Saree",
        quantity: 1,
        price: 3999,
      },
    ],
  },

  {
    id: "MAAD-10019",
    customer: "Meera Kapoor",
    email: "meera@example.com",
    phone: "+91 99887 66554",
    date: "23 Aug 2026",
    amount: 4599,
    items: 1,
    payment: "Paid",
    status: "Pending",
    address: "45 Park Street, Kolkata, West Bengal - 700016",
    products: [
      {
        name: "Blush Party Gown",
        quantity: 1,
        price: 4599,
      },
    ],
  },

  {
    id: "MAAD-10018",
    customer: "Sana Khan",
    email: "sana@example.com",
    phone: "+91 90123 45678",
    date: "22 Aug 2026",
    amount: 6999,
    items: 1,
    payment: "Paid",
    status: "Delivered",
    address: "8 Fashion Avenue, Mumbai, Maharashtra - 400001",
    products: [
      {
        name: "Custom Bridal Gown",
        quantity: 1,
        price: 6999,
      },
    ],
  },

  {
    id: "MAAD-10017",
    customer: "Kavya Rao",
    email: "kavya@example.com",
    phone: "+91 93456 78901",
    date: "21 Aug 2026",
    amount: 2499,
    items: 1,
    payment: "Pending",
    status: "Pending",
    address: "18 Jubilee Hills, Hyderabad, Telangana - 500033",
    products: [
      {
        name: "Rose Evening Dress",
        quantity: 1,
        price: 2499,
      },
    ],
  },

  {
    id: "MAAD-10016",
    customer: "Nisha Verma",
    email: "nisha@example.com",
    phone: "+91 98761 23450",
    date: "20 Aug 2026",
    amount: 2199,
    items: 1,
    payment: "Failed",
    status: "Cancelled",
    address: "21 Civil Lines, Delhi - 110054",
    products: [
      {
        name: "Classic Floral Dress",
        quantity: 1,
        price: 2199,
      },
    ],
  },
]);

const filteredOrders = computed(() => {
  return orders.value.filter((order) => {
    const searchText = search.value.toLowerCase();

    const matchesSearch =
      order.id.toLowerCase().includes(searchText) ||
      order.customer.toLowerCase().includes(searchText) ||
      order.email.toLowerCase().includes(searchText);

    const matchesStatus =
      selectedStatus.value === "All" || order.status === selectedStatus.value;

    const matchesPayment =
      selectedPayment.value === "All" ||
      order.payment === selectedPayment.value;

    return matchesSearch && matchesStatus && matchesPayment;
  });
});

const pendingOrders = computed(() => {
  return orders.value.filter((order) => order.status === "Pending").length;
});

const processingOrders = computed(() => {
  return orders.value.filter((order) => order.status === "Processing").length;
});

const completedOrders = computed(() => {
  return orders.value.filter((order) => order.status === "Delivered").length;
});

function viewOrder(order) {
  selectedOrder.value = order;
}

function orderStatusClass(status) {
  const classes = {
    Pending: "bg-amber-50 text-amber-700",
    Processing: "bg-blue-50 text-blue-700",
    Shipped: "bg-purple-50 text-purple-700",
    Delivered: "bg-green-50 text-green-700",
    Cancelled: "bg-red-50 text-red-700",
  };

  return classes[status] || "bg-gray-100 text-gray-600";
}

function paymentBadgeClass(payment) {
  const classes = {
    Paid: "bg-green-50 text-green-700",
    Pending: "bg-amber-50 text-amber-700",
    Failed: "bg-red-50 text-red-700",
  };

  return classes[payment] || "bg-gray-100 text-gray-600";
}

function paymentClass(payment) {
  const classes = {
    Paid: "text-green-600",
    Pending: "text-amber-600",
    Failed: "text-red-600",
  };

  return classes[payment] || "text-[#65575a]";
}

function logout() {
  localStorage.removeItem("adminLoggedIn");

  router.push("/admin");
}
</script>
