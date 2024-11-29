<template>
  <div
    class="btn-1 group relative aspect-square w-[250px] hover:cursor-pointer"
  >
    <div
      class="bg-black-500 group absolute z-10 aspect-square w-10/12 translate-x-10 translate-y-10 cursor-pointer overflow-hidden border-2 border-yellow-500 bg-black text-white transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0"
      ref="textContainer"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
    >
      {{ text }}
      <div
        ref="dynamicBg"
        class="absolute -z-10 h-0 w-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500 transition-all duration-500 group-hover:h-[300%] group-hover:w-[300%]"
      ></div>
    </div>
    <div
      class="absolute z-0 aspect-square w-10/12 border-2 border-yellow-500 transition-all duration-300 group-hover:translate-x-10 group-hover:translate-y-10"
    ></div>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  methods: {
    handleMouseEnter(event) {
      const container = this.$refs.textContainer;
      const bg = this.$refs.dynamicBg;

      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      bg.style.left = `${x}px`;
      bg.style.top = `${y}px`;
    },
    handleMouseLeave(event) {
      const container = this.$refs.textContainer;
      const bg = this.$refs.dynamicBg;

      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      bg.style.left = `${x}px`;
      bg.style.top = `${y}px`;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,100..900;1,100..900&family=Oswald:wght@200..700&display=swap");
</style>
