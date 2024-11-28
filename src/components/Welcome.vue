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
          class="btn-container absolute bottom-0 flex h-screen w-full translate-y-full items-center justify-center gap-10 transition-all [&>div>div]:duration-200"
        >
          <div
            class="group relative aspect-square w-[250px] hover:cursor-pointer"
          >
            <div
              class="bg-black-500 absolute z-10 aspect-square w-10/12 translate-x-10 translate-y-10 cursor-pointer border-2 border-yellow-500 bg-black transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:bg-yellow-500"
            ></div>
            <div
              class="absolute z-0 aspect-square w-10/12 border-2 border-yellow-500 transition-all duration-300 group-hover:translate-x-10 group-hover:translate-y-10"
            ></div>
          </div>
          <div
            class="group relative aspect-square w-[250px] hover:cursor-pointer"
          >
            <div
              class="bg-black-500 absolute z-10 aspect-square w-10/12 translate-x-10 translate-y-10 cursor-pointer border-2 border-yellow-500 bg-black transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:bg-yellow-500"
            ></div>
            <div
              class="absolute z-0 aspect-square w-10/12 border-2 border-yellow-500 transition-all duration-300 group-hover:translate-x-10 group-hover:translate-y-10"
            ></div>
          </div>
          <div
            class="group relative aspect-square w-[250px] hover:cursor-pointer"
          >
            <div
              class="bg-black-500 absolute z-10 aspect-square w-10/12 translate-x-10 translate-y-10 cursor-pointer border-2 border-yellow-500 bg-black transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:bg-yellow-500"
            ></div>
            <div
              class="absolute z-0 aspect-square w-10/12 border-2 border-yellow-500 transition-all duration-300 group-hover:translate-x-10 group-hover:translate-y-10"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  name: "StarWarsIntro",
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

    gsap.to(".btn-container", {
      scrollTrigger: {
        trigger: ".scroll-trigger-intro",
        start: "30% top",
        end: "60%",
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
