<template>
  <div class="min-h-screen bg-[#fffaf8] px-4 pt-24 py-8 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-6xl">
      <div class="mb-10 text-center">
        <p class="text-sm font-semibold tracking-[0.3em] text-[#9b4056]">
          MAAD FASHIONS
        </p>

        <h1
          class="mt-2 font-serif text-4xl font-bold text-[#302525] sm:text-5xl"
        >
          Checkout
        </h1>

        <p class="mt-3 text-[#806d6d]">Complete your order</p>
      </div>

      <div class="grid gap-8 lg:grid-cols-3">
        <div
          class="rounded-2xl border border-[#eadedb] bg-white p-5 sm:p-8 lg:col-span-2"
        >
          <form @submit.prevent="handlePayment">
            <h2 class="mb-6 font-serif text-2xl font-semibold text-[#302525]">
              Delivery Details
            </h2>

            <div class="mb-5">
              <label class="mb-2 block font-medium text-[#493838]">
                Full Name
              </label>

              <input
                v-model="customer.name"
                type="text"
                placeholder="Enter your full name"
                class="w-full rounded-lg border border-[#dfceca] px-4 py-3 outline-none transition focus:border-[#9b4056] focus:ring-1 focus:ring-[#9b4056]"
              />
            </div>

            <div class="mb-5">
              <label class="mb-2 block font-medium text-[#493838]">
                Email Address
              </label>

              <input
                v-model="customer.email"
                type="email"
                placeholder="Enter your email"
                class="w-full rounded-lg border border-[#dfceca] px-4 py-3 outline-none transition focus:border-[#9b4056] focus:ring-1 focus:ring-[#9b4056]"
              />
            </div>

            <div class="mb-5">
              <label class="mb-2 block font-medium text-[#493838]">
                Phone Number
              </label>

              <input
                v-model="customer.phone"
                type="tel"
                placeholder="Enter your phone number"
                class="w-full rounded-lg border border-[#dfceca] px-4 py-3 outline-none transition focus:border-[#9b4056] focus:ring-1 focus:ring-[#9b4056]"
              />
            </div>

            <div class="mb-5">
              <label class="mb-2 block font-medium text-[#493838]">
                Address
              </label>

              <textarea
                v-model="customer.address"
                rows="3"
                placeholder="House number, street, area"
                class="w-full resize-none rounded-lg border border-[#dfceca] px-4 py-3 outline-none transition focus:border-[#9b4056] focus:ring-1 focus:ring-[#9b4056]"
              ></textarea>
            </div>

            <div class="grid gap-5 md:grid-cols-3">
              <div>
                <label class="mb-2 block font-medium text-[#493838]">
                  City
                </label>

                <input
                  v-model="customer.city"
                  type="text"
                  placeholder="City"
                  class="w-full rounded-lg border border-[#dfceca] px-4 py-3 outline-none focus:border-[#9b4056] focus:ring-1 focus:ring-[#9b4056]"
                />
              </div>

              <div>
                <label class="mb-2 block font-medium text-[#493838]">
                  State
                </label>

                <input
                  v-model="customer.state"
                  type="text"
                  placeholder="State"
                  class="w-full rounded-lg border border-[#dfceca] px-4 py-3 outline-none focus:border-[#9b4056] focus:ring-1 focus:ring-[#9b4056]"
                />
              </div>

              <div>
                <label class="mb-2 block font-medium text-[#493838]">
                  PIN Code
                </label>

                <input
                  v-model="customer.pincode"
                  type="text"
                  placeholder="PIN Code"
                  class="w-full rounded-lg border border-[#dfceca] px-4 py-3 outline-none focus:border-[#9b4056] focus:ring-1 focus:ring-[#9b4056]"
                />
              </div>
            </div>

            <h2
              class="mb-5 mt-10 font-serif text-2xl font-semibold text-[#302525]"
            >
              Payment Method
            </h2>

            <div class="space-y-3">
              <div
                class="rounded-xl border p-4 transition"
                :class="
                  paymentMethod === 'upi'
                    ? 'border-[#9b4056] bg-[#fff7f8]'
                    : 'border-[#eadedb] hover:border-[#9b4056]'
                "
              >
                <label class="flex cursor-pointer items-center gap-4">
                  <input v-model="paymentMethod" type="radio" value="upi" />

                  <div>
                    <p class="font-semibold text-[#302525]">UPI</p>

                    <p class="text-sm text-[#806d6d]">
                      Google Pay, PhonePe, Paytm
                    </p>
                  </div>
                </label>

                <div v-if="paymentMethod === 'upi'" class="mt-4">
                  <label class="mb-2 block text-sm font-medium text-[#493838]">
                    UPI ID
                  </label>

                  <input
                    v-model="paymentDetails.upiId"
                    type="text"
                    placeholder="example@upi"
                    class="w-full rounded-lg border border-[#dfceca] px-4 py-3 outline-none focus:border-[#9b4056]"
                  />
                </div>
              </div>

              <div
                class="rounded-xl border p-4 transition"
                :class="
                  paymentMethod === 'card'
                    ? 'border-[#9b4056] bg-[#fff7f8]'
                    : 'border-[#eadedb] hover:border-[#9b4056]'
                "
              >
                <label class="flex cursor-pointer items-center gap-4">
                  <input v-model="paymentMethod" type="radio" value="card" />

                  <div>
                    <p class="font-semibold text-[#302525]">
                      Credit / Debit Card
                    </p>

                    <p class="text-sm text-[#806d6d]">
                      Visa, Mastercard, RuPay
                    </p>
                  </div>
                </label>

                <div v-if="paymentMethod === 'card'" class="mt-4 space-y-4">
                  <div>
                    <label
                      class="mb-2 block text-sm font-medium text-[#493838]"
                    >
                      Card Number
                    </label>

                    <input
                      v-model="paymentDetails.cardNumber"
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      maxlength="19"
                      class="w-full rounded-lg border border-[#dfceca] px-4 py-3 outline-none focus:border-[#9b4056]"
                    />
                  </div>

                  <div class="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        class="mb-2 block text-sm font-medium text-[#493838]"
                      >
                        Expiry Date
                      </label>

                      <input
                        v-model="paymentDetails.expiry"
                        type="text"
                        placeholder="MM/YY"
                        maxlength="5"
                        class="w-full rounded-lg border border-[#dfceca] px-4 py-3 outline-none focus:border-[#9b4056]"
                      />
                    </div>

                    <div>
                      <label
                        class="mb-2 block text-sm font-medium text-[#493838]"
                      >
                        CVV
                      </label>

                      <input
                        v-model="paymentDetails.cvv"
                        type="password"
                        placeholder="123"
                        maxlength="3"
                        class="w-full rounded-lg border border-[#dfceca] px-4 py-3 outline-none focus:border-[#9b4056]"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="rounded-xl border p-4 transition"
                :class="
                  paymentMethod === 'cod'
                    ? 'border-[#9b4056] bg-[#fff7f8]'
                    : 'border-[#eadedb] hover:border-[#9b4056]'
                "
              >
                <label class="flex cursor-pointer items-center gap-4">
                  <input v-model="paymentMethod" type="radio" value="cod" />

                  <div>
                    <p class="font-semibold text-[#302525]">Cash on Delivery</p>

                    <p class="text-sm text-[#806d6d]">
                      Pay when your order arrives
                    </p>
                  </div>
                </label>
              </div>
            </div>

            <button
              type="submit"
              :disabled="processing"
              class="mt-8 w-full rounded-full bg-[#9b4056] py-4 text-lg font-semibold text-white transition hover:bg-[#84354a] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {{
                processing
                  ? "Processing Payment..."
                  : paymentMethod === "cod"
                    ? `Place Order • ₹${cartTotal.toLocaleString("en-IN")}`
                    : `Pay ₹${cartTotal.toLocaleString("en-IN")}`
              }}
            </button>
          </form>
        </div>

        <div class="h-fit rounded-2xl border border-[#eadedb] bg-white p-6">
          <h2 class="mb-6 font-serif text-2xl font-semibold text-[#302525]">
            Order Summary
          </h2>

          <div class="space-y-4">
            <div
              v-for="item in cartItems"
              :key="item.id"
              class="flex justify-between gap-4 border-b border-[#eee1de] pb-4"
            >
              <div>
                <p class="font-medium text-[#302525]">
                  {{ item.name }}
                </p>

                <p class="text-sm text-[#806d6d]">Qty: {{ item.quantity }}</p>
              </div>

              <p class="font-semibold text-[#913c52]">
                ₹{{ (item.price * item.quantity).toLocaleString("en-IN") }}
              </p>
            </div>
          </div>

          <div class="mt-6 flex justify-between border-b border-[#eee1de] pb-4">
            <span class="text-[#806d6d]"> Subtotal </span>

            <span class="font-medium">
              ₹{{ cartTotal.toLocaleString("en-IN") }}
            </span>
          </div>

          <div class="flex justify-between py-4">
            <span class="text-[#806d6d]"> Delivery </span>

            <span class="font-medium text-green-600"> FREE </span>
          </div>

          <div
            class="flex justify-between border-t border-[#eee1de] pt-5 text-xl"
          >
            <span class="font-semibold text-[#302525]"> Total </span>

            <span class="font-bold text-[#913c52]">
              ₹{{ cartTotal.toLocaleString("en-IN") }}
            </span>
          </div>

          <div
            class="mt-6 rounded-lg bg-[#fff4e6] p-3 text-center text-sm text-[#8a6237]"
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

const customer = reactive({
  name: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  state: "",
  pincode: "",
});

const paymentMethod = ref("upi");

const paymentDetails = reactive({
  upiId: "",
  cardNumber: "",
  expiry: "",
  cvv: "",
});

const processing = ref(false);

async function handlePayment() {
  if (processing.value) {
    return;
  }

  const { name, email, phone, address, city, state, pincode } = customer;

  if (!name || !email || !phone || !address || !city || !state || !pincode) {
    alert("Please fill in all delivery details.");
    return;
  }

  if (paymentMethod.value === "upi" && !paymentDetails.upiId) {
    alert("Please enter your UPI ID.");
    return;
  }

  if (
    paymentMethod.value === "card" &&
    (!paymentDetails.cardNumber ||
      !paymentDetails.expiry ||
      !paymentDetails.cvv)
  ) {
    alert("Please enter all card details.");
    return;
  }

  processing.value = true;

  try {
    const items = unref(cartItems);
    const total = unref(cartTotal);

    const orderId = `MAAD-${Date.now().toString().slice(-6)}`;

    const orderData = {
      orderId,

      customer: {
        name: customer.name,
        email: customer.email,
        phone: customer.phone,
        address: customer.address,
        city: customer.city,
        state: customer.state,
        pincode: customer.pincode,
      },

      items: (items || []).map((item) => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      })),

      paymentMethod: paymentMethod.value,

      amount: total || 0,

      orderDate: new Date().toISOString(),

      cartCleared: false,
    };

    sessionStorage.setItem("maadOrder", JSON.stringify(orderData));

    const audio = new Audio("/sounds/order-success.mp3");

    audio.volume = 0.8;
    audio.preload = "auto";

    audio.play().catch((error) => {
      console.warn("MAAD Fashions sound could not play:", error);
    });

    window.__maadOrderSound = audio;

    setTimeout(async () => {
      try {
        await router.push({
          path: "/payment-success",
          state: {
            usr: orderData,
          },
        });
      } catch (error) {
        console.error("Payment success navigation failed:", error);

        // Fallback navigation
        window.location.href = "/payment-success";
      } finally {
        processing.value = false;
      }
    }, 1000);
  } catch (error) {
    console.error("Order creation error:", error);

    processing.value = false;

    alert("Something went wrong while creating your order. Please try again.");
  }
}
</script>
