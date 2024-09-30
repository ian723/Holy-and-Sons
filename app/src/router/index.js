import { createRouter, createWebHistory } from "vue-router";
import {
  HomeView,
  AboutView,
  DronesView,
  ServicesView,
  ContactView,
} from "../views";

const routes = [
  { path: "/", name: "home", component: HomeView },
  { path: "/about", name: "about", component: AboutView },
  { path: "/drones", name: "drones", component: DronesView },
  { path: "/drones/:id", name: "drone", component: DronesView },
  { path: "/services", name: "services", component: ServicesView },
  { path: "/contact", name: "contact", component: ContactView },
];

/**Initialize here */
const router = createRouter({ history: createWebHistory(), routes });

export default router;
