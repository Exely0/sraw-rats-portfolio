<template>
  <div
    :class="`proj-el h-full transition-all group-hover:-translate-x-3 ${props.color} overflow-hidden rounded-md`"
  >
    <a
      :href="link"
      class="flex h-full flex-col items-center justify-center rounded-md p-6 shadow-md hover:shadow-lg"
    >
      <h3 class="mb-2 text-lg font-semibold">{{ title }}</h3>
      <p class="text-sm text-gray-700">{{ description }}</p>
    </a>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
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
  color: {
    type: String,
    required: true,
  },
});
</script>

<style scoped></style>
