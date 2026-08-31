<template>
  <div class="min-h-screen bg-[#fffaf8]">
    <div
      class="flex min-h-screen items-center justify-center px-4 pt-24 py-10 sm:px-6"
    >
      <div class="w-full max-w-md">
        <div class="mb-8 text-center">
          <p class="text-sm font-semibold tracking-[0.3em] text-[#9b4056]">
            MAAD FASHIONS
          </p>

          <h1 class="mt-3 font-serif text-4xl font-bold text-[#302525]">
            Admin Login
          </h1>

          <p class="mt-3 text-[#806d6d]">Sign in to manage your products.</p>
        </div>

        <div
          class="rounded-2xl border border-[#eadedb] bg-white p-6 shadow-sm sm:p-8"
        >
          <form @submit.prevent="handleLogin">
            <div>
              <label class="mb-2 block text-sm font-semibold text-[#493838]">
                Admin Email
              </label>

              <input
                v-model="email"
                type="email"
                placeholder="admin@maadfashions.com"
                class="w-full rounded-xl border border-[#dfceca] px-4 py-3 text-[#302525] outline-none transition focus:border-[#9b4056] focus:ring-1 focus:ring-[#9b4056]"
              />
            </div>

            <div class="mt-5">
              <label class="mb-2 block text-sm font-semibold text-[#493838]">
                Password
              </label>

              <input
                v-model="password"
                type="password"
                placeholder="Enter password"
                class="w-full rounded-xl border border-[#dfceca] px-4 py-3 text-[#302525] outline-none transition focus:border-[#9b4056] focus:ring-1 focus:ring-[#9b4056]"
              />
            </div>

            <p
              v-if="errorMessage"
              class="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600"
            >
              {{ errorMessage }}
            </p>

            <button
              type="submit"
              class="mt-6 w-full rounded-full bg-[#9b4056] px-6 py-4 font-semibold text-white transition hover:bg-[#84354a]"
            >
              Login as Admin
            </button>
          </form>

          <RouterLink
            to="/"
            class="mt-6 block text-center text-sm font-medium text-[#9b4056] hover:underline"
          >
            ← Back to MAAD Fashions
          </RouterLink>
        </div>

        <p class="mt-6 text-center text-xs text-[#806d6d]">
          Admin authentication is currently running in demo mode.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const email = ref("");
const password = ref("");
const errorMessage = ref("");

function handleLogin() {
  errorMessage.value = "";

  if (!email.value || !password.value) {
    errorMessage.value = "Please enter your email and password.";
    return;
  }

  const adminEmail = "admin@maadfashions.com";
  const adminPassword = "admin123";

  if (email.value === adminEmail && password.value === adminPassword) {
    localStorage.setItem("adminLoggedIn", "true");

    router.push("/admin/dashboard");
  } else {
    errorMessage.value = "Invalid admin email or password.";
  }
}
</script>
