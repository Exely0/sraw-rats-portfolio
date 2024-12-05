<template>
  <div class="group h-full">
    <div
      class="h-full border border-green-500 transition-all group-hover:-translate-x-3 group-hover:-translate-y-3"
    >
      <a
        :href="link"
        class="block h-full rounded-md bg-white p-4 shadow-md hover:shadow-lg"
      >
        <h3 class="mb-2 text-lg font-semibold">{{ title }}</h3>
        <p class="text-sm text-gray-600">{{ description }}</p>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  link: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const handleClick = (ele) => {};
</script>

<style scoped></style>
