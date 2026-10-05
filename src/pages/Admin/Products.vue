<template>
  <div class="min-h-screen bg-[#fffaf8] text-[#302525]">
    <!-- SIDEBAR -->
    <aside
      class="fixed inset-y-0 left-0 z-50 w-64 border-r border-[#ead9d8] bg-white transition-transform duration-300 lg:translate-x-0"
      :class="sidebarOpen ? 'translate-x-0' : '-translate-x-full'"
    >
      <div class="flex h-full flex-col">
        <!-- Logo -->
        <div class="flex h-[92px] items-center border-b border-[#ead9d8] px-6">
          <div
            class="flex h-12 w-12 items-center justify-center rounded-full bg-[#9b4056] text-lg font-bold text-white"
          >
            M
          </div>
          <div class="ml-3">
            <h1 class="text-lg font-semibold tracking-[0.18em]">MAAD</h1>
            <p class="text-[9px] tracking-[0.35em] text-[#9b4056]">FASHIONS</p>
          </div>
        </div>

        <!-- Navigation -->
        <nav class="flex-1 space-y-1 px-4 py-6">
          <RouterLink
            to="/admin/dashboard"
            class="flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition hover:bg-[#fff1f3] hover:text-[#9b4056]"
          >
            <span>⌂</span>
            Dashboard
          </RouterLink>

          <RouterLink
            to="/admin/products"
            class="flex items-center gap-3 rounded-xl bg-[#fff1f3] px-4 py-3 text-sm font-medium text-[#9b4056]"
          >
            <span>◈</span>
            Products
          </RouterLink>

          <RouterLink
            to="/admin/orders"
            class="flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition hover:bg-[#fff1f3] hover:text-[#9b4056]"
          >
            <span>▣</span>
            Orders
          </RouterLink>

          <RouterLink
            to="/admin/customers"
            class="flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition hover:bg-[#fff1f3] hover:text-[#9b4056]"
          >
            <span>♙</span>
            Customers
          </RouterLink>

          <RouterLink
            to="/admin/custom-orders"
            class="flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition hover:bg-[#fff1f3] hover:text-[#9b4056]"
          >
            <span>✦</span>
            Custom Orders
          </RouterLink>

          <RouterLink
            to="/"
            class="flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition hover:bg-[#fff1f3] hover:text-[#9b4056]"
          >
            <span>↗</span>
            View Store
          </RouterLink>
        </nav>

        <!-- Logout -->
        <div class="border-t border-[#ead9d8] p-4">
          <button
            type="button"
            @click="logout"
            class="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm text-gray-600 transition hover:bg-[#fff1f3] hover:text-[#9b4056]"
          >
            <span>⇥</span>
            Logout
          </button>
        </div>
      </div>
    </aside>

    <!-- Mobile overlay -->
    <div
      v-if="sidebarOpen"
      class="fixed inset-0 z-40 bg-black/30 lg:hidden"
      @click="sidebarOpen = false"
    ></div>

    <!-- MAIN -->
    <div class="lg:pl-64">
      <!-- Header -->
      <header
        class="sticky top-0 z-30 flex h-[92px] items-center justify-between border-b border-[#ead9d8] bg-[#fffaf8]/95 px-4 backdrop-blur sm:px-6 lg:px-8"
      >
        <div class="flex items-center gap-3">
          <button
            type="button"
            class="rounded-xl border border-[#ead9d8] bg-white px-3 py-2 lg:hidden"
            @click="sidebarOpen = true"
          >
            ☰
          </button>

          <div>
            <p class="text-xs uppercase tracking-[0.25em] text-[#9b4056]">
              Admin
            </p>
            <h2 class="text-lg font-semibold">Products</h2>
          </div>
        </div>

        <RouterLink
          to="/"
          class="hidden rounded-xl border border-[#ead9d8] bg-white px-4 py-2 text-sm font-medium transition hover:border-[#9b4056] hover:text-[#9b4056] sm:block"
        >
          View Store
        </RouterLink>
      </header>

      <main class="px-4 py-6 sm:px-6 lg:px-8">
        <!-- TITLE -->
        <div
          class="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <p class="mb-1 text-xs uppercase tracking-[0.28em] text-[#9b4056]">
              MAAD Collection
            </p>

            <h1 class="text-2xl font-semibold sm:text-3xl">Your Collection</h1>

            <p class="mt-1 text-sm text-gray-500">
              Manage products, images and videos.
            </p>
          </div>

          <button
            type="button"
            @click="openAddProduct"
            class="rounded-xl bg-[#9b4056] px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-[#85364a]"
          >
            + Add Product
          </button>
        </div>

        <!-- ERROR -->
        <div
          v-if="errorMessage"
          class="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600"
        >
          {{ errorMessage }}
        </div>

        <!-- STATS -->
        <section class="mb-6 grid gap-4 sm:grid-cols-3">
          <div
            class="rounded-2xl border border-[#ead9d8] bg-white p-5 shadow-sm"
          >
            <p class="text-sm text-gray-500">Total Products</p>
            <p class="mt-2 text-3xl font-semibold">
              {{ products.length }}
            </p>
          </div>

          <div
            class="rounded-2xl border border-[#ead9d8] bg-white p-5 shadow-sm"
          >
            <p class="text-sm text-gray-500">Active Products</p>
            <p class="mt-2 text-3xl font-semibold text-[#9b4056]">
              {{ activeProducts.length }}
            </p>
          </div>

          <div
            class="rounded-2xl border border-[#ead9d8] bg-white p-5 shadow-sm"
          >
            <p class="text-sm text-gray-500">Low Stock</p>
            <p class="mt-2 text-3xl font-semibold text-amber-600">
              {{ lowStockProducts.length }}
            </p>
          </div>
        </section>

        <!-- FILTERS -->
        <section
          class="mb-6 rounded-2xl border border-[#ead9d8] bg-white p-4 shadow-sm"
        >
          <div class="grid gap-3 md:grid-cols-3">
            <!-- Search -->
            <div>
              <label class="mb-1.5 block text-xs font-medium text-gray-500">
                Search
              </label>

              <div class="relative">
                <input
                  v-model="search"
                  type="text"
                  placeholder="Search products..."
                  class="w-full rounded-xl border border-[#ead9d8] bg-[#fffaf8] px-4 py-3 text-sm outline-none transition focus:border-[#9b4056]"
                />

                <span
                  class="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  ⌕
                </span>
              </div>
            </div>

            <!-- Category -->
            <div>
              <label class="mb-1.5 block text-xs font-medium text-gray-500">
                Category
              </label>

              <select
                v-model="selectedCategory"
                class="w-full rounded-xl border border-[#ead9d8] bg-[#fffaf8] px-4 py-3 text-sm outline-none focus:border-[#9b4056]"
              >
                <option>All</option>
                <option>Dresses</option>
                <option>Sarees</option>
                <option>Kids Wear</option>
                <option>Customised</option>
              </select>
            </div>

            <!-- Status -->
            <div>
              <label class="mb-1.5 block text-xs font-medium text-gray-500">
                Status
              </label>

              <select
                v-model="selectedStatus"
                class="w-full rounded-xl border border-[#ead9d8] bg-[#fffaf8] px-4 py-3 text-sm outline-none focus:border-[#9b4056]"
              >
                <option>All</option>
                <option>Active</option>
                <option>Draft</option>
              </select>
            </div>
          </div>
        </section>

        <!-- PRODUCTS -->
        <section
          class="overflow-hidden rounded-2xl border border-[#ead9d8] bg-white shadow-sm"
        >
          <div
            class="flex items-center justify-between border-b border-[#ead9d8] px-5 py-4"
          >
            <div>
              <h2 class="font-semibold">Products</h2>

              <p class="mt-0.5 text-xs text-gray-500">
                {{ filteredProducts.length }} product{{
                  filteredProducts.length === 1 ? "" : "s"
                }}
              </p>
            </div>

            <button
              type="button"
              @click="fetchProducts"
              class="rounded-lg border border-[#ead9d8] px-3 py-2 text-xs text-gray-600 transition hover:border-[#9b4056] hover:text-[#9b4056]"
            >
              Refresh
            </button>
          </div>

          <!-- Loading -->
          <div
            v-if="loading"
            class="flex items-center justify-center px-5 py-16 text-sm text-gray-500"
          >
            Loading products...
          </div>

          <!-- Empty -->
          <div
            v-else-if="filteredProducts.length === 0"
            class="px-5 py-16 text-center"
          >
            <div class="text-4xl">◈</div>

            <h3 class="mt-4 font-semibold">No products found</h3>

            <p class="mt-1 text-sm text-gray-500">
              Add your first product to start your collection.
            </p>
          </div>

          <!-- Desktop table -->
          <div v-else class="hidden overflow-x-auto lg:block">
            <table class="w-full min-w-[900px]">
              <thead>
                <tr class="border-b border-[#ead9d8] bg-[#fffaf8] text-left">
                  <th
                    class="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500"
                  >
                    Product
                  </th>

                  <th
                    class="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500"
                  >
                    Category
                  </th>

                  <th
                    class="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500"
                  >
                    Price
                  </th>

                  <th
                    class="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500"
                  >
                    Stock
                  </th>

                  <th
                    class="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500"
                  >
                    Media
                  </th>

                  <th
                    class="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500"
                  >
                    Status
                  </th>

                  <th
                    class="px-5 py-4 text-right text-xs font-semibold uppercase tracking-wider text-gray-500"
                  >
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr
                  v-for="product in filteredProducts"
                  :key="product.id"
                  class="border-b border-[#ead9d8] last:border-b-0"
                >
                  <!-- Product -->
                  <td class="px-5 py-4">
                    <div class="flex items-center gap-3">
                      <div
                        class="h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-[#ead9d8] bg-[#fffaf8]"
                      >
                        <img
                          v-if="product.image"
                          :src="product.image"
                          :alt="product.name"
                          class="h-full w-full object-cover"
                        />

                        <div
                          v-else
                          class="flex h-full w-full items-center justify-center text-xs text-gray-400"
                        >
                          No image
                        </div>
                      </div>

                      <div class="min-w-0">
                        <p class="truncate font-medium">
                          {{ product.name }}
                        </p>

                        <p
                          v-if="product.subCategory"
                          class="mt-1 text-xs text-gray-500"
                        >
                          {{ product.subCategory }}
                        </p>
                      </div>
                    </div>
                  </td>

                  <!-- Category -->
                  <td class="px-5 py-4">
                    <span
                      class="rounded-full bg-[#fff1f3] px-3 py-1 text-xs font-medium text-[#9b4056]"
                    >
                      {{ product.category }}
                    </span>
                  </td>

                  <!-- Price -->
                  <td class="px-5 py-4 text-sm font-medium">
                    ₹{{ formatPrice(product.price) }}
                  </td>

                  <!-- Stock -->
                  <td class="px-5 py-4">
                    <span
                      :class="
                        Number(product.stock) <= 5
                          ? 'text-amber-600'
                          : 'text-gray-700'
                      "
                      class="text-sm font-medium"
                    >
                      {{ product.stock }}
                    </span>
                  </td>

                  <!-- Media -->
                  <td class="px-5 py-4">
                    <div class="flex items-center gap-2">
                      <span
                        v-if="product.image"
                        class="rounded-lg bg-gray-100 px-2 py-1 text-[11px] text-gray-600"
                      >
                        Image{{
                          product.images?.length > 1
                            ? ` (${product.images.length})`
                            : ""
                        }}
                      </span>

                      <span
                        v-if="product.video"
                        class="rounded-lg bg-[#fff1f3] px-2 py-1 text-[11px] text-[#9b4056]"
                      >
                        Video
                      </span>

                      <span
                        v-if="!product.image && !product.video"
                        class="text-xs text-gray-400"
                      >
                        None
                      </span>
                    </div>
                  </td>

                  <!-- Status -->
                  <td class="px-5 py-4">
                    <span
                      :class="
                        product.status === 'Active'
                          ? 'bg-green-50 text-green-600'
                          : 'bg-gray-100 text-gray-500'
                      "
                      class="rounded-full px-3 py-1 text-xs font-medium"
                    >
                      {{ product.status }}
                    </span>
                  </td>

                  <!-- Actions -->
                  <td class="px-5 py-4">
                    <div class="flex justify-end gap-2">
                      <button
                        type="button"
                        @click="editProduct(product)"
                        class="rounded-lg border border-[#ead9d8] px-3 py-2 text-xs font-medium transition hover:border-[#9b4056] hover:text-[#9b4056]"
                      >
                        Edit
                      </button>

                      <button
                        type="button"
                        :disabled="deletingId === product.id"
                        @click="deleteProduct(product.id)"
                        class="rounded-lg border border-red-200 px-3 py-2 text-xs font-medium text-red-500 transition hover:bg-red-50 disabled:opacity-50"
                      >
                        {{
                          deletingId === product.id ? "Deleting..." : "Delete"
                        }}
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Mobile cards -->
          <div
            v-if="!loading && filteredProducts.length"
            class="divide-y divide-[#ead9d8] lg:hidden"
          >
            <div
              v-for="product in filteredProducts"
              :key="product.id"
              class="p-4"
            >
              <div class="flex gap-4">
                <div
                  class="h-24 w-24 shrink-0 overflow-hidden rounded-xl border border-[#ead9d8] bg-[#fffaf8]"
                >
                  <img
                    v-if="product.image"
                    :src="product.image"
                    :alt="product.name"
                    class="h-full w-full object-cover"
                  />

                  <div
                    v-else
                    class="flex h-full w-full items-center justify-center text-xs text-gray-400"
                  >
                    No image
                  </div>
                </div>

                <div class="min-w-0 flex-1">
                  <div class="flex items-start justify-between gap-2">
                    <div>
                      <h3 class="font-medium">
                        {{ product.name }}
                      </h3>

                      <p class="mt-1 text-xs text-gray-500">
                        {{ product.category }}

                        <span v-if="product.subCategory">
                          · {{ product.subCategory }}
                        </span>
                      </p>
                    </div>

                    <span
                      :class="
                        product.status === 'Active'
                          ? 'bg-green-50 text-green-600'
                          : 'bg-gray-100 text-gray-500'
                      "
                      class="shrink-0 rounded-full px-2.5 py-1 text-[10px] font-medium"
                    >
                      {{ product.status }}
                    </span>
                  </div>

                  <div class="mt-3 flex flex-wrap items-center gap-2">
                    <span class="text-sm font-semibold">
                      ₹{{ formatPrice(product.price) }}
                    </span>

                    <span class="text-xs text-gray-500">
                      Stock: {{ product.stock }}
                    </span>

                    <span
                      v-if="product.images?.length > 1"
                      class="rounded-md bg-gray-100 px-2 py-1 text-[10px] text-gray-600"
                    >
                      {{ product.images.length }} Images
                    </span>

                    <span
                      v-if="product.video"
                      class="rounded-md bg-[#fff1f3] px-2 py-1 text-[10px] text-[#9b4056]"
                    >
                      Video
                    </span>
                  </div>

                  <div class="mt-3 flex gap-2">
                    <button
                      type="button"
                      @click="editProduct(product)"
                      class="rounded-lg border border-[#ead9d8] px-3 py-2 text-xs"
                    >
                      Edit
                    </button>

                    <button
                      type="button"
                      :disabled="deletingId === product.id"
                      @click="deleteProduct(product.id)"
                      class="rounded-lg border border-red-200 px-3 py-2 text-xs text-red-500 disabled:opacity-50"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- VIDEO LIBRARY -->
        <section
          class="mt-8 overflow-hidden rounded-2xl border border-[#ead9d8] bg-white shadow-sm"
        >
          <div
            class="flex flex-col gap-3 border-b border-[#ead9d8] px-5 py-5 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <div class="flex items-center gap-2">
                <span
                  class="flex h-9 w-9 items-center justify-center rounded-xl bg-[#fff1f3] text-[#9b4056]"
                >
                  ▶
                </span>

                <div>
                  <h2 class="font-semibold">Video Library</h2>

                  <p class="text-xs text-gray-500">
                    Standalone videos for the Customised → Videos section.
                  </p>
                </div>
              </div>
            </div>

            <button
              type="button"
              @click="openStandaloneVideoModal"
              class="rounded-xl bg-[#9b4056] px-4 py-2.5 text-sm font-medium text-white transition hover:bg-[#85364a]"
            >
              + Add Video
            </button>
          </div>

          <div
            v-if="loadingStandaloneVideos"
            class="px-5 py-12 text-center text-sm text-gray-500"
          >
            Loading videos...
          </div>

          <div
            v-else-if="standaloneVideos.length === 0"
            class="px-5 py-12 text-center"
          >
            <div class="text-4xl">▶</div>

            <h3 class="mt-3 font-semibold">No standalone videos yet</h3>

            <p class="mt-1 text-sm text-gray-500">
              Upload a video directly without creating a product.
            </p>
          </div>

          <div v-else class="grid gap-5 p-5 sm:grid-cols-2 xl:grid-cols-3">
            <article
              v-for="video in standaloneVideos"
              :key="video.id"
              class="overflow-hidden rounded-2xl border border-[#ead9d8] bg-[#fffaf8]"
            >
              <div class="aspect-video bg-black">
                <video
                  :src="video.url"
                  controls
                  preload="metadata"
                  class="h-full w-full object-cover"
                ></video>
              </div>

              <div class="p-4">
                <div class="flex items-start justify-between gap-3">
                  <div class="min-w-0">
                    <h3 class="truncate font-medium">
                      {{ video.title || "MAAD Fashions Video" }}
                    </h3>

                    <p class="mt-1 text-xs text-gray-500">Standalone video</p>
                  </div>

                  <button
                    type="button"
                    :disabled="deletingVideoId === video.id"
                    @click="deleteStandaloneVideo(video.id)"
                    class="shrink-0 rounded-lg border border-red-200 px-3 py-2 text-xs text-red-500 transition hover:bg-red-50 disabled:opacity-50"
                  >
                    {{ deletingVideoId === video.id ? "..." : "Delete" }}
                  </button>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>
    </div>

    <!-- PRODUCT MODAL -->
    <div
      v-if="showModal"
      class="fixed inset-0 z-[70] flex items-start justify-center overflow-y-auto bg-black/40 p-3 sm:p-5"
      @click.self="closeModal"
    >
      <div
        class="my-2 flex max-h-[calc(100vh-1rem)] w-full max-w-2xl flex-col overflow-hidden rounded-3xl border border-[#ead9d8] bg-white shadow-2xl sm:my-4 sm:max-h-[calc(100vh-2rem)]"
      >
        <!-- Modal header -->
        <div
          class="sticky top-0 z-10 flex shrink-0 items-center justify-between border-b border-[#ead9d8] bg-white px-5 py-4 sm:px-6"
        >
          <div>
            <p class="text-[10px] uppercase tracking-[0.25em] text-[#9b4056]">
              Product
            </p>

            <h2 class="mt-1 text-xl font-semibold">
              {{ editingProduct ? "Edit Product" : "Add Product" }}
            </h2>
          </div>

          <button
            type="button"
            @click="closeModal"
            class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#ead9d8] text-gray-500 transition hover:border-[#9b4056] hover:text-[#9b4056]"
          >
            ×
          </button>
        </div>

        <!-- Scrollable form -->
        <form
          @submit.prevent="saveProduct"
          class="min-h-0 flex-1 overflow-y-auto"
        >
          <div class="space-y-5 p-5 sm:p-6">
            <!-- Name -->
            <div>
              <label class="mb-1.5 block text-xs font-medium text-gray-600">
                Product Name *
              </label>

              <input
                v-model="form.name"
                type="text"
                placeholder="Enter product name"
                class="w-full rounded-xl border border-[#ead9d8] bg-[#fffaf8] px-4 py-3 text-sm outline-none focus:border-[#9b4056]"
              />
            </div>

            <!-- Description -->
            <div>
              <label class="mb-1.5 block text-xs font-medium text-gray-600">
                Description
              </label>

              <textarea
                v-model="form.description"
                rows="4"
                placeholder="Describe your product..."
                class="w-full resize-y rounded-xl border border-[#ead9d8] bg-[#fffaf8] px-4 py-3 text-sm outline-none focus:border-[#9b4056]"
              ></textarea>
            </div>

            <!-- Category -->
            <div class="grid gap-4 sm:grid-cols-2">
              <div>
                <label class="mb-1.5 block text-xs font-medium text-gray-600">
                  Category *
                </label>

                <select
                  v-model="form.category"
                  @change="handleCategoryChange"
                  class="w-full rounded-xl border border-[#ead9d8] bg-[#fffaf8] px-4 py-3 text-sm outline-none focus:border-[#9b4056]"
                >
                  <option>Dresses</option>
                  <option>Sarees</option>
                  <option>Kids Wear</option>
                  <option>Customised</option>
                </select>
              </div>

              <div
                v-if="
                  form.category === 'Kids Wear' ||
                  form.category === 'Customised'
                "
              >
                <label class="mb-1.5 block text-xs font-medium text-gray-600">
                  Subcategory *
                </label>

                <select
                  v-model="form.subCategory"
                  class="w-full rounded-xl border border-[#ead9d8] bg-[#fffaf8] px-4 py-3 text-sm outline-none focus:border-[#9b4056]"
                >
                  <option value="" disabled>Select subcategory</option>

                  <template v-if="form.category === 'Kids Wear'">
                    <option>Dresses</option>
                    <option>Party Wear</option>
                    <option>Festive</option>
                    <option>Casual</option>
                  </template>

                  <template v-if="form.category === 'Customised'">
                    <option>Frock</option>
                    <option>Croptop</option>
                    <option>Party Wear</option>
                    <option>Blouse</option>
                    <option>Fabric</option>
                    <option>Kids</option>
                    <option>Cord Set</option>
                  </template>
                </select>
              </div>
            </div>

            <!-- Price / Stock -->
            <div class="grid gap-4 sm:grid-cols-2">
              <div>
                <label class="mb-1.5 block text-xs font-medium text-gray-600">
                  Price *
                </label>

                <div class="relative">
                  <span
                    class="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-500"
                  >
                    ₹
                  </span>

                  <input
                    v-model="form.price"
                    type="number"
                    min="0"
                    step="0.01"
                    placeholder="0"
                    class="w-full rounded-xl border border-[#ead9d8] bg-[#fffaf8] py-3 pl-8 pr-4 text-sm outline-none focus:border-[#9b4056]"
                  />
                </div>
              </div>

              <div>
                <label class="mb-1.5 block text-xs font-medium text-gray-600">
                  Stock *
                </label>

                <input
                  v-model="form.stock"
                  type="number"
                  min="0"
                  step="1"
                  placeholder="0"
                  class="w-full rounded-xl border border-[#ead9d8] bg-[#fffaf8] px-4 py-3 text-sm outline-none focus:border-[#9b4056]"
                />
              </div>
            </div>

            <!-- PRODUCT IMAGES -->
            <div>
              <label class="mb-1.5 block text-xs font-medium text-gray-600">
                PRODUCT IMAGES *
              </label>

              <input
                ref="imageInput"
                type="file"
                accept="image/jpeg,image/png,image/webp"
                multiple
                class="hidden"
                @change="handleMultipleImageSelect"
              />

              <button
                type="button"
                @click="imageInput?.click()"
                class="flex w-full flex-col items-center justify-center rounded-2xl border border-dashed border-[#d9bfc2] bg-[#fffaf8] px-5 py-7 text-center transition hover:border-[#9b4056] hover:bg-[#fff5f6]"
              >
                <div
                  class="flex h-12 w-12 items-center justify-center rounded-full bg-[#fff1f3] text-[#9b4056]"
                >
                  ↑
                </div>

                <p class="mt-3 text-sm font-medium">
                  {{
                    uploadingImage
                      ? "Uploading images..."
                      : "Choose product images"
                  }}
                </p>

                <p class="mt-1 text-xs text-gray-500">
                  JPG, PNG or WEBP · Multiple images · Maximum 5MB each
                </p>
              </button>

              <!-- Image gallery -->
              <div
                v-if="form.images.length"
                class="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3"
              >
                <div
                  v-for="(image, index) in form.images"
                  :key="image.url"
                  class="group relative overflow-hidden rounded-2xl border border-[#ead9d8] bg-[#fffaf8]"
                >
                  <img
                    :src="image.url"
                    :alt="`Product image ${index + 1}`"
                    class="aspect-[3/4] w-full object-cover"
                  />

                  <div
                    class="absolute inset-x-0 bottom-0 flex items-center justify-between bg-black/50 p-2"
                  >
                    <button
                      type="button"
                      @click="setCoverImage(index)"
                      class="rounded-lg bg-white/90 px-2 py-1 text-[10px] font-medium text-gray-700"
                    >
                      {{ image.url === form.image ? "Cover" : "Set Cover" }}
                    </button>

                    <button
                      type="button"
                      @click="removeProductImage(index)"
                      class="rounded-lg bg-white/90 px-2 py-1 text-[10px] font-medium text-red-600"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>

              <div
                v-if="form.images.length"
                class="mt-3 rounded-xl bg-[#fff1f3] px-4 py-3 text-xs text-[#9b4056]"
              >
                {{ form.images.length }}
                {{ form.images.length === 1 ? "image" : "images" }}
                selected. The cover image will be shown in product listings.
              </div>
            </div>

            <!-- PRODUCT VIDEO -->
            <div>
              <label class="mb-1.5 block text-xs font-medium text-gray-600">
                PRODUCT VIDEO
                <span class="font-normal text-gray-400"> (Optional) </span>
              </label>

              <input
                ref="videoInput"
                type="file"
                accept="video/mp4,video/webm,video/quicktime,video/x-msvideo"
                class="hidden"
                @change="handleProductVideoSelect"
              />

              <button
                type="button"
                @click="videoInput?.click()"
                class="flex w-full flex-col items-center justify-center rounded-2xl border border-dashed border-[#d9bfc2] bg-[#fffaf8] px-5 py-7 text-center transition hover:border-[#9b4056] hover:bg-[#fff5f6]"
              >
                <div
                  class="flex h-12 w-12 items-center justify-center rounded-full bg-[#fff1f3] text-[#9b4056]"
                >
                  ▶
                </div>

                <p class="mt-3 text-sm font-medium">
                  {{
                    uploadingVideo
                      ? "Uploading video..."
                      : "Choose product video"
                  }}
                </p>

                <p class="mt-1 text-xs text-gray-500">
                  MP4, WEBM, MOV or AVI · Maximum 50MB
                </p>
              </button>

              <div v-if="videoPreview" class="mt-4">
                <video
                  :src="videoPreview"
                  controls
                  class="max-h-64 w-full rounded-2xl bg-black"
                ></video>

                <input
                  v-model="form.videoTitle"
                  type="text"
                  placeholder="Video title (optional)"
                  class="mt-3 w-full rounded-xl border border-[#ead9d8] bg-[#fffaf8] px-4 py-3 text-sm outline-none focus:border-[#9b4056]"
                />
              </div>
            </div>

            <!-- Status -->
            <div>
              <label class="mb-1.5 block text-xs font-medium text-gray-600">
                Status
              </label>

              <select
                v-model="form.status"
                class="w-full rounded-xl border border-[#ead9d8] bg-[#fffaf8] px-4 py-3 text-sm outline-none focus:border-[#9b4056]"
              >
                <option>Active</option>
                <option>Draft</option>
              </select>
            </div>

            <!-- Buttons -->
            <div
              class="flex flex-col-reverse gap-3 border-t border-[#ead9d8] pt-5 sm:flex-row sm:justify-end"
            >
              <button
                type="button"
                @click="closeModal"
                class="rounded-xl border border-[#ead9d8] px-5 py-3 text-sm font-medium transition hover:bg-[#fffaf8]"
              >
                Cancel
              </button>

              <button
                type="submit"
                :disabled="saving || uploadingImage || uploadingVideo"
                class="rounded-xl bg-[#9b4056] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#85364a] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {{
                  saving
                    ? "Saving..."
                    : editingProduct
                      ? "Update Product"
                      : "Save Product"
                }}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>

    <!-- STANDALONE VIDEO MODAL -->
    <div
      v-if="showStandaloneVideoModal"
      class="fixed inset-0 z-[80] flex items-start justify-center overflow-y-auto bg-black/40 p-3 sm:p-5"
      @click.self="closeStandaloneVideoModal"
    >
      <div
        class="my-2 flex max-h-[calc(100vh-1rem)] w-full max-w-lg flex-col overflow-hidden rounded-3xl border border-[#ead9d8] bg-white shadow-2xl sm:my-4 sm:max-h-[calc(100vh-2rem)]"
      >
        <!-- Header -->
        <div
          class="flex shrink-0 items-center justify-between border-b border-[#ead9d8] bg-white px-5 py-5"
        >
          <div>
            <p class="text-[10px] uppercase tracking-[0.25em] text-[#9b4056]">
              Video Library
            </p>

            <h2 class="mt-1 text-xl font-semibold">Add Standalone Video</h2>
          </div>

          <button
            type="button"
            @click="closeStandaloneVideoModal"
            class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#ead9d8] text-gray-500 hover:text-[#9b4056]"
          >
            ×
          </button>
        </div>

        <!-- Scrollable form -->
        <form
          @submit.prevent="saveStandaloneVideo"
          class="min-h-0 flex-1 overflow-y-auto"
        >
          <div class="space-y-5 p-5 sm:p-6">
            <!-- Title -->
            <div>
              <label class="mb-1.5 block text-xs font-medium text-gray-600">
                Video Title *
              </label>

              <input
                v-model="standaloneVideoTitle"
                type="text"
                placeholder="Example: New Festive Collection"
                class="w-full rounded-xl border border-[#ead9d8] bg-[#fffaf8] px-4 py-3 text-sm outline-none focus:border-[#9b4056]"
              />
            </div>

            <!-- Video -->
            <div>
              <label class="mb-1.5 block text-xs font-medium text-gray-600">
                Video *
              </label>

              <input
                ref="standaloneVideoInput"
                type="file"
                accept="video/mp4,video/webm,video/quicktime,video/x-msvideo"
                class="hidden"
                @change="handleStandaloneVideoSelect"
              />

              <button
                type="button"
                @click="standaloneVideoInput?.click()"
                class="flex w-full flex-col items-center justify-center rounded-2xl border border-dashed border-[#d9bfc2] bg-[#fffaf8] px-5 py-8 text-center transition hover:border-[#9b4056] hover:bg-[#fff5f6]"
              >
                <div
                  class="flex h-12 w-12 items-center justify-center rounded-full bg-[#fff1f3] text-[#9b4056]"
                >
                  ↑
                </div>

                <p class="mt-3 text-sm font-medium">
                  {{
                    uploadingStandaloneVideo
                      ? "Uploading video..."
                      : "Choose video"
                  }}
                </p>

                <p class="mt-1 text-xs text-gray-500">
                  MP4, WEBM, MOV or AVI · Maximum 50MB
                </p>
              </button>
            </div>

            <!-- Preview -->
            <div v-if="standaloneVideoPreview">
              <video
                :src="standaloneVideoPreview"
                controls
                class="max-h-64 w-full rounded-2xl bg-black"
              ></video>
            </div>

            <!-- Buttons -->
            <div
              class="flex flex-col-reverse gap-3 border-t border-[#ead9d8] pt-5 sm:flex-row sm:justify-end"
            >
              <button
                type="button"
                @click="closeStandaloneVideoModal"
                class="rounded-xl border border-[#ead9d8] px-5 py-3 text-sm font-medium"
              >
                Cancel
              </button>

              <button
                type="submit"
                :disabled="
                  standaloneVideoSaving ||
                  uploadingStandaloneVideo ||
                  !standaloneVideoUrl
                "
                class="rounded-xl bg-[#9b4056] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#85364a] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {{ standaloneVideoSaving ? "Saving..." : "Save Video" }}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { RouterLink, useRouter } from "vue-router";

const router = useRouter();

const API_URL = "http://localhost:3000";

/* UI */
const sidebarOpen = ref(false);
const search = ref("");
const selectedCategory = ref("All");
const selectedStatus = ref("All");
const showModal = ref(false);
const editingProduct = ref(null);
const loading = ref(false);
const saving = ref(false);
const deletingId = ref(null);
const errorMessage = ref("");

/* PRODUCTS */
const products = ref([]);
const imageInput = ref(null);
const imagePreview = ref("");
const uploadingImage = ref(false);
const videoInput = ref(null);
const videoPreview = ref("");
const uploadingVideo = ref(false);

/* STANDALONE VIDEOS */
const standaloneVideos = ref([]);
const showStandaloneVideoModal = ref(false);
const standaloneVideoInput = ref(null);
const standaloneVideoTitle = ref("");
const standaloneVideoUrl = ref("");
const standaloneVideoPreview = ref("");
const uploadingStandaloneVideo = ref(false);
const standaloneVideoSaving = ref(false);
const loadingStandaloneVideos = ref(false);
const deletingVideoId = ref(null);

/* FORM */
const createEmptyForm = () => ({
  name: "",
  description: "",
  category: "Dresses",
  subCategory: "",
  price: "",
  stock: "",
  image: "",
  publicId: "",
  images: [],
  video: "",
  videoTitle: "",
  status: "Active",
});

const form = ref(createEmptyForm());

/* AUTH */
function getToken() {
  return (
    localStorage.getItem("adminAccessToken") ||
    sessionStorage.getItem("adminAccessToken") ||
    ""
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

function getUploadHeaders() {
  const token = getToken();

  return token
    ? {
        Authorization: `Bearer ${token}`,
      }
    : {};
}

/* HELPERS */
function formatPrice(value) {
  const number = Number(value || 0);

  return number.toLocaleString("en-IN", {
    maximumFractionDigits: 2,
  });
}

function getApiError(data, fallback) {
  if (!data) return fallback;

  if (typeof data.message === "string") {
    return data.message;
  }

  if (Array.isArray(data.message)) {
    return data.message.join(", ");
  }

  return fallback;
}

function formatProduct(product) {
  const productImages = Array.isArray(product.images) ? product.images : [];

  const firstImage = productImages.length ? productImages[0] : null;

  const productVideos = Array.isArray(product.videos) ? product.videos : [];

  const firstVideo = productVideos.length ? productVideos[0] : null;

  return {
    ...product,
    images: productImages,
    image: firstImage?.url || "",
    publicId: firstImage?.publicId || "",
    video: firstVideo?.url || "",
    videoTitle: firstVideo?.title || "",
    status: product.isActive ? "Active" : "Draft",
  };
}

/* FETCH PRODUCTS */
async function fetchProducts() {
  loading.value = true;
  errorMessage.value = "";

  try {
    const response = await fetch(`${API_URL}/products`, {
      method: "GET",
      headers: getHeaders(),
    });

    const data = await response.json().catch(() => null);

    if (!response.ok) {
      throw new Error(getApiError(data, "Failed to load products."));
    }

    products.value = Array.isArray(data) ? data.map(formatProduct) : [];
  } catch (error) {
    console.error("fetchProducts:", error);
    errorMessage.value = error?.message || "Failed to load products.";
  } finally {
    loading.value = false;
  }
}

/* FETCH STANDALONE VIDEOS */
async function fetchStandaloneVideos() {
  loadingStandaloneVideos.value = true;

  try {
    const response = await fetch(`${API_URL}/products/standalone-videos`, {
      method: "GET",
      headers: getHeaders(),
    });

    const data = await response.json().catch(() => null);

    if (!response.ok) {
      throw new Error(getApiError(data, "Failed to load videos."));
    }

    standaloneVideos.value = Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("fetchStandaloneVideos:", error);
    errorMessage.value = error?.message || "Failed to load video library.";
  } finally {
    loadingStandaloneVideos.value = false;
  }
}

/* FILTERS */
const filteredProducts = computed(() => {
  const query = search.value.trim().toLowerCase();

  return products.value.filter((product) => {
    const matchesSearch =
      !query ||
      product.name?.toLowerCase().includes(query) ||
      product.description?.toLowerCase().includes(query) ||
      product.category?.toLowerCase().includes(query) ||
      product.subCategory?.toLowerCase().includes(query);

    const matchesCategory =
      selectedCategory.value === "All" ||
      product.category === selectedCategory.value;

    const matchesStatus =
      selectedStatus.value === "All" || product.status === selectedStatus.value;

    return matchesSearch && matchesCategory && matchesStatus;
  });
});

const activeProducts = computed(() =>
  products.value.filter((product) => product.status === "Active"),
);

const lowStockProducts = computed(() =>
  products.value.filter((product) => Number(product.stock) <= 5),
);

/* CATEGORY */
function handleCategoryChange() {
  if (
    form.value.category !== "Kids Wear" &&
    form.value.category !== "Customised"
  ) {
    form.value.subCategory = "";
  }
}

/* ADD PRODUCT */
function openAddProduct() {
  editingProduct.value = null;
  form.value = createEmptyForm();
  imagePreview.value = "";
  videoPreview.value = "";
  errorMessage.value = "";
  showModal.value = true;
}

/* EDIT PRODUCT */
function editProduct(product) {
  editingProduct.value = product;

  const existingImages = Array.isArray(product.images)
    ? product.images.map((image) => ({
        url: image.url,
        publicId: image.publicId || "",
      }))
    : product.image
      ? [
          {
            url: product.image,
            publicId: product.publicId || "",
          },
        ]
      : [];

  form.value = {
    name: product.name || "",
    description: product.description || "",
    category: product.category || "Dresses",
    subCategory: product.subCategory || "",
    price: product.price ?? "",
    stock: product.stock ?? "",
    image: product.image || existingImages[0]?.url || "",
    publicId: product.publicId || existingImages[0]?.publicId || "",
    images: existingImages,
    video: product.video || "",
    videoTitle: product.videoTitle || "",
    status: product.status || "Active",
  };

  imagePreview.value = product.image || existingImages[0]?.url || "";

  videoPreview.value = product.video || "";
  errorMessage.value = "";
  showModal.value = true;
}

/* MULTIPLE IMAGE UPLOAD */
async function handleMultipleImageSelect(event) {
  const files = Array.from(event.target.files || []);

  event.target.value = "";

  if (!files.length) return;

  const validFiles = files.filter((file) => {
    if (!file.type.startsWith("image/")) {
      errorMessage.value = "Please select only valid image files.";

      return false;
    }

    if (file.size > 5 * 1024 * 1024) {
      errorMessage.value = `${file.name} must be smaller than 5MB.`;

      return false;
    }

    return true;
  });

  if (!validFiles.length) return;

  errorMessage.value = "";
  uploadingImage.value = true;

  try {
    for (const file of validFiles) {
      const body = new FormData();

      body.append("file", file);

      const response = await fetch(`${API_URL}/products/upload-image`, {
        method: "POST",
        headers: getUploadHeaders(),
        body,
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(getApiError(data, "Image upload failed."));
      }

      if (data?.url) {
        const uploadedImage = {
          url: data.url,
          publicId: data.publicId || "",
        };

        form.value.images.push(uploadedImage);

        if (!form.value.image) {
          form.value.image = uploadedImage.url;
          form.value.publicId = uploadedImage.publicId;
          imagePreview.value = uploadedImage.url;
        }
      }
    }
  } catch (error) {
    console.error("handleMultipleImageSelect:", error);
    errorMessage.value = error?.message || "Image upload failed.";
  } finally {
    uploadingImage.value = false;
  }
}

/* REMOVE IMAGE */
function removeProductImage(index) {
  const removed = form.value.images[index];

  form.value.images.splice(index, 1);

  if (removed?.url === form.value.image) {
    const firstImage = form.value.images[0];

    form.value.image = firstImage?.url || "";
    form.value.publicId = firstImage?.publicId || "";
    imagePreview.value = firstImage?.url || "";
  }

  if (!form.value.images.length) {
    form.value.image = "";
    form.value.publicId = "";
    imagePreview.value = "";
  }
}

/* SET COVER IMAGE */
function setCoverImage(index) {
  const selectedImage = form.value.images[index];

  if (!selectedImage) return;

  form.value.image = selectedImage.url;
  form.value.publicId = selectedImage.publicId || "";
  imagePreview.value = selectedImage.url;
}

/* PRODUCT VIDEO UPLOAD */
async function handleProductVideoSelect(event) {
  const file = event.target.files?.[0];

  event.target.value = "";

  if (!file) return;

  const allowedTypes = [
    "video/mp4",
    "video/webm",
    "video/quicktime",
    "video/x-msvideo",
  ];

  if (!allowedTypes.includes(file.type)) {
    errorMessage.value = "Please select MP4, WEBM, MOV or AVI video.";

    return;
  }

  if (file.size > 50 * 1024 * 1024) {
    errorMessage.value = "Video must be smaller than 50MB.";

    return;
  }

  errorMessage.value = "";
  uploadingVideo.value = true;

  try {
    const body = new FormData();

    body.append("file", file);

    const response = await fetch(`${API_URL}/products/upload-video`, {
      method: "POST",
      headers: getUploadHeaders(),
      body,
    });

    const data = await response.json().catch(() => null);

    if (!response.ok) {
      throw new Error(getApiError(data, "Video upload failed."));
    }

    form.value.video = data.url || "";
    videoPreview.value = data.url || "";

    if (!form.value.videoTitle) {
      form.value.videoTitle = file.name
        .replace(/\.[^/.]+$/, "")
        .replace(/[-_]/g, " ");
    }
  } catch (error) {
    console.error("handleProductVideoSelect:", error);

    errorMessage.value = error?.message || "Video upload failed.";
  } finally {
    uploadingVideo.value = false;
  }
}

/* SAVE PRODUCT */
async function saveProduct() {
  errorMessage.value = "";

  if (!form.value.name.trim()) {
    errorMessage.value = "Product name is required.";
    return;
  }

  if (!form.value.category) {
    errorMessage.value = "Product category is required.";
    return;
  }

  if (
    (form.value.category === "Kids Wear" ||
      form.value.category === "Customised") &&
    !form.value.subCategory
  ) {
    errorMessage.value = "Please select a subcategory.";
    return;
  }

  if (!form.value.images.length) {
    errorMessage.value = "Please upload at least one product image.";
    return;
  }

  if (!form.value.image.trim()) {
    errorMessage.value = "Please select a cover image.";
    return;
  }

  const price = Number(form.value.price);
  const stock = Number(form.value.stock);

  if (!Number.isFinite(price) || price < 0) {
    errorMessage.value = "Please enter a valid price.";
    return;
  }

  if (!Number.isInteger(stock) || stock < 0) {
    errorMessage.value = "Please enter a valid stock quantity.";
    return;
  }

  saving.value = true;

  try {
    const payload = {
      name: form.value.name.trim(),

      description: form.value.description?.trim() || null,

      category: form.value.category,

      subCategory:
        form.value.category === "Kids Wear" ||
        form.value.category === "Customised"
          ? form.value.subCategory
          : null,

      price,

      stock,

      image: form.value.image.trim(),

      publicId: form.value.publicId?.trim() || null,

      images: form.value.images.map((image) => ({
        url: image.url,
        publicId: image.publicId || null,
      })),

      video: form.value.video?.trim() || null,

      videoTitle: form.value.videoTitle?.trim() || null,

      status: form.value.status,
    };

    const isEditing = Boolean(editingProduct.value);

    const url = isEditing
      ? `${API_URL}/products/${editingProduct.value.id}`
      : `${API_URL}/products`;

    const response = await fetch(url, {
      method: isEditing ? "PATCH" : "POST",
      headers: getHeaders(),
      body: JSON.stringify(payload),
    });

    const data = await response.json().catch(() => null);

    if (!response.ok) {
      throw new Error(
        getApiError(
          data,
          isEditing ? "Failed to update product." : "Failed to create product.",
        ),
      );
    }

    closeModal();

    await fetchProducts();
  } catch (error) {
    console.error("saveProduct:", error);

    errorMessage.value = error?.message || "Failed to save product.";
  } finally {
    saving.value = false;
  }
}

/* DELETE PRODUCT */
async function deleteProduct(id) {
  const product = products.value.find((item) => item.id === id);

  const confirmed = window.confirm(
    `Delete "${product?.name || "this product"}"?`,
  );

  if (!confirmed) return;

  deletingId.value = id;
  errorMessage.value = "";

  try {
    const response = await fetch(`${API_URL}/products/${id}`, {
      method: "DELETE",
      headers: getHeaders(),
    });

    const data = await response.json().catch(() => null);

    if (!response.ok) {
      throw new Error(getApiError(data, "Failed to delete product."));
    }

    products.value = products.value.filter((item) => item.id !== id);
  } catch (error) {
    console.error("deleteProduct:", error);

    errorMessage.value = error?.message || "Failed to delete product.";
  } finally {
    deletingId.value = null;
  }
}

/* CLOSE PRODUCT MODAL */
function closeModal() {
  showModal.value = false;
  editingProduct.value = null;
  form.value = createEmptyForm();
  imagePreview.value = "";
  videoPreview.value = "";
  errorMessage.value = "";
}

/* STANDALONE VIDEO MODAL */
function openStandaloneVideoModal() {
  standaloneVideoTitle.value = "";
  standaloneVideoUrl.value = "";
  standaloneVideoPreview.value = "";
  errorMessage.value = "";
  showStandaloneVideoModal.value = true;
}

function closeStandaloneVideoModal() {
  showStandaloneVideoModal.value = false;
  standaloneVideoTitle.value = "";
  standaloneVideoUrl.value = "";
  standaloneVideoPreview.value = "";
}

/* STANDALONE VIDEO UPLOAD */
async function handleStandaloneVideoSelect(event) {
  const file = event.target.files?.[0];

  event.target.value = "";

  if (!file) return;

  const allowedTypes = [
    "video/mp4",
    "video/webm",
    "video/quicktime",
    "video/x-msvideo",
  ];

  if (!allowedTypes.includes(file.type)) {
    errorMessage.value = "Please select MP4, WEBM, MOV or AVI video.";

    return;
  }

  if (file.size > 50 * 1024 * 1024) {
    errorMessage.value = "Video must be smaller than 50MB.";

    return;
  }

  errorMessage.value = "";
  uploadingStandaloneVideo.value = true;

  try {
    const body = new FormData();

    body.append("file", file);

    const response = await fetch(`${API_URL}/products/upload-video`, {
      method: "POST",
      headers: getUploadHeaders(),
      body,
    });

    const data = await response.json().catch(() => null);

    if (!response.ok) {
      throw new Error(getApiError(data, "Video upload failed."));
    }

    standaloneVideoUrl.value = data.url || "";
    standaloneVideoPreview.value = data.url || "";

    if (!standaloneVideoTitle.value) {
      standaloneVideoTitle.value = file.name
        .replace(/\.[^/.]+$/, "")
        .replace(/[-_]/g, " ");
    }
  } catch (error) {
    console.error("handleStandaloneVideoSelect:", error);

    errorMessage.value = error?.message || "Video upload failed.";
  } finally {
    uploadingStandaloneVideo.value = false;
  }
}

/* SAVE STANDALONE VIDEO */
async function saveStandaloneVideo() {
  errorMessage.value = "";

  if (!standaloneVideoTitle.value.trim()) {
    errorMessage.value = "Video title is required.";
    return;
  }

  if (!standaloneVideoUrl.value) {
    errorMessage.value = "Please upload a video.";
    return;
  }

  standaloneVideoSaving.value = true;

  try {
    const response = await fetch(`${API_URL}/products/standalone-video`, {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify({
        title: standaloneVideoTitle.value.trim(),
        url: standaloneVideoUrl.value.trim(),
      }),
    });

    const data = await response.json().catch(() => null);

    if (!response.ok) {
      throw new Error(getApiError(data, "Failed to save video."));
    }

    closeStandaloneVideoModal();

    await fetchStandaloneVideos();
  } catch (error) {
    console.error("saveStandaloneVideo:", error);

    errorMessage.value = error?.message || "Failed to save video.";
  } finally {
    standaloneVideoSaving.value = false;
  }
}

/* DELETE STANDALONE VIDEO */
async function deleteStandaloneVideo(id) {
  const video = standaloneVideos.value.find((item) => item.id === id);

  const confirmed = window.confirm(`Delete "${video?.title || "this video"}"?`);

  if (!confirmed) return;

  deletingVideoId.value = id;
  errorMessage.value = "";

  try {
    const response = await fetch(
      `${API_URL}/products/standalone-videos/${id}`,
      {
        method: "DELETE",
        headers: getHeaders(),
      },
    );

    const data = await response.json().catch(() => null);

    if (!response.ok) {
      throw new Error(getApiError(data, "Failed to delete video."));
    }

    standaloneVideos.value = standaloneVideos.value.filter(
      (item) => item.id !== id,
    );
  } catch (error) {
    console.error("deleteStandaloneVideo:", error);

    errorMessage.value = error?.message || "Failed to delete video.";
  } finally {
    deletingVideoId.value = null;
  }
}

/* LOGOUT */
function logout() {
  localStorage.removeItem("adminAccessToken");
  sessionStorage.removeItem("adminAccessToken");
  router.push("/admin");
}

/* INITIAL LOAD */
onMounted(async () => {
  await Promise.all([fetchProducts(), fetchStandaloneVideos()]);
});
</script>
