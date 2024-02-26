import { createRouter, createWebHistory } from "vue-router";
import Meta from 'vue-meta'

/**Define routes here */
import HomeView from "../views/HomeView.vue";
import DetailsView from "../views/DetailsView.vue";
import ShowView from "../views/ShowView.vue";

const routes = [
  { path: "/", name: "home", component: ShowView },
  //{ path: "/show", name: "show", component: HomeView },
  //{ path: "/posts/:id", name: "details", component: DetailsView,  props: true },
];

/**Initialize here */
const router = createRouter({ history: createWebHistory(), routes });
Vue.use(Meta);

export default router;
