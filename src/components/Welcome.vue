<template>
  <div class="scroll-trigger-intro h-[12000px]">
    <div
      class="sticky top-0 flex h-screen w-full justify-center overflow-hidden"
    >
      <div class="intro-container w-full md:w-10/12">
        <p class="text-animation text-[3.5rem] md:text-[6rem] tracking-wider md:leading-[8rem] font-semibold text-white">
          Moi c'est Lorris, je suis étudiant à l'école d'informatique 'Epitech'. J'ai commencé mes
           études d'informatique il y a 4 ans.<br><br> Le premier domaine qui m'a interessé est le développement web, mais
           étant curieux par nature j'ai travaillé sur bien d'autres sujets.<br><br> De projet en projet j'ai affiné mes compétences
           et ai appris à travailler en équipe.<br><br>
           Aujourd'hui je recherche une alternance pour continuer mes études car je suis convaincu que c'est la meilleure 
           manière pour moi de progresser et de m'épanouir. Après mes études j'aimerais être développeur, alors pourquoi ne 
           pas commencer à m'y former concrètement dès maintenant ?
        </p>
        <div
          class="btn-container absolute bottom-0 flex h-screen w-full items-center justify-center gap-10 transition-all"
        >
          <div class="btn-1 translate-y-[1000px] text-4xl md:text-6xl text-[#fdbf13] text-center">
            <div>
              Explorez l'univers en utilisant les commandes du tableau de bord
            </div>
            <div class="mt-14 text-center">
              <Icon
                name="keyboard_double_arrow_down"
                color="#fdbf13"
                font-size="100px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Icon from "./Icon.vue";

const doubleArrow = ref("keyboard_double_arrow_down");

gsap.registerPlugin(ScrollTrigger);

const triggerFadeAway = () => {
  const ele: HTMLElement = document.getElementsByClassName(
    "scroll-trigger-intro",
  )[0] as unknown as HTMLElement;
  ele.classList.add("fade-away");
};

onMounted(() => {
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

});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,100..900;1,100..900&family=Oswald:wght@200..700&display=swap");

.intro-container {
  position: absolute;
  height: 700%;
  transform-origin: 50% 100%;
  transform: perspective(500px) rotateX(20deg);
  bottom: 0;
}

.text-animation {
  position: absolute;
  text-align: justify;
  color: #fdbf13;
  height: 0px;
  font-family: "Archivo", serif;
  bottom: 0;
}
</style>
