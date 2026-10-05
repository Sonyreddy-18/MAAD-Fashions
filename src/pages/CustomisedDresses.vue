<template>
  <div class="min-h-screen overflow-x-hidden bg-[#fcfaf8] text-[#302525]">
    <Navbar />

    <!-- MOBILE SEARCH -->
    <section
      class="border-b border-[#e9e0dc] bg-[#fcfaf8] px-4 pb-3 pt-7 lg:hidden"
    >
      <div class="flex h-11 items-center border-b border-[#cfc3be]">
        <svg
          class="mr-3 h-4 w-4 text-[#8d7778]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.8"
            d="m21 21-4.35-4.35m1.35-5.65a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
          />
        </svg>

        <input
          v-model="search"
          type="text"
          placeholder="Search designs..."
          class="w-full bg-transparent text-sm outline-none placeholder:text-[#a79596]"
        />
      </div>
    </section>

    <!-- MOBILE FILTER -->
    <section
      class="sticky top-0 z-40 border-b border-[#e9e0dc] bg-[#fcfaf8]/95 backdrop-blur-md lg:hidden"
    >
      <div class="flex h-14 items-center gap-2 overflow-x-auto px-3">
        <button
          type="button"
          class="flex shrink-0 items-center gap-2 border border-[#d8cec9] px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.15em]"
          @click="mobileSortOpen = !mobileSortOpen"
        >
          Sort
          <span>⌄</span>
        </button>

        <button
          type="button"
          class="flex shrink-0 items-center gap-2 border border-[#d8cec9] px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.15em]"
          @click="mobileCategoryOpen = !mobileCategoryOpen"
        >
          Category
          <span>⌄</span>
        </button>

        <button
          type="button"
          class="flex shrink-0 items-center gap-2 border border-[#d8cec9] px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.15em]"
          @click="mobileStyleOpen = !mobileStyleOpen"
        >
          Style
          <span>⌄</span>
        </button>

        <button
          type="button"
          class="flex shrink-0 bg-[#302525] px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.15em] text-white"
          @click="clearFilters"
        >
          Clear
        </button>
      </div>

      <!-- SORT -->
      <div
        v-if="mobileSortOpen"
        class="border-t border-[#e9e0dc] bg-[#fcfaf8] px-4 py-4"
      >
        <div class="grid grid-cols-2 gap-2">
          <button
            v-for="option in sortOptions"
            :key="option.value"
            type="button"
            class="border px-3 py-2.5 text-xs"
            :class="
              sortBy === option.value
                ? 'border-[#9b4056] bg-[#fff3f5] text-[#9b4056]'
                : 'border-[#ded6d2]'
            "
            @click="
              sortBy = option.value;
              mobileSortOpen = false;
            "
          >
            {{ option.label }}
          </button>
        </div>
      </div>

      <!-- CATEGORY -->
      <div
        v-if="mobileCategoryOpen"
        class="border-t border-[#e9e0dc] bg-[#fcfaf8] px-4 py-4"
      >
        <div class="flex flex-wrap gap-2">
          <button
            v-for="category in categoriesWithVideos"
            :key="category"
            type="button"
            class="border px-3 py-2 text-xs"
            :class="
              selectedCategory === category
                ? 'border-[#9b4056] bg-[#9b4056] text-white'
                : 'border-[#ded6d2]'
            "
            @click="
              selectedCategory = category;
              selectedStyle = 'All';
              mobileCategoryOpen = false;
            "
          >
            {{ category }}
          </button>
        </div>
      </div>

      <!-- STYLE -->
      <div
        v-if="mobileStyleOpen"
        class="border-t border-[#e9e0dc] bg-[#fcfaf8] px-4 py-4"
      >
        <div class="flex flex-wrap gap-2">
          <button
            v-for="style in styleOptions"
            :key="style"
            type="button"
            class="border px-3 py-2 text-xs"
            :class="
              selectedStyle === style
                ? 'border-[#9b4056] bg-[#9b4056] text-white'
                : 'border-[#ded6d2]'
            "
            @click="
              selectedStyle = style;
              mobileStyleOpen = false;
            "
          >
            {{ style }}
          </button>
        </div>
      </div>
    </section>

    <!-- HERO -->
    <section
      class="relative overflow-hidden border-b border-[#e9e0dc] bg-[#f5ece9]"
    >
      <div
        class="absolute -right-24 -top-32 h-[420px] w-[420px] rounded-full bg-[#ead0d5] blur-3xl"
      ></div>

      <div
        class="absolute -bottom-40 left-[-100px] h-[420px] w-[420px] rounded-full bg-[#efe0d9] blur-3xl"
      ></div>

      <div
        class="relative mx-auto max-w-[1500px] px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
      >
        <div class="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <div class="flex items-center gap-4">
              <span class="h-px w-12 bg-[#9b4056]"></span>

              <p
                class="text-[9px] font-semibold uppercase tracking-[0.4em] text-[#9b4056] sm:text-xs"
              >
                MAAD FASHIONS · ATELIER
              </p>
            </div>

            <h1
              class="mt-6 max-w-5xl font-serif text-[3.6rem] leading-[0.84] tracking-[-0.055em] sm:text-7xl lg:text-[8rem]"
            >
              Made
              <span class="italic text-[#9b4056]">for</span>
              you.
            </h1>

            <p
              class="mt-8 max-w-xl text-sm leading-7 text-[#756668] sm:text-base"
            >
              Start with one of our designs and make it completely yours. Choose
              your fabric, colour, silhouette and details.
            </p>

            <div class="mt-9 flex flex-wrap gap-3">
              <a
                href="#designs"
                class="inline-flex items-center gap-3 bg-[#302525] px-7 py-4 text-[9px] font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#9b4056]"
              >
                Explore Collection
                <span>→</span>
              </a>

              <button
                type="button"
                class="inline-flex items-center gap-3 border border-[#bfaeaa] bg-white/70 px-7 py-4 text-[9px] font-semibold uppercase tracking-[0.18em] transition hover:border-[#9b4056] hover:text-[#9b4056]"
                @click="openCustomiseForm()"
              >
                Start From Scratch
              </button>
            </div>
          </div>

          <div class="lg:pl-16">
            <div class="border-l border-[#bfaeaa] pl-7">
              <p
                class="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#9b4056]"
              >
                The MAAD Way
              </p>

              <p class="mt-5 font-serif text-3xl leading-tight sm:text-4xl">
                One design.
                <br />
                <span class="italic text-[#9b4056]">
                  Endless possibilities.
                </span>
              </p>

              <div class="mt-7 h-px w-16 bg-[#9b4056]"></div>

              <p class="mt-6 max-w-sm text-xs leading-6 text-[#796b6b]">
                Pick a piece you love, then tell us how you want it made. We'll
                take it from inspiration to your finished look.
              </p>

              <div
                class="mt-8 grid grid-cols-3 gap-4 border-t border-[#d6c8c3] pt-5"
              >
                <div>
                  <p class="font-serif text-2xl">01</p>
                  <p
                    class="mt-1 text-[8px] uppercase tracking-[0.12em] text-[#8a7778]"
                  >
                    Choose
                  </p>
                </div>

                <div>
                  <p class="font-serif text-2xl">02</p>
                  <p
                    class="mt-1 text-[8px] uppercase tracking-[0.12em] text-[#8a7778]"
                  >
                    Personalise
                  </p>
                </div>

                <div>
                  <p class="font-serif text-2xl">03</p>
                  <p
                    class="mt-1 text-[8px] uppercase tracking-[0.12em] text-[#8a7778]"
                  >
                    Create
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FEATURES -->
    <section class="border-b border-[#e9e0dc] bg-white">
      <div class="mx-auto grid max-w-[1500px] grid-cols-2 lg:grid-cols-4">
        <div
          v-for="(feature, index) in features"
          :key="feature.title"
          class="border-b border-[#e9e0dc] px-5 py-7 sm:px-8 lg:border-b-0 lg:border-r lg:px-10 lg:py-9"
          :class="index === features.length - 1 ? 'lg:border-r-0' : ''"
        >
          <div class="flex items-start justify-between">
            <span class="font-serif text-2xl text-[#9b4056]">
              {{ feature.icon }}
            </span>

            <span class="text-[8px] tracking-[0.2em] text-[#b3a2a0]">
              0{{ index + 1 }}
            </span>
          </div>

          <h3
            class="mt-6 text-[10px] font-semibold uppercase tracking-[0.14em] sm:text-xs"
          >
            {{ feature.title }}
          </h3>

          <p
            class="mt-2 max-w-xs text-[10px] leading-5 text-[#8a7778] sm:text-xs"
          >
            {{ feature.description }}
          </p>
        </div>
      </div>
    </section>

    <!-- DESIGNS -->
    <section
      id="designs"
      class="scroll-mt-20 px-3 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-24 lg:px-10"
    >
      <div class="mx-auto max-w-[1500px]">
        <!-- HEADER -->
        <div
          class="grid gap-8 border-b border-[#dcd1cd] pb-8 lg:grid-cols-[1fr_auto] lg:items-end"
        >
          <div>
            <div class="flex items-center gap-3">
              <span
                class="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#9b4056]"
              >
                Collection 01
              </span>

              <span class="h-px w-8 bg-[#9b4056]"></span>
            </div>

            <h2
              class="mt-3 font-serif text-4xl tracking-[-0.035em] sm:text-6xl"
            >
              Customised
              <span class="italic text-[#9b4056]">Edit.</span>
            </h2>

            <p
              class="mt-4 max-w-xl text-xs leading-6 text-[#817273] sm:text-sm"
            >
              Explore silhouettes that can be changed, refined and made
              specifically for you.
            </p>
          </div>

          <div
            class="flex items-end justify-between gap-8 lg:block lg:text-right"
          >
            <div>
              <p class="font-serif text-4xl">{{ filteredItems.length }}</p>

              <p
                class="mt-1 text-[8px] uppercase tracking-[0.18em] text-[#8a7778]"
              >
                Designs Available
              </p>
            </div>
          </div>
        </div>

        <!-- DESKTOP FILTERS -->
        <div class="mb-10 hidden lg:block">
          <div class="flex items-center gap-6 border-b border-[#e9e0dc] py-5">
            <div
              class="flex h-11 flex-1 items-center border-b border-[#cfc5c1]"
            >
              <svg
                class="mr-3 h-4 w-4 text-[#8d7778]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.8"
                  d="m21 21-4.35-4.35m1.35-5.65a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                />
              </svg>

              <input
                v-model="search"
                type="text"
                placeholder="Search customised designs..."
                class="w-full bg-transparent text-sm outline-none placeholder:text-[#a79596]"
              />
            </div>

            <select
              v-model="sortBy"
              class="h-11 min-w-[190px] border-b border-[#cfc5c1] bg-transparent px-2 text-[9px] font-semibold uppercase tracking-[0.14em] outline-none"
            >
              <option
                v-for="option in sortOptions"
                :key="option.value"
                :value="option.value"
              >
                {{ option.label }}
              </option>
            </select>
          </div>

          <div class="flex flex-wrap gap-x-7 gap-y-3 pt-5">
            <button
              v-for="category in categoriesWithVideos"
              :key="category"
              type="button"
              class="border-b pb-2 text-[9px] font-semibold uppercase tracking-[0.14em] transition"
              :class="
                selectedCategory === category
                  ? 'border-[#9b4056] text-[#9b4056]'
                  : 'border-transparent text-[#796b6b] hover:border-[#9b4056] hover:text-[#9b4056]'
              "
              @click="
                selectedCategory = category;
                selectedStyle = 'All';
              "
            >
              {{ category }}
            </button>
          </div>
        </div>

        <!-- MOBILE CATEGORIES -->
        <div
          class="mb-8 flex gap-5 overflow-x-auto border-b border-[#e9e0dc] pb-3 lg:hidden"
        >
          <button
            v-for="category in categoriesWithVideos"
            :key="category"
            type="button"
            class="shrink-0 border-b pb-2 text-[9px] font-semibold uppercase tracking-[0.13em]"
            :class="
              selectedCategory === category
                ? 'border-[#9b4056] text-[#9b4056]'
                : 'border-transparent text-[#796b6b]'
            "
            @click="
              selectedCategory = category;
              selectedStyle = 'All';
            "
          >
            {{ category }}
          </button>
        </div>

        <!-- EMPTY -->
        <div
          v-if="filteredItems.length === 0"
          class="border-y border-[#e9e0dc] bg-white px-6 py-24 text-center"
        >
          <div
            class="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#dfd3cf] font-serif text-3xl text-[#9b4056]"
          >
            ♡
          </div>

          <p
            class="mt-7 text-[9px] font-semibold uppercase tracking-[0.3em] text-[#9b4056]"
          >
            Nothing here yet
          </p>

          <h3 class="mt-3 font-serif text-3xl sm:text-4xl">No designs found</h3>

          <p class="mx-auto mt-3 max-w-md text-sm leading-6 text-[#8a7778]">
            Try another category or clear your filters to see the complete
            customised collection.
          </p>

          <button
            type="button"
            class="mt-7 bg-[#302525] px-7 py-3.5 text-[9px] font-semibold uppercase tracking-[0.17em] text-white transition hover:bg-[#9b4056]"
            @click="clearFilters"
          >
            Clear Filters
          </button>
        </div>

        <!-- PRODUCT GRID -->
        <div
          v-else
          class="grid grid-cols-2 gap-x-3 gap-y-12 sm:gap-x-6 sm:gap-y-16 lg:grid-cols-4 lg:gap-x-7 lg:gap-y-20"
        >
          <article
            v-for="(item, index) in filteredItems"
            :key="item.id"
            class="group min-w-0"
          >
            <!-- IMAGE -->
            <div class="relative aspect-[3/4] overflow-hidden bg-[#f1e6e3]">
              <!-- FIRST IMAGE -->
              <img
                v-if="item.image && !item.imageError"
                :src="item.image"
                :alt="item.name"
                class="absolute inset-0 h-full w-full object-cover opacity-100 transition-all duration-700 ease-out group-hover:scale-[1.035] group-hover:opacity-0"
                @error="handleImageError(item)"
              />

              <!-- SECOND IMAGE -->
              <img
                v-if="
                  item.hoverImage &&
                  item.hoverImage !== item.image &&
                  !item.hoverImageError
                "
                :src="item.hoverImage"
                :alt="`${item.name} alternate view`"
                class="absolute inset-0 h-full w-full object-cover opacity-0 transition-all duration-700 ease-out group-hover:scale-[1.035] group-hover:opacity-100"
                @error="handleHoverImageError(item)"
              />

              <!-- SAME IMAGE -->
              <img
                v-if="
                  item.image &&
                  item.hoverImage === item.image &&
                  !item.imageError
                "
                :src="item.image"
                :alt="item.name"
                class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
              />

              <!-- FALLBACK -->
              <div
                v-if="!item.image || item.imageError"
                class="flex h-full items-center justify-center bg-[#f1e6e3]"
              >
                <div class="text-center">
                  <span class="font-serif text-3xl italic text-[#9b4056]">
                    MAAD
                  </span>

                  <p
                    class="mt-2 text-[8px] uppercase tracking-[0.2em] text-[#9b8b8a]"
                  >
                    Custom Edit
                  </p>
                </div>
              </div>

              <!-- TOP LEFT -->
              <div class="absolute left-3 top-3 z-20 sm:left-4 sm:top-4">
                <span
                  class="bg-white/90 px-2 py-1 text-[7px] font-semibold uppercase tracking-[0.14em] backdrop-blur-sm sm:text-[8px]"
                >
                  {{ item.category }}
                </span>
              </div>

              <!-- INDEX -->
              <span
                class="absolute bottom-3 left-3 z-20 text-[8px] font-semibold tracking-[0.15em] text-white drop-shadow sm:bottom-4 sm:left-4"
              >
                {{ String(index + 1).padStart(2, "0") }}
              </span>

              <!-- STOCK -->
              <div
                v-if="item.stock !== undefined"
                class="absolute right-3 top-3 z-20 sm:right-4 sm:top-4"
              >
                <span
                  v-if="item.stock <= 0"
                  class="bg-[#302525] px-2 py-1 text-[7px] font-semibold uppercase tracking-[0.1em] text-white sm:text-[8px]"
                >
                  Sold Out
                </span>

                <span
                  v-else
                  class="bg-white/90 px-2 py-1 text-[7px] font-semibold uppercase tracking-[0.1em] text-[#58745f] backdrop-blur-sm sm:text-[8px]"
                >
                  Available
                </span>
              </div>

              <!-- HOVER CTA -->
              <div
                class="absolute inset-x-3 bottom-3 z-30 translate-y-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:inset-x-4 sm:bottom-4"
              >
                <button
                  type="button"
                  class="w-full bg-white/95 py-3 text-[8px] font-semibold uppercase tracking-[0.16em] text-[#302525] shadow-lg backdrop-blur-sm transition hover:bg-[#302525] hover:text-white sm:text-[9px]"
                  @click="openCustomiseForm(item)"
                >
                  Customise This Design →
                </button>
              </div>
            </div>

            <!-- DETAILS -->
            <div class="pt-4 sm:pt-5">
              <div class="flex items-start justify-between gap-3">
                <div class="min-w-0">
                  <p
                    class="text-[8px] font-semibold uppercase tracking-[0.22em] text-[#9b4056]"
                  >
                    MAAD CUSTOM
                  </p>

                  <h3
                    class="mt-1 truncate font-serif text-[16px] text-[#302525] sm:text-lg"
                    :title="item.name"
                  >
                    {{ item.name }}
                  </h3>
                </div>

                <p
                  class="shrink-0 text-[11px] font-medium text-[#302525] sm:text-sm"
                >
                  ₹{{ Number(item.price || 0).toLocaleString("en-IN") }}
                </p>
              </div>

              <p
                v-if="item.description"
                class="mt-2 line-clamp-2 text-[9px] leading-4 text-[#8a7778] sm:text-[10px]"
              >
                {{ item.description }}
              </p>

              <!-- ACTIONS -->
              <div class="mt-4 grid grid-cols-2 gap-2">
                <button
                  type="button"
                  class="h-10 border border-[#d7ccc8] bg-white text-[8px] font-semibold uppercase tracking-[0.12em] transition hover:border-[#9b4056] hover:text-[#9b4056] sm:text-[9px]"
                  @click="selectProduct(item)"
                >
                  Try On
                </button>

                <button
                  type="button"
                  class="h-10 bg-[#302525] text-[8px] font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-[#9b4056] sm:text-[9px]"
                  @click="openCustomiseForm(item)"
                >
                  Customise
                </button>
              </div>

              <button
                v-if="item.video"
                type="button"
                class="mt-2 flex h-8 w-full items-center justify-center gap-2 border-b border-[#d9cfcb] text-[8px] font-medium uppercase tracking-[0.12em] text-[#6f5b5c] transition hover:border-[#9b4056] hover:text-[#9b4056] sm:text-[9px]"
                @click="openVideo(item)"
              >
                <span>▶</span>
                Watch Design Video
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- CUSTOM REQUEST -->
    <section
      id="request"
      class="scroll-mt-20 border-y border-[#e7ddd9] bg-[#f3e9e6] px-4 py-16 sm:px-6 sm:py-24 lg:px-10 lg:py-32"
    >
      <div
        class="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24"
      >
        <!-- LEFT -->
        <div class="lg:pt-8">
          <p
            class="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#9b4056] sm:text-xs"
          >
            Bespoke Service
          </p>

          <h2
            class="mt-5 font-serif text-5xl leading-[0.9] tracking-[-0.04em] sm:text-7xl"
          >
            Make it
            <br />
            <span class="italic text-[#9b4056]">yours.</span>
          </h2>

          <p
            class="mt-7 max-w-lg text-sm leading-7 text-[#746263] sm:text-base"
          >
            Select a design above or tell us your idea from scratch. Our team
            will help turn your vision into a finished piece.
          </p>

          <div class="mt-10 border-t border-[#d5c6c1]">
            <div
              class="flex items-center justify-between border-b border-[#d5c6c1] py-5"
            >
              <div class="flex items-center gap-4">
                <span class="font-serif text-xl text-[#9b4056]">01</span>

                <span
                  class="text-[9px] font-semibold uppercase tracking-[0.12em] text-[#6f5b5c] sm:text-xs"
                >
                  Choose your design
                </span>
              </div>

              <span class="text-[#9b4056]">→</span>
            </div>

            <div
              class="flex items-center justify-between border-b border-[#d5c6c1] py-5"
            >
              <div class="flex items-center gap-4">
                <span class="font-serif text-xl text-[#9b4056]">02</span>

                <span
                  class="text-[9px] font-semibold uppercase tracking-[0.12em] text-[#6f5b5c] sm:text-xs"
                >
                  Select fabric & colour
                </span>
              </div>

              <span class="text-[#9b4056]">→</span>
            </div>

            <div
              class="flex items-center justify-between border-b border-[#d5c6c1] py-5"
            >
              <div class="flex items-center gap-4">
                <span class="font-serif text-xl text-[#9b4056]">03</span>

                <span
                  class="text-[9px] font-semibold uppercase tracking-[0.12em] text-[#6f5b5c] sm:text-xs"
                >
                  Tell us the details
                </span>
              </div>

              <span class="text-[#9b4056]">→</span>
            </div>
          </div>
        </div>

        <!-- FORM -->
        <div
          class="bg-white p-5 shadow-[0_20px_70px_rgba(48,37,37,0.08)] sm:p-8 lg:p-12"
        >
          <div
            class="mb-8 flex items-end justify-between border-b border-[#ded6d2] pb-6"
          >
            <div>
              <p
                class="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#9b4056]"
              >
                Custom Request
              </p>

              <h3 class="mt-2 font-serif text-3xl sm:text-4xl">
                Create your piece
              </h3>
            </div>

            <span
              class="hidden text-[8px] uppercase tracking-[0.18em] text-[#999] sm:block"
            >
              MAAD / BESPOKE
            </span>
          </div>

          <!-- SELECTED PRODUCT -->
          <div
            v-if="form.productId"
            class="mb-8 border border-[#e3d9d5] bg-[#faf6f4] p-4 sm:p-5"
          >
            <div class="mb-4 flex items-center justify-between">
              <p
                class="text-[8px] font-semibold uppercase tracking-[0.25em] text-[#9b4056]"
              >
                Selected Design
              </p>

              <button
                type="button"
                class="text-[8px] uppercase tracking-[0.12em] text-[#8a7778] hover:text-[#9b4056]"
                @click="clearSelectedDesign"
              >
                Change
              </button>
            </div>

            <div class="flex gap-4">
              <div
                class="h-28 w-20 shrink-0 overflow-hidden bg-[#eee3e0] sm:h-32 sm:w-24"
              >
                <img
                  v-if="form.productImage"
                  :src="form.productImage"
                  :alt="form.productName"
                  class="h-full w-full object-cover"
                />

                <div
                  v-else
                  class="flex h-full items-center justify-center font-serif text-[#9b4056]"
                >
                  MAAD
                </div>
              </div>

              <div class="min-w-0 flex-1">
                <p
                  class="text-[8px] uppercase tracking-[0.15em] text-[#9b4056]"
                >
                  {{ form.productCategory || "Custom Design" }}
                </p>

                <h3 class="mt-1 font-serif text-xl sm:text-2xl">
                  {{ form.productName }}
                </h3>

                <p class="mt-2 text-sm font-medium">
                  ₹{{ Number(form.productPrice || 0).toLocaleString("en-IN") }}
                </p>

                <p class="mt-2 text-[9px] leading-4 text-[#8a7778]">
                  This design has been added to your custom request.
                </p>
              </div>
            </div>
          </div>

          <form class="space-y-7" @submit.prevent="submitRequest">
            <!-- NAME + PHONE -->
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label
                  class="mb-2 block text-[9px] font-semibold uppercase tracking-[0.15em]"
                >
                  Name
                </label>

                <input
                  v-model="form.name"
                  type="text"
                  placeholder="Your name"
                  class="h-12 w-full border-b border-[#cfc5c1] bg-transparent px-0 text-sm outline-none transition focus:border-[#9b4056] placeholder:text-[#aaa0a0]"
                />
              </div>

              <div>
                <label
                  class="mb-2 block text-[9px] font-semibold uppercase tracking-[0.15em]"
                >
                  Phone
                </label>

                <input
                  v-model="form.phone"
                  type="tel"
                  placeholder="Your phone number"
                  class="h-12 w-full border-b border-[#cfc5c1] bg-transparent px-0 text-sm outline-none transition focus:border-[#9b4056] placeholder:text-[#aaa0a0]"
                />
              </div>
            </div>

            <!-- DRESS TYPE + FABRIC -->
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label
                  class="mb-2 block text-[9px] font-semibold uppercase tracking-[0.15em]"
                >
                  Dress Type
                </label>

                <select
                  v-model="form.dressType"
                  class="h-12 w-full border-b border-[#cfc5c1] bg-white px-0 text-sm outline-none focus:border-[#9b4056]"
                >
                  <option value="">Select dress type</option>

                  <option v-for="type in dressTypes" :key="type" :value="type">
                    {{ type }}
                  </option>
                </select>
              </div>

              <div>
                <label
                  class="mb-2 block text-[9px] font-semibold uppercase tracking-[0.15em]"
                >
                  Fabric
                </label>

                <select
                  v-model="form.fabric"
                  class="h-12 w-full border-b border-[#cfc5c1] bg-white px-0 text-sm outline-none focus:border-[#9b4056]"
                >
                  <option value="">Select fabric</option>

                  <option
                    v-for="fabric in fabricOptions"
                    :key="fabric"
                    :value="fabric"
                  >
                    {{ fabric }}
                  </option>
                </select>
              </div>
            </div>

            <!-- COLOUR -->
            <div>
              <label
                class="mb-2 block text-[9px] font-semibold uppercase tracking-[0.15em]"
              >
                Preferred Colour
              </label>

              <input
                v-model="form.color"
                type="text"
                placeholder="For example: Wine, Ivory, Dusty Pink..."
                class="h-12 w-full border-b border-[#cfc5c1] bg-transparent px-0 text-sm outline-none transition focus:border-[#9b4056] placeholder:text-[#aaa0a0]"
              />
            </div>

            <!-- REQUIREMENTS -->
            <div>
              <label
                class="mb-2 block text-[9px] font-semibold uppercase tracking-[0.15em]"
              >
                Requirements
              </label>

              <textarea
                v-model="form.requirements"
                rows="5"
                placeholder="Tell us about measurements, sleeves, neckline, length, occasion, embroidery, colour, styling, or anything else..."
                class="w-full resize-none border-b border-[#cfc5c1] bg-transparent px-0 py-3 text-sm leading-6 outline-none focus:border-[#9b4056] placeholder:text-[#aaa0a0]"
              ></textarea>
            </div>

            <!-- SUBMIT -->
            <button
              type="submit"
              :disabled="submitting"
              class="group flex h-14 w-full items-center justify-center gap-4 bg-[#302525] text-[9px] font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#9b4056] disabled:cursor-not-allowed disabled:opacity-60"
            >
              <span>
                {{ submitting ? "Sending Request..." : "Send Custom Request" }}
              </span>

              <span class="transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>

            <p
              v-if="requestMessage"
              class="border-l-2 px-4 py-3 text-xs"
              :class="
                requestSuccess
                  ? 'border-[#3f6c4d] bg-[#f2f8f3] text-[#3f6c4d]'
                  : 'border-[#9b4056] bg-[#fff5f5] text-[#9b4056]'
              "
            >
              {{ requestMessage }}
            </p>
          </form>
        </div>
      </div>
    </section>

    <!-- TRY ON MODAL -->
    <div
      v-if="showTryOn"
      class="fixed inset-0 z-[200] flex items-center justify-center bg-[#302525]/80 p-3 backdrop-blur-sm sm:p-6"
      @click.self="closeTryOn"
    >
      <div
        class="relative max-h-[92vh] w-full max-w-6xl overflow-y-auto bg-[#fbf8f6] shadow-2xl"
      >
        <button
          type="button"
          class="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center border border-[#ddd3cf] bg-white text-lg shadow-sm sm:right-5 sm:top-5"
          @click="closeTryOn"
        >
          ×
        </button>

        <div class="grid gap-6 p-4 sm:p-8 lg:grid-cols-2 lg:gap-10">
          <div>
            <div class="overflow-hidden bg-[#f2e5e7]">
              <div v-if="cameraActive" class="relative aspect-[3/4]">
                <video
                  ref="videoElement"
                  autoplay
                  playsinline
                  class="h-full w-full object-cover"
                ></video>
              </div>

              <div v-else-if="photoPreview" class="relative aspect-[3/4]">
                <img
                  :src="photoPreview"
                  alt="Uploaded photo"
                  class="h-full w-full object-contain"
                />
              </div>

              <div v-else class="flex aspect-[3/4] items-center justify-center">
                <div class="text-center">
                  <div class="text-4xl text-[#9b4056]">♡</div>

                  <p class="mt-3 text-xs text-[#8a7778]">
                    Upload a photo or use your camera
                  </p>
                </div>
              </div>
            </div>

            <div class="mt-3 grid grid-cols-2 gap-2">
              <label
                class="flex h-11 cursor-pointer items-center justify-center border border-[#d9cfcb] bg-white text-[9px] font-semibold uppercase tracking-[0.12em]"
              >
                Upload Photo

                <input
                  type="file"
                  accept="image/*"
                  class="hidden"
                  @change="handlePhotoUpload"
                />
              </label>

              <button
                type="button"
                class="h-11 bg-[#302525] text-[9px] font-semibold uppercase tracking-[0.12em] text-white"
                @click="toggleCamera"
              >
                {{ cameraActive ? "Stop Camera" : "Use Camera" }}
              </button>
            </div>
          </div>

          <div class="flex flex-col justify-center px-1 sm:px-4">
            <p
              class="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#9b4056] sm:text-xs"
            >
              Virtual Try-On
            </p>

            <h3 class="mt-3 font-serif text-3xl leading-tight sm:text-5xl">
              {{ selectedProduct?.name || "Try Your Look" }}
            </h3>

            <p class="mt-4 text-sm leading-7 text-[#746263]">
              Upload a clear front-facing photo and preview how the selected
              design looks on you.
            </p>

            <div
              v-if="tryOnError"
              class="mt-5 border-l-2 border-[#9b4056] bg-[#fff5f5] px-4 py-3 text-xs text-[#9b4056]"
            >
              {{ tryOnError }}
            </div>

            <div
              v-if="tryOnResult"
              class="mt-5 overflow-hidden border border-[#ded6d2] bg-white"
            >
              <img
                :src="tryOnResult"
                alt="Virtual try-on result"
                class="max-h-[400px] w-full object-contain"
              />
            </div>

            <button
              type="button"
              class="mt-6 h-12 w-full bg-[#9b4056] text-[10px] font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#302525] disabled:cursor-not-allowed disabled:opacity-50"
              :disabled="!photoPreview || tryOnLoading"
              @click="generateTryOn"
            >
              {{
                tryOnLoading
                  ? "Creating Your Look..."
                  : "Generate Virtual Try-On"
              }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- VIDEO MODAL -->
    <div
      v-if="showVideo"
      class="fixed inset-0 z-[210] flex items-center justify-center bg-[#302525]/90 p-3 backdrop-blur-sm sm:p-6"
      @click.self="closeVideo"
    >
      <div
        class="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto bg-black p-2 shadow-2xl sm:p-4"
      >
        <button
          type="button"
          class="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center bg-white text-lg shadow"
          @click="closeVideo"
        >
          ×
        </button>

        <video
          v-if="selectedVideo"
          :src="selectedVideo"
          controls
          autoplay
          playsinline
          class="max-h-[82vh] w-full object-contain"
        ></video>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, reactive, ref } from "vue";
import Navbar from "../components/Navbar.vue";

/* API */
const API_URL = (
  import.meta.env.VITE_API_URL || "http://localhost:3000"
).replace(/\/$/, "");

/* STATE */
const products = ref([]);
const videos = ref([]);

const search = ref("");
const selectedCategory = ref("All");
const selectedStyle = ref("All");
const sortBy = ref("featured");

const mobileSortOpen = ref(false);
const mobileCategoryOpen = ref(false);
const mobileStyleOpen = ref(false);

const showTryOn = ref(false);
const showVideo = ref(false);

const selectedProduct = ref(null);
const selectedVideo = ref("");

const photoPreview = ref("");
const cameraActive = ref(false);
const videoElement = ref(null);
const cameraStream = ref(null);

const tryOnLoading = ref(false);
const tryOnError = ref("");
const tryOnResult = ref("");

const submitting = ref(false);
const requestMessage = ref("");
const requestSuccess = ref(false);

/* FORM */
const form = reactive({
  name: "",
  phone: "",
  productId: "",
  productName: "",
  productCategory: "",
  productPrice: 0,
  productImage: "",
  dressType: "",
  fabric: "",
  color: "",
  requirements: "",
});

/* OPTIONS */
const dressTypes = [
  "Frock",
  "Crop Top",
  "Party Wear",
  "Blouse",
  "Fabric",
  "Kids",
  "Cord Set",
];

const fabricOptions = [
  "Cotton",
  "Silk",
  "Georgette",
  "Chiffon",
  "Velvet",
  "Organza",
  "Linen",
  "Net",
  "Satin",
  "Crepe",
  "Rayon",
  "Other",
];

const features = [
  {
    icon: "✦",
    title: "Personalised",
    description: "Every detail can be changed to suit you.",
  },
  {
    icon: "♡",
    title: "Unique Designs",
    description: "Start with a design or create from scratch.",
  },
  {
    icon: "✧",
    title: "Premium Fabrics",
    description: "Choose the fabric that feels right for you.",
  },
  {
    icon: "⌁",
    title: "Made For You",
    description: "Your final piece is created around your vision.",
  },
];

const sortOptions = [
  {
    label: "Featured",
    value: "featured",
  },
  {
    label: "Price: Low to High",
    value: "price-low",
  },
  {
    label: "Price: High to Low",
    value: "price-high",
  },
  {
    label: "Name",
    value: "name",
  },
];

const categories = [
  "Frock",
  "Crop Top",
  "Party Wear",
  "Blouse",
  "Fabric",
  "Kids",
  "Cord Set",
];

const categoriesWithVideos = computed(() => ["All", ...categories, "Videos"]);

/* STYLE OPTIONS */
const styleOptions = computed(() => {
  const styles = products.value.map((item) => item.subCategory).filter(Boolean);

  const uniqueStyles = [];

  for (const style of styles) {
    const exists = uniqueStyles.some(
      (item) => normalize(item) === normalize(style),
    );

    if (!exists) {
      uniqueStyles.push(style);
    }
  }

  return ["All", ...uniqueStyles];
});

/* HELPERS */
function normalize(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ");
}

function getProductImages(product) {
  if (!Array.isArray(product?.images)) {
    return [];
  }

  return product.images
    .map((image) => {
      if (typeof image === "string") {
        return image;
      }

      return image?.url || image?.src || image?.path || "";
    })
    .filter(Boolean);
}

/* CATEGORY */
function getProductCategory(product) {
  return product?.subCategory || product?.category || "Custom";
}

/* CUSTOM PRODUCT */
function isCustomProduct(product) {
  const category = normalize(product?.category);
  const subCategory = normalize(product?.subCategory);

  const customCategories = ["customised", "customized", "custom", "bespoke"];

  const allowedCategories = categories.map(normalize);

  return (
    customCategories.includes(category) ||
    allowedCategories.includes(subCategory)
  );
}

/* PRODUCTS */
async function fetchCustomisedProducts() {
  try {
    const response = await fetch(`${API_URL}/products`);

    if (!response.ok) {
      throw new Error(`Products API returned ${response.status}`);
    }

    const data = await response.json();

    const source = Array.isArray(data)
      ? data
      : Array.isArray(data?.products)
        ? data.products
        : Array.isArray(data?.data)
          ? data.data
          : [];

    products.value = source
      .filter((product) => product?.isActive !== false)
      .filter((product) => isCustomProduct(product))
      .map((product) => {
        const images = getProductImages(product);

        const productVideo =
          product?.videos?.[0]?.url ||
          product?.videos?.[0] ||
          product?.videoUrl ||
          product?.video ||
          "";

        return {
          id: product.id ?? product._id,

          name: product.name || "Custom Design",

          price: Number(product.price || 0),

          stock:
            product.stock === undefined || product.stock === null
              ? undefined
              : Number(product.stock),

          category: getProductCategory(product),

          subCategory: product.subCategory || "",

          description: product.description || "",

          image: images[0] || product.image || product.imageUrl || "",

          hoverImage:
            images[1] || images[0] || product.image || product.imageUrl || "",

          fabric:
            product.fabric || product.fabricType || product.material || "",

          color: product.color || product.colour || "",

          imageError: false,
          hoverImageError: false,

          video: productVideo,

          raw: product,
        };
      });
  } catch (error) {
    console.error("Customised products error:", error);
    products.value = [];
  }
}

/* VIDEOS */
async function fetchStandaloneVideos() {
  try {
    const response = await fetch(`${API_URL}/products/standalone-videos`);

    if (!response.ok) {
      return;
    }

    const data = await response.json();

    videos.value = Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Standalone videos error:", error);
    videos.value = [];
  }
}

/* ITEMS */
const allItems = computed(() => {
  const productItems = products.value.map((item) => ({
    ...item,
    type: "product",
  }));

  const videoItems = videos.value.map((video, index) => ({
    id: `video-${video.id || index}`,

    name: video.name || video.title || "MAAD Design Video",

    price: 0,

    stock: 1,

    category: video.category || "Videos",

    subCategory: "",

    image: video.thumbnail || video.image || "",

    hoverImage: video.thumbnail || video.image || "",

    video: video.url || video.videoUrl || "",

    type: "video",
  }));

  return [...productItems, ...videoItems];
});

/* FILTER */
const filteredItems = computed(() => {
  let result = [...allItems.value];

  if (selectedCategory.value === "Videos") {
    result = result.filter((item) => item.type === "video");
  } else if (selectedCategory.value !== "All") {
    result = result.filter(
      (item) => normalize(item.category) === normalize(selectedCategory.value),
    );
  }

  if (selectedStyle.value !== "All") {
    result = result.filter(
      (item) => normalize(item.subCategory) === normalize(selectedStyle.value),
    );
  }

  const searchTerm = normalize(search.value);

  if (searchTerm) {
    result = result.filter((item) => {
      return (
        normalize(item.name).includes(searchTerm) ||
        normalize(item.category).includes(searchTerm) ||
        normalize(item.subCategory).includes(searchTerm) ||
        normalize(item.description).includes(searchTerm)
      );
    });
  }

  if (sortBy.value === "price-low") {
    result.sort((a, b) => Number(a.price || 0) - Number(b.price || 0));
  }

  if (sortBy.value === "price-high") {
    result.sort((a, b) => Number(b.price || 0) - Number(a.price || 0));
  }

  if (sortBy.value === "name") {
    result.sort((a, b) => String(a.name).localeCompare(String(b.name)));
  }

  return result;
});

/* FILTER HELPERS */
function clearFilters() {
  search.value = "";
  selectedCategory.value = "All";
  selectedStyle.value = "All";
  sortBy.value = "featured";

  mobileSortOpen.value = false;
  mobileCategoryOpen.value = false;
  mobileStyleOpen.value = false;
}

function scrollToRequest() {
  requestAnimationFrame(() => {
    document.getElementById("request")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

/* CUSTOMISE */
function openCustomiseForm(item = null) {
  requestMessage.value = "";
  requestSuccess.value = false;

  if (item) {
    form.productId = item.id || "";
    form.productName = item.name || "";
    form.productCategory = item.category || "";
    form.productPrice = Number(item.price || 0);
    form.productImage = item.image || "";

    form.dressType = item.subCategory || item.category || "";

    form.fabric = item.fabric || "";
    form.color = item.color || "";

    form.requirements = `I am interested in "${item.name || "this design"}". Please customise this design according to my requirements.`;
  } else {
    clearSelectedDesign();
    form.requirements = "";
  }

  scrollToRequest();
}

function clearSelectedDesign() {
  form.productId = "";
  form.productName = "";
  form.productCategory = "";
  form.productPrice = 0;
  form.productImage = "";
  form.dressType = "";
  form.fabric = "";
  form.color = "";
  form.requirements = "";
}

/* TRY ON */
function selectProduct(item) {
  selectedProduct.value = item;

  showTryOn.value = true;

  tryOnError.value = "";
  tryOnResult.value = "";
}

function closeTryOn() {
  showTryOn.value = false;

  stopCamera();

  tryOnError.value = "";
  tryOnResult.value = "";
}

/* PHOTO */
function handlePhotoUpload(event) {
  const file = event.target.files?.[0];

  if (!file) {
    return;
  }

  stopCamera();

  if (photoPreview.value?.startsWith("blob:")) {
    URL.revokeObjectURL(photoPreview.value);
  }

  photoPreview.value = URL.createObjectURL(file);
}

/* CAMERA */
async function toggleCamera() {
  if (cameraActive.value) {
    stopCamera();
    return;
  }

  try {
    cameraStream.value = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: "user",
      },
      audio: false,
    });

    cameraActive.value = true;

    await new Promise((resolve) => requestAnimationFrame(resolve));

    if (videoElement.value) {
      videoElement.value.srcObject = cameraStream.value;
    }
  } catch (error) {
    console.error("Camera error:", error);

    tryOnError.value =
      "Unable to access your camera. Please allow camera permission or upload a photo.";
  }
}

function stopCamera() {
  if (cameraStream.value) {
    cameraStream.value.getTracks().forEach((track) => track.stop());

    cameraStream.value = null;
  }

  cameraActive.value = false;
}

/* TRY ON */
async function generateTryOn() {
  if (!photoPreview.value || !selectedProduct.value) {
    tryOnError.value = "Please upload a photo first.";

    return;
  }

  try {
    tryOnLoading.value = true;

    tryOnError.value = "";
    tryOnResult.value = "";

    const response = await fetch(photoPreview.value);

    const blob = await response.blob();

    const personFile = new File([blob], "person.jpg", {
      type: blob.type || "image/jpeg",
    });

    const formData = new FormData();

    formData.append("person", personFile);

    formData.append("garmentUrl", selectedProduct.value.image || "");

    formData.append(
      "garmentCategory",
      selectedProduct.value.category || "Frock",
    );

    const result = await fetch(`${API_URL}/tryon`, {
      method: "POST",
      body: formData,
    });

    const data = await result.json();

    if (!result.ok) {
      throw new Error(data?.message || "Virtual try-on failed.");
    }

    tryOnResult.value =
      data.imageUrl || data.resultUrl || data.output || data.url || "";

    if (!tryOnResult.value) {
      throw new Error("The try-on service did not return an image.");
    }
  } catch (error) {
    console.error("Virtual try-on error:", error);

    tryOnError.value =
      error?.message || "Virtual try-on failed. Please try again.";
  } finally {
    tryOnLoading.value = false;
  }
}

/* VIDEO */
function openVideo(item) {
  if (!item.video) {
    return;
  }

  selectedVideo.value = item.video;
  showVideo.value = true;
}

function closeVideo() {
  showVideo.value = false;
  selectedVideo.value = "";
}

/* CUSTOM ORDER */
async function submitRequest() {
  requestMessage.value = "";
  requestSuccess.value = false;

  if (!form.name.trim()) {
    requestMessage.value = "Please enter your name.";

    return;
  }

  if (!form.phone.trim()) {
    requestMessage.value = "Please enter your phone number.";

    return;
  }

  if (!form.dressType) {
    requestMessage.value = "Please select a dress type.";

    return;
  }

  if (!form.fabric) {
    requestMessage.value = "Please select a fabric.";

    return;
  }

  if (!form.requirements.trim()) {
    requestMessage.value = "Please describe your requirements.";

    return;
  }

  const token =
    localStorage.getItem("token") || localStorage.getItem("accessToken");

  if (!token) {
    requestMessage.value = "Please login before submitting a custom request.";

    return;
  }

  try {
    submitting.value = true;

    const selectedDetails = form.productId
      ? [
          `Selected design: ${form.productName}.`,
          `Product ID: ${form.productId}.`,
          `Price: ₹${Number(form.productPrice || 0).toLocaleString("en-IN")}.`,
        ].join(" ")
      : "";

    const colourDetails = form.color ? `Preferred colour: ${form.color}.` : "";

    const description = [
      selectedDetails,
      `Fabric: ${form.fabric}.`,
      colourDetails,
      form.requirements.trim(),
    ]
      .filter(Boolean)
      .join(" ");

    const response = await fetch(`${API_URL}/custom-orders`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },

      body: JSON.stringify({
        description,
        dressType: form.dressType,
        fabric: form.fabric,
        productId: form.productId || undefined,
        productName: form.productName || undefined,
        productPrice: form.productPrice || undefined,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data?.message || "Unable to submit your request.");
    }

    requestSuccess.value = true;

    requestMessage.value =
      "Your custom request has been submitted successfully!";

    resetForm();
  } catch (error) {
    console.error("Custom order error:", error);

    requestMessage.value =
      error?.message || "Unable to submit your request. Please try again.";
  } finally {
    submitting.value = false;
  }
}

/* RESET */
function resetForm() {
  form.name = "";
  form.phone = "";
  form.productId = "";
  form.productName = "";
  form.productCategory = "";
  form.productPrice = 0;
  form.productImage = "";
  form.dressType = "";
  form.fabric = "";
  form.color = "";
  form.requirements = "";
}

/* IMAGE ERROR */
function handleImageError(item) {
  if (item) {
    item.imageError = true;
  }
}

function handleHoverImageError(item) {
  if (item) {
    item.hoverImageError = true;
  }
}

/* LIFECYCLE */
onMounted(async () => {
  await Promise.all([fetchCustomisedProducts(), fetchStandaloneVideos()]);
});

onBeforeUnmount(() => {
  stopCamera();

  if (photoPreview.value?.startsWith("blob:")) {
    URL.revokeObjectURL(photoPreview.value);
  }
});
</script>
