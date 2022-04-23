import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ProductsIndex from "../views/ProductsIndex.vue";
import ProductNew from "../views/ProductNew.vue";
import ProductShow from "../views/ProductShow.vue";
import ProductEdit from "../views/ProductEdit.vue";
import SignupView from "../views/SignupView.vue";
import LoginView from "../views/LoginView.vue";
import LogoutView from "../views/LogoutView.vue";

const routes = [
  { path: "/", name: "home", component: HomeView },
  { path: "/about", name: "about", component: AboutView },
  { path: "/products", name: "products-index", component: ProductsIndex },
  { path: "/products/new", name: "products-new", component: ProductNew },
  { path: "/products/:id", name: "products-show", component: ProductShow },
  { path: "/products/:id/edit", name: "products-edit", component: ProductEdit },
  { path: "/signup", name: "signup", component: SignupView },
  { path: "/login", name: "login", component: LoginView },
  { path: "/logout", name: "logout", component: LogoutView },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
