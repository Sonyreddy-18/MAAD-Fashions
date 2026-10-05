<template>
  <div
    class="min-h-screen overflow-x-hidden bg-[#fffaf8] pb-20 text-[#302525] lg:pb-0"
  >
    <!-- MAIN -->
    <main class="mx-auto max-w-7xl px-4 pt-24 sm:px-6 lg:px-8 lg:pt-28">
      <!-- PAGE HEADER -->
      <div class="mb-8">
        <p
          class="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#ad3d5b]"
        >
          My Account
        </p>
        <h1 class="text-3xl font-bold tracking-tight sm:text-4xl">
          Welcome back<span v-if="firstName">, {{ firstName }}</span
          >.
        </h1>
        <p class="mt-2 max-w-2xl text-sm leading-6 text-[#806d6d] sm:text-base">
          Manage your profile, orders and MAAD Fashions shopping experience.
        </p>
      </div>

      <!-- ACCOUNT LAYOUT -->
      <div class="grid gap-6 lg:grid-cols-[260px_minmax(0,1fr)]">
        <!-- PROFILE CARD -->
        <aside
          class="h-fit rounded-2xl border border-[#ead9d8] bg-white p-4 shadow-sm"
        >
          <!-- PROFILE -->
          <div class="mb-5 rounded-2xl bg-[#fff0f2] p-5 text-center">
            <div
              class="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#ad3d5b] text-xl font-bold text-white shadow-md"
            >
              {{ initials }}
            </div>
            <h2 class="mt-3 text-base font-bold">
              {{ user?.name || "MAAD Customer" }}
            </h2>
            <p class="mt-1 break-all text-xs text-[#806d6d]">
              {{ user?.email || "" }}
            </p>
          </div>

          <!-- NAVIGATION -->
          <nav class="space-y-2">
            <button
              type="button"
              :class="menuClass('profile')"
              @click="changeSection('profile')"
            >
              <span>👤</span>
              <span>Profile</span>
            </button>

            <button
              type="button"
              :class="menuClass('orders')"
              @click="changeSection('orders')"
            >
              <span>🛍️</span>
              <span>My Orders</span>
            </button>

            <button
              type="button"
              :class="menuClass('custom')"
              @click="changeSection('custom')"
            >
              <span>✨</span>
              <span>Custom Orders</span>
            </button>

            <button
              type="button"
              :class="menuClass('wishlist')"
              @click="changeSection('wishlist')"
            >
              <span>♡</span>
              <span>Wishlist</span>
            </button>

            <button
              type="button"
              class="mt-4 flex w-full items-center gap-2 rounded-xl px-3 py-2.5 text-left text-xs font-semibold text-red-600 transition hover:bg-red-50 sm:gap-3 sm:px-4 sm:py-3 sm:text-sm"
              @click="logout"
            >
              <span>↪</span>
              <span>Logout</span>
            </button>
          </nav>
        </aside>

        <!-- RIGHT CONTENT -->
        <section>
          <!-- PROFILE -->
          <div
            v-if="activeSection === 'profile'"
            class="rounded-2xl border border-[#ead9d8] bg-white p-5 shadow-sm sm:p-7"
          >
            <div class="mb-6">
              <p
                class="text-xs font-semibold uppercase tracking-[0.2em] text-[#ad3d5b]"
              >
                Personal Information
              </p>
              <h2 class="mt-1 text-2xl font-bold">My Profile</h2>
              <p class="mt-2 text-sm text-[#806d6d]">
                Your account information with MAAD Fashions.
              </p>
            </div>

            <div class="grid gap-4 sm:grid-cols-2">
              <div class="rounded-xl border border-[#ead9d8] bg-[#fffaf8] p-4">
                <p class="text-xs font-medium text-[#806d6d]">Full Name</p>
                <p class="mt-1 text-sm font-semibold">
                  {{ user?.name || "Not available" }}
                </p>
              </div>

              <div class="rounded-xl border border-[#ead9d8] bg-[#fffaf8] p-4">
                <p class="text-xs font-medium text-[#806d6d]">Email</p>
                <p class="mt-1 break-all text-sm font-semibold">
                  {{ user?.email || "Not available" }}
                </p>
              </div>

              <div class="rounded-xl border border-[#ead9d8] bg-[#fffaf8] p-4">
                <p class="text-xs font-medium text-[#806d6d]">Phone</p>
                <p class="mt-1 text-sm font-semibold">
                  {{ user?.phone || "Not available" }}
                </p>
              </div>

              <div class="rounded-xl border border-[#ead9d8] bg-[#fffaf8] p-4">
                <p class="text-xs font-medium text-[#806d6d]">Account Type</p>
                <p class="mt-1 text-sm font-semibold">Customer</p>
              </div>
            </div>
          </div>

          <!-- ORDERS -->
          <div
            v-else-if="activeSection === 'orders'"
            class="rounded-2xl border border-[#ead9d8] bg-white p-5 shadow-sm sm:p-7"
          >
            <!-- HEADER -->
            <div
              class="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
            >
              <div>
                <p
                  class="text-xs font-semibold uppercase tracking-[0.2em] text-[#ad3d5b]"
                >
                  Shopping History
                </p>
                <h2 class="mt-1 text-2xl font-bold">My Orders</h2>
                <p class="mt-2 text-sm text-[#806d6d]">
                  View your recent MAAD Fashions orders.
                </p>
              </div>

              <button
                type="button"
                class="rounded-xl border border-[#ead9d9] px-4 py-2 text-xs font-semibold transition hover:bg-[#fff0f2]"
                @click="fetchMyOrders"
              >
                ↻ Refresh
              </button>
            </div>

            <!-- LOADING -->
            <div
              v-if="ordersLoading"
              class="rounded-2xl border border-dashed border-[#ead9d8] bg-[#fffaf8] px-5 py-12 text-center"
            >
              <div
                class="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-[#ead9d8] border-t-[#ad3d5b]"
              ></div>
              <p class="mt-3 text-sm text-[#806d6d]">Loading your orders...</p>
            </div>

            <!-- ERROR -->
            <div
              v-else-if="ordersError"
              class="rounded-2xl border border-red-200 bg-red-50 px-5 py-6 text-center"
            >
              <p class="text-sm font-medium text-red-600">
                {{ ordersError }}
              </p>

              <button
                type="button"
                class="mt-4 rounded-xl bg-[#ad3d5b] px-4 py-2 text-xs font-semibold text-white hover:bg-[#91344c]"
                @click="fetchMyOrders"
              >
                Try Again
              </button>
            </div>

            <!-- EMPTY -->
            <div
              v-else-if="orders.length === 0"
              class="rounded-2xl border border-dashed border-[#ead9d8] bg-[#fffaf8] px-5 py-12 text-center"
            >
              <div class="text-4xl">🛍️</div>
              <h3 class="mt-4 text-lg font-bold">No orders yet</h3>
              <p class="mx-auto mt-2 max-w-md text-sm text-[#806d6d]">
                Your MAAD Fashions orders will appear here after you place an
                order.
              </p>

              <button
                type="button"
                class="mt-5 rounded-xl bg-[#ad3d5b] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#91344c]"
                @click="router.push('/dresses')"
              >
                Start Shopping
              </button>
            </div>

            <!-- ORDERS -->
            <div v-else class="space-y-5">
              <div
                v-for="order in orders"
                :key="order.id"
                class="overflow-hidden rounded-2xl border border-[#ead9d8] bg-[#fffaf8]"
              >
                <!-- ORDER TOP -->
                <div
                  class="flex flex-col gap-3 border-b border-[#ead9d8] bg-white px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5"
                >
                  <div>
                    <p class="text-sm font-bold">
                      Order #{{ order.orderNumber || order.id }}
                    </p>
                    <p class="mt-1 text-xs text-[#806d6d]">
                      {{ formatDate(order.createdAt) }}
                    </p>
                  </div>

                  <div class="flex items-center gap-3">
                    <span
                      class="rounded-full px-3 py-1 text-[11px] font-bold"
                      :class="statusClass(order.status)"
                    >
                      {{ formatStatus(order.status) }}
                    </span>

                    <p class="text-sm font-bold">
                      ₹{{ formatAmount(order.totalAmount) }}
                    </p>
                  </div>
                </div>

                <!-- ORDER DETAILS -->
                <div class="px-4 py-4 sm:px-5">
                  <div class="grid gap-3 text-xs sm:grid-cols-2">
                    <div>
                      <span class="text-[#806d6d]"> Items </span>
                      <p class="mt-1 font-semibold">
                        {{ order.items?.length || 0 }}
                      </p>
                    </div>

                    <div>
                      <span class="text-[#806d6d]"> City </span>
                      <p class="mt-1 font-semibold">
                        {{ order.city || "—" }}
                      </p>
                    </div>

                    <div>
                      <span class="text-[#806d6d]"> Shipping To </span>
                      <p class="mt-1 font-semibold">
                        {{ order.shippingName || "—" }}
                      </p>
                    </div>

                    <div>
                      <span class="text-[#806d6d]"> Phone </span>
                      <p class="mt-1 font-semibold">
                        {{ order.shippingPhone || "—" }}
                      </p>
                    </div>
                  </div>

                  <div
                    class="mt-4 rounded-xl border border-[#ead9d8] bg-white p-3"
                  >
                    <p class="text-xs font-medium text-[#806d6d]">
                      Delivery Address
                    </p>
                    <p class="mt-1 text-xs font-semibold leading-5">
                      {{ order.address || "—" }}, {{ order.city || "" }},
                      {{ order.state || "" }}
                      {{ order.postalCode || "" }}
                    </p>
                  </div>

                  <!-- DELIVERED PRODUCTS -->
                  <div
                    v-if="order.status === 'DELIVERED' && order.items?.length"
                    class="mt-5"
                  >
                    <div class="mb-3">
                      <p class="text-sm font-bold">Your Delivered Items</p>
                      <p class="mt-1 text-xs text-[#806d6d]">
                        Loved something from your order? Share your MAAD Style
                        Story.
                      </p>
                    </div>

                    <div class="space-y-3">
                      <div
                        v-for="item in order.items"
                        :key="item.id || `${order.id}-${getProductId(item)}`"
                        class="flex flex-col gap-4 rounded-2xl border border-[#ead9d8] bg-white p-4 sm:flex-row sm:items-center sm:justify-between"
                      >
                        <!-- PRODUCT -->
                        <div class="flex min-w-0 items-center gap-3">
                          <!-- IMAGE -->
                          <div
                            v-if="getProductImage(item)"
                            class="h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-[#fff0f2]"
                          >
                            <img
                              :src="getProductImage(item)"
                              :alt="getProductName(item)"
                              class="h-full w-full object-cover"
                            />
                          </div>

                          <div
                            v-else
                            class="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-[#fff0f2] text-2xl"
                          >
                            👗
                          </div>

                          <div class="min-w-0">
                            <p class="truncate text-sm font-bold">
                              {{ getProductName(item) }}
                            </p>

                            <p class="mt-1 text-xs text-[#806d6d]">
                              Qty: {{ item.quantity || 1 }}
                            </p>

                            <p
                              v-if="getProductPrice(item) !== null"
                              class="mt-1 text-xs font-semibold text-[#ad3d5b]"
                            >
                              ₹{{ formatAmount(getProductPrice(item)) }}
                            </p>
                          </div>
                        </div>

                        <!-- STORY ACTION -->
                        <div class="shrink-0">
                          <!-- ALREADY SHARED -->
                          <div
                            v-if="hasStoryForProduct(getProductId(item))"
                            class="flex items-center gap-2 rounded-xl bg-green-50 px-4 py-2.5 text-xs font-bold text-green-700"
                          >
                            <span>✓</span>
                            <span>Style Story Shared</span>
                          </div>

                          <!-- SHARE BUTTON -->
                          <button
                            v-else
                            type="button"
                            class="w-full rounded-xl bg-[#ad3d5b] px-4 py-2.5 text-xs font-bold text-white shadow-sm transition hover:bg-[#91344c] sm:w-auto"
                            @click="openStoryModal(item, order)"
                          >
                            📸 Share Your Style Story
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- NON DELIVERED -->
                  <div
                    v-else-if="order.items?.length"
                    class="mt-5 rounded-xl border border-[#ead9d8] bg-white px-4 py-3"
                  >
                    <p class="text-xs text-[#806d6d]">
                      Style Stories become available after your order is marked
                      <span class="font-bold text-[#ad3d5b]">Delivered</span>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- CUSTOM ORDERS -->
          <div
            v-else-if="activeSection === 'custom'"
            class="rounded-2xl border border-[#ead9d8] bg-white p-5 shadow-sm sm:p-7"
          >
            <p
              class="text-xs font-semibold uppercase tracking-[0.2em] text-[#ad3d5b]"
            >
              Made For You
            </p>
            <h2 class="mt-1 text-2xl font-bold">Custom Orders</h2>

            <div
              class="mt-8 rounded-2xl border border-dashed border-[#ead9d8] bg-[#fffaf8] px-5 py-12 text-center"
            >
              <div class="text-4xl">✨</div>
              <h3 class="mt-4 text-lg font-bold">No custom orders yet</h3>
              <p class="mx-auto mt-2 max-w-md text-sm leading-6 text-[#806d6d]">
                Your specially customised MAAD Fashions orders will appear here.
              </p>

              <button
                type="button"
                class="mt-5 rounded-xl bg-[#ad3d5b] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#91344c]"
                @click="router.push('/customised-dresses')"
              >
                Create Your Dress
              </button>
            </div>
          </div>

          <!-- WISHLIST -->
          <div
            v-else-if="activeSection === 'wishlist'"
            class="rounded-2xl border border-[#ead9d8] bg-white p-5 shadow-sm sm:p-7"
          >
            <p
              class="text-xs font-semibold uppercase tracking-[0.2em] text-[#ad3d5b]"
            >
              Saved For Later
            </p>
            <h2 class="mt-1 text-2xl font-bold">Wishlist</h2>

            <div
              class="mt-8 rounded-2xl border border-dashed border-[#ead9d8] bg-[#fffaf8] px-5 py-12 text-center"
            >
              <div class="text-4xl">♡</div>
              <h3 class="mt-4 text-lg font-bold">Your wishlist is empty</h3>
              <p class="mx-auto mt-2 max-w-md text-sm leading-6 text-[#806d6d]">
                Save your favourite MAAD Fashions pieces here.
              </p>

              <button
                type="button"
                class="mt-5 rounded-xl bg-[#ad3d5b] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#91344c]"
                @click="router.push('/dresses')"
              >
                Explore Collection
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>

    <!-- STYLE STORY MODAL -->
    <div
      v-if="storyModalOpen"
      class="fixed inset-0 z-[200] flex items-center justify-center overflow-y-auto bg-[#302525]/50 px-4 py-6 backdrop-blur-sm"
      @click.self="closeStoryModal"
    >
      <div
        class="relative my-auto max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white shadow-2xl"
      >
        <!-- MODAL HEADER -->
        <div
          class="sticky top-0 z-10 flex items-start justify-between border-b border-[#ead9d8] bg-white px-5 py-4 sm:px-7"
        >
          <div class="pr-4">
            <p
              class="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ad3d5b]"
            >
              MAAD STYLE STORIES
            </p>
            <h2 class="mt-1 text-xl font-bold sm:text-2xl">
              Share Your Style Story
            </h2>
            <p class="mt-1 text-xs text-[#806d6d]">
              Tell us how you styled your MAAD Fashions piece.
            </p>
          </div>

          <button
            type="button"
            class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#fff0f2] text-lg text-[#302525] transition hover:bg-[#f8dfe4]"
            @click="closeStoryModal"
          >
            ×
          </button>
        </div>

        <!-- MODAL BODY -->
        <div class="p-5 sm:p-7">
          <!-- PRODUCT PREVIEW -->
          <div
            v-if="selectedProduct"
            class="mb-6 flex items-center gap-3 rounded-2xl border border-[#ead9d8] bg-[#fffaf8] p-3"
          >
            <div
              v-if="getProductImage(selectedProduct)"
              class="h-14 w-14 overflow-hidden rounded-xl"
            >
              <img
                :src="getProductImage(selectedProduct)"
                :alt="getProductName(selectedProduct)"
                class="h-full w-full object-cover"
              />
            </div>

            <div
              v-else
              class="flex h-14 w-14 items-center justify-center rounded-xl bg-[#fff0f2] text-2xl"
            >
              👗
            </div>

            <div class="min-w-0">
              <p class="text-xs text-[#806d6d]">Sharing a story for</p>
              <p class="truncate text-sm font-bold">
                {{ getProductName(selectedProduct) }}
              </p>
            </div>
          </div>

          <!-- SUCCESS -->
          <div
            v-if="storySuccess"
            class="rounded-2xl border border-green-200 bg-green-50 px-5 py-10 text-center"
          >
            <div
              class="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-2xl text-green-700"
            >
              ✓
            </div>
            <h3 class="mt-4 text-xl font-bold text-green-800">
              Story Submitted!
            </h3>
            <p class="mx-auto mt-2 max-w-md text-sm leading-6 text-green-700">
              Thank you for sharing your MAAD Style Story. It has been submitted
              for review and will appear after approval.
            </p>

            <button
              type="button"
              class="mt-6 rounded-xl bg-[#ad3d5b] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#91344c]"
              @click="closeStoryModal"
            >
              Done
            </button>
          </div>

          <!-- FORM -->
          <form v-else class="space-y-6" @submit.prevent="submitStyleStory">
            <!-- RATING -->
            <div>
              <label class="text-sm font-bold"> Your Rating </label>
              <p class="mt-1 text-xs text-[#806d6d]">
                How much did you love this piece?
              </p>

              <div class="mt-3 flex items-center gap-2">
                <button
                  v-for="star in 5"
                  :key="star"
                  type="button"
                  class="text-3xl transition-transform hover:scale-110"
                  :class="
                    star <= storyForm.rating
                      ? 'text-[#e0a33b]'
                      : 'text-[#d8caca]'
                  "
                  @click="storyForm.rating = star"
                >
                  ★
                </button>

                <span
                  v-if="storyForm.rating"
                  class="ml-2 text-xs font-semibold text-[#806d6d]"
                >
                  {{ storyForm.rating }}/5
                </span>
              </div>
            </div>

            <!-- STORY -->
            <div>
              <label for="style-story" class="text-sm font-bold">
                Your Style Story
              </label>
              <p class="mt-1 text-xs text-[#806d6d]">
                Tell us about your look, styling or experience.
              </p>

              <textarea
                id="style-story"
                v-model="storyForm.story"
                rows="5"
                maxlength="1000"
                placeholder="I styled this look for..."
                class="mt-3 w-full resize-none rounded-2xl border border-[#ead9d8] bg-[#fffaf8] px-4 py-3 text-sm outline-none transition placeholder:text-[#a99494] focus:border-[#ad3d5b] focus:ring-2 focus:ring-[#ad3d5b]/10"
              ></textarea>

              <div class="mt-1 text-right text-[11px] text-[#806d6d]">
                {{ storyForm.story.length }}/1000
              </div>
            </div>

            <!-- OCCASION -->
            <div>
              <label for="occasion" class="text-sm font-bold">
                Occasion
                <span class="font-normal text-[#806d6d]"> (optional) </span>
              </label>

              <input
                id="occasion"
                v-model="storyForm.occasion"
                type="text"
                maxlength="100"
                placeholder="Wedding, party, festival, birthday..."
                class="mt-3 w-full rounded-xl border border-[#ead9d8] bg-[#fffaf8] px-4 py-3 text-sm outline-none transition placeholder:text-[#a99494] focus:border-[#ad3d5b] focus:ring-2 focus:ring-[#ad3d5b]/10"
              />
            </div>

            <!-- MEDIA -->
            <div>
              <label class="text-sm font-bold"> Add Your Photo or Video </label>
              <p class="mt-1 text-xs leading-5 text-[#806d6d]">
                Share a photo or short video of your MAAD Fashions look. Photos
                up to 5 MB and videos up to 50 MB.
              </p>

              <!-- MEDIA SELECTOR -->
              <div class="mt-3 grid gap-3 sm:grid-cols-2">
                <label
                  class="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[#ead9d8] bg-[#fffaf8] px-4 py-6 text-center transition hover:border-[#ad3d5b] hover:bg-[#fff0f2]"
                >
                  <span class="text-3xl"> 📸 </span>
                  <span class="mt-2 text-sm font-bold"> Choose Photo </span>
                  <span class="mt-1 text-[11px] text-[#806d6d]">
                    JPG, PNG, WEBP · Max 5 MB
                  </span>

                  <input
                    ref="imageInput"
                    type="file"
                    accept="image/jpeg,image/jpg,image/png,image/webp"
                    class="hidden"
                    @change="handleImageSelect"
                  />
                </label>

                <label
                  class="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[#ead9d8] bg-[#fffaf8] px-4 py-6 text-center transition hover:border-[#ad3d5b] hover:bg-[#fff0f2]"
                >
                  <span class="text-3xl"> 🎥 </span>
                  <span class="mt-2 text-sm font-bold"> Choose Video </span>
                  <span class="mt-1 text-[11px] text-[#806d6d]">
                    MP4, WEBM · Max 50 MB
                  </span>

                  <input
                    ref="videoInput"
                    type="file"
                    accept="video/mp4,video/webm,video/quicktime,video/x-msvideo"
                    class="hidden"
                    @change="handleVideoSelect"
                  />
                </label>
              </div>

              <!-- SELECTED MEDIA -->
              <div
                v-if="selectedMediaFile"
                class="mt-4 flex items-center justify-between rounded-xl border border-[#ead9d8] bg-white px-4 py-3"
              >
                <div class="flex min-w-0 items-center gap-3">
                  <span class="text-xl">
                    {{ storyForm.mediaType === "IMAGE" ? "📸" : "🎥" }}
                  </span>

                  <div class="min-w-0">
                    <p class="truncate text-xs font-bold">
                      {{ selectedMediaFile.name }}
                    </p>
                    <p class="mt-1 text-[11px] text-[#806d6d]">
                      {{ formatFileSize(selectedMediaFile.size) }}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  class="ml-3 shrink-0 text-xs font-bold text-red-500 hover:text-red-700"
                  @click="removeSelectedMedia"
                >
                  Remove
                </button>
              </div>

              <!-- UPLOAD PROGRESS -->
              <div
                v-if="uploadingMedia"
                class="mt-4 rounded-xl bg-[#fff0f2] px-4 py-3"
              >
                <div class="flex items-center justify-between">
                  <span class="text-xs font-semibold text-[#ad3d5b]">
                    Uploading your
                    {{ storyForm.mediaType === "IMAGE" ? "photo" : "video" }}...
                  </span>
                  <span class="text-xs text-[#806d6d]"> Please wait </span>
                </div>

                <div class="mt-2 h-1.5 overflow-hidden rounded-full bg-white">
                  <div
                    class="h-full w-1/2 animate-pulse rounded-full bg-[#ad3d5b]"
                  ></div>
                </div>
              </div>

              <!-- MEDIA ERROR -->
              <p
                v-if="mediaError"
                class="mt-3 text-xs font-medium text-red-600"
              >
                {{ mediaError }}
              </p>
            </div>

            <!-- FORM ERROR -->
            <div
              v-if="storyError"
              class="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-xs font-medium leading-5 text-red-600"
            >
              {{ storyError }}
            </div>

            <!-- ACTIONS -->
            <div
              class="flex flex-col-reverse gap-3 border-t border-[#ead9d8] pt-5 sm:flex-row sm:justify-end"
            >
              <button
                type="button"
                class="rounded-xl border border-[#ead9d8] px-5 py-2.5 text-sm font-semibold transition hover:bg-[#fff0f2]"
                :disabled="submittingStory || uploadingMedia"
                @click="closeStoryModal"
              >
                Cancel
              </button>

              <button
                type="submit"
                class="rounded-xl bg-[#ad3d5b] px-6 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-[#91344c] disabled:cursor-not-allowed disabled:opacity-50"
                :disabled="submittingStory || uploadingMedia"
              >
                <span v-if="submittingStory"> Submitting... </span>
                <span v-else> Share My Style Story </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

/* ACCOUNT STATE */
const activeSection = ref("profile");
const orders = ref([]);
const ordersLoading = ref(false);
const ordersError = ref("");

const API_URL = (
  import.meta.env.VITE_API_URL || "http://localhost:3000"
).replace(/\/$/, "");

/* USER */
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
  if (!user.value?.name) return "";
  return user.value.name.split(" ")[0];
});

const initials = computed(() => {
  if (!user.value?.name) return "M";

  const parts = user.value.name.trim().split(/\s+/);

  if (parts.length === 1) {
    return parts[0].charAt(0).toUpperCase();
  }

  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
});

/* STYLE STORIES */
const myStories = ref([]);
const storiesLoading = ref(false);
const storyModalOpen = ref(false);
const selectedProduct = ref(null);
const selectedOrder = ref(null);
const storySuccess = ref(false);
const storyError = ref("");
const selectedMediaFile = ref(null);
const uploadingMedia = ref(false);
const mediaError = ref("");
const submittingStory = ref(false);
const imageInput = ref(null);
const videoInput = ref(null);

const storyForm = ref({
  productId: null,
  rating: 0,
  story: "",
  occasion: "",
  mediaUrl: "",
  mediaType: "",
});

/* FETCH STORIES */
const fetchMyStories = async () => {
  try {
    const token = getToken();

    if (!token) return;

    storiesLoading.value = true;

    const response = await fetch(`${API_URL}/style-stories/my-stories`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    let data = {};

    try {
      data = await response.json();
    } catch {
      data = {};
    }

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
          : data.message || "Unable to load your Style Stories.",
      );
    }

    myStories.value = Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Style Stories error:", error);
  } finally {
    storiesLoading.value = false;
  }
};

/* PRODUCT HELPERS */
const getProductId = (item) => {
  return Number(
    item?.productId ?? item?.product?.id ?? item?.product?.productId ?? 0,
  );
};

const getProductName = (item) => {
  return (
    item?.product?.name ||
    item?.productName ||
    item?.name ||
    "MAAD Fashions Product"
  );
};

const getProductImage = (item) => {
  return (
    item?.product?.image ||
    item?.product?.imageUrl ||
    item?.image ||
    item?.imageUrl ||
    ""
  );
};

const getProductPrice = (item) => {
  const price = item?.price ?? item?.product?.price ?? item?.unitPrice ?? null;

  if (price === null || price === undefined || price === "") {
    return null;
  }

  return Number(price);
};

/* CHECK STORY */
const hasStoryForProduct = (productId) => {
  if (!productId) return false;

  return myStories.value.some(
    (story) => Number(story.productId) === Number(productId),
  );
};

/* OPEN STORY MODAL */
const openStoryModal = (item, order = null) => {
  const productId = getProductId(item);

  if (!productId) {
    storyError.value =
      "Unable to identify this product. Please refresh your orders and try again.";
    return;
  }

  if (hasStoryForProduct(productId)) {
    return;
  }

  selectedProduct.value = item;
  selectedOrder.value = order;

  storyForm.value = {
    productId,
    rating: 0,
    story: "",
    occasion: "",
    mediaUrl: "",
    mediaType: "",
  };

  selectedMediaFile.value = null;
  storySuccess.value = false;
  storyError.value = "";
  mediaError.value = "";
  storyModalOpen.value = true;
  document.body.style.overflow = "hidden";
};

/* CLOSE MODAL */
const closeStoryModal = () => {
  if (submittingStory.value || uploadingMedia.value) {
    return;
  }

  storyModalOpen.value = false;
  selectedProduct.value = null;
  selectedOrder.value = null;
  selectedMediaFile.value = null;
  storySuccess.value = false;
  storyError.value = "";
  mediaError.value = "";

  storyForm.value = {
    productId: null,
    rating: 0,
    story: "",
    occasion: "",
    mediaUrl: "",
    mediaType: "",
  };

  document.body.style.overflow = "";
};

/* FILE VALIDATION */
const MAX_IMAGE_SIZE = 5 * 1024 * 1024;
const MAX_VIDEO_SIZE = 50 * 1024 * 1024;

const imageTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

const videoTypes = [
  "video/mp4",
  "video/webm",
  "video/quicktime",
  "video/x-msvideo",
];

/* IMAGE SELECT */
const handleImageSelect = async (event) => {
  const file = event.target.files?.[0];

  if (!file) return;

  mediaError.value = "";

  if (!imageTypes.includes(file.type)) {
    mediaError.value = "Please choose a JPG, PNG or WEBP image.";
    event.target.value = "";
    return;
  }

  if (file.size > MAX_IMAGE_SIZE) {
    mediaError.value = "Image must be smaller than 5 MB.";
    event.target.value = "";
    return;
  }

  selectedMediaFile.value = file;
  storyForm.value.mediaType = "IMAGE";

  await uploadMedia(file, "IMAGE");

  event.target.value = "";
};

/* VIDEO SELECT */
const handleVideoSelect = async (event) => {
  const file = event.target.files?.[0];

  if (!file) return;

  mediaError.value = "";

  if (!videoTypes.includes(file.type)) {
    mediaError.value = "Please choose an MP4, WEBM or supported video file.";
    event.target.value = "";
    return;
  }

  if (file.size > MAX_VIDEO_SIZE) {
    mediaError.value = "Video must be smaller than 50 MB.";
    event.target.value = "";
    return;
  }

  selectedMediaFile.value = file;
  storyForm.value.mediaType = "VIDEO";

  await uploadMedia(file, "VIDEO");

  event.target.value = "";
};

/* UPLOAD MEDIA */
const uploadMedia = async (file, mediaType) => {
  const token = getToken();

  if (!token) {
    router.replace("/login");
    return;
  }

  uploadingMedia.value = true;
  mediaError.value = "";
  storyForm.value.mediaUrl = "";

  try {
    const formData = new FormData();
    formData.append("file", file);

    const endpoint =
      mediaType === "IMAGE"
        ? `${API_URL}/style-stories/upload-image`
        : `${API_URL}/style-stories/upload-video`;

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    let data = {};

    try {
      data = await response.json();
    } catch {
      data = {};
    }

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
          : data.message || "Unable to upload media.",
      );
    }

    if (!data.url) {
      throw new Error("Media uploaded but no Cloudinary URL was returned.");
    }

    storyForm.value.mediaUrl = data.url;
    storyForm.value.mediaType = mediaType;
  } catch (error) {
    console.error("Style Story media upload error:", error);
    mediaError.value = error.message || "Unable to upload your media.";
    selectedMediaFile.value = null;
    storyForm.value.mediaUrl = "";
    storyForm.value.mediaType = "";
  } finally {
    uploadingMedia.value = false;
  }
};

/* REMOVE MEDIA */
const removeSelectedMedia = () => {
  selectedMediaFile.value = null;
  storyForm.value.mediaUrl = "";
  storyForm.value.mediaType = "";
  mediaError.value = "";
};

/* SUBMIT STORY */
const submitStyleStory = async () => {
  storyError.value = "";

  if (!storyForm.value.productId) {
    storyError.value =
      "Product information is missing. Please close and reopen the Style Story.";
    return;
  }

  if (!storyForm.value.rating) {
    storyError.value = "Please select a rating from 1 to 5.";
    return;
  }

  if (!storyForm.value.story.trim()) {
    storyError.value = "Please write a short Style Story.";
    return;
  }

  if (storyForm.value.story.trim().length < 5) {
    storyError.value = "Please write a little more about your experience.";
    return;
  }

  if (uploadingMedia.value) {
    storyError.value = "Please wait until your media finishes uploading.";
    return;
  }

  const token = getToken();

  if (!token) {
    router.replace("/login");
    return;
  }

  submittingStory.value = true;

  try {
    const payload = {
      productId: Number(storyForm.value.productId),
      rating: Number(storyForm.value.rating),
      story: storyForm.value.story.trim(),
      occasion: storyForm.value.occasion.trim() || undefined,
      mediaUrl: storyForm.value.mediaUrl || undefined,
      mediaType: storyForm.value.mediaType || undefined,
    };

    const response = await fetch(`${API_URL}/style-stories`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    let data = {};

    try {
      data = await response.json();
    } catch {
      data = {};
    }

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
          : data.message || "Unable to submit your Style Story.",
      );
    }

    /* UPDATE STORIES */
    if (data && data.id) {
      myStories.value.unshift(data);
    } else {
      await fetchMyStories();
    }

    storySuccess.value = true;
  } catch (error) {
    console.error("Style Story submit error:", error);
    storyError.value = error.message || "Unable to submit your Style Story.";
  } finally {
    submittingStory.value = false;
  }
};

/* ORDERS */
const fetchMyOrders = async () => {
  ordersLoading.value = true;
  ordersError.value = "";

  try {
    const token = getToken();

    if (!token) {
      router.replace("/login");
      return;
    }

    const response = await fetch(`${API_URL}/orders/my-orders`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    let data = {};

    try {
      data = await response.json();
    } catch {
      data = {};
    }

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

    /* LOAD STORIES */
    await fetchMyStories();
  } catch (error) {
    console.error("Orders error:", error);
    ordersError.value = error.message || "Unable to load your orders.";
  } finally {
    ordersLoading.value = false;
  }
};

/* FORMATTING */
const formatDate = (date) => {
  if (!date) return "";

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

const formatFileSize = (bytes) => {
  if (!bytes) return "0 KB";

  const mb = bytes / (1024 * 1024);

  if (mb >= 1) {
    return `${mb.toFixed(2)} MB`;
  }

  return `${Math.ceil(bytes / 1024)} KB`;
};

const formatStatus = (status) => {
  if (!status) return "Unknown";

  return status
    .toLowerCase()
    .replace(/_/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
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
    case "PENDING":
      return "bg-orange-100 text-orange-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

/* NAVIGATION */
const changeSection = (section) => {
  activeSection.value = section;

  if (section === "orders") {
    fetchMyOrders();
  }
};

const menuClass = (section) => {
  return [
    "flex w-full items-center gap-2 rounded-xl px-3 py-2.5 text-left text-xs font-semibold transition sm:gap-3 sm:px-4 sm:py-3 sm:text-sm",
    activeSection.value === section
      ? "bg-[#ad3d5b] text-white shadow-md shadow-[#ad3d5b]/20"
      : "text-[#302525] hover:bg-[#fff0f2]",
  ];
};

/* LOGOUT */
const logout = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("user");
  sessionStorage.removeItem("accessToken");
  sessionStorage.removeItem("user");
  router.push("/");
};

/* INITIAL LOAD */
onMounted(() => {
  const token = getToken();

  if (!token || !user.value) {
    router.replace("/login");
    return;
  }

  fetchMyOrders();
});
</script>
