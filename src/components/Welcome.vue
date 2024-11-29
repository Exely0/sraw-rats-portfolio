<template>
  <div class="scroll-trigger-intro h-[12000px]">
    <div
      class="sticky top-0 flex h-screen w-full justify-center overflow-hidden"
    >
      <div class="intro-container border-2 border-red-500">
        <p class="text-animation text-xl font-semibold text-white">
          A long time ago in a galaxy far, far away... A long time ago in a
          galaxy far, far away... A long time ago in a galaxy far, far away... A
          long time ago in a galaxy far, far away... A long time ago in a galaxy
          far, far away... A long time ago in a galaxy far, far away... A long
          time ago in a galaxy far, far away... A long time ago in a galaxy far,
          far away...
        </p>
        <div
          class="btn-container absolute bottom-0 flex h-screen w-full items-center justify-center gap-10 transition-all [&>div>div]:flex [&>div>div]:items-center [&>div>div]:justify-center [&>div>div]:text-5xl [&>div>div]:font-semibold [&>div>div]:text-white [&>div>div]:duration-200 [&>div]:translate-y-[1000px]"
        >
          <Button text="Projets" />
          <Button text="CV" />
          <Button text="Contact" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "./Button.vue";

export default {
  name: "Welcome.vue",
  components: {
    Button,
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".text-animation", {
      scrollTrigger: {
        trigger: ".scroll-trigger-intro",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
      bottom: "100%",
    });

    gsap.to(".text-animation", {
      scrollTrigger: {
        trigger: ".scroll-trigger-intro",
        start: "30% top",
        end: "60% top",
        scrub: true,
      },
      opacity: 0,
    });

    gsap.to(".intro-container", {
      scrollTrigger: {
        trigger: ".scroll-trigger-intro",
        start: "60% top",
        end: "100%",
        scrub: true,
      },
      rotateX: 0,
      transformPerspective: 3000,
    });

    gsap.to(".btn-1", {
      scrollTrigger: {
        trigger: ".scroll-trigger-intro",
        start: "30% top",
        end: "60%",
        scrub: true,
      },
      translateY: 0,
    });
    gsap.to(".btn-2", {
      scrollTrigger: {
        trigger: ".scroll-trigger-intro",
        start: "40% top",
        end: "70%",
        scrub: true,
      },
      translateY: 0,
    });
    gsap.to(".btn-3", {
      scrollTrigger: {
        trigger: ".scroll-trigger-intro",
        start: "50% top",
        end: "80%",
        scrub: true,
      },
      translateY: 0,
    });
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,100..900;1,100..900&family=Oswald:wght@200..700&display=swap");

.intro-container {
  position: absolute;
  height: 700%;
  transform-origin: 50% 100%;
  transform: perspective(500px) rotateX(20deg);
  width: 90%;
  bottom: 0;
}

.text-animation {
  position: absolute;
  text-align: justify;
  color: #fdbf13;
  font-size: 8rem;
  line-height: 8rem;
  height: 0px;
  font-family: "Archivo", serif;
  letter-spacing: 0.8rem;
  bottom: 0;
}
</style>
