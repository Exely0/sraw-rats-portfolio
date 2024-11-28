<template>
  <div class="welcome-container h-[6000px] w-screen">
    <div
      class="h-screen w-full sticky top-0 flex items-center justify-center overflow-x-hidden"
    >
      <div class="text-[12rem] text-center pres-text uppercase">
        <h1 class="pres-text-1">Bienvenue sur mon</h1>
        <h1 class="pres-text-2">portfolio</h1>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  mounted() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".pres-text", {
      scrollTrigger: {
        trigger: ".welcome-container",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
      transform: "scale(0%)",
      opacity: 0,
    });

    // gsap.to(".pres-text-1", {
    //   scrollTrigger: {
    //     trigger: ".welcome-container",
    //     start: "top top",
    //     end: "bottom top",
    //     scrub: true,
    //   },
    //   transform: "translateX(-2000px)",
    // });

    // gsap.to(".pres-text-2", {
    //   scrollTrigger: {
    //     trigger: ".welcome-container",
    //     start: "top top",
    //     end: "bottom top",
    //     scrub: true,
    //   },
    //   transform: "translateX(2000px)",
    // });
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,100..900;1,100..900&family=Oswald:wght@200..700&display=swap");
.pres-text {
  -webkit-text-stroke-color: #fdbf13;
  -webkit-text-stroke-width: 6px;
}
@font-face {
  font-family: "Star Jedi";
  src: url("../assets/fonts/starjedi.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

.pres-text {
  font-family: "Star Jedi", sans-serif;
}
</style>
