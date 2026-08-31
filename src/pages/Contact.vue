<template>
  <div class="min-h-screen bg-[#fff9f7] text-[#302525]">
    <main class="relative min-h-[calc(100vh-96px)] overflow-x-hidden pt-24">
      <div
        class="pointer-events-none absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-[#f7dce2]/60 blur-3xl"
      ></div>

      <div
        class="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#ead0d7]/50 blur-3xl"
      ></div>

      <div
        class="pointer-events-none absolute right-[8%] top-[12%] h-28 w-28 rounded-full border border-[#b83259]/15"
      ></div>

      <div
        class="pointer-events-none absolute right-[10%] top-[15%] h-16 w-16 rounded-full border border-[#b83259]/10"
      ></div>

      <div
        class="pointer-events-none absolute left-[8%] top-[20%] text-3xl text-[#c2385b]/30"
      >
        ✦
      </div>

      <div
        class="pointer-events-none absolute right-[38%] bottom-[18%] text-2xl text-[#c2385b]/25"
      >
        ✦
      </div>

      <section
        class="relative mx-auto flex min-h-[calc(100vh-96px)] max-w-7xl items-center px-6 py-10 sm:px-8 lg:px-12"
      >
        <div
          class="grid w-full items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20"
        >
          <div class="relative">
            <div class="mb-6 flex items-center gap-4">
              <span class="h-px w-10 bg-[#b83259]"></span>

              <p class="text-xs font-bold tracking-[0.38em] text-[#b83259]">
                CONTACT US
              </p>
            </div>

            <h1
              class="max-w-3xl font-serif text-[4rem] font-semibold leading-[0.92] tracking-[-0.04em] text-[#302525] sm:text-[5rem] lg:text-[6rem]"
            >
              We'd love to
              <span class="block italic text-[#b83259]"> hear from </span>
              <span class="block italic text-[#b83259]"> you. </span>
            </h1>

            <p
              class="mt-8 max-w-xl text-base leading-7 text-[#75686a] sm:text-lg"
            >
              Have a question about a dress, saree, or custom design? Tell us
              what you're looking for and our team will be happy to help you
              find something beautiful.
            </p>

            <div class="mt-10 flex flex-wrap gap-8">
              <div class="group">
                <div
                  class="mb-2 flex h-11 w-11 items-center justify-center rounded-full bg-[#f4d9df] text-[#b83259] transition duration-300 group-hover:bg-[#b83259] group-hover:text-white"
                >
                  ✉
                </div>

                <p
                  class="text-xs font-semibold tracking-[0.15em] text-[#9a8588]"
                >
                  EMAIL
                </p>

                <p class="mt-1 text-sm font-medium text-[#302525]">
                  hello@maadfashions.com
                </p>
              </div>

              <div class="group">
                <div
                  class="mb-2 flex h-11 w-11 items-center justify-center rounded-full bg-[#f4d9df] text-[#b83259] transition duration-300 group-hover:bg-[#b83259] group-hover:text-white"
                >
                  ☎
                </div>

                <p
                  class="text-xs font-semibold tracking-[0.15em] text-[#9a8588]"
                >
                  PHONE
                </p>

                <p class="mt-1 text-sm font-medium text-[#302525]">
                  +91 98765 43210
                </p>
              </div>
            </div>

            <div class="mt-10 flex items-center gap-4">
              <span class="h-px w-12 bg-[#c2385b]"></span>

              <span
                class="text-xs font-semibold tracking-[0.32em] text-[#b83259]"
              >
                MADE FOR YOUR MOMENTS
              </span>

              <span class="h-px w-12 bg-[#c2385b]"></span>
            </div>
          </div>

          <div class="relative">
            <div
              class="absolute -right-10 -top-10 h-36 w-36 rounded-full border border-[#b83259]/10"
            ></div>

            <div
              class="relative overflow-hidden rounded-[2rem] border border-[#ead5d8] bg-white/75 p-7 shadow-[0_25px_70px_rgba(110,55,65,0.10)] backdrop-blur-md sm:p-9"
            >
              <div
                class="absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-[#f5dce1]/60"
              ></div>

              <div class="relative">
                <div class="flex items-start justify-between">
                  <div>
                    <p
                      class="text-xs font-bold tracking-[0.3em] text-[#b83259]"
                    >
                      LET'S TALK
                    </p>

                    <h2
                      class="mt-3 font-serif text-3xl font-semibold text-[#302525]"
                    >
                      Tell us what
                      <span class="italic text-[#b83259]">
                        you're dreaming of.
                      </span>
                    </h2>
                  </div>

                  <div
                    class="hidden h-14 w-14 items-center justify-center rounded-full bg-[#f4d9df] text-xl text-[#b83259] sm:flex"
                  >
                    ✦
                  </div>
                </div>

                <form class="mt-8 space-y-5">
                  <div>
                    <label
                      class="mb-2 block text-xs font-semibold tracking-[0.16em] text-[#7c6d70]"
                    >
                      YOUR NAME
                    </label>

                    <input
                      type="text"
                      placeholder="Enter your name"
                      class="w-full rounded-xl border border-[#ead7da] bg-[#fffafa] px-4 py-3.5 text-sm text-[#302525] outline-none transition placeholder:text-[#b9aaad] focus:border-[#b83259] focus:ring-2 focus:ring-[#b83259]/10"
                    />
                  </div>

                  <div>
                    <label
                      class="mb-2 block text-xs font-semibold tracking-[0.16em] text-[#7c6d70]"
                    >
                      EMAIL ADDRESS
                    </label>

                    <input
                      type="email"
                      placeholder="you@example.com"
                      class="w-full rounded-xl border border-[#ead7da] bg-[#fffafa] px-4 py-3.5 text-sm text-[#302525] outline-none transition placeholder:text-[#b9aaad] focus:border-[#b83259] focus:ring-2 focus:ring-[#b83259]/10"
                    />
                  </div>

                  <div>
                    <label
                      class="mb-2 block text-xs font-semibold tracking-[0.16em] text-[#7c6d70]"
                    >
                      YOUR MESSAGE
                    </label>

                    <textarea
                      rows="4"
                      placeholder="Tell us how we can help..."
                      class="w-full resize-none rounded-xl border border-[#ead7da] bg-[#fffafa] px-4 py-3.5 text-sm text-[#302525] outline-none transition placeholder:text-[#b9aaad] focus:border-[#b83259] focus:ring-2 focus:ring-[#b83259]/10"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    class="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#b83259] px-6 py-4 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(184,50,89,0.22)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#a62d50] hover:shadow-[0_16px_35px_rgba(184,50,89,0.28)]"
                  >
                    Send Message

                    <span
                      class="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </button>
                </form>

                <div class="mt-6 flex items-center justify-center gap-3">
                  <span class="h-px w-8 bg-[#ead5d8]"></span>

                  <p
                    class="text-[10px] font-medium tracking-[0.2em] text-[#9a8588]"
                  >
                    WE'D LOVE TO HEAR FROM YOU
                  </p>

                  <span class="h-px w-8 bg-[#ead5d8]"></span>
                </div>
              </div>
            </div>

            <div
              class="absolute -bottom-5 -left-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#b83259] text-2xl text-white shadow-[0_15px_35px_rgba(184,50,89,0.25)]"
            >
              ✦
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
<script setup>
import Navbar from "../components/Navbar.vue";
</script>
