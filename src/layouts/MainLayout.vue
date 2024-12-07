<template>
  <div class="min-h-screen w-full">
    <controlBoard />
    <main class="main fade-in">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import { watch } from "vue";
import { storeToRefs } from "pinia";
import controlBoard from "../components/controlBoard.vue";
import { useHyperspaceStore } from "../store/hyperspace";
const hyperspaceStore = useHyperspaceStore();
const { triggerFadeAway } = storeToRefs(hyperspaceStore);

watch(triggerFadeAway, () => {
  const ele: HTMLElement = document.getElementsByTagName(
    "main",
  )[0] as unknown as HTMLElement;
  ele.classList.remove("fade-in");
  ele.classList.add("fade-away");
});
</script>

<style scoped>
.fade-away {
  animation: fade-away 1s ease-in;
  animation-fill-mode: forwards;
}

.fade-in {
  animation: fade-in 1s ease-in;
}

@keyframes fade-away {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
