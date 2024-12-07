<template>
  <MainLayout>
    <div
      class="flex h-screen w-full items-center justify-center overflow-y-hidden"
    >
      <div
        :class="`mb-12 flex h-3/5 w-3/5 ${isExpanded() ? 'gap-0' : 'gap-5'}`"
        ref="gridRef"
      >
        <div
          v-for="(column, colIndex) in columns"
          :key="colIndex"
          :ref="(el) => (colRefs['col' + colIndex] = el)"
          :class="`flex h-full flex-col transition-all duration-500 ease-out ${!isExpanded() ? 'w-1/4 gap-5' : activeCol == colIndex ? 'w-full gap-0' : 'w-0 gap-0'}`"
        >
          <div
            v-for="project in column"
            :key="project.index"
            :ref="(el) => (projectRefs[`project${project.index}`] = el)"
            :class="`masonry-item relative shrink transition-all duration-500 ease-out ${isExpanded() ? '' : '[&>div]:hover:scale-95'} ${isExpanded() && activeProj != project.index ? 'h-0' : ''}`"
            :style="{
              flexGrow: !isExpanded()
                ? sizes[project.size]
                : activeProj == project.index
                  ? '1'
                  : '0',
            }"
            @click="handleClick(colIndex, project.index)"
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
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import { onMounted, computed, reactive, ref } from "vue";
import Icon from "../components/Icon.vue";
import { gsap } from "gsap";
import MainLayout from "../layouts/MainLayout.vue";
import ProjectElement from "../components/ProjectElement.vue";

const sizes = {
  1: "2",
  2: "3",
  3: "4",
};

const activeCol = ref(null);
const activeProj = ref(null);

const closeExpansion = () => {
  console.log("coucou");
  activeProj.value = null;
  activeCol.value = null;
};

const isExpanded = () => {
  return activeCol.value != null && activeProj.value != null;
};

const projects = [
  {
    link: "#",
    index: 0,
    title: "Infact",
    description:
      "Une application permettant de postuler à des offres d'emploi en ligne.",
    size: 1,
  },
  {
    link: "#",
    index: 1,
    title: "Dash geometry",
    description: "Un jeu de plateforme 2d inspiré du célèbre Geometry Dash.",
    size: 2,
  },
  {
    link: "#",
    index: 2,
    title: "Advice generator",
    description:
      "Une application web qui donne des conseils alétoires grâce à une api.",
    size: 1,
  },
  {
    link: "#",
    index: 3,
    title: "Portfolio v1",
    description: "Premier portfolio que j'ai réalisé.",
    size: 3,
  },
  {
    link: "#",
    index: 4,
    title: "Interactive card details form",
    description: "Intégration d'une maquette interactive.",
    size: 2,
  },
  {
    link: "#",
    index: 5,
    title: "Project 6",
    description: "Description of project 6.",
    size: 2,
  },
  {
    link: "#",
    index: 6,
    title: "Digital resume",
    description: "Un CV digital.",
    size: 1,
  },
  {
    link: "#",
    index: 7,
    title: "Project 8",
    description: "Description of project 8.",
    size: 1,
  },
  {
    link: "#",
    index: 8,
    title: "Multi-step form",
    description: "Intégration d'une maquette.",
    size: 2,
  },
  {
    link: "#",
    index: 9,
    title: "News homepage",
    description: "Intégration d'une maquette.",
    size: 1,
  },
  {
    link: "#",
    index: 10,
    title: "Todo list",
    description:
      "Une application permettant de noter et gérer les tâches du quotidien.",
    size: 3,
  },
  {
    link: "#",
    index: 11,
    title: "Project 12",
    description: "Description of project 12.",
    size: 1,
  },
];

const columns = computed(() => {
  const colCount = 4;
  const columns: Array<Array<(typeof projects)[number]>> = Array.from(
    { length: colCount },
    () => [],
  );

  projects.forEach((project, index) => {
    const columnIndex = index % colCount;
    columns[columnIndex].push(project);
  });

  return columns;
});

const projectRefs = reactive({});
const colRefs = reactive({});
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

const handleClick = (colIndex: number, projIndex: number) => {
  if (isExpanded()) {
    return;
  }

  activeCol.value = colIndex;
  activeProj.value = projIndex;
};
</script>

<style scoped>
.masonry-item {
  overflow: hidden;
  transform: translateY(0);
}
</style>
