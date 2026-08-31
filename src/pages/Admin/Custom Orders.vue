<template>
  <div class="min-h-screen bg-[#fffaf8] text-[#302525]">
    <aside
      class="fixed left-0 top-0 z-40 hidden h-screen w-64 border-r border-[#eadedb] bg-white lg:block"
    >
      <div class="border-b border-[#eadedb] px-6 py-7">
        <p
          class="text-center text-xs font-bold tracking-[0.35em] text-[#9b4056]"
        >
          MAAD
        </p>

        <h1 class="mt-1 text-center font-serif text-2xl font-bold">FASHIONS</h1>

        <p
          class="mt-2 text-center text-[10px] tracking-[0.25em] text-[#9a8588]"
        >
          ADMIN PANEL
        </p>
      </div>

      <nav class="space-y-2 px-4 py-6">
        <RouterLink
          to="/admin/dashboard"
          class="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-[#75686a] transition hover:bg-[#fff0f3] hover:text-[#9b4056]"
        >
          <span class="text-lg">⌂</span>
          Dashboard
        </RouterLink>

        <RouterLink
          to="/admin/customers"
          class="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-[#75686a] transition hover:bg-[#fff0f3] hover:text-[#9b4056]"
        >
          <span class="text-lg">♙</span>
          Customers
        </RouterLink>

        <RouterLink
          to="/admin/orders"
          class="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-[#75686a] transition hover:bg-[#fff0f3] hover:text-[#9b4056]"
        >
          <span class="text-lg">▣</span>
          Orders
        </RouterLink>

        <RouterLink
          to="/admin/custom-orders"
          class="flex items-center gap-3 rounded-xl bg-[#9b4056] px-4 py-3 text-sm font-semibold text-white shadow-sm"
        >
          <span class="text-lg">✦</span>
          Custom Orders
        </RouterLink>

        <RouterLink
          to="/admin/products"
          class="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-[#75686a] transition hover:bg-[#fff0f3] hover:text-[#9b4056]"
        >
          <span class="text-lg">◈</span>
          Products
        </RouterLink>

        <RouterLink
          to="/"
          class="mt-8 flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-[#75686a] transition hover:bg-[#fff0f3] hover:text-[#9b4056]"
        >
          <span class="text-lg">↗</span>
          View Store
        </RouterLink>
      </nav>

      <div class="absolute bottom-6 left-4 right-4">
        <button
          @click="logout"
          class="flex w-full items-center gap-3 rounded-xl border border-[#eadedb] px-4 py-3 text-sm font-medium text-[#75686a] transition hover:border-[#9b4056] hover:text-[#9b4056]"
        >
          <span class="text-lg">↪</span>
          Logout
        </button>
      </div>
    </aside>

    <main class="min-h-screen lg:ml-64">
      <header
        class="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-[#eadedb] bg-[#fffaf8]/95 px-5 backdrop-blur-md sm:px-8"
      >
        <div>
          <p class="text-xs font-semibold tracking-[0.25em] text-[#9b4056]">
            MAAD FASHIONS
          </p>

          <h2 class="mt-1 text-xl font-bold">Custom Orders</h2>
        </div>

        <div
          class="flex h-10 w-10 items-center justify-center rounded-full bg-[#f3dfdf] font-semibold text-[#9b4056]"
        >
          A
        </div>
      </header>

      <div class="p-5 sm:p-8">
        <section
          class="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"
        >
          <div>
            <p
              class="text-xs font-bold uppercase tracking-[0.25em] text-[#9b4056]"
            >
              Personalised Fashion
            </p>

            <h1 class="mt-2 font-serif text-4xl font-bold text-[#302525]">
              Custom Orders
            </h1>

            <p class="mt-2 max-w-xl text-sm leading-6 text-[#806d6d]">
              Manage personalised outfit requests, measurements, preferences and
              customer requirements.
            </p>
          </div>

          <button
            @click="showAddForm = true"
            class="rounded-full bg-[#9b4056] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#84354a]"
          >
            + New Custom Order
          </button>
        </section>

        <section class="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <div
            class="rounded-2xl border border-[#eadedb] bg-white p-5 shadow-sm"
          >
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm text-[#806d6d]">New Requests</p>

                <p class="mt-2 text-3xl font-bold">
                  {{ newCount }}
                </p>
              </div>

              <div
                class="flex h-12 w-12 items-center justify-center rounded-full bg-[#f3dfdf] text-xl text-[#9b4056]"
              >
                ✦
              </div>
            </div>
          </div>

          <div
            class="rounded-2xl border border-[#eadedb] bg-white p-5 shadow-sm"
          >
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm text-[#806d6d]">In Progress</p>

                <p class="mt-2 text-3xl font-bold">
                  {{ progressCount }}
                </p>
              </div>

              <div
                class="flex h-12 w-12 items-center justify-center rounded-full bg-[#eee7f8] text-xl text-[#76539b]"
              >
                ◷
              </div>
            </div>
          </div>

          <div
            class="rounded-2xl border border-[#eadedb] bg-white p-5 shadow-sm"
          >
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm text-[#806d6d]">Approved</p>

                <p class="mt-2 text-3xl font-bold">
                  {{ approvedCount }}
                </p>
              </div>

              <div
                class="flex h-12 w-12 items-center justify-center rounded-full bg-[#e8eefb] text-xl text-[#526da8]"
              >
                ✓
              </div>
            </div>
          </div>

          <div
            class="rounded-2xl border border-[#eadedb] bg-white p-5 shadow-sm"
          >
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm text-[#806d6d]">Completed</p>

                <p class="mt-2 text-3xl font-bold">
                  {{ completedCount }}
                </p>
              </div>

              <div
                class="flex h-12 w-12 items-center justify-center rounded-full bg-[#e4f3e9] text-xl text-[#398152]"
              >
                ♡
              </div>
            </div>
          </div>
        </section>

        <section
          class="mt-8 rounded-2xl border border-[#eadedb] bg-white p-4 shadow-sm"
        >
          <div class="flex flex-col gap-4 lg:flex-row">
            <!-- SEARCH -->
            <div class="relative flex-1">
              <span
                class="absolute left-4 top-1/2 -translate-y-1/2 text-[#9a8588]"
              >
                ⌕
              </span>

              <input
                v-model="search"
                type="text"
                placeholder="Search customer, order ID or outfit..."
                class="w-full rounded-xl border border-[#eadedb] bg-[#fffaf8] py-3 pl-11 pr-4 text-sm outline-none transition focus:border-[#9b4056] focus:ring-2 focus:ring-[#9b4056]/10"
              />
            </div>

            <select
              v-model="statusFilter"
              class="rounded-xl border border-[#eadedb] bg-[#fffaf8] px-4 py-3 text-sm outline-none focus:border-[#9b4056]"
            >
              <option value="All">All Status</option>

              <option value="New">New</option>

              <option value="In Progress">In Progress</option>

              <option value="Approved">Approved</option>

              <option value="Completed">Completed</option>
            </select>
          </div>
        </section>

        <section
          class="mt-6 overflow-hidden rounded-2xl border border-[#eadedb] bg-white shadow-sm"
        >
          <div class="hidden overflow-x-auto lg:block">
            <table class="w-full min-w-[1000px]">
              <thead>
                <tr class="border-b border-[#eadedb] bg-[#fffaf8]">
                  <th
                    class="px-6 py-4 text-left text-xs font-bold tracking-[0.12em] text-[#806d6d]"
                  >
                    REQUEST
                  </th>

                  <th
                    class="px-6 py-4 text-left text-xs font-bold tracking-[0.12em] text-[#806d6d]"
                  >
                    CUSTOMER
                  </th>

                  <th
                    class="px-6 py-4 text-left text-xs font-bold tracking-[0.12em] text-[#806d6d]"
                  >
                    OUTFIT
                  </th>

                  <th
                    class="px-6 py-4 text-left text-xs font-bold tracking-[0.12em] text-[#806d6d]"
                  >
                    OCCASION
                  </th>

                  <th
                    class="px-6 py-4 text-left text-xs font-bold tracking-[0.12em] text-[#806d6d]"
                  >
                    BUDGET
                  </th>

                  <th
                    class="px-6 py-4 text-left text-xs font-bold tracking-[0.12em] text-[#806d6d]"
                  >
                    STATUS
                  </th>

                  <th
                    class="px-6 py-4 text-right text-xs font-bold tracking-[0.12em] text-[#806d6d]"
                  >
                    ACTION
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr
                  v-for="order in filteredOrders"
                  :key="order.id"
                  class="border-b border-[#f0e6e3] transition hover:bg-[#fffaf8]"
                >
                  <td class="px-6 py-5">
                    <p class="font-semibold">
                      {{ order.id }}
                    </p>

                    <p class="mt-1 text-xs text-[#9a8588]">
                      {{ order.date }}
                    </p>
                  </td>

                  <td class="px-6 py-5">
                    <div class="flex items-center gap-3">
                      <div
                        class="flex h-10 w-10 items-center justify-center rounded-full bg-[#f3dfdf] font-semibold text-[#9b4056]"
                      >
                        {{ order.customer.charAt(0) }}
                      </div>

                      <div>
                        <p class="font-semibold">
                          {{ order.customer }}
                        </p>

                        <p class="mt-1 text-xs text-[#9a8588]">
                          {{ order.email }}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td class="px-6 py-5">
                    <p class="font-medium">
                      {{ order.outfit }}
                    </p>

                    <p class="mt-1 text-xs text-[#9a8588]">
                      {{ order.fabric }}
                    </p>
                  </td>

                  <td class="px-6 py-5">
                    <p class="text-sm">
                      {{ order.occasion }}
                    </p>
                  </td>

                  <td class="px-6 py-5 font-semibold">
                    ₹{{ order.budget.toLocaleString("en-IN") }}
                  </td>

                  <td class="px-6 py-5">
                    <select
                      :value="order.status"
                      @change="changeStatus(order, $event.target.value)"
                      :class="statusClass(order.status)"
                      class="rounded-full border-0 px-3 py-1.5 text-xs font-semibold outline-none"
                    >
                      <option>New</option>
                      <option>In Progress</option>
                      <option>Approved</option>
                      <option>Completed</option>
                    </select>
                  </td>

                  <td class="px-6 py-5 text-right">
                    <button
                      @click="viewOrder(order)"
                      class="rounded-lg border border-[#eadedb] px-4 py-2 text-xs font-semibold text-[#9b4056] transition hover:bg-[#fff0f3]"
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="divide-y divide-[#f0e6e3] lg:hidden">
            <div v-for="order in filteredOrders" :key="order.id" class="p-5">
              <div class="flex items-start justify-between gap-4">
                <div>
                  <p class="font-bold">
                    {{ order.id }}
                  </p>

                  <p class="mt-1 text-sm text-[#75686a]">
                    {{ order.customer }}
                  </p>
                </div>

                <span
                  :class="statusClass(order.status)"
                  class="rounded-full px-3 py-1 text-xs font-semibold"
                >
                  {{ order.status }}
                </span>
              </div>

              <div class="mt-4 rounded-xl bg-[#fffaf8] p-4">
                <p class="font-semibold">
                  {{ order.outfit }}
                </p>

                <p class="mt-1 text-sm text-[#806d6d]">
                  {{ order.occasion }}
                </p>

                <div class="mt-4 grid grid-cols-2 gap-4">
                  <div>
                    <p class="text-xs text-[#9a8588]">FABRIC</p>

                    <p class="mt-1 text-sm font-medium">
                      {{ order.fabric }}
                    </p>
                  </div>

                  <div>
                    <p class="text-xs text-[#9a8588]">BUDGET</p>

                    <p class="mt-1 font-bold">
                      ₹{{ order.budget.toLocaleString("en-IN") }}
                    </p>
                  </div>
                </div>
              </div>

              <button
                @click="viewOrder(order)"
                class="mt-4 w-full rounded-xl border border-[#eadedb] py-3 text-sm font-semibold text-[#9b4056]"
              >
                View Customisation
              </button>
            </div>
          </div>

          <div
            v-if="filteredOrders.length === 0"
            class="px-6 py-16 text-center"
          >
            <div class="text-4xl">✦</div>

            <h3 class="mt-4 text-lg font-bold">No custom orders found</h3>

            <p class="mt-2 text-sm text-[#806d6d]">
              Try changing your search or status filter.
            </p>
          </div>
        </section>
      </div>
    </main>

    <div
      v-if="selectedOrder"
      class="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-[#302525]/40 px-4 py-8 backdrop-blur-sm"
      @click.self="selectedOrder = null"
    >
      <div class="w-full max-w-2xl rounded-3xl bg-white p-6 shadow-2xl sm:p-8">
        <!-- MODAL HEADER -->
        <div class="flex items-start justify-between">
          <div>
            <p class="text-xs font-bold tracking-[0.25em] text-[#9b4056]">
              CUSTOM REQUEST
            </p>

            <h2 class="mt-2 font-serif text-3xl font-bold">
              {{ selectedOrder.id }}
            </h2>
          </div>

          <button
            @click="selectedOrder = null"
            class="flex h-9 w-9 items-center justify-center rounded-full bg-[#fff0f3] text-xl text-[#9b4056]"
          >
            ×
          </button>
        </div>

        <!-- CUSTOMER -->
        <div class="mt-7 rounded-2xl bg-[#fffaf8] p-5">
          <p class="text-xs font-bold tracking-[0.15em] text-[#9a8588]">
            CUSTOMER
          </p>

          <div class="mt-4 flex items-center gap-4">
            <div
              class="flex h-12 w-12 items-center justify-center rounded-full bg-[#f3dfdf] font-bold text-[#9b4056]"
            >
              {{ selectedOrder.customer.charAt(0) }}
            </div>

            <div>
              <p class="font-semibold">
                {{ selectedOrder.customer }}
              </p>

              <p class="mt-1 text-sm text-[#806d6d]">
                {{ selectedOrder.email }}
              </p>

              <p class="mt-1 text-sm text-[#806d6d]">
                {{ selectedOrder.phone }}
              </p>
            </div>
          </div>
        </div>

        <div class="mt-5">
          <p class="text-xs font-bold tracking-[0.15em] text-[#9b4056]">
            OUTFIT DETAILS
          </p>

          <div class="mt-3 grid gap-3 sm:grid-cols-2">
            <div class="rounded-xl border border-[#eadedb] p-4">
              <p class="text-xs text-[#9a8588]">OUTFIT TYPE</p>

              <p class="mt-1 font-semibold">
                {{ selectedOrder.outfit }}
              </p>
            </div>

            <div class="rounded-xl border border-[#eadedb] p-4">
              <p class="text-xs text-[#9a8588]">OCCASION</p>

              <p class="mt-1 font-semibold">
                {{ selectedOrder.occasion }}
              </p>
            </div>

            <div class="rounded-xl border border-[#eadedb] p-4">
              <p class="text-xs text-[#9a8588]">FABRIC</p>

              <p class="mt-1 font-semibold">
                {{ selectedOrder.fabric }}
              </p>
            </div>

            <div class="rounded-xl border border-[#eadedb] p-4">
              <p class="text-xs text-[#9a8588]">COLOUR</p>

              <p class="mt-1 font-semibold">
                {{ selectedOrder.color }}
              </p>
            </div>
          </div>
        </div>

        <div class="mt-6">
          <p class="text-xs font-bold tracking-[0.15em] text-[#9b4056]">
            MEASUREMENTS
          </p>

          <div class="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div class="rounded-xl bg-[#fffaf8] p-3 text-center">
              <p class="text-[10px] text-[#9a8588]">BUST</p>

              <p class="mt-1 font-semibold">
                {{ selectedOrder.measurements.bust }}
              </p>
            </div>

            <div class="rounded-xl bg-[#fffaf8] p-3 text-center">
              <p class="text-[10px] text-[#9a8588]">WAIST</p>

              <p class="mt-1 font-semibold">
                {{ selectedOrder.measurements.waist }}
              </p>
            </div>

            <div class="rounded-xl bg-[#fffaf8] p-3 text-center">
              <p class="text-[10px] text-[#9a8588]">HIPS</p>

              <p class="mt-1 font-semibold">
                {{ selectedOrder.measurements.hips }}
              </p>
            </div>

            <div class="rounded-xl bg-[#fffaf8] p-3 text-center">
              <p class="text-[10px] text-[#9a8588]">LENGTH</p>

              <p class="mt-1 font-semibold">
                {{ selectedOrder.measurements.length }}
              </p>
            </div>
          </div>
        </div>

        <div class="mt-6">
          <p class="text-xs font-bold tracking-[0.15em] text-[#9b4056]">
            CUSTOMER REQUIREMENTS
          </p>

          <div class="mt-3 rounded-xl border border-[#eadedb] bg-[#fffaf8] p-4">
            <p class="text-sm leading-7 text-[#5f5254]">
              {{ selectedOrder.requirements }}
            </p>
          </div>
        </div>

        <div
          class="mt-6 flex flex-col gap-4 rounded-2xl bg-[#9b4056] p-5 text-white sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <p class="text-xs uppercase tracking-[0.15em] text-white/70">
              Customer Budget
            </p>

            <p class="mt-1 text-2xl font-bold">
              ₹{{ selectedOrder.budget.toLocaleString("en-IN") }}
            </p>
          </div>

          <div>
            <p class="text-xs uppercase tracking-[0.15em] text-white/70">
              Status
            </p>

            <select
              v-model="selectedOrder.status"
              class="mt-1 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white outline-none"
            >
              <option class="text-[#302525]">New</option>

              <option class="text-[#302525]">In Progress</option>

              <option class="text-[#302525]">Approved</option>

              <option class="text-[#302525]">Completed</option>
            </select>
          </div>
        </div>

        <button
          @click="selectedOrder = null"
          class="mt-6 w-full rounded-full bg-[#302525] py-3.5 font-semibold text-white transition hover:bg-[#493838]"
        >
          Close Details
        </button>
      </div>
    </div>

    <div
      v-if="showAddForm"
      class="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-[#302525]/40 px-4 py-8 backdrop-blur-sm"
      @click.self="showAddForm = false"
    >
      <div class="w-full max-w-xl rounded-3xl bg-white p-6 shadow-2xl sm:p-8">
        <div class="flex items-start justify-between">
          <div>
            <p class="text-xs font-bold tracking-[0.25em] text-[#9b4056]">
              MAAD FASHIONS
            </p>

            <h2 class="mt-2 font-serif text-3xl font-bold">New Custom Order</h2>
          </div>

          <button @click="showAddForm = false" class="text-2xl text-[#806d6d]">
            ×
          </button>
        </div>

        <form class="mt-7 space-y-5" @submit.prevent="addCustomOrder">
          <div class="grid gap-5 sm:grid-cols-2">
            <div>
              <label class="mb-2 block text-xs font-semibold text-[#806d6d]">
                CUSTOMER NAME
              </label>

              <input
                v-model="newOrder.customer"
                required
                type="text"
                placeholder="Customer name"
                class="w-full rounded-xl border border-[#eadedb] bg-[#fffaf8] px-4 py-3 outline-none focus:border-[#9b4056]"
              />
            </div>

            <div>
              <label class="mb-2 block text-xs font-semibold text-[#806d6d]">
                EMAIL
              </label>

              <input
                v-model="newOrder.email"
                required
                type="email"
                placeholder="customer@example.com"
                class="w-full rounded-xl border border-[#eadedb] bg-[#fffaf8] px-4 py-3 outline-none focus:border-[#9b4056]"
              />
            </div>
          </div>

          <div class="grid gap-5 sm:grid-cols-2">
            <div>
              <label class="mb-2 block text-xs font-semibold text-[#806d6d]">
                OUTFIT TYPE
              </label>

              <select
                v-model="newOrder.outfit"
                class="w-full rounded-xl border border-[#eadedb] bg-[#fffaf8] px-4 py-3 outline-none focus:border-[#9b4056]"
              >
                <option>Custom Dress</option>
                <option>Custom Saree</option>
                <option>Custom Gown</option>
                <option>Custom Anarkali</option>
                <option>Custom Lehenga</option>
              </select>
            </div>

            <div>
              <label class="mb-2 block text-xs font-semibold text-[#806d6d]">
                OCCASION
              </label>

              <input
                v-model="newOrder.occasion"
                type="text"
                placeholder="Wedding, Party..."
                class="w-full rounded-xl border border-[#eadedb] bg-[#fffaf8] px-4 py-3 outline-none focus:border-[#9b4056]"
              />
            </div>
          </div>

          <div class="grid gap-5 sm:grid-cols-2">
            <div>
              <label class="mb-2 block text-xs font-semibold text-[#806d6d]">
                FABRIC
              </label>

              <input
                v-model="newOrder.fabric"
                type="text"
                placeholder="Silk, Georgette..."
                class="w-full rounded-xl border border-[#eadedb] bg-[#fffaf8] px-4 py-3 outline-none focus:border-[#9b4056]"
              />
            </div>

            <div>
              <label class="mb-2 block text-xs font-semibold text-[#806d6d]">
                BUDGET
              </label>

              <input
                v-model.number="newOrder.budget"
                type="number"
                placeholder="5000"
                class="w-full rounded-xl border border-[#eadedb] bg-[#fffaf8] px-4 py-3 outline-none focus:border-[#9b4056]"
              />
            </div>
          </div>

          <div>
            <label class="mb-2 block text-xs font-semibold text-[#806d6d]">
              REQUIREMENTS
            </label>

            <textarea
              v-model="newOrder.requirements"
              rows="4"
              placeholder="Describe the customer's requirements..."
              class="w-full resize-none rounded-xl border border-[#eadedb] bg-[#fffaf8] px-4 py-3 outline-none focus:border-[#9b4056]"
            ></textarea>
          </div>

          <button
            type="submit"
            class="w-full rounded-full bg-[#9b4056] py-4 font-semibold text-white transition hover:bg-[#84354a]"
          >
            Create Custom Order
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { RouterLink, useRouter } from "vue-router";

const router = useRouter();

const search = ref("");
const statusFilter = ref("All");
const selectedOrder = ref(null);
const showAddForm = ref(false);

const orders = ref([
  {
    id: "CUSTOM-001",
    customer: "Ananya Reddy",
    email: "ananya@example.com",
    phone: "+91 98765 43210",
    outfit: "Custom Evening Gown",
    occasion: "Reception",
    fabric: "Premium Satin",
    color: "Dusty Rose",
    budget: 8500,
    status: "New",
    date: "26 Aug 2026",
    measurements: {
      bust: "34 in",
      waist: "28 in",
      hips: "36 in",
      length: "58 in",
    },
    requirements:
      "Elegant floor-length gown with a fitted waist, subtle embroidery and a soft flowing skirt.",
  },

  {
    id: "CUSTOM-002",
    customer: "Priya Sharma",
    email: "priya@example.com",
    phone: "+91 91234 56789",
    outfit: "Custom Saree",
    occasion: "Wedding",
    fabric: "Silk",
    color: "Wine Red",
    budget: 6500,
    status: "In Progress",
    date: "25 Aug 2026",
    measurements: {
      bust: "36 in",
      waist: "30 in",
      hips: "38 in",
      length: "42 in",
    },
    requirements:
      "Traditional silk saree with contemporary blouse design and delicate gold detailing.",
  },

  {
    id: "CUSTOM-003",
    customer: "Kavya Rao",
    email: "kavya@example.com",
    phone: "+91 99887 66554",
    outfit: "Custom Anarkali",
    occasion: "Festive",
    fabric: "Georgette",
    color: "Pastel Pink",
    budget: 5800,
    status: "Approved",
    date: "24 Aug 2026",
    measurements: {
      bust: "32 in",
      waist: "26 in",
      hips: "34 in",
      length: "55 in",
    },
    requirements:
      "Pastel pink Anarkali with floral embroidery and a lightweight dupatta.",
  },

  {
    id: "CUSTOM-004",
    customer: "Meera Kapoor",
    email: "meera@example.com",
    phone: "+91 93456 78120",
    outfit: "Custom Lehenga",
    occasion: "Engagement",
    fabric: "Raw Silk",
    color: "Ivory",
    budget: 12500,
    status: "Completed",
    date: "21 Aug 2026",
    measurements: {
      bust: "34 in",
      waist: "28 in",
      hips: "36 in",
      length: "42 in",
    },
    requirements:
      "Ivory lehenga with pearl work, elegant blouse and a lightweight embroidered dupatta.",
  },

  {
    id: "CUSTOM-005",
    customer: "Sneha Patel",
    email: "sneha@example.com",
    phone: "+91 97654 32109",
    outfit: "Custom Dress",
    occasion: "Birthday",
    fabric: "Organza",
    color: "Lavender",
    budget: 4500,
    status: "New",
    date: "20 Aug 2026",
    measurements: {
      bust: "34 in",
      waist: "28 in",
      hips: "35 in",
      length: "44 in",
    },
    requirements:
      "Short elegant party dress with puff sleeves and a layered skirt.",
  },
]);

const newOrder = ref({
  customer: "",
  email: "",
  outfit: "Custom Dress",
  occasion: "",
  fabric: "",
  budget: 0,
  requirements: "",
});

const filteredOrders = computed(() => {
  const query = search.value.toLowerCase().trim();

  return orders.value.filter((order) => {
    const matchesSearch =
      !query ||
      order.id.toLowerCase().includes(query) ||
      order.customer.toLowerCase().includes(query) ||
      order.outfit.toLowerCase().includes(query);

    const matchesStatus =
      statusFilter.value === "All" || order.status === statusFilter.value;

    return matchesSearch && matchesStatus;
  });
});

const newCount = computed(
  () => orders.value.filter((o) => o.status === "New").length,
);

const progressCount = computed(
  () => orders.value.filter((o) => o.status === "In Progress").length,
);

const approvedCount = computed(
  () => orders.value.filter((o) => o.status === "Approved").length,
);

const completedCount = computed(
  () => orders.value.filter((o) => o.status === "Completed").length,
);

function viewOrder(order) {
  selectedOrder.value = order;
}

function changeStatus(order, status) {
  order.status = status;
}

function statusClass(status) {
  const styles = {
    New: "bg-[#f3dfdf] text-[#9b4056]",
    "In Progress": "bg-[#eee7f8] text-[#76539b]",
    Approved: "bg-[#e8eefb] text-[#526da8]",
    Completed: "bg-[#e4f3e9] text-[#398152]",
  };

  return styles[status] || "bg-gray-100 text-gray-600";
}

function addCustomOrder() {
  const nextNumber = String(orders.value.length + 1).padStart(3, "0");

  orders.value.unshift({
    id: `CUSTOM-${nextNumber}`,
    customer: newOrder.value.customer,
    email: newOrder.value.email,
    phone: "Not provided",
    outfit: newOrder.value.outfit,
    occasion: newOrder.value.occasion || "Not specified",
    fabric: newOrder.value.fabric || "To be decided",
    color: "To be decided",
    budget: Number(newOrder.value.budget) || 0,
    status: "New",
    date: new Date().toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }),
    measurements: {
      bust: "Not provided",
      waist: "Not provided",
      hips: "Not provided",
      length: "Not provided",
    },
    requirements:
      newOrder.value.requirements || "No special requirements provided.",
  });

  newOrder.value = {
    customer: "",
    email: "",
    outfit: "Custom Dress",
    occasion: "",
    fabric: "",
    budget: 0,
    requirements: "",
  };

  showAddForm.value = false;
}

function logout() {
  localStorage.removeItem("adminLoggedIn");
  router.push("/admin");
}
</script>
