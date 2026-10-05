<template>
  <div class="min-h-screen bg-[#fffaf8] text-[#302525]">
    <!-- MOBILE OVERLAY -->
    <div
      v-if="sidebarOpen"
      class="fixed inset-0 z-40 bg-[#302525]/30 lg:hidden"
      @click="sidebarOpen = false"
    ></div>

    <!-- SIDEBAR -->
    <aside
      class="fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-[#ead9d8] bg-white transition-transform duration-300 lg:translate-x-0"
      :class="sidebarOpen ? 'translate-x-0' : '-translate-x-full'"
    >
      <!-- LOGO -->
      <div class="flex h-20 items-center border-b border-[#ead9d8] px-5">
        <div>
          <h1 class="text-xl font-bold tracking-[0.18em] text-[#9b4056]">
            MAAD
          </h1>
          <p class="text-[9px] tracking-[0.35em] text-[#806d6d]">FASHIONS</p>
        </div>

        <button
          class="ml-auto text-xl text-[#806d6d] lg:hidden"
          @click="sidebarOpen = false"
        >
          ✕
        </button>
      </div>

      <!-- NAVIGATION -->
      <nav class="flex-1 overflow-y-auto p-4">
        <RouterLink
          to="/admin"
          class="mb-2 flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-[#65575a] transition hover:bg-[#fff4f5] hover:text-[#9b4056]"
          @click="sidebarOpen = false"
        >
          <span
            class="flex h-7 w-7 items-center justify-center rounded-lg bg-[#f8e6ea]"
          >
            📊
          </span>
          Dashboard
        </RouterLink>

        <RouterLink
          to="/admin/products"
          class="mb-2 flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-[#65575a] transition hover:bg-[#fff4f5] hover:text-[#9b4056]"
          @click="sidebarOpen = false"
        >
          <span
            class="flex h-7 w-7 items-center justify-center rounded-lg bg-[#f8e6ea]"
          >
            👗
          </span>
          Products
        </RouterLink>

        <RouterLink
          to="/admin/orders"
          class="mb-2 flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-[#65575a] transition hover:bg-[#fff4f5] hover:text-[#9b4056]"
          @click="sidebarOpen = false"
        >
          <span
            class="flex h-7 w-7 items-center justify-center rounded-lg bg-[#f8e6ea]"
          >
            🛍️
          </span>
          Orders
        </RouterLink>

        <RouterLink
          to="/admin/customers"
          class="mb-2 flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-[#65575a] transition hover:bg-[#fff4f5] hover:text-[#9b4056]"
          @click="sidebarOpen = false"
        >
          <span
            class="flex h-7 w-7 items-center justify-center rounded-lg bg-[#f8e6ea]"
          >
            👥
          </span>
          Customers
        </RouterLink>

        <!-- STYLE STORIES -->
        <RouterLink
          to="/admin/style-stories"
          class="mb-2 flex items-center gap-3 rounded-xl bg-[#fff0f2] px-4 py-3 text-sm font-semibold text-[#9b4056]"
          @click="sidebarOpen = false"
        >
          <span
            class="flex h-7 w-7 items-center justify-center rounded-lg bg-[#f8e6ea] text-[#9b4056]"
          >
            📸
          </span>
          Style Stories
        </RouterLink>

        <RouterLink
          to="/admin/custom-orders"
          class="mb-2 flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-[#65575a] transition hover:bg-[#fff4f5] hover:text-[#9b4056]"
          @click="sidebarOpen = false"
        >
          <span
            class="flex h-7 w-7 items-center justify-center rounded-lg bg-[#f8e6ea]"
          >
            ✨
          </span>
          Custom Orders
        </RouterLink>

        <RouterLink
          to="/admin/stall"
          class="mb-2 flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-[#65575a] transition hover:bg-[#fff4f5] hover:text-[#9b4056]"
          @click="sidebarOpen = false"
        >
          <span
            class="flex h-7 w-7 items-center justify-center rounded-lg bg-[#f8e6ea]"
          >
            🏪
          </span>
          Stall
        </RouterLink>

        <RouterLink
          to="/admin/carousel"
          class="mb-2 flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-[#65575a] transition hover:bg-[#fff4f5] hover:text-[#9b4056]"
          @click="sidebarOpen = false"
        >
          <span
            class="flex h-7 w-7 items-center justify-center rounded-lg bg-[#f8e6ea]"
          >
            🖼️
          </span>
          Carousel
        </RouterLink>

        <RouterLink
          to="/"
          class="mb-2 flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-[#65575a] transition hover:bg-[#fff4f5] hover:text-[#9b4056]"
          @click="sidebarOpen = false"
        >
          <span
            class="flex h-7 w-7 items-center justify-center rounded-lg bg-[#f8e6ea]"
          >
            🛒
          </span>
          View Store
        </RouterLink>
      </nav>

      <!-- LOGOUT -->
      <div class="border-t border-[#ead9d8] p-4">
        <button
          class="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-[#9b4056] transition hover:bg-[#fff4f5]"
          @click="logout"
        >
          <span
            class="flex h-7 w-7 items-center justify-center rounded-lg bg-[#f8e6ea]"
          >
            🚪
          </span>
          Logout
        </button>
      </div>
    </aside>

    <!-- MAIN -->
    <main class="min-h-screen lg:ml-64">
      <!-- HEADER -->
      <header
        class="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-[#ead9d8] bg-[#fffaf8]/95 px-5 shadow-sm backdrop-blur-md sm:px-8"
      >
        <div class="flex items-center gap-4">
          <button
            class="rounded-lg border border-[#ead9d8] bg-white px-3 py-2 lg:hidden"
            @click="sidebarOpen = true"
          >
            ☰
          </button>

          <div>
            <p class="text-xs uppercase tracking-[0.25em] text-[#806d6d]">
              Customer Community
            </p>
            <h2 class="text-xl font-semibold text-[#302525]">
              MAAD STYLE STORIES
            </h2>
          </div>
        </div>

        <button
          class="rounded-xl border border-[#ead9d8] bg-white px-4 py-2 text-sm text-[#65575a] shadow-sm transition hover:border-[#9b4056] hover:text-[#9b4056]"
          @click="fetchStories"
        >
          ↻ Refresh
        </button>
      </header>

      <!-- CONTENT -->
      <section class="p-5 sm:p-8">
        <!-- PAGE INTRO -->
        <div class="mb-7">
          <h1 class="text-2xl font-semibold sm:text-3xl">Style Stories</h1>

          <p class="mt-2 max-w-2xl text-sm leading-6 text-[#806d6d]">
            Review customer photos, videos and experiences before they appear
            publicly on MAAD FASHIONS.
          </p>
        </div>

        <!-- STATS -->
        <div class="mb-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          <div
            class="rounded-2xl border border-[#ead9d8] bg-white p-5 shadow-sm"
          >
            <p class="text-sm text-[#806d6d]">Total Stories</p>
            <p class="mt-2 text-2xl font-semibold">
              {{ stories.length }}
            </p>
          </div>

          <div
            class="rounded-2xl border border-[#ead9d8] bg-white p-5 shadow-sm"
          >
            <p class="text-sm text-[#806d6d]">Pending</p>
            <p class="mt-2 text-2xl font-semibold text-[#b7791f]">
              {{ pendingCount }}
            </p>
          </div>

          <div
            class="rounded-2xl border border-[#ead9d8] bg-white p-5 shadow-sm"
          >
            <p class="text-sm text-[#806d6d]">Approved</p>
            <p class="mt-2 text-2xl font-semibold text-[#3d7a57]">
              {{ approvedCount }}
            </p>
          </div>

          <div
            class="rounded-2xl border border-[#ead9d8] bg-white p-5 shadow-sm"
          >
            <p class="text-sm text-[#806d6d]">Featured</p>
            <p class="mt-2 text-2xl font-semibold text-[#9b4056]">
              {{ featuredCount }}
            </p>
          </div>
        </div>

        <!-- FILTERS -->
        <div
          class="mb-6 flex flex-col gap-4 rounded-2xl border border-[#ead9d8] bg-white p-4 shadow-sm md:flex-row md:items-center md:justify-between"
        >
          <div class="flex flex-wrap gap-2">
            <button
              v-for="filter in filters"
              :key="filter.value"
              class="rounded-xl px-4 py-2 text-sm font-medium transition"
              :class="
                selectedFilter === filter.value
                  ? 'bg-[#9b4056] text-white'
                  : 'bg-[#fff4f5] text-[#65575a] hover:text-[#9b4056]'
              "
              @click="selectedFilter = filter.value"
            >
              {{ filter.label }}
            </button>
          </div>

          <div class="relative w-full md:w-72">
            <input
              v-model="search"
              type="text"
              placeholder="Search customer or product..."
              class="w-full rounded-xl border border-[#ead9d8] bg-[#fffaf8] px-4 py-2.5 text-sm outline-none transition focus:border-[#9b4056]"
            />
          </div>
        </div>

        <!-- ERROR -->
        <div
          v-if="errorMessage"
          class="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          {{ errorMessage }}
        </div>

        <!-- LOADING -->
        <div
          v-if="loading"
          class="rounded-2xl border border-[#ead9d8] bg-white py-20 text-center"
        >
          <div
            class="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-[#ead9d8] border-t-[#9b4056]"
          ></div>

          <p class="mt-4 text-sm text-[#806d6d]">Loading Style Stories...</p>
        </div>

        <!-- EMPTY -->
        <div
          v-else-if="filteredStories.length === 0"
          class="rounded-2xl border border-[#ead9d8] bg-white py-20 text-center"
        >
          <div class="text-5xl">📸</div>

          <h3 class="mt-4 text-lg font-semibold">No Style Stories found</h3>

          <p class="mt-2 text-sm text-[#806d6d]">
            Customer stories will appear here when they are submitted.
          </p>
        </div>

        <!-- STORIES -->
        <div v-else class="grid gap-6 xl:grid-cols-2">
          <article
            v-for="story in filteredStories"
            :key="story.id"
            class="overflow-hidden rounded-2xl border border-[#ead9d8] bg-white shadow-sm transition hover:shadow-md"
          >
            <!-- MEDIA -->
            <div class="relative h-72 bg-[#f8eeee]">
              <img
                v-if="story.mediaType === 'IMAGE' && story.mediaUrl"
                :src="story.mediaUrl"
                :alt="story.product?.name || 'Style Story'"
                class="h-full w-full object-cover"
              />

              <video
                v-else-if="story.mediaType === 'VIDEO' && story.mediaUrl"
                :src="story.mediaUrl"
                controls
                class="h-full w-full object-cover"
              ></video>

              <div
                v-else
                class="flex h-full items-center justify-center text-5xl"
              >
                📸
              </div>

              <!-- STATUS -->
              <div class="absolute left-4 top-4">
                <span
                  class="rounded-full px-3 py-1.5 text-xs font-semibold shadow-sm"
                  :class="statusClass(story.status)"
                >
                  {{ story.status }}
                </span>
              </div>

              <!-- MEDIA TYPE -->
              <div
                v-if="story.mediaType"
                class="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium text-[#65575a] shadow-sm"
              >
                {{ story.mediaType === "VIDEO" ? "🎥 Video" : "📷 Photo" }}
              </div>
            </div>

            <!-- DETAILS -->
            <div class="p-5">
              <!-- CUSTOMER + PRODUCT -->
              <div class="flex items-start justify-between gap-4">
                <div>
                  <p class="text-xs uppercase tracking-[0.18em] text-[#806d6d]">
                    Customer
                  </p>

                  <h3 class="mt-1 font-semibold">
                    {{ customerName(story) }}
                  </h3>

                  <p
                    v-if="story.user?.email"
                    class="mt-0.5 text-xs text-[#806d6d]"
                  >
                    {{ story.user.email }}
                  </p>
                </div>

                <div class="text-right">
                  <p class="text-xs uppercase tracking-[0.18em] text-[#806d6d]">
                    Rating
                  </p>

                  <div class="mt-1 text-sm">
                    <span
                      v-for="star in 5"
                      :key="star"
                      :class="
                        star <= Number(story.rating)
                          ? 'text-[#d69a2d]'
                          : 'text-[#e6d8d8]'
                      "
                    >
                      ★
                    </span>
                  </div>
                </div>
              </div>

              <!-- PRODUCT -->
              <div
                v-if="story.product"
                class="mt-4 flex items-center gap-3 rounded-xl bg-[#fffaf8] p-3"
              >
                <img
                  v-if="story.product.image"
                  :src="story.product.image"
                  :alt="story.product.name"
                  class="h-14 w-14 rounded-lg object-cover"
                />

                <div class="min-w-0">
                  <p class="text-xs text-[#806d6d]">Purchased Product</p>

                  <p class="truncate text-sm font-medium">
                    {{ story.product.name }}
                  </p>
                </div>
              </div>

              <!-- STORY TEXT -->
              <div class="mt-5">
                <p class="text-xs uppercase tracking-[0.18em] text-[#806d6d]">
                  Customer Story
                </p>

                <p class="mt-2 text-sm leading-6 text-[#4e4143]">
                  {{ story.story }}
                </p>
              </div>

              <!-- OCCASION -->
              <div v-if="story.occasion" class="mt-4">
                <span
                  class="inline-flex rounded-full bg-[#f8e6ea] px-3 py-1.5 text-xs font-medium text-[#9b4056]"
                >
                  ✨ {{ story.occasion }}
                </span>
              </div>

              <!-- DATE -->
              <p class="mt-4 text-xs text-[#806d6d]">
                Submitted {{ formatDate(story.createdAt) }}
              </p>

              <!-- FEATURED -->
              <div
                class="mt-5 flex items-center justify-between rounded-xl border border-[#ead9d8] bg-[#fffaf8] px-4 py-3"
              >
                <div>
                  <p class="text-sm font-medium">Featured Story</p>

                  <p class="text-xs text-[#806d6d]">
                    Show this story in featured sections.
                  </p>
                </div>

                <button
                  type="button"
                  class="relative h-6 w-11 rounded-full transition"
                  :class="story.featured ? 'bg-[#9b4056]' : 'bg-[#d8cccc]'"
                  :disabled="updatingId === story.id"
                  @click="toggleFeatured(story)"
                >
                  <span
                    class="absolute top-1 h-4 w-4 rounded-full bg-white shadow transition"
                    :class="story.featured ? 'left-6' : 'left-1'"
                  ></span>
                </button>
              </div>

              <!-- ACTIONS -->
              <div class="mt-5 flex flex-wrap gap-2">
                <button
                  v-if="story.status !== 'APPROVED'"
                  type="button"
                  class="rounded-xl bg-[#9b4056] px-4 py-2.5 text-sm font-medium text-white transition hover:bg-[#85364a] disabled:cursor-not-allowed disabled:opacity-50"
                  :disabled="updatingId === story.id"
                  @click="updateStory(story, 'APPROVED')"
                >
                  ✓ Approve
                </button>

                <button
                  v-if="story.status !== 'REJECTED'"
                  type="button"
                  class="rounded-xl border border-[#ead9d8] bg-white px-4 py-2.5 text-sm font-medium text-[#9b4056] transition hover:bg-[#fff4f5] disabled:cursor-not-allowed disabled:opacity-50"
                  :disabled="updatingId === story.id"
                  @click="updateStory(story, 'REJECTED')"
                >
                  ✕ Reject
                </button>

                <button
                  type="button"
                  class="ml-auto rounded-xl border border-red-200 px-4 py-2.5 text-sm font-medium text-red-600 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-50"
                  :disabled="deletingId === story.id"
                  @click="deleteStory(story)"
                >
                  🗑 Delete
                </button>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { RouterLink, useRouter } from "vue-router";

const router = useRouter();

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

const sidebarOpen = ref(false);
const loading = ref(false);
const stories = ref([]);
const search = ref("");
const selectedFilter = ref("ALL");
const errorMessage = ref("");
const updatingId = ref(null);
const deletingId = ref(null);

const filters = [
  { label: "All", value: "ALL" },
  { label: "Pending", value: "PENDING" },
  { label: "Approved", value: "APPROVED" },
  { label: "Rejected", value: "REJECTED" },
  { label: "Featured", value: "FEATURED" },
];

const getAdminToken = () => {
  return (
    localStorage.getItem("adminAccessToken") ||
    sessionStorage.getItem("adminAccessToken")
  );
};

const authHeaders = () => {
  const token = getAdminToken();

  return {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
};

const fetchStories = async () => {
  loading.value = true;
  errorMessage.value = "";

  try {
    const token = getAdminToken();

    if (!token) {
      router.push("/admin/login");
      return;
    }

    const response = await fetch(`${API_URL}/style-stories/admin/all`, {
      headers: authHeaders(),
    });

    if (response.status === 401 || response.status === 403) {
      localStorage.removeItem("adminAccessToken");
      sessionStorage.removeItem("adminAccessToken");

      router.push("/admin/login");
      return;
    }

    if (!response.ok) {
      throw new Error("Failed to load Style Stories.");
    }

    const data = await response.json();

    stories.value = Array.isArray(data)
      ? data
      : data?.data || data?.stories || [];
  } catch (error) {
    console.error("Style Stories error:", error);

    errorMessage.value = error.message || "Unable to load Style Stories.";
  } finally {
    loading.value = false;
  }
};

const updateStory = async (story, status) => {
  if (!story?.id) return;

  updatingId.value = story.id;
  errorMessage.value = "";

  try {
    const response = await fetch(`${API_URL}/style-stories/admin/${story.id}`, {
      method: "PATCH",
      headers: authHeaders(),
      body: JSON.stringify({
        status,
        featured: Boolean(story.featured),
      }),
    });

    if (response.status === 401 || response.status === 403) {
      router.push("/admin/login");
      return;
    }

    if (!response.ok) {
      const data = await response.json().catch(() => null);

      throw new Error(
        data?.message || `Unable to ${status.toLowerCase()} story.`,
      );
    }

    const updatedStory = await response.json();

    const index = stories.value.findIndex((item) => item.id === story.id);

    if (index !== -1) {
      stories.value[index] = {
        ...stories.value[index],
        ...updatedStory,
        status,
      };
    }
  } catch (error) {
    console.error("Update Style Story error:", error);

    errorMessage.value = error.message || "Unable to update Style Story.";
  } finally {
    updatingId.value = null;
  }
};

const toggleFeatured = async (story) => {
  if (!story?.id) return;

  updatingId.value = story.id;
  errorMessage.value = "";

  try {
    const response = await fetch(`${API_URL}/style-stories/admin/${story.id}`, {
      method: "PATCH",
      headers: authHeaders(),
      body: JSON.stringify({
        status: story.status,
        featured: !story.featured,
      }),
    });

    if (response.status === 401 || response.status === 403) {
      router.push("/admin/login");
      return;
    }

    if (!response.ok) {
      const data = await response.json().catch(() => null);

      throw new Error(data?.message || "Unable to update featured status.");
    }

    const updatedStory = await response.json();

    const index = stories.value.findIndex((item) => item.id === story.id);

    if (index !== -1) {
      stories.value[index] = {
        ...stories.value[index],
        ...updatedStory,
        featured: !story.featured,
      };
    }
  } catch (error) {
    console.error("Featured update error:", error);

    errorMessage.value = error.message || "Unable to update featured status.";
  } finally {
    updatingId.value = null;
  }
};

const deleteStory = async (story) => {
  if (!story?.id) return;

  const confirmed = window.confirm(
    "Are you sure you want to delete this Style Story?",
  );

  if (!confirmed) return;

  deletingId.value = story.id;
  errorMessage.value = "";

  try {
    const response = await fetch(`${API_URL}/style-stories/admin/${story.id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${getAdminToken()}`,
      },
    });

    if (response.status === 401 || response.status === 403) {
      router.push("/admin/login");
      return;
    }

    if (!response.ok) {
      const data = await response.json().catch(() => null);

      throw new Error(data?.message || "Unable to delete Style Story.");
    }

    stories.value = stories.value.filter((item) => item.id !== story.id);
  } catch (error) {
    console.error("Delete Style Story error:", error);

    errorMessage.value = error.message || "Unable to delete Style Story.";
  } finally {
    deletingId.value = null;
  }
};

const customerName = (story) => {
  return (
    story?.user?.name ||
    story?.user?.fullName ||
    story?.customerName ||
    "Customer"
  );
};

const formatDate = (date) => {
  if (!date) return "recently";

  const parsed = new Date(date);

  if (Number.isNaN(parsed.getTime())) {
    return "recently";
  }

  return parsed.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

const statusClass = (status) => {
  switch (status) {
    case "APPROVED":
      return "bg-[#e8f5ed] text-[#3d7a57]";

    case "REJECTED":
      return "bg-[#fdeaea] text-[#b64040]";

    case "PENDING":
    default:
      return "bg-[#fff3dc] text-[#9a6819]";
  }
};

const pendingCount = computed(() => {
  return stories.value.filter((story) => story.status === "PENDING").length;
});

const approvedCount = computed(() => {
  return stories.value.filter((story) => story.status === "APPROVED").length;
});

const featuredCount = computed(() => {
  return stories.value.filter((story) => story.featured === true).length;
});

const filteredStories = computed(() => {
  const query = search.value.trim().toLowerCase();

  return stories.value.filter((story) => {
    const matchesFilter =
      selectedFilter.value === "ALL" ||
      (selectedFilter.value === "FEATURED"
        ? story.featured === true
        : story.status === selectedFilter.value);

    if (!matchesFilter) return false;

    if (!query) return true;

    const customer = customerName(story).toLowerCase();

    const email = story?.user?.email?.toLowerCase() || "";

    const product = story?.product?.name?.toLowerCase() || "";

    const storyText = story?.story?.toLowerCase() || "";

    return (
      customer.includes(query) ||
      email.includes(query) ||
      product.includes(query) ||
      storyText.includes(query)
    );
  });
});

const logout = () => {
  localStorage.removeItem("adminAccessToken");
  sessionStorage.removeItem("adminAccessToken");

  router.push("/admin/login");
};

onMounted(() => {
  fetchStories();
});
</script>
