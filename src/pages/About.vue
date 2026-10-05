<template>
  <div
    class="min-h-screen overflow-x-hidden bg-[#fffaf8] pb-20 text-[#302525] lg:pb-0"
  >
    <!-- HERO -->
    <section
      class="relative flex min-h-[calc(100vh-92px)] items-center overflow-hidden pt-20 sm:pt-24"
    >
      <!-- BACKGROUND -->
      <div
        class="pointer-events-none absolute -left-32 top-20 h-64 w-64 rounded-full bg-[#f3dce2]/50 blur-3xl sm:h-72 sm:w-72"
      ></div>

      <div
        class="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-[#ead0d7]/40 blur-3xl sm:h-96 sm:w-96"
      ></div>

      <div
        class="pointer-events-none absolute -right-8 top-1/2 -translate-y-1/2 select-none font-serif text-[11rem] font-bold leading-none text-[#b83259]/[0.035] sm:text-[20rem] lg:text-[30rem]"
      >
        M
      </div>

      <div
        class="relative mx-auto w-full max-w-7xl px-4 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20"
      >
        <!-- EYEBROW -->
        <div class="flex items-center gap-3 sm:gap-4">
          <span class="h-px w-8 bg-[#b83259] sm:w-12"></span>

          <span
            class="text-[9px] font-bold tracking-[0.28em] text-[#b83259] sm:text-[11px] sm:tracking-[0.4em]"
          >
            THE STORY OF MAAD
          </span>
        </div>

        <!-- HEADING -->
        <h1
          class="mt-6 max-w-5xl font-serif text-[3rem] font-medium leading-[0.92] tracking-[-0.05em] sm:mt-8 sm:text-[5.5rem] lg:text-[7rem]"
        >
          Your style should

          <span class="italic text-[#b83259]"> feel </span>

          <br />

          uniquely
          <span class="italic text-[#b83259]"> yours. </span>
        </h1>

        <!-- INTRO -->
        <div
          class="mt-8 grid max-w-5xl gap-8 sm:mt-10 lg:grid-cols-[1fr_0.7fr]"
        >
          <div>
            <p
              class="max-w-2xl text-sm leading-7 text-[#75686a] sm:text-base sm:leading-8 lg:text-lg"
            >
              MAAD Fashions is a contemporary Indian fashion brand built around
              one simple idea — your clothes should reflect your story.
            </p>

            <p
              class="mt-3 max-w-2xl text-xs leading-6 text-[#948386] sm:mt-4 sm:text-sm sm:leading-7"
            >
              We bring together traditional craftsmanship, contemporary
              silhouettes and thoughtful personalisation to create pieces that
              feel timeless yet completely yours.
            </p>
          </div>

          <!-- BRAND SIGNATURE -->
          <div class="flex items-center lg:justify-end">
            <div class="text-left lg:text-right">
              <p class="font-serif text-3xl italic text-[#b83259] sm:text-4xl">
                MAAD
              </p>

              <p
                class="mt-1 text-[8px] font-bold tracking-[0.35em] text-[#8d797d] sm:text-[9px] sm:tracking-[0.45em]"
              >
                FASHIONS
              </p>

              <div class="mt-3 flex items-center gap-3 sm:mt-4 lg:justify-end">
                <span class="h-px w-7 bg-[#b83259] sm:w-8"></span>

                <span
                  class="text-[8px] tracking-[0.2em] text-[#9b8589] sm:text-[9px] sm:tracking-[0.25em]"
                >
                  EST. WITH LOVE
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- BOTTOM LABEL -->
        <div class="mt-10 flex items-center gap-3 sm:mt-14 sm:gap-4">
          <span class="h-px w-8 bg-[#d8b8c0] sm:w-10"></span>

          <span
            class="text-[8px] font-semibold tracking-[0.25em] text-[#a18c90] sm:text-[9px] sm:tracking-[0.35em]"
          >
            ABOUT THE BRAND
          </span>
        </div>
      </div>
    </section>

    <!-- WHO WE ARE -->
    <section class="bg-white px-4 py-14 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <div class="mx-auto max-w-6xl">
        <div class="grid gap-8 sm:gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p
              class="font-serif text-[5rem] leading-none text-[#b83259]/15 sm:text-[7rem]"
            >
              01
            </p>

            <p
              class="mt-3 text-[10px] font-bold tracking-[0.28em] text-[#b83259] sm:mt-4 sm:text-xs sm:tracking-[0.35em]"
            >
              WHO WE ARE
            </p>
          </div>

          <div>
            <h2
              class="max-w-3xl font-serif text-3xl font-medium leading-tight text-[#302525] sm:text-5xl"
            >
              A fashion brand inspired by
              <span class="italic text-[#b83259]">
                women, culture and individuality.
              </span>
            </h2>

            <p
              class="mt-5 max-w-2xl text-sm leading-7 text-[#75686a] sm:mt-7 sm:text-base sm:leading-8"
            >
              MAAD Fashions was created for women who don't want to simply
              follow fashion. They want to make it their own.
            </p>

            <p
              class="mt-4 max-w-2xl text-sm leading-7 text-[#75686a] sm:mt-5 sm:text-base sm:leading-8"
            >
              Our collections celebrate the richness of Indian fashion while
              introducing modern shapes, colours and details. The result is
              clothing that feels familiar, elegant and fresh at the same time.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- OUR BELIEF -->
    <section class="bg-[#fffaf8] px-4 py-14 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <div class="mx-auto max-w-6xl">
        <div class="grid items-center gap-10 sm:gap-14 lg:grid-cols-2">
          <div>
            <p
              class="text-[10px] font-bold tracking-[0.28em] text-[#b83259] sm:text-xs sm:tracking-[0.35em]"
            >
              OUR BELIEF
            </p>

            <h2
              class="mt-4 font-serif text-3xl font-medium leading-tight sm:mt-5 sm:text-5xl"
            >
              Clothes are more than
              <span class="italic text-[#b83259]"> clothes. </span>
            </h2>

            <p
              class="mt-5 max-w-xl text-sm leading-7 text-[#75686a] sm:mt-7 sm:text-base sm:leading-8"
            >
              They become part of your memories. The saree you wear to a
              celebration. The dress you choose for an important evening. The
              outfit that makes you feel confident when you need it most.
            </p>

            <p
              class="mt-4 max-w-xl text-sm leading-7 text-[#75686a] sm:mt-5 sm:text-base sm:leading-8"
            >
              That's why we design MAAD pieces to be more than beautiful. We
              want them to become part of your story.
            </p>
          </div>

          <!-- QUOTE -->
          <div class="relative border-l border-[#d9a8b5] pl-6 sm:pl-12">
            <span
              class="absolute -left-2.5 -top-4 font-serif text-5xl text-[#b83259] sm:-left-3 sm:-top-5 sm:text-6xl"
            >
              “
            </span>

            <p
              class="font-serif text-2xl leading-relaxed text-[#302525] sm:text-4xl"
            >
              The most beautiful thing you can wear is something that feels
              completely
              <span class="italic text-[#b83259]"> yours. </span>
            </p>

            <div class="mt-5 flex items-center gap-3 sm:mt-7">
              <span class="h-px w-8 bg-[#b83259] sm:w-10"></span>

              <span
                class="text-[8px] font-semibold tracking-[0.2em] text-[#8d797d] sm:text-[10px] sm:tracking-[0.25em]"
              >
                THE MAAD PHILOSOPHY
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- WHAT WE CREATE -->
    <section class="bg-white px-4 py-14 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <div class="mx-auto max-w-6xl">
        <!-- HEADING -->
        <div class="max-w-2xl">
          <p
            class="text-[10px] font-bold tracking-[0.28em] text-[#b83259] sm:text-xs sm:tracking-[0.35em]"
          >
            WHAT WE CREATE
          </p>

          <h2
            class="mt-4 font-serif text-3xl font-medium leading-tight sm:mt-5 sm:text-5xl"
          >
            Designed for every
            <span class="italic text-[#b83259]"> kind of moment. </span>
          </h2>
        </div>

        <!-- CATEGORIES -->
        <div
          class="mt-8 grid border-y border-[#ead5d8] sm:mt-14 md:grid-cols-3"
        >
          <!-- DRESSES -->
          <div
            class="group border-b border-[#ead5d8] px-1 py-7 sm:px-8 sm:py-10 md:border-b-0 md:border-r"
          >
            <span
              class="font-serif text-4xl italic text-[#b83259]/30 transition group-hover:text-[#b83259] sm:text-5xl"
            >
              01
            </span>

            <h3
              class="mt-3 font-serif text-xl text-[#302525] sm:mt-5 sm:text-2xl"
            >
              Dresses
            </h3>

            <p
              class="mt-2 text-xs leading-6 text-[#75686a] sm:mt-4 sm:text-sm sm:leading-7"
            >
              Contemporary silhouettes created for evenings, celebrations and
              everything in between.
            </p>
          </div>

          <!-- SAREES -->
          <div
            class="group border-b border-[#ead5d8] px-1 py-7 sm:px-8 sm:py-10 md:border-b-0 md:border-r"
          >
            <span
              class="font-serif text-4xl italic text-[#b83259]/30 transition group-hover:text-[#b83259] sm:text-5xl"
            >
              02
            </span>

            <h3
              class="mt-3 font-serif text-xl text-[#302525] sm:mt-5 sm:text-2xl"
            >
              Sarees
            </h3>

            <p
              class="mt-2 text-xs leading-6 text-[#75686a] sm:mt-4 sm:text-sm sm:leading-7"
            >
              Timeless Indian elegance reimagined with modern styling and
              contemporary details.
            </p>
          </div>

          <!-- CUSTOM -->
          <div class="group px-1 py-7 sm:px-8 sm:py-10">
            <span
              class="font-serif text-4xl italic text-[#b83259]/30 transition group-hover:text-[#b83259] sm:text-5xl"
            >
              03
            </span>

            <h3
              class="mt-3 font-serif text-xl text-[#302525] sm:mt-5 sm:text-2xl"
            >
              Custom Creations
            </h3>

            <p
              class="mt-2 text-xs leading-6 text-[#75686a] sm:mt-4 sm:text-sm sm:leading-7"
            >
              Your idea, your measurements, your details — created into
              something uniquely yours.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- THE MAAD WAY -->
    <section class="bg-[#302525] px-4 py-14 text-white sm:px-8 sm:py-20">
      <div class="mx-auto max-w-6xl">
        <div class="grid gap-10 sm:gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p
              class="text-[10px] font-semibold tracking-[0.28em] text-[#f3b8c5] sm:text-xs sm:tracking-[0.35em]"
            >
              THE MAAD WAY
            </p>

            <h2
              class="mt-4 font-serif text-3xl leading-tight sm:mt-5 sm:text-5xl"
            >
              What matters
              <span class="italic text-[#f3b8c5]"> to us. </span>
            </h2>
          </div>

          <div class="space-y-6 sm:space-y-8">
            <!-- 01 -->
            <div
              class="flex gap-4 border-b border-white/10 pb-6 sm:gap-6 sm:pb-8"
            >
              <span
                class="shrink-0 font-serif text-2xl italic text-[#f3b8c5] sm:text-3xl"
              >
                01
              </span>

              <div>
                <h3 class="text-base font-semibold sm:text-lg">
                  Personal expression
                </h3>

                <p
                  class="mt-1.5 max-w-xl text-xs leading-6 text-white/60 sm:mt-2 sm:text-sm sm:leading-7"
                >
                  We create space for your personality, because fashion should
                  never make everyone look the same.
                </p>
              </div>
            </div>

            <!-- 02 -->
            <div
              class="flex gap-4 border-b border-white/10 pb-6 sm:gap-6 sm:pb-8"
            >
              <span
                class="shrink-0 font-serif text-2xl italic text-[#f3b8c5] sm:text-3xl"
              >
                02
              </span>

              <div>
                <h3 class="text-base font-semibold sm:text-lg">
                  Timeless design
                </h3>

                <p
                  class="mt-1.5 max-w-xl text-xs leading-6 text-white/60 sm:mt-2 sm:text-sm sm:leading-7"
                >
                  We look beyond trends to create styles you will still love
                  long after the occasion is over.
                </p>
              </div>
            </div>

            <!-- 03 -->
            <div class="flex gap-4 sm:gap-6">
              <span
                class="shrink-0 font-serif text-2xl italic text-[#f3b8c5] sm:text-3xl"
              >
                03
              </span>

              <div>
                <h3 class="text-base font-semibold sm:text-lg">
                  Meaningful moments
                </h3>

                <p
                  class="mt-1.5 max-w-xl text-xs leading-6 text-white/60 sm:mt-2 sm:text-sm sm:leading-7"
                >
                  From everyday confidence to unforgettable celebrations, we
                  design with your moments in mind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="px-4 py-12 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <div
        class="relative mx-auto max-w-6xl overflow-hidden rounded-[1.5rem] bg-[#ad3d5b] px-5 py-12 text-center text-white shadow-xl sm:rounded-[2rem] sm:px-12 sm:py-16"
      >
        <!-- BACKGROUND -->
        <div
          class="absolute -left-20 -top-20 h-40 w-40 rounded-full bg-white/10 sm:h-48 sm:w-48"
        ></div>

        <div
          class="absolute -bottom-24 -right-10 h-48 w-48 rounded-full bg-white/10 sm:h-56 sm:w-56"
        ></div>

        <div class="absolute left-[12%] top-[22%] text-xl text-white/20">✦</div>

        <div class="absolute bottom-[22%] right-[12%] text-xl text-white/20">
          ✦
        </div>

        <div class="relative">
          <p
            class="text-[9px] font-semibold tracking-[0.28em] text-white/80 sm:text-xs sm:tracking-[0.35em]"
          >
            YOUR STYLE. YOUR STORY.
          </p>

          <h2
            class="mt-4 font-serif text-3xl font-semibold sm:mt-5 sm:text-5xl"
          >
            Ready to create your look?
          </h2>

          <p
            class="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/90 sm:mt-5 sm:text-base sm:leading-7"
          >
            Explore the MAAD collection or create a customised outfit designed
            especially for you.
          </p>

          <div
            class="mt-6 flex flex-col justify-center gap-3 sm:mt-8 sm:flex-row sm:gap-4"
          >
            <RouterLink
              to="/dresses"
              class="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#ad3d5b] transition hover:bg-[#fff0f3] sm:px-8"
            >
              Explore Collection
            </RouterLink>

            <RouterLink
              to="/customised-dresses"
              class="rounded-full border border-white px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 sm:px-8"
            >
              Customise Your Look
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- BACK HOME -->
    <div class="px-4 pb-8 text-center sm:px-8 lg:px-10">
      <RouterLink
        to="/"
        class="text-xs font-medium text-[#9b4056] transition hover:text-[#84354a] sm:text-sm"
      >
        ← Back to Home
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import Navbar from "../components/Navbar.vue";
</script>
