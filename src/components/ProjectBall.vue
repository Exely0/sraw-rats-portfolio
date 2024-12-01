<template>
  <div
    class="project-ball absolute z-20 flex aspect-square items-center justify-center rounded-full"
    :style="{
      backgroundColor: color,
      width: size + 'px',
      transform: `translate(${position.x}px, ${position.y}px)`,
    }"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    ref="ball"
  >
    {{ name }}
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, onBeforeUnmount } from "vue";

// Props definition
interface Position {
  x: number;
  y: number;
}

interface Bounds {
  width: number;
  height: number;
}

const props = defineProps<{
  id: number;
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

const handleCollision = () => {
  velocity.x *= -1;
  velocity.y *= -1;
  position.x += velocity.x;
  position.y += velocity.y;
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
  handleCollision,
});
</script>

<style scoped></style>
