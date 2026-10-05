<template>
  <div class="min-h-screen bg-gray-50 p-6">
    <!-- HEADER -->
    <div class="mb-6 flex items-center justify-between">
      <div>
        <h1 class="text-2xl font-semibold text-gray-900">Contact Messages</h1>
        <p class="mt-1 text-sm text-gray-500">
          Messages received from customers through the Contact Us page.
        </p>
      </div>

      <button
        type="button"
        @click="fetchMessages"
        :disabled="loading"
        class="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {{ loading ? "Refreshing..." : "Refresh" }}
      </button>
    </div>

    <!-- ERROR -->
    <div
      v-if="errorMessage"
      class="mb-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600"
    >
      {{ errorMessage }}
    </div>

    <!-- LOADING -->
    <div
      v-if="loading"
      class="rounded-xl border border-gray-200 bg-white p-10 text-center text-sm text-gray-500"
    >
      Loading messages...
    </div>

    <!-- EMPTY -->
    <div
      v-else-if="messages.length === 0"
      class="rounded-xl border border-gray-200 bg-white p-10 text-center"
    >
      <p class="text-base font-medium text-gray-800">
        No contact messages yet.
      </p>

      <p class="mt-1 text-sm text-gray-500">
        Customer messages will appear here when they submit the Contact Us form.
      </p>
    </div>

    <!-- TABLE -->
    <div
      v-else
      class="overflow-hidden rounded-xl border border-gray-200 bg-white"
    >
      <div class="overflow-x-auto">
        <table class="w-full min-w-[850px]">
          <thead class="border-b border-gray-200 bg-gray-50">
            <tr>
              <th
                class="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500"
              >
                Customer
              </th>

              <th
                class="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500"
              >
                Email
              </th>

              <th
                class="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500"
              >
                Message
              </th>

              <th
                class="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500"
              >
                Date
              </th>

              <th
                class="px-5 py-4 text-right text-xs font-semibold uppercase tracking-wide text-gray-500"
              >
                Action
              </th>
            </tr>
          </thead>

          <tbody class="divide-y divide-gray-100">
            <tr
              v-for="contact in messages"
              :key="contact.id"
              class="transition hover:bg-gray-50"
            >
              <td class="px-5 py-4 align-top">
                <p class="font-medium text-gray-900">
                  {{ contact.name }}
                </p>
              </td>

              <td class="px-5 py-4 align-top">
                <a
                  :href="`mailto:${contact.email}`"
                  class="text-sm text-gray-700 hover:underline"
                >
                  {{ contact.email }}
                </a>
              </td>

              <td class="max-w-[420px] px-5 py-4 align-top">
                <p
                  class="whitespace-pre-wrap break-words text-sm leading-6 text-gray-600"
                >
                  {{ contact.message }}
                </p>
              </td>

              <td
                class="whitespace-nowrap px-5 py-4 align-top text-sm text-gray-500"
              >
                {{ formatDate(contact.createdAt) }}
              </td>

              <td class="px-5 py-4 text-right align-top">
                <button
                  type="button"
                  @click="deleteMessage(contact.id)"
                  class="rounded-lg border border-red-200 px-3 py-2 text-sm font-medium text-red-600 transition hover:bg-red-50"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const API_URL = (
  import.meta.env.VITE_API_URL || "http://localhost:3000"
).replace(/\/$/, "");

const messages = ref([]);
const loading = ref(false);
const errorMessage = ref("");

const fetchMessages = async () => {
  loading.value = true;
  errorMessage.value = "";

  try {
    const response = await fetch(`${API_URL}/contact`);

    const data = await response.json().catch(() => []);

    if (!response.ok) {
      throw new Error(data?.message || "Unable to load contact messages.");
    }

    messages.value = Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Contact messages error:", error);

    errorMessage.value = error?.message || "Unable to load contact messages.";
  } finally {
    loading.value = false;
  }
};

const deleteMessage = async (id) => {
  const confirmed = window.confirm(
    "Are you sure you want to delete this message?",
  );

  if (!confirmed) {
    return;
  }

  try {
    const response = await fetch(`${API_URL}/contact/${id}`, {
      method: "DELETE",
    });

    const data = await response.json().catch(() => null);

    if (!response.ok) {
      throw new Error(data?.message || "Unable to delete this message.");
    }

    messages.value = messages.value.filter((message) => message.id !== id);
  } catch (error) {
    console.error("Delete contact message error:", error);

    errorMessage.value = error?.message || "Unable to delete the message.";
  }
};

const formatDate = (date) => {
  if (!date) {
    return "-";
  }

  return new Date(date).toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

onMounted(() => {
  fetchMessages();
});
</script>
