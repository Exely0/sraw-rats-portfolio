import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../pages/Home.vue";
import Projects from "../pages/Projects.vue";
import Background from "../components/Background.vue";
import CV from "../pages/CV.vue";
const routes: RouteRecordRaw[] = [
  { path: "/", name: "Home", component: Home },
  { path: "/projects", name: "Projects", component: Projects },
  { path: "/cv", name: "CV", component: CV },
  {
    path: "/background",
    name: "Background",
    component: Background,
  },

  { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
