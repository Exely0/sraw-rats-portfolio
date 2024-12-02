<template>
  <div
    class="project-ball floating absolute z-20 flex aspect-square items-center justify-center rounded-full transition-shadow duration-300 hover:cursor-pointer"
    :id="props.id"
    :style="{
      '--x': position.x + 'px',
      '--y': position.y + 'px',
      width: size + 'px',
      backgroundColor: color,
      transform: `translate(${position.x}px, ${position.y}px)`,
    }"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @isMouseDown="dragMouse"
    ref="ball"
  >
    {{ name }}
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, onBeforeUnmount, watch } from "vue";

interface Position {
  x: number;
  y: number;
}

interface Bounds {
  width: number;
  height: number;
}

const isMouseDown = ref(null);

const props = defineProps<{
  id: string;
  name: string;
  color: string;
  size: number;
  initialPosition: Position;
  initialVelocity: Position;
  containerBounds: Bounds;
}>();

const position = reactive({ ...props.initialPosition });
const velocity = reactive({ ...props.initialVelocity });

const ball = ref<HTMLDivElement | null>(null);

let moveInterval: number | null = null;

const dragMouse = (event: MouseEvent) => {
  console.log("coucou");
  position.x = event.clientX - props.size / 2;
  position.y = event.clientY - props.size / 2;
};

const moveBall = () => {
  position.x += velocity.x;
  position.y += velocity.y;

  const { width, height } = props.containerBounds;

  if (position.x <= 0 || position.x + props.size >= width) {
    velocity.x *= -1;
  }
  if (position.y <= 0 || position.y + props.size >= height) {
    velocity.y *= -1;
  }
};

const handleMouseEnter = () => {
  if (moveInterval !== null) {
    clearInterval(moveInterval);
    moveInterval = null;
  }
};

const handleMouseLeave = () => {
  if (moveInterval === null) {
    moveInterval = window.setInterval(moveBall, 16);
  }
};

const getBoundingClientRect = () => {
  return ball.value?.getBoundingClientRect() ?? null;
};

const getVelocity = () => {
  return velocity;
};

const getPosition = () => {
  return position;
};

const setVelocity = (newVelocity: Position) => {
  velocity.x = newVelocity.x;
  velocity.y = newVelocity.y;
};

onMounted(() => {
  moveInterval = setInterval(moveBall, 16);
});

onBeforeUnmount(() => {
  if (moveInterval !== null) {
    clearInterval(moveInterval);
  }
});

defineExpose({
  getBoundingClientRect,
  getVelocity,
  getPosition,
  setVelocity,
});
</script>

<style scoped>
@keyframes float {
  0% {
    transform: translate(var(--x), var(--y)) scale(100%);
    box-shadow: 0 0 30px 2px greenyellow;
  }
  50% {
    transform: translate(var(--x), var(--y)) scale(105%);
    box-shadow: 0 0 30px 10px greenyellow;
  }
  100% {
    transform: translate(var(--x), var(--y)) scale(100%);
    box-shadow: 0 0 30px 2px greenyellow;
  }
}
.floating:hover {
  animation: float 4s ease-in infinite;
  box-shadow: 0 0 30px 5px greenyellow;
}
</style>
