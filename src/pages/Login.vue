<template>
  <div class="min-h-screen overflow-x-hidden bg-[#fff8f6] text-[#302525]">
    <main
      class="flex min-h-screen items-center justify-center px-3 py-5 sm:px-6 sm:py-8 lg:px-8"
    >
      <div
        class="grid w-full max-w-6xl overflow-hidden rounded-[1.5rem] bg-white shadow-[0_20px_70px_rgba(80,35,45,0.14)] sm:rounded-[2rem] lg:min-h-[720px] lg:grid-cols-[0.9fr_1.1fr]"
      >
        <!-- LEFT SIDE -->

        <section
          class="relative hidden min-h-[720px] overflow-hidden bg-[#302525] lg:flex"
        >
          <!-- Decorative circles -->

          <div
            class="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-[#ad3d5b]/40 blur-3xl"
          ></div>

          <div
            class="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[#d9aab7]/25 blur-3xl"
          ></div>

          <div
            class="absolute right-12 top-24 h-32 w-32 rounded-full border border-white/10"
          ></div>

          <div
            class="absolute bottom-24 left-12 h-20 w-20 rounded-full border border-[#f3b8c5]/20"
          ></div>

          <div
            class="relative z-10 flex w-full flex-col justify-between p-10 xl:p-12"
          >
            <!-- Brand -->

            <div>
              <p
                class="text-xs font-semibold uppercase tracking-[0.4em] text-[#f3b8c5]"
              >
                Welcome to
              </p>

              <h1
                class="mt-2 font-serif text-5xl font-bold tracking-tight text-white"
              >
                MAAD
              </h1>

              <p class="mt-1 text-sm tracking-[0.35em] text-white/60">
                FASHIONS
              </p>
            </div>

            <!-- Center -->

            <div class="flex flex-1 items-center justify-center">
              <div class="text-center">
                <div
                  class="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-[#f3b8c5]/30 bg-white/5 text-7xl backdrop-blur-sm"
                >
                  👗
                </div>

                <div class="mx-auto mt-6 h-px w-16 bg-[#f3b8c5]"></div>

                <h2
                  class="mt-5 font-serif text-4xl italic text-white xl:text-5xl"
                >
                  Your Style.
                </h2>

                <h2
                  class="font-serif text-4xl italic text-[#f3b8c5] xl:text-5xl"
                >
                  Your Story.
                </h2>

                <p
                  class="mx-auto mt-4 max-w-sm text-sm leading-6 text-white/50"
                >
                  Discover elegant dresses, beautiful sarees and personalised
                  fashion designed especially for you.
                </p>
              </div>
            </div>

            <!-- Bottom -->

            <div
              class="flex justify-between border-t border-white/10 pt-5 text-[10px] uppercase tracking-[0.3em] text-white/35"
            >
              <span>Elegance</span>
              <span>Tradition</span>
              <span>Style</span>
            </div>
          </div>
        </section>

        <!-- RIGHT SIDE -->

        <section
          class="flex min-h-screen items-center justify-center px-4 py-6 sm:px-8 sm:py-10 lg:min-h-0 lg:px-12 lg:py-12 xl:px-16"
        >
          <div class="w-full max-w-md">
            <!-- MOBILE BRAND -->

            <div class="mb-5 text-center lg:hidden">
              <p
                class="font-serif text-3xl font-bold tracking-tight text-[#302525]"
              >
                MAAD
              </p>

              <p class="mt-0.5 text-[10px] tracking-[0.35em] text-[#ad3d5b]">
                FASHIONS
              </p>
            </div>

            <!-- LOGIN / REGISTER TABS -->

            <div class="flex rounded-full bg-[#fff0f3] p-1">
              <button
                type="button"
                @click="goToLogin"
                class="w-1/2 rounded-full py-2.5 text-xs font-semibold transition sm:text-sm"
                :class="
                  mode === 'login'
                    ? 'bg-[#ad3d5b] text-white shadow-md'
                    : 'text-[#ad3d5b]'
                "
              >
                Login
              </button>

              <button
                type="button"
                @click="goToRegister"
                class="w-1/2 rounded-full py-2.5 text-xs font-semibold transition sm:text-sm"
                :class="
                  mode === 'register'
                    ? 'bg-[#ad3d5b] text-white shadow-md'
                    : 'text-[#ad3d5b]'
                "
              >
                Create Account
              </button>
            </div>

            <!-- ERROR MESSAGE -->

            <div
              v-if="errorMessage"
              class="mt-4 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-xs leading-5 text-red-600 sm:text-sm"
            >
              {{ errorMessage }}
            </div>

            <!-- SUCCESS MESSAGE -->

            <div
              v-if="successMessage && mode === 'login'"
              class="mt-4 rounded-xl border border-green-100 bg-green-50 px-4 py-3 text-xs leading-5 text-green-600 sm:text-sm"
            >
              {{ successMessage }}
            </div>

            <!-- LOGIN -->

            <div v-if="mode === 'login'" class="mt-6 sm:mt-8">
              <p
                class="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#ad3d5b] sm:text-xs"
              >
                Welcome Back
              </p>

              <h2
                class="mt-1.5 text-2xl font-bold leading-tight text-[#302525] sm:mt-2 sm:text-3xl xl:text-4xl"
              >
                Sign in to your account
              </h2>

              <p
                class="mt-2 text-xs leading-5 text-gray-500 sm:text-sm sm:leading-6"
              >
                Continue your fashion journey with MAAD Fashions.
              </p>

              <!-- Login Form -->

              <form
                class="mt-5 space-y-3.5 sm:mt-6 sm:space-y-4"
                @submit.prevent="login"
              >
                <!-- Email -->

                <div>
                  <label
                    class="mb-1.5 block text-xs font-semibold text-[#302525] sm:text-sm"
                  >
                    Email Address
                  </label>

                  <input
                    v-model="loginForm.email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    autocomplete="email"
                    class="w-full rounded-xl border border-gray-200 bg-[#fffdfc] px-4 py-3 text-sm outline-none transition focus:border-[#ad3d5b] focus:ring-4 focus:ring-[#ad3d5b]/10"
                  />
                </div>

                <!-- Password -->

                <div>
                  <div class="mb-1.5 flex items-center justify-between">
                    <label
                      class="text-xs font-semibold text-[#302525] sm:text-sm"
                    >
                      Password
                    </label>

                    <button
                      type="button"
                      @click="forgotPassword"
                      :disabled="loading"
                      class="text-[11px] font-medium text-[#ad3d5b] hover:underline disabled:opacity-50 sm:text-xs"
                    >
                      Forgot password?
                    </button>
                  </div>

                  <div class="relative">
                    <input
                      v-model="loginForm.password"
                      :type="showLoginPassword ? 'text' : 'password'"
                      placeholder="Enter your password"
                      required
                      autocomplete="current-password"
                      class="w-full rounded-xl border border-gray-200 bg-[#fffdfc] px-4 py-3 pr-12 text-sm outline-none transition focus:border-[#ad3d5b] focus:ring-4 focus:ring-[#ad3d5b]/10"
                    />

                    <button
                      type="button"
                      @click="showLoginPassword = !showLoginPassword"
                      aria-label="Toggle password visibility"
                      class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-[#ad3d5b]"
                    >
                      {{ showLoginPassword ? "🙈" : "👁️" }}
                    </button>
                  </div>
                </div>

                <!-- Remember -->

                <label
                  class="flex cursor-pointer items-center gap-2 text-xs text-gray-500 sm:text-sm"
                >
                  <input
                    v-model="rememberMe"
                    type="checkbox"
                    class="h-4 w-4 accent-[#ad3d5b]"
                  />

                  Keep me signed in
                </label>

                <!-- Sign In -->

                <button
                  type="submit"
                  :disabled="loading"
                  class="w-full rounded-full bg-[#ad3d5b] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#ad3d5b]/20 transition hover:-translate-y-0.5 hover:bg-[#922f4a] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {{ loading ? "Signing in..." : "Sign In" }}
                </button>
              </form>

              <!-- Register Link -->

              <p
                class="mt-5 text-center text-xs text-gray-500 sm:mt-6 sm:text-sm"
              >
                Don't have an account?

                <button
                  type="button"
                  @click="goToRegister"
                  class="font-semibold text-[#ad3d5b] hover:underline"
                >
                  Create one
                </button>
              </p>
            </div>

            <!-- REGISTER -->

            <div v-else class="mt-5 sm:mt-6">
              <p
                class="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#ad3d5b] sm:text-xs"
              >
                Join MAAD
              </p>

              <h2
                class="mt-1.5 text-2xl font-bold leading-tight text-[#302525] sm:mt-2 sm:text-3xl xl:text-4xl"
              >
                Create your account
              </h2>

              <p class="mt-2 text-xs leading-5 text-gray-500 sm:text-sm">
                Create an account and discover fashion made for you.
              </p>

              <!-- Registration Success -->

              <div
                v-if="successMessage"
                class="mt-5 rounded-2xl border border-green-200 bg-green-50 p-5 text-center"
              >
                <div
                  class="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-green-100 text-lg font-bold text-green-600"
                >
                  ✓
                </div>

                <h3 class="mt-3 text-base font-bold text-green-700 sm:text-lg">
                  Your account is created!
                </h3>

                <p class="mt-1 text-xs leading-5 text-green-600 sm:text-sm">
                  Your MAAD Fashions account has been created successfully.
                </p>

                <button
                  type="button"
                  @click="goToLogin"
                  class="mt-4 rounded-full bg-[#ad3d5b] px-6 py-2.5 text-xs font-semibold text-white transition hover:bg-[#922f4a] sm:text-sm"
                >
                  Continue to Login
                </button>
              </div>

              <!-- Registration Form -->

              <form
                v-if="!successMessage"
                class="mt-5 space-y-3"
                @submit.prevent="register"
              >
                <!-- Name -->

                <div>
                  <label
                    class="mb-1 block text-xs font-semibold text-[#302525]"
                  >
                    Full Name
                  </label>

                  <input
                    v-model="registerForm.name"
                    type="text"
                    placeholder="Your full name"
                    required
                    autocomplete="name"
                    class="w-full rounded-xl border border-gray-200 bg-[#fffdfc] px-4 py-2.5 text-sm outline-none transition focus:border-[#ad3d5b] focus:ring-4 focus:ring-[#ad3d5b]/10"
                  />
                </div>

                <!-- Email -->

                <div>
                  <label
                    class="mb-1 block text-xs font-semibold text-[#302525]"
                  >
                    Email Address
                  </label>

                  <input
                    v-model="registerForm.email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    autocomplete="email"
                    class="w-full rounded-xl border border-gray-200 bg-[#fffdfc] px-4 py-2.5 text-sm outline-none transition focus:border-[#ad3d5b] focus:ring-4 focus:ring-[#ad3d5b]/10"
                  />
                </div>

                <!-- Phone -->

                <div>
                  <label
                    class="mb-1 block text-xs font-semibold text-[#302525]"
                  >
                    Phone Number
                  </label>

                  <input
                    v-model="registerForm.phone"
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    required
                    autocomplete="tel"
                    class="w-full rounded-xl border border-gray-200 bg-[#fffdfc] px-4 py-2.5 text-sm outline-none transition focus:border-[#ad3d5b] focus:ring-4 focus:ring-[#ad3d5b]/10"
                  />
                </div>

                <!-- Password -->

                <div>
                  <label
                    class="mb-1 block text-xs font-semibold text-[#302525]"
                  >
                    Password
                  </label>

                  <div class="relative">
                    <input
                      v-model="registerForm.password"
                      :type="showRegisterPassword ? 'text' : 'password'"
                      placeholder="Create a password"
                      required
                      minlength="6"
                      autocomplete="new-password"
                      class="w-full rounded-xl border border-gray-200 bg-[#fffdfc] px-4 py-2.5 pr-12 text-sm outline-none transition focus:border-[#ad3d5b] focus:ring-4 focus:ring-[#ad3d5b]/10"
                    />

                    <button
                      type="button"
                      @click="showRegisterPassword = !showRegisterPassword"
                      aria-label="Toggle password visibility"
                      class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-[#ad3d5b]"
                    >
                      {{ showRegisterPassword ? "🙈" : "👁️" }}
                    </button>
                  </div>
                </div>

                <!-- Confirm Password -->

                <div>
                  <label
                    class="mb-1 block text-xs font-semibold text-[#302525]"
                  >
                    Confirm Password
                  </label>

                  <input
                    v-model="registerForm.confirmPassword"
                    type="password"
                    placeholder="Confirm your password"
                    required
                    autocomplete="new-password"
                    class="w-full rounded-xl border border-gray-200 bg-[#fffdfc] px-4 py-2.5 text-sm outline-none transition focus:border-[#ad3d5b] focus:ring-4 focus:ring-[#ad3d5b]/10"
                  />
                </div>

                <!-- Terms -->

                <label
                  class="flex cursor-pointer items-start gap-2 pt-1 text-[11px] leading-4 text-gray-500"
                >
                  <input
                    v-model="acceptTerms"
                    type="checkbox"
                    required
                    class="mt-0.5 h-4 w-4 shrink-0 accent-[#ad3d5b]"
                  />

                  <span>
                    I agree to the MAAD Fashions terms and privacy policy.
                  </span>
                </label>

                <!-- Register -->

                <button
                  type="submit"
                  :disabled="loading"
                  class="w-full rounded-full bg-[#ad3d5b] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#ad3d5b]/20 transition hover:-translate-y-0.5 hover:bg-[#922f4a] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {{ loading ? "Creating Account..." : "Create My Account" }}
                </button>
              </form>

              <!-- Login Link -->

              <p class="mt-4 text-center text-xs text-gray-500 sm:text-sm">
                Already have an account?

                <button
                  type="button"
                  @click="goToLogin"
                  class="font-semibold text-[#ad3d5b] hover:underline"
                >
                  Sign in
                </button>
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
    ```
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const mode = ref("login");

const showLoginPassword = ref(false);
const showRegisterPassword = ref(false);

const rememberMe = ref(true);
const acceptTerms = ref(false);

const loading = ref(false);

const errorMessage = ref("");
const successMessage = ref("");

const loginForm = ref({
  email: "",
  password: "",
});

const registerForm = ref({
  name: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
});

/* CUSTOMER LOGIN */

const login = async () => {
  errorMessage.value = "";
  successMessage.value = "";

  if (!loginForm.value.email || !loginForm.value.password) {
    errorMessage.value = "Please enter your email and password.";
    return;
  }

  loading.value = true;

  try {
    const response = await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: loginForm.value.email.trim().toLowerCase(),
        password: loginForm.value.password,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        Array.isArray(data.message)
          ? data.message[0]
          : data.message || "Login failed.",
      );
    }

    /* CUSTOMER ONLY */

    if (!data.user || data.user.role !== "CUSTOMER") {
      throw new Error("Please use the admin login page.");
    }

    /* SAVE CUSTOMER LOGIN */

    localStorage.setItem("accessToken", data.accessToken);

    localStorage.setItem("user", JSON.stringify(data.user));

    window.dispatchEvent(new Event("auth-changed"));

    sessionStorage.removeItem("accessToken");
    sessionStorage.removeItem("user");

    successMessage.value = "Login successful!";

    /* CLEAR LOGIN FORM */

    loginForm.value = {
      email: "",
      password: "",
    };

    /* REDIRECT */

    const redirectPath = localStorage.getItem("redirectAfterLogin") || "/";

    localStorage.removeItem("redirectAfterLogin");

    setTimeout(() => {
      router.push(redirectPath);
    }, 700);
  } catch (error) {
    console.error("Customer login error:", error);

    errorMessage.value = error.message || "Unable to login. Please try again.";
  } finally {
    loading.value = false;
  }
};

/* CUSTOMER REGISTER */

const register = async () => {
  errorMessage.value = "";
  successMessage.value = "";

  if (
    !registerForm.value.name.trim() ||
    !registerForm.value.email.trim() ||
    !registerForm.value.phone.trim() ||
    !registerForm.value.password
  ) {
    errorMessage.value = "Please fill in all required fields.";

    return;
  }

  if (registerForm.value.password.length < 6) {
    errorMessage.value = "Password must be at least 6 characters.";

    return;
  }

  if (registerForm.value.password !== registerForm.value.confirmPassword) {
    errorMessage.value = "Passwords do not match.";

    return;
  }

  if (!acceptTerms.value) {
    errorMessage.value = "Please accept the terms and privacy policy.";

    return;
  }

  loading.value = true;

  try {
    const response = await fetch("http://localhost:3000/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: registerForm.value.name.trim(),
        email: registerForm.value.email.trim().toLowerCase(),
        phone: registerForm.value.phone.trim(),
        password: registerForm.value.password,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        Array.isArray(data.message)
          ? data.message[0]
          : data.message || "Registration failed.",
      );
    }

    successMessage.value = "Your account has been created successfully!";

    registerForm.value = {
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    };

    acceptTerms.value = false;
    showRegisterPassword.value = false;
  } catch (error) {
    console.error("Customer registration error:", error);

    errorMessage.value =
      error.message || "Unable to create account. Please try again.";
  } finally {
    loading.value = false;
  }
};

/* FORGOT PASSWORD */

const forgotPassword = async () => {
  errorMessage.value = "";
  successMessage.value = "";

  const email = loginForm.value.email.trim().toLowerCase();

  if (!email) {
    errorMessage.value =
      "Please enter your email address first, then click Forgot password.";

    return;
  }

  loading.value = true;

  try {
    const response = await fetch("http://localhost:3000/auth/forgot-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        Array.isArray(data.message)
          ? data.message[0]
          : data.message || "Unable to process password reset.",
      );
    }

    successMessage.value =
      data.message ||
      "If an account exists with this email, password reset instructions have been sent.";

    if (data.resetToken) {
      console.log("DEVELOPMENT RESET TOKEN:", data.resetToken);
    }
  } catch (error) {
    console.error("Forgot password error:", error);

    errorMessage.value =
      error.message || "Unable to process your password reset request.";
  } finally {
    loading.value = false;
  }
};

/* SWITCH TO LOGIN */

const goToLogin = () => {
  successMessage.value = "";
  errorMessage.value = "";

  mode.value = "login";

  loginForm.value = {
    email: "",
    password: "",
  };
};

/* SWITCH TO REGISTER */

const goToRegister = () => {
  successMessage.value = "";
  errorMessage.value = "";

  mode.value = "register";
};

/* LOGOUT */

const logout = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("user");
  localStorage.removeItem("redirectAfterLogin");

  sessionStorage.removeItem("accessToken");
  sessionStorage.removeItem("user");
  sessionStorage.removeItem("redirectAfterLogin");

  router.push("/");
};
</script>
