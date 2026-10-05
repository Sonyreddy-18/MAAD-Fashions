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

        <!-- MOBILE CLOSE -->
        <button
          type="button"
          class="ml-auto flex h-9 w-9 items-center justify-center rounded-full text-xl text-[#806d6d] hover:bg-[#fff0f3] lg:hidden"
          @click="sidebarOpen = false"
        >
          ×
        </button>
      </div>

      <!-- NAVIGATION -->
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

        <!-- PRODUCTS -->
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

        <!-- ORDERS -->
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

        <!-- CUSTOMERS -->
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

        <!-- STYLE STORIES -->
        <RouterLink
          to="/admin/style-stories"
          class="mb-2 flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-[#65575a] transition hover:bg-[#fff4f5] hover:text-[#9b4056]"
          @click="sidebarOpen = false"
        >
          <span
            class="flex h-7 w-7 items-center justify-center rounded-lg bg-[#f8e6ea] text-[#9b4056]"
          >
            📸
          </span>

          Style Stories
        </RouterLink>

        <!-- CUSTOM ORDERS -->
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
        <!-- CONTACT MESSAGES -->
        <RouterLink
          to="/admin/contact-messages"
          class="mb-2 flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-[#65575a] transition hover:bg-[#fff4f5] hover:text-[#9b4056]"
          @click="sidebarOpen = false"
        >
          <span
            class="flex h-7 w-7 items-center justify-center rounded-lg bg-[#f8e6ea] text-[#9b4056]"
          >
            ✉
          </span>

          Contact Messages
        </RouterLink>

        <!-- STALL -->
        <button
          type="button"
          class="mb-2 flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium text-[#65575a] transition hover:bg-[#fff4f5] hover:text-[#9b4056]"
          @click="scrollToSection('stall-management')"
        >
          <span
            class="flex h-7 w-7 items-center justify-center rounded-lg bg-[#f8e6ea] text-[#9b4056]"
          >
            ◷
          </span>

          Stall
        </button>

        <!-- CAROUSEL -->
        <button
          type="button"
          class="mb-2 flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium text-[#65575a] transition hover:bg-[#fff4f5] hover:text-[#9b4056]"
          @click="scrollToSection('carousel-management')"
        >
          <span
            class="flex h-7 w-7 items-center justify-center rounded-lg bg-[#f8e6ea] text-[#9b4056]"
          >
            ▧
          </span>

          Carousel
        </button>

        <!-- LARGE IMAGES -->
        <button
          type="button"
          class="mb-2 flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium text-[#65575a] transition hover:bg-[#fff4f5] hover:text-[#9b4056]"
          @click="scrollToSection('large-collection-management')"
        >
          <span
            class="flex h-7 w-7 items-center justify-center rounded-lg bg-[#f8e6ea] text-[#9b4056]"
          >
            ▤
          </span>

          Large Images
        </button>

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

      <!-- LOGOUT -->
      <div class="border-t border-[#ead9d8] p-4">
        <button
          type="button"
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

    <!-- MAIN AREA -->
    <div class="min-h-screen lg:pl-64">
      <!-- HEADER -->
      <header
        class="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-[#ead9d8] bg-[#fffaf8]/95 px-5 backdrop-blur-md sm:px-8"
      >
        <!-- MOBILE MENU -->
        <button
          type="button"
          @click="sidebarOpen = true"
          class="flex h-10 w-10 items-center justify-center rounded-xl border border-[#ead9d8] bg-white text-lg text-[#65575a] lg:hidden"
        >
          ☰
        </button>

        <div class="ml-4">
          <p class="text-[10px] font-bold tracking-[0.3em] text-[#9b4056]">
            MAAD FASHIONS
          </p>

          <h1 class="mt-1 font-serif text-xl font-semibold">Dashboard</h1>
        </div>

        <!-- ADMIN -->
        <div class="ml-auto flex items-center gap-3">
          <!-- REFRESH -->
          <button
            type="button"
            @click="refreshDashboard"
            :disabled="
              loading ||
              ordersLoading ||
              stallLoading ||
              carouselLoading ||
              largeCollectionLoading
            "
            class="flex h-10 w-10 items-center justify-center rounded-full border border-[#ead9d8] bg-white text-[#806d6d] transition hover:border-[#b83259] hover:text-[#b83259] disabled:cursor-not-allowed disabled:opacity-50"
            title="Refresh dashboard"
          >
            <span
              :class="{
                'animate-spin':
                  loading ||
                  ordersLoading ||
                  stallLoading ||
                  carouselLoading ||
                  largeCollectionLoading,
              }"
            >
              ↻
            </span>
          </button>

          <button
            type="button"
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
        </div>
      </header>

      <!-- CONTENT -->
      <main class="px-5 py-8 sm:px-8 lg:px-10">
        <!-- WELCOME -->
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
                Good evening
                <span v-if="adminName">, {{ adminName }}</span
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

        <!-- LOADING -->
        <div
          v-if="loading"
          class="mb-6 rounded-2xl border border-[#ead9d8] bg-white p-5 text-sm text-[#806d6d]"
        >
          Loading dashboard data...
        </div>

        <!-- ERROR -->
        <div
          v-if="errorMessage"
          class="mb-6 rounded-2xl border border-red-200 bg-red-50 p-5 text-sm text-red-600"
        >
          <div class="flex items-center justify-between gap-4">
            <span>{{ errorMessage }}</span>

            <button
              type="button"
              @click="refreshDashboard"
              class="rounded-full border border-red-200 bg-white px-4 py-2 text-xs font-semibold text-red-600 hover:bg-red-100"
            >
              Retry
            </button>
          </div>
        </div>

        <!-- STATS -->
        <section class="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          <!-- PRODUCTS -->
          <RouterLink
            to="/admin/products"
            class="block rounded-2xl border border-[#ead9d8] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
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
          </RouterLink>

          <!-- ORDERS -->
          <RouterLink
            to="/admin/orders"
            class="block rounded-2xl border border-[#ead9d8] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
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
          </RouterLink>

          <!-- CUSTOMERS -->
          <RouterLink
            to="/admin/customers"
            class="block rounded-2xl border border-[#ead9d8] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
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
          </RouterLink>

          <!-- SALES -->
          <RouterLink
            to="/admin/orders"
            class="block rounded-2xl bg-[#302525] p-6 text-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
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
          </RouterLink>
        </section>

        <!-- ORDER OVERVIEW -->
        <section class="mt-8 rounded-2xl border border-[#ead9d8] bg-white p-6">
          <div
            class="flex flex-col justify-between gap-3 sm:flex-row sm:items-center"
          >
            <div>
              <p class="text-[10px] font-bold tracking-[0.3em] text-[#9b4056]">
                ORDER OVERVIEW
              </p>

              <h3 class="mt-2 font-serif text-2xl font-semibold">
                Order Status
              </h3>
            </div>

            <RouterLink
              to="/admin/orders"
              class="text-sm font-semibold text-[#9b4056] hover:underline"
            >
              Manage orders →
            </RouterLink>
          </div>

          <div class="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-5">
            <!-- PENDING -->
            <div class="rounded-2xl border border-amber-100 bg-amber-50/60 p-4">
              <div
                class="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-700"
              >
                ⏳
              </div>

              <p class="mt-4 text-xs font-medium text-[#806d6d]">Pending</p>

              <p class="mt-1 font-serif text-2xl font-semibold text-amber-700">
                {{ orderSummary.pending }}
              </p>
            </div>

            <!-- PROCESSING -->
            <div
              class="rounded-2xl border border-purple-100 bg-purple-50/60 p-4"
            >
              <div
                class="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100 text-purple-700"
              >
                ⚙
              </div>

              <p class="mt-4 text-xs font-medium text-[#806d6d]">Processing</p>

              <p class="mt-1 font-serif text-2xl font-semibold text-purple-700">
                {{ orderSummary.processing }}
              </p>
            </div>

            <!-- SHIPPED -->
            <div class="rounded-2xl border border-blue-100 bg-blue-50/60 p-4">
              <div
                class="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-700"
              >
                🚚
              </div>

              <p class="mt-4 text-xs font-medium text-[#806d6d]">Shipped</p>

              <p class="mt-1 font-serif text-2xl font-semibold text-blue-700">
                {{ orderSummary.shipped }}
              </p>
            </div>

            <!-- DELIVERED -->
            <div class="rounded-2xl border border-green-100 bg-green-50/60 p-4">
              <div
                class="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 text-green-700"
              >
                ✓
              </div>

              <p class="mt-4 text-xs font-medium text-[#806d6d]">Delivered</p>

              <p class="mt-1 font-serif text-2xl font-semibold text-green-700">
                {{ orderSummary.delivered }}
              </p>
            </div>

            <!-- CANCELLED -->
            <div class="rounded-2xl border border-red-100 bg-red-50/60 p-4">
              <div
                class="flex h-10 w-10 items-center justify-center rounded-xl bg-red-100 text-red-700"
              >
                ×
              </div>

              <p class="mt-4 text-xs font-medium text-[#806d6d]">Cancelled</p>

              <p class="mt-1 font-serif text-2xl font-semibold text-red-700">
                {{ orderSummary.cancelled }}
              </p>
            </div>
          </div>
        </section>

        <!-- QUICK ACTIONS -->
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
            <!-- PRODUCTS -->
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

            <!-- ORDERS -->
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

            <!-- CUSTOM ORDERS -->
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

        <!-- STALL MANAGEMENT -->
        <section
          id="stall-management"
          class="mt-8 scroll-mt-24 rounded-2xl border border-[#ead9d8] bg-white p-6"
        >
          <div
            class="flex flex-col justify-between gap-4 sm:flex-row sm:items-center"
          >
            <div>
              <p class="text-[10px] font-bold tracking-[0.3em] text-[#9b4056]">
                STALL MANAGEMENT
              </p>

              <h3 class="mt-2 font-serif text-2xl font-semibold">
                Weekly Stall
              </h3>

              <p class="mt-1 text-sm text-[#806d6d]">
                Manage the stall displayed on your website.
              </p>
            </div>

            <button
              type="button"
              @click="openNewStall"
              class="rounded-full bg-[#9b4056] px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-[#84354a]"
            >
              + Add Stall
            </button>
          </div>

          <!-- STALL ERROR -->
          <div
            v-if="stallError"
            class="mt-5 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-600"
          >
            <div class="flex items-center justify-between gap-3">
              <span>{{ stallError }}</span>

              <button type="button" @click="stallError = ''" class="text-lg">
                ×
              </button>
            </div>
          </div>

          <!-- STALL FORM -->
          <div
            v-if="showStallForm"
            class="mt-6 rounded-2xl border border-[#ead9d8] bg-[#fffaf8] p-5"
          >
            <div class="flex items-center justify-between">
              <div>
                <h4 class="font-semibold">
                  {{ stallForm.id ? "Edit Stall" : "Add Stall" }}
                </h4>

                <p class="mt-1 text-xs text-[#806d6d]">
                  This information will appear on the storefront.
                </p>
              </div>

              <button
                type="button"
                @click="closeStallForm"
                class="flex h-8 w-8 items-center justify-center rounded-full bg-white text-lg text-[#806d6d] hover:bg-[#f8e6ea]"
              >
                ×
              </button>
            </div>

            <form
              class="mt-5 grid gap-4 sm:grid-cols-2"
              @submit.prevent="saveStall"
            >
              <div>
                <label
                  class="mb-1.5 block text-xs font-semibold text-[#65575a]"
                >
                  Day
                </label>

                <input
                  v-model="stallForm.date"
                  type="text"
                  placeholder="SATURDAY"
                  required
                  class="w-full rounded-xl border border-[#ead9d8] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#b83259]"
                />
              </div>

              <div>
                <label
                  class="mb-1.5 block text-xs font-semibold text-[#65575a]"
                >
                  Full Date
                </label>

                <input
                  v-model="stallForm.fullDate"
                  type="text"
                  placeholder="20 September 2026"
                  required
                  class="w-full rounded-xl border border-[#ead9d8] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#b83259]"
                />
              </div>

              <div>
                <label
                  class="mb-1.5 block text-xs font-semibold text-[#65575a]"
                >
                  Time
                </label>

                <input
                  v-model="stallForm.time"
                  type="text"
                  placeholder="10:00 AM – 6:00 PM"
                  required
                  class="w-full rounded-xl border border-[#ead9d8] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#b83259]"
                />
              </div>

              <div>
                <label
                  class="mb-1.5 block text-xs font-semibold text-[#65575a]"
                >
                  Location
                </label>

                <input
                  v-model="stallForm.location"
                  type="text"
                  placeholder="Kukatpally, Hyderabad"
                  required
                  class="w-full rounded-xl border border-[#ead9d8] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#b83259]"
                />
              </div>

              <label
                class="flex cursor-pointer items-center gap-3 sm:col-span-2"
              >
                <input
                  v-model="stallForm.isActive"
                  type="checkbox"
                  class="h-4 w-4 accent-[#9b4056]"
                />

                <span class="text-sm font-medium text-[#65575a]">
                  Show this stall on the website
                </span>
              </label>

              <div class="flex gap-3 sm:col-span-2">
                <button
                  type="submit"
                  :disabled="stallSaving"
                  class="rounded-full bg-[#9b4056] px-6 py-3 text-xs font-semibold text-white transition hover:bg-[#84354a] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {{
                    stallSaving
                      ? "Saving..."
                      : stallForm.id
                        ? "Update Stall"
                        : "Create Stall"
                  }}
                </button>

                <button
                  type="button"
                  @click="closeStallForm"
                  class="rounded-full border border-[#ead9d8] bg-white px-6 py-3 text-xs font-semibold text-[#65575a] hover:bg-[#fff4f5]"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>

          <!-- STALL LOADING -->
          <div
            v-if="stallLoading"
            class="mt-6 rounded-xl bg-[#fffaf8] p-6 text-center text-sm text-[#806d6d]"
          >
            Loading stalls...
          </div>

          <!-- NO STALL -->
          <div
            v-else-if="stalls.length === 0"
            class="mt-6 rounded-2xl border border-dashed border-[#ead9d8] p-8 text-center"
          >
            <div class="text-3xl">◷</div>

            <p class="mt-3 text-sm font-semibold">No stalls planned</p>

            <p class="mt-1 text-xs text-[#806d6d]">
              Add a stall when you have a weekly event planned.
            </p>
          </div>

          <!-- STALL LIST -->
          <div v-else class="mt-6 space-y-3">
            <div
              v-for="stall in stalls"
              :key="stall.id"
              class="flex flex-col gap-4 rounded-2xl border border-[#ead9d8] p-5 transition hover:border-[#d8a9b4] hover:bg-[#fffaf8] md:flex-row md:items-center md:justify-between"
            >
              <div class="flex items-center gap-4">
                <div
                  class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f7e5e9] text-xl text-[#9b4056]"
                >
                  ◷
                </div>

                <div>
                  <div class="flex flex-wrap items-center gap-2">
                    <h4 class="font-semibold">
                      {{ stall.date }}
                    </h4>

                    <span
                      v-if="stall.isActive"
                      class="rounded-full bg-green-50 px-2.5 py-1 text-[10px] font-semibold text-green-700"
                    >
                      Active
                    </span>

                    <span
                      v-else
                      class="rounded-full bg-gray-100 px-2.5 py-1 text-[10px] font-semibold text-gray-600"
                    >
                      Hidden
                    </span>
                  </div>

                  <p class="mt-1 text-sm text-[#806d6d]">
                    {{ stall.fullDate }} · {{ stall.time }}
                  </p>

                  <p class="mt-1 text-xs text-[#9a8588]">
                    {{ stall.location }}
                  </p>
                </div>
              </div>

              <div class="flex flex-wrap gap-2">
                <button
                  type="button"
                  @click="toggleStall(stall)"
                  class="rounded-full border border-[#ead9d8] bg-white px-4 py-2 text-xs font-semibold text-[#65575a] hover:border-[#b83259] hover:text-[#9b4056]"
                >
                  {{ stall.isActive ? "Hide" : "Show" }}
                </button>

                <button
                  type="button"
                  @click="editStall(stall)"
                  class="rounded-full border border-[#ead9d8] bg-white px-4 py-2 text-xs font-semibold text-[#65575a] hover:border-[#b83259] hover:text-[#9b4056]"
                >
                  Edit
                </button>

                <button
                  type="button"
                  @click="deleteStall(stall.id)"
                  class="rounded-full border border-red-100 bg-red-50 px-4 py-2 text-xs font-semibold text-red-600 hover:bg-red-100"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </section>

        <!-- CAROUSEL MANAGEMENT -->
        <section
          id="carousel-management"
          class="mt-8 scroll-mt-24 rounded-2xl border border-[#ead9d8] bg-white p-6"
        >
          <div
            class="flex flex-col justify-between gap-4 sm:flex-row sm:items-center"
          >
            <div>
              <p class="text-[10px] font-bold tracking-[0.3em] text-[#9b4056]">
                HOMEPAGE CAROUSEL
              </p>

              <h3 class="mt-2 font-serif text-2xl font-semibold">
                Carousel Images
              </h3>

              <p class="mt-1 text-sm text-[#806d6d]">
                Upload and manage the images shown in the homepage carousel.
              </p>
            </div>

            <button
              type="button"
              @click="openNewCarousel"
              class="rounded-full bg-[#9b4056] px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-[#84354a]"
            >
              + Add Image
            </button>
          </div>

          <div
            v-if="carouselError"
            class="mt-5 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-600"
          >
            <div class="flex items-center justify-between gap-3">
              <span>{{ carouselError }}</span>

              <button type="button" @click="carouselError = ''" class="text-lg">
                ×
              </button>
            </div>
          </div>

          <div
            v-if="showCarouselForm"
            class="mt-6 rounded-2xl border border-[#ead9d8] bg-[#fffaf8] p-5"
          >
            <div class="flex items-center justify-between">
              <div>
                <h4 class="font-semibold">
                  {{
                    carouselForm.id
                      ? "Edit Carousel Image"
                      : "Add Carousel Image"
                  }}
                </h4>

                <p class="mt-1 text-xs text-[#806d6d]">
                  Upload an image directly to Cloudinary.
                </p>
              </div>

              <button
                type="button"
                @click="closeCarouselForm"
                class="flex h-8 w-8 items-center justify-center rounded-full bg-white text-lg text-[#806d6d] hover:bg-[#f8e6ea]"
              >
                ×
              </button>
            </div>

            <form
              class="mt-5 grid gap-4 sm:grid-cols-2"
              @submit.prevent="saveCarouselImage"
            >
              <div class="sm:col-span-2">
                <label
                  class="mb-1.5 block text-xs font-semibold text-[#65575a]"
                >
                  Carousel Image
                </label>

                <div
                  class="relative rounded-2xl border-2 border-dashed border-[#ead9d8] bg-white p-5 text-center transition hover:border-[#b83259]"
                >
                  <input
                    ref="carouselFileInput"
                    type="file"
                    accept="image/*"
                    class="hidden"
                    @change="handleCarouselFile"
                  />

                  <button
                    type="button"
                    @click="openCarouselFilePicker"
                    class="mx-auto flex w-full flex-col items-center"
                  >
                    <div
                      class="flex h-14 w-14 items-center justify-center rounded-full bg-[#fff0f3] text-2xl text-[#9b4056]"
                    >
                      ↑
                    </div>

                    <p class="mt-3 text-sm font-semibold text-[#302525]">
                      {{
                        selectedCarouselFile
                          ? selectedCarouselFile.name
                          : carouselForm.id
                            ? "Choose a new image"
                            : "Choose carousel image"
                      }}
                    </p>

                    <p class="mt-1 text-xs text-[#806d6d]">
                      JPG, JPEG, PNG, WEBP • Maximum 5 MB
                    </p>
                  </button>
                </div>
              </div>

              <div>
                <label
                  class="mb-1.5 block text-xs font-semibold text-[#65575a]"
                >
                  Alt Text
                </label>

                <input
                  v-model="carouselForm.altText"
                  type="text"
                  placeholder="MAAD Fashions collection"
                  class="w-full rounded-xl border border-[#ead9d8] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#b83259]"
                />
              </div>

              <div>
                <label
                  class="mb-1.5 block text-xs font-semibold text-[#65575a]"
                >
                  Display Order
                </label>

                <input
                  v-model.number="carouselForm.sortOrder"
                  type="number"
                  min="0"
                  class="w-full rounded-xl border border-[#ead9d8] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#b83259]"
                />
              </div>

              <label
                class="flex cursor-pointer items-center gap-3 sm:col-span-2"
              >
                <input
                  v-model="carouselForm.isActive"
                  type="checkbox"
                  class="h-4 w-4 accent-[#9b4056]"
                />

                <span class="text-sm font-medium text-[#65575a]">
                  Show this image on the homepage
                </span>
              </label>

              <div
                v-if="carouselUploadPreview || carouselForm.url"
                class="overflow-hidden rounded-2xl border border-[#ead9d8] bg-white sm:col-span-2"
              >
                <img
                  :src="carouselUploadPreview || carouselForm.url"
                  :alt="carouselForm.altText || 'Carousel preview'"
                  class="h-52 w-full object-cover"
                  @error="carouselPreviewError = true"
                  @load="carouselPreviewError = false"
                />

                <p
                  v-if="carouselPreviewError"
                  class="border-t border-[#ead9d8] px-4 py-3 text-xs text-red-500"
                >
                  Image preview could not be loaded.
                </p>
              </div>

              <div class="flex gap-3 sm:col-span-2">
                <button
                  type="submit"
                  :disabled="carouselSaving || carouselUploading"
                  class="rounded-full bg-[#9b4056] px-6 py-3 text-xs font-semibold text-white transition hover:bg-[#84354a] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {{
                    carouselUploading
                      ? "Uploading..."
                      : carouselSaving
                        ? "Saving..."
                        : carouselForm.id
                          ? "Update Image"
                          : "Upload Image"
                  }}
                </button>

                <button
                  type="button"
                  @click="closeCarouselForm"
                  class="rounded-full border border-[#ead9d8] bg-white px-6 py-3 text-xs font-semibold text-[#65575a] hover:bg-[#fff4f5]"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>

          <div
            v-if="carouselLoading"
            class="mt-6 rounded-xl bg-[#fffaf8] p-6 text-center text-sm text-[#806d6d]"
          >
            Loading carousel images...
          </div>

          <div
            v-else-if="carouselImages.length === 0"
            class="mt-6 rounded-2xl border border-dashed border-[#ead9d8] p-8 text-center"
          >
            <div class="text-3xl">▧</div>

            <p class="mt-3 text-sm font-semibold">No carousel images</p>

            <p class="mt-1 text-xs text-[#806d6d]">
              Add images to display them on the homepage.
            </p>
          </div>

          <div v-else class="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            <div
              v-for="image in carouselImages"
              :key="image.id"
              class="overflow-hidden rounded-2xl border border-[#ead9d8] bg-white transition hover:-translate-y-1 hover:shadow-md"
            >
              <div class="relative">
                <img
                  :src="image.url"
                  :alt="image.altText || 'Carousel image'"
                  class="h-44 w-full object-cover"
                />

                <span
                  class="absolute left-3 top-3 rounded-full px-2.5 py-1 text-[10px] font-semibold"
                  :class="
                    image.isActive
                      ? 'bg-green-50 text-green-700'
                      : 'bg-white/90 text-gray-600'
                  "
                >
                  {{ image.isActive ? "Active" : "Hidden" }}
                </span>

                <span
                  class="absolute right-3 top-3 flex h-7 min-w-7 items-center justify-center rounded-full bg-[#302525]/80 px-2 text-[10px] font-bold text-white"
                >
                  #{{ image.sortOrder }}
                </span>
              </div>

              <div class="p-4">
                <p class="truncate text-xs text-[#806d6d]">
                  {{ image.altText || "No alt text" }}
                </p>

                <div class="mt-4 flex flex-wrap gap-2">
                  <button
                    type="button"
                    @click="toggleCarouselImage(image)"
                    class="rounded-full border border-[#ead9d8] bg-white px-3 py-2 text-[11px] font-semibold text-[#65575a] hover:border-[#b83259] hover:text-[#9b4056]"
                  >
                    {{ image.isActive ? "Hide" : "Show" }}
                  </button>

                  <button
                    type="button"
                    @click="editCarouselImage(image)"
                    class="rounded-full border border-[#ead9d8] bg-white px-3 py-2 text-[11px] font-semibold text-[#65575a] hover:border-[#b83259] hover:text-[#9b4056]"
                  >
                    Edit
                  </button>

                  <button
                    type="button"
                    @click="deleteCarouselImage(image.id)"
                    class="rounded-full border border-red-100 bg-red-50 px-3 py-2 text-[11px] font-semibold text-red-600 hover:bg-red-100"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- LARGE COLLECTION MANAGEMENT -->
        <section
          id="large-collection-management"
          class="mt-8 scroll-mt-24 rounded-2xl border border-[#ead9d8] bg-white p-6"
        >
          <div
            class="flex flex-col justify-between gap-4 sm:flex-row sm:items-center"
          >
            <div>
              <p class="text-[10px] font-bold tracking-[0.3em] text-[#9b4056]">
                HOMEPAGE EDITORIAL
              </p>

              <h3 class="mt-2 font-serif text-2xl font-semibold">
                Large Collection Images
              </h3>

              <p class="mt-1 text-sm text-[#806d6d]">
                Manage the large editorial images and content shown on the
                homepage.
              </p>
            </div>

            <button
              type="button"
              @click="openNewLargeCollection"
              class="rounded-full bg-[#9b4056] px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-[#84354a]"
            >
              + Add Image
            </button>
          </div>

          <!-- ERROR -->
          <div
            v-if="largeCollectionError"
            class="mt-5 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-600"
          >
            <div class="flex items-center justify-between gap-3">
              <span>{{ largeCollectionError }}</span>

              <button
                type="button"
                @click="largeCollectionError = ''"
                class="text-lg"
              >
                ×
              </button>
            </div>
          </div>

          <!-- FORM -->
          <div
            v-if="showLargeCollectionForm"
            class="mt-6 rounded-2xl border border-[#ead9d8] bg-[#fffaf8] p-5"
          >
            <div class="flex items-center justify-between">
              <div>
                <h4 class="font-semibold">
                  {{
                    largeCollectionForm.id
                      ? "Edit Large Collection"
                      : "Add Large Collection"
                  }}
                </h4>

                <p class="mt-1 text-xs text-[#806d6d]">
                  Add the image and editorial text for the homepage.
                </p>
              </div>

              <button
                type="button"
                @click="closeLargeCollectionForm"
                class="flex h-8 w-8 items-center justify-center rounded-full bg-white text-lg text-[#806d6d] hover:bg-[#f8e6ea]"
              >
                ×
              </button>
            </div>

            <form
              class="mt-5 grid gap-4 sm:grid-cols-2"
              @submit.prevent="saveLargeCollectionImage"
            >
              <!-- IMAGE -->
              <div class="sm:col-span-2">
                <label
                  class="mb-1.5 block text-xs font-semibold text-[#65575a]"
                >
                  Large Image
                </label>

                <div
                  class="relative rounded-2xl border-2 border-dashed border-[#ead9d8] bg-white p-5 text-center transition hover:border-[#b83259]"
                >
                  <input
                    ref="largeCollectionFileInput"
                    type="file"
                    accept="image/*"
                    class="hidden"
                    @change="handleLargeCollectionFile"
                  />

                  <button
                    type="button"
                    @click="openLargeCollectionFilePicker"
                    class="mx-auto flex w-full flex-col items-center"
                  >
                    <div
                      class="flex h-14 w-14 items-center justify-center rounded-full bg-[#fff0f3] text-2xl text-[#9b4056]"
                    >
                      ↑
                    </div>

                    <p class="mt-3 text-sm font-semibold text-[#302525]">
                      {{
                        selectedLargeCollectionFile
                          ? selectedLargeCollectionFile.name
                          : largeCollectionForm.id
                            ? "Choose a new image"
                            : "Choose large collection image"
                      }}
                    </p>

                    <p class="mt-1 text-xs text-[#806d6d]">
                      JPG, JPEG, PNG, WEBP • Maximum 5 MB
                    </p>
                  </button>
                </div>
              </div>

              <!-- EYEBROW -->
              <div>
                <label
                  class="mb-1.5 block text-xs font-semibold text-[#65575a]"
                >
                  Eyebrow
                </label>

                <input
                  v-model="largeCollectionForm.eyebrow"
                  type="text"
                  placeholder="NEW COLLECTION"
                  class="w-full rounded-xl border border-[#ead9d8] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#b83259]"
                />
              </div>

              <!-- TITLE -->
              <div>
                <label
                  class="mb-1.5 block text-xs font-semibold text-[#65575a]"
                >
                  Title
                </label>

                <input
                  v-model="largeCollectionForm.title"
                  type="text"
                  placeholder="The Festive Edit"
                  required
                  class="w-full rounded-xl border border-[#ead9d8] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#b83259]"
                />
              </div>

              <!-- SUBTITLE -->
              <div class="sm:col-span-2">
                <label
                  class="mb-1.5 block text-xs font-semibold text-[#65575a]"
                >
                  Subtitle
                </label>

                <textarea
                  v-model="largeCollectionForm.subtitle"
                  rows="3"
                  placeholder="A celebration of timeless silhouettes..."
                  class="w-full resize-none rounded-xl border border-[#ead9d8] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#b83259]"
                ></textarea>
              </div>

              <!-- ALT TEXT -->
              <div>
                <label
                  class="mb-1.5 block text-xs font-semibold text-[#65575a]"
                >
                  Alt Text
                </label>

                <input
                  v-model="largeCollectionForm.altText"
                  type="text"
                  placeholder="MAAD Fashions collection"
                  class="w-full rounded-xl border border-[#ead9d8] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#b83259]"
                />
              </div>

              <!-- LINK -->
              <div>
                <label
                  class="mb-1.5 block text-xs font-semibold text-[#65575a]"
                >
                  Link
                </label>

                <input
                  v-model="largeCollectionForm.link"
                  type="text"
                  placeholder="/dresses"
                  class="w-full rounded-xl border border-[#ead9d8] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#b83259]"
                />
              </div>

              <!-- DISPLAY ORDER -->
              <div>
                <label
                  class="mb-1.5 block text-xs font-semibold text-[#65575a]"
                >
                  Display Order
                </label>

                <input
                  v-model.number="largeCollectionForm.sortOrder"
                  type="number"
                  min="0"
                  class="w-full rounded-xl border border-[#ead9d8] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#b83259]"
                />
              </div>

              <!-- ACTIVE -->
              <label
                class="flex cursor-pointer items-center gap-3 sm:col-span-2"
              >
                <input
                  v-model="largeCollectionForm.isActive"
                  type="checkbox"
                  class="h-4 w-4 accent-[#9b4056]"
                />

                <span class="text-sm font-medium text-[#65575a]">
                  Show this image on the homepage
                </span>
              </label>

              <!-- PREVIEW -->
              <div
                v-if="largeCollectionUploadPreview || largeCollectionForm.url"
                class="overflow-hidden rounded-2xl border border-[#ead9d8] bg-white sm:col-span-2"
              >
                <img
                  :src="largeCollectionUploadPreview || largeCollectionForm.url"
                  :alt="
                    largeCollectionForm.altText || 'Large collection preview'
                  "
                  class="h-64 w-full object-cover"
                  @error="largeCollectionPreviewError = true"
                  @load="largeCollectionPreviewError = false"
                />

                <p
                  v-if="largeCollectionPreviewError"
                  class="border-t border-[#ead9d8] px-4 py-3 text-xs text-red-500"
                >
                  Image preview could not be loaded.
                </p>
              </div>

              <!-- BUTTONS -->
              <div class="flex gap-3 sm:col-span-2">
                <button
                  type="submit"
                  :disabled="largeCollectionSaving || largeCollectionUploading"
                  class="rounded-full bg-[#9b4056] px-6 py-3 text-xs font-semibold text-white transition hover:bg-[#84354a] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {{
                    largeCollectionUploading
                      ? "Uploading..."
                      : largeCollectionSaving
                        ? "Saving..."
                        : largeCollectionForm.id
                          ? "Update Image"
                          : "Upload Image"
                  }}
                </button>

                <button
                  type="button"
                  @click="closeLargeCollectionForm"
                  class="rounded-full border border-[#ead9d8] bg-white px-6 py-3 text-xs font-semibold text-[#65575a] hover:bg-[#fff4f5]"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>

          <!-- LOADING -->
          <div
            v-if="largeCollectionLoading"
            class="mt-6 rounded-xl bg-[#fffaf8] p-6 text-center text-sm text-[#806d6d]"
          >
            Loading large collection images...
          </div>

          <!-- EMPTY -->
          <div
            v-else-if="largeCollectionImages.length === 0"
            class="mt-6 rounded-2xl border border-dashed border-[#ead9d8] p-8 text-center"
          >
            <div class="text-3xl">▤</div>

            <p class="mt-3 text-sm font-semibold">No large collection images</p>

            <p class="mt-1 text-xs text-[#806d6d]">
              Add images to display the editorial section on the homepage.
            </p>
          </div>

          <!-- LIST -->
          <div v-else class="mt-6 grid gap-4 sm:grid-cols-2">
            <div
              v-for="image in largeCollectionImages"
              :key="image.id"
              class="overflow-hidden rounded-2xl border border-[#ead9d8] bg-white transition hover:-translate-y-1 hover:shadow-md"
            >
              <div class="relative">
                <img
                  :src="image.url"
                  :alt="
                    image.altText || image.title || 'Large collection image'
                  "
                  class="h-56 w-full object-cover"
                />

                <span
                  class="absolute left-3 top-3 rounded-full px-2.5 py-1 text-[10px] font-semibold"
                  :class="
                    image.isActive
                      ? 'bg-green-50 text-green-700'
                      : 'bg-white/90 text-gray-600'
                  "
                >
                  {{ image.isActive ? "Active" : "Hidden" }}
                </span>

                <span
                  class="absolute right-3 top-3 flex h-7 min-w-7 items-center justify-center rounded-full bg-[#302525]/80 px-2 text-[10px] font-bold text-white"
                >
                  #{{ image.sortOrder }}
                </span>
              </div>

              <div class="p-4">
                <p
                  v-if="image.eyebrow"
                  class="text-[10px] font-bold tracking-[0.2em] text-[#9b4056]"
                >
                  {{ image.eyebrow }}
                </p>

                <h4 class="mt-2 font-serif text-xl font-semibold">
                  {{ image.title }}
                </h4>

                <p
                  v-if="image.subtitle"
                  class="mt-2 line-clamp-2 text-xs leading-5 text-[#806d6d]"
                >
                  {{ image.subtitle }}
                </p>

                <div class="mt-4 flex flex-wrap gap-2">
                  <button
                    type="button"
                    @click="toggleLargeCollectionImage(image)"
                    class="rounded-full border border-[#ead9d8] bg-white px-3 py-2 text-[11px] font-semibold text-[#65575a] hover:border-[#b83259] hover:text-[#9b4056]"
                  >
                    {{ image.isActive ? "Hide" : "Show" }}
                  </button>

                  <button
                    type="button"
                    @click="editLargeCollectionImage(image)"
                    class="rounded-full border border-[#ead9d8] bg-white px-3 py-2 text-[11px] font-semibold text-[#65575a] hover:border-[#b83259] hover:text-[#9b4056]"
                  >
                    Edit
                  </button>

                  <button
                    type="button"
                    @click="deleteLargeCollectionImage(image.id)"
                    class="rounded-full border border-red-100 bg-red-50 px-3 py-2 text-[11px] font-semibold text-red-600 hover:bg-red-100"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- RECENT ORDERS -->
        <section
          class="mt-8 overflow-hidden rounded-2xl border border-[#ead9d8] bg-white"
        >
          <div
            class="flex flex-col gap-3 border-b border-[#ead9d8] px-6 py-5 sm:flex-row sm:items-center sm:justify-between"
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

          <!-- ORDERS LOADING -->
          <div
            v-if="ordersLoading"
            class="px-6 py-10 text-center text-sm text-[#806d6d]"
          >
            Loading recent orders...
          </div>

          <!-- ORDERS ERROR -->
          <div v-else-if="ordersError" class="px-6 py-10 text-center">
            <div class="text-3xl">⚠</div>

            <p class="mt-3 text-sm font-semibold text-red-600">
              Unable to load recent orders
            </p>

            <p class="mt-1 text-xs text-[#806d6d]">
              {{ ordersError }}
            </p>

            <button
              type="button"
              @click="fetchRecentOrders"
              class="mt-4 rounded-full bg-[#9b4056] px-5 py-2 text-xs font-semibold text-white hover:bg-[#84354a]"
            >
              Try Again
            </button>
          </div>

          <!-- NO ORDERS -->
          <div
            v-else-if="recentOrders.length === 0"
            class="px-6 py-10 text-center"
          >
            <div class="text-3xl">📦</div>

            <p class="mt-3 text-sm font-semibold">No orders yet</p>

            <p class="mt-1 text-xs text-[#806d6d]">
              Customer orders will appear here.
            </p>

            <RouterLink
              to="/admin/orders"
              class="mt-4 inline-block text-xs font-semibold text-[#9b4056] hover:underline"
            >
              Go to orders →
            </RouterLink>
          </div>

          <!-- ORDERS -->
          <div v-else class="divide-y divide-[#f0e5e3]">
            <RouterLink
              v-for="order in recentOrders"
              :key="order.id"
              :to="getOrderLink(order)"
              class="flex flex-col gap-4 px-6 py-5 transition hover:bg-[#fffaf8] md:flex-row md:items-center md:justify-between"
            >
              <div class="flex items-center gap-4">
                <div
                  class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f7e5e9] font-serif font-bold text-[#9b4056]"
                >
                  {{ getInitial(order.user?.name) }}
                </div>

                <div>
                  <p class="text-sm font-semibold">
                    {{ getCustomerName(order) }}
                  </p>

                  <p class="mt-1 text-xs text-[#9a8588]">
                    #{{ order.orderNumber || order.id }}

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

                <span
                  class="hidden text-[#9b4056] transition-transform group-hover:translate-x-1 md:inline"
                >
                  →
                </span>
              </div>
            </RouterLink>
          </div>
        </section>

        <!-- FOOTER -->
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
import { useRouter } from "vue-router";

const router = useRouter();

/* API */
const API_URL = (
  import.meta.env.VITE_API_URL || "http://localhost:3000"
).replace(/\/$/, "");

/* UI STATE */
const sidebarOpen = ref(false);
const loading = ref(false);
const ordersLoading = ref(false);
const errorMessage = ref("");
const ordersError = ref("");

/* ADMIN */
const admin = ref({
  id: null,
  name: "Admin",
  email: "",
  role: "ADMIN",
});

/* STATS */
const stats = ref({
  products: 0,
  orders: 0,
  customers: 0,
  totalSales: 0,
});

/* ORDER SUMMARY */
const orderSummary = ref({
  pending: 0,
  processing: 0,
  shipped: 0,
  delivered: 0,
  cancelled: 0,
});

/* RECENT ORDERS */
const recentOrders = ref([]);

/* STALL MANAGEMENT */
const stalls = ref([]);
const stallLoading = ref(false);
const stallSaving = ref(false);
const stallError = ref("");
const showStallForm = ref(false);

const emptyStallForm = () => ({
  id: null,
  date: "",
  fullDate: "",
  time: "",
  location: "",
  isActive: true,
});

const stallForm = ref(emptyStallForm());

/* CAROUSEL MANAGEMENT */
const carouselImages = ref([]);
const carouselLoading = ref(false);
const carouselSaving = ref(false);
const carouselUploading = ref(false);
const carouselError = ref("");
const showCarouselForm = ref(false);
const carouselPreviewError = ref(false);
const selectedCarouselFile = ref(null);
const carouselFileInput = ref(null);
const carouselUploadPreview = ref("");

const emptyCarouselForm = () => ({
  id: null,
  url: "",
  altText: "",
  sortOrder: 0,
  isActive: true,
});

const carouselForm = ref(emptyCarouselForm());

/* LARGE COLLECTION MANAGEMENT */
const largeCollectionImages = ref([]);
const largeCollectionLoading = ref(false);
const largeCollectionSaving = ref(false);
const largeCollectionUploading = ref(false);
const largeCollectionError = ref("");
const showLargeCollectionForm = ref(false);
const largeCollectionPreviewError = ref(false);
const selectedLargeCollectionFile = ref(null);
const largeCollectionFileInput = ref(null);
const largeCollectionUploadPreview = ref("");

const emptyLargeCollectionForm = () => ({
  id: null,
  url: "",
  eyebrow: "",
  title: "",
  subtitle: "",
  altText: "",
  link: "",
  sortOrder: 0,
  isActive: true,
});

const largeCollectionForm = ref(emptyLargeCollectionForm());

/* TOKEN */
const getToken = () => {
  return (
    localStorage.getItem("adminAccessToken") ||
    sessionStorage.getItem("adminAccessToken")
  );
};

/* HEADERS */
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

/* ADMIN NAME */
const adminName = computed(() => {
  return admin.value.name || "Admin";
});

/* ADMIN INITIAL */
const adminInitial = computed(() => {
  return adminName.value.charAt(0).toUpperCase();
});

/* SALES FORMAT */
const formattedSales = computed(() => {
  const amount = Number(stats.value.totalSales || 0);

  return `₹${amount.toLocaleString("en-IN", {
    maximumFractionDigits: 2,
  })}`;
});

/* CLEAR ADMIN SESSION */
const clearAdminSession = () => {
  localStorage.removeItem("adminAccessToken");
  localStorage.removeItem("adminLoggedIn");
  localStorage.removeItem("adminUser");

  sessionStorage.removeItem("adminAccessToken");
  sessionStorage.removeItem("adminLoggedIn");
  sessionStorage.removeItem("adminUser");
};

/* FETCH JSON */
const fetchJson = async (url, options = {}) => {
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

    throw new Error(message || `Request failed: ${response.status}`);
  }

  return data;
};

/* SCROLL TO SECTION */
const scrollToSection = (id) => {
  sidebarOpen.value = false;

  setTimeout(() => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, 100);
};

/* FETCH DASHBOARD */
const fetchDashboard = async () => {
  const token = getToken();

  if (!token) {
    router.replace("/admin");
    return;
  }

  loading.value = true;
  errorMessage.value = "";

  try {
    const data = await fetchJson(`${API_URL}/admin/dashboard`);

    if (data?.admin) {
      admin.value = {
        id: data.admin.id ?? null,
        name: data.admin.name || "Admin",
        email: data.admin.email || "",
        role: data.admin.role || "ADMIN",
      };
    }

    if (data?.stats) {
      stats.value = {
        products: Number(data.stats.products ?? 0),
        orders: Number(data.stats.orders ?? 0),
        customers: Number(data.stats.customers ?? 0),
        totalSales: Number(data.stats.totalSales ?? 0),
      };

      const summary = data.stats.orderSummary || {};

      orderSummary.value = {
        pending: Number(summary.pending ?? 0),
        processing: Number(summary.processing ?? 0),
        shipped: Number(summary.shipped ?? 0),
        delivered: Number(summary.delivered ?? 0),
        cancelled: Number(summary.cancelled ?? 0),
      };
    }
  } catch (error) {
    console.error("Dashboard error:", error);

    errorMessage.value = error?.message || "Unable to load dashboard data.";

    const message = error?.message?.toLowerCase() || "";

    if (
      message.includes("unauthorized") ||
      message.includes("forbidden") ||
      message.includes("invalid or expired token") ||
      message.includes("authorization token")
    ) {
      clearAdminSession();
      router.replace("/admin");
    }
  } finally {
    loading.value = false;
  }
};

/* FETCH RECENT ORDERS */
const fetchRecentOrders = async () => {
  const token = getToken();

  if (!token) {
    return;
  }

  ordersLoading.value = true;
  ordersError.value = "";

  try {
    const data = await fetchJson(`${API_URL}/orders`);

    const orderList = Array.isArray(data)
      ? data
      : Array.isArray(data?.orders)
        ? data.orders
        : [];

    recentOrders.value = orderList
      .slice()
      .sort((a, b) => {
        return new Date(b?.createdAt || 0) - new Date(a?.createdAt || 0);
      })
      .slice(0, 4);
  } catch (error) {
    console.error("Recent orders error:", error);

    ordersError.value = error?.message || "Unable to load recent orders.";
  } finally {
    ordersLoading.value = false;
  }
};

/* FETCH STALLS */
const fetchStalls = async () => {
  const token = getToken();

  if (!token) {
    return;
  }

  stallLoading.value = true;
  stallError.value = "";

  try {
    const data = await fetchJson(`${API_URL}/stalls`);

    stalls.value = Array.isArray(data)
      ? data
      : Array.isArray(data?.stalls)
        ? data.stalls
        : [];
  } catch (error) {
    console.error("Stalls error:", error);

    stallError.value = error?.message || "Unable to load stalls.";
  } finally {
    stallLoading.value = false;
  }
};

/* OPEN NEW STALL */
const openNewStall = () => {
  stallError.value = "";
  stallForm.value = emptyStallForm();
  showStallForm.value = true;

  scrollToSection("stall-management");
};

/* CLOSE STALL FORM */
const closeStallForm = () => {
  showStallForm.value = false;
  stallError.value = "";
  stallForm.value = emptyStallForm();
};

/* EDIT STALL */
const editStall = (stall) => {
  stallError.value = "";

  stallForm.value = {
    id: stall.id,
    date: stall.date || "",
    fullDate: stall.fullDate || "",
    time: stall.time || "",
    location: stall.location || "",
    isActive: Boolean(stall.isActive),
  };

  showStallForm.value = true;

  scrollToSection("stall-management");
};

/* SAVE STALL */
const saveStall = async () => {
  stallSaving.value = true;
  stallError.value = "";

  try {
    const payload = {
      date: stallForm.value.date.trim(),
      fullDate: stallForm.value.fullDate.trim(),
      time: stallForm.value.time.trim(),
      location: stallForm.value.location.trim(),
      isActive: Boolean(stallForm.value.isActive),
    };

    if (
      !payload.date ||
      !payload.fullDate ||
      !payload.time ||
      !payload.location
    ) {
      throw new Error("Date, full date, time and location are required.");
    }

    if (stallForm.value.id) {
      await fetchJson(`${API_URL}/stalls/${stallForm.value.id}`, {
        method: "PATCH",
        body: JSON.stringify(payload),
      });
    } else {
      await fetchJson(`${API_URL}/stalls`, {
        method: "POST",
        body: JSON.stringify(payload),
      });
    }

    closeStallForm();
    await fetchStalls();
  } catch (error) {
    console.error("Save stall error:", error);

    stallError.value = error?.message || "Unable to save stall.";
  } finally {
    stallSaving.value = false;
  }
};

/* TOGGLE STALL */
const toggleStall = async (stall) => {
  stallError.value = "";

  try {
    await fetchJson(`${API_URL}/stalls/${stall.id}`, {
      method: "PATCH",
      body: JSON.stringify({
        isActive: !stall.isActive,
      }),
    });

    await fetchStalls();
  } catch (error) {
    console.error("Toggle stall error:", error);

    stallError.value = error?.message || "Unable to update stall.";
  }
};

/* DELETE STALL */
const deleteStall = async (id) => {
  if (!window.confirm("Delete this stall?")) {
    return;
  }

  stallError.value = "";

  try {
    await fetchJson(`${API_URL}/stalls/${id}`, {
      method: "DELETE",
    });

    await fetchStalls();
  } catch (error) {
    console.error("Delete stall error:", error);

    stallError.value = error?.message || "Unable to delete stall.";
  }
};

/* FETCH CAROUSEL */
const fetchCarouselImages = async () => {
  const token = getToken();

  if (!token) {
    return;
  }

  carouselLoading.value = true;
  carouselError.value = "";

  try {
    const data = await fetchJson(`${API_URL}/carousel/admin`);

    carouselImages.value = Array.isArray(data)
      ? data
      : Array.isArray(data?.images)
        ? data.images
        : [];
  } catch (error) {
    console.error("Carousel error:", error);

    carouselError.value = error?.message || "Unable to load carousel images.";
  } finally {
    carouselLoading.value = false;
  }
};

/* OPEN CAROUSEL FILE PICKER */
const openCarouselFilePicker = () => {
  carouselFileInput.value?.click();
};

/* HANDLE CAROUSEL FILE */
const handleCarouselFile = (event) => {
  const file = event.target.files?.[0];

  if (!file) {
    return;
  }

  carouselError.value = "";
  carouselPreviewError.value = false;

  if (!file.type.startsWith("image/")) {
    carouselError.value = "Only image files are allowed.";
    event.target.value = "";
    return;
  }

  if (file.size > 5 * 1024 * 1024) {
    carouselError.value = "Image size must be less than 5 MB.";
    event.target.value = "";
    return;
  }

  selectedCarouselFile.value = file;

  if (carouselUploadPreview.value) {
    URL.revokeObjectURL(carouselUploadPreview.value);
  }

  carouselUploadPreview.value = URL.createObjectURL(file);
};

/* OPEN NEW CAROUSEL */
const openNewCarousel = () => {
  carouselError.value = "";
  carouselPreviewError.value = false;
  selectedCarouselFile.value = null;

  if (carouselUploadPreview.value) {
    URL.revokeObjectURL(carouselUploadPreview.value);
  }

  carouselUploadPreview.value = "";
  carouselForm.value = emptyCarouselForm();

  if (carouselFileInput.value) {
    carouselFileInput.value.value = "";
  }

  showCarouselForm.value = true;

  scrollToSection("carousel-management");
};

/* CLOSE CAROUSEL FORM */
const closeCarouselForm = () => {
  showCarouselForm.value = false;
  carouselError.value = "";
  carouselPreviewError.value = false;
  selectedCarouselFile.value = null;

  if (carouselUploadPreview.value) {
    URL.revokeObjectURL(carouselUploadPreview.value);
  }

  carouselUploadPreview.value = "";

  if (carouselFileInput.value) {
    carouselFileInput.value.value = "";
  }

  carouselForm.value = emptyCarouselForm();
};

/* EDIT CAROUSEL */
const editCarouselImage = (image) => {
  carouselError.value = "";
  carouselPreviewError.value = false;
  selectedCarouselFile.value = null;

  if (carouselUploadPreview.value) {
    URL.revokeObjectURL(carouselUploadPreview.value);
  }

  carouselUploadPreview.value = "";

  if (carouselFileInput.value) {
    carouselFileInput.value.value = "";
  }

  carouselForm.value = {
    id: image.id,
    url: image.url || "",
    altText: image.altText || "",
    sortOrder: Number(image.sortOrder ?? 0),
    isActive: Boolean(image.isActive),
  };

  showCarouselForm.value = true;

  scrollToSection("carousel-management");
};

/* SAVE CAROUSEL */
const saveCarouselImage = async () => {
  carouselSaving.value = true;
  carouselError.value = "";

  try {
    const token = getToken();

    if (!token) {
      throw new Error("Admin login required.");
    }

    if (carouselForm.value.id) {
      const payload = {
        url: carouselForm.value.url.trim(),
        altText: carouselForm.value.altText.trim() || null,
        sortOrder: Number(carouselForm.value.sortOrder ?? 0),
        isActive: Boolean(carouselForm.value.isActive),
      };

      if (!payload.url) {
        throw new Error("Image URL is required.");
      }

      await fetchJson(`${API_URL}/carousel/${carouselForm.value.id}`, {
        method: "PATCH",
        body: JSON.stringify(payload),
      });

      closeCarouselForm();
      await fetchCarouselImages();
      return;
    }

    if (!selectedCarouselFile.value) {
      throw new Error("Please select a carousel image.");
    }

    carouselUploading.value = true;

    const formData = new FormData();

    formData.append("file", selectedCarouselFile.value);
    formData.append("altText", carouselForm.value.altText.trim());
    formData.append(
      "sortOrder",
      String(Number(carouselForm.value.sortOrder ?? 0)),
    );
    formData.append("isActive", String(Boolean(carouselForm.value.isActive)));

    const response = await fetch(`${API_URL}/carousel/upload`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    const data = await response.json().catch(() => null);

    if (!response.ok) {
      const message = Array.isArray(data?.message)
        ? data.message.join(", ")
        : data?.message;

      throw new Error(message || `Upload failed: ${response.status}`);
    }

    closeCarouselForm();
    await fetchCarouselImages();
  } catch (error) {
    console.error("Save carousel error:", error);

    carouselError.value = error?.message || "Unable to save carousel image.";
  } finally {
    carouselSaving.value = false;
    carouselUploading.value = false;
  }
};

/* TOGGLE CAROUSEL */
const toggleCarouselImage = async (image) => {
  carouselError.value = "";

  try {
    await fetchJson(`${API_URL}/carousel/${image.id}`, {
      method: "PATCH",
      body: JSON.stringify({
        isActive: !image.isActive,
      }),
    });

    await fetchCarouselImages();
  } catch (error) {
    console.error("Toggle carousel error:", error);

    carouselError.value = error?.message || "Unable to update carousel image.";
  }
};

/* DELETE CAROUSEL */
const deleteCarouselImage = async (id) => {
  if (!window.confirm("Delete this carousel image?")) {
    return;
  }

  carouselError.value = "";

  try {
    await fetchJson(`${API_URL}/carousel/${id}`, {
      method: "DELETE",
    });

    await fetchCarouselImages();
  } catch (error) {
    console.error("Delete carousel error:", error);

    carouselError.value = error?.message || "Unable to delete carousel image.";
  }
};

/* FETCH LARGE COLLECTION */
const fetchLargeCollectionImages = async () => {
  const token = getToken();

  if (!token) {
    return;
  }

  largeCollectionLoading.value = true;
  largeCollectionError.value = "";

  try {
    const data = await fetchJson(`${API_URL}/large-collections/admin`);

    largeCollectionImages.value = Array.isArray(data)
      ? data
      : Array.isArray(data?.images)
        ? data.images
        : [];
  } catch (error) {
    console.error("Large collection error:", error);

    largeCollectionError.value =
      error?.message || "Unable to load large collection images.";
  } finally {
    largeCollectionLoading.value = false;
  }
};

/* OPEN LARGE COLLECTION FILE PICKER */
const openLargeCollectionFilePicker = () => {
  largeCollectionFileInput.value?.click();
};

/* HANDLE LARGE COLLECTION FILE */
const handleLargeCollectionFile = (event) => {
  const file = event.target.files?.[0];

  if (!file) {
    return;
  }

  largeCollectionError.value = "";
  largeCollectionPreviewError.value = false;

  if (!file.type.startsWith("image/")) {
    largeCollectionError.value = "Only image files are allowed.";
    event.target.value = "";
    return;
  }

  if (file.size > 5 * 1024 * 1024) {
    largeCollectionError.value = "Image size must be less than 5 MB.";
    event.target.value = "";
    return;
  }

  selectedLargeCollectionFile.value = file;

  if (largeCollectionUploadPreview.value) {
    URL.revokeObjectURL(largeCollectionUploadPreview.value);
  }

  largeCollectionUploadPreview.value = URL.createObjectURL(file);
};

/* OPEN NEW LARGE COLLECTION */
const openNewLargeCollection = () => {
  largeCollectionError.value = "";
  largeCollectionPreviewError.value = false;
  selectedLargeCollectionFile.value = null;

  if (largeCollectionUploadPreview.value) {
    URL.revokeObjectURL(largeCollectionUploadPreview.value);
  }

  largeCollectionUploadPreview.value = "";
  largeCollectionForm.value = emptyLargeCollectionForm();

  if (largeCollectionFileInput.value) {
    largeCollectionFileInput.value.value = "";
  }

  showLargeCollectionForm.value = true;

  scrollToSection("large-collection-management");
};

/* CLOSE LARGE COLLECTION FORM */
const closeLargeCollectionForm = () => {
  showLargeCollectionForm.value = false;
  largeCollectionError.value = "";
  largeCollectionPreviewError.value = false;
  selectedLargeCollectionFile.value = null;

  if (largeCollectionUploadPreview.value) {
    URL.revokeObjectURL(largeCollectionUploadPreview.value);
  }

  largeCollectionUploadPreview.value = "";

  if (largeCollectionFileInput.value) {
    largeCollectionFileInput.value.value = "";
  }

  largeCollectionForm.value = emptyLargeCollectionForm();
};

/* EDIT LARGE COLLECTION */
const editLargeCollectionImage = (image) => {
  largeCollectionError.value = "";
  largeCollectionPreviewError.value = false;
  selectedLargeCollectionFile.value = null;

  if (largeCollectionUploadPreview.value) {
    URL.revokeObjectURL(largeCollectionUploadPreview.value);
  }

  largeCollectionUploadPreview.value = "";

  if (largeCollectionFileInput.value) {
    largeCollectionFileInput.value.value = "";
  }

  largeCollectionForm.value = {
    id: image.id,
    url: image.url || "",
    eyebrow: image.eyebrow || "",
    title: image.title || "",
    subtitle: image.subtitle || "",
    altText: image.altText || "",
    link: image.link || "",
    sortOrder: Number(image.sortOrder ?? 0),
    isActive: Boolean(image.isActive),
  };

  showLargeCollectionForm.value = true;

  scrollToSection("large-collection-management");
};

/* SAVE LARGE COLLECTION */
const saveLargeCollectionImage = async () => {
  largeCollectionSaving.value = true;
  largeCollectionError.value = "";

  try {
    const token = getToken();

    if (!token) {
      throw new Error("Admin login required.");
    }

    if (!largeCollectionForm.value.title.trim()) {
      throw new Error("Title is required.");
    }

    if (largeCollectionForm.value.id) {
      const payload = {
        url: largeCollectionForm.value.url.trim(),
        eyebrow: largeCollectionForm.value.eyebrow.trim() || null,
        title: largeCollectionForm.value.title.trim(),
        subtitle: largeCollectionForm.value.subtitle.trim() || null,
        altText: largeCollectionForm.value.altText.trim() || null,
        link: largeCollectionForm.value.link.trim() || null,
        sortOrder: Number(largeCollectionForm.value.sortOrder ?? 0),
        isActive: Boolean(largeCollectionForm.value.isActive),
      };

      if (!payload.url) {
        throw new Error("Image URL is required.");
      }

      await fetchJson(
        `${API_URL}/large-collections/${largeCollectionForm.value.id}`,
        {
          method: "PATCH",
          body: JSON.stringify(payload),
        },
      );

      closeLargeCollectionForm();
      await fetchLargeCollectionImages();
      return;
    }

    if (!selectedLargeCollectionFile.value) {
      throw new Error("Please select a large collection image.");
    }

    largeCollectionUploading.value = true;

    const formData = new FormData();

    formData.append("file", selectedLargeCollectionFile.value);
    formData.append("eyebrow", largeCollectionForm.value.eyebrow.trim());
    formData.append("title", largeCollectionForm.value.title.trim());
    formData.append("subtitle", largeCollectionForm.value.subtitle.trim());
    formData.append("altText", largeCollectionForm.value.altText.trim());
    formData.append("link", largeCollectionForm.value.link.trim());
    formData.append(
      "sortOrder",
      String(Number(largeCollectionForm.value.sortOrder ?? 0)),
    );
    formData.append(
      "isActive",
      String(Boolean(largeCollectionForm.value.isActive)),
    );

    const response = await fetch(`${API_URL}/large-collections/upload`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    const data = await response.json().catch(() => null);

    if (!response.ok) {
      const message = Array.isArray(data?.message)
        ? data.message.join(", ")
        : data?.message;

      throw new Error(message || `Upload failed: ${response.status}`);
    }

    closeLargeCollectionForm();
    await fetchLargeCollectionImages();
  } catch (error) {
    console.error("Save large collection error:", error);

    largeCollectionError.value =
      error?.message || "Unable to save large collection image.";
  } finally {
    largeCollectionSaving.value = false;
    largeCollectionUploading.value = false;
  }
};

/* TOGGLE LARGE COLLECTION */
const toggleLargeCollectionImage = async (image) => {
  largeCollectionError.value = "";

  try {
    await fetchJson(`${API_URL}/large-collections/${image.id}`, {
      method: "PATCH",
      body: JSON.stringify({
        isActive: !image.isActive,
      }),
    });

    await fetchLargeCollectionImages();
  } catch (error) {
    console.error("Toggle large collection error:", error);

    largeCollectionError.value =
      error?.message || "Unable to update large collection image.";
  }
};

/* DELETE LARGE COLLECTION */
const deleteLargeCollectionImage = async (id) => {
  if (!window.confirm("Delete this large collection image?")) {
    return;
  }

  largeCollectionError.value = "";

  try {
    await fetchJson(`${API_URL}/large-collections/${id}`, {
      method: "DELETE",
    });

    await fetchLargeCollectionImages();
  } catch (error) {
    console.error("Delete large collection error:", error);

    largeCollectionError.value =
      error?.message || "Unable to delete large collection image.";
  }
};

/* REFRESH */
const refreshDashboard = async () => {
  await Promise.all([
    fetchDashboard(),
    fetchRecentOrders(),
    fetchStalls(),
    fetchCarouselImages(),
    fetchLargeCollectionImages(),
  ]);
};

/* CUSTOMER INITIAL */
const getInitial = (name) => {
  if (!name) {
    return "C";
  }

  return name.trim().charAt(0).toUpperCase();
};

/* AMOUNT FORMAT */
const formatAmount = (amount) => {
  return Number(amount || 0).toLocaleString("en-IN", {
    maximumFractionDigits: 2,
  });
};

/* ORDER STATUS TEXT */
const formatStatus = (status) => {
  const normalized = String(status || "").toUpperCase();

  const statusMap = {
    PENDING: "Pending",
    CONFIRMED: "Processing",
    PROCESSING: "Processing",
    SHIPPED: "Shipped",
    DELIVERED: "Delivered",
    CANCELLED: "Cancelled",
  };

  return statusMap[normalized] || "Pending";
};

/* ORDER STATUS STYLE */
const statusClass = (status) => {
  switch (String(status || "").toUpperCase()) {
    case "PENDING":
      return "bg-amber-50 text-amber-700";

    case "CONFIRMED":
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

/* FIRST PRODUCT IN ORDER */
const getFirstItemName = (order) => {
  if (!Array.isArray(order?.items) || order.items.length === 0) {
    return "";
  }

  const item = order.items[0];

  return item?.product?.name || item?.productName || item?.name || "";
};

/* CUSTOMER NAME */
const getCustomerName = (order) => {
  return order?.shippingName || order?.user?.name || "Customer";
};

/* ORDER LINK */
const getOrderLink = () => {
  return "/admin/orders";
};

/* LOGOUT */
const logout = () => {
  clearAdminSession();
  router.replace("/admin");
};

/* PAGE LOAD */
onMounted(async () => {
  const token = getToken();

  if (!token) {
    router.replace("/admin");
    return;
  }

  await refreshDashboard();
});
</script>
