<template>
  <div
    class="min-h-screen overflow-x-hidden bg-[#fffaf8] pb-20 pt-24 text-[#302525] lg:pb-0"
  >
    <div class="mx-auto max-w-6xl px-3 sm:px-6 lg:px-8">
      <!-- HEADER -->

      <div class="mb-6 text-center sm:mb-10">
        <p
          class="text-[10px] font-semibold tracking-[0.25em] text-[#9b4056] sm:text-sm sm:tracking-[0.3em]"
        >
          MAAD FASHIONS
        </p>
        <h1
          class="mt-1 font-serif text-3xl font-bold text-[#302525] sm:mt-2 sm:text-5xl"
        >
          Checkout
        </h1>
        <p class="mt-2 text-sm text-[#806d6d] sm:mt-3">Complete your order</p>
      </div>

      <div class="grid gap-4 pb-6 sm:gap-6 lg:grid-cols-3 lg:gap-8">
        <!-- LEFT -->

        <div
          class="rounded-2xl border border-[#eadedb] bg-white p-4 shadow-[0_8px_30px_rgba(80,40,45,0.04)] sm:p-6 lg:col-span-2 lg:p-8"
        >
          <form @submit.prevent="handlePayment">
            <!-- DELIVERY -->

            <div class="mb-5 sm:mb-7">
              <h2
                class="font-serif text-xl font-semibold text-[#302525] sm:text-2xl"
              >
                Delivery Details
              </h2>
              <p class="mt-1 text-xs text-[#806d6d] sm:text-sm">
                Enter the address where you want your order delivered.
              </p>
            </div>

            <!-- FULL NAME -->

            <div class="mb-4 sm:mb-5">
              <label
                class="mb-1.5 block text-sm font-medium text-[#493838] sm:mb-2"
              >
                Full Name
              </label>
              <input
                v-model="customer.name"
                type="text"
                autocomplete="name"
                placeholder="Enter your full name"
                class="w-full rounded-xl border border-[#dfceca] bg-white px-3.5 py-3 text-sm outline-none transition placeholder:text-[#b4a3a0] focus:border-[#9b4056] focus:ring-1 focus:ring-[#9b4056] sm:px-4 sm:py-3"
              />
            </div>

            <!-- EMAIL -->

            <div class="mb-4 sm:mb-5">
              <label
                class="mb-1.5 block text-sm font-medium text-[#493838] sm:mb-2"
              >
                Email Address
              </label>
              <input
                v-model="customer.email"
                type="email"
                autocomplete="email"
                placeholder="Enter your email"
                class="w-full rounded-xl border border-[#dfceca] bg-white px-3.5 py-3 text-sm outline-none transition placeholder:text-[#b4a3a0] focus:border-[#9b4056] focus:ring-1 focus:ring-[#9b4056] sm:px-4 sm:py-3"
              />
            </div>

            <!-- PHONE -->

            <div class="mb-4 sm:mb-5">
              <label
                class="mb-1.5 block text-sm font-medium text-[#493838] sm:mb-2"
              >
                Phone Number
              </label>
              <input
                v-model="customer.phone"
                type="tel"
                inputmode="tel"
                autocomplete="tel"
                placeholder="Enter your phone number"
                class="w-full rounded-xl border border-[#dfceca] bg-white px-3.5 py-3 text-sm outline-none transition placeholder:text-[#b4a3a0] focus:border-[#9b4056] focus:ring-1 focus:ring-[#9b4056] sm:px-4 sm:py-3"
              />
            </div>

            <!-- ADDRESS -->

            <div class="mb-4 sm:mb-5">
              <label
                class="mb-1.5 block text-sm font-medium text-[#493838] sm:mb-2"
              >
                Address
              </label>
              <textarea
                v-model="customer.address"
                rows="3"
                autocomplete="street-address"
                placeholder="House number, street, area"
                class="w-full resize-none rounded-xl border border-[#dfceca] bg-white px-3.5 py-3 text-sm outline-none transition placeholder:text-[#b4a3a0] focus:border-[#9b4056] focus:ring-1 focus:ring-[#9b4056] sm:px-4"
              ></textarea>
            </div>

            <!-- CITY / STATE / PIN -->

            <div class="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
              <!-- CITY -->

              <div>
                <label
                  class="mb-1.5 block text-sm font-medium text-[#493838] sm:mb-2"
                >
                  City
                </label>
                <input
                  v-model="customer.city"
                  type="text"
                  autocomplete="address-level2"
                  placeholder="City"
                  class="w-full rounded-xl border border-[#dfceca] bg-white px-3.5 py-3 text-sm outline-none transition placeholder:text-[#b4a3a0] focus:border-[#9b4056] focus:ring-1 focus:ring-[#9b4056] sm:px-4"
                />
              </div>

              <!-- STATE -->

              <div>
                <label
                  class="mb-1.5 block text-sm font-medium text-[#493838] sm:mb-2"
                >
                  State
                </label>
                <input
                  v-model="customer.state"
                  type="text"
                  autocomplete="address-level1"
                  placeholder="State"
                  class="w-full rounded-xl border border-[#dfceca] bg-white px-3.5 py-3 text-sm outline-none transition placeholder:text-[#b4a3a0] focus:border-[#9b4056] focus:ring-1 focus:ring-[#9b4056] sm:px-4"
                />
              </div>

              <!-- PIN -->

              <div>
                <label
                  class="mb-1.5 block text-sm font-medium text-[#493838] sm:mb-2"
                >
                  PIN Code
                </label>
                <input
                  v-model="customer.pincode"
                  type="text"
                  inputmode="numeric"
                  autocomplete="postal-code"
                  maxlength="6"
                  placeholder="PIN Code"
                  class="w-full rounded-xl border border-[#dfceca] bg-white px-3.5 py-3 text-sm outline-none transition placeholder:text-[#b4a3a0] focus:border-[#9b4056] focus:ring-1 focus:ring-[#9b4056] sm:px-4"
                />
              </div>
            </div>

            <!-- PAYMENT -->

            <div class="mt-8 sm:mt-10">
              <h2
                class="font-serif text-xl font-semibold text-[#302525] sm:text-2xl"
              >
                Payment Method
              </h2>
              <p class="mt-1 text-xs text-[#806d6d] sm:text-sm">
                Choose how you would like to pay.
              </p>
            </div>

            <div class="mt-4 space-y-2.5 sm:mt-5 sm:space-y-3">
              <!-- UPI -->

              <div
                class="rounded-xl border p-3.5 transition sm:p-4"
                :class="
                  paymentMethod === 'upi'
                    ? 'border-[#9b4056] bg-[#fff7f8]'
                    : 'border-[#eadedb] hover:border-[#9b4056]'
                "
              >
                <label class="flex cursor-pointer items-start gap-3">
                  <input
                    v-model="paymentMethod"
                    type="radio"
                    value="upi"
                    class="mt-1 accent-[#9b4056]"
                  />
                  <div class="min-w-0">
                    <p
                      class="text-sm font-semibold text-[#302525] sm:text-base"
                    >
                      UPI
                    </p>
                    <p class="mt-0.5 text-xs text-[#806d6d] sm:text-sm">
                      Google Pay, PhonePe, Paytm
                    </p>
                  </div>
                </label>

                <!-- UPI DETAILS -->

                <div v-if="paymentMethod === 'upi'" class="mt-3.5">
                  <label
                    class="mb-1.5 block text-xs font-medium text-[#493838] sm:text-sm"
                  >
                    UPI ID
                  </label>
                  <input
                    v-model="paymentDetails.upiId"
                    type="text"
                    autocomplete="off"
                    placeholder="example@upi"
                    class="w-full rounded-xl border border-[#dfceca] bg-white px-3.5 py-3 text-sm outline-none focus:border-[#9b4056] focus:ring-1 focus:ring-[#9b4056]"
                  />
                </div>
              </div>

              <!-- CARD -->

              <div
                class="rounded-xl border p-3.5 transition sm:p-4"
                :class="
                  paymentMethod === 'card'
                    ? 'border-[#9b4056] bg-[#fff7f8]'
                    : 'border-[#eadedb] hover:border-[#9b4056]'
                "
              >
                <label class="flex cursor-pointer items-start gap-3">
                  <input
                    v-model="paymentMethod"
                    type="radio"
                    value="card"
                    class="mt-1 accent-[#9b4056]"
                  />
                  <div class="min-w-0">
                    <p
                      class="text-sm font-semibold text-[#302525] sm:text-base"
                    >
                      Credit / Debit Card
                    </p>
                    <p class="mt-0.5 text-xs text-[#806d6d] sm:text-sm">
                      Visa, Mastercard, RuPay
                    </p>
                  </div>
                </label>

                <!-- CARD DETAILS -->

                <div
                  v-if="paymentMethod === 'card'"
                  class="mt-3.5 space-y-3 sm:space-y-4"
                >
                  <!-- CARD NUMBER -->

                  <div>
                    <label
                      class="mb-1.5 block text-xs font-medium text-[#493838] sm:text-sm"
                    >
                      Card Number
                    </label>
                    <input
                      v-model="paymentDetails.cardNumber"
                      type="text"
                      inputmode="numeric"
                      autocomplete="cc-number"
                      placeholder="1234 5678 9012 3456"
                      maxlength="19"
                      class="w-full rounded-xl border border-[#dfceca] bg-white px-3.5 py-3 text-sm outline-none focus:border-[#9b4056] focus:ring-1 focus:ring-[#9b4056] sm:px-4"
                    />
                  </div>

                  <!-- EXPIRY + CVV -->

                  <div class="grid grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label
                        class="mb-1.5 block text-xs font-medium text-[#493838] sm:text-sm"
                      >
                        Expiry Date
                      </label>
                      <input
                        v-model="paymentDetails.expiry"
                        type="text"
                        inputmode="numeric"
                        autocomplete="cc-exp"
                        placeholder="MM/YY"
                        maxlength="5"
                        class="w-full rounded-xl border border-[#dfceca] bg-white px-3.5 py-3 text-sm outline-none focus:border-[#9b4056] focus:ring-1 focus:ring-[#9b4056] sm:px-4"
                      />
                    </div>

                    <div>
                      <label
                        class="mb-1.5 block text-xs font-medium text-[#493838] sm:text-sm"
                      >
                        CVV
                      </label>
                      <input
                        v-model="paymentDetails.cvv"
                        type="password"
                        inputmode="numeric"
                        autocomplete="cc-csc"
                        placeholder="123"
                        maxlength="3"
                        class="w-full rounded-xl border border-[#dfceca] bg-white px-3.5 py-3 text-sm outline-none focus:border-[#9b4056] focus:ring-1 focus:ring-[#9b4056] sm:px-4"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <!-- COD -->

              <div
                class="rounded-xl border p-3.5 transition sm:p-4"
                :class="
                  paymentMethod === 'cod'
                    ? 'border-[#9b4056] bg-[#fff7f8]'
                    : 'border-[#eadedb] hover:border-[#9b4056]'
                "
              >
                <label class="flex cursor-pointer items-start gap-3">
                  <input
                    v-model="paymentMethod"
                    type="radio"
                    value="cod"
                    class="mt-1 accent-[#9b4056]"
                  />
                  <div class="min-w-0">
                    <p
                      class="text-sm font-semibold text-[#302525] sm:text-base"
                    >
                      Cash on Delivery
                    </p>
                    <p class="mt-0.5 text-xs text-[#806d6d] sm:text-sm">
                      Pay when your order arrives
                    </p>
                  </div>
                </label>
              </div>
            </div>

            <!-- SUBMIT -->

            <button
              type="submit"
              :disabled="processing"
              class="mt-6 w-full rounded-full bg-[#9b4056] py-3.5 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(155,64,86,0.16)] transition hover:bg-[#84354a] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60 sm:mt-8 sm:py-4 sm:text-lg"
            >
              {{
                processing
                  ? "Processing Payment..."
                  : paymentMethod === "cod"
                    ? `Place Order • ₹${cartTotal.toLocaleString("en-IN")}`
                    : `Pay ₹${cartTotal.toLocaleString("en-IN")}`
              }}
            </button>

            <p class="mt-3 text-center text-[11px] text-[#a08d8a] sm:text-xs">
              Your order details are securely submitted to MAAD Fashions.
            </p>
          </form>
        </div>

        <!-- RIGHT -->

        <div
          class="h-fit rounded-2xl border border-[#eadedb] bg-white p-4 shadow-[0_8px_30px_rgba(80,40,45,0.04)] sm:p-6 lg:sticky lg:top-28"
        >
          <div class="flex items-center justify-between">
            <h2
              class="font-serif text-xl font-semibold text-[#302525] sm:text-2xl"
            >
              Order Summary
            </h2>
            <span
              class="rounded-full bg-[#fff4f5] px-2.5 py-1 text-[10px] font-semibold text-[#9b4056] sm:text-xs"
            >
              {{ cartItems.length }}
              {{ cartItems.length === 1 ? "item" : "items" }}
            </span>
          </div>

          <!-- CART ITEMS -->

          <div class="mt-5 space-y-3 sm:mt-6 sm:space-y-4">
            <div
              v-for="item in cartItems"
              :key="item.id"
              class="flex items-center justify-between gap-3 border-b border-[#eee1de] pb-3 sm:pb-4"
            >
              <div class="min-w-0">
                <p
                  class="truncate text-sm font-medium text-[#302525] sm:text-base"
                >
                  {{ item.name }}
                </p>
                <p class="mt-0.5 text-xs text-[#806d6d] sm:text-sm">
                  Qty: {{ item.quantity }}
                </p>
              </div>
              <p
                class="shrink-0 text-sm font-semibold text-[#913c52] sm:text-base"
              >
                ₹{{
                  (Number(item.price) * Number(item.quantity)).toLocaleString(
                    "en-IN",
                  )
                }}
              </p>
            </div>
          </div>

          <!-- SUBTOTAL -->

          <div
            class="mt-5 flex justify-between border-b border-[#eee1de] pb-3.5 sm:mt-6 sm:pb-4"
          >
            <span class="text-sm text-[#806d6d]">Subtotal</span>
            <span class="text-sm font-medium sm:text-base">
              ₹{{ cartTotal.toLocaleString("en-IN") }}
            </span>
          </div>

          <!-- DELIVERY -->

          <div class="flex justify-between py-3.5 sm:py-4">
            <span class="text-sm text-[#806d6d]">Delivery</span>
            <span class="text-sm font-semibold text-green-600">FREE</span>
          </div>

          <!-- TOTAL -->

          <div
            class="flex items-center justify-between border-t border-[#eee1de] pt-4 sm:pt-5"
          >
            <span class="text-base font-semibold text-[#302525] sm:text-xl">
              Total
            </span>
            <span class="text-lg font-bold text-[#913c52] sm:text-xl">
              ₹{{ cartTotal.toLocaleString("en-IN") }}
            </span>
          </div>

          <!-- DEMO PAYMENT -->

          <div
            class="mt-5 rounded-xl bg-[#fff4e6] p-3 text-center text-[11px] leading-5 text-[#8a6237] sm:mt-6 sm:text-sm"
          >
            Demo payment — no real money will be charged.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, unref } from "vue";
import { useRouter } from "vue-router";
import { useCart } from "../context/CartContext.js";

const router = useRouter();
const { cartItems, cartTotal } = useCart();

/* CUSTOMER */

const customer = reactive({
  name: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  state: "",
  pincode: "",
});

/* PAYMENT METHOD */

const paymentMethod = ref("upi");

/* PAYMENT DETAILS */

const paymentDetails = reactive({
  upiId: "",
  cardNumber: "",
  expiry: "",
  cvv: "",
});

/* PROCESSING */

const processing = ref(false);

/* ACCESS TOKEN */

function getAccessToken() {
  return (
    localStorage.getItem("accessToken") || sessionStorage.getItem("accessToken")
  );
}

/* SAVE CHECKOUT */

function saveCheckoutDetails() {
  sessionStorage.setItem(
    "checkoutDetails",
    JSON.stringify({
      name: customer.name,
      email: customer.email,
      phone: customer.phone,
      address: customer.address,
      city: customer.city,
      state: customer.state,
      pincode: customer.pincode,
    }),
  );
}

/* HANDLE PAYMENT */

async function handlePayment() {
  if (processing.value) {
    return;
  }

  /* DELIVERY VALIDATION */

  const { name, email, phone, address, city, state, pincode } = customer;

  if (!name || !email || !phone || !address || !city || !state || !pincode) {
    alert("Please fill in all delivery details.");
    return;
  }

  /* UPI VALIDATION */

  if (paymentMethod.value === "upi" && !paymentDetails.upiId.trim()) {
    alert("Please enter your UPI ID.");
    return;
  }

  /* CARD VALIDATION */

  if (
    paymentMethod.value === "card" &&
    (!paymentDetails.cardNumber.trim() ||
      !paymentDetails.expiry.trim() ||
      !paymentDetails.cvv.trim())
  ) {
    alert("Please enter all card details.");
    return;
  }

  /* CHECK LOGIN */

  const accessToken = getAccessToken();

  if (!accessToken) {
    alert("Please login to place your order.");
    localStorage.setItem("redirectAfterLogin", "/checkout");
    saveCheckoutDetails();
    router.push("/login");
    return;
  }

  /* CHECK CART */

  const items = unref(cartItems);

  if (!items || items.length === 0) {
    alert("Your cart is empty.");
    router.push("/cart");
    return;
  }

  processing.value = true;

  try {
    /* ORDER DATA */

    const orderData = {
      customer: {
        name: customer.name.trim(),
        email: customer.email.trim().toLowerCase(),
        phone: customer.phone.trim(),
        address: customer.address.trim(),
        city: customer.city.trim(),
        state: customer.state.trim(),
        pincode: customer.pincode.trim(),
      },
      items: items.map((item) => ({
        id: Number(item.id),
        quantity: Number(item.quantity),
      })),
      paymentMethod: paymentMethod.value,
    };

    console.log("Sending order to backend:", orderData);

    /* CREATE ORDER */

    const API_URL = (
      import.meta.env.VITE_API_URL || "http://localhost:3000"
    ).replace(/\/$/, "");

    const response = await fetch(`${API_URL}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(orderData),
    });

    let data = {};

    try {
      data = await response.json();
    } catch {
      data = {};
    }

    /* BACKEND ERROR */

    if (!response.ok) {
      throw new Error(
        Array.isArray(data.message)
          ? data.message[0]
          : data.message || "Unable to create order.",
      );
    }

    console.log("Order created successfully:", data);

    /* SUCCESS DATA */

    const successOrder = {
      orderId: data.orderNumber,
      customer: {
        name: data.shippingName,
        email: data.shippingEmail,
        phone: data.shippingPhone,
        address: data.address,
        city: data.city,
        state: data.state,
        pincode: data.postalCode,
      },
      items: (data.items || []).map((item) => ({
        id: item.productId,
        name: item.product?.name || "Product",
        price: Number(item.price),
        quantity: Number(item.quantity),
      })),
      paymentMethod: paymentMethod.value,
      amount: Number(data.totalAmount),
      orderDate: data.createdAt,
      cartCleared: false,
    };

    /* SAVE ORDER */

    sessionStorage.setItem("maadOrder", JSON.stringify(successOrder));

    /* SUCCESS AUDIO */

    try {
      const audio = new Audio("/sounds/order-success.mp3");
      audio.volume = 0.8;
      audio.preload = "auto";
      audio.play().catch((error) => {
        console.warn("MAAD Fashions sound could not play:", error);
      });
      window.__maadOrderSound = audio;
    } catch (error) {
      console.warn("Order success sound failed:", error);
    }

    /* PAYMENT SUCCESS */

    setTimeout(async () => {
      try {
        await router.push({
          path: "/payment-success",
          state: {
            usr: successOrder,
          },
        });
      } catch (error) {
        console.error("Payment success navigation failed:", error);
        window.location.href = "/payment-success";
      } finally {
        processing.value = false;
      }
    }, 1000);
  } catch (error) {
    console.error("Order creation error:", error);
    processing.value = false;
    alert(
      error.message ||
        "Something went wrong while creating your order. Please try again.",
    );
  }
}
</script>
