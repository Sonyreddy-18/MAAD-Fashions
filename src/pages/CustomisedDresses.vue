<template>
  <div class="min-h-screen bg-[#fffaf8] text-[#302525]">
    <Navbar />

    <section class="relative overflow-hidden px-4 pb-16 pt-28 sm:px-6 lg:px-10">
      <div
        class="absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#f3dfdf] opacity-60 blur-3xl"
      ></div>

      <div
        class="absolute -right-24 top-10 h-80 w-80 rounded-full bg-[#ead4dc] opacity-50 blur-3xl"
      ></div>

      <div
        class="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2"
      >
        <div>
          <p
            class="text-sm font-semibold uppercase tracking-[0.35em] text-[#b83b5b]"
          >
            MADE FOR YOU
          </p>

          <h1
            class="mt-5 max-w-3xl font-serif text-5xl leading-[1.05] sm:text-6xl lg:text-7xl"
          >
            Your dress.
            <br />

            <span class="italic text-[#b83b5b]"> Your way. </span>
          </h1>

          <p
            class="mt-6 max-w-xl text-base leading-8 text-[#806f6f] sm:text-lg"
          >
            Create a customised outfit designed around your style, measurements
            and special moments.
          </p>

          <div class="mt-8 flex flex-wrap gap-3">
            <a
              href="#designs"
              class="rounded-full bg-[#b83b5b] px-7 py-3.5 text-sm font-semibold text-white shadow-md transition hover:bg-[#9f304c]"
            >
              Explore Designs
            </a>

            <a
              href="#request"
              class="rounded-full border border-[#d9aeb8] bg-white px-7 py-3.5 text-sm font-semibold text-[#b83b5b] transition hover:bg-[#fff1f4]"
            >
              Request Custom Dress
            </a>
          </div>
        </div>

        <div class="relative">
          <div
            class="overflow-hidden rounded-[40px] border border-[#eadedb] bg-[#f5e7e9] p-6 shadow-xl"
          >
            <div
              class="flex min-h-[390px] items-center justify-center rounded-[30px] bg-[#f8edef]"
            >
              <div class="text-center">
                <div
                  class="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-white text-6xl shadow-lg"
                >
                  👗
                </div>

                <p
                  class="mt-7 text-xs font-bold uppercase tracking-[0.35em] text-[#b83b5b]"
                >
                  CUSTOM MADE
                </p>

                <h2 class="mt-3 font-serif text-4xl italic text-[#302525]">
                  Made for your moments
                </h2>

                <p
                  class="mx-auto mt-3 max-w-sm text-sm leading-6 text-[#806f6f]"
                >
                  Choose a design and make it completely yours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="px-4 py-14 sm:px-6 lg:px-10">
      <div class="mx-auto max-w-7xl">
        <div class="max-w-2xl">
          <p
            class="text-sm font-semibold uppercase tracking-[0.3em] text-[#b83b5b]"
          >
            CUSTOMISE YOUR LOOK
          </p>

          <h2 class="mt-3 font-serif text-4xl sm:text-5xl">
            Designed around you
          </h2>

          <p class="mt-4 leading-7 text-[#806f6f]">
            Select your style, personalise every detail and create an outfit
            that feels uniquely yours.
          </p>
        </div>

        <div class="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div
            class="rounded-[28px] border border-[#eadedb] bg-white p-6 shadow-sm"
          >
            <div
              class="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f8e6ea] text-2xl"
            >
              ✨
            </div>

            <h3 class="mt-5 text-xl font-bold">Choose Your Design</h3>

            <p class="mt-2 text-sm leading-6 text-[#806f6f]">
              Select from gowns, lehengas, party wear and designer blouses.
            </p>
          </div>

          <div
            class="rounded-[28px] border border-[#eadedb] bg-white p-6 shadow-sm"
          >
            <div
              class="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f8e6ea] text-2xl"
            >
              📏
            </div>

            <h3 class="mt-5 text-xl font-bold">Perfect Measurements</h3>

            <p class="mt-2 text-sm leading-6 text-[#806f6f]">
              Share your measurements so your outfit is made to fit you
              beautifully.
            </p>
          </div>

          <div
            class="rounded-[28px] border border-[#eadedb] bg-white p-6 shadow-sm"
          >
            <div
              class="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f8e6ea] text-2xl"
            >
              🧵
            </div>

            <h3 class="mt-5 text-xl font-bold">Fabric & Details</h3>

            <p class="mt-2 text-sm leading-6 text-[#806f6f]">
              Personalise colours, fabrics, embroidery, necklines and other
              details.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="designs" class="scroll-mt-28 px-4 py-14 sm:px-6 lg:px-10">
      <div class="mx-auto max-w-7xl">
        <div>
          <p
            class="text-sm font-semibold uppercase tracking-[0.3em] text-[#b83b5b]"
          >
            OUR COLLECTION
          </p>

          <h2 class="mt-3 font-serif text-4xl sm:text-5xl">
            Our Customised Designs
          </h2>

          <p class="mt-4 text-[#806f6f]">
            Choose a design and try it on virtually using your own photo.
          </p>
        </div>

        <div class="mt-8 flex flex-wrap gap-3">
          <button
            v-for="category in ['All', ...categories, 'Videos']"
            :key="category"
            @click="selectedCategory = category"
            class="rounded-full border px-6 py-3 text-sm font-semibold transition"
            :class="
              selectedCategory === category
                ? 'border-[#302525] bg-[#302525] text-white'
                : 'border-[#eadedb] bg-white text-[#6f5b5b] hover:border-[#b83b5b] hover:text-[#b83b5b]'
            "
          >
            {{ category }}
          </button>
        </div>

        <section class="mt-10">
          <div
            v-if="filteredItems.length"
            class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            <article
              v-for="product in filteredItems"
              :key="`${product.type}-${product.id}`"
              class="group overflow-hidden rounded-[24px] border border-[#eadedb] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <template v-if="product.type === 'video'">
                <div class="relative h-[190px] overflow-hidden bg-[#f5e7e9]">
                  <video
                    :src="product.video"
                    class="h-full w-full object-cover"
                    muted
                    playsinline
                    preload="metadata"
                  ></video>

                  <div
                    class="absolute inset-0 flex items-center justify-center bg-black/10"
                  >
                    <button
                      @click="openVideo(product)"
                      class="flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#b83b5b] shadow-lg transition hover:scale-110"
                    >
                      ▶
                    </button>
                  </div>

                  <div
                    class="absolute left-3 top-3 rounded-full bg-white px-3 py-1.5 text-[11px] font-bold tracking-wide text-[#b83b5b] shadow"
                  >
                    🎥 VIDEO
                  </div>
                </div>

                <div class="p-4">
                  <p
                    class="text-[10px] font-bold uppercase tracking-[0.25em] text-[#b83b5b]"
                  >
                    {{ product.category }}
                  </p>

                  <h3 class="mt-1.5 text-lg font-bold">
                    {{ product.name }}
                  </h3>

                  <p class="mt-1 text-xs leading-5 text-[#806f6f]">
                    {{ product.description }}
                  </p>

                  <button
                    @click="openVideo(product)"
                    class="mt-4 w-full rounded-full border border-[#d9aeb8] px-4 py-2.5 text-xs font-semibold text-[#b83b5b] transition hover:bg-[#b83b5b] hover:text-white"
                  >
                    ▶ Watch Video
                  </button>
                </div>
              </template>

              <template v-else>
                <div class="relative h-[210px] overflow-hidden bg-[#f5e7e9]">
                  <img
                    v-if="product.image"
                    :src="product.image"
                    :alt="product.name"
                    class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    @error="handleImageError"
                  />

                  <div
                    v-else
                    class="flex h-full flex-col items-center justify-center"
                  >
                    <div
                      class="flex h-20 w-20 items-center justify-center rounded-full bg-white text-4xl shadow-md"
                    >
                      👗
                    </div>

                    <p
                      class="mt-4 text-[10px] font-bold uppercase tracking-[0.3em] text-[#b83b5b]"
                    >
                      {{ product.category }}
                    </p>

                    <p class="mt-1 text-xs text-[#806f6f]">Design preview</p>
                  </div>

                  <div
                    class="absolute left-3 top-3 rounded-full bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-[#b83b5b] shadow"
                  >
                    {{ product.category }}
                  </div>
                </div>

                <div class="p-4">
                  <p
                    class="text-[10px] font-bold uppercase tracking-[0.25em] text-[#b83b5b]"
                  >
                    {{ product.category }}
                  </p>

                  <h3 class="mt-1.5 text-lg font-bold leading-tight">
                    {{ product.name }}
                  </h3>

                  <p class="mt-1 min-h-[40px] text-xs leading-5 text-[#806f6f]">
                    {{ product.description }}
                  </p>

                  <p class="mt-3 text-lg font-bold">
                    ₹{{ product.price.toLocaleString("en-IN") }}
                  </p>

                  <div class="mt-4 grid grid-cols-2 gap-2">
                    <!-- TRY ON -->
                    <button
                      @click="selectProduct(product)"
                      class="rounded-full bg-[#b83b5b] px-2 py-2.5 text-xs font-semibold text-white transition hover:bg-[#9f304c]"
                    >
                      ✨ Try On
                    </button>

                    <button
                      v-if="product.video"
                      @click="openVideo(product)"
                      class="rounded-full border border-[#eadedb] bg-[#fffafa] px-2 py-2.5 text-xs font-semibold text-[#6f5b5b] transition hover:border-[#b83b5b] hover:text-[#b83b5b]"
                    >
                      🎥 Video
                    </button>

                    <button
                      v-else
                      disabled
                      class="cursor-not-allowed rounded-full border border-[#eee4e1] bg-[#faf7f6] px-2 py-2.5 text-xs font-semibold text-[#c2b5b2]"
                    >
                      🎥 Video
                    </button>
                  </div>

                  <button
                    @click="selectProduct(product)"
                    class="mt-2 w-full rounded-full border border-[#d9aeb8] px-3 py-2.5 text-xs font-semibold text-[#b83b5b] transition hover:bg-[#b83b5b] hover:text-white"
                  >
                    Customise This Dress
                  </button>
                </div>
              </template>
            </article>
          </div>

          <div
            v-else
            class="rounded-[24px] border border-[#eadedb] bg-white px-6 py-14 text-center"
          >
            <div class="text-4xl">🎥</div>

            <h3 class="mt-4 text-xl font-bold">No videos yet</h3>

            <p class="mt-2 text-sm text-[#806f6f]">
              Videos uploaded for your customised designs will appear here.
            </p>
          </div>
        </section>
      </div>
    </section>

    <section id="request" class="scroll-mt-28 px-4 py-16 sm:px-6 lg:px-10">
      <div class="mx-auto max-w-5xl">
        <div
          class="overflow-hidden rounded-[36px] border border-[#eadedb] bg-white shadow-lg"
        >
          <div class="grid lg:grid-cols-[0.8fr_1.2fr]">
            <div class="bg-[#f5e7e9] p-8 sm:p-10 lg:p-12">
              <p
                class="text-sm font-semibold uppercase tracking-[0.3em] text-[#b83b5b]"
              >
                YOUR DREAM LOOK
              </p>

              <h2 class="mt-4 font-serif text-4xl leading-tight">
                Let's create something made just for you.
              </h2>

              <p class="mt-5 text-sm leading-7 text-[#806f6f]">
                Tell us what you have in mind. Our team will connect with you to
                discuss your design, measurements, fabric and finishing details.
              </p>

              <div class="mt-8 space-y-4 text-sm text-[#6f5b5b]">
                <div class="flex gap-3">
                  <span>✨</span>
                  <span>Personalised design consultation</span>
                </div>

                <div class="flex gap-3">
                  <span>📏</span>
                  <span>Custom measurements and fitting</span>
                </div>

                <div class="flex gap-3">
                  <span>🧵</span>
                  <span>Fabric and colour selection</span>
                </div>
              </div>
            </div>

            <div class="p-8 sm:p-10 lg:p-12">
              <form @submit.prevent="submitRequest" class="space-y-5">
                <!-- NAME -->
                <div>
                  <label class="mb-2 block text-sm font-semibold">
                    Your Name
                  </label>

                  <input
                    v-model="form.name"
                    type="text"
                    placeholder="Enter your name"
                    class="w-full rounded-2xl border border-[#eadedb] bg-[#fffaf8] px-5 py-3.5 text-sm outline-none transition focus:border-[#b83b5b]"
                  />
                </div>

                <div>
                  <label class="mb-2 block text-sm font-semibold">
                    Phone Number
                  </label>

                  <input
                    v-model="form.phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    class="w-full rounded-2xl border border-[#eadedb] bg-[#fffaf8] px-5 py-3.5 text-sm outline-none transition focus:border-[#b83b5b]"
                  />
                </div>

                <div>
                  <label class="mb-2 block text-sm font-semibold">
                    Dress Type
                  </label>

                  <select
                    v-model="form.dressType"
                    class="w-full rounded-2xl border border-[#eadedb] bg-[#fffaf8] px-5 py-3.5 text-sm outline-none transition focus:border-[#b83b5b]"
                  >
                    <option value="">Select dress type</option>

                    <option value="Gown">Gown</option>

                    <option value="Lehenga">Lehenga</option>

                    <option value="Party Wear">Party Wear</option>

                    <option value="Blouse">Blouse</option>
                  </select>
                </div>

                <div>
                  <label class="mb-2 block text-sm font-semibold">
                    Your Requirements
                  </label>

                  <textarea
                    v-model="form.requirements"
                    rows="5"
                    placeholder="Tell us about your preferred colour, fabric, design, measurements, occasion, etc."
                    class="w-full resize-none rounded-2xl border border-[#eadedb] bg-[#fffaf8] px-5 py-3.5 text-sm outline-none transition focus:border-[#b83b5b]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  class="w-full rounded-full bg-[#b83b5b] px-6 py-4 text-sm font-semibold text-white shadow-md transition hover:bg-[#9f304c]"
                >
                  Send Customisation Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div
      v-if="showTryOn"
      class="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4 py-6"
      @click.self="closeTryOn"
    >
      <div
        class="relative max-h-[92vh] w-full max-w-6xl overflow-y-auto rounded-[32px] bg-[#fffaf8] shadow-2xl"
      >
        <button
          @click="closeTryOn"
          class="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white text-xl shadow-lg"
        >
          ×
        </button>

        <div class="border-b border-[#eadedb] px-6 py-7 sm:px-10">
          <p class="text-sm font-semibold tracking-[0.3em] text-[#b83b5b]">
            MAAD FASHIONS
          </p>

          <h2 class="mt-3 font-serif text-4xl">✨ Try On Your Look</h2>

          <p class="mt-2 text-[#806f6f]">
            See how
            <strong>
              {{ selectedProduct?.name }}
            </strong>
            looks with your photo.
          </p>
        </div>

        <div class="grid gap-6 p-6 sm:p-10 lg:grid-cols-2">
          <div
            class="relative flex min-h-[420px] items-center justify-center overflow-hidden rounded-[28px] bg-[#f5e7e9]"
          >
            <img
              v-if="photoPreview"
              :src="photoPreview"
              alt="Your uploaded photo"
              class="h-full max-h-[600px] w-full object-contain"
            />

            <video
              v-else-if="cameraActive"
              ref="videoElement"
              autoplay
              playsinline
              class="h-full max-h-[600px] w-full object-cover"
            ></video>

            <div v-else class="px-6 text-center">
              <div
                class="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white text-5xl shadow-md"
              >
                📸
              </div>

              <h3 class="mt-6 text-2xl font-bold">Add Your Photo</h3>

              <p class="mx-auto mt-3 max-w-md text-sm leading-6 text-[#806f6f]">
                Take a photo using your camera right now or upload a photo from
                your browser.
              </p>
            </div>

            <button
              v-if="cameraActive"
              @click="takePhoto"
              class="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-[#b83b5b] px-7 py-3 text-sm font-semibold text-white shadow-xl"
            >
              📸 Take Photo
            </button>
          </div>

          <div
            class="rounded-[28px] border border-[#eadedb] bg-white p-6 sm:p-8"
          >
            <div
              class="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#f8e6ea] text-3xl"
            >
              👗
            </div>

            <h3 class="mt-6 text-3xl font-bold">
              {{ selectedProduct?.name }}
            </h3>

            <p class="mt-3 leading-7 text-[#806f6f]">
              {{ selectedProduct?.description }}
            </p>

            <p class="mt-5 text-2xl font-bold">
              ₹{{ selectedProduct?.price?.toLocaleString("en-IN") }}
            </p>

            <div class="mt-7 space-y-3">
              <!-- CAMERA -->
              <button
                @click="openCamera"
                :disabled="cameraActive"
                class="w-full rounded-full bg-[#b83b5b] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#9f304c] disabled:cursor-not-allowed disabled:opacity-60"
              >
                📷
                {{ cameraActive ? "Camera Active" : "Take Photo Now" }}
              </button>

              <label
                class="block w-full cursor-pointer rounded-full border border-[#d9aeb8] bg-white px-5 py-3.5 text-center text-sm font-semibold text-[#b83b5b] transition hover:bg-[#fff1f4]"
              >
                📁 Upload Photo

                <input
                  type="file"
                  accept="image/*"
                  class="hidden"
                  @change="handlePhotoUpload"
                />
              </label>
            </div>

            <div v-if="photoPreview" class="mt-5 rounded-2xl bg-[#fff6f7] p-4">
              <div class="flex items-center justify-between gap-4">
                <div>
                  <p class="text-sm font-semibold">Photo Added ✓</p>

                  <p class="mt-1 text-xs text-[#806f6f]">
                    Your photo is ready.
                  </p>
                </div>

                <button
                  @click="removePhoto"
                  class="text-xs font-semibold text-[#b83b5b]"
                >
                  Remove
                </button>
              </div>
            </div>

            <div class="mt-6 rounded-2xl bg-[#f8edef] p-4">
              <p class="text-xs leading-5 text-[#806f6f]">
                💡 For the best preview, upload a clear full-body photo with
                good lighting and minimal background obstruction.
              </p>
            </div>

            <button
              @click="
                closeTryOn();
                $nextTick(() => {
                  document.getElementById('request')?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  });
                });
              "
              class="mt-6 w-full rounded-full border border-[#d9aeb8] px-5 py-3.5 text-sm font-semibold text-[#b83b5b] transition hover:bg-[#b83b5b] hover:text-white"
            >
              Customise This Dress
            </button>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="selectedVideo"
      class="fixed inset-0 z-[110] flex items-center justify-center bg-black/70 px-4 py-8"
      @click.self="selectedVideo = null"
    >
      <div
        class="relative w-full max-w-4xl overflow-hidden rounded-[28px] bg-[#fffaf8] shadow-2xl"
      >
        <button
          @click="selectedVideo = null"
          class="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white text-xl shadow-lg"
        >
          ×
        </button>

        <div class="bg-black">
          <video
            :src="selectedVideo.video"
            controls
            autoplay
            playsinline
            class="max-h-[70vh] w-full object-contain"
          ></video>
        </div>

        <div class="p-6">
          <p
            class="text-xs font-bold uppercase tracking-[0.3em] text-[#b83b5b]"
          >
            {{ selectedVideo.category }}
          </p>

          <h3 class="mt-2 text-2xl font-bold">
            {{ selectedVideo.name }}
          </h3>

          <p class="mt-2 text-sm leading-6 text-[#806f6f]">
            {{ selectedVideo.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed, onBeforeUnmount, reactive, ref } from "vue";
import Navbar from "../components/Navbar.vue";

const selectedCategory = ref("All");

const categories = ["Gown", "Lehenga", "Party Wear", "Blouse"];

const customisedProducts = ref([
  {
    id: 1,
    type: "product",
    category: "Gown",
    name: "Designer Gown",
    description:
      "Create your perfect gown with personalised styling and fitting.",
    price: 4499,
    image: null,
    video: null,
  },

  {
    id: 2,
    type: "product",
    category: "Lehenga",
    name: "Designer Lehenga",
    description: "Personalise the fabric, colour, embroidery and measurements.",
    price: 5999,
    image: null,
    video: null,
  },

  {
    id: 3,
    type: "product",
    category: "Party Wear",
    name: "Party Wear Dress",
    description:
      "Design a beautiful party outfit based on your personal style.",
    price: 3499,
    image: null,
    video: null,
  },

  {
    id: 4,
    type: "product",
    category: "Blouse",
    name: "Designer Blouse",
    description:
      "Create a stylish customised blouse with your preferred neckline and fit.",
    price: 2499,
    image: null,
    video: null,
  },
]);

const filteredItems = computed(() => {
  /* VIDEOS */
  if (selectedCategory.value === "Videos") {
    return customisedProducts.value
      .filter((product) => product.video)
      .map((product) => ({
        ...product,
        type: "video",
      }));
  }

  if (selectedCategory.value === "All") {
    return customisedProducts.value.filter(
      (product) => product.type === "product",
    );
  }

  return customisedProducts.value.filter(
    (product) =>
      product.type === "product" && product.category === selectedCategory.value,
  );
});

const selectedVideo = ref(null);

function openVideo(video) {
  selectedVideo.value = video;
}

function handleImageError(event) {
  event.target.style.display = "none";
}

const form = reactive({
  name: "",
  phone: "",
  dressType: "",
  requirements: "",
});

const showTryOn = ref(false);

const selectedProduct = ref(null);

const uploadedPhoto = ref(null);

const photoPreview = ref(null);

const cameraActive = ref(false);

const videoElement = ref(null);

const cameraStream = ref(null);

function selectProduct(product) {
  selectedProduct.value = product;

  form.dressType = product.category;

  form.requirements =
    `I am interested in the ${product.name}. ` +
    `I would like to customise the design, colour, fabric and measurements.`;

  showTryOn.value = true;
}

function handlePhotoUpload(event) {
  const file = event.target.files?.[0];

  if (!file) return;

  uploadedPhoto.value = file;

  if (photoPreview.value) {
    URL.revokeObjectURL(photoPreview.value);
  }

  photoPreview.value = URL.createObjectURL(file);

  stopCamera();
}

async function openCamera() {
  try {
    cameraStream.value = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: "user",
      },
      audio: false,
    });

    cameraActive.value = true;

    setTimeout(() => {
      if (videoElement.value) {
        videoElement.value.srcObject = cameraStream.value;
      }
    }, 100);
  } catch (error) {
    alert(
      "Camera access was blocked. Please allow camera permission in your browser and try again.",
    );
  }
}

function takePhoto() {
  if (!videoElement.value) return;

  const video = videoElement.value;

  const canvas = document.createElement("canvas");

  canvas.width = video.videoWidth;

  canvas.height = video.videoHeight;

  const context = canvas.getContext("2d");

  context.drawImage(video, 0, 0, canvas.width, canvas.height);

  canvas.toBlob(
    (blob) => {
      if (!blob) return;

      uploadedPhoto.value = new File([blob], "maad-try-on-photo.jpg", {
        type: "image/jpeg",
      });

      if (photoPreview.value) {
        URL.revokeObjectURL(photoPreview.value);
      }

      photoPreview.value = URL.createObjectURL(blob);

      stopCamera();
    },
    "image/jpeg",
    0.92,
  );
}

function stopCamera() {
  if (cameraStream.value) {
    cameraStream.value.getTracks().forEach((track) => {
      track.stop();
    });

    cameraStream.value = null;
  }

  cameraActive.value = false;
}

function removePhoto() {
  uploadedPhoto.value = null;

  if (photoPreview.value) {
    URL.revokeObjectURL(photoPreview.value);

    photoPreview.value = null;
  }

  stopCamera();
}

function closeTryOn() {
  stopCamera();

  showTryOn.value = false;
}

function submitRequest() {
  if (!form.name || !form.phone || !form.dressType) {
    alert("Please fill in your name, phone number and dress type.");

    return;
  }

  alert(
    `Thank you ${form.name}! Your custom dress request has been submitted.`,
  );

  form.name = "";
  form.phone = "";
  form.dressType = "";
  form.requirements = "";
}

onBeforeUnmount(() => {
  stopCamera();

  if (photoPreview.value) {
    URL.revokeObjectURL(photoPreview.value);
  }
});
</script>
