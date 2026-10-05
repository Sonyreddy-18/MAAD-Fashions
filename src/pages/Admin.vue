<template>
  <div class="min-h-screen overflow-x-hidden bg-[#fffaf8] text-[#302525]">
    <div
      class="flex min-h-screen items-center justify-center px-4 py-6 sm:px-6 sm:py-10"
    >
      <div class="w-full max-w-md">
        <!-- HEADER -->

        <div class="mb-6 text-center sm:mb-8">
          <p
            class="text-[10px] font-semibold tracking-[0.28em] text-[#9b4056] sm:text-sm sm:tracking-[0.3em]"
          >
            MAAD FASHIONS
          </p>
          <h1
            class="mt-2 font-serif text-3xl font-bold text-[#302525] sm:mt-3 sm:text-4xl"
          >
            Admin Login
          </h1>
          <p class="mt-2 text-sm text-[#806d6d] sm:mt-3">
            Sign in to manage your products.
          </p>
        </div>

        <!-- LOGIN CARD -->

        <div
          class="rounded-2xl border border-[#eadedb] bg-white p-5 shadow-sm sm:p-8"
        >
          <form @submit.prevent="handleLogin">
            <!-- EMAIL -->

            <div>
              <label
                class="mb-1.5 block text-xs font-semibold text-[#493838] sm:mb-2 sm:text-sm"
              >
                Admin Email
              </label>
              <input
                v-model="email"
                type="email"
                placeholder="admin@maadfashions.com"
                autocomplete="username"
                required
                class="w-full rounded-xl border border-[#dfceca] bg-white px-4 py-3 text-sm text-[#302525] outline-none transition placeholder:text-[#b7a7a7] focus:border-[#9b4056] focus:ring-1 focus:ring-[#9b4056]/20"
              />
            </div>

            <!-- PASSWORD -->

            <div class="mt-4 sm:mt-5">
              <label
                class="mb-1.5 block text-xs font-semibold text-[#493838] sm:mb-2 sm:text-sm"
              >
                Password
              </label>
              <div class="relative">
                <input
                  v-model="password"
                  :type="showPassword ? 'text' : 'password'"
                  placeholder="Enter password"
                  autocomplete="current-password"
                  required
                  class="w-full rounded-xl border border-[#dfceca] bg-white px-4 py-3 pr-20 text-sm text-[#302525] outline-none transition placeholder:text-[#b7a7a7] focus:border-[#9b4056] focus:ring-1 focus:ring-[#9b4056]/20"
                />
                <button
                  type="button"
                  @click="showPassword = !showPassword"
                  class="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-[#9b4056] transition hover:text-[#84354a] sm:text-sm"
                >
                  {{ showPassword ? "Hide" : "Show" }}
                </button>
              </div>
            </div>

            <!-- ERROR -->

            <div
              v-if="errorMessage"
              class="mt-3 rounded-xl border border-red-100 bg-red-50 px-3 py-2.5 text-xs leading-5 text-red-600 sm:mt-4 sm:px-4 sm:py-3 sm:text-sm"
            >
              {{ errorMessage }}
            </div>

            <!-- SUCCESS -->

            <div
              v-if="successMessage"
              class="mt-3 rounded-xl border border-green-100 bg-green-50 px-3 py-2.5 text-xs leading-5 text-green-600 sm:mt-4 sm:px-4 sm:py-3 sm:text-sm"
            >
              {{ successMessage }}
            </div>

            <!-- LOGIN BUTTON -->

            <button
              type="submit"
              :disabled="loading"
              class="mt-5 w-full rounded-full bg-[#9b4056] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#84354a] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60 sm:mt-6 sm:py-4"
            >
              {{ loading ? "Signing in..." : "Login as Admin" }}
            </button>
          </form>

          <!-- BACK -->

          <RouterLink
            to="/"
            class="mt-5 block text-center text-xs font-medium text-[#9b4056] transition hover:text-[#84354a] hover:underline sm:mt-6 sm:text-sm"
          >
            ← Back to MAAD Fashions
          </RouterLink>
        </div>

        <!-- FOOTER -->

        <p
          class="mx-auto mt-4 max-w-sm px-4 text-center text-[10px] leading-5 text-[#806d6d] sm:mt-6 sm:text-xs"
        >
          Admin authentication is securely connected to the MAAD Fashions
          backend.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

/* FORM */

const email = ref("");
const password = ref("");

/* UI */

const loading = ref(false);
const errorMessage = ref("");
const successMessage = ref("");
const showPassword = ref(false);

/* API */

const API_URL = (
  import.meta.env.VITE_API_URL || "http://localhost:3000"
).replace(/\/$/, "");

/* ADMIN LOGIN */

async function handleLogin() {
  console.log("ADMIN LOGIN STARTED");

  errorMessage.value = "";
  successMessage.value = "";

  /* VALIDATION */

  if (!email.value.trim() || !password.value) {
    errorMessage.value = "Please enter your admin email and password.";
    return;
  }

  loading.value = true;

  try {
    /* BACKEND LOGIN */

    const response = await fetch(`${API_URL}/auth/admin-login`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        email: email.value.trim().toLowerCase(),
        password: password.value,
      }),
    });

    console.log("ADMIN LOGIN STATUS:", response.status);

    /* RESPONSE */

    let data = {};

    try {
      data = await response.json();
    } catch {
      data = {};
    }

    console.log("ADMIN LOGIN RESPONSE:", data);

    /* BACKEND ERROR */

    if (!response.ok) {
      throw new Error(
        Array.isArray(data.message)
          ? data.message[0]
          : data.message || "Invalid admin email or password.",
      );
    }

    /* CHECK USER */

    if (!data.user) {
      throw new Error("Admin user information was not received.");
    }

    /* CHECK ROLE */

    if (data.user.role !== "ADMIN") {
      throw new Error("This account does not have administrator access.");
    }

    /* CHECK TOKEN */

    if (!data.accessToken) {
      throw new Error("Admin access token was not received.");
    }

    /* SAVE ADMIN SESSION */

    localStorage.setItem("adminLoggedIn", "true");
    localStorage.setItem("adminAccessToken", data.accessToken);
    localStorage.setItem("adminUser", JSON.stringify(data.user));

    console.log("ADMIN LOGGED IN:", localStorage.getItem("adminLoggedIn"));

    console.log("TOKEN SAVED:", !!localStorage.getItem("adminAccessToken"));

    /* SUCCESS */

    successMessage.value = "Login successful! Opening dashboard...";

    password.value = "";

    /* NAVIGATE */

    console.log("NAVIGATING TO /admin/dashboard");

    await router.push({
      name: "AdminDashboard",
    });

    console.log("CURRENT ROUTE:", router.currentRoute.value.fullPath);
  } catch (error) {
    console.error("ADMIN LOGIN ERROR:", error);

    errorMessage.value = error?.message || "Unable to login. Please try again.";
  } finally {
    loading.value = false;
  }
}
</script>
