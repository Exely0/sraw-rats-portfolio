<template>
  <div
    :class="`proj-el h-full overflow-hidden rounded-md border-2 border-[#fdbf13] transition-all p-6`"
  >
      <h3 class="mb-2 text-center text-xl font-semibold text-[#fdbf13]">
        {{ title }}
      </h3>
      <div class=" mt-6 flex flex-col items-center gap-6">
      <p class="text-md text-white ">{{ description }}</p>
        <div v-if="isActive" class="text-white text-center">
        <a :href=props.link target="_blank" class="bg-[#fdbf13] rounded-full text-black px-6 py-4 hover:bg-white transition-all">Voir sur github</a>
        <div><img src=""></div>  
      </div>
    </div>
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
  isActive: {
    type: Boolean,
  },
});


</script>

<style scoped></style>
