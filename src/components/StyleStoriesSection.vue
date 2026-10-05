```vue
<template>
  <section class="bg-[#fffaf8] py-16 sm:py-20">
    <div class="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
      <!-- ================= HEADER ================= -->
      <div class="mb-10 text-center">
        <p class="mb-3 text-xs font-semibold tracking-[0.3em] text-[#9b4056]">
          REAL PEOPLE • REAL MOMENTS
        </p>

        <h2
          class="text-3xl font-semibold tracking-tight text-[#302525] sm:text-4xl"
        >
          MAAD STYLE STORIES
        </h2>

        <p
          class="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#806d6d] sm:text-base"
        >
          See how our customers style their MAAD looks for their special
          moments.
        </p>
      </div>

      <!-- ================= LOADING ================= -->
      <div v-if="loading" class="flex gap-5 overflow-hidden">
        <div
          v-for="n in 3"
          :key="n"
          class="w-[270px] shrink-0 animate-pulse overflow-hidden rounded-2xl border border-[#ead9d8] bg-white sm:w-[300px]"
        >
          <div class="h-[220px] bg-[#f3e9e7]"></div>

          <div class="space-y-3 p-4">
            <div class="h-3 w-20 rounded bg-[#f3e9e7]"></div>
            <div class="h-4 w-32 rounded bg-[#f3e9e7]"></div>
            <div class="h-3 w-full rounded bg-[#f3e9e7]"></div>
          </div>
        </div>
      </div>

      <!-- ================= STORIES CAROUSEL ================= -->
      <div v-else-if="stories.length > 0" class="relative">
        <!-- LEFT FADE -->
        <div
          class="pointer-events-none absolute left-0 top-0 z-10 h-full w-8 bg-gradient-to-r from-[#fffaf8] to-transparent"
        ></div>

        <!-- RIGHT FADE -->
        <div
          class="pointer-events-none absolute right-0 top-0 z-10 h-full w-8 bg-gradient-to-l from-[#fffaf8] to-transparent"
        ></div>

        <!-- MOVING TRACK -->
        <div class="overflow-hidden">
          <div class="style-stories-track flex w-max gap-5">
            <!-- ORIGINAL STORIES -->
            <article
              v-for="story in stories"
              :key="`original-${story.id}`"
              class="group w-[270px] shrink-0 overflow-hidden rounded-2xl border border-[#ead9d8] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:w-[300px]"
            >
              <!-- ================= MEDIA ================= -->
              <div class="relative h-[220px] overflow-hidden bg-[#f7eeee]">
                <!-- VIDEO -->
                <video
                  v-if="story.mediaType === 'VIDEO' && story.mediaUrl"
                  :src="story.mediaUrl"
                  class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  controls
                  playsinline
                  preload="metadata"
                ></video>

                <!-- IMAGE -->
                <img
                  v-else-if="story.mediaUrl"
                  :src="story.mediaUrl"
                  :alt="story.product?.name || 'MAAD Style Story'"
                  class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <!-- NO MEDIA -->
                <div
                  v-else
                  class="flex h-full items-center justify-center bg-gradient-to-br from-[#fff0f3] to-[#f6e5e2]"
                >
                  <span class="text-5xl">👗</span>
                </div>

                <!-- MEDIA TYPE -->
                <div
                  v-if="story.mediaType"
                  class="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-semibold text-[#9b4056] shadow-sm"
                >
                  {{
                    story.mediaType === "VIDEO" ? "VIDEO STORY" : "STYLE STORY"
                  }}
                </div>
              </div>

              <!-- ================= CONTENT ================= -->
              <div class="p-4">
                <!-- RATING -->
                <div class="flex items-center gap-1">
                  <span
                    v-for="star in 5"
                    :key="star"
                    class="text-xs"
                    :class="
                      star <= story.rating ? 'text-[#d39a32]' : 'text-[#ddd0ce]'
                    "
                  >
                    ★
                  </span>

                  <span class="ml-1 text-[10px] text-[#8d7975]">
                    {{ story.rating }}/5
                  </span>
                </div>

                <!-- STORY -->
                <p class="mt-2 line-clamp-2 text-xs leading-5 text-[#5d4b48]">
                  "{{ story.story }}"
                </p>

                <!-- CUSTOMER -->
                <div class="mt-3 flex items-center justify-between gap-2">
                  <div class="min-w-0">
                    <p class="truncate text-xs font-semibold text-[#302525]">
                      {{ story.user?.name || "MAAD Customer" }}
                    </p>

                    <p
                      v-if="story.occasion"
                      class="mt-0.5 truncate text-[10px] text-[#8d7975]"
                    >
                      {{ story.occasion }}
                    </p>
                  </div>

                  <!-- VERIFIED -->
                  <span
                    class="shrink-0 rounded-full bg-[#f7edf0] px-2 py-1 text-[8px] font-semibold tracking-wide text-[#9b4056]"
                  >
                    ✓ VERIFIED
                  </span>
                </div>

                <!-- ================= PRODUCT ================= -->
                <div
                  v-if="story.product"
                  class="mt-3 border-t border-[#ead9d8] pt-3"
                >
                  <p
                    class="text-[9px] font-semibold uppercase tracking-[0.15em] text-[#9b4056]"
                  >
                    WORN FROM MAAD
                  </p>

                  <div class="mt-2 flex items-center gap-2">
                    <!-- PRODUCT IMAGE -->
                    <img
                      v-if="story.product.images?.[0]?.url"
                      :src="story.product.images[0].url"
                      :alt="story.product.name"
                      class="h-10 w-10 shrink-0 rounded-lg object-cover"
                    />

                    <div class="min-w-0 flex-1">
                      <p class="truncate text-xs font-semibold text-[#302525]">
                        {{ story.product.name }}
                      </p>

                      <p
                        v-if="story.product.price !== undefined"
                        class="mt-0.5 text-xs font-medium text-[#9b4056]"
                      >
                        ₹{{ formatPrice(story.product.price) }}
                      </p>
                    </div>
                  </div>

                  <!-- SHOP THIS LOOK -->
                  <RouterLink
                    :to="`/product/${story.product.id}`"
                    class="mt-3 flex w-full items-center justify-center gap-2 rounded-full bg-[#9b4056] px-3 py-2 text-[11px] font-semibold text-white transition duration-200 hover:bg-[#85364a]"
                  >
                    🛍️ Shop This Look
                  </RouterLink>
                </div>
              </div>
            </article>

            <!-- DUPLICATE STORIES FOR CONTINUOUS MOVEMENT -->
            <article
              v-for="story in stories"
              :key="`duplicate-${story.id}`"
              aria-hidden="true"
              class="group w-[270px] shrink-0 overflow-hidden rounded-2xl border border-[#ead9d8] bg-white shadow-sm sm:w-[300px]"
            >
              <!-- MEDIA -->
              <div class="relative h-[220px] overflow-hidden bg-[#f7eeee]">
                <video
                  v-if="story.mediaType === 'VIDEO' && story.mediaUrl"
                  :src="story.mediaUrl"
                  class="h-full w-full object-cover"
                  playsinline
                  preload="metadata"
                  muted
                ></video>

                <img
                  v-else-if="story.mediaUrl"
                  :src="story.mediaUrl"
                  :alt="story.product?.name || 'MAAD Style Story'"
                  class="h-full w-full object-cover"
                />

                <div
                  v-else
                  class="flex h-full items-center justify-center bg-gradient-to-br from-[#fff0f3] to-[#f6e5e2]"
                >
                  <span class="text-5xl">👗</span>
                </div>

                <div
                  v-if="story.mediaType"
                  class="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-semibold text-[#9b4056] shadow-sm"
                >
                  {{
                    story.mediaType === "VIDEO" ? "VIDEO STORY" : "STYLE STORY"
                  }}
                </div>
              </div>

              <!-- CONTENT -->
              <div class="p-4">
                <div class="flex items-center gap-1">
                  <span
                    v-for="star in 5"
                    :key="star"
                    class="text-xs"
                    :class="
                      star <= story.rating ? 'text-[#d39a32]' : 'text-[#ddd0ce]'
                    "
                  >
                    ★
                  </span>

                  <span class="ml-1 text-[10px] text-[#8d7975]">
                    {{ story.rating }}/5
                  </span>
                </div>

                <p class="mt-2 line-clamp-2 text-xs leading-5 text-[#5d4b48]">
                  "{{ story.story }}"
                </p>

                <div class="mt-3 flex items-center justify-between gap-2">
                  <div class="min-w-0">
                    <p class="truncate text-xs font-semibold text-[#302525]">
                      {{ story.user?.name || "MAAD Customer" }}
                    </p>

                    <p
                      v-if="story.occasion"
                      class="mt-0.5 truncate text-[10px] text-[#8d7975]"
                    >
                      {{ story.occasion }}
                    </p>
                  </div>

                  <span
                    class="shrink-0 rounded-full bg-[#f7edf0] px-2 py-1 text-[8px] font-semibold tracking-wide text-[#9b4056]"
                  >
                    ✓ VERIFIED
                  </span>
                </div>

                <div
                  v-if="story.product"
                  class="mt-3 border-t border-[#ead9d8] pt-3"
                >
                  <p
                    class="text-[9px] font-semibold uppercase tracking-[0.15em] text-[#9b4056]"
                  >
                    WORN FROM MAAD
                  </p>

                  <div class="mt-2 flex items-center gap-2">
                    <img
                      v-if="story.product.images?.[0]?.url"
                      :src="story.product.images[0].url"
                      :alt="story.product.name"
                      class="h-10 w-10 shrink-0 rounded-lg object-cover"
                    />

                    <div class="min-w-0 flex-1">
                      <p class="truncate text-xs font-semibold text-[#302525]">
                        {{ story.product.name }}
                      </p>

                      <p
                        v-if="story.product.price !== undefined"
                        class="mt-0.5 text-xs font-medium text-[#9b4056]"
                      >
                        ₹{{ formatPrice(story.product.price) }}
                      </p>
                    </div>
                  </div>

                  <RouterLink
                    :to="`/product/${story.product.id}`"
                    tabindex="-1"
                    class="mt-3 flex w-full items-center justify-center gap-2 rounded-full bg-[#9b4056] px-3 py-2 text-[11px] font-semibold text-white"
                  >
                    🛍️ Shop This Look
                  </RouterLink>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>

      <!-- ================= EMPTY ================= -->
      <div
        v-else
        class="rounded-3xl border border-dashed border-[#dfccca] bg-white px-6 py-12 text-center"
      >
        <div class="mb-4 text-5xl">✨</div>

        <h3 class="text-xl font-semibold text-[#302525]">
          Be the first to share your MAAD story
        </h3>

        <p class="mx-auto mt-2 max-w-lg text-sm leading-6 text-[#806d6d]">
          Your outfit, your moment, your story. Once approved, your style could
          be featured here.
        </p>
      </div>

      <!-- ================= FOOTER TEXT ================= -->
      <div class="mt-10 text-center">
        <p class="text-sm text-[#806d6d]">
          Styled by you.
          <span class="font-semibold text-[#9b4056]"> Loved by MAAD. </span>
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

const stories = ref([]);
const loading = ref(true);

const formatPrice = (price) => {
  const number = Number(price);

  if (Number.isNaN(number)) {
    return price;
  }

  return number.toLocaleString("en-IN");
};

const loadStories = async () => {
  loading.value = true;

  try {
    const response = await fetch(`${API_URL}/style-stories/featured`);

    if (!response.ok) {
      throw new Error("Failed to load Style Stories");
    }

    const data = await response.json();

    stories.value = Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Style Stories error:", error);

    stories.value = [];
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  loadStories();
});
</script>

<style scoped>
.style-stories-track {
  animation: styleStoriesSlide 35s linear infinite;
}

.style-stories-track:hover {
  animation-play-state: paused;
}

@keyframes styleStoriesSlide {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(calc(-50% - 10px));
  }
}

@media (max-width: 640px) {
  .style-stories-track {
    animation-duration: 28s;
  }
}
</style>

