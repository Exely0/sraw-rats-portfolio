<template>
  <MainLayout>
    <div>
      <Presentation />
      <div class="-mt-[2000px]">
        <Welcome />
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import Welcome from "../components/Welcome.vue";
import Presentation from "../components/Presentation.vue";
import MainLayout from "../layouts/MainLayout.vue";
</script>

<style scoped>
.star-wars-bg {
  background: url(../assets/intro-background.png) center/cover repeat;
}
</style>
