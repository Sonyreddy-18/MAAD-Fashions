<template>
  <div class="min-h-screen overflow-x-hidden bg-[#fffaf8] text-[#302525]">
    <!-- =========================================================
         DESKTOP SIDEBAR
    ========================================================== -->
    <aside
      class="fixed left-0 top-0 z-40 hidden h-screen w-64 border-r border-[#eadedb] bg-white lg:block"
    >
      <!-- BRAND -->
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

      <!-- NAVIGATION -->
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

        <!-- ACTIVE -->
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

        <!-- STORE -->
        <RouterLink
          to="/"
          class="mt-8 flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-[#75686a] transition hover:bg-[#fff0f3] hover:text-[#9b4056]"
        >
          <span class="text-lg">↗</span>
          View Store
        </RouterLink>
      </nav>

      <!-- LOGOUT -->
      <div class="absolute bottom-6 left-4 right-4">
        <button
          type="button"
          @click="logout"
          class="flex w-full items-center gap-3 rounded-xl border border-[#eadedb] px-4 py-3 text-sm font-medium text-[#75686a] transition hover:border-[#9b4056] hover:text-[#9b4056]"
        >
          <span class="text-lg">↪</span>
          Logout
        </button>
      </div>
    </aside>

    <!-- =========================================================
         MAIN
    ========================================================== -->
    <main class="min-h-screen lg:ml-64">
      <!-- =======================================================
           HEADER
      ======================================================== -->
      <header
        class="sticky top-0 z-30 flex h-[72px] items-center justify-between border-b border-[#eadedb] bg-[#fffaf8]/95 px-4 backdrop-blur-md sm:h-20 sm:px-8"
      >
        <div>
          <p
            class="text-[9px] font-semibold tracking-[0.22em] text-[#9b4056] sm:text-xs sm:tracking-[0.25em]"
          >
            MAAD FASHIONS
          </p>

          <h2 class="mt-0.5 text-lg font-bold sm:mt-1 sm:text-xl">
            Custom Orders
          </h2>
        </div>

        <div
          class="flex h-9 w-9 items-center justify-center rounded-full bg-[#f3dfdf] text-sm font-semibold text-[#9b4056] sm:h-10 sm:w-10"
        >
          A
        </div>
      </header>

      <!-- =======================================================
           CONTENT
      ======================================================== -->
      <div class="p-4 sm:p-8">
        <!-- PAGE HEADER -->
        <section
          class="flex flex-col justify-between gap-4 sm:flex-row sm:items-end sm:gap-5"
        >
          <div>
            <p
              class="text-[9px] font-bold uppercase tracking-[0.22em] text-[#9b4056] sm:text-xs sm:tracking-[0.25em]"
            >
              Personalised Fashion
            </p>

            <h1
              class="mt-1.5 font-serif text-3xl font-bold text-[#302525] sm:mt-2 sm:text-4xl"
            >
              Custom Orders
            </h1>

            <p
              class="mt-1.5 max-w-xl text-xs leading-5 text-[#806d6d] sm:mt-2 sm:text-sm sm:leading-6"
            >
              Manage personalised outfit requests, measurements, preferences and
              customer requirements.
            </p>
          </div>

          <button
            type="button"
            @click="showAddForm = true"
            class="w-full rounded-full bg-[#9b4056] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#84354a] sm:w-auto"
          >
            + New Custom Order
          </button>
        </section>

        <!-- =====================================================
             ALERTS
        ====================================================== -->
        <div
          v-if="errorMessage"
          class="mt-5 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-600"
        >
          {{ errorMessage }}
        </div>

        <div
          v-if="successMessage"
          class="mt-5 rounded-xl border border-green-100 bg-green-50 px-4 py-3 text-sm text-green-600"
        >
          {{ successMessage }}
        </div>

        <!-- =====================================================
             STATISTICS
        ====================================================== -->
        <section
          class="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-4 xl:grid-cols-4"
        >
          <!-- NEW -->
          <div
            class="rounded-2xl border border-[#eadedb] bg-white p-4 shadow-sm sm:p-5"
          >
            <div class="flex items-center justify-between gap-2">
              <div>
                <p class="text-xs text-[#806d6d] sm:text-sm">New Requests</p>

                <p class="mt-1.5 text-2xl font-bold sm:mt-2 sm:text-3xl">
                  {{ newCount }}
                </p>
              </div>

              <div
                class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f3dfdf] text-base text-[#9b4056] sm:h-12 sm:w-12 sm:text-xl"
              >
                ✦
              </div>
            </div>
          </div>

          <!-- PROGRESS -->
          <div
            class="rounded-2xl border border-[#eadedb] bg-white p-4 shadow-sm sm:p-5"
          >
            <div class="flex items-center justify-between gap-2">
              <div>
                <p class="text-xs text-[#806d6d] sm:text-sm">In Progress</p>

                <p class="mt-1.5 text-2xl font-bold sm:mt-2 sm:text-3xl">
                  {{ progressCount }}
                </p>
              </div>

              <div
                class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#eee7f8] text-base text-[#76539b] sm:h-12 sm:w-12 sm:text-xl"
              >
                ◷
              </div>
            </div>
          </div>

          <!-- APPROVED -->
          <div
            class="rounded-2xl border border-[#eadedb] bg-white p-4 shadow-sm sm:p-5"
          >
            <div class="flex items-center justify-between gap-2">
              <div>
                <p class="text-xs text-[#806d6d] sm:text-sm">Approved</p>

                <p class="mt-1.5 text-2xl font-bold sm:mt-2 sm:text-3xl">
                  {{ approvedCount }}
                </p>
              </div>

              <div
                class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#e8eefb] text-base text-[#526da8] sm:h-12 sm:w-12 sm:text-xl"
              >
                ✓
              </div>
            </div>
          </div>

          <!-- COMPLETED -->
          <div
            class="rounded-2xl border border-[#eadedb] bg-white p-4 shadow-sm sm:p-5"
          >
            <div class="flex items-center justify-between gap-2">
              <div>
                <p class="text-xs text-[#806d6d] sm:text-sm">Completed</p>

                <p class="mt-1.5 text-2xl font-bold sm:mt-2 sm:text-3xl">
                  {{ completedCount }}
                </p>
              </div>

              <div
                class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#e4f3e9] text-base text-[#398152] sm:h-12 sm:w-12 sm:text-xl"
              >
                ♡
              </div>
            </div>
          </div>
        </section>

        <!-- =====================================================
             SEARCH + FILTER
        ====================================================== -->
        <section
          class="mt-6 rounded-2xl border border-[#eadedb] bg-white p-3 shadow-sm sm:mt-8 sm:p-4"
        >
          <div class="flex flex-col gap-3 lg:flex-row">
            <!-- SEARCH -->
            <div class="relative flex-1">
              <span
                class="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9a8588]"
              >
                ⌕
              </span>

              <input
                v-model="search"
                type="text"
                placeholder="Search customer, order ID or outfit..."
                class="w-full rounded-xl border border-[#eadedb] bg-[#fffaf8] py-3 pl-10 pr-4 text-sm outline-none transition focus:border-[#9b4056] focus:ring-2 focus:ring-[#9b4056]/10"
              />
            </div>

            <!-- STATUS -->
            <select
              v-model="statusFilter"
              class="w-full rounded-xl border border-[#eadedb] bg-[#fffaf8] px-4 py-3 text-sm outline-none focus:border-[#9b4056] lg:w-48"
            >
              <option value="All">All Status</option>
              <option value="New">New</option>
              <option value="In Progress">In Progress</option>
              <option value="Approved">Approved</option>
              <option value="Completed">Completed</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>
        </section>

        <!-- =====================================================
             ORDERS
        ====================================================== -->
        <section
          class="mt-5 overflow-hidden rounded-2xl border border-[#eadedb] bg-white shadow-sm sm:mt-6"
        >
          <!-- ===================================================
               LOADING
          ==================================================== -->
          <div
            v-if="loading"
            class="flex min-h-[240px] flex-col items-center justify-center px-6 text-center"
          >
            <div
              class="h-8 w-8 animate-spin rounded-full border-2 border-[#eadedb] border-t-[#9b4056]"
            ></div>

            <p class="mt-4 text-sm font-medium text-[#806d6d]">
              Loading custom orders...
            </p>
          </div>

          <!-- ===================================================
               DESKTOP TABLE
          ==================================================== -->
          <div v-else class="hidden overflow-x-auto lg:block">
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
                  <!-- REQUEST -->
                  <td class="px-6 py-5">
                    <p class="font-semibold">
                      {{ order.id }}
                    </p>

                    <p class="mt-1 text-xs text-[#9a8588]">
                      {{ order.date }}
                    </p>
                  </td>

                  <!-- CUSTOMER -->
                  <td class="px-6 py-5">
                    <div class="flex items-center gap-3">
                      <div
                        class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f3dfdf] font-semibold text-[#9b4056]"
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

                  <!-- OUTFIT -->
                  <td class="px-6 py-5">
                    <p class="font-medium">
                      {{ order.outfit }}
                    </p>

                    <p class="mt-1 text-xs text-[#9a8588]">
                      {{ order.fabric }}
                    </p>
                  </td>

                  <!-- OCCASION -->
                  <td class="px-6 py-5">
                    <p class="text-sm">
                      {{ order.occasion }}
                    </p>
                  </td>

                  <!-- BUDGET -->
                  <td class="px-6 py-5 font-semibold">
                    ₹{{ order.budget.toLocaleString("en-IN") }}
                  </td>

                  <!-- STATUS -->
                  <td class="px-6 py-5">
                    <select
                      :value="order.status"
                      :disabled="savingStatus"
                      @change="changeStatus(order, $event.target.value)"
                      :class="statusClass(order.status)"
                      class="rounded-full border-0 px-3 py-1.5 text-xs font-semibold outline-none disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      <option>New</option>
                      <option>In Progress</option>
                      <option>Approved</option>
                      <option>Completed</option>
                      <option>Cancelled</option>
                    </select>
                  </td>

                  <!-- ACTION -->
                  <td class="px-6 py-5 text-right">
                    <button
                      type="button"
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

          <!-- ===================================================
               MOBILE CARDS
          ==================================================== -->
          <div v-if="!loading" class="divide-y divide-[#f0e6e3] lg:hidden">
            <div
              v-for="order in filteredOrders"
              :key="order.id"
              class="p-4 sm:p-5"
            >
              <!-- TOP -->
              <div class="flex items-start justify-between gap-3">
                <div class="min-w-0">
                  <p class="truncate text-sm font-bold">
                    {{ order.id }}
                  </p>

                  <p class="mt-1 truncate text-xs text-[#75686a]">
                    {{ order.customer }}
                  </p>

                  <p class="mt-0.5 text-[10px] text-[#9a8588]">
                    {{ order.date }}
                  </p>
                </div>

                <span
                  :class="statusClass(order.status)"
                  class="shrink-0 rounded-full px-2.5 py-1 text-[10px] font-semibold"
                >
                  {{ order.status }}
                </span>
              </div>

              <!-- DETAILS -->
              <div class="mt-3 rounded-xl bg-[#fffaf8] p-3.5">
                <div class="flex items-start justify-between gap-3">
                  <div class="min-w-0">
                    <p class="truncate text-sm font-semibold">
                      {{ order.outfit }}
                    </p>

                    <p class="mt-0.5 truncate text-xs text-[#806d6d]">
                      {{ order.occasion }}
                    </p>
                  </div>

                  <p class="shrink-0 text-sm font-bold text-[#302525]">
                    ₹{{ order.budget.toLocaleString("en-IN") }}
                  </p>
                </div>

                <div
                  class="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 border-t border-[#eadedb] pt-3"
                >
                  <div>
                    <p
                      class="text-[9px] font-semibold tracking-[0.1em] text-[#9a8588]"
                    >
                      FABRIC
                    </p>

                    <p class="mt-0.5 truncate text-xs font-medium">
                      {{ order.fabric }}
                    </p>
                  </div>

                  <div>
                    <p
                      class="text-[9px] font-semibold tracking-[0.1em] text-[#9a8588]"
                    >
                      EMAIL
                    </p>

                    <p class="mt-0.5 truncate text-xs font-medium">
                      {{ order.email }}
                    </p>
                  </div>
                </div>
              </div>

              <!-- ACTIONS -->
              <div class="mt-3 grid grid-cols-[1fr_auto] gap-2">
                <button
                  type="button"
                  @click="viewOrder(order)"
                  class="rounded-xl border border-[#eadedb] py-2.5 text-xs font-semibold text-[#9b4056] transition hover:bg-[#fff0f3]"
                >
                  View Customisation
                </button>

                <select
                  :value="order.status"
                  :disabled="savingStatus"
                  @change="changeStatus(order, $event.target.value)"
                  :class="statusClass(order.status)"
                  class="min-w-[42px] rounded-xl border-0 px-2.5 py-2 text-[10px] font-semibold outline-none disabled:opacity-60"
                >
                  <option>New</option>
                  <option>In Progress</option>
                  <option>Approved</option>
                  <option>Completed</option>
                  <option>Cancelled</option>
                </select>
              </div>
            </div>
          </div>

          <!-- ===================================================
               EMPTY
          ==================================================== -->
          <div
            v-if="!loading && filteredOrders.length === 0"
            class="px-6 py-14 text-center sm:py-16"
          >
            <div class="text-3xl sm:text-4xl">✦</div>

            <h3 class="mt-3 text-base font-bold sm:mt-4 sm:text-lg">
              No custom orders found
            </h3>

            <p class="mt-1.5 text-xs text-[#806d6d] sm:mt-2 sm:text-sm">
              Try changing your search or status filter.
            </p>
          </div>
        </section>
      </div>
    </main>

    <!-- =========================================================
         VIEW ORDER MODAL
    ========================================================== -->
    <div
      v-if="selectedOrder"
      class="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-[#302525]/40 px-3 py-4 backdrop-blur-sm sm:px-4 sm:py-8"
      @click.self="selectedOrder = null"
    >
      <div
        class="my-auto max-h-[94vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-4 shadow-2xl sm:rounded-3xl sm:p-8"
      >
        <!-- HEADER -->
        <div class="flex items-start justify-between gap-4">
          <div class="min-w-0">
            <p
              class="text-[9px] font-bold tracking-[0.22em] text-[#9b4056] sm:text-xs sm:tracking-[0.25em]"
            >
              CUSTOM REQUEST
            </p>

            <h2
              class="mt-1 truncate font-serif text-2xl font-bold sm:mt-2 sm:text-3xl"
            >
              {{ selectedOrder.id }}
            </h2>
          </div>

          <button
            type="button"
            @click="selectedOrder = null"
            class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#fff0f3] text-lg text-[#9b4056] sm:h-9 sm:w-9 sm:text-xl"
          >
            ×
          </button>
        </div>

        <!-- CUSTOMER -->
        <div
          class="mt-5 rounded-xl bg-[#fffaf8] p-4 sm:mt-7 sm:rounded-2xl sm:p-5"
        >
          <p
            class="text-[9px] font-bold tracking-[0.15em] text-[#9a8588] sm:text-xs"
          >
            CUSTOMER
          </p>

          <div class="mt-3 flex items-center gap-3 sm:mt-4 sm:gap-4">
            <div
              class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f3dfdf] text-sm font-bold text-[#9b4056] sm:h-12 sm:w-12"
            >
              {{ selectedOrder.customer.charAt(0) }}
            </div>

            <div class="min-w-0">
              <p class="truncate text-sm font-semibold sm:text-base">
                {{ selectedOrder.customer }}
              </p>

              <p
                class="mt-0.5 truncate text-xs text-[#806d6d] sm:mt-1 sm:text-sm"
              >
                {{ selectedOrder.email }}
              </p>

              <p class="mt-0.5 text-xs text-[#806d6d] sm:mt-1 sm:text-sm">
                {{ selectedOrder.phone }}
              </p>
            </div>
          </div>
        </div>

        <!-- OUTFIT DETAILS -->
        <div class="mt-5 sm:mt-6">
          <p
            class="text-[9px] font-bold tracking-[0.15em] text-[#9b4056] sm:text-xs"
          >
            OUTFIT DETAILS
          </p>

          <div class="mt-2.5 grid grid-cols-2 gap-2.5 sm:mt-3 sm:gap-3">
            <div class="rounded-xl border border-[#eadedb] p-3 sm:p-4">
              <p class="text-[9px] text-[#9a8588] sm:text-xs">OUTFIT TYPE</p>

              <p class="mt-1 text-xs font-semibold sm:text-sm">
                {{ selectedOrder.outfit }}
              </p>
            </div>

            <div class="rounded-xl border border-[#eadedb] p-3 sm:p-4">
              <p class="text-[9px] text-[#9a8588] sm:text-xs">OCCASION</p>

              <p class="mt-1 text-xs font-semibold sm:text-sm">
                {{ selectedOrder.occasion }}
              </p>
            </div>

            <div class="rounded-xl border border-[#eadedb] p-3 sm:p-4">
              <p class="text-[9px] text-[#9a8588] sm:text-xs">FABRIC</p>

              <p class="mt-1 text-xs font-semibold sm:text-sm">
                {{ selectedOrder.fabric }}
              </p>
            </div>

            <div class="rounded-xl border border-[#eadedb] p-3 sm:p-4">
              <p class="text-[9px] text-[#9a8588] sm:text-xs">COLOUR</p>

              <p class="mt-1 text-xs font-semibold sm:text-sm">
                {{ selectedOrder.color }}
              </p>
            </div>
          </div>
        </div>

        <!-- MEASUREMENTS -->
        <div class="mt-5 sm:mt-6">
          <p
            class="text-[9px] font-bold tracking-[0.15em] text-[#9b4056] sm:text-xs"
          >
            MEASUREMENTS
          </p>

          <div
            class="mt-2.5 grid grid-cols-2 gap-2 sm:mt-3 sm:grid-cols-4 sm:gap-3"
          >
            <div class="rounded-xl bg-[#fffaf8] p-2.5 text-center sm:p-3">
              <p class="text-[9px] text-[#9a8588]">BUST</p>

              <p class="mt-1 text-xs font-semibold sm:text-sm">
                {{ selectedOrder.measurements.bust }}
              </p>
            </div>

            <div class="rounded-xl bg-[#fffaf8] p-2.5 text-center sm:p-3">
              <p class="text-[9px] text-[#9a8588]">WAIST</p>

              <p class="mt-1 text-xs font-semibold sm:text-sm">
                {{ selectedOrder.measurements.waist }}
              </p>
            </div>

            <div class="rounded-xl bg-[#fffaf8] p-2.5 text-center sm:p-3">
              <p class="text-[9px] text-[#9a8588]">HIPS</p>

              <p class="mt-1 text-xs font-semibold sm:text-sm">
                {{ selectedOrder.measurements.hips }}
              </p>
            </div>

            <div class="rounded-xl bg-[#fffaf8] p-2.5 text-center sm:p-3">
              <p class="text-[9px] text-[#9a8588]">LENGTH</p>

              <p class="mt-1 text-xs font-semibold sm:text-sm">
                {{ selectedOrder.measurements.length }}
              </p>
            </div>
          </div>
        </div>

        <!-- REQUIREMENTS -->
        <div class="mt-5 sm:mt-6">
          <p
            class="text-[9px] font-bold tracking-[0.15em] text-[#9b4056] sm:text-xs"
          >
            CUSTOMER REQUIREMENTS
          </p>

          <div
            class="mt-2.5 rounded-xl border border-[#eadedb] bg-[#fffaf8] p-3 sm:mt-3 sm:p-4"
          >
            <p class="text-xs leading-6 text-[#5f5254] sm:text-sm sm:leading-7">
              {{ selectedOrder.requirements }}
            </p>
          </div>
        </div>

        <!-- BUDGET + STATUS -->
        <div
          class="mt-5 flex flex-col gap-4 rounded-xl bg-[#9b4056] p-4 text-white sm:mt-6 sm:rounded-2xl sm:p-5 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <p
              class="text-[9px] uppercase tracking-[0.15em] text-white/70 sm:text-xs"
            >
              Customer Budget
            </p>

            <p class="mt-1 text-xl font-bold sm:text-2xl">
              ₹{{ selectedOrder.budget.toLocaleString("en-IN") }}
            </p>
          </div>

          <div>
            <p
              class="text-[9px] uppercase tracking-[0.15em] text-white/70 sm:text-xs"
            >
              Status
            </p>

            <select
              :value="selectedOrder.status"
              :disabled="savingStatus"
              @change="updateSelectedStatus($event.target.value)"
              class="mt-1 w-full rounded-full bg-white/15 px-4 py-2 text-xs font-semibold text-white outline-none disabled:opacity-60 sm:w-auto sm:text-sm"
            >
              <option class="text-[#302525]">New</option>
              <option class="text-[#302525]">In Progress</option>
              <option class="text-[#302525]">Approved</option>
              <option class="text-[#302525]">Completed</option>
              <option class="text-[#302525]">Cancelled</option>
            </select>
          </div>
        </div>

        <!-- CLOSE -->
        <button
          type="button"
          @click="selectedOrder = null"
          class="mt-4 w-full rounded-full bg-[#302525] py-3 text-sm font-semibold text-white transition hover:bg-[#493838] sm:mt-6 sm:py-3.5"
        >
          Close Details
        </button>
      </div>
    </div>

    <!-- =========================================================
         ADD CUSTOM ORDER MODAL
    ========================================================== -->
    <div
      v-if="showAddForm"
      class="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-[#302525]/40 px-3 py-4 backdrop-blur-sm sm:px-4 sm:py-8"
      @click.self="showAddForm = false"
    >
      <div
        class="my-auto max-h-[94vh] w-full max-w-xl overflow-y-auto rounded-2xl bg-white p-5 shadow-2xl sm:rounded-3xl sm:p-8"
      >
        <!-- HEADER -->
        <div class="flex items-start justify-between gap-4">
          <div>
            <p
              class="text-[9px] font-bold tracking-[0.22em] text-[#9b4056] sm:text-xs sm:tracking-[0.25em]"
            >
              MAAD FASHIONS
            </p>

            <h2 class="mt-1 font-serif text-2xl font-bold sm:mt-2 sm:text-3xl">
              New Custom Order
            </h2>
          </div>

          <button
            type="button"
            @click="showAddForm = false"
            class="flex h-8 w-8 items-center justify-center rounded-full bg-[#fff0f3] text-xl text-[#806d6d] sm:h-9 sm:w-9"
          >
            ×
          </button>
        </div>

        <!-- FORM -->
        <form
          class="mt-5 space-y-4 sm:mt-7 sm:space-y-5"
          @submit.prevent="addCustomOrder"
        >
          <!-- CUSTOMER -->
          <div class="grid gap-4 sm:grid-cols-2 sm:gap-5">
            <div>
              <label
                class="mb-1.5 block text-[10px] font-semibold text-[#806d6d] sm:mb-2 sm:text-xs"
              >
                CUSTOMER NAME
              </label>

              <input
                v-model="newOrder.customer"
                required
                type="text"
                placeholder="Customer name"
                class="w-full rounded-xl border border-[#eadedb] bg-[#fffaf8] px-4 py-3 text-sm outline-none focus:border-[#9b4056]"
              />
            </div>

            <div>
              <label
                class="mb-1.5 block text-[10px] font-semibold text-[#806d6d] sm:mb-2 sm:text-xs"
              >
                EMAIL
              </label>

              <input
                v-model="newOrder.email"
                required
                type="email"
                placeholder="customer@example.com"
                class="w-full rounded-xl border border-[#eadedb] bg-[#fffaf8] px-4 py-3 text-sm outline-none focus:border-[#9b4056]"
              />
            </div>
          </div>

          <!-- OUTFIT + OCCASION -->
          <div class="grid gap-4 sm:grid-cols-2 sm:gap-5">
            <div>
              <label
                class="mb-1.5 block text-[10px] font-semibold text-[#806d6d] sm:mb-2 sm:text-xs"
              >
                OUTFIT TYPE
              </label>

              <select
                v-model="newOrder.outfit"
                class="w-full rounded-xl border border-[#eadedb] bg-[#fffaf8] px-4 py-3 text-sm outline-none focus:border-[#9b4056]"
              >
                <option>Custom Dress</option>
                <option>Custom Saree</option>
                <option>Custom Gown</option>
                <option>Custom Anarkali</option>
                <option>Custom Lehenga</option>
              </select>
            </div>

            <div>
              <label
                class="mb-1.5 block text-[10px] font-semibold text-[#806d6d] sm:mb-2 sm:text-xs"
              >
                OCCASION
              </label>

              <input
                v-model="newOrder.occasion"
                type="text"
                placeholder="Wedding, Party..."
                class="w-full rounded-xl border border-[#eadedb] bg-[#fffaf8] px-4 py-3 text-sm outline-none focus:border-[#9b4056]"
              />
            </div>
          </div>

          <!-- FABRIC + BUDGET -->
          <div class="grid gap-4 sm:grid-cols-2 sm:gap-5">
            <div>
              <label
                class="mb-1.5 block text-[10px] font-semibold text-[#806d6d] sm:mb-2 sm:text-xs"
              >
                FABRIC
              </label>

              <input
                v-model="newOrder.fabric"
                type="text"
                placeholder="Silk, Georgette..."
                class="w-full rounded-xl border border-[#eadedb] bg-[#fffaf8] px-4 py-3 text-sm outline-none focus:border-[#9b4056]"
              />
            </div>

            <div>
              <label
                class="mb-1.5 block text-[10px] font-semibold text-[#806d6d] sm:mb-2 sm:text-xs"
              >
                BUDGET
              </label>

              <input
                v-model.number="newOrder.budget"
                type="number"
                min="0"
                placeholder="5000"
                class="w-full rounded-xl border border-[#eadedb] bg-[#fffaf8] px-4 py-3 text-sm outline-none focus:border-[#9b4056]"
              />
            </div>
          </div>

          <!-- REQUIREMENTS -->
          <div>
            <label
              class="mb-1.5 block text-[10px] font-semibold text-[#806d6d] sm:mb-2 sm:text-xs"
            >
              REQUIREMENTS
            </label>

            <textarea
              v-model="newOrder.requirements"
              rows="3"
              placeholder="Describe the customer's requirements..."
              class="w-full resize-none rounded-xl border border-[#eadedb] bg-[#fffaf8] px-4 py-3 text-sm outline-none focus:border-[#9b4056]"
            ></textarea>
          </div>

          <!-- INFO -->
          <div
            class="rounded-xl border border-[#eadedb] bg-[#fffaf8] px-4 py-3 text-xs leading-5 text-[#806d6d]"
          >
            Admin-created custom orders require an existing customer account.
            This form will not create a fake order in the database.
          </div>

          <!-- CREATE -->
          <button
            type="submit"
            :disabled="addingOrder"
            class="w-full rounded-full bg-[#9b4056] py-3.5 text-sm font-semibold text-white transition hover:bg-[#84354a] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {{ addingOrder ? "Creating..." : "Create Custom Order" }}
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { RouterLink, useRouter } from "vue-router";

const router = useRouter();

// =====================================================
// API
// =====================================================

const API_URL = (
  import.meta.env.VITE_API_URL || "http://localhost:3000"
).replace(/\/$/, "");

// =====================================================
// PAGE STATE
// =====================================================

const search = ref("");
const statusFilter = ref("All");

const selectedOrder = ref(null);
const showAddForm = ref(false);

const orders = ref([]);

const loading = ref(false);
const savingStatus = ref(false);
const addingOrder = ref(false);

const errorMessage = ref("");
const successMessage = ref("");

// =====================================================
// NEW ORDER FORM
// =====================================================

const newOrder = ref({
  customer: "",
  email: "",
  outfit: "Custom Dress",
  occasion: "",
  fabric: "",
  budget: 0,
  requirements: "",
});

// =====================================================
// TOKEN
// =====================================================

function getToken() {
  return (
    localStorage.getItem("adminAccessToken") ||
    sessionStorage.getItem("adminAccessToken")
  );
}

function getHeaders() {
  const token = getToken();

  return {
    "Content-Type": "application/json",

    ...(token
      ? {
          Authorization: `Bearer ${token}`,
        }
      : {}),
  };
}

// =====================================================
// CLEAR ADMIN SESSION
// =====================================================

function clearAdminSession() {
  localStorage.removeItem("adminAccessToken");
  localStorage.removeItem("adminLoggedIn");
  localStorage.removeItem("adminUser");

  sessionStorage.removeItem("adminAccessToken");
  sessionStorage.removeItem("adminLoggedIn");
  sessionStorage.removeItem("adminUser");
}

// =====================================================
// API REQUEST HELPER
// =====================================================

async function request(url, options = {}) {
  const response = await fetch(url, {
    ...options,

    headers: {
      ...getHeaders(),
      ...(options.headers || {}),
    },
  });

  const data = await response.json().catch(() => null);

  if (!response.ok) {
    const message = Array.isArray(data?.message)
      ? data.message.join(", ")
      : data?.message;

    throw new Error(message || `Request failed with status ${response.status}`);
  }

  return data;
}

// =====================================================
// FORMAT STATUS FROM DATABASE
// =====================================================

function displayStatus(status) {
  const normalized = String(status || "").toUpperCase();

  const statusMap = {
    PENDING: "New",
    REVIEWING: "In Progress",
    ACCEPTED: "Approved",
    IN_PROGRESS: "In Progress",
    COMPLETED: "Completed",
    CANCELLED: "Cancelled",
  };

  return statusMap[normalized] || "New";
}

// =====================================================
// CONVERT UI STATUS TO DATABASE STATUS
// =====================================================

function databaseStatus(status) {
  const statusMap = {
    New: "PENDING",
    "In Progress": "IN_PROGRESS",
    Approved: "ACCEPTED",
    Completed: "COMPLETED",
    Cancelled: "CANCELLED",
  };

  return statusMap[status] || "PENDING";
}

// =====================================================
// FORMAT DATE
// =====================================================

function formatDate(date) {
  if (!date) {
    return "Date not available";
  }

  const parsed = new Date(date);

  if (Number.isNaN(parsed.getTime())) {
    return "Date not available";
  }

  return parsed.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

// =====================================================
// CONVERT BACKEND ORDER TO UI ORDER
// =====================================================

function normalizeOrder(order) {
  const measurements = order?.measurements || {};

  return {
    id: order?.orderNumber || `CUSTOM-${order?.id ?? ""}`,

    databaseId: order?.id,

    customer: order?.user?.name || "Customer",

    email: order?.user?.email || "Not provided",

    phone: order?.user?.phone || "Not provided",

    outfit: order?.dressType || "Custom Dress",

    occasion: measurements?.occasion || "Not specified",

    fabric: order?.fabric || "To be decided",

    color: order?.color || "To be decided",

    budget: Number(order?.budget || 0),

    status: displayStatus(order?.status),

    databaseStatus: order?.status || "PENDING",

    date: formatDate(order?.createdAt),

    measurements: {
      bust: measurements?.bust || "Not provided",
      waist: measurements?.waist || "Not provided",
      hips: measurements?.hips || "Not provided",
      length: measurements?.length || "Not provided",
    },

    requirements: order?.description || "No special requirements provided.",

    images: Array.isArray(order?.images) ? order.images : [],

    raw: order,
  };
}

// =====================================================
// GET ALL CUSTOM ORDERS
// =====================================================

async function fetchCustomOrders() {
  const token = getToken();

  if (!token) {
    router.replace("/admin");
    return;
  }

  loading.value = true;
  errorMessage.value = "";

  try {
    const data = await request(`${API_URL}/custom-orders`);

    const list = Array.isArray(data)
      ? data
      : Array.isArray(data?.orders)
        ? data.orders
        : [];

    orders.value = list.map(normalizeOrder);
  } catch (error) {
    console.error("Custom orders error:", error);

    errorMessage.value = error?.message || "Unable to load custom orders.";

    const message = error?.message?.toLowerCase() || "";

    if (
      message.includes("unauthorized") ||
      message.includes("forbidden") ||
      message.includes("invalid or expired token")
    ) {
      clearAdminSession();
      router.replace("/admin");
    }
  } finally {
    loading.value = false;
  }
}

// =====================================================
// SEARCH + FILTER
// =====================================================

const filteredOrders = computed(() => {
  const query = search.value.toLowerCase().trim();

  return orders.value.filter((order) => {
    const matchesSearch =
      !query ||
      String(order.id).toLowerCase().includes(query) ||
      String(order.customer).toLowerCase().includes(query) ||
      String(order.email).toLowerCase().includes(query) ||
      String(order.outfit).toLowerCase().includes(query);

    const matchesStatus =
      statusFilter.value === "All" || order.status === statusFilter.value;

    return matchesSearch && matchesStatus;
  });
});

// =====================================================
// STATISTICS
// =====================================================

const newCount = computed(() => {
  return orders.value.filter((order) => order.status === "New").length;
});

const progressCount = computed(() => {
  return orders.value.filter((order) => order.status === "In Progress").length;
});

const approvedCount = computed(() => {
  return orders.value.filter((order) => order.status === "Approved").length;
});

const completedCount = computed(() => {
  return orders.value.filter((order) => order.status === "Completed").length;
});

// =====================================================
// VIEW ORDER
// =====================================================

function viewOrder(order) {
  selectedOrder.value = order;
}

// =====================================================
// STATUS STYLE
// =====================================================

function statusClass(status) {
  const styles = {
    New: "bg-[#f3dfdf] text-[#9b4056]",

    "In Progress": "bg-[#eee7f8] text-[#76539b]",

    Approved: "bg-[#e8eefb] text-[#526da8]",

    Completed: "bg-[#e4f3e9] text-[#398152]",

    Cancelled: "bg-red-50 text-red-600",
  };

  return styles[status] || "bg-gray-100 text-gray-600";
}

// =====================================================
// UPDATE STATUS
// =====================================================

async function changeStatus(order, status) {
  if (!order?.databaseId) {
    return;
  }

  const previousStatus = order.status;

  order.status = status;

  savingStatus.value = true;
  errorMessage.value = "";
  successMessage.value = "";

  try {
    const updated = await request(
      `${API_URL}/custom-orders/${order.databaseId}/status`,
      {
        method: "PATCH",

        body: JSON.stringify({
          status: databaseStatus(status),
        }),
      },
    );

    const updatedOrder = normalizeOrder(updated);

    const index = orders.value.findIndex(
      (item) => item.databaseId === order.databaseId,
    );

    if (index !== -1) {
      orders.value[index] = updatedOrder;
    }

    if (selectedOrder.value?.databaseId === order.databaseId) {
      selectedOrder.value = updatedOrder;
    }

    successMessage.value = "Custom order status updated.";

    setTimeout(() => {
      successMessage.value = "";
    }, 2500);
  } catch (error) {
    console.error("Status update error:", error);

    order.status = previousStatus;

    errorMessage.value = error?.message || "Unable to update order status.";
  } finally {
    savingStatus.value = false;
  }
}

// =====================================================
// UPDATE STATUS FROM MODAL
// =====================================================

async function updateSelectedStatus(status) {
  if (!selectedOrder.value) {
    return;
  }

  await changeStatus(selectedOrder.value, status);
}

// =====================================================
// CREATE CUSTOM ORDER
// =====================================================

async function addCustomOrder() {
  addingOrder.value = true;

  errorMessage.value = "";
  successMessage.value = "";

  try {
    /*
     * The current customer-side custom-order endpoint
     * requires a logged-in customer userId.
     *
     * Therefore this admin form cannot directly create
     * a database CustomOrder for an arbitrary customer
     * without first selecting an existing User.
     *
     * We intentionally do not create fake frontend data.
     */

    throw new Error(
      "Admin-created custom orders need a customer account. Please create the customer first, then the customer can submit the custom request.",
    );
  } catch (error) {
    console.error("Create custom order:", error);

    errorMessage.value = error?.message || "Unable to create custom order.";
  } finally {
    addingOrder.value = false;
  }
}

// =====================================================
// LOGOUT
// =====================================================

function logout() {
  clearAdminSession();
  router.replace("/admin");
}

// =====================================================
// INITIAL LOAD
// =====================================================

onMounted(() => {
  fetchCustomOrders();
});
</script>
