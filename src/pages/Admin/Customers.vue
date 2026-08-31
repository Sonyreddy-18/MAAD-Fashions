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
      <!-- TOP BAR -->
      <header
        class="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-[#eadedb] bg-[#fffaf8]/95 px-5 backdrop-blur-md sm:px-8"
      >
        <div>
          <p class="text-xs font-semibold tracking-[0.25em] text-[#9b4056]">
            MAAD FASHIONS
          </p>

          <h2 class="mt-1 text-xl font-bold">Customers</h2>
        </div>

        <div
          class="flex h-10 w-10 items-center justify-center rounded-full bg-[#f3dfdf] font-semibold text-[#9b4056]"
        >
          A
        </div>
      </header>

      <div class="p-5 sm:p-8">
        <section
          class="mb-7 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"
        >
          <div>
            <p class="text-sm text-[#9a8588]">
              View and manage customers who shop with MAAD Fashions.
            </p>

            <h1 class="mt-2 font-serif text-4xl font-bold text-[#302525]">
              Customers
            </h1>
          </div>

          <div
            class="rounded-2xl border border-[#eadedb] bg-white px-6 py-4 shadow-sm"
          >
            <p class="text-xs font-semibold tracking-[0.15em] text-[#9a8588]">
              TOTAL CUSTOMERS
            </p>

            <p class="mt-1 text-2xl font-bold text-[#9b4056]">
              {{ customers.length }}
            </p>
          </div>
        </section>

        <section class="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <!-- Total Customers -->
          <div
            class="rounded-2xl border border-[#eadedb] bg-white p-5 shadow-sm"
          >
            <div class="flex items-center justify-between">
              <p class="text-sm text-[#806d6d]">Total Customers</p>

              <div
                class="flex h-10 w-10 items-center justify-center rounded-full bg-[#f3dfdf] text-[#9b4056]"
              >
                ♙
              </div>
            </div>

            <p class="mt-4 text-3xl font-bold">
              {{ customers.length }}
            </p>

            <p class="mt-1 text-xs text-[#9a8588]">Registered customers</p>
          </div>

          <div
            class="rounded-2xl border border-[#eadedb] bg-white p-5 shadow-sm"
          >
            <div class="flex items-center justify-between">
              <p class="text-sm text-[#806d6d]">New Customers</p>

              <div
                class="flex h-10 w-10 items-center justify-center rounded-full bg-[#e8eefb] text-[#526da8]"
              >
                +
              </div>
            </div>

            <p class="mt-4 text-3xl font-bold">
              {{ newCustomers }}
            </p>

            <p class="mt-1 text-xs text-[#9a8588]">Joined recently</p>
          </div>

          <div
            class="rounded-2xl border border-[#eadedb] bg-white p-5 shadow-sm"
          >
            <div class="flex items-center justify-between">
              <p class="text-sm text-[#806d6d]">Active</p>

              <div
                class="flex h-10 w-10 items-center justify-center rounded-full bg-[#e4f3e9] text-[#398152]"
              >
                ✓
              </div>
            </div>

            <p class="mt-4 text-3xl font-bold">
              {{ activeCustomers }}
            </p>

            <p class="mt-1 text-xs text-[#9a8588]">Active accounts</p>
          </div>

          <div
            class="rounded-2xl border border-[#eadedb] bg-white p-5 shadow-sm"
          >
            <div class="flex items-center justify-between">
              <p class="text-sm text-[#806d6d]">VIP Customers</p>

              <div
                class="flex h-10 w-10 items-center justify-center rounded-full bg-[#fff1d6] text-[#b7791f]"
              >
                ✦
              </div>
            </div>

            <p class="mt-4 text-3xl font-bold">
              {{ vipCustomers }}
            </p>

            <p class="mt-1 text-xs text-[#9a8588]">Loyal customers</p>
          </div>
        </section>

        <section
          class="mt-7 rounded-2xl border border-[#eadedb] bg-white p-4 shadow-sm"
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

        <section
          class="mt-6 overflow-hidden rounded-2xl border border-[#eadedb] bg-white shadow-sm"
        >
          <div class="hidden overflow-x-auto md:block">
            <table class="w-full min-w-[850px]">
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
                  <td class="px-6 py-5">
                    <div class="flex items-center gap-3">
                      <div
                        class="flex h-11 w-11 items-center justify-center rounded-full bg-[#f3dfdf] font-semibold text-[#9b4056]"
                      >
                        {{ customer.name.charAt(0) }}
                      </div>

                      <div>
                        <p class="font-semibold">
                          {{ customer.name }}
                        </p>

                        <p class="mt-1 text-xs text-[#9a8588]">
                          {{ customer.joined }}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td class="px-6 py-5 text-sm text-[#75686a]">
                    {{ customer.email }}
                  </td>

                  <td class="px-6 py-5 text-sm text-[#75686a]">
                    {{ customer.phone }}
                  </td>

                  <td class="px-6 py-5">
                    <span
                      class="rounded-full bg-[#f8e9ed] px-3 py-1 text-xs font-semibold text-[#9b4056]"
                    >
                      {{ customer.orders }}
                    </span>
                  </td>

                  <td class="px-6 py-5 font-semibold">
                    ₹{{ customer.spent.toLocaleString("en-IN") }}
                  </td>

                  <td class="px-6 py-5">
                    <span
                      :class="customerStatusClass(customer.status)"
                      class="rounded-full px-3 py-1.5 text-xs font-semibold"
                    >
                      {{ customer.status }}
                    </span>
                  </td>

                  <td class="px-6 py-5 text-right">
                    <button
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

          <div class="divide-y divide-[#f0e6e3] md:hidden">
            <div
              v-for="customer in filteredCustomers"
              :key="customer.id"
              class="p-5"
            >
              <div class="flex items-center justify-between gap-4">
                <div class="flex items-center gap-3">
                  <div
                    class="flex h-11 w-11 items-center justify-center rounded-full bg-[#f3dfdf] font-semibold text-[#9b4056]"
                  >
                    {{ customer.name.charAt(0) }}
                  </div>

                  <div>
                    <p class="font-semibold">
                      {{ customer.name }}
                    </p>

                    <p class="text-xs text-[#9a8588]">
                      {{ customer.email }}
                    </p>
                  </div>
                </div>

                <span
                  :class="customerStatusClass(customer.status)"
                  class="rounded-full px-3 py-1 text-xs font-semibold"
                >
                  {{ customer.status }}
                </span>
              </div>

              <div
                class="mt-4 grid grid-cols-2 gap-3 rounded-xl bg-[#fffaf8] p-4"
              >
                <div>
                  <p class="text-xs text-[#9a8588]">ORDERS</p>

                  <p class="mt-1 font-bold">
                    {{ customer.orders }}
                  </p>
                </div>

                <div>
                  <p class="text-xs text-[#9a8588]">TOTAL SPENT</p>

                  <p class="mt-1 font-bold">
                    ₹{{ customer.spent.toLocaleString("en-IN") }}
                  </p>
                </div>
              </div>

              <button
                @click="viewCustomer(customer)"
                class="mt-4 w-full rounded-xl border border-[#eadedb] py-3 text-sm font-semibold text-[#9b4056]"
              >
                View Customer
              </button>
            </div>
          </div>

          <div
            v-if="filteredCustomers.length === 0"
            class="px-6 py-16 text-center"
          >
            <div class="text-4xl">⌕</div>

            <h3 class="mt-4 text-lg font-bold">No customers found</h3>

            <p class="mt-2 text-sm text-[#806d6d]">
              Try searching with a different name or email.
            </p>
          </div>
        </section>
      </div>
    </main>

    <div
      v-if="selectedCustomer"
      class="fixed inset-0 z-50 flex items-center justify-center bg-[#302525]/40 px-4 backdrop-blur-sm"
      @click.self="selectedCustomer = null"
    >
      <div class="w-full max-w-lg rounded-3xl bg-white p-6 shadow-2xl sm:p-8">
        <!-- MODAL HEADER -->
        <div class="flex items-start justify-between">
          <div class="flex items-center gap-4">
            <div
              class="flex h-14 w-14 items-center justify-center rounded-full bg-[#f3dfdf] text-xl font-bold text-[#9b4056]"
            >
              {{ selectedCustomer.name.charAt(0) }}
            </div>

            <div>
              <p class="text-xs font-bold tracking-[0.2em] text-[#9b4056]">
                CUSTOMER
              </p>

              <h2 class="mt-1 font-serif text-2xl font-bold">
                {{ selectedCustomer.name }}
              </h2>
            </div>
          </div>

          <button
            @click="selectedCustomer = null"
            class="flex h-9 w-9 items-center justify-center rounded-full bg-[#fff0f3] text-[#9b4056]"
          >
            ×
          </button>
        </div>

        <div class="mt-7 space-y-4">
          <div class="rounded-2xl bg-[#fffaf8] p-4">
            <p class="text-xs font-semibold tracking-[0.12em] text-[#9a8588]">
              EMAIL
            </p>

            <p class="mt-2 font-medium">
              {{ selectedCustomer.email }}
            </p>
          </div>

          <div class="rounded-2xl bg-[#fffaf8] p-4">
            <p class="text-xs font-semibold tracking-[0.12em] text-[#9a8588]">
              PHONE
            </p>

            <p class="mt-2 font-medium">
              {{ selectedCustomer.phone }}
            </p>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div class="rounded-2xl bg-[#fffaf8] p-4">
              <p class="text-xs text-[#9a8588]">ORDERS</p>

              <p class="mt-2 text-xl font-bold">
                {{ selectedCustomer.orders }}
              </p>
            </div>

            <div class="rounded-2xl bg-[#fffaf8] p-4">
              <p class="text-xs text-[#9a8588]">TOTAL SPENT</p>

              <p class="mt-2 text-xl font-bold">
                ₹{{ selectedCustomer.spent.toLocaleString("en-IN") }}
              </p>
            </div>
          </div>

          <div class="rounded-2xl bg-[#fffaf8] p-4">
            <p class="text-xs text-[#9a8588]">MEMBER SINCE</p>

            <p class="mt-2 font-semibold">
              {{ selectedCustomer.joined }}
            </p>
          </div>
        </div>

        <button
          @click="selectedCustomer = null"
          class="mt-7 w-full rounded-full bg-[#9b4056] py-3.5 font-semibold text-white transition hover:bg-[#84354a]"
        >
          Close
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { RouterLink, useRouter } from "vue-router";

const router = useRouter();

const search = ref("");
const selectedCustomer = ref(null);

const customers = ref([
  {
    id: 1,
    name: "Ananya Reddy",
    email: "ananya@example.com",
    phone: "+91 98765 43210",
    orders: 8,
    spent: 28450,
    status: "VIP",
    joined: "Joined Aug 2026",
  },

  {
    id: 2,
    name: "Priya Sharma",
    email: "priya@example.com",
    phone: "+91 91234 56789",
    orders: 5,
    spent: 16780,
    status: "Active",
    joined: "Joined Aug 2026",
  },

  {
    id: 3,
    name: "Kavya Rao",
    email: "kavya@example.com",
    phone: "+91 99887 66554",
    orders: 3,
    spent: 12400,
    status: "Active",
    joined: "Joined Jul 2026",
  },

  {
    id: 4,
    name: "Sneha Patel",
    email: "sneha@example.com",
    phone: "+91 97654 32109",
    orders: 2,
    spent: 7898,
    status: "New",
    joined: "Joined Aug 2026",
  },

  {
    id: 5,
    name: "Meera Kapoor",
    email: "meera@example.com",
    phone: "+91 93456 78120",
    orders: 7,
    spent: 23990,
    status: "VIP",
    joined: "Joined Jun 2026",
  },

  {
    id: 6,
    name: "Divya Nair",
    email: "divya@example.com",
    phone: "+91 94567 81234",
    orders: 1,
    spent: 3899,
    status: "New",
    joined: "Joined Aug 2026",
  },

  {
    id: 7,
    name: "Riya Verma",
    email: "riya@example.com",
    phone: "+91 90123 45678",
    orders: 4,
    spent: 14200,
    status: "Active",
    joined: "Joined Jul 2026",
  },

  {
    id: 8,
    name: "Pooja Singh",
    email: "pooja@example.com",
    phone: "+91 92345 67890",
    orders: 6,
    spent: 19850,
    status: "Active",
    joined: "Joined May 2026",
  },
]);

const filteredCustomers = computed(() => {
  const query = search.value.toLowerCase().trim();

  if (!query) {
    return customers.value;
  }

  return customers.value.filter((customer) => {
    return (
      customer.name.toLowerCase().includes(query) ||
      customer.email.toLowerCase().includes(query) ||
      customer.phone.toLowerCase().includes(query)
    );
  });
});

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

function viewCustomer(customer) {
  selectedCustomer.value = customer;
}

function customerStatusClass(status) {
  const classes = {
    VIP: "bg-[#fff1d6] text-[#a56a13]",
    Active: "bg-[#e4f3e9] text-[#398152]",
    New: "bg-[#e8eefb] text-[#526da8]",
  };

  return classes[status] || "bg-gray-100 text-gray-600";
}

function logout() {
  localStorage.removeItem("adminLoggedIn");
  router.push("/admin");
}
</script>
