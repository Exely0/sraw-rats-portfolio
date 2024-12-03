<template>
  <MainLayout>
    <div class="flex min-h-screen w-full items-center justify-center">
      <div class="mb-[5%]">
        <embed :src="CV" :width="embedWidth" :height="embedHeight" />
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import MainLayout from "../layouts/MainLayout.vue";
import CV from "../assets/pdf/cv lorris pons.pdf";

const embedWidth = ref(0);
const embedHeight = ref(0);

const updateEmbedDimensions = () => {
  embedWidth.value = (2 * window.innerWidth) / 5;
  embedHeight.value = window.innerHeight * 0.7;
};

onMounted(() => {
  updateEmbedDimensions();
  window.addEventListener("resize", updateEmbedDimensions);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateEmbedDimensions);
});
</script>

<style scoped></style>
