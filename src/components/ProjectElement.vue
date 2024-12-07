<template>
  <div
    :class="`proj-el h-full overflow-hidden rounded-md border-2 border-[#fdbf13] transition-all p-6`"
  >
    <a
      :href="link"
      class="flex h-full flex-col items-center justify-center rounded-md p-6"
    >
      <h3 class="mb-2 text-center text-xl font-semibold text-[#fdbf13]">
        {{ title }}
      </h3>
      <p class="text-md text-white">{{ description }}</p>
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
});
</script>

<style scoped></style>
