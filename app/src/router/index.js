import { createRouter, createWebHistory } from "vue-router";
import {
  HomeView,
  AboutView,
  
  ContactView,
} from "../views";
import ServiceView from "../views/ServiceView.vue";

const routes = [
  { path: "/", name: "home", component: HomeView },
  { path: "/about", name: "about", component: AboutView },
  { path: "/service", name: "service", component: ServiceView },
  
  { path: "/contact", name: "contact", component: ContactView },
];

/**Initialize here */
const router = createRouter({ history: createWebHistory(), routes });

export default router;
