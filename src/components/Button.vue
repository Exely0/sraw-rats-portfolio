<template>
  <div
    class="group relative aspect-square w-[175px] md:w-[250px] hover:cursor-pointer"
    @click="handleClick"
  >
    <div
      class="bg-black-500 group absolute z-10 flex aspect-square w-10/12 translate-x-5 translate-y-5 md:translate-x-10 md:translate-y-10 cursor-pointer items-center justify-center overflow-hidden border-2 border-yellow-500 bg-black text-5xl font-semibold text-white transition-all duration-150 group-hover:translate-x-0 group-hover:translate-y-0"
      ref="textContainer"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
    >
      <slot></slot>
      <a
        href="mailto:lorris.pons@epitech.eu"
        v-if="text == 'mail'"
        class="absolute h-full w-full"
      ></a>
      <div
        ref="dynamicBg"
        class="absolute -z-10 h-0 w-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500 transition-all duration-500 group-hover:h-[300%] group-hover:w-[300%]"
      ></div>
    </div>
    <div
      class="absolute z-0 aspect-square w-10/12 border-2 border-yellow-500 transition-all duration-300 md:group-hover:translate-x-10 md:group-hover:translate-y-10 group-hover:translate-x-5 group-hover:translate-y-5"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useHyperspaceStore } from "../store/hyperspace";
import { useSettingsStore } from "../store/settings";
import { storeToRefs } from "pinia";

interface ButtonProps {
  text: string;
  url: string;
}

const emit = defineEmits(["fade-away"]);

const hyperspaceStore = useHyperspaceStore();
const settingsStore = useSettingsStore();
const { hyperspaceEnabled } = storeToRefs(settingsStore);
const props = defineProps<ButtonProps>();

const textContainer = ref<HTMLDivElement | null>(null);
const dynamicBg = ref<HTMLDivElement | null>(null);

const handleMouseEnter = (event: MouseEvent) => {
  if (!textContainer.value || !dynamicBg.value) return;

  const container = textContainer.value;
  const bg = dynamicBg.value;

  const rect = container.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  bg.style.left = `${x}px`;
  bg.style.top = `${y}px`;
};

const handleMouseLeave = (event: MouseEvent) => {
  if (!textContainer.value || !dynamicBg.value) return;

  const container = textContainer.value;
  const bg = dynamicBg.value;

  const rect = container.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  bg.style.left = `${x}px`;
  bg.style.top = `${y}px`;
};

const handleClick = () => {
  if (props.text == "mail") {
    return;
  }
  if (hyperspaceEnabled.value) {
    hyperspaceStore.triggerHyperspaceChan = true;
    emit("fade-away", true);

    setTimeout(() => {
      window.open(props.url, "_blank");
    }, 2100);
  } else {
    window.open(props.url, "_blank");
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,100..900;1,100..900&family=Oswald:wght@200..700&display=swap");
</style>
