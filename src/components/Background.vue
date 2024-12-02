<template>
  <div class="absolute left-0 top-0 h-screen w-full">
    <div
      :class="`absolute -z-10 h-full w-full bg-black transition-opacity duration-1000 ${hyperspace ? 'opacity-0' : 'opacity-100'}`"
    ></div>
    <div
      class="bg-grad-blue-black absolute -z-20 h-full w-full opacity-100"
    ></div>
    <canvas
      @mousedown="hyperspace = true"
      @mouseup="hyperspace = false"
      ref="starCanvas"
      :class="`star-canvas`"
    ></canvas>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from "vue";

interface IStar {
  x: number;
  y: number;
  z: number;
  size: number;
  velocityX: number;
  velocityY: number;
  velocityZ: number;
  hyperspacePosX: number | null;
  hyperspacePosY: number | null;
}

const starCanvas = ref<HTMLCanvasElement | null>(null);
let ctx: CanvasRenderingContext2D | null = null;
const stars: Array<IStar> = [];
let animationIntervalId: number;
let starFactoryId: number;
const hyperspace = ref(false);

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
  const radius = 200 + Math.random() * 3000;

  const x = centerX + Math.cos(angle) * radius;
  const y = centerY + Math.sin(angle) * radius;

  const speed = -(Math.random() * 1 + 2);

  return {
    x,
    y,
    z: 1000 + 500 * Math.random(),
    size: Math.random() * 5 + 6,
    velocityX: Math.cos(angle) * speed,
    velocityY: Math.sin(angle) * speed,
    velocityZ: Math.random() * 3 + 2,
    hyperspacePosX: x,
    hyperspacePosY: y,
  };
};

watch(hyperspace, (oldValue, newValue) => {
  if (oldValue == true && newValue == false) {
    console.log("coucou");
    stars.forEach((star) => {
      star.hyperspacePosX = star.x;
      star.hyperspacePosY = star.y;
    });
  }
});

const populateStars = () => {
  if (!hyperspace.value) {
    stars.push(createStar());
  }
};

const drawStar = (star: IStar) => {
  if (!ctx) return;
  const scale = 100 / star.z;
  const size = star.size * scale;
  if (!hyperspace.value) {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const x = (star.x - centerX) * scale + centerX;
    const y = (star.y - centerY) * scale + centerY;
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
  } else {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const x = (star.x - centerX) * scale + centerX;
    const y = (star.y - centerY) * scale + centerY;
    const hyperX = (star.hyperspacePosX - centerX) * scale + centerX;
    const hyperY = (star.hyperspacePosY - centerY) * scale + centerY;
    ctx.beginPath();
    ctx.moveTo(hyperX, hyperY);
    ctx.lineTo(x, y);
    ctx.strokeStyle = "white";
    ctx.lineWidth = size;
    ctx.stroke();
    ctx.closePath();
  }
};

const updateStars = () => {
  for (let i = stars.length - 1; i >= 0; i--) {
    const star = stars[i];
    if (hyperspace.value) {
      star.x -= 10 * star.velocityX;
      star.y -= 10 * star.velocityY;
    } else {
      star.x -= star.velocityX;
      star.y -= star.velocityY;
      star.z -= star.velocityZ;
      if (star.z <= 0) {
        stars.splice(i, 1);
      }
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
}
</style>
