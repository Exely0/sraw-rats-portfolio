<template>
  <MainLayout>
    <div class="flex flex-col md:flex-row min-h-screen w-full items-center justify-center gap-6">
      <Button text="" url="https://github.com/Exely0/">
        <div class="h-1/2">
          <img class="h-full w-auto invert" :src="githubIcon" />
        </div>
      </Button>
      <Button text="" url="https://www.linkedin.com/in/lorris-pons/"
        ><div class="h-1/2">
          <img class="h-full w-auto invert" :src="linkedinLogo" /></div
      ></Button>
      <Button text="mail" url=""
        ><div class="h-1/2">
          <img class="h-full w-auto invert" :src="mailLogo" /></div
      ></Button>
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import Button from "../components/Button.vue";
import MainLayout from "../layouts/MainLayout.vue";
import githubIcon from "../assets/icons/github.png";
import linkedinLogo from "../assets/icons/linkedin.png";
import mailLogo from "../assets/icons/mail.png";
</script>
