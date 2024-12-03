<template>
  <div class="min-h-screen w-full">
    <controlBoard />
    <main>
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import controlBoard from "../components/controlBoard.vue";
</script>

<style scoped></style>
