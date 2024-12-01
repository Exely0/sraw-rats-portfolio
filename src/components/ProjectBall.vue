<template>
  <div
    class="project-ball absolute flex aspect-square items-center justify-center rounded-full"
    :style="{
      backgroundColor: color,
      width: size + 'px',
      transform: `translate(${position.x}px, ${position.y}px)`,
    }"
    ref="ball"
  >
    {{ name }}
  </div>
</template>

<script>
export default {
  name: "ProjectBall",
  props: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      required: true,
    },
    initialPosition: {
      type: Object,
      required: true,
    },
    initialVelocity: {
      type: Object,
      required: true,
    },
    containerBounds: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      position: { ...this.initialPosition },
      velocity: { ...this.initialVelocity },
      boundingRect: null,
    };
  },
  methods: {
    moveBall() {
      const ball = this.$refs.ball;

      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;

      const { width, height } = this.containerBounds;

      if (this.position.x <= 0 || this.position.x + this.size >= width) {
        this.velocity.x *= -1;
      }
      if (this.position.y <= 0 || this.position.y + this.size >= height) {
        this.velocity.y *= -1;
      }

      if (ball) {
        this.boundingRect = ball.getBoundingClientRect();
      }

      this.$emit("ball-data", {
        velocity: this.velocity,
        boundingRect: this.boundingRect,
      });
    },
  },
  mounted() {
    console.log("coucou");
    this.moveInterval = setInterval(this.moveBall, 16);
  },
  beforeUnmount() {
    clearInterval(this.moveInterval);
  },
};
</script>

<style scoped></style>
