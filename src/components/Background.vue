<template>
  <canvas ref="starCanvas" class="star-canvas"></canvas>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

interface IStar {
  x: number;
  y: number;
  z: number;
  size: number;
  velocityX: number;
  velocityY: number;
  velocityZ: number;
}

const starCanvas = ref<HTMLCanvasElement | null>(null);
let ctx: CanvasRenderingContext2D | null = null;
const stars: Array<IStar> = [];
let animationIntervalId: number;
let starFactoryId: number;

const initializeCanvas = () => {
  const canvas = starCanvas.value;
  if (!canvas) return;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx = canvas.getContext("2d");
};
const createStar = () => {
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  const angle = Math.random() * Math.PI * 2;
  const radius = Math.random() * 3000;

  const x = centerX + Math.cos(angle) * radius;
  const y = centerY + Math.sin(angle) * radius;

  const speed = -(Math.random() * 2 + 2);

  return {
    x,
    y,
    z: 1000 + 500 * Math.random(),
    size: Math.random() * 3 + 4,
    velocityX: Math.cos(angle) * speed,
    velocityY: Math.sin(angle) * speed,
    velocityZ: Math.random() * 3 + 1.5,
  };
};

const populateStars = () => {
  stars.push(createStar());
};

const drawStar = (star: any) => {
  if (!ctx) return;
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  const scale = 100 / star.z;
  const x = (star.x - centerX) * scale + centerX;
  const y = (star.y - centerY) * scale + centerY;
  const size = star.size * scale;

  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = "white";
  ctx.fill();
  ctx.closePath();
};

const updateStars = () => {
  for (let i = stars.length - 1; i >= 0; i--) {
    const star = stars[i];
    star.x -= star.velocityX;
    star.y -= star.velocityY;
    star.z -= star.velocityZ;
    if (star.z <= 0) {
      stars.splice(i, 1);
    }
  }
};

const animate = () => {
  if (!ctx) return;
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  updateStars();
  for (const star of stars) {
    drawStar(star);
  }
};

const resizeCanvas = () => {
  initializeCanvas();
};

onMounted(() => {
  initializeCanvas();
  animationIntervalId = setInterval(animate, 16);
  starFactoryId = setInterval(populateStars, 50);
  window.addEventListener("resize", resizeCanvas);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", resizeCanvas);
  clearInterval(animationIntervalId);
  clearInterval(starFactoryId);
});
</script>

<style>
.star-canvas {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
}
</style>
