<template>
  <div
    class="projects-page star-wars-bg relative h-screen w-full overflow-hidden"
    ref="container"
  >
    <ProjectBall
      :id="projects[0].id"
      ref="ball0"
      :name="projects[0].name"
      :color="projects[0].color"
      :size="projects[0].size"
      :initialPosition="projects[0].initialPosition"
      :initialVelocity="projects[0].initialVelocity"
      :containerBounds="containerBounds"
    />
    <ProjectBall
      :id="projects[1].id"
      ref="ball1"
      :name="projects[1].name"
      :color="projects[1].color"
      :size="projects[1].size"
      :initialPosition="projects[1].initialPosition"
      :initialVelocity="projects[1].initialVelocity"
      :containerBounds="containerBounds"
    />
    <ProjectBall
      :id="projects[2].id"
      ref="ball2"
      :name="projects[2].name"
      :color="projects[2].color"
      :size="projects[2].size"
      :initialPosition="projects[2].initialPosition"
      :initialVelocity="projects[2].initialVelocity"
      :containerBounds="containerBounds"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, onBeforeUnmount } from "vue";
import ProjectBall from "../components/ProjectBall.vue";

interface Position {
  x: number;
  y: number;
}

interface Project {
  id: number;
  name: string;
  color: string;
  size: number;
  initialPosition: Position;
  initialVelocity: Position;
}

const projects = <Project[]>[
  {
    id: 0,
    name: "Project 1",
    color: "red",
    size: 150,
    initialPosition: { x: 100, y: 100 },
    initialVelocity: { x: 2, y: 2 },
  },
  {
    id: 1,
    name: "Project 2",
    color: "blue",
    size: 250,
    initialPosition: { x: 300, y: 200 },
    initialVelocity: { x: -2, y: 3 },
  },
  {
    id: 2,
    name: "Project 3",
    color: "green",
    size: 350,
    initialPosition: { x: 500, y: 400 },
    initialVelocity: { x: 1, y: -2 },
  },
];

const containerBounds = reactive<{ width: number; height: number }>({
  width: 0,
  height: 0,
});

const container = ref<HTMLDivElement | null>(null);
const ball0 = ref(null);
const ball1 = ref(null);
const ball2 = ref(null);

const updateContainerBounds = () => {
  if (container.value) {
    const bounds = container.value.getBoundingClientRect();
    containerBounds.width = bounds.width;
    containerBounds.height = bounds.height;
  }
};

const checkCircleCollision = (ballA: any, ballB: any) => {
  const rectA = ballA.getBoundingClientRect();
  const centerA = {
    x: rectA.left + rectA.width / 2,
    y: rectA.top + rectA.height / 2,
  };
  const radiusA = rectA.width / 2;

  const rectB = ballB.getBoundingClientRect();
  const centerB = {
    x: rectB.left + rectB.width / 2,
    y: rectB.top + rectB.height / 2,
  };
  const radiusB = rectB.width / 2;

  const dx = centerB.x - centerA.x;
  const dy = centerB.y - centerA.y;
  const distance = Math.sqrt(dx * dx + dy * dy);

  return distance <= radiusA + radiusB;
};

const handleBallCollision = (ballA: any, ballB: any) => {
  const velocityA = ballA.getVelocity();
  const velocityB = ballB.getVelocity();

  const newVelocityA = {
    x: -velocityA.x,
    y: -velocityA.y,
  };
  const newVelocityB = {
    x: -velocityB.x,
    y: -velocityB.y,
  };

  ballA.setVelocity(newVelocityA);
  ballB.setVelocity(newVelocityB);
};

const checkCollisions = () => {
  const balls = [ball0.value, ball1.value, ball2.value];

  for (let i = 0; i < balls.length; i++) {
    const ballA = balls[i];
    if (!ballA) continue;

    for (let j = i + 1; j < balls.length; j++) {
      const ballB = balls[j];
      if (!ballB) continue;

      if (checkCircleCollision(ballA, ballB)) {
        console.log(`Collision detected between ball ${i} and ball ${j}`);
        handleBallCollision(ballA, ballB);
      }
    }
  }
};

const collisionsInterval = ref(null);
onMounted(() => {
  updateContainerBounds();
  window.addEventListener("resize", updateContainerBounds);
  collisionsInterval.value = setInterval(checkCollisions, 16);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateContainerBounds);
  clearInterval(collisionsInterval.value);
});
</script>

<style scoped>
.star-wars-bg {
  background: url(../assets/intro-background.png) center/cover repeat;
}
</style>
