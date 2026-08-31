<template>
  <div class="min-h-screen bg-[#fffaf8] px-4 pt-24 py-12 sm:px-6">
    <Transition name="celebration">
      <div v-if="showCelebration" class="celebration-overlay">
        <!-- CONFETTI -->

        <span
          v-for="n in 50"
          :key="n"
          class="confetti"
          :style="getConfettiStyle(n)"
        >
          ✦
        </span>

        <div class="celebration-content">
          <div class="celebration-circle">
            <span class="checkmark"> ✓ </span>
          </div>

          <h1 class="celebration-title">Order Placed!</h1>

          <p class="celebration-text">
            Thank you for shopping with

            <strong> MAAD FASHIONS </strong>

            ❤️
          </p>

          <p class="celebration-subtext">
            Your order has been successfully placed.
          </p>

          <div class="celebration-order">
            <span> Order ID </span>

            <strong>
              {{ orderId }}
            </strong>
          </div>
        </div>
      </div>
    </Transition>

    <div class="mx-auto max-w-4xl">
      <div class="text-center">
        <div
          class="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100"
        >
          <span class="text-4xl font-bold text-green-600"> ✓ </span>
        </div>

        <p class="mt-6 text-sm font-semibold tracking-[0.3em] text-[#9b4056]">
          MAAD FASHIONS
        </p>

        <h1
          class="mt-3 font-serif text-4xl font-bold text-[#302525] sm:text-5xl"
        >
          Order Confirmed
        </h1>

        <p class="mt-4 text-lg text-[#806d6d]">
          Thank you for shopping with MAAD FASHIONS.
        </p>

        <p class="mt-2 text-[#806d6d]">
          Your order has been successfully placed.
        </p>
      </div>

      <div
        class="mt-10 rounded-2xl border border-[#eadedb] bg-white p-6 text-center shadow-sm"
      >
        <p class="text-sm text-[#806d6d]">Order ID</p>

        <h2 class="mt-2 text-2xl font-bold tracking-wider text-[#9b4056]">
          {{ orderId }}
        </h2>

        <p class="mt-2 text-sm text-[#806d6d]">
          {{ orderDate }}
        </p>
      </div>

      <div
        class="mt-6 rounded-2xl border border-[#eadedb] bg-white p-6 shadow-sm sm:p-8"
      >
        <h2 class="font-serif text-2xl font-semibold text-[#302525]">
          Delivery Details
        </h2>

        <div class="mt-6 grid gap-6 md:grid-cols-2">
          <div>
            <p class="text-sm text-[#806d6d]">Customer</p>

            <p class="mt-1 font-semibold text-[#302525]">
              {{ customer.name || "Customer" }}
            </p>
          </div>

          <div>
            <p class="text-sm text-[#806d6d]">Phone</p>

            <p class="mt-1 font-semibold text-[#302525]">
              {{ customer.phone || "Not provided" }}
            </p>
          </div>

          <div>
            <p class="text-sm text-[#806d6d]">Email</p>

            <p class="mt-1 break-words font-semibold text-[#302525]">
              {{ customer.email || "Not provided" }}
            </p>
          </div>

          <div>
            <p class="text-sm text-[#806d6d]">Payment Method</p>

            <p class="mt-1 font-semibold uppercase text-[#302525]">
              {{ formattedPaymentMethod }}
            </p>
          </div>
        </div>

        <div class="mt-6 border-t border-[#eee1de] pt-6">
          <p class="text-sm text-[#806d6d]">Delivery Address</p>

          <p class="mt-1 leading-7 font-semibold text-[#302525]">
            {{ customer.address || "Not provided" }}

            <br />

            {{ customer.city || "" }}

            <span v-if="customer.city && customer.state"> , </span>

            {{ customer.state || "" }}

            <br />

            <span v-if="customer.pincode"> PIN: {{ customer.pincode }} </span>
          </p>
        </div>
      </div>

      <div
        v-if="items.length > 0"
        class="mt-6 rounded-2xl border border-[#eadedb] bg-white p-6 shadow-sm sm:p-8"
      >
        <h2 class="font-serif text-2xl font-semibold text-[#302525]">
          Ordered Items
        </h2>

        <div class="mt-6 space-y-4">
          <div
            v-for="item in items"
            :key="item.id"
            class="flex flex-col gap-3 border-b border-[#eee1de] pb-4 last:border-b-0 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <p class="font-semibold text-[#302525]">
                {{ item.name }}
              </p>

              <p class="mt-1 text-sm text-[#806d6d]">
                Quantity: {{ item.quantity }}
              </p>
            </div>

            <p class="font-semibold text-[#913c52]">
              ₹{{ (item.price * item.quantity).toLocaleString("en-IN") }}
            </p>
          </div>
        </div>
      </div>

      <div
        class="mt-6 rounded-2xl border border-[#eadedb] bg-white p-6 shadow-sm sm:p-8"
      >
        <h2 class="font-serif text-2xl font-semibold text-[#302525]">
          Payment Summary
        </h2>

        <div class="mt-6 space-y-4">
          <div class="flex justify-between gap-4">
            <span class="text-[#806d6d]"> Payment Method </span>

            <span class="text-right font-semibold uppercase text-[#302525]">
              {{ formattedPaymentMethod }}
            </span>
          </div>

          <div class="flex justify-between">
            <span class="text-[#806d6d]"> Delivery </span>

            <span class="font-semibold text-green-600"> FREE </span>
          </div>

          <div
            class="flex justify-between border-t border-[#eee1de] pt-5 text-xl"
          >
            <span class="font-semibold text-[#302525]"> Total </span>

            <span class="font-bold text-[#913c52]">
              ₹{{ amount.toLocaleString("en-IN") }}
            </span>
          </div>
        </div>
      </div>

      <div class="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
        <RouterLink
          to="/"
          class="rounded-full bg-[#9b4056] px-8 py-4 text-center font-semibold text-white transition hover:bg-[#84354a]"
        >
          Continue Shopping
        </RouterLink>

        <RouterLink
          to="/dresses"
          class="rounded-full border border-[#9b4056] px-8 py-4 text-center font-semibold text-[#9b4056] transition hover:bg-[#fff0f3]"
        >
          Browse Dresses
        </RouterLink>
      </div>

      <p class="mt-8 text-center text-sm text-[#806d6d]">
        We will use your provided contact details for order updates.
      </p>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useCart } from "../context/CartContext.js";

// =================================
// CART
// =================================

const { clearCart } = useCart();

// =================================
// CELEBRATION
// =================================

const showCelebration = ref(true);

// =================================
// ORDER DETAILS
// =================================

const orderDetails = computed(() => {
  try {
    const savedOrder = sessionStorage.getItem("maadOrder");

    if (!savedOrder) {
      return {};
    }

    return JSON.parse(savedOrder);
  } catch (error) {
    console.error("Could not load order details:", error);

    return {};
  }
});

// =================================
// ORDER ID
// =================================

const orderId = computed(() => {
  return (
    orderDetails.value?.orderId || `MAAD-${Date.now().toString().slice(-6)}`
  );
});

// =================================
// DATE
// =================================

const orderDate = computed(() => {
  const savedDate = orderDetails.value?.orderDate;

  if (savedDate) {
    return new Date(savedDate).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  }

  return new Date().toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
});

// =================================
// CUSTOMER
// =================================

const customer = computed(() => {
  return orderDetails.value?.customer || {};
});

// =================================
// ITEMS
// =================================

const items = computed(() => {
  return orderDetails.value?.items || [];
});

// =================================
// PAYMENT METHOD
// =================================

const paymentMethod = computed(() => {
  return orderDetails.value?.paymentMethod || "upi";
});

// =================================
// AMOUNT
// =================================

const amount = computed(() => {
  return Number(orderDetails.value?.amount || 0);
});

// =================================
// PAYMENT NAME
// =================================

const formattedPaymentMethod = computed(() => {
  if (paymentMethod.value === "cod") {
    return "Cash on Delivery";
  }

  if (paymentMethod.value === "upi") {
    return "UPI";
  }

  if (paymentMethod.value === "card") {
    return "Credit / Debit Card";
  }

  return paymentMethod.value;
});

// =================================
// CONFETTI
// =================================

function getConfettiStyle(index) {
  const left = Math.random() * 100;
  const delay = Math.random() * 0.5;
  const duration = 2.5 + Math.random() * 2;
  const rotation = Math.random() * 360;

  return {
    left: `${left}%`,
    animationDelay: `${delay}s`,
    animationDuration: `${duration}s`,
    transform: `rotate(${rotation}deg)`,
  };
}

// =================================
// PAGE LOAD
// =================================

onMounted(() => {
  console.log("✅ Payment Success page loaded");

  // =================================
  // CHECK ORDER
  // =================================

  const order = orderDetails.value;

  if (!order || !order.orderId) {
    console.warn("No MAAD order found.");
  } else {
    console.log("✅ Order:", order);
  }

  // =================================
  // SOUND
  // =================================
  // Checkout.vue already started the sound.
  // Do not create another audio here.

  if (window.__maadOrderSound) {
    console.log("✅ MAAD Fashions sound is active");
  }

  // =================================
  // CELEBRATION
  // =================================

  setTimeout(() => {
    showCelebration.value = false;
  }, 3500);

  // =================================
  // CLEAR CART
  // =================================

  if (order && order.orderId && !order.cartCleared) {
    try {
      clearCart();

      // Update sessionStorage
      const updatedOrder = {
        ...order,
        cartCleared: true,
      };

      sessionStorage.setItem("maadOrder", JSON.stringify(updatedOrder));

      console.log("✅ Cart cleared successfully");
    } catch (error) {
      console.error("Could not clear cart:", error);
    }
  }
});
</script>
<style scoped>
.celebration-overlay {
  position: fixed;

  inset: 0;

  z-index: 9999;

  display: flex;

  align-items: center;

  justify-content: center;

  overflow: hidden;

  background: rgba(255, 250, 248, 0.97);
}

.celebration-content {
  position: relative;

  z-index: 2;

  width: 100%;

  max-width: 650px;

  padding: 30px;

  text-align: center;

  animation: celebrationPop 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.celebration-circle {
  width: 125px;

  height: 125px;

  margin: auto;

  display: flex;

  align-items: center;

  justify-content: center;

  border-radius: 50%;

  background: #9b4056;

  box-shadow:
    0 0 0 12px rgba(155, 64, 86, 0.12),
    0 20px 60px rgba(155, 64, 86, 0.35);

  animation: circlePulse 1.2s ease-in-out infinite;
}

.checkmark {
  color: white;

  font-size: 70px;

  font-weight: bold;

  animation: checkAppear 0.7s ease-out;
}

.celebration-title {
  margin-top: 30px;

  font-family: Georgia, serif;

  font-size: 52px;

  font-weight: 700;

  color: #302525;
}

.celebration-text {
  margin-top: 14px;

  font-size: 20px;

  color: #806d6d;
}

.celebration-subtext {
  margin-top: 8px;

  font-size: 16px;

  color: #9b8888;
}

.celebration-order {
  display: flex;

  flex-direction: column;

  gap: 5px;

  margin: 25px auto 0;

  width: fit-content;

  padding: 10px 24px;

  border-radius: 999px;

  background: white;

  box-shadow: 0 8px 25px rgba(80, 40, 40, 0.08);
}

.celebration-order span {
  font-size: 12px;

  color: #9b8888;
}

.celebration-order strong {
  color: #9b4056;

  letter-spacing: 2px;
}

.confetti {
  position: absolute;

  top: -40px;

  font-size: 24px;

  color: #9b4056;

  animation-name: confettiFall;

  animation-timing-function: ease-out;

  animation-fill-mode: forwards;
}

@keyframes celebrationPop {
  0% {
    transform: scale(0.2) translateY(20px);

    opacity: 0;
  }

  60% {
    transform: scale(1.08) translateY(0);

    opacity: 1;
  }

  100% {
    transform: scale(1);

    opacity: 1;
  }
}

@keyframes circlePulse {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.07);
  }

  100% {
    transform: scale(1);
  }
}

@keyframes checkAppear {
  0% {
    transform: scale(0) rotate(-45deg);

    opacity: 0;
  }

  70% {
    transform: scale(1.2) rotate(10deg);

    opacity: 1;
  }

  100% {
    transform: scale(1) rotate(0);

    opacity: 1;
  }
}

@keyframes confettiFall {
  0% {
    transform: translateY(-20px) rotate(0deg);

    opacity: 1;
  }

  100% {
    transform: translateY(110vh) rotate(720deg);

    opacity: 0;
  }
}

.celebration-enter-active {
  transition: opacity 0.3s ease;
}

.celebration-leave-active {
  transition: opacity 0.5s ease;
}

.celebration-enter-from,
.celebration-leave-to {
  opacity: 0;
}

@media (max-width: 640px) {
  .celebration-circle {
    width: 95px;

    height: 95px;
  }

  .checkmark {
    font-size: 52px;
  }

  .celebration-title {
    font-size: 38px;
  }

  .celebration-text {
    font-size: 16px;
  }
}
</style>
