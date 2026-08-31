<template>
  <div class="min-h-screen overflow-hidden bg-[#fcf8f6] text-[#302525]">
    <section class="relative overflow-hidden bg-[#fcf8f6] pt-24">
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

      <div
        class="pointer-events-none absolute inset-0 opacity-[0.035]"
        style="
          background-image: radial-gradient(#302525 0.7px, transparent 0.7px);
          background-size: 18px 18px;
        "
      ></div>

      <div
        class="relative mx-auto flex h-[calc(100vh-96px)] max-w-7xl items-center px-6 py-3 sm:px-8 lg:px-10"
      >
        <div
          class="grid w-full items-center gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8"
        >
          <div class="flex flex-col justify-center">
            <p
              class="text-xs font-semibold uppercase tracking-[0.35em] text-[#ad3d5b] sm:text-sm"
            >
              THE MAAD EDIT
            </p>

            <h1
              class="mt-3 font-serif text-[3.2rem] font-bold leading-[0.9] text-[#302525] sm:text-5xl lg:text-[4.5rem] xl:text-[5rem]"
            >
              Dress for
              <br />
              the
              <br />

              <span class="italic text-[#ad3d5b]"> moment. </span>
            </h1>

            <p
              class="mt-4 max-w-xl text-sm leading-6 text-[#756967] sm:text-base sm:leading-7"
            >
              Discover thoughtfully selected styles designed for celebrations,
              everyday elegance and the moments you will remember.
            </p>

            <div class="mt-5 flex flex-wrap gap-3">
              <RouterLink
                to="/dresses"
                class="group rounded-full bg-[#ad3d5b] px-6 py-3 text-sm font-semibold text-white shadow-md shadow-[#ad3d5b]/20 transition duration-300 hover:-translate-y-0.5 hover:bg-[#922f4a] hover:shadow-lg sm:px-7 sm:py-3.5"
              >
                Explore Dresses

                <span
                  class="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </RouterLink>

              <RouterLink
                to="/sarees"
                class="group rounded-full border border-[#ad3d5b]/50 bg-white/70 px-6 py-3 text-sm font-semibold text-[#ad3d5b] shadow-sm backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-[#ad3d5b] hover:bg-white sm:px-7 sm:py-3.5"
              >
                Discover Sarees

                <span
                  class="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </RouterLink>
            </div>

            <div class="mt-5 flex items-center gap-4">
              <div
                class="h-px w-12 bg-gradient-to-r from-[#ad3d5b] to-transparent"
              ></div>

              <p
                class="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#9d6a76] sm:text-xs"
              >
                Made for your moments
              </p>
            </div>
          </div>

          <div class="relative flex items-center justify-center lg:justify-end">
            <div class="relative w-full max-w-[590px]">
              <img
                :src="heroImage"
                alt="MAAD Fashions Luxury Collection"
                class="block h-auto max-h-[560px] w-full object-contain object-center mix-blend-multiply"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="border-y border-[#eadedb] bg-white">
      <div
        class="mx-auto max-w-4xl px-6 py-16 text-center sm:px-8 sm:py-20 lg:py-24"
      >
        <p class="text-sm font-semibold tracking-[0.3em] text-[#9b4056]">
          WELCOME TO MAAD
        </p>

        <h2
          class="mt-4 font-serif text-4xl font-semibold leading-tight sm:text-5xl"
        >
          Fashion with a feeling.
        </h2>

        <p
          class="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#806d6d] sm:text-lg"
        >
          MAAD Fashions brings together graceful silhouettes, expressive colours
          and contemporary Indian style — created for the woman who wants every
          outfit to feel like her own.
        </p>
      </div>
    </section>

    <section
      class="relative overflow-hidden bg-[#fff7f5] px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24"
    >
      <div
        class="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#efd3d5]/30 blur-[100px]"
      ></div>

      <div
        class="pointer-events-none absolute -left-40 bottom-20 h-80 w-80 rounded-full bg-[#ead7c8]/30 blur-[100px]"
      ></div>

      <div class="relative mx-auto max-w-7xl">
        <div
          class="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"
        >
          <div>
            <p class="text-sm font-semibold tracking-[0.3em] text-[#9b4056]">
              EXPLORE
            </p>

            <h2 class="mt-3 font-serif text-4xl font-semibold sm:text-5xl">
              Find your style.
            </h2>
          </div>

          <p class="max-w-md text-sm leading-7 text-[#806d6d]">
            Curated collections for every mood, celebration and unforgettable
            occasion.
          </p>
        </div>

        <div class="mt-10 grid gap-6 md:grid-cols-3">
          <RouterLink
            to="/dresses"
            class="group relative min-h-[380px] overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#d58b9c] to-[#a9546b] p-8 transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div
              class="absolute inset-0 bg-gradient-to-t from-[#4d2932]/80 via-transparent to-transparent"
            ></div>

            <div
              class="relative z-10 flex h-full flex-col justify-between text-white"
            >
              <div>
                <p class="font-serif text-5xl font-semibold text-white/50">
                  01
                </p>

                <p class="mt-5 text-xs font-semibold tracking-[0.3em]">
                  COLLECTION
                </p>
              </div>

              <div>
                <h3 class="font-serif text-4xl font-semibold">Dresses</h3>

                <p class="mt-3 max-w-xs text-sm leading-6 text-white/80">
                  Effortless silhouettes for every occasion.
                </p>

                <span
                  class="mt-6 inline-block text-sm font-semibold underline underline-offset-4"
                >
                  Explore collection →
                </span>
              </div>
            </div>
          </RouterLink>

          <RouterLink
            to="/sarees"
            class="group relative min-h-[380px] overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#d3a19f] to-[#9d6768] p-8 transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div
              class="absolute inset-0 bg-gradient-to-t from-[#493031]/80 via-transparent to-transparent"
            ></div>

            <div
              class="relative z-10 flex h-full flex-col justify-between text-white"
            >
              <div>
                <p class="font-serif text-5xl font-semibold text-white/50">
                  02
                </p>

                <p class="mt-5 text-xs font-semibold tracking-[0.3em]">
                  COLLECTION
                </p>
              </div>

              <div>
                <h3 class="font-serif text-4xl font-semibold">Sarees</h3>

                <p class="mt-3 max-w-xs text-sm leading-6 text-white/80">
                  Timeless Indian elegance with a modern touch.
                </p>

                <span
                  class="mt-6 inline-block text-sm font-semibold underline underline-offset-4"
                >
                  Discover sarees →
                </span>
              </div>
            </div>
          </RouterLink>

          <RouterLink
            to="/customised-dresses"
            class="group relative min-h-[380px] overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#d6ad9a] to-[#9f7464] p-8 transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div
              class="absolute inset-0 bg-gradient-to-t from-[#49332d]/80 via-transparent to-transparent"
            ></div>

            <div
              class="relative z-10 flex h-full flex-col justify-between text-white"
            >
              <div>
                <p class="font-serif text-5xl font-semibold text-white/50">
                  03
                </p>

                <p class="mt-5 text-xs font-semibold tracking-[0.3em]">
                  COLLECTION
                </p>
              </div>

              <div>
                <h3 class="font-serif text-4xl font-semibold">Custom</h3>

                <p class="mt-3 max-w-xs text-sm leading-6 text-white/80">
                  A look designed around you.
                </p>

                <span
                  class="mt-6 inline-block text-sm font-semibold underline underline-offset-4"
                >
                  Create your look →
                </span>
              </div>
            </div>
          </RouterLink>
        </div>
      </div>
    </section>

    <section
      class="relative overflow-hidden bg-[#302525] px-6 py-20 text-white sm:px-8 sm:py-24 lg:py-28"
    >
      <div
        class="absolute left-1/2 top-[-200px] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#ad3d5b]/15 blur-[120px]"
      ></div>

      <div class="relative mx-auto max-w-5xl text-center">
        <p class="text-sm font-semibold tracking-[0.3em] text-[#e4aab5]">
          THE MAAD PHILOSOPHY
        </p>

        <h2
          class="mt-5 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl"
        >
          Not just what you wear.

          <br />

          <span class="italic text-[#e4aab5]"> How it makes you feel. </span>
        </h2>

        <p class="mx-auto mt-7 max-w-2xl leading-8 text-white/65">
          From quiet mornings to unforgettable celebrations, MAAD is made for
          the moments that become memories.
        </p>
      </div>
    </section>

    <section
      class="relative overflow-hidden px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24"
    >
      <div
        class="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#fcf4f1] via-[#fffaf8] to-[#f0dadd]/40"
      ></div>

      <div
        class="relative mx-auto max-w-5xl rounded-[2rem] border border-white/60 bg-white/50 px-6 py-14 text-center shadow-[0_20px_60px_rgba(70,40,40,0.08)] backdrop-blur-sm sm:px-10 sm:py-16"
      >
        <p class="text-sm font-semibold tracking-[0.3em] text-[#9b4056]">
          YOUR NEXT LOOK
        </p>

        <h2 class="mt-4 font-serif text-4xl font-semibold sm:text-5xl">
          Something beautiful is waiting.
        </h2>

        <p class="mx-auto mt-5 max-w-xl leading-7 text-[#806d6d]">
          Discover pieces that feel like they were made especially for you.
        </p>

        <RouterLink
          to="/dresses"
          class="mt-7 inline-block rounded-full bg-[#9b4056] px-8 py-4 font-semibold text-white shadow-lg shadow-[#9b4056]/20 transition hover:-translate-y-1 hover:bg-[#84354a]"
        >
          Start Exploring
        </RouterLink>
      </div>
    </section>

    <footer class="border-t border-[#eadedb] bg-white px-6 py-7">
      <div
        class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-[#806d6d] sm:flex-row"
      >
        <p>© {{ new Date().getFullYear() }} MAAD Fashions</p>

        <p>Made for your moments.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
import heroImage from "../assets/maad-hero-display.png";
</script>
