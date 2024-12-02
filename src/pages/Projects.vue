<template>
  <div
    class="fade-in projects-page relative h-screen w-full overflow-hidden"
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
    <ProjectBall
      :id="projects[3].id"
      ref="ball3"
      :name="projects[3].name"
      :color="projects[3].color"
      :size="projects[3].size"
      :initialPosition="projects[3].initialPosition"
      :initialVelocity="projects[3].initialVelocity"
      :containerBounds="containerBounds"
    />
    <ProjectBall
      :id="projects[4].id"
      ref="ball4"
      :name="projects[4].name"
      :color="projects[4].color"
      :size="projects[4].size"
      :initialPosition="projects[4].initialPosition"
      :initialVelocity="projects[4].initialVelocity"
      :containerBounds="containerBounds"
    />
    <ProjectBall
      :id="projects[5].id"
      ref="ball5"
      :name="projects[5].name"
      :color="projects[5].color"
      :size="projects[5].size"
      :initialPosition="projects[5].initialPosition"
      :initialVelocity="projects[5].initialVelocity"
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
  id: string;
  name: string;
  color: string;
  size: number;
  initialPosition: Position;
  initialVelocity: Position;
}

const projects = <Project[]>[
  {
    id: "ball0",
    name: "Project 1",
    color: "red",
    size: 150,
    initialPosition: { x: 100, y: 100 },
    initialVelocity: { x: 2, y: 2 },
  },
  {
    id: "ball1",
    name: "Project 2",
    color: "blue",
    size: 250,
    initialPosition: { x: 300, y: 200 },
    initialVelocity: { x: -1.5, y: 1.5 },
  },
  {
    id: "ball2",
    name: "Project 3",
    color: "green",
    size: 350,
    initialPosition: { x: 500, y: 400 },
    initialVelocity: { x: 1, y: -1 },
  },
  {
    id: "ball3",
    name: "Project 4",
    color: "yellow",
    size: 250,
    initialPosition: { x: 900, y: 200 },
    initialVelocity: { x: 1.5, y: -1.5 },
  },
  {
    id: "ball4",
    name: "Project 5",
    color: "orange",
    size: 350,
    initialPosition: { x: 1000, y: 500 },
    initialVelocity: { x: 1, y: 1 },
  },
  {
    id: "ball5",
    name: "Project 6",
    color: "violet",
    size: 150,
    initialPosition: { x: 1300, y: 800 },
    initialVelocity: { x: 2, y: -2 },
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
const ball3 = ref(null);
const ball4 = ref(null);
const ball5 = ref(null);

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

  const rectA = ballA.getBoundingClientRect();
  const rectB = ballB.getBoundingClientRect();

  const centerA = {
    x: rectA.left + rectA.width / 2,
    y: rectA.top + rectA.height / 2,
  };
  const centerB = {
    x: rectB.left + rectB.width / 2,
    y: rectB.top + rectB.height / 2,
  };

  const dx = centerB.x - centerA.x;
  const dy = centerB.y - centerA.y;
  const distance = Math.sqrt(dx * dx + dy * dy);

  if (distance === 0) return;

  const nx = dx / distance;
  const ny = dy / distance;

  const dotProductA = velocityA.x * nx + velocityA.y * ny;
  const dotProductB = velocityB.x * nx + velocityB.y * ny;

  const newVelocityA = {
    x: velocityA.x - 2 * dotProductA * nx,
    y: velocityA.y - 2 * dotProductA * ny,
  };
  const newVelocityB = {
    x: velocityB.x - 2 * dotProductB * nx,
    y: velocityB.y - 2 * dotProductB * ny,
  };

  ballA.setVelocity(newVelocityA);
  ballB.setVelocity(newVelocityB);
};

const checkCollisions = () => {
  const balls = [
    ball0.value,
    ball1.value,
    ball2.value,
    ball3.value,
    ball4.value,
    ball5.value,
  ];

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

.fade-away {
  animation: fade-away 1.5s ease-in;
}

.fade-in {
  animation: fade-away 2s ease-in reverse;
}

@keyframes fade-away {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
