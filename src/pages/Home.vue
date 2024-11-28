<template>
  <div>
    <div class="h-0 w-full sticky top-0">
      <div class="star-wars-bg h-screen w-full"></div>
    </div>
    <div>
      <Presentation />
      <div class="-mt-[2000px]">
        <Welcome />
      </div>
    </div>
  </div>
</template>

<script setup>
import Welcome from "../components/Welcome.vue";
import Presentation from "../components/Presentation.vue";
</script>

<style scoped>
.star-wars-bg {
  background: url(../assets/intro-background.png) center/cover repeat;
}
</style>
