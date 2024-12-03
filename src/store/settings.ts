import { defineStore } from "pinia";
import { ref } from "vue";

export const useSettingsStore = defineStore("settings", () => {
  const hyperspaceEnabled = ref(true);
  const movingStars = ref(true);

  return {
    hyperspaceEnabled,
    movingStars,
  };
});
