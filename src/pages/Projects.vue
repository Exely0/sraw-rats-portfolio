<template>
  <MainLayout>
    <div class="py-36 md:p-0 flex h-screen w-full px-8 items-center justify-center md:overflow-y-hidden">
      <!-- Desktop View -->
      <div
        class="hidden md:flex mb-12 w-full md:w-4/5 lg:w-3/5 h-4/6 gap-3 md:gap-5 flex-wrap justify-center"
        ref="gridRef"
      >
        <div
          v-for="project in projects"
          :key="project.index"
          :ref="(el) => (projectRefs[`project${project.index}`] = el)"
          :class="`masonry-item relative  transition-all duration-150 cursor-pointer
          ${
            isExpanded() ? (activeProj != project.index ? ' w-0 h-0 opacity-0' : ' h-full w-full') : 'md:w-[30%] lg:w-[21%] h-auto [&>div]:hover:scale-95 opacity-1'
          }
          `"

          @click="handleClick(project.index)"
        >
          <div
            v-if="activeProj == project.index"
            @click.stop="closeExpansion"
            class="absolute right-4 top-4 z-20 flex aspect-square w-12 cursor-pointer items-center justify-center rounded-md border-2"
          >
            <Icon name="close_fullscreen" color="white" />
          </div>
          <ProjectElement
            :link="project.link"
            :title="project.title"
            :description="project.description"
            :is-active="activeProj === project.index"
          />
        </div>
      </div>

      <!-- Mobile View -->
    <div class="md:hidden flex flex-col gap-4 h-4/5 overflow-y-scroll">
        <div
          v-for="project in projects"
          :key="project.index"
          :class="`w-full  shrink-0 masonry-item relative transition-all duration-500 ease-out ${
            !isExpanded() ? 'h-[20%]' : ''
          } ${
            isExpanded() && activeProj == project.index ? 'h-full' : ''
          }${
            isExpanded() && activeProj != project.index ? 'h-0' : ''
          }
          `"
          @click="handleClick(project.index)"
        >
          <div
            v-if="activeProj == project.index"
            @click.stop="closeExpansion"
            class="absolute right-4 top-4 z-20 flex aspect-square w-12 cursor-pointer items-center justify-center rounded-md border-2"
          >
            <Icon name="close_fullscreen" color="white" />
          </div>
          <ProjectElement
            :link="project.link"
            :title="project.title"
            :description="project.description"
          />
        </div>
      </div>
    </div>
  </MainLayout>
</template>


<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import Icon from "../components/Icon.vue";
import { gsap } from "gsap";
import MainLayout from "../layouts/MainLayout.vue";
import ProjectElement from "../components/ProjectElement.vue";

const activeProj = ref<number | null>(null);

const closeExpansion = () => {
  activeProj.value = null;
};

const isExpanded = () => {
  return activeProj.value !== null;
};

const projects = [
  {
    link: "https://github.com/Exely0/draob-boj",
    index: 0,
    title: "Infact",
    description:
      "Une application permettant de postuler à des offres d'emploi en ligne.",
  },
  {
    link: "https://github.com/Exely0/dash-geometry",
    index: 1,
    title: "Dash geometry",
    description: "Un jeu de plateforme 2d inspiré du célèbre Geometry Dash.",
  },
  {
    link: "https://github.com/Exely0/AdviceGeneratorApp",
    index: 2,
    title: "Advice generator",
    description:
      "Une application web qui donne des conseils alétoires grâce à une api.",
  },
  {
    link: "https://github.com/Exely0/portfolio",
    index: 3,
    title: "Portfolio v1",
    description: "Premier portfolio que j'ai réalisé.",
  },
  {
    link: "https://github.com/Exely0/InteractiveCardDetailsForm",
    index: 4,
    title: "Interactive card details form",
    description: "Intégration d'une maquette interactive.",
  },
  {
    link: "https://github.com/Exely0/PricingComponentWithToggle",
    index: 5,
    title: "Pricing component",
    description: "Intégration d'une maquette.",
  },
  {
    link: "https://github.com/Exely0/digital-resume",
    index: 6,
    title: "Digital resume",
    description: "Un CV digital.",
  },
  {
    link: "https://github.com/Exely0/UrlShorteningApiWebsite",
    index: 7,
    title: "URL shortener",
    description: "Une application qui permet de raccourcir d'importe quel lien.",
  },
  {
    link: "https://github.com/Exely0/multi-step-form",
    index: 8,
    title: "Multi-step form",
    description: "Intégration d'une maquette.",
  },
  {
    link: "https://github.com/Exely0/NewsHomepage",
    index: 9,
    title: "News homepage",
    description: "Intégration d'une maquette.",
  },
  {
    link: "https://github.com/Exely0/ToDoListApplication",
    index: 10,
    title: "Todo list",
    description:
      "Une application permettant de noter et gérer les tâches du quotidien.",
  },
  {
    link: "https://github.com/Exely0/ExpensesChartComponent",
    index: 11,
    title: "Expenses chart",
    description: "Intégration d'une maquette.",
  },
];

const projectRefs = reactive({});
const gridRef = ref();

onMounted(() => {
  const timeline = gsap.timeline();
  const allRefs = Object.values(projectRefs) as HTMLElement[];

  allRefs.forEach((el, index) => {
    if (el) {
      timeline.fromTo(
        el,
        { y: 3000 },
        { y: 0, duration: 0.3, ease: "power3.out" },
        index * 0.14,
      );
    }
  });
});

const handleClick = (projIndex: number) => {
  if (isExpanded()) return;
  activeProj.value = projIndex;
};
</script>

<style lang="css">
.masonry-item {
  overflow: hidden;
  transform: translateY(0);
}

.opacity-0 {
  opacity: 0;
}

.opacity-1 {
  opacity: 1;
}
</style>