<template>
  <div
    class="min-h-screen overflow-x-hidden bg-[#fffaf8] px-4 pb-20 pt-24 text-[#302525] sm:px-6 sm:py-12 lg:pb-0"
  >
    <!-- CELEBRATION -->
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

        ```
        <div class="celebration-content">
          <div class="celebration-circle">
            <span class="checkmark">✓</span>
          </div>

          <h1 class="celebration-title">Order Placed!</h1>

          <p class="celebration-text">
            Thank you for shopping with
            <strong>MAAD FASHIONS</strong> ❤️
          </p>

          <p class="celebration-subtext">
            Your order has been successfully placed.
          </p>

          <div class="celebration-order">
            <span>Order ID</span>

            <strong>
              {{ orderId }}
            </strong>
          </div>
        </div>
      </div>
    </Transition>

    <!-- MAIN CONTENT -->
    <div class="mx-auto w-full max-w-4xl">
      <!-- PAGE HEADER -->
      <div class="text-center">
        <div
          class="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 sm:h-20 sm:w-20"
        >
          <span class="text-3xl font-bold text-green-600 sm:text-4xl"> ✓ </span>
        </div>

        <p
          class="mt-5 text-[11px] font-semibold tracking-[0.25em] text-[#9b4056] sm:mt-6 sm:text-sm sm:tracking-[0.3em]"
        >
          MAAD FASHIONS
        </p>

        <h1
          class="mt-2 font-serif text-3xl font-bold leading-tight text-[#302525] sm:mt-3 sm:text-5xl"
        >
          Order Confirmed
        </h1>

        <p
          class="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#806d6d] sm:mt-4 sm:text-lg"
        >
          Thank you for shopping with MAAD FASHIONS.
        </p>

        <p class="mt-1 text-sm leading-6 text-[#806d6d] sm:mt-2">
          Your order has been successfully placed.
        </p>
      </div>

      <!-- ORDER ID -->
      <div
        class="mt-7 rounded-2xl border border-[#eadedb] bg-white p-5 text-center shadow-sm sm:mt-10 sm:p-6"
      >
        <p class="text-xs text-[#806d6d] sm:text-sm">Order ID</p>

        <h2
          class="mt-2 break-all text-xl font-bold tracking-wider text-[#9b4056] sm:text-2xl"
        >
          {{ orderId }}
        </h2>

        <p class="mt-2 text-xs text-[#806d6d] sm:text-sm">
          {{ orderDate }}
        </p>
      </div>

      <!-- DELIVERY DETAILS -->
      <div
        class="mt-4 rounded-2xl border border-[#eadedb] bg-white p-5 shadow-sm sm:mt-6 sm:p-8"
      >
        <h2 class="font-serif text-xl font-semibold text-[#302525] sm:text-2xl">
          Delivery Details
        </h2>

        <div class="mt-5 grid gap-4 sm:mt-6 sm:gap-6 md:grid-cols-2">
          <!-- CUSTOMER -->
          <div>
            <p class="text-xs text-[#806d6d] sm:text-sm">Customer</p>

            <p
              class="mt-1 break-words text-sm font-semibold text-[#302525] sm:text-base"
            >
              {{ customer.name || "Customer" }}
            </p>
          </div>

          <!-- PHONE -->
          <div>
            <p class="text-xs text-[#806d6d] sm:text-sm">Phone</p>

            <p
              class="mt-1 break-words text-sm font-semibold text-[#302525] sm:text-base"
            >
              {{ customer.phone || "Not provided" }}
            </p>
          </div>

          <!-- EMAIL -->
          <div>
            <p class="text-xs text-[#806d6d] sm:text-sm">Email</p>

            <p
              class="mt-1 break-all text-sm font-semibold text-[#302525] sm:text-base"
            >
              {{ customer.email || "Not provided" }}
            </p>
          </div>

          <!-- PAYMENT -->
          <div>
            <p class="text-xs text-[#806d6d] sm:text-sm">Payment Method</p>

            <p
              class="mt-1 break-words text-sm font-semibold uppercase text-[#302525] sm:text-base"
            >
              {{ formattedPaymentMethod }}
            </p>
          </div>
        </div>

        <!-- ADDRESS -->
        <div class="mt-5 border-t border-[#eee1de] pt-5 sm:mt-6 sm:pt-6">
          <p class="text-xs text-[#806d6d] sm:text-sm">Delivery Address</p>

          <p
            class="mt-1 text-sm font-semibold leading-6 text-[#302525] sm:text-base sm:leading-7"
          >
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

      <!-- ORDERED ITEMS -->
      <div
        v-if="items.length > 0"
        class="mt-4 rounded-2xl border border-[#eadedb] bg-white p-5 shadow-sm sm:mt-6 sm:p-8"
      >
        <h2 class="font-serif text-xl font-semibold text-[#302525] sm:text-2xl">
          Ordered Items
        </h2>

        <div class="mt-5 space-y-0 sm:mt-6">
          <div
            v-for="item in items"
            :key="item.id"
            class="flex items-center justify-between gap-3 border-b border-[#eee1de] py-4 first:pt-0 last:border-b-0 last:pb-0"
          >
            <!-- PRODUCT -->
            <div class="min-w-0 flex-1">
              <p
                class="truncate text-sm font-semibold text-[#302525] sm:text-base"
              >
                {{ item.name }}
              </p>

              <p class="mt-1 text-xs text-[#806d6d] sm:text-sm">
                Quantity: {{ item.quantity }}
              </p>
            </div>

            <!-- PRICE -->
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
      </div>

      <!-- PAYMENT SUMMARY -->
      <div
        class="mt-4 rounded-2xl border border-[#eadedb] bg-white p-5 shadow-sm sm:mt-6 sm:p-8"
      >
        <h2 class="font-serif text-xl font-semibold text-[#302525] sm:text-2xl">
          Payment Summary
        </h2>

        <div class="mt-5 space-y-4 sm:mt-6">
          <!-- PAYMENT METHOD -->
          <div
            class="flex items-start justify-between gap-4 text-sm sm:text-base"
          >
            <span class="text-[#806d6d]"> Payment Method </span>

            <span
              class="max-w-[55%] text-right font-semibold uppercase text-[#302525]"
            >
              {{ formattedPaymentMethod }}
            </span>
          </div>

          <!-- DELIVERY -->
          <div
            class="flex items-center justify-between gap-4 text-sm sm:text-base"
          >
            <span class="text-[#806d6d]"> Delivery </span>

            <span class="font-semibold text-green-600"> FREE </span>
          </div>

          <!-- TOTAL -->
          <div
            class="flex items-center justify-between gap-4 border-t border-[#eee1de] pt-4 sm:pt-5"
          >
            <span class="text-base font-semibold text-[#302525] sm:text-xl">
              Total
            </span>

            <span class="text-lg font-bold text-[#913c52] sm:text-xl">
              ₹{{ amount.toLocaleString("en-IN") }}
            </span>
          </div>
        </div>
      </div>

      <!-- ACTION BUTTONS -->
      <div
        class="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:justify-center sm:gap-4"
      >
        <RouterLink
          to="/"
          class="rounded-full bg-[#9b4056] px-7 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-[#84354a] sm:px-8 sm:py-4 sm:text-base"
        >
          Continue Shopping
        </RouterLink>

        <RouterLink
          to="/dresses"
          class="rounded-full border border-[#9b4056] px-7 py-3.5 text-center text-sm font-semibold text-[#9b4056] transition hover:bg-[#fff0f3] sm:px-8 sm:py-4 sm:text-base"
        >
          Browse Dresses
        </RouterLink>
      </div>

      <!-- FOOTNOTE -->
      <p
        class="mx-auto mt-6 max-w-lg pb-4 text-center text-xs leading-5 text-[#806d6d] sm:mt-8 sm:text-sm"
      >
        We will use your provided contact details for order updates.
      </p>
    </div>
    ```
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useCart } from "../context/CartContext.js";

/* CART */
const { clearCart } = useCart();

/* CELEBRATION */
const showCelebration = ref(true);

/* ORDER DETAILS */
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

/* ORDER ID */
const orderId = computed(() => {
  return (
    orderDetails.value?.orderId || `MAAD-${Date.now().toString().slice(-6)}`
  );
});

/* DATE */
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

/* CUSTOMER */
const customer = computed(() => {
  return orderDetails.value?.customer || {};
});

/* ITEMS */
const items = computed(() => {
  return orderDetails.value?.items || [];
});

/* PAYMENT METHOD */
const paymentMethod = computed(() => {
  return orderDetails.value?.paymentMethod || "upi";
});

/* AMOUNT */
const amount = computed(() => {
  return Number(orderDetails.value?.amount || 0);
});

/* PAYMENT NAME */
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

/* CONFETTI */
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

/* PAGE LOAD */
onMounted(() => {
  console.log("✅ Payment Success page loaded");

  /* CHECK ORDER */
  const order = orderDetails.value;

  if (!order || !order.orderId) {
    console.warn("No MAAD order found.");
  } else {
    console.log("✅ Order:", order);
  }

  /* SOUND */
  /* Checkout.vue already started the sound.
     Do not create another audio here. */

  if (window.__maadOrderSound) {
    console.log("✅ MAAD Fashions sound is active");
  }

  /* CELEBRATION */
  setTimeout(() => {
    showCelebration.value = false;
  }, 3500);

  /* CLEAR CART */
  if (order && order.orderId && !order.cartCleared) {
    try {
      clearCart();

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
/* CELEBRATION OVERLAY */

.celebration-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;

  padding: 20px;

  background: rgba(255, 250, 248, 0.97);
}

.celebration-content {
  position: relative;
  z-index: 2;

  width: 100%;
  max-width: 650px;

  padding: 24px;

  text-align: center;

  animation: celebrationPop 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

/* CHECK CIRCLE */

.celebration-circle {
  width: 105px;
  height: 105px;

  margin: auto;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background: #9b4056;

  box-shadow:
    0 0 0 10px rgba(155, 64, 86, 0.12),
    0 20px 60px rgba(155, 64, 86, 0.35);

  animation: circlePulse 1.2s ease-in-out infinite;
}

.checkmark {
  color: white;

  font-size: 58px;
  font-weight: bold;

  animation: checkAppear 0.7s ease-out;
}

/* TEXT */

.celebration-title {
  margin-top: 26px;

  font-family: Georgia, serif;

  font-size: 44px;
  line-height: 1.1;

  font-weight: 700;

  color: #302525;
}

.celebration-text {
  margin-top: 12px;

  font-size: 18px;
  line-height: 1.6;

  color: #806d6d;
}

.celebration-text strong {
  color: #302525;
}

.celebration-subtext {
  margin-top: 6px;

  font-size: 14px;
  line-height: 1.5;

  color: #9b8888;
}

/* ORDER ID */

.celebration-order {
  display: flex;
  flex-direction: column;
  gap: 4px;

  margin: 22px auto 0;

  width: fit-content;
  max-width: 100%;

  padding: 9px 20px;

  border-radius: 999px;

  background: white;

  box-shadow: 0 8px 25px rgba(80, 40, 40, 0.08);
}

.celebration-order span {
  font-size: 11px;
  color: #9b8888;
}

.celebration-order strong {
  max-width: 280px;

  overflow: hidden;
  text-overflow: ellipsis;

  color: #9b4056;

  font-size: 13px;

  letter-spacing: 1.5px;
}

/* CONFETTI */

.confetti {
  position: absolute;

  top: -40px;

  font-size: 24px;

  color: #9b4056;

  animation-name: confettiFall;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
}

/* ANIMATIONS */

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

/* TRANSITION */

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

/* MOBILE */

@media (max-width: 640px) {
  .celebration-overlay {
    padding: 16px;
  }

  .celebration-content {
    padding: 16px;
  }

  .celebration-circle {
    width: 88px;
    height: 88px;

    box-shadow:
      0 0 0 8px rgba(155, 64, 86, 0.12),
      0 15px 40px rgba(155, 64, 86, 0.3);
  }

  .checkmark {
    font-size: 48px;
  }

  .celebration-title {
    margin-top: 22px;
    font-size: 36px;
  }

  .celebration-text {
    margin-top: 10px;
    font-size: 15px;
  }

  .celebration-subtext {
    font-size: 13px;
  }

  .celebration-order {
    margin-top: 18px;
    padding: 8px 17px;
  }

  .confetti {
    font-size: 18px;
  }
}
</style>
