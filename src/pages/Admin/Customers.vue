<template>
  <div class="min-h-screen overflow-x-hidden bg-[#fffaf8] text-[#302525]">
    <!-- =========================================================
         DESKTOP SIDEBAR
    ========================================================== -->
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
          class="flex items-center gap-3 rounded-xl bg-[#9b4056] px-4 py-3 text-sm font-semibold text-white shadow-sm"
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
          class="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-[#75686a] transition hover:bg-[#fff0f3] hover:text-[#9b4056]"
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
      <!-- HEADER -->
      <header
        class="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-[#eadedb] bg-[#fffaf8]/95 px-4 backdrop-blur-md sm:h-20 sm:px-8"
      >
        <div>
          <p
            class="text-[10px] font-semibold tracking-[0.22em] text-[#9b4056] sm:text-xs sm:tracking-[0.25em]"
          >
            MAAD FASHIONS
          </p>

          <h2 class="mt-1 text-lg font-bold sm:text-xl">Customers</h2>
        </div>

        <div
          class="flex h-9 w-9 items-center justify-center rounded-full bg-[#f3dfdf] text-sm font-semibold text-[#9b4056] sm:h-10 sm:w-10"
        >
          A
        </div>
      </header>

      <div class="p-4 sm:p-6 lg:p-8">
        <!-- PAGE TITLE -->
        <section
          class="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <p class="text-xs leading-5 text-[#9a8588] sm:text-sm">
              View and manage customers who shop with MAAD Fashions.
            </p>

            <h1
              class="mt-1 font-serif text-3xl font-bold text-[#302525] sm:mt-2 sm:text-4xl"
            >
              Customers
            </h1>
          </div>

          <div
            class="w-full rounded-2xl border border-[#eadedb] bg-white px-5 py-3 shadow-sm sm:w-auto sm:px-6 sm:py-4"
          >
            <p
              class="text-[10px] font-semibold tracking-[0.15em] text-[#9a8588]"
            >
              TOTAL CUSTOMERS
            </p>

            <p class="mt-1 text-xl font-bold text-[#9b4056] sm:text-2xl">
              {{ customers.length }}
            </p>
          </div>
        </section>

        <!-- ERROR -->
        <div
          v-if="errorMessage"
          class="mb-5 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700"
        >
          <div class="flex items-start justify-between gap-3">
            <div>
              <p class="font-bold">Unable to load customers</p>

              <p class="mt-1">
                {{ errorMessage }}
              </p>
            </div>

            <button
              type="button"
              class="text-lg font-bold"
              @click="errorMessage = ''"
            >
              ×
            </button>
          </div>
        </div>

        <!-- =====================================================
             STATS
        ====================================================== -->
        <section class="grid grid-cols-2 gap-3 xl:grid-cols-4 xl:gap-4">
          <!-- TOTAL -->
          <div
            class="rounded-2xl border border-[#eadedb] bg-white p-4 shadow-sm sm:p-5"
          >
            <div class="flex items-center justify-between gap-2">
              <p class="text-xs text-[#806d6d] sm:text-sm">Total Customers</p>

              <div
                class="flex h-9 w-9 items-center justify-center rounded-full bg-[#f3dfdf] text-[#9b4056] sm:h-10 sm:w-10"
              >
                ♙
              </div>
            </div>

            <p class="mt-3 text-2xl font-bold sm:mt-4 sm:text-3xl">
              {{ customers.length }}
            </p>

            <p class="mt-1 text-[10px] text-[#9a8588] sm:text-xs">
              Registered customers
            </p>
          </div>

          <!-- NEW -->
          <div
            class="rounded-2xl border border-[#eadedb] bg-white p-4 shadow-sm sm:p-5"
          >
            <div class="flex items-center justify-between gap-2">
              <p class="text-xs text-[#806d6d] sm:text-sm">New Customers</p>

              <div
                class="flex h-9 w-9 items-center justify-center rounded-full bg-[#e8eefb] text-[#526da8] sm:h-10 sm:w-10"
              >
                +
              </div>
            </div>

            <p class="mt-3 text-2xl font-bold sm:mt-4 sm:text-3xl">
              {{ newCustomers }}
            </p>

            <p class="mt-1 text-[10px] text-[#9a8588] sm:text-xs">
              Joined recently
            </p>
          </div>

          <!-- ACTIVE -->
          <div
            class="rounded-2xl border border-[#eadedb] bg-white p-4 shadow-sm sm:p-5"
          >
            <div class="flex items-center justify-between gap-2">
              <p class="text-xs text-[#806d6d] sm:text-sm">Active</p>

              <div
                class="flex h-9 w-9 items-center justify-center rounded-full bg-[#e4f3e9] text-[#398152] sm:h-10 sm:w-10"
              >
                ✓
              </div>
            </div>

            <p class="mt-3 text-2xl font-bold sm:mt-4 sm:text-3xl">
              {{ activeCustomers }}
            </p>

            <p class="mt-1 text-[10px] text-[#9a8588] sm:text-xs">
              Active accounts
            </p>
          </div>

          <!-- VIP -->
          <div
            class="rounded-2xl border border-[#eadedb] bg-white p-4 shadow-sm sm:p-5"
          >
            <div class="flex items-center justify-between gap-2">
              <p class="text-xs text-[#806d6d] sm:text-sm">VIP Customers</p>

              <div
                class="flex h-9 w-9 items-center justify-center rounded-full bg-[#fff1d6] text-[#b7791f] sm:h-10 sm:w-10"
              >
                ✦
              </div>
            </div>

            <p class="mt-3 text-2xl font-bold sm:mt-4 sm:text-3xl">
              {{ vipCustomers }}
            </p>

            <p class="mt-1 text-[10px] text-[#9a8588] sm:text-xs">
              Loyal customers
            </p>
          </div>
        </section>

        <!-- =====================================================
             SEARCH
        ====================================================== -->
        <section
          class="mt-6 rounded-2xl border border-[#eadedb] bg-white p-3 shadow-sm sm:mt-7 sm:p-4"
        >
          <div class="relative">
            <span
              class="absolute left-4 top-1/2 -translate-y-1/2 text-[#9a8588]"
            >
              ⌕
            </span>

            <input
              v-model="search"
              type="text"
              placeholder="Search customer name, email or phone..."
              class="w-full rounded-xl border border-[#eadedb] bg-[#fffaf8] py-3 pl-11 pr-4 text-sm outline-none transition focus:border-[#9b4056] focus:ring-2 focus:ring-[#9b4056]/10"
            />
          </div>
        </section>

        <!-- =====================================================
             CUSTOMER TABLE
        ====================================================== -->
        <section
          class="mt-5 overflow-hidden rounded-2xl border border-[#eadedb] bg-white shadow-sm sm:mt-6"
        >
          <!-- LOADING -->
          <div
            v-if="loading"
            class="flex flex-col items-center justify-center px-6 py-20 text-center"
          >
            <div
              class="h-10 w-10 animate-spin rounded-full border-2 border-[#eadedb] border-t-[#9b4056]"
            ></div>

            <p class="mt-4 text-sm font-semibold text-[#75686a]">
              Loading customers...
            </p>
          </div>

          <template v-else>
            <!-- DESKTOP -->
            <div class="hidden overflow-x-auto md:block">
              <table class="w-full min-w-[900px]">
                <thead>
                  <tr class="border-b border-[#eadedb] bg-[#fffaf8]">
                    <th
                      class="px-6 py-4 text-left text-xs font-bold tracking-[0.12em] text-[#806d6d]"
                    >
                      CUSTOMER
                    </th>

                    <th
                      class="px-6 py-4 text-left text-xs font-bold tracking-[0.12em] text-[#806d6d]"
                    >
                      EMAIL
                    </th>

                    <th
                      class="px-6 py-4 text-left text-xs font-bold tracking-[0.12em] text-[#806d6d]"
                    >
                      PHONE
                    </th>

                    <th
                      class="px-6 py-4 text-left text-xs font-bold tracking-[0.12em] text-[#806d6d]"
                    >
                      ORDERS
                    </th>

                    <th
                      class="px-6 py-4 text-left text-xs font-bold tracking-[0.12em] text-[#806d6d]"
                    >
                      SPENT
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
                    v-for="customer in filteredCustomers"
                    :key="customer.id"
                    class="border-b border-[#f0e6e3] transition hover:bg-[#fffaf8]"
                  >
                    <!-- CUSTOMER -->
                    <td class="px-6 py-5">
                      <div class="flex items-center gap-3">
                        <div
                          class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f3dfdf] font-semibold text-[#9b4056]"
                        >
                          {{ getInitial(customer.name) }}
                        </div>

                        <div>
                          <p class="font-semibold">
                            {{ customer.name || "Customer" }}
                          </p>

                          <p class="mt-1 text-xs text-[#9a8588]">
                            {{ formatJoinedDate(customer.joined) }}
                          </p>
                        </div>
                      </div>
                    </td>

                    <!-- EMAIL -->
                    <td class="px-6 py-5 text-sm text-[#75686a]">
                      {{ customer.email || "Not provided" }}
                    </td>

                    <!-- PHONE -->
                    <td class="px-6 py-5 text-sm text-[#75686a]">
                      {{ customer.phone || "Not provided" }}
                    </td>

                    <!-- ORDERS -->
                    <td class="px-6 py-5">
                      <span
                        class="rounded-full bg-[#f8e9ed] px-3 py-1 text-xs font-semibold text-[#9b4056]"
                      >
                        {{ customer.orders }}
                      </span>
                    </td>

                    <!-- SPENT -->
                    <td class="px-6 py-5 font-semibold">
                      ₹{{ formatSpent(customer.spent) }}
                    </td>

                    <!-- STATUS -->
                    <td class="px-6 py-5">
                      <span
                        :class="customerStatusClass(customer.status)"
                        class="rounded-full px-3 py-1.5 text-xs font-semibold"
                      >
                        {{ customer.status }}
                      </span>
                    </td>

                    <!-- ACTION -->
                    <td class="px-6 py-5 text-right">
                      <button
                        type="button"
                        @click="viewCustomer(customer)"
                        class="rounded-lg border border-[#eadedb] px-3 py-2 text-xs font-semibold text-[#9b4056] transition hover:bg-[#fff0f3]"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- MOBILE -->
            <div class="divide-y divide-[#f0e6e3] md:hidden">
              <div
                v-for="customer in filteredCustomers"
                :key="customer.id"
                class="p-4"
              >
                <div class="flex items-center justify-between gap-3">
                  <div class="flex min-w-0 items-center gap-3">
                    <div
                      class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f3dfdf] font-semibold text-[#9b4056]"
                    >
                      {{ getInitial(customer.name) }}
                    </div>

                    <div class="min-w-0">
                      <p class="truncate font-semibold">
                        {{ customer.name || "Customer" }}
                      </p>

                      <p class="mt-0.5 truncate text-xs text-[#9a8588]">
                        {{ customer.email || "No email" }}
                      </p>
                    </div>
                  </div>

                  <span
                    :class="customerStatusClass(customer.status)"
                    class="shrink-0 rounded-full px-2.5 py-1 text-[10px] font-semibold"
                  >
                    {{ customer.status }}
                  </span>
                </div>

                <div
                  class="mt-3 flex items-center gap-2 text-xs text-[#75686a]"
                >
                  <span>☎</span>

                  <span class="truncate">
                    {{ customer.phone || "Phone not provided" }}
                  </span>
                </div>

                <div
                  class="mt-3 grid grid-cols-2 gap-2 rounded-xl bg-[#fffaf8] p-3"
                >
                  <div>
                    <p
                      class="text-[10px] font-medium tracking-[0.08em] text-[#9a8588]"
                    >
                      ORDERS
                    </p>

                    <p class="mt-1 text-sm font-bold">
                      {{ customer.orders }}
                    </p>
                  </div>

                  <div>
                    <p
                      class="text-[10px] font-medium tracking-[0.08em] text-[#9a8588]"
                    >
                      TOTAL SPENT
                    </p>

                    <p class="mt-1 text-sm font-bold">
                      ₹{{ formatSpent(customer.spent) }}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  @click="viewCustomer(customer)"
                  class="mt-3 w-full rounded-xl border border-[#eadedb] py-2.5 text-sm font-semibold text-[#9b4056] transition hover:bg-[#fff0f3]"
                >
                  View Customer
                </button>
              </div>
            </div>

            <!-- EMPTY -->
            <div
              v-if="filteredCustomers.length === 0"
              class="px-6 py-16 text-center"
            >
              <div class="text-4xl">♙</div>

              <h3 class="mt-4 text-lg font-bold">No customers found</h3>

              <p class="mt-2 text-sm text-[#806d6d]">
                {{
                  search
                    ? "Try another search."
                    : "No customers have registered yet."
                }}
              </p>
            </div>
          </template>
        </section>
      </div>
    </main>

    <!-- =========================================================
         CUSTOMER MODAL
    ========================================================== -->
    <div
      v-if="selectedCustomer"
      class="fixed inset-0 z-50 flex items-center justify-center bg-[#302525]/40 px-3 py-4 backdrop-blur-sm sm:px-4"
      @click.self="selectedCustomer = null"
    >
      <div
        class="max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-3xl bg-white p-5 shadow-2xl sm:p-8"
      >
        <div class="flex items-start justify-between gap-4">
          <div class="flex min-w-0 items-center gap-3 sm:gap-4">
            <div
              class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#f3dfdf] text-lg font-bold text-[#9b4056] sm:h-14 sm:w-14 sm:text-xl"
            >
              {{ getInitial(selectedCustomer.name) }}
            </div>

            <div class="min-w-0">
              <p
                class="text-[10px] font-bold tracking-[0.2em] text-[#9b4056] sm:text-xs"
              >
                CUSTOMER
              </p>

              <h2
                class="mt-1 truncate font-serif text-xl font-bold sm:text-2xl"
              >
                {{ selectedCustomer.name || "Customer" }}
              </h2>
            </div>
          </div>

          <button
            type="button"
            @click="selectedCustomer = null"
            class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#fff0f3] text-lg text-[#9b4056]"
          >
            ×
          </button>
        </div>

        <div class="mt-6 space-y-3">
          <div class="rounded-2xl bg-[#fffaf8] p-4">
            <p
              class="text-[10px] font-semibold tracking-[0.12em] text-[#9a8588]"
            >
              EMAIL
            </p>

            <p class="mt-2 break-all text-sm font-medium sm:text-base">
              {{ selectedCustomer.email || "Not provided" }}
            </p>
          </div>

          <div class="rounded-2xl bg-[#fffaf8] p-4">
            <p
              class="text-[10px] font-semibold tracking-[0.12em] text-[#9a8588]"
            >
              PHONE
            </p>

            <p class="mt-2 text-sm font-medium sm:text-base">
              {{ selectedCustomer.phone || "Not provided" }}
            </p>
          </div>

          <div class="grid grid-cols-2 gap-3">
            <div class="rounded-2xl bg-[#fffaf8] p-4">
              <p class="text-[10px] text-[#9a8588]">ORDERS</p>

              <p class="mt-2 text-xl font-bold">
                {{ selectedCustomer.orders }}
              </p>
            </div>

            <div class="rounded-2xl bg-[#fffaf8] p-4">
              <p class="text-[10px] text-[#9a8588]">TOTAL SPENT</p>

              <p class="mt-2 text-xl font-bold">
                ₹{{ formatSpent(selectedCustomer.spent) }}
              </p>
            </div>
          </div>

          <div class="rounded-2xl bg-[#fffaf8] p-4">
            <p class="text-[10px] text-[#9a8588]">MEMBER SINCE</p>

            <p class="mt-2 text-sm font-semibold sm:text-base">
              {{
                selectedCustomer.joined
                  ? formatFullDate(selectedCustomer.joined)
                  : "Recently joined"
              }}
            </p>
          </div>

          <div class="rounded-2xl bg-[#fffaf8] p-4">
            <p class="text-[10px] text-[#9a8588]">ACCOUNT STATUS</p>

            <span
              :class="customerStatusClass(selectedCustomer.status)"
              class="mt-2 inline-flex rounded-full px-3 py-1.5 text-xs font-semibold"
            >
              {{ selectedCustomer.status }}
            </span>
          </div>
        </div>

        <button
          type="button"
          @click="selectedCustomer = null"
          class="mt-6 w-full rounded-full bg-[#9b4056] py-3.5 text-sm font-semibold text-white transition hover:bg-[#84354a]"
        >
          Close
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { RouterLink, useRouter } from "vue-router";

const router = useRouter();

const API_URL = (
  import.meta.env.VITE_API_URL || "http://localhost:3000"
).replace(/\/$/, "");

const customers = ref([]);
const loading = ref(false);
const errorMessage = ref("");
const search = ref("");
const selectedCustomer = ref(null);

/* =========================================================
   EXACT SAME TOKEN LOGIC AS DASHBOARD
========================================================= */

const getToken = () => {
  return (
    localStorage.getItem("adminAccessToken") ||
    sessionStorage.getItem("adminAccessToken")
  );
};

const getHeaders = () => {
  const token = getToken();

  return {
    "Content-Type": "application/json",
    ...(token
      ? {
          Authorization: `Bearer ${token}`,
        }
      : {}),
  };
};

/* =========================================================
   FETCH CUSTOMERS
========================================================= */

const fetchCustomers = async () => {
  loading.value = true;
  errorMessage.value = "";

  try {
    const token = getToken();

    console.log("=================================");
    console.log("MAAD CUSTOMERS FRONTEND");
    console.log("API:", `${API_URL}/customers`);
    console.log("Token exists:", !!token);
    console.log(
      "Token preview:",
      token ? `${token.substring(0, 20)}...` : "NO TOKEN",
    );
    console.log("=================================");

    if (!token) {
      errorMessage.value = "Admin login session not found. Please login again.";
      return;
    }

    const response = await fetch(`${API_URL}/customers`, {
      method: "GET",
      headers: getHeaders(),
    });

    console.log("Customers response status:", response.status);

    const data = await response.json().catch(() => null);

    console.log("Customers response:", data);

    if (!response.ok) {
      const message = Array.isArray(data?.message)
        ? data.message.join(", ")
        : data?.message || `Request failed with status ${response.status}`;

      throw new Error(message);
    }

    /*
      Backend normally returns:

      [
        {
          id,
          name,
          email,
          phone,
          createdAt,
          updatedAt,
          orders: [],
          _count: {
            orders,
            customOrders
          }
        }
      ]
    */

    let customerList = [];

    if (Array.isArray(data)) {
      customerList = data;
    } else if (Array.isArray(data?.customers)) {
      customerList = data.customers;
    } else if (Array.isArray(data?.data)) {
      customerList = data.data;
    }

    console.log("Customer list:", customerList);

    customers.value = customerList.map(normalizeCustomer);

    console.log("Final customers:", customers.value);
  } catch (error) {
    console.error("CUSTOMERS FRONTEND ERROR:", error);

    errorMessage.value = error?.message || "Unable to load customers.";
  } finally {
    loading.value = false;
  }
};

/* =========================================================
   NORMALIZE BACKEND DATA
========================================================= */

const normalizeCustomer = (customer) => {
  const orderList = Array.isArray(customer?.orders) ? customer.orders : [];

  const orderCount =
    typeof customer?.orders === "number"
      ? customer.orders
      : Number(customer?._count?.orders ?? orderList.length ?? 0);

  const spent = orderList.reduce((total, order) => {
    return total + Number(order?.totalAmount || 0);
  }, 0);

  const joined =
    customer?.createdAt || customer?.joined || customer?.updatedAt || null;

  let status = "Active";

  if (orderCount >= 5) {
    status = "VIP";
  } else if (joined) {
    const joinedTime = new Date(joined).getTime();

    const thirtyDays = 30 * 24 * 60 * 60 * 1000;

    if (!Number.isNaN(joinedTime) && Date.now() - joinedTime <= thirtyDays) {
      status = "New";
    }
  }

  return {
    id: customer?.id,
    name: customer?.name || "Customer",
    email: customer?.email || "",
    phone: customer?.phone || "",
    joined,
    orders: orderCount,
    spent,
    status,
    orderDetails: orderList,
    customOrders: Number(customer?._count?.customOrders || 0),
  };
};

/* =========================================================
   SEARCH
========================================================= */

const filteredCustomers = computed(() => {
  const query = search.value.trim().toLowerCase();

  if (!query) {
    return customers.value;
  }

  return customers.value.filter((customer) => {
    return (
      String(customer.name || "")
        .toLowerCase()
        .includes(query) ||
      String(customer.email || "")
        .toLowerCase()
        .includes(query) ||
      String(customer.phone || "")
        .toLowerCase()
        .includes(query)
    );
  });
});

/* =========================================================
   STATS
========================================================= */

const newCustomers = computed(() => {
  return customers.value.filter((customer) => customer.status === "New").length;
});

const activeCustomers = computed(() => {
  return customers.value.filter((customer) => customer.status === "Active")
    .length;
});

const vipCustomers = computed(() => {
  return customers.value.filter((customer) => customer.status === "VIP").length;
});

/* =========================================================
   HELPERS
========================================================= */

const getInitial = (name) => {
  return String(name || "C")
    .trim()
    .charAt(0)
    .toUpperCase();
};

const formatSpent = (amount) => {
  return Number(amount || 0).toLocaleString("en-IN", {
    maximumFractionDigits: 2,
  });
};

const formatJoinedDate = (date) => {
  if (!date) {
    return "Joined recently";
  }

  const parsed = new Date(date);

  if (Number.isNaN(parsed.getTime())) {
    return "Joined recently";
  }

  return `Joined ${parsed.toLocaleDateString("en-IN", {
    month: "short",
    year: "numeric",
  })}`;
};

const formatFullDate = (date) => {
  if (!date) {
    return "Recently joined";
  }

  const parsed = new Date(date);

  if (Number.isNaN(parsed.getTime())) {
    return "Recently joined";
  }

  return parsed.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

const customerStatusClass = (status) => {
  if (status === "VIP") {
    return "bg-[#fff1d6] text-[#a56a13]";
  }

  if (status === "New") {
    return "bg-[#e8eefb] text-[#526da8]";
  }

  return "bg-[#e4f3e9] text-[#398152]";
};

/* =========================================================
   VIEW CUSTOMER
========================================================= */

const viewCustomer = (customer) => {
  selectedCustomer.value = customer;
};

/* =========================================================
   LOGOUT
========================================================= */

const logout = () => {
  localStorage.removeItem("adminAccessToken");

  localStorage.removeItem("adminLoggedIn");

  localStorage.removeItem("adminUser");

  sessionStorage.removeItem("adminAccessToken");

  sessionStorage.removeItem("adminLoggedIn");

  sessionStorage.removeItem("adminUser");

  router.push("/admin");
};

/* =========================================================
   LOAD
========================================================= */

onMounted(() => {
  fetchCustomers();
});
</script>
