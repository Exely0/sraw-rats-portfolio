<template>
  <MainLayout>
    <div class="flex h-screen w-full items-center justify-center">
      <div class="mb-12 flex h-3/5 w-3/5 gap-5" ref="gridRef">
        <div
          v-for="(column, colIndex) in columns"
          :key="colIndex"
          :ref="(el) => (colRefs['col' + colIndex] = el)"
          class="flex h-full grow flex-col gap-5 transition-all"
        >
          <div
            v-for="(project, projIndex) in column"
            :key="`col${colIndex}-proj${projIndex}`"
            :ref="(el) => (projectRefs[`${colIndex}-${projIndex}`] = el)"
            :class="`masonry-item relative shrink border border-red-500`"
            :style="{ flexGrow: sizes[project.size] }"
            @click="handleClick(colIndex, projIndex)"
          >
            <div v-if="isExpanded == projIndex" class="absolute right-4 top-4">
              <Icon name="close_fullscreen" />
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

const projects = [
  {
    link: "#",
    title: "Project 1",
    description: "Description of project 1.",
    size: 1,
  },
  {
    link: "#",
    title: "Project 2",
    description: "Description of project 2.",
    size: 2,
  },
  {
    link: "#",
    title: "Project 3",
    description: "Description of project 3.",
    size: 1,
  },
  {
    link: "#",
    title: "Project 4",
    description: "Description of project 4.",
    size: 3,
  },
  {
    link: "#",
    title: "Project 5",
    description: "Description of project 5.",
    size: 2,
  },
  {
    link: "#",
    title: "Project 6",
    description: "Description of project 6.",
    size: 2,
  },
  {
    link: "#",
    title: "Project 7",
    description: "Description of project 7.",
    size: 1,
  },
  {
    link: "#",
    title: "Project 8",
    description: "Description of project 8.",
    size: 1,
  },
  {
    link: "#",
    title: "Project 9",
    description: "Description of project 9.",
    size: 2,
  },
  {
    link: "#",
    title: "Project 10",
    description: "Description of project 10.",
    size: 1,
  },
  {
    link: "#",
    title: "Project 11",
    description: "Description of project 11.",
    size: 3,
  },
  {
    link: "#",
    title: "Project 12",
    description: "Description of project 12.",
    size: 1,
  },
];

const columns = computed(() => {
  const colCount = 4;
  const cols = Array.from({ length: colCount }, () => []);
  projects.forEach((project, index) => {
    cols[index % colCount].push(project);
  });
  return cols;
});

const projectRefs = reactive({});
const colRefs = reactive({});
const gridRef = ref();
const isExpanded = ref(null);

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
  Object.values(colRefs).forEach((value) => {
    gsap.to(value as HTMLElement, {
      gap: 0,
      duration: 0.3,
      ease: "power3.out",
    });
  });
  Object.entries(colRefs).forEach(([key, col]) => {
    if (key !== `col${colIndex}` && col) {
      gsap.to(col as HTMLElement, {
        gap: 0,
        flexGrow: 0,
        width: 0,
        duration: 0.3,
        ease: "power3.out",
      });
    }
  });

  const columnItems = Object.entries(projectRefs).filter(([key]) =>
    key.startsWith(`${colIndex}-`),
  );

  columnItems.forEach(([key, el]) => {
    if (key !== `${colIndex}-${projIndex}` && el) {
      gsap.to(el as HTMLElement, {
        height: 0,
        flexGrow: 0,
        duration: 0.3,
        ease: "power3.out",
      });
    }
  });

  gsap.to(gridRef.value as HTMLElement, {
    gap: 0,
    duration: 0.3,
    ease: "power3.out",
  });
  setTimeout(() => {
    isExpanded.value = projIndex;
  }, 1000);
};
</script>

<style scoped>
.masonry-item {
  overflow: hidden;
  transform: translateY(0);
}

.flex {
  transition:
    flex-grow 0.3s ease,
    width 0.3s ease;
}
</style>
