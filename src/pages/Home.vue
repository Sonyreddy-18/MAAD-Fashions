<template>
  <div
    class="min-h-screen overflow-x-hidden bg-[#fcf8f6] text-[#302525] pb-20 lg:pb-0"
  >
    <!-- HERO -->
    <section class="relative overflow-hidden bg-[#fcf8f6] pt-24">
      <!-- BACKGROUND -->
      <div class="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          class="absolute -left-32 -top-32 h-[520px] w-[520px] rounded-full bg-[#f2d9dc]/70 blur-[100px]"
        ></div>

        <div
          class="absolute right-[-180px] top-[15%] h-[520px] w-[520px] rounded-full bg-[#ead8c9]/55 blur-[110px]"
        ></div>

        <div
          class="absolute bottom-[-250px] left-[30%] h-[500px] w-[500px] rounded-full bg-[#e8c8cf]/40 blur-[120px]"
        ></div>

        <div
          class="absolute left-[42%] top-[18%] h-24 w-24 rounded-full bg-white/80 blur-2xl"
        ></div>

        <div
          class="absolute right-[8%] top-[12%] h-28 w-28 rounded-full border border-[#c997a2]/20"
        ></div>

        <div
          class="absolute bottom-[8%] left-[8%] h-20 w-20 rounded-full border border-[#c997a2]/20"
        ></div>

        <div
          class="absolute left-[48%] top-[8%] h-40 w-40 rounded-full border border-[#d5aeb5]/10"
        ></div>
      </div>

      <!-- DOTS -->
      <div
        class="pointer-events-none absolute inset-0 opacity-[0.035]"
        style="
          background-image: radial-gradient(#302525 0.7px, transparent 0.7px);
          background-size: 18px 18px;
        "
      ></div>

      <!-- HERO CONTENT -->
      <div
        class="relative mx-auto flex w-full max-w-7xl items-center px-4 py-8 sm:px-8 sm:py-3 lg:h-[calc(100vh-96px)] lg:px-10"
      >
        <div
          class="grid w-full items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8"
        >
          <!-- LEFT -->
          <div class="flex flex-col justify-center text-center lg:text-left">
            <p
              class="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#ad3d5b] sm:text-sm sm:tracking-[0.35em]"
            >
              THE MAAD EDIT
            </p>

            <h1
              class="mt-3 font-serif text-[2.65rem] font-bold leading-[0.92] text-[#302525] sm:text-5xl lg:text-[4.5rem] xl:text-[5rem]"
            >
              Make Every
              <br />
              look
              <br />
              <span class="italic text-[#ad3d5b]">Beautiful.</span>
            </h1>

            <p
              class="mx-auto mt-4 max-w-[330px] text-[13px] leading-6 text-[#756967] sm:max-w-xl sm:text-base sm:leading-7 lg:mx-0"
            >
              Discover thoughtfully selected styles designed for celebrations,
              everyday elegance and the moments you will remember.
            </p>

            <div
              class="mt-5 flex flex-wrap justify-center gap-2.5 sm:gap-3 lg:justify-start"
            >
              <RouterLink
                to="/dresses"
                class="group rounded-full bg-[#ad3d5b] px-5 py-2.5 text-xs font-semibold text-white shadow-md shadow-[#ad3d5b]/20 transition duration-300 hover:-translate-y-0.5 hover:bg-[#922f4a] hover:shadow-lg sm:px-7 sm:py-3.5 sm:text-sm"
              >
                Explore Dresses

                <span
                  class="ml-1.5 inline-block transition-transform duration-300 group-hover:translate-x-1 sm:ml-2"
                >
                  →
                </span>
              </RouterLink>

              <RouterLink
                to="/sarees"
                class="group rounded-full border border-[#ad3d5b]/50 bg-white/70 px-5 py-2.5 text-xs font-semibold text-[#ad3d5b] shadow-sm backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-[#ad3d5b] hover:bg-white sm:px-7 sm:py-3.5 sm:text-sm"
              >
                Discover Sarees

                <span
                  class="ml-1.5 inline-block transition-transform duration-300 group-hover:translate-x-1 sm:ml-2"
                >
                  →
                </span>
              </RouterLink>
            </div>

            <div
              class="mt-5 flex items-center justify-center gap-3 sm:gap-4 lg:justify-start"
            >
              <div
                class="h-px w-8 bg-gradient-to-r from-[#ad3d5b] to-transparent sm:w-12"
              ></div>

              <p
                class="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#9d6a76] sm:text-xs sm:tracking-[0.3em]"
              >
                Made for your moments
              </p>
            </div>
          </div>

          <!-- CAROUSEL -->
          <div class="relative flex items-center justify-center lg:justify-end">
            <div
              class="relative w-full max-w-[420px] sm:max-w-[590px]"
              @mouseenter="stopCarousel"
              @mouseleave="startCarousel"
            >
              <div class="relative h-[360px] overflow-hidden sm:h-auto">
                <div class="relative h-full sm:h-auto">
                  <div
                    v-for="(image, index) in images"
                    :key="index"
                    class="carousel-slide"
                    :class="{
                      'carousel-slide-active': currentImage === index,
                    }"
                  >
                    <img
                      :src="image"
                      alt="MAAD Fashions"
                      class="block h-full w-full max-h-[360px] object-contain object-center sm:h-auto sm:max-h-[560px]"
                    />
                  </div>
                </div>

                <button
                  type="button"
                  @click="previousImage"
                  class="absolute left-2 top-1/2 z-30 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-base text-[#302525] shadow-md backdrop-blur-sm transition hover:scale-105 hover:bg-white sm:left-3 sm:h-11 sm:w-11 sm:text-xl"
                  aria-label="Previous slide"
                >
                  ←
                </button>

                <button
                  type="button"
                  @click="nextImage"
                  class="absolute right-2 top-1/2 z-30 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-base text-[#302525] shadow-md backdrop-blur-sm transition hover:scale-105 hover:bg-white sm:right-3 sm:h-11 sm:w-11 sm:text-xl"
                  aria-label="Next slide"
                >
                  →
                </button>

                <div
                  class="absolute bottom-2.5 left-1/2 z-30 flex -translate-x-1/2 items-center gap-1.5 sm:bottom-4 sm:gap-2"
                >
                  <button
                    v-for="(image, index) in images"
                    :key="`dot-${index}`"
                    type="button"
                    @click="goToSlide(index)"
                    :class="[
                      'h-2 rounded-full transition-all duration-300 sm:h-2.5',
                      currentImage === index
                        ? 'w-6 bg-[#ad3d5b] sm:w-7'
                        : 'w-2 bg-white/80 sm:w-2.5',
                    ]"
                    :aria-label="`Go to slide ${index + 1}`"
                  ></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- LARGE EDITORIAL -->
    <section v-if="largeCollectionImages.length" class="w-full">
      <RouterLink
        v-for="(item, index) in largeCollectionImages"
        :key="item.id || `large-image-${index}`"
        :to="item.link || '#'"
        class="group relative block w-full overflow-hidden"
      >
        <div class="relative h-[65vh] min-h-[480px] max-h-[720px] w-full">
          <img
            v-if="item.image"
            :src="item.image"
            :alt="item.alt"
            class="h-full w-full object-cover object-center transition-transform duration-1000 group-hover:scale-[1.01]"
          />

          <div
            class="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent"
          ></div>

          <div
            class="absolute bottom-0 left-0 px-8 pb-10 text-white sm:px-12 lg:px-16"
          >
            <p
              v-if="item.eyebrow"
              class="mb-2 text-[10px] uppercase tracking-[0.4em]"
            >
              {{ item.eyebrow }}
            </p>

            <h2
              v-if="item.title"
              class="font-serif text-5xl leading-none sm:text-6xl lg:text-7xl"
            >
              {{ item.title }}
            </h2>

            <span
              class="mt-5 inline-flex items-center gap-3 border-b border-white pb-2 text-[10px] font-semibold uppercase tracking-[0.3em]"
            >
              Explore collection
              <span>→</span>
            </span>
          </div>
        </div>
      </RouterLink>
    </section>
    <!-- NEW ARRIVALS -->
    <section
      class="relative overflow-hidden bg-[#f8f4f1] px-4 py-14 sm:px-6 sm:py-18 lg:px-10 lg:py-24"
    >
      <div
        class="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#ead0d4]/30 blur-[100px]"
      ></div>

      <div
        class="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#e8d9cc]/35 blur-[110px]"
      ></div>

      <div class="relative mx-auto max-w-[1600px]">
        <div
          class="mb-8 flex flex-col gap-5 sm:mb-10 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <div class="flex items-center gap-3">
              <span class="h-px w-8 bg-[#ad3d5b] sm:w-10"></span>

              <p
                class="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#ad3d5b] sm:text-[10px]"
              >
                THE LATEST EDIT
              </p>
            </div>

            <h2
              class="mt-3 font-serif text-4xl font-medium tracking-tight text-[#302525] sm:text-5xl lg:text-6xl"
            >
              New Arrivals
            </h2>

            <p
              class="mt-2 max-w-md text-xs leading-6 text-[#806d6d] sm:text-sm"
            >
              Fresh pieces across the MAAD collections, selected for your next
              look.
            </p>
          </div>

          <div class="flex items-center gap-2 self-end">
            <button
              type="button"
              @click="previousNewArrival"
              class="flex h-10 w-10 items-center justify-center rounded-full border border-[#d8cbc7] bg-white text-[#302525] transition duration-300 hover:border-[#9b4056] hover:bg-[#9b4056] hover:text-white"
              aria-label="Previous new arrivals"
            >
              ←
            </button>

            <button
              type="button"
              @click="nextNewArrival"
              class="flex h-10 w-10 items-center justify-center rounded-full border border-[#d8cbc7] bg-white text-[#302525] transition duration-300 hover:border-[#9b4056] hover:bg-[#9b4056] hover:text-white"
              aria-label="Next new arrivals"
            >
              →
            </button>
          </div>
        </div>

        <div
          v-if="productsLoading"
          class="flex min-h-[420px] items-center justify-center bg-[#f4efec]"
        >
          <div
            class="h-9 w-9 animate-spin rounded-full border-4 border-[#ead9d5] border-t-[#9b4056]"
          ></div>
        </div>

        <div
          v-else-if="homeProducts.length === 0"
          class="flex min-h-[300px] items-center justify-center bg-[#f4efec]"
        >
          <p class="text-sm text-[#79676a]">New styles are coming soon.</p>
        </div>

        <div v-else class="overflow-hidden">
          <div
            class="flex transition-transform duration-700 ease-out"
            :style="{
              gap: `${newArrivalGap}px`,
              transform: `translateX(-${newArrivalIndex} * ((100% + ${newArrivalGap}px) / ${newArrivalVisibleCount}))`,
            }"
          >
            <RouterLink
              v-for="(product, index) in homeProducts"
              :key="product.id"
              :to="getHomeProductLink(product)"
              class="new-arrival-card group relative block min-w-0 shrink-0 overflow-hidden bg-[#e9dfda]"
              :style="{
                width: `calc((100% - ${(newArrivalVisibleCount - 1) * newArrivalGap}px) / ${newArrivalVisibleCount})`,
              }"
            >
              <div class="relative aspect-[3/4] overflow-hidden">
                <img
                  v-if="product.image && !product.imageError"
                  :src="product.image"
                  :alt="product.name"
                  class="h-full w-full object-cover object-center transition duration-[1000ms] ease-out group-hover:scale-[1.055]"
                  @error="handleProductImageError(product)"
                />

                <div
                  v-else
                  class="flex h-full w-full items-center justify-center bg-[#eee4e0]"
                >
                  <span
                    class="font-serif text-lg italic text-[#b48b94] sm:text-xl"
                  >
                    MAAD FASHIONS
                  </span>
                </div>

                <div
                  class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-90"
                ></div>

                <div class="absolute left-4 top-4 sm:left-5 sm:top-5">
                  <span
                    class="inline-flex items-center border border-white/40 bg-black/10 px-2.5 py-1.5 text-[8px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm sm:px-3 sm:text-[9px]"
                  >
                    {{ getNewArrivalSection(product) }}
                  </span>
                </div>

                <button
                  type="button"
                  @click.prevent.stop="handleWishlist(product)"
                  class="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-[#302525] shadow-sm transition duration-300 hover:scale-105 sm:right-5 sm:top-5"
                  :aria-label="
                    isInWishlist(product.id)
                      ? 'Remove from wishlist'
                      : 'Add to wishlist'
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-[17px] w-[17px]"
                    :class="
                      isInWishlist(product.id)
                        ? 'fill-[#c6284f] text-[#c6284f]'
                        : 'fill-none text-[#302525]'
                    "
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="1.5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z"
                    />
                  </svg>
                </button>

                <div class="absolute inset-x-0 bottom-0 p-4 text-white sm:p-5">
                  <p
                    class="text-[8px] font-semibold uppercase tracking-[0.24em] text-white/70 sm:text-[9px]"
                  >
                    0{{ (index % 4) + 1 }} · NEW IN
                  </p>

                  <h3
                    class="mt-1.5 line-clamp-2 font-serif text-xl font-medium leading-tight sm:text-2xl"
                  >
                    {{ product.name }}
                  </h3>

                  <div class="mt-4 flex items-center justify-between gap-3">
                    <span
                      class="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/90 sm:text-[10px]"
                    >
                      Explore {{ getNewArrivalSection(product) }}
                    </span>

                    <span
                      class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/50 text-sm transition duration-300 group-hover:translate-x-1 group-hover:bg-white group-hover:text-[#302525] sm:h-9 sm:w-9"
                    >
                      →
                    </span>
                  </div>
                </div>
              </div>
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- STALL CARD -->
    <div
      v-if="stallPlanned"
      class="stall-card fixed bottom-[82px] left-3 right-3 z-[60] sm:bottom-5 sm:left-auto sm:right-5 sm:w-[330px]"
    >
      <div
        class="stall-card-inner rounded-xl border border-white/80 bg-white/95 px-3 py-2.5 shadow-[0_10px_30px_rgba(70,30,40,0.18)] backdrop-blur-md"
      >
        <div class="flex items-center gap-2.5">
          <div
            class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#fff0f2] text-sm shadow-sm"
          >
            ✨
          </div>

          <div class="min-w-0 flex-1">
            <div class="flex items-center gap-1.5">
              <p
                class="text-[8px] font-bold uppercase tracking-[0.15em] text-[#b43d5b] sm:text-[9px] sm:tracking-[0.18em]"
              >
                MAAD STALL
              </p>

              <span class="h-1 w-1 rounded-full bg-[#b43d5b]"></span>

              <span
                class="text-[7px] font-medium uppercase tracking-wider text-[#9a8585] sm:text-[8px]"
              >
                This Week
              </span>
            </div>

            <p
              class="mt-0.5 text-[9px] font-semibold text-[#302525] sm:text-[10px]"
            >
              {{ stall.date }}
            </p>

            <p class="truncate text-[8px] text-[#806f6f] sm:text-[9px]">
              🕐 {{ stall.time }}
            </p>

            <p class="truncate text-[8px] text-[#806f6f] sm:text-[9px]">
              📍 {{ stall.location }}
            </p>
          </div>

          <button
            type="button"
            @click="showStallDetails = true"
            class="shrink-0 rounded-full bg-[#b43d5b] px-2.5 py-1.5 text-[8px] font-semibold text-white shadow-sm transition hover:bg-[#96334c] active:scale-95"
          >
            Details
          </button>
        </div>
      </div>
    </div>

    <!-- STALL MODAL -->
    <div
      v-if="showStallDetails"
      class="fixed inset-0 z-[70] flex items-center justify-center bg-black/30 px-4 backdrop-blur-sm"
      @click.self="showStallDetails = false"
    >
      <div
        class="w-full max-w-md rounded-3xl bg-[#fffaf8] p-5 shadow-2xl sm:p-7"
      >
        <div class="mb-5 flex items-start justify-between gap-4">
          <div>
            <p
              class="text-[10px] font-bold tracking-[0.2em] text-[#b43d5b] sm:text-xs sm:tracking-[0.25em]"
            >
              MAAD STALL
            </p>

            <h2
              class="mt-2 font-serif text-2xl font-bold text-[#302525] sm:text-3xl"
            >
              Meet us this week ✨
            </h2>
          </div>

          <button
            type="button"
            @click="showStallDetails = false"
            class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f5e5e5] text-lg text-[#302525] transition hover:bg-[#ead4d4] sm:h-9 sm:w-9 sm:text-xl"
          >
            ×
          </button>
        </div>

        <div class="space-y-3 text-sm text-[#514444] sm:space-y-4 sm:text-base">
          <p>📅 <strong>Date:</strong> {{ stall.fullDate }}</p>

          <p>🕐 <strong>Time:</strong> {{ stall.time }}</p>

          <p class="break-words">
            📍 <strong>Location:</strong> {{ stall.location }}
          </p>
        </div>

        <button
          type="button"
          @click="showStallDetails = false"
          class="mt-5 w-full rounded-full bg-[#b43d5b] py-3 text-sm font-semibold text-white transition hover:bg-[#96334c] sm:mt-6"
        >
          Close
        </button>
      </div>
    </div>

    <!-- PRODUCT MODAL -->
    <div
      v-if="selectedProduct"
      class="fixed inset-0 z-[150] flex items-center justify-center bg-[#302525]/55 px-3 py-4 backdrop-blur-sm sm:px-5"
      @click.self="closeProduct"
    >
      <div
        class="relative flex max-h-[94vh] w-full max-w-5xl flex-col overflow-hidden rounded-[24px] bg-white shadow-[0_25px_80px_rgba(48,37,37,0.25)] sm:rounded-[30px] lg:grid lg:grid-cols-2"
        @click.stop
      >
        <!-- CLOSE -->
        <button
          type="button"
          @click="closeProduct"
          class="absolute right-3 top-3 z-30 flex h-9 w-9 items-center justify-center rounded-full border border-white/80 bg-white/95 text-[#9b4056] shadow-md transition hover:scale-105 sm:right-5 sm:top-5 sm:h-10 sm:w-10"
          aria-label="Close product details"
        >
          ✕
        </button>

        <!-- PRODUCT IMAGE -->
        <div
          class="relative flex min-h-[310px] items-center justify-center overflow-hidden bg-[#f3ece8] sm:min-h-[450px] lg:min-h-[620px]"
        >
          <img
            v-if="selectedProduct.image && !selectedProduct.imageError"
            :src="selectedProduct.image"
            :alt="selectedProduct.name"
            class="h-full max-h-[650px] w-full object-contain p-5 sm:p-8"
            @error="handleSelectedProductImageError"
          />

          <div
            v-else
            class="flex flex-col items-center justify-center text-[#9b4056]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-16 w-16"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 16l4-4a2 2 0 012.828 0L14 16m-1-1l1.172-1.172a2 2 0 012.828 0L21 17M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>

            <span class="mt-2 text-sm"> Image unavailable </span>
          </div>

          <!-- CATEGORY -->
          <span
            class="absolute left-4 top-4 max-w-[65%] truncate bg-white/95 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#9b4056] shadow-sm sm:left-6 sm:top-6 sm:px-4 sm:py-2 sm:text-xs"
          >
            {{ selectedProduct.category }}
          </span>

          <!-- WISHLIST -->
          <button
            type="button"
            @click.stop="handleWishlist(selectedProduct)"
            class="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-[#302525] shadow-md backdrop-blur-sm transition hover:scale-105 sm:right-6 sm:top-6"
            :aria-label="
              isInWishlist(selectedProduct.id)
                ? 'Remove from wishlist'
                : 'Add to wishlist'
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              :class="
                isInWishlist(selectedProduct.id)
                  ? 'fill-[#c6284f] text-[#c6284f]'
                  : 'fill-none text-[#302525]'
              "
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.8"
            >
              <path
                d="M20.8 8.7c0 5.5-8.8 10.3-8.8 10.3S3.2 14.2 3.2 8.7A4.7 4.7 0 0 1 8 4a5.1 5.1 0 0 1 4 2.1A5.1 5.1 0 0 1 16 4a4.7 4.7 0 0 1 4.8 4.7Z"
              />
            </svg>
          </button>
        </div>

        <!-- DETAILS -->
        <div class="flex min-h-0 flex-col overflow-y-auto p-5 sm:p-7 lg:p-10">
          <!-- LABEL -->
          <p
            class="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#b36b7a] sm:text-[10px]"
          >
            MAAD EDIT
          </p>

          <!-- NAME -->
          <h2
            class="mt-2 pr-10 font-serif text-2xl font-bold leading-tight text-[#352629] sm:text-3xl lg:text-4xl"
          >
            {{ selectedProduct.name }}
          </h2>

          <!-- PRICE -->
          <p class="mt-4 text-xl font-bold text-[#8f3b52] sm:text-2xl">
            ₹{{ selectedProduct.price.toLocaleString("en-IN") }}
          </p>

          <!-- DESCRIPTION -->
          <p
            v-if="selectedProduct.description"
            class="mt-4 text-sm leading-6 text-[#79676a]"
          >
            {{ selectedProduct.description }}
          </p>

          <div class="my-5 h-px bg-[#eadedb]"></div>

          <!-- SIZE -->
          <div>
            <div class="flex items-center justify-between gap-4">
              <h3 class="text-sm font-semibold text-[#352629]">Select Size</h3>

              <button
                type="button"
                @click="showSizeChart = true"
                class="shrink-0 text-xs font-semibold text-[#9b4056] underline underline-offset-4 transition hover:text-[#762d40]"
              >
                Size Chart
              </button>
            </div>

            <div class="mt-3 grid grid-cols-4 gap-2">
              <button
                v-for="size in sizes"
                :key="size"
                type="button"
                @click="selectSize(size)"
                class="rounded-xl border px-3 py-2.5 text-sm font-semibold transition sm:py-3"
                :class="
                  selectedSize === size
                    ? 'border-[#9b4056] bg-[#9b4056] text-white'
                    : 'border-[#ead9d5] bg-white text-[#302525] hover:border-[#9b4056] hover:text-[#9b4056]'
                "
              >
                {{ size }}
              </button>
            </div>

            <p v-if="sizeError" class="mt-2 text-xs font-medium text-red-500">
              Please select a size.
            </p>
          </div>

          <!-- AVAILABILITY -->
          <div class="mt-5">
            <span
              v-if="selectedProduct.stock > 0"
              class="inline-flex items-center gap-2 text-sm font-medium text-green-600"
            >
              <span class="h-2 w-2 rounded-full bg-green-500"></span>
              Available
            </span>

            <span
              v-else
              class="inline-flex items-center gap-2 text-sm font-medium text-red-500"
            >
              <span class="h-2 w-2 rounded-full bg-red-500"></span>
              Currently unavailable
            </span>
          </div>

          <!-- BUTTONS -->
          <div class="mt-6 grid gap-3 sm:grid-cols-2">
            <button
              type="button"
              :disabled="selectedProduct.stock <= 0"
              @click="handleProductAddToCart"
              class="rounded-full border-2 px-5 py-3.5 text-sm font-semibold transition active:scale-[0.98]"
              :class="
                selectedProduct.stock > 0
                  ? 'border-[#9b4056] text-[#9b4056] hover:bg-[#fff1f3]'
                  : 'cursor-not-allowed border-gray-300 text-gray-400'
              "
            >
              {{ selectedProduct.stock > 0 ? "Add to Cart" : "Out of Stock" }}
            </button>

            <button
              type="button"
              :disabled="selectedProduct.stock <= 0"
              @click="handleBuyNow"
              class="rounded-full px-5 py-3.5 text-sm font-semibold text-white shadow-md transition active:scale-[0.98]"
              :class="
                selectedProduct.stock > 0
                  ? 'bg-[#9b4056] hover:bg-[#7f3046]'
                  : 'cursor-not-allowed bg-gray-300'
              "
            >
              Buy Now
            </button>
          </div>

          <!-- FEATURES -->
          <div class="mt-6 rounded-2xl bg-[#fff8f6] p-4 sm:mt-8 sm:p-5">
            <div class="grid grid-cols-3 gap-3 text-center">
              <div>
                <div class="text-lg">✦</div>
                <p
                  class="mt-1 text-[9px] font-semibold text-[#79676a] sm:text-[10px]"
                >
                  Premium Quality
                </p>
              </div>

              <div>
                <div class="text-lg">♡</div>
                <p
                  class="mt-1 text-[9px] font-semibold text-[#79676a] sm:text-[10px]"
                >
                  Made for You
                </p>
              </div>

              <div>
                <div class="text-lg">✧</div>
                <p
                  class="mt-1 text-[9px] font-semibold text-[#79676a] sm:text-[10px]"
                >
                  MAAD Fashions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- SIZE CHART -->
    <div
      v-if="showSizeChart"
      class="fixed inset-0 z-[220] flex items-center justify-center bg-[#302525]/55 px-4 backdrop-blur-sm"
      @click.self="showSizeChart = false"
    >
      <div
        class="w-full max-w-lg rounded-3xl bg-white p-6 shadow-2xl sm:p-8"
        @click.stop
      >
        <!-- HEADER -->
        <div class="flex items-center justify-between gap-4">
          <div>
            <p
              class="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#b36b7a]"
            >
              MAAD FASHIONS
            </p>

            <h2 class="mt-1 font-serif text-2xl font-bold text-[#352629]">
              Size Chart
            </h2>
          </div>

          <button
            type="button"
            @click="showSizeChart = false"
            class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#fff1f3] text-[#9b4056] transition hover:scale-105"
          >
            ✕
          </button>
        </div>

        <!-- TABLE -->
        <div class="mt-6 overflow-hidden rounded-2xl border border-[#ead9d5]">
          <table class="w-full text-center text-sm">
            <thead class="bg-[#fff1f3] text-[#8f3b52]">
              <tr>
                <th class="px-3 py-3">Size</th>
                <th class="px-3 py-3">Bust</th>
                <th class="px-3 py-3">Waist</th>
                <th class="px-3 py-3">Hip</th>
              </tr>
            </thead>

            <tbody class="divide-y divide-[#ead9d5]">
              <tr v-for="row in sizeChart" :key="row.size">
                <td class="px-3 py-3 font-semibold text-[#352629]">
                  {{ row.size }}
                </td>

                <td class="px-3 py-3 text-[#79676a]">
                  {{ row.bust }}
                </td>

                <td class="px-3 py-3 text-[#79676a]">
                  {{ row.waist }}
                </td>

                <td class="px-3 py-3 text-[#79676a]">
                  {{ row.hip }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p class="mt-4 text-xs leading-5 text-[#8b777a]">
          Measurements are approximate. For the best fit, compare these
          measurements with a dress that fits you comfortably.
        </p>
      </div>
    </div>

    <!-- WELCOME -->
    <section
      class="relative overflow-hidden bg-[#f7f2ef] px-5 py-16 sm:px-8 sm:py-24 lg:px-10 lg:py-32"
    >
      <div
        class="pointer-events-none absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#ead0d4]/45 blur-[90px]"
      ></div>
      <div
        class="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-[#e7d8ca]/50 blur-[100px]"
      ></div>

      <div
        class="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.4fr] lg:gap-20"
      >
        <div class="relative">
          <span
            class="absolute -left-1 -top-8 font-serif text-7xl font-light text-[#9b4056]/10 sm:text-9xl"
            >M</span
          >
          <p
            class="relative text-[9px] font-semibold uppercase tracking-[0.38em] text-[#9b4056] sm:text-[10px]"
          >
            WELCOME TO MAAD
          </p>
          <h2
            class="mt-4 max-w-xl font-serif text-4xl font-medium leading-[1.05] tracking-[-0.02em] text-[#302525] sm:text-6xl lg:text-7xl"
          >
            Fashion with<br />
            <span class="italic text-[#9b4056]">a feeling.</span>
          </h2>
        </div>

        <div class="max-w-2xl lg:pt-10">
          <div class="h-px w-16 bg-[#9b4056]/50"></div>
          <p
            class="mt-6 text-sm leading-7 text-[#6f5e60] sm:text-base sm:leading-8 lg:text-lg"
          >
            MAAD Fashions brings together graceful silhouettes, expressive
            colours and contemporary Indian style — created for the woman who
            wants every outfit to feel like her own.
          </p>
          <p class="mt-4 text-sm leading-7 text-[#8a7778] sm:leading-8">
            From everyday elegance to unforgettable celebrations, discover
            pieces made to become part of your story.
          </p>
          <RouterLink
            to="/dresses"
            class="group mt-7 inline-flex items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#302525] sm:mt-9"
          >
            Discover MAAD
            <span
              class="flex h-9 w-9 items-center justify-center rounded-full border border-[#302525]/20 transition duration-300 group-hover:translate-x-1 group-hover:border-[#9b4056] group-hover:text-[#9b4056]"
              >→</span
            >
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- EXPLORE -->
    <section class="bg-white px-5 py-16 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
      <div class="mx-auto max-w-[1500px]">
        <div
          class="mb-10 flex flex-col gap-5 sm:mb-14 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <p
              class="text-[9px] font-semibold uppercase tracking-[0.38em] text-[#9b4056] sm:text-[10px]"
            >
              THE COLLECTIONS
            </p>
            <h2
              class="mt-3 font-serif text-4xl font-medium tracking-tight text-[#302525] sm:text-6xl"
            >
              Find your style.
            </h2>
          </div>
          <p
            class="max-w-sm text-xs leading-6 text-[#806d6d] sm:text-sm sm:leading-7"
          >
            Curated collections for every mood, celebration and unforgettable
            occasion.
          </p>
        </div>

        <div
          class="grid gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:grid-rows-[300px_300px]"
        >
          <!-- DRESSES -->
          <RouterLink
            to="/dresses"
            class="group relative min-h-[430px] overflow-hidden bg-[#eee4e1] sm:min-h-[500px] lg:col-span-7 lg:row-span-2"
          >
            <img
              v-if="collectionImages.dresses"
              :src="collectionImages.dresses"
              alt="Dresses"
              class="absolute inset-0 h-full w-full object-cover transition duration-[1200ms] ease-out group-hover:scale-[1.045]"
            />
            <div v-else class="absolute inset-0 bg-[#d9c1c0]"></div>
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"
            ></div>
            <div
              class="absolute inset-x-0 bottom-0 p-6 text-white sm:p-9 lg:p-10"
            >
              <div class="flex items-end justify-between gap-5">
                <div>
                  <p
                    class="text-[9px] uppercase tracking-[0.35em] text-white/65"
                  >
                    01 · SIGNATURE
                  </p>
                  <h3 class="mt-2 font-serif text-4xl font-medium sm:text-5xl">
                    Dresses
                  </h3>
                  <p
                    class="mt-2 max-w-sm text-xs leading-6 text-white/75 sm:text-sm"
                  >
                    Effortless silhouettes designed for the moments that matter.
                  </p>
                </div>
                <span
                  class="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/50 text-lg transition duration-300 group-hover:bg-white group-hover:text-[#302525] sm:flex"
                  >↗</span
                >
              </div>
            </div>
          </RouterLink>

          <!-- SAREES -->
          <RouterLink
            to="/sarees"
            class="group relative min-h-[280px] overflow-hidden bg-[#eadfda] sm:min-h-[320px] lg:col-span-5"
          >
            <img
              v-if="collectionImages.sarees"
              :src="collectionImages.sarees"
              alt="Sarees"
              class="absolute inset-0 h-full w-full object-cover transition duration-[1200ms] ease-out group-hover:scale-[1.045]"
            />
            <div v-else class="absolute inset-0 bg-[#d8c0bc]"></div>
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent"
            ></div>
            <div class="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
              <p class="text-[9px] uppercase tracking-[0.35em] text-white/65">
                02 · TIMELESS
              </p>
              <div class="mt-1 flex items-end justify-between gap-4">
                <div>
                  <h3 class="font-serif text-3xl font-medium sm:text-4xl">
                    Sarees
                  </h3>
                  <p class="mt-1 text-xs text-white/75">
                    Indian elegance, reimagined.
                  </p>
                </div>
                <span
                  class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/50 transition duration-300 group-hover:bg-white group-hover:text-[#302525]"
                  >↗</span
                >
              </div>
            </div>
          </RouterLink>

          <!-- CUSTOM -->
          <RouterLink
            to="/customised-dresses"
            class="group relative min-h-[280px] overflow-hidden bg-[#e8ddd5] sm:min-h-[320px] lg:col-span-5"
          >
            <img
              v-if="collectionImages.custom"
              :src="collectionImages.custom"
              alt="Custom Dresses"
              class="absolute inset-0 h-full w-full object-cover transition duration-[1200ms] ease-out group-hover:scale-[1.045]"
            />
            <div v-else class="absolute inset-0 bg-[#d7c5b9]"></div>
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent"
            ></div>
            <div class="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
              <p class="text-[9px] uppercase tracking-[0.35em] text-white/65">
                03 · MADE FOR YOU
              </p>
              <div class="mt-1 flex items-end justify-between gap-4">
                <div>
                  <h3 class="font-serif text-3xl font-medium sm:text-4xl">
                    Custom
                  </h3>
                  <p class="mt-1 text-xs text-white/75">
                    A look designed around you.
                  </p>
                </div>
                <span
                  class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/50 transition duration-300 group-hover:bg-white group-hover:text-[#302525]"
                  >↗</span
                >
              </div>
            </div>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- STYLE STORIES -->
    <section
      class="relative overflow-hidden bg-[#f7f2ef] px-5 py-16 sm:px-8 sm:py-24 lg:px-10 lg:py-28"
    >
      <div class="mx-auto max-w-[1500px]">
        <div class="mb-10 flex items-end justify-between gap-6 sm:mb-14">
          <div>
            <p
              class="text-[9px] font-semibold uppercase tracking-[0.38em] text-[#9b4056] sm:text-[10px]"
            >
              FROM THE JOURNAL
            </p>
            <h2
              class="mt-3 font-serif text-4xl font-medium tracking-tight text-[#302525] sm:text-6xl"
            >
              Style Stories
            </h2>
          </div>
          <span
            class="hidden text-[9px] uppercase tracking-[0.25em] text-[#806d6d] sm:block"
            >MAAD · EDITORIAL</span
          >
        </div>
        <div class="maad-style-stories">
          <StyleStoriesSection />
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section
      class="relative overflow-hidden bg-[#302525] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-10 lg:py-32"
    >
      <div
        class="pointer-events-none absolute -left-24 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[#9b4056]/25 blur-[110px]"
      ></div>
      <div
        class="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#d6aaa9]/15 blur-[120px]"
      ></div>
      <div class="relative mx-auto max-w-4xl text-center">
        <p
          class="text-[9px] font-semibold uppercase tracking-[0.4em] text-[#e4aab5] sm:text-[10px]"
        >
          YOUR NEXT LOOK
        </p>
        <h2
          class="mt-5 font-serif text-4xl font-medium leading-tight sm:text-6xl lg:text-7xl"
        >
          Made to be remembered.
        </h2>
        <p
          class="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8"
        >
          Discover pieces that feel personal, expressive and unmistakably yours.
        </p>
        <RouterLink
          to="/dresses"
          class="group mt-8 inline-flex items-center gap-4 border border-white/30 px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.25em] transition duration-300 hover:border-white hover:bg-white hover:text-[#302525] sm:mt-10 sm:px-9"
        >
          Start exploring
          <span
            class="text-base transition-transform duration-300 group-hover:translate-x-1"
            >→</span
          >
        </RouterLink>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="border-t border-[#eadedb] bg-[#302525] text-white">
      <div class="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-10 lg:py-16">
        <!-- TOP FOOTER -->
        <div
          class="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]"
        >
          <!-- BRAND -->
          <div>
            <h2
              class="font-serif text-3xl font-semibold tracking-wide text-white"
            >
              MAAD
            </h2>

            <p
              class="mt-1 text-[10px] font-semibold tracking-[0.35em] text-[#e4aab5]"
            >
              FASHIONS
            </p>

            <p class="mt-5 max-w-sm text-sm leading-7 text-white/60">
              Contemporary Indian fashion created for your celebrations,
              everyday moments and everything in between.
            </p>

            <div class="mt-6 flex items-center gap-3">
              <a
                href="#"
                class="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-sm transition hover:border-[#e4aab5] hover:bg-[#e4aab5]/10"
                aria-label="Instagram"
              >
                ◎
              </a>

              <a
                href="#"
                class="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-sm transition hover:border-[#e4aab5] hover:bg-[#e4aab5]/10"
                aria-label="Facebook"
              >
                f
              </a>

              <a
                href="#"
                class="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-sm transition hover:border-[#e4aab5] hover:bg-[#e4aab5]/10"
                aria-label="Pinterest"
              >
                p
              </a>
            </div>
          </div>

          <!-- SHOP -->
          <div>
            <h3
              class="text-xs font-semibold uppercase tracking-[0.25em] text-[#e4aab5]"
            >
              Shop
            </h3>

            <ul class="mt-5 space-y-3 text-sm text-white/60">
              <li>
                <RouterLink to="/dresses" class="transition hover:text-white">
                  Dresses
                </RouterLink>
              </li>

              <li>
                <RouterLink to="/sarees" class="transition hover:text-white">
                  Sarees
                </RouterLink>
              </li>

              <li>
                <RouterLink to="/kids-wear" class="transition hover:text-white">
                  Kids Wear
                </RouterLink>
              </li>

              <li>
                <RouterLink
                  to="/customised-dresses"
                  class="transition hover:text-white"
                >
                  Customised Dresses
                </RouterLink>
              </li>
            </ul>
          </div>

          <!-- MAAD -->
          <div>
            <h3
              class="text-xs font-semibold uppercase tracking-[0.25em] text-[#e4aab5]"
            >
              MAAD
            </h3>

            <ul class="mt-5 space-y-3 text-sm text-white/60">
              <li>
                <RouterLink to="/about" class="transition hover:text-white">
                  About Us
                </RouterLink>
              </li>

              <li>
                <RouterLink to="/contact" class="transition hover:text-white">
                  Contact Us
                </RouterLink>
              </li>

              <li>
                <RouterLink to="/" class="transition hover:text-white">
                  Style Stories
                </RouterLink>
              </li>

              <li>
                <RouterLink to="/" class="transition hover:text-white">
                  MAAD Stall
                </RouterLink>
              </li>
            </ul>
          </div>

          <!-- HELP -->
          <div>
            <h3
              class="text-xs font-semibold uppercase tracking-[0.25em] text-[#e4aab5]"
            >
              Help
            </h3>

            <ul class="mt-5 space-y-3 text-sm text-white/60">
              <li>
                <RouterLink to="/" class="transition hover:text-white">
                  Shipping & Delivery
                </RouterLink>
              </li>

              <li>
                <RouterLink to="/" class="transition hover:text-white">
                  Returns & Exchanges
                </RouterLink>
              </li>

              <li>
                <RouterLink to="/" class="transition hover:text-white">
                  Privacy Policy
                </RouterLink>
              </li>

              <li>
                <RouterLink to="/" class="transition hover:text-white">
                  Terms & Conditions
                </RouterLink>
              </li>
            </ul>
          </div>
        </div>

        <div class="my-10 h-px bg-white/10"></div>

        <!-- BOTTOM -->
        <div
          class="flex flex-col gap-4 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between"
        >
          <p>
            © {{ new Date().getFullYear() }} MAAD Fashions. All rights reserved.
          </p>

          <div class="flex flex-wrap items-center gap-4">
            <span>Secure Payments</span>
            <span class="h-1 w-1 rounded-full bg-white/30"></span>
            <span>Made for your moments.</span>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onBeforeUnmount } from "vue";
import { RouterLink, useRouter } from "vue-router";
import StyleStoriesSection from "../components/StyleStoriesSection.vue";
import { useCart } from "../context/CartContext.js";
import { useWishlist } from "../context/WishlistContext.js";

/* ROUTER / CONTEXT */
const router = useRouter();

const { addToCart } = useCart();
const { toggleWishlist, isInWishlist } = useWishlist();

/* API */
const API_URL = (
  import.meta.env.VITE_API_URL || "http://localhost:3000"
).replace(/\/$/, "");

/* STALL */
const showStallDetails = ref(false);
const stallPlanned = ref(false);

const stall = reactive({
  id: null,
  date: "",
  fullDate: "",
  time: "",
  location: "",
});

async function loadActiveStall() {
  try {
    const response = await fetch(`${API_URL}/stalls/active`);

    if (!response.ok) {
      throw new Error(`Stall API returned ${response.status}`);
    }

    const data = await response.json();

    if (!data || data.isActive === false) {
      stallPlanned.value = false;
      showStallDetails.value = false;

      stall.id = null;
      stall.date = "";
      stall.fullDate = "";
      stall.time = "";
      stall.location = "";

      return;
    }

    stall.id = data.id ?? null;
    stall.date = data.date || "";
    stall.fullDate = data.fullDate || data.date || "";
    stall.time = data.time || "";
    stall.location = data.location || "";

    stallPlanned.value = true;
  } catch (error) {
    console.error("Unable to load active stall:", error);

    stallPlanned.value = false;
    showStallDetails.value = false;
  }
}

/* HERO CAROUSEL */
import heroImage from "../assets/fashion.png";
import dressImage from "../assets/maad-dress.png";
import sareeImage from "../assets/maad-saree.png";
import lehangaImage from "../assets/maad-lehanga.png";

const images = [heroImage, dressImage, sareeImage, lehangaImage];

const currentImage = ref(0);

let carouselTimer = null;

function nextImage() {
  if (images.length <= 1) return;

  currentImage.value = (currentImage.value + 1) % images.length;
}

function previousImage() {
  if (images.length <= 1) return;

  currentImage.value = (currentImage.value - 1 + images.length) % images.length;
}

function goToSlide(index) {
  currentImage.value = index;
  startCarousel();
}

function startCarousel() {
  stopCarousel();

  if (images.length <= 1) return;

  carouselTimer = setInterval(() => {
    nextImage();
  }, 4000);
}

function stopCarousel() {
  if (carouselTimer) {
    clearInterval(carouselTimer);
    carouselTimer = null;
  }
}

/* EXPLORE IMAGES */
const collectionImages = reactive({
  dresses: "",
  sarees: "",
  custom: "",
});

/* LARGE IMAGES */
const largeCollectionImages = ref([]);
const largeCollectionLoading = ref(false);

async function loadLargeCollectionImages() {
  largeCollectionLoading.value = true;

  try {
    const response = await fetch(`${API_URL}/large-collections`);

    if (!response.ok) {
      throw new Error(`Large collections API returned ${response.status}`);
    }

    const data = await response.json();

    const items = Array.isArray(data)
      ? data
      : Array.isArray(data?.images)
        ? data.images
        : [];

    largeCollectionImages.value = items
      .filter((item) => item?.isActive !== false)
      .sort((a, b) => Number(a?.sortOrder ?? 0) - Number(b?.sortOrder ?? 0))
      .map((item) => ({
        id: item.id,
        image: item.url || "",
        link: item.link || "#",
        alt: item.altText || item.title || "MAAD Fashions",
        eyebrow: item.eyebrow || "",
        title: item.title || "",
        subtitle: item.subtitle || "",
      }));
  } catch (error) {
    console.error("Unable to load large collection images:", error);

    largeCollectionImages.value = [];
  } finally {
    largeCollectionLoading.value = false;
  }
}

/* HOME PRODUCTS */
const homeProducts = ref([]);
const productsLoading = ref(true);

/* PRODUCT DETAILS */
const selectedProduct = ref(null);
const selectedSize = ref("");
const sizeError = ref(false);
const showSizeChart = ref(false);

const sizes = ["S", "M", "L", "XL"];

/* SIZE CHART */
const sizeChart = [
  {
    size: "S",
    bust: '34"',
    waist: '28"',
    hip: '36"',
  },
  {
    size: "M",
    bust: '36"',
    waist: '30"',
    hip: '38"',
  },
  {
    size: "L",
    bust: '38"',
    waist: '32"',
    hip: '40"',
  },
  {
    size: "XL",
    bust: '40"',
    waist: '34"',
    hip: '42"',
  },
];

/* IMAGE HELPERS */
function getImageUrl(image) {
  if (!image) return "";

  if (image.startsWith("http://") || image.startsWith("https://")) {
    return image;
  }

  if (image.startsWith("/")) {
    return `${API_URL}${image}`;
  }

  return `${API_URL}/${image}`;
}

function getProductImage(product) {
  if (!product) return "";

  if (Array.isArray(product.images) && product.images.length > 0) {
    const firstImage = product.images[0];

    if (typeof firstImage === "string") {
      return getImageUrl(firstImage);
    }

    if (firstImage?.url) {
      return getImageUrl(firstImage.url);
    }
  }

  if (product.image) {
    return getImageUrl(product.image);
  }

  if (product.imageUrl) {
    return getImageUrl(product.imageUrl);
  }

  return "";
}

function getAllProductImages(product) {
  const result = [];

  if (!product) return result;

  if (Array.isArray(product.images) && product.images.length > 0) {
    for (const item of product.images) {
      if (typeof item === "string") {
        result.push(getImageUrl(item));
      } else if (item?.url) {
        result.push(getImageUrl(item.url));
      }
    }
  }

  if (product.image) {
    result.push(getImageUrl(product.image));
  }

  if (product.imageUrl) {
    result.push(getImageUrl(product.imageUrl));
  }

  return result.filter(Boolean);
}

function categoryMatches(category, words) {
  if (!category) return false;

  const value = String(category).trim().toLowerCase();

  return words.some((word) => value.includes(word));
}

/* LOAD PRODUCTS */
async function loadProducts() {
  productsLoading.value = true;

  try {
    const response = await fetch(`${API_URL}/products`);

    if (!response.ok) {
      throw new Error(`Products API returned ${response.status}`);
    }

    const data = await response.json();

    const products = Array.isArray(data)
      ? data
      : Array.isArray(data?.products)
        ? data.products
        : [];

    const activeProducts = products.filter(
      (product) => product?.isActive !== false,
    );

    const sectionProducts = {
      dresses: activeProducts.find((product) =>
        categoryMatches(product.category, [
          "dress",
          "dresses",
          "gown",
          "lehenga",
          "party wear",
          "blouse",
        ]),
      ),
      sarees: activeProducts.find((product) =>
        categoryMatches(product.category, ["saree", "sarees"]),
      ),
      kids: activeProducts.find((product) =>
        categoryMatches(product.category, ["kids", "kid", "children", "child"]),
      ),
      custom: activeProducts.find((product) =>
        categoryMatches(product.category, [
          "custom",
          "customised",
          "customized",
        ]),
      ),
    };

    const selectedHomeProducts = [];
    const selectedIds = new Set();

    Object.values(sectionProducts).forEach((product) => {
      if (product && !selectedIds.has(product.id)) {
        selectedHomeProducts.push(product);
        selectedIds.add(product.id);
      }
    });

    activeProducts.forEach((product) => {
      if (selectedHomeProducts.length >= 8) return;

      if (!selectedIds.has(product.id)) {
        selectedHomeProducts.push(product);
        selectedIds.add(product.id);
      }
    });

    /* HOME CARDS */
    homeProducts.value = selectedHomeProducts.slice(0, 8).map((product) => ({
      id: product.id,
      name: product.name || "MAAD Dress",
      price: Number(product.price || 0),
      category: product.category || "Collection",
      description:
        product.description ||
        "Beautifully designed by MAAD FASHIONS for your special moments.",
      stock: Number(product.stock || 0),
      image: getProductImage(product),
      imageError: false,
    }));

    /* EXPLORE IMAGES */
    const dressProduct = activeProducts.find((product) =>
      categoryMatches(product.category, [
        "dress",
        "dresses",
        "gown",
        "lehenga",
        "party wear",
        "blouse",
      ]),
    );

    const sareeProduct = activeProducts.find((product) =>
      categoryMatches(product.category, ["saree", "sarees"]),
    );

    const customProduct = activeProducts.find((product) =>
      categoryMatches(product.category, ["custom", "customised", "customized"]),
    );

    collectionImages.dresses = getProductImage(dressProduct);

    collectionImages.sarees = getProductImage(sareeProduct);

    collectionImages.custom = getProductImage(customProduct);

    console.log("Home products loaded:", homeProducts.value);
  } catch (error) {
    console.error("Unable to load products for Home page:", error);

    homeProducts.value = [];
  } finally {
    productsLoading.value = false;
  }
}

/* NEW ARRIVALS */
const newArrivalIndex = ref(0);
const newArrivalVisibleCount = ref(4);
const newArrivalGap = ref(24);

function updateNewArrivalLayout() {
  if (window.innerWidth < 640) {
    newArrivalVisibleCount.value = 2;
    newArrivalGap.value = 12;
  } else if (window.innerWidth < 1024) {
    newArrivalVisibleCount.value = 3;
    newArrivalGap.value = 20;
  } else {
    newArrivalVisibleCount.value = 4;
    newArrivalGap.value = 24;
  }

  const maxIndex = Math.max(
    0,
    homeProducts.value.length - newArrivalVisibleCount.value,
  );

  if (newArrivalIndex.value > maxIndex) {
    newArrivalIndex.value = maxIndex;
  }
}

function nextNewArrival() {
  const maxIndex = Math.max(
    0,
    homeProducts.value.length - newArrivalVisibleCount.value,
  );

  if (newArrivalIndex.value < maxIndex) {
    newArrivalIndex.value += 1;
  }
}

function previousNewArrival() {
  if (newArrivalIndex.value > 0) {
    newArrivalIndex.value -= 1;
  }
}

function getNewArrivalSection(product) {
  const category = String(product?.category || "").toLowerCase();
  const name = String(product?.name || "").toLowerCase();

  if (
    category.includes("saree") ||
    category.includes("sarees") ||
    name.includes("saree")
  ) {
    return "Sarees";
  }

  if (
    category.includes("kids") ||
    category.includes("kid") ||
    category.includes("children") ||
    category.includes("child") ||
    name.includes("kids") ||
    name.includes("kid")
  ) {
    return "Kids Wear";
  }

  if (
    category.includes("custom") ||
    category.includes("customised") ||
    category.includes("customized") ||
    name.includes("custom")
  ) {
    return "Customised";
  }

  return "Dresses";
}

function getHomeProductLink(product) {
  const section = getNewArrivalSection(product);

  if (section === "Sarees") {
    return "/sarees";
  }

  if (section === "Kids Wear") {
    return "/kids-wear";
  }

  if (section === "Customised") {
    return "/customised-dresses";
  }

  return "/dresses";
}

/* OPEN PRODUCT */
function openProduct(product) {
  selectedProduct.value = product;

  selectedSize.value = "";
  sizeError.value = false;
  showSizeChart.value = false;

  document.body.style.overflow = "hidden";
}

/* CLOSE PRODUCT */
function closeProduct() {
  selectedProduct.value = null;

  selectedSize.value = "";
  sizeError.value = false;
  showSizeChart.value = false;

  document.body.style.overflow = "";
}

/* SELECT SIZE */
function selectSize(size) {
  selectedSize.value = size;
  sizeError.value = false;
}

/* VALIDATE SIZE */
function validateSize() {
  if (!selectedSize.value) {
    sizeError.value = true;
    return false;
  }

  sizeError.value = false;
  return true;
}

/* CART PRODUCT */
function createCartProduct() {
  return {
    ...selectedProduct.value,
    size: selectedSize.value,
  };
}

/* ADD TO CART */
function handleProductAddToCart() {
  if (!selectedProduct.value) return;

  if (selectedProduct.value.stock <= 0) {
    return;
  }

  if (!validateSize()) {
    return;
  }

  const cartProduct = createCartProduct();

  addToCart(cartProduct);

  alert(`${selectedProduct.value.name} (${selectedSize.value}) added to cart`);
}

/* BUY NOW */
function handleBuyNow() {
  if (!selectedProduct.value) return;

  if (selectedProduct.value.stock <= 0) {
    return;
  }

  if (!validateSize()) {
    return;
  }

  const cartProduct = createCartProduct();

  addToCart(cartProduct);

  closeProduct();

  router.push("/checkout");
}

/* WISHLIST */
function handleWishlist(product) {
  toggleWishlist(product);
}

/* PRODUCT IMAGE ERROR */
function handleProductImageError(product) {
  product.imageError = true;

  console.error("Unable to load product image:", product.image);
}

/* SELECTED IMAGE ERROR */
function handleSelectedProductImageError() {
  if (selectedProduct.value) {
    selectedProduct.value.imageError = true;
  }
}

/* ESCAPE */
function handleEscape(event) {
  if (event.key !== "Escape") return;

  if (showSizeChart.value) {
    showSizeChart.value = false;
    return;
  }

  if (selectedProduct.value) {
    closeProduct();
    return;
  }

  if (showStallDetails.value) {
    showStallDetails.value = false;
  }
}

/* MOUNT */
onMounted(async () => {
  startCarousel();

  window.addEventListener("keydown", handleEscape);
  updateNewArrivalLayout();
  window.addEventListener("resize", updateNewArrivalLayout);

  await loadActiveStall();
  await loadProducts();
  await loadLargeCollectionImages();
});

/* UNMOUNT */
onBeforeUnmount(() => {
  stopCarousel();

  window.removeEventListener("keydown", handleEscape);
  window.removeEventListener("resize", updateNewArrivalLayout);

  document.body.style.overflow = "";
});
</script>

<style scoped>
/* HERO */
.carousel-slide {
  position: absolute;
  inset: 0;
  width: 100%;
  transform: translateX(100%);
  opacity: 0;
  transition:
    transform 0.7s ease-in-out,
    opacity 0.7s ease-in-out;
  pointer-events: none;
}

.carousel-slide:first-child {
  position: relative;
}

.carousel-slide-active {
  transform: translateX(0);
  opacity: 1;
  z-index: 10;
}

.carousel-slide:not(.carousel-slide-active) {
  transform: translateX(-100%);
}

@media (max-width: 640px) {
  .carousel-slide:first-child {
    position: absolute;
  }

  .carousel-slide-active:first-child {
    position: absolute;
  }
}

@media (prefers-reduced-motion: reduce) {
  .carousel-slide {
    transition: none;
  }
}

/* NEW ARRIVALS */
.new-arrival-card {
  box-shadow: 0 12px 35px rgba(70, 45, 45, 0.08);
}

.new-arrival-card::after {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  border: 1px solid rgba(255, 255, 255, 0.18);
}

/* STALL */
.stall-card {
  animation: stallAttention 5s ease-in-out infinite;
}

@keyframes stallAttention {
  0%,
  100% {
    transform: translateY(0);
  }

  8% {
    transform: translateY(-4px);
  }

  16% {
    transform: translateY(0);
  }

  24% {
    transform: translateY(-2px);
  }

  32%,
  100% {
    transform: translateY(0);
  }
}

.stall-card::before {
  content: "";
  position: absolute;
  inset: -3px;
  z-index: -1;
  border-radius: inherit;
  background: #b43d5b;
  opacity: 0;
  filter: blur(12px);
  animation: stallGlow 5s ease-in-out infinite;
}

@keyframes stallGlow {
  0%,
  55%,
  100% {
    opacity: 0;
  }

  65% {
    opacity: 0.18;
  }

  75% {
    opacity: 0;
  }
}

.stall-card-inner {
  position: relative;
  overflow: hidden;
}

.stall-card-inner::after {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 45%;
  height: 100%;
  transform: skewX(-20deg);
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.45),
    transparent
  );
  animation: stallShine 6s ease-in-out infinite;
}

@keyframes stallShine {
  0%,
  65% {
    left: -100%;
  }

  82% {
    left: 150%;
  }

  100% {
    left: 150%;
  }
}

.stall-card:hover {
  animation-play-state: paused;
}

.stall-card:hover::before,
.stall-card:hover .stall-card-inner::after {
  animation-play-state: paused;
}

@media (prefers-reduced-motion: reduce) {
  .stall-card,
  .stall-card::before,
  .stall-card-inner::after {
    animation: none !important;
  }
}

/* STYLE STORIES */
.maad-style-stories {
  width: 100%;
}

.maad-style-stories :deep(img) {
  transition: transform 700ms ease;
}

.maad-style-stories :deep(a:hover img) {
  transform: scale(1.025);
}
</style>
