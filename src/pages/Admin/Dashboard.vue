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
          class="ml-auto flex h-9 w-9 items-center justify-center rounded-full text-xl text-[#806d6d] hover:bg-[#fff0f3] lg:hidden"
          @click="sidebarOpen = false"
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
          class="mb-2 flex items-center gap-3 rounded-xl bg-[#f8e6ea] px-4 py-3 text-sm font-semibold text-[#9b4056]"
          @click="sidebarOpen = false"
        >
          <span
            class="flex h-7 w-7 items-center justify-center rounded-lg bg-[#b83259] text-sm text-white"
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

       
          <p class="text-[10px] font-bold tracking-[0.3em] text-[#9b4056]">
            MAAD FASHIONS
          </p>

          <h1 class="mt-1 font-serif text-xl font-semibold">Dashboard</h1>
        </div>

      
        <div class="ml-auto flex items-center gap-3">
       
          <button
            class="relative flex h-10 w-10 items-center justify-center rounded-full border border-[#ead9d8] bg-white text-[#806d6d] transition hover:border-[#b83259] hover:text-[#b83259]"
          >
            ♡

            <span
              class="absolute right-1 top-1 h-2 w-2 rounded-full bg-[#b83259]"
            ></span>
          </button>

         
          <div
            class="flex items-center gap-3 rounded-full border border-[#ead9d8] bg-white py-1.5 pl-1.5 pr-4"
          >
            <div
              class="flex h-9 w-9 items-center justify-center rounded-full bg-[#f3dce2] font-serif font-bold text-[#9b4056]"
            >
              {{ adminInitial }}
            </div>

            <div class="hidden sm:block">
              <p class="text-xs font-semibold text-[#302525]">
                {{ adminName }}
              </p>

              <p class="text-[10px] text-[#9a8588]">Administrator</p>
            </div>
         </div>
        
        
      </header>
    

     
      <main class="px-5 py-8 sm:px-8 lg:px-10">
     
        <section class="mb-8">
          <div
            class="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"
          >
            <div>
              <p class="text-xs font-semibold tracking-[0.25em] text-[#9b4056]">
                WELCOME BACK
              </p>

              <h2
                class="mt-2 font-serif text-3xl font-semibold text-[#302525] sm:text-4xl"
              >
                Good evening<span v-if="adminName">, {{ adminName }}</span
                >.
              </h2>

              <p class="mt-2 text-sm text-[#806d6d]">
                Here's a quick look at your MAAD Fashions store.
              </p>
            </div>

            <RouterLink
              to="/admin/products"
              class="inline-flex items-center justify-center rounded-full bg-[#9b4056] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#84354a]"
            >
              + Add Product
            </RouterLink>
          </div>
        </section>

       
        <div
          v-if="loading"
          class="mb-6 rounded-2xl border border-[#ead9d8] bg-white p-5 text-sm text-[#806d6d]"
        >
          Loading dashboard data...
        </div>

        
        <div
          v-if="errorMessage"
          class="mb-6 rounded-2xl border border-red-200 bg-red-50 p-5 text-sm text-red-600"
        >
          {{ errorMessage }}
        </div>

       
        <section class="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
         
          <div
            class="rounded-2xl border border-[#ead9d8] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div class="flex items-start justify-between">
              <div>
                <p class="text-sm text-[#806d6d]">Products</p>

                <p
                  class="mt-3 font-serif text-4xl font-semibold text-[#302525]"
                >
                  {{ stats.products }}
                </p>

                <p class="mt-2 text-xs text-[#9b4056]">Products in store</p>
              </div>

              <div
                class="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f7e5e9] text-xl text-[#9b4056]"
              >
                ◇
              </div>
            </div>
          </div>

         
          <div
            class="rounded-2xl border border-[#ead9d8] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div class="flex items-start justify-between">
              <div>
                <p class="text-sm text-[#806d6d]">Orders</p>

                <p
                  class="mt-3 font-serif text-4xl font-semibold text-[#302525]"
                >
                  {{ stats.orders }}
                </p>

                <p class="mt-2 text-xs text-green-600">Total customer orders</p>
              </div>

              <div
                class="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f7e5e9] text-xl text-[#9b4056]"
              >
                ▣
              </div>
            </div>
          </div>

        
          <div
            class="rounded-2xl border border-[#ead9d8] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div class="flex items-start justify-between">
              <div>
                <p class="text-sm text-[#806d6d]">Customers</p>

                <p
                  class="mt-3 font-serif text-4xl font-semibold text-[#302525]"
                >
                  {{ stats.customers }}
                </p>

                <p class="mt-2 text-xs text-green-600">Registered customers</p>
              </div>

              <div
                class="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f7e5e9] text-xl text-[#9b4056]"
              >
                ♙
              </div>
            </div>
          </div>

        
          <div
            class="rounded-2xl bg-[#302525] p-6 text-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div class="flex items-start justify-between">
              <div>
                <p class="text-sm text-white/60">Total Sales</p>

                <p class="mt-3 font-serif text-4xl font-semibold">
                  {{ formattedSales }}
                </p>

                <p class="mt-2 text-xs text-[#f3b8c5]">From all orders</p>
              </div>

              <div
                class="flex h-12 w-12 items-center justify-center rounded-xl bg-[#b83259] text-lg"
              >
                ₹
              </div>
            </div>
          </div>
        </section>

       
        <section class="mt-8 rounded-2xl border border-[#ead9d8] bg-white p-6">
          <div>
            <p class="text-[10px] font-bold tracking-[0.3em] text-[#9b4056]">
              QUICK ACTIONS
            </p>

            <h3 class="mt-2 font-serif text-2xl font-semibold text-[#302525]">
              Manage your store
            </h3>
          </div>

          <div class="mt-6 grid gap-4 sm:grid-cols-3">
          
            <RouterLink
              to="/admin/products"
              class="group rounded-2xl border border-[#ead9d8] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#d8a9b4] hover:bg-[#fff9fa] hover:shadow-md"
            >
              <div
                class="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f7e5e9] text-[#9b4056]"
              >
                ◇
              </div>

              <h4 class="mt-4 font-semibold">Manage Products</h4>

              <p class="mt-1 text-xs leading-6 text-[#806d6d]">
                Add, edit and remove products from your store.
              </p>

              <span
                class="mt-4 inline-block text-xs font-semibold text-[#9b4056]"
              >
                Open →
              </span>
            </RouterLink>

            
            <RouterLink
              to="/admin/orders"
              class="group rounded-2xl border border-[#ead9d8] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#d8a9b4] hover:bg-[#fff9fa] hover:shadow-md"
            >
              <div
                class="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f7e5e9] text-[#9b4056]"
              >
                ▣
              </div>

              <h4 class="mt-4 font-semibold">Manage Orders</h4>

              <p class="mt-1 text-xs leading-6 text-[#806d6d]">
                View customer orders and update their status.
              </p>

              <span
                class="mt-4 inline-block text-xs font-semibold text-[#9b4056]"
              >
                Open →
              </span>
            </RouterLink>

            
            <RouterLink
              to="/admin/custom-orders"
              class="group rounded-2xl border border-[#ead9d8] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#d8a9b4] hover:bg-[#fff9fa] hover:shadow-md"
            >
              <div
                class="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f7e5e9] text-[#9b4056]"
              >
                ✦
              </div>

              <h4 class="mt-4 font-semibold">Custom Orders</h4>

              <p class="mt-1 text-xs leading-6 text-[#806d6d]">
                Review customised dress requests from customers.
              </p>

              <span
                class="mt-4 inline-block text-xs font-semibold text-[#9b4056]"
              >
                Open →
              </span>
            </RouterLink>
          </div>
        </section>

        
        <section
          class="mt-8 overflow-hidden rounded-2xl border border-[#ead9d8] bg-white"
        >
         
          <div
            class="flex items-center justify-between border-b border-[#ead9d8] px-6 py-5"
          >
            <div>
              <p class="text-[10px] font-bold tracking-[0.3em] text-[#9b4056]">
                RECENT ACTIVITY
              </p>

              <h3 class="mt-2 font-serif text-2xl font-semibold">
                Recent Orders
              </h3>
            </div>

            <RouterLink
              to="/admin/orders"
              class="text-sm font-semibold text-[#9b4056] hover:underline"
            >
              View all →
            </RouterLink>
          </div>

        
          <div
            v-if="ordersLoading"
            class="px-6 py-10 text-center text-sm text-[#806d6d]"
          >
            Loading recent orders...
          </div>

         
          <div
            v-else-if="recentOrders.length === 0"
            class="px-6 py-10 text-center"
          >
            <div class="text-3xl">📦</div>

            <p class="mt-3 text-sm font-semibold">No orders yet</p>

            <p class="mt-1 text-xs text-[#806d6d]">
              Customer orders will appear here.
            </p>
          </div>

          
          <div v-else class="divide-y divide-[#f0e5e3]">
            <div
              v-for="order in recentOrders"
              :key="order.id"
              class="flex flex-col gap-4 px-6 py-5 transition hover:bg-[#fffaf8] md:flex-row md:items-center md:justify-between"
            >
              <div class="flex items-center gap-4">
                <div
                  class="flex h-11 w-11 items-center justify-center rounded-full bg-[#f7e5e9] font-serif font-bold text-[#9b4056]"
                >
                  {{ getInitial(order.user?.name) }}
                </div>

                <div>
                  <p class="text-sm font-semibold">
                    {{ order.user?.name || "Customer" }}
                  </p>

                  <p class="mt-1 text-xs text-[#9a8588]">
                    #{{ order.orderNumber }}
                    <span v-if="getFirstItemName(order)">
                      · {{ getFirstItemName(order) }}
                    </span>
                  </p>
                </div>
              </div>

              <div class="flex items-center gap-6">
                <p class="text-sm font-semibold">
                  ₹{{ formatAmount(order.totalAmount) }}
                </p>

                <span
                  class="rounded-full px-3 py-1.5 text-xs font-semibold"
                  :class="statusClass(order.status)"
                >
                  {{ formatStatus(order.status) }}
                </span>
              </div>
            </div>
          </div>
        </section>

       
        <footer
          class="mt-10 flex flex-col justify-between gap-2 border-t border-[#ead9d8] py-6 text-xs text-[#9a8588] sm:flex-row"
        >
          <p>© {{ new Date().getFullYear() }} MAAD Fashions</p>

          <p>Designed for MAAD Fashions Admin</p>
        </footer>
      </main>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { RouterLink, useRouter } from "vue-router";

const router = useRouter();

const sidebarOpen = ref(false);

const loading = ref(false);
const ordersLoading = ref(false);

const errorMessage = ref("");
const ordersError = ref("");

const admin = ref({
  id: null,
  name: "Admin",
  email: "",
  role: "ADMIN",
});

const stats = ref({
  products: 0,
  orders: 0,
  customers: 0,
  totalSales: 0,
});

const recentOrders = ref([]);


const getToken = () => {
  return (
    localStorage.getItem("accessToken") || sessionStorage.getItem("accessToken")
  );
};


const adminName = computed(() => {
  return admin.value.name || "Admin";
});

const adminInitial = computed(() => {
  return adminName.value.charAt(0).toUpperCase();
});


const formattedSales = computed(() => {
  const amount = Number(stats.value.totalSales || 0);

  return `₹${amount.toLocaleString("en-IN", {
    maximumFractionDigits: 2,
  })}`;
});



const fetchDashboard = async () => {
  const token = getToken();

  if (!token) {
    router.replace("/admin");
    return;
  }

  loading.value = true;
  errorMessage.value = "";

  try {
    const response = await fetch("http://localhost:3000/admin/dashboard", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        Array.isArray(data.message)
          ? data.message[0]
          : data.message || "Unable to load dashboard.",
      );
    }

    
    if (data.admin) {
      admin.value = data.admin;
    }

   
    if (data.stats) {
      stats.value = {
        products: Number(data.stats.products || 0),
        orders: Number(data.stats.orders || 0),
        customers: Number(data.stats.customers || 0),
        totalSales: Number(data.stats.totalSales || 0),
      };
    }
  } catch (error) {
    console.error("Dashboard error:", error);

    errorMessage.value = error.message || "Unable to load dashboard data.";

   
    if (
      errorMessage.value.toLowerCase().includes("unauthorized") ||
      errorMessage.value.toLowerCase().includes("token")
    ) {
      localStorage.removeItem("accessToken");
      sessionStorage.removeItem("accessToken");

      router.replace("/admin");
    }
  } finally {
    loading.value = false;
  }
};



const fetchRecentOrders = async () => {
  const token = getToken();

  if (!token) {
    return;
  }

  ordersLoading.value = true;
  ordersError.value = "";

  try {
    const response = await fetch("http://localhost:3000/orders", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        Array.isArray(data.message)
          ? data.message[0]
          : data.message || "Unable to load orders.",
      );
    }

    // Support either direct array or { orders: [] }
    const orderList = Array.isArray(data)
      ? data
      : Array.isArray(data.orders)
        ? data.orders
        : [];

    recentOrders.value = orderList.slice(0, 4);
  } catch (error) {
    console.error("Recent orders error:", error);

    ordersError.value = error.message || "Unable to load recent orders.";
  } finally {
    ordersLoading.value = false;
  }
};



const getInitial = (name) => {
  if (!name) {
    return "C";
  }

  return name.trim().charAt(0).toUpperCase();
};

const formatAmount = (amount) => {
  return Number(amount || 0).toLocaleString("en-IN", {
    maximumFractionDigits: 2,
  });
};

const formatStatus = (status) => {
  if (!status) {
    return "Pending";
  }

  return status.charAt(0).toUpperCase() + status.slice(1).toLowerCase();
};

const statusClass = (status) => {
  switch (status) {
    case "PENDING":
      return "bg-amber-50 text-amber-700";

    case "PROCESSING":
      return "bg-purple-50 text-purple-700";

    case "SHIPPED":
      return "bg-blue-50 text-blue-700";

    case "DELIVERED":
      return "bg-green-50 text-green-700";

    case "CANCELLED":
      return "bg-red-50 text-red-700";

    default:
      return "bg-gray-100 text-gray-700";
  }
};

const getFirstItemName = (order) => {
  if (!order?.items || order.items.length === 0) {
    return "";
  }

  const item = order.items[0];

  return item.product?.name || item.productName || item.name || "";
};



const logout = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("user");

  sessionStorage.removeItem("accessToken");
  sessionStorage.removeItem("user");

  // Keep your existing admin login flag if your admin login uses it
  localStorage.removeItem("adminLoggedIn");

  router.push("/admin");
};



onMounted(async () => {
  const token = getToken();

  if (!token) {
    router.replace("/admin");
    return;
  }

  await fetchDashboard();
  await fetchRecentOrders();
});
</script>
