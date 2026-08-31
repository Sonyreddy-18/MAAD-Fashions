<template>
  <div class="min-h-screen bg-[#fffaf8] text-[#302525]">
    <Navbar />

    <main class="px-4 pb-16 pt-32 sm:px-6 lg:px-10">
      <div class="mx-auto max-w-6xl">
        <!-- HEADER -->
        <section class="mb-8">
          <p
            class="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#ad3d5b]"
          >
            My Account
          </p>

          <h1 class="text-4xl font-semibold sm:text-5xl">
            Welcome back<span v-if="user?.name">, {{ firstName }}</span
            >.
          </h1>

          <p class="mt-3 text-gray-500">
            Manage your profile, orders and MAAD Fashions experience.
          </p>
        </section>

        <!-- ACCOUNT LAYOUT -->
        <div class="grid gap-6 lg:grid-cols-[280px_1fr]">
          <!-- LEFT PROFILE CARD -->
          <aside
            class="h-fit rounded-[2rem] border border-[#eadedb] bg-white p-6 shadow-sm"
          >
            <!-- AVATAR -->
            <div class="flex items-center gap-4">
              <div
                class="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#ad3d5b] text-2xl font-semibold text-white"
              >
                {{ initials }}
              </div>

              <div class="min-w-0">
                <h2 class="truncate text-lg font-semibold">
                  {{ user?.name || "Customer" }}
                </h2>

                <p class="truncate text-sm text-gray-500">
                  {{ user?.email || "No email" }}
                </p>
              </div>
            </div>

            <div class="my-6 h-px bg-[#eee3e0]"></div>

            <!-- MENU -->
            <nav class="space-y-2">
              <button
                @click="activeSection = 'profile'"
                :class="menuClass('profile')"
              >
                <span>👤</span>
                <span>Profile</span>
              </button>

              <button
                @click="changeSection = 'orders'"
                :class="menuClass('orders')"
              >
                <span>📦</span>
                <span>My Orders</span>
              </button>

              <button
                @click="activeSection = 'custom'"
                :class="menuClass('custom')"
              >
                <span>✨</span>
                <span>Custom Orders</span>
              </button>

              <button
                @click="activeSection = 'wishlist'"
                :class="menuClass('wishlist')"
              >
                <span>♡</span>
                <span>Wishlist</span>
              </button>
            </nav>

            <div class="my-6 h-px bg-[#eee3e0]"></div>

            <button
              @click="logout"
              class="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-semibold text-red-500 transition hover:bg-red-50"
            >
              <span>↪</span>
              <span>Logout</span>
            </button>
          </aside>

          <section>
            <div
              v-if="activeSection === 'profile'"
              class="rounded-[2rem] border border-[#eadedb] bg-white p-6 shadow-sm sm:p-8"
            >
              <div class="mb-8">
                <p
                  class="text-xs font-semibold uppercase tracking-[0.25em] text-[#ad3d5b]"
                >
                  Personal Information
                </p>

                <h2 class="mt-2 text-2xl font-semibold">Your profile</h2>

                <p class="mt-1 text-sm text-gray-500">
                  Your registered account information.
                </p>
              </div>

              <div class="grid gap-5 sm:grid-cols-2">
                <div class="rounded-2xl bg-[#fffaf8] p-5">
                  <p
                    class="text-xs font-semibold uppercase tracking-wider text-gray-400"
                  >
                    Full Name
                  </p>

                  <p class="mt-2 font-medium">
                    {{ user?.name || "Not available" }}
                  </p>
                </div>

                <div class="rounded-2xl bg-[#fffaf8] p-5">
                  <p
                    class="text-xs font-semibold uppercase tracking-wider text-gray-400"
                  >
                    Email Address
                  </p>

                  <p class="mt-2 break-all font-medium">
                    {{ user?.email || "Not available" }}
                  </p>
                </div>

                <div class="rounded-2xl bg-[#fffaf8] p-5">
                  <p
                    class="text-xs font-semibold uppercase tracking-wider text-gray-400"
                  >
                    Phone Number
                  </p>

                  <p class="mt-2 font-medium">
                    {{ user?.phone || "Not available" }}
                  </p>
                </div>

                <div class="rounded-2xl bg-[#fffaf8] p-5">
                  <p
                    class="text-xs font-semibold uppercase tracking-wider text-gray-400"
                  >
                    Account Type
                  </p>

                  <p class="mt-2 font-medium">Customer</p>
                </div>
              </div>
            </div>

            <div
              v-else-if="activeSection === 'orders'"
              class="rounded-[2rem] border border-[#eadedb] bg-white p-6 shadow-sm sm:p-8"
            >
              <div
                class="flex flex-col justify-between gap-4 sm:flex-row sm:items-start"
              >
                <div>
                  <p
                    class="text-xs font-semibold uppercase tracking-[0.25em] text-[#ad3d5b]"
                  >
                    Shopping History
                  </p>

                  <h2 class="mt-2 text-2xl font-semibold">My Orders</h2>

                  <p class="mt-1 text-sm text-gray-500">
                    View your recent MAAD Fashions orders.
                  </p>
                </div>

                <button
                  @click="fetchMyOrders"
                  :disabled="ordersLoading"
                  class="rounded-full border border-[#eadedb] px-4 py-2 text-xs font-semibold transition hover:bg-[#fffaf8] disabled:opacity-50"
                >
                  {{ ordersLoading ? "Loading..." : "Refresh" }}
                </button>
              </div>

              <div
                v-if="ordersLoading"
                class="mt-8 rounded-2xl bg-[#fffaf8] p-10 text-center"
              >
                <div class="text-4xl">⏳</div>

                <h3 class="mt-4 text-lg font-semibold">
                  Loading your orders...
                </h3>

                <p class="mt-2 text-sm text-gray-500">
                  Please wait while we fetch your orders.
                </p>
              </div>

              <div
                v-else-if="ordersError"
                class="mt-8 rounded-2xl border border-red-200 bg-red-50 p-8 text-center"
              >
                <div class="text-4xl">⚠️</div>

                <h3 class="mt-4 text-lg font-semibold text-red-700">
                  Unable to load orders
                </h3>

                <p class="mt-2 text-sm text-red-600">
                  {{ ordersError }}
                </p>

                <button
                  @click="fetchMyOrders"
                  class="mt-5 rounded-full bg-[#ad3d5b] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#922f4a]"
                >
                  Try Again
                </button>
              </div>

              <div
                v-else-if="orders.length === 0"
                class="mt-8 rounded-2xl border border-dashed border-[#decfcb] bg-[#fffaf8] p-10 text-center"
              >
                <div class="text-4xl">📦</div>

                <h3 class="mt-4 text-lg font-semibold">
                  Your orders will appear here
                </h3>

                <p class="mx-auto mt-2 max-w-md text-sm text-gray-500">
                  Once you place an order, you can track and view your order
                  details from this section.
                </p>

                <button
                  @click="router.push('/dresses')"
                  class="mt-6 rounded-full bg-[#ad3d5b] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#922f4a]"
                >
                  Explore Dresses
                </button>
              </div>

              <div v-else class="mt-8 space-y-4">
                <div
                  v-for="order in orders"
                  :key="order.id"
                  class="rounded-2xl border border-[#eadedb] bg-[#fffaf8] p-5 transition hover:shadow-md"
                >
                  <div
                    class="flex flex-col justify-between gap-4 sm:flex-row sm:items-center"
                  >
                    <div>
                      <p
                        class="text-xs font-semibold uppercase tracking-wider text-gray-400"
                      >
                        Order Number
                      </p>

                      <h3 class="mt-1 text-lg font-semibold">
                        {{ order.orderNumber }}
                      </h3>

                      <p class="mt-1 text-xs text-gray-500">
                        {{ formatDate(order.createdAt) }}
                      </p>
                    </div>

                    <span
                      class="w-fit rounded-full px-4 py-1.5 text-xs font-semibold"
                      :class="statusClass(order.status)"
                    >
                      {{ order.status }}
                    </span>
                  </div>

                  <div class="my-5 h-px bg-[#eadedb]"></div>

                  <div class="grid gap-4 sm:grid-cols-3">
                    <div class="rounded-xl bg-white p-4">
                      <p
                        class="text-xs font-semibold uppercase tracking-wider text-gray-400"
                      >
                        Total Amount
                      </p>

                      <p class="mt-2 text-lg font-semibold text-[#ad3d5b]">
                        ₹{{ formatAmount(order.totalAmount) }}
                      </p>
                    </div>

                    <div class="rounded-xl bg-white p-4">
                      <p
                        class="text-xs font-semibold uppercase tracking-wider text-gray-400"
                      >
                        Items
                      </p>

                      <p class="mt-2 text-lg font-semibold">
                        {{ order.items?.length || 0 }}
                      </p>
                    </div>

                    <div class="rounded-xl bg-white p-4">
                      <p
                        class="text-xs font-semibold uppercase tracking-wider text-gray-400"
                      >
                        Delivery City
                      </p>

                      <p class="mt-2 font-semibold">
                        {{ order.city || "Not available" }}
                      </p>
                    </div>
                  </div>

                  <div class="mt-4 rounded-xl bg-white p-4">
                    <p
                      class="text-xs font-semibold uppercase tracking-wider text-gray-400"
                    >
                      Shipping To
                    </p>

                    <p class="mt-2 text-sm font-medium">
                      {{ order.shippingName }}
                    </p>

                    <p class="mt-1 text-sm text-gray-500">
                      {{ order.address }}, {{ order.city }}, {{ order.state }} -
                      {{ order.postalCode }}
                    </p>

                    <p class="mt-1 text-sm text-gray-500">
                      {{ order.shippingPhone }}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              v-else-if="activeSection === 'custom'"
              class="rounded-[2rem] border border-[#eadedb] bg-white p-6 shadow-sm sm:p-8"
            >
              <p
                class="text-xs font-semibold uppercase tracking-[0.25em] text-[#ad3d5b]"
              >
                Made For You
              </p>

              <h2 class="mt-2 text-2xl font-semibold">Custom Orders</h2>

              <div
                class="mt-8 rounded-2xl border border-dashed border-[#decfcb] bg-[#fffaf8] p-10 text-center"
              >
                <div class="text-4xl">✨</div>

                <h3 class="mt-4 text-lg font-semibold">No custom orders yet</h3>

                <p class="mx-auto mt-2 max-w-md text-sm text-gray-500">
                  Your customised dress requests and their status will appear
                  here.
                </p>

                <button
                  @click="router.push('/customised-dresses')"
                  class="mt-6 rounded-full bg-[#ad3d5b] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#922f4a]"
                >
                  Create Your Custom Dress
                </button>
              </div>
            </div>

            <div
              v-else-if="activeSection === 'wishlist'"
              class="rounded-[2rem] border border-[#eadedb] bg-white p-6 shadow-sm sm:p-8"
            >
              <p
                class="text-xs font-semibold uppercase tracking-[0.25em] text-[#ad3d5b]"
              >
                Saved For Later
              </p>

              <h2 class="mt-2 text-2xl font-semibold">Wishlist</h2>

              <div
                class="mt-8 rounded-2xl border border-dashed border-[#decfcb] bg-[#fffaf8] p-10 text-center"
              >
                <div class="text-4xl">♡</div>

                <h3 class="mt-4 text-lg font-semibold">
                  Your wishlist is empty
                </h3>

                <p class="mx-auto mt-2 max-w-md text-sm text-gray-500">
                  Save your favourite MAAD pieces and they will appear here.
                </p>

                <button
                  @click="router.push('/dresses')"
                  class="mt-6 rounded-full bg-[#ad3d5b] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#922f4a]"
                >
                  Discover Styles
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import Navbar from "../components/Navbar.vue";

const router = useRouter();

const activeSection = ref("profile");

const orders = ref([]);
const ordersLoading = ref(false);
const ordersError = ref("");

const getStoredUser = () => {
  try {
    const localUser = localStorage.getItem("user");

    if (localUser) {
      return JSON.parse(localUser);
    }

    const sessionUser = sessionStorage.getItem("user");

    if (sessionUser) {
      return JSON.parse(sessionUser);
    }

    return null;
  } catch (error) {
    console.error("Unable to read customer information:", error);

    return null;
  }
};

const user = ref(getStoredUser());

const getToken = () => {
  return (
    localStorage.getItem("accessToken") || sessionStorage.getItem("accessToken")
  );
};

const firstName = computed(() => {
  if (!user.value?.name) {
    return "";
  }

  return user.value.name.split(" ")[0];
});

const initials = computed(() => {
  if (!user.value?.name) {
    return "M";
  }

  const parts = user.value.name.trim().split(" ");

  if (parts.length === 1) {
    return parts[0].charAt(0).toUpperCase();
  }

  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
});

const fetchMyOrders = async () => {
  ordersLoading.value = true;
  ordersError.value = "";

  try {
    const token = getToken();

    // No login
    if (!token) {
      router.replace("/login");
      return;
    }

    const response = await fetch("http://localhost:3000/orders/my-orders", {
      method: "GET",

      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (response.status === 401) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("user");

      sessionStorage.removeItem("accessToken");
      sessionStorage.removeItem("user");

      router.replace("/login");

      return;
    }

    if (!response.ok) {
      throw new Error(
        Array.isArray(data.message)
          ? data.message[0]
          : data.message || "Unable to load orders.",
      );
    }

    orders.value = Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Orders error:", error);

    ordersError.value = error.message || "Unable to load your orders.";
  } finally {
    ordersLoading.value = false;
  }
};

const formatDate = (date) => {
  if (!date) {
    return "";
  }

  return new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

const formatAmount = (amount) => {
  return Number(amount || 0).toLocaleString("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

const statusClass = (status) => {
  switch (status) {
    case "DELIVERED":
      return "bg-green-100 text-green-700";

    case "CANCELLED":
      return "bg-red-100 text-red-700";

    case "SHIPPED":
      return "bg-blue-100 text-blue-700";

    case "PROCESSING":
      return "bg-yellow-100 text-yellow-700";

    case "CONFIRMED":
      return "bg-purple-100 text-purple-700";

    default:
      return "bg-gray-100 text-gray-700";
  }
};

const changeSection = (section) => {
  activeSection.value = section;

  // Refresh orders when opening My Orders
  if (section === "orders") {
    fetchMyOrders();
  }
};

const menuClass = (section) => {
  return [
    "flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-semibold transition",

    activeSection.value === section
      ? "bg-[#ad3d5b] text-white shadow-md shadow-[#ad3d5b]/20"
      : "text-[#302525] hover:bg-[#fff0f2]",
  ];
};

const logout = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("user");

  sessionStorage.removeItem("accessToken");
  sessionStorage.removeItem("user");

  router.push("/");
};

onMounted(() => {
  const token = getToken();

  // If customer isn't logged in
  if (!token || !user.value) {
    router.replace("/login");
    return;
  }

  // Load orders
  fetchMyOrders();
});
</script>
