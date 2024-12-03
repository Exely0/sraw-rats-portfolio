import { defineStore } from "pinia";
import { ref } from "vue";

export const useHyperspaceStore = defineStore("hyperspace", () => {
  const triggerHyperspaceChan = ref(false);

  return {
    triggerHyperspaceChan,
  };
});
