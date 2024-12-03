<template>
  <div class="z-50">
    <div class="fixed right-4 top-4 z-50">
      <div>
        <div class="text-white">Slow loading</div>
        <div
          class="relative box-content h-[35px] w-[80px] rounded-full border-2 border-[#fdbf13] bg-black hover:cursor-pointer"
          @click="hyperspaceEnabled = !hyperspaceEnabled"
        >
          <div
            :class="`absolute right-[4px] top-[4px] h-[28px] w-[28px] rounded-full transition-all duration-150 ${hyperspaceEnabled ? 'right-[4px] bg-green-500' : 'right-[48px] bg-red-500'}`"
          ></div>
        </div>
      </div>
      <div>
        <div class="text-white">Moving stars</div>
        <div
          class="relative box-content h-[35px] w-[80px] rounded-full border-2 border-[#fdbf13] bg-black hover:cursor-pointer"
          @click="
            () => {
              if (movingStars == true) {
                hyperspaceEnabled = false;
              }
              movingStars = !movingStars;
            }
          "
        >
          <div
            :class="`absolute right-[4px] top-[4px] h-[28px] w-[28px] rounded-full transition-all duration-150 ${movingStars ? 'right-[4px] bg-green-500' : 'right-[48px] bg-red-500'}`"
          ></div>
        </div>
      </div>
    </div>
    <div
      class="fixed bottom-0 left-1/2 z-50 flex h-32 origin-left -translate-x-1/2 items-center justify-center gap-3 [&>div]:aspect-square [&>div]:h-full"
    >
      <div class="triangle rotate-180 bg-[#fdbf13]"></div>

      <div
        v-for="(page, index) in pages"
        :key="index"
        class="bg-split group relative flex items-center justify-center border-y-4 border-[#fdbf13] text-2xl capitalize text-[#fdbf13] hover:cursor-pointer"
        @click="handleClick(page.route)"
      >
        {{ page.name }}
        <div
          class="triangle absolute -top-3/4 left-1/2 hidden aspect-square h-1/3 -translate-x-1/2 rotate-[225deg] bg-[#fdbf13] group-hover:block"
        ></div>
        <div
          class="triangle absolute left-0 top-0 aspect-square h-1/4 bg-[#fdbf13]"
        ></div>
        <div
          class="triangle absolute right-0 top-0 aspect-square h-1/4 rotate-90 bg-[#fdbf13]"
        ></div>
        <div
          class="triangle absolute bottom-0 left-0 aspect-square h-1/4 -rotate-90 bg-[#fdbf13]"
        ></div>
        <div
          class="triangle absolute bottom-0 right-0 aspect-square h-1/4 rotate-180 bg-[#fdbf13]"
        ></div>
      </div>
      <div class="triangle -rotate-90 bg-[#fdbf13]"></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import router from "../router";
import { useHyperspaceStore } from "../store/hyperspace";
import { useSettingsStore } from "../store/settings";
import { storeToRefs } from "pinia";

const hyperspaceStore = useHyperspaceStore();
const settingsStore = useSettingsStore();
const { hyperspaceEnabled, movingStars } = storeToRefs(settingsStore);

const handleClick = (route: string) => {
  if (hyperspaceEnabled.value) {
    hyperspaceStore.triggerHyperspaceChan = true;
    setTimeout(() => {
      router.push(route).catch((err) => {
        console.error("Navigation error:", err);
      });
    }, 2300);
  } else {
    router.push(route).catch((err) => {
      console.error("Navigation error:", err);
    });
  }
};

interface IPages {
  [x: number]: {
    name: string;
    route: string;
  };
}
const pages: IPages = {
  0: {
    name: "home",
    route: "/",
  },
  1: {
    name: "projects",
    route: "/projects",
  },
  2: {
    name: "CV",
    route: "/cv",
  },
  3: {
    name: "contacts",
    route: "/",
  },
};
</script>
<style lang="css" scoped>
@import url("https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,100..900;1,100..900&family=Oswald:wght@200..700&display=swap");
* {
  font-family: "Archivo", serif;
}

.bg-split {
  background: linear-gradient(to bottom, black 50%, #dbe0de 50%);
  background-size: 100% 200%;
  background-position: 0 0;
  transition: background-position 0.3s ease-in-out;
}

.bg-split:hover {
  /* background-position: 0 100%; */
}
.triangle {
  clip-path: polygon(0 0, 100% 0, 0 100%);
}
</style>
