<template>
  <span class="material-symbols-outlined" :style="{ fontSize, color }">
    {{ name }}
  </span>
</template>

<script setup lang="ts">
defineProps({
  name: {
    type: String,
    required: true,
  },
  fontSize: {
    type: String,
    default: "24px",
  },
  color: {
    type: String,
    default: "black",
  },
});
</script>

<style scoped></style>
