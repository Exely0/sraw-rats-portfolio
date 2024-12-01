<template>
  <div
    class="projects-page star-wars-bg relative h-screen w-full overflow-hidden"
    ref="container"
  >
    <ProjectBall
      v-for="(project, index) in projects"
      :key="index"
      :id="project.id"
      :name="project.name"
      :color="project.color"
      :size="project.size"
      :initialPosition="project.initialPosition"
      :initialVelocity="project.initialVelocity"
      :containerBounds="containerBounds"
      @update-rect="updateRect"
    />
  </div>
</template>

<script>
import ProjectBall from "../components/ProjectBall.vue";

export default {
  name: "Projects",
  components: {
    ProjectBall,
  },
  data() {
    return {
      projects: [
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
      ],
      containerBounds: { width: 0, height: 0 },
      ballRects: [],
    };
  },
  mounted() {
    this.updateContainerBounds();
    window.addEventListener("resize", this.updateContainerBounds);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.updateContainerBounds);
  },
  methods: {
    updateContainerBounds() {
      const container = this.$refs.container.getBoundingClientRect();
      this.containerBounds = {
        width: container.width,
        height: container.height,
      };
    },
    updateRect({ id, rect }) {
      const index = this.ballRects.findIndex((ball) => ball.id === id);

      if (index !== -1) {
        this.ballRects[index].rect = rect;
      } else {
        this.ballRects.push({ id, rect });
      }
    },
  },
};
</script>

<style scoped>
.star-wars-bg {
  background: url(../assets/intro-background.png) center/cover repeat;
}
</style>
