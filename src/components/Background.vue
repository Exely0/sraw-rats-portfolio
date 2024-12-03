<template>
  <div class="fade-in sticky top-0 h-0 w-full">
    <div
      :class="`absolute -z-10 h-screen w-full bg-black transition-opacity duration-1000 ${hyperspaceChan || hyperspaceSpeed ? 'opacity-0' : 'opacity-100'}`"
    ></div>

    <div
      :class="`absolute ${hyperspaceSpeed ? 'opacity-0' : 'opacity-100'} -z-20 h-screen w-full bg-grad-blue-black transition-opacity duration-1000`"
    ></div>
    <div
      :class="`absolute -z-30 h-screen w-full bg-grad-lightblue-black opacity-100`"
    ></div>
    <canvas
      @mousedown="hyperspaceChan = true"
      @mouseup="hyperspaceChan = false"
      ref="starCanvas"
      :class="`star-canvas h-screen`"
    ></canvas>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from "vue";
import { useHyperspaceStore } from "../store/hyperspace";

interface IStar {
  x: number;
  y: number;
  z: number;
  size: number;
  velocityX: number;
  velocityY: number;
  velocityZ: number;
  hyperspaceChanPosX: number | null;
  hyperspaceChanPosY: number | null;
  originX: number;
  originY: number;
}

const starCanvas = ref<HTMLCanvasElement | null>(null);
let ctx: CanvasRenderingContext2D | null = null;
const stars: Array<IStar> = [];
let animationIntervalId: number;
let starFactoryId: number;
const hyperspaceChan = ref(false);
const hyperspaceSpeed = ref(false);
const hyperspaceChannelingTime = ref(0);
const hyperspaceStore = useHyperspaceStore();

watch(
  () => hyperspaceStore.triggerHyperspaceChan,
  (value) => {
    if (value) {
      manualActivation();
      hyperspaceStore.triggerHyperspaceChan = false;
    }
  },
);

const manualActivation = () => {
  hyperspaceChan.value = true;
  setTimeout(() => {
    hyperspaceChan.value = false;
  }, 1100);
};

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
    hyperspaceChanPosX: x,
    hyperspaceChanPosY: y,
    originX: x,
    originY: y,
  };
};

watch(hyperspaceChan, (oldValue, newValue) => {
  if (oldValue == true && newValue == false) {
    hyperspaceChannelingTime.value = 0;
    stars.forEach((star) => {
      star.hyperspaceChanPosX = star.x;
      star.hyperspaceChanPosY = star.y;
    });
  }
});

const populateStars = () => {
  if (!hyperspaceChan.value) {
    if (hyperspaceSpeed.value) {
      for (let i = 0; i < 20; i++) {
        stars.push(createStar());
      }
    } else {
      stars.push(createStar());
    }
  }
};

const drawStar = (star: IStar) => {
  if (!ctx) return;
  const scale = 100 / star.z;
  const size = star.size * scale;
  if (hyperspaceSpeed.value) {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const x = (star.x - centerX) * scale + centerX;
    const y = (star.y - centerY) * scale + centerY;
    const originX = (star.originX - centerX) * scale + centerX;
    const originY = (star.originY - centerY) * scale + centerY;
    ctx.beginPath();
    ctx.moveTo(originX, originY);
    ctx.lineTo(x, y);
    ctx.strokeStyle = "white";
    ctx.lineWidth = size * 1.4;
    ctx.stroke();
    ctx.closePath();
  } else if (hyperspaceChan.value) {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const x = (star.x - centerX) * scale + centerX;
    const y = (star.y - centerY) * scale + centerY;
    const hyperX = (star.hyperspaceChanPosX - centerX) * scale + centerX;
    const hyperY = (star.hyperspaceChanPosY - centerY) * scale + centerY;
    ctx.beginPath();
    ctx.moveTo(hyperX, hyperY);
    ctx.lineTo(x, y);
    ctx.strokeStyle = "white";
    ctx.lineWidth = size;
    ctx.stroke();
    ctx.closePath();
  } else {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const x = (star.x - centerX) * scale + centerX;
    const y = (star.y - centerY) * scale + centerY;
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
  }
};

const updateStars = () => {
  for (let i = stars.length - 1; i >= 0; i--) {
    const star = stars[i];
    if (hyperspaceChan.value) {
      star.x -= 10 * star.velocityX;
      star.y -= 10 * star.velocityY;
    } else {
      star.x -= star.velocityX;
      star.y -= star.velocityY;
      if (hyperspaceSpeed.value) {
        star.z -= 30 * star.velocityZ;
      } else {
        star.z -= star.velocityZ;
      }
      if (star.z <= 0) {
        stars.splice(i, 1);
      }
    }
  }
};

const animate = () => {
  if (!ctx) return;
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  if (hyperspaceChan.value) {
    hyperspaceChannelingTime.value += 16;
  }
  if (hyperspaceChannelingTime.value >= 1000 && !hyperspaceChan.value) {
    hyperspaceSpeed.value = true;
    hyperspaceChannelingTime.value = 0;
    setTimeout(() => {
      hyperspaceSpeed.value = false;
    }, 1000);
  }
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
}
</style>
